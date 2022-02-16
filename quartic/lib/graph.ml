open Core

type atom = {
    label : string;
    pol : bool;
  }
  [@@deriving compare, sexp, hash]

module ISet = struct
  type t = Set.M(Int).t [@@deriving compare, sexp, hash]
end
include Comparable.Make(ISet)
include Hashable.Make(ISet)

module IMap = struct
  type t = ISet.t Core.Map.M(Int).t [@@deriving compare, sexp, hash]
end
include Comparable.Make(IMap)
include Hashable.Make(IMap)

type node =
  | Atom of atom
  | Tensor of ISet.t
  | Par of ISet.t
  | Prime of IMap.t
  [@@deriving compare, sexp, hash]

type vertex = {
    connective : node;
    id : int;
  }
  [@@deriving compare, sexp, hash]

module Vertex = struct
  type t = vertex [@@deriving compare, sexp, hash]
end
include Comparable.Make(Vertex)

module VSet = Core.Set.Make(Vertex)
module VMap = Core.Map.Make(Vertex)

type graph = {
    nodes : VSet.t;
    edges : VSet.t VMap.t;
  }

type state = {
  mutable total_vertices : int;
  id_map : (int, Vertex.t) Hashtbl.t;
}

let state = {total_vertices = 0; id_map = Hashtbl.create (module Int)}

let fresh_id = 
  state.total_vertices <- state.total_vertices + 1;
  state.total_vertices

let add_vertices_to_hash vertices =
  VSet.iter vertices
  ~f:(fun v -> Hashtbl.add_exn state.id_map ~key:v.id ~data:v)

(** [add_vertex vertex graph]: remove [vertex] from [graph] in both the nodes 
    and edges *)
let add_vertex vertex graph =
  {nodes = VSet.add graph.nodes vertex; edges = graph.edges}

(** [remove_vertex vertex edges]: given a mapping [edges], remove [vertex] from 
    its keys and values  *)
let remove_vertex v edges =
  VMap.remove edges v |> VMap.map ~f:(Util.flip VSet.remove v)

let disjoint s1 s2 =
  let diff = VSet.diff s1 s2 in (* O(l1 + l2) *)
  VSet.equal s1 diff (* O(l1 + l2) *)

(** [replace graph vertices vertex]: replace all vertices in [vertices] by 
    [vertex] in [graph] *)
let replace graph h vertex =
  let () = add_vertices_to_hash h in
  let new_nodes = VSet.diff graph.nodes h |> Util.flip VSet.add vertex in
  let removed_keys =
    VMap.filter_keys graph.edges ~f:(fun v -> not (VSet.mem h v))
  in
  let new_edges = 
    VMap.map removed_keys 
    ~f:(fun s -> 
      if disjoint s h then
        s
      else
        VSet.add s vertex |> Util.flip VSet.diff h)
  in
  {nodes = new_nodes; edges = new_edges}

(** [connect_vertices vertices vertex graph]: for a given [graph],
    add [vertex] to the neighbourhoods of all vertices in [vertices]*)
let connect_vertices vertices vertex graph =
  let updated_vertex_neighbours = 
    VMap.update graph.edges vertex
      ~f:(fun vset ->
        match vset with
        | None -> raise_s 
          [%message "error" "Could not find vertex in edges while connecting vertices"]
        | Some vset -> (VSet.union vset vertices))
  in
  let updated_vertices_neighbours =
    VSet.fold 
      vertices
      ~init:updated_vertex_neighbours
      ~f:(fun accum v ->
        VMap.update accum v 
          ~f:(fun vset ->
            match vset with
            | None -> raise_s 
              [%message "error" "Could not find vertex in edges while connecting vertices"]
            | Some vset -> VSet.add vset vertex))
  in
  {nodes = graph.nodes; edges = updated_vertices_neighbours}

(** [<~> graph vertices]: subgraph of [graph] that contains all vertices not in 
    [vertices] *)
let (<~>) graph vertices =
  let nodes = VSet.diff graph.nodes vertices in
  let edges =
    VMap.filter_keys graph.edges ~f:(fun v -> not (VSet.mem vertices v))
    |> VMap.map ~f:(fun s -> VSet.diff s vertices)
  in
  {nodes = nodes; edges = edges}

(** [induced_subgraph graph vertices]: subgraph of [graph] that contains only 
    the vertices in [vertices]  *)
let induced_subgraph graph vertices =
  let edges = 
    VMap.filter_keys graph.edges ~f:(fun v -> VSet.mem vertices v)
    |> VMap.map ~f:(fun s -> VSet.inter s vertices)
  in
  {nodes = vertices; edges = edges}

(** [connected graph vertices]: set of vertices to which [vertices] is 
    connected *)
let connected graph vertices =
    Set.fold vertices
      ~init:VSet.empty
      ~f:(fun accum v -> 
        VMap.find_exn graph.edges v |> VSet.union accum)

(** [w G H h]: set of vertices of [G <~> H] to which [h] is connected *)
let w g h v =
  VMap.find_exn (g <~> h).edges v
  
(** [is_module G H]: checks if [H] is a module of [G] *)  
let is_module g h =
  let connected = VSet.choose_exn h |> w g h in
  Set.for_all ~f:(fun v -> VSet.equal connected (w g h v))

(** [edge_tuple_list edges]: given a mapping [edges], return a corresponding 
    list of edges (non-repeating) *)
let rec edge_tuple_list edge_map =
  if VMap.is_empty edge_map then
    []
  else
    let vi, vi_neighbours = VMap.min_elt_exn edge_map in
    let new_edge_map = remove_vertex vi edge_map in
    let new_edges = VSet.fold vi_neighbours
      ~init:[]
      ~f:(fun accum vj -> (vi, vj) :: accum) in
    new_edges @ edge_tuple_list new_edge_map

let add_or_init new_elem y = 
  match y with
  | None -> VSet.singleton new_elem
  | Some z -> VSet.add z new_elem

(** [edge_map edge_tuple_list]: given a list of edges [edge_tuple_list], 
    return a corresponding mapping *)
let edge_map edge_tuple_list =
  let rec edge_list_to_map edges map = 
    match edges with
    | [] -> map
    | (x, y) :: t -> 
      let map1 = VMap.update map x ~f:(add_or_init y) in
      let map2 = VMap.update map1 y ~f:(add_or_init y) in
      edge_list_to_map t map2
  in
  edge_list_to_map edge_tuple_list VMap.empty

let vset_to_iset vset =
  VSet.fold vset
    ~init:(Core.Set.empty (module Int))
    ~f:(fun accum v -> Core.Set.add accum v.id)

let iset_to_vset map iset =
  VSet.fold iset
    ~init:(Set.empty)
    ~f:(fun accum i -> Set.add accum (Map.find_exn map i))

let vmap_to_imap map =
  VMap.fold map
    ~init:(Core.Map.empty (module Int))
    ~f:(fun ~key:k ~data:v accum ->
      let data = vset_to_iset v in
      Core.Map.add_exn accum ~key:k.id ~data:data)

(** [id_map vset]: returns a map from the [id]s of the elements of [vset] to 
    the elements themselves *)
let id_map vset =
  VSet.fold vset
    ~init:(Core.Map.empty (module Int)) 
    ~f:(fun accum vertex -> 
      Core.Map.add_exn accum ~key:vertex.id ~data:vertex)

let vertex_neighbour_pairs v edge_map =
  List.map v 
    ~f:(fun vi ->
      let vi_neighbours = VMap.find_exn edge_map vi in
      let vj = VSet.choose_exn vi_neighbours in
      VSet.of_list [vi; vj])
