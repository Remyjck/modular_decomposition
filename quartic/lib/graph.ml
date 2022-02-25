open Core_kernel

type atom = {
    label : string;
    pol : bool;
  }
  [@@deriving compare, sexp, hash]

module ISet = struct
  type t = Core_kernel.Set.M(Int).t [@@deriving compare, sexp, hash]
end
include Comparable.Make(ISet)
include Hashable.Make(ISet)

module IMap = struct
  type t = ISet.t Core_kernel.Map.M(Int).t [@@deriving compare, sexp, hash]
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
  module T = struct
    type t = vertex [@@deriving compare, sexp, hash]
  end
  include T
  include Comparable.Make(T)
end

let vertex_index elem l =
  let rec index_r elem l i =
    match l with
    | [] -> raise_s [%message "error" "Vertex not found when looking for index"]
    | h :: t ->
      if Vertex.equal h elem then i else index_r elem t (i+1)
  in
  index_r elem l 0

module VSet = Core_kernel.Set.Make(Vertex)
module VMap = Core_kernel.Map.Make(Vertex)

type graph = {
    nodes : VSet.t;
    edges : VSet.t VMap.t;
  }

type state = {
  mutable total_vertices : int;
  id_map : (int, Vertex.t) Hashtbl.t;
}

let fresh_id state = 
  state.total_vertices <- state.total_vertices + 1;
  state.total_vertices

let add_vertices_to_hash vertices state =
  VSet.iter vertices
  ~f:(fun v -> Hashtbl.add_exn state.id_map ~key:v.id ~data:v)

(** [add_vertex vertex graph]: remove [vertex] from [graph] in both the nodes 
    and edges *)
let add_vertex vertex graph =
  {nodes = VSet.add graph.nodes vertex; edges = graph.edges}

(** [remove_vertex vertex edges]: given a mapping [edges], remove [vertex] from 
    its keys and values  *)
let remove_vertex_edges v edges =
  VMap.remove edges v |> VMap.map ~f:(Util.flip VSet.remove v)

let remove_vertex v graph =
  let new_nodes = VSet.remove graph.nodes v in
  let new_edges = remove_vertex_edges v graph.edges in 
  {nodes = new_nodes; edges = new_edges}

let disjoint s1 s2 =
  let diff = VSet.diff s1 s2 in (* O(l1 + l2) *)
  VSet.equal s1 diff (* O(l1 + l2) *)

(** [<~> graph vertices]: subgraph of [graph] that contains all vertices not in 
    [vertices] *)
let (<~>) graph vertices =
  let nodes = VSet.diff graph.nodes vertices in
  let edges =
    VMap.filter_keys graph.edges ~f:(fun v -> not (VSet.mem vertices v))
    |> VMap.map ~f:(fun s -> VSet.diff s vertices)
  in
  {nodes = nodes; edges = edges}

(** [connected graph vertices]: set of vertices to which [vertices] is 
    connected *)
let connected graph vertices =
    VSet.fold vertices
      ~init:VSet.empty
      ~f:(fun accum v -> 
        let to_add = 
          match VMap.find graph.edges v with
          | None -> VSet.empty
          | Some vset -> vset
        in
        VSet.union accum to_add)
    |> Util.flip VSet.diff vertices

(** [replace graph vertices vertex]: replace all vertices in [vertices] by 
    [vertex] in [graph] *)
let replace graph h vertex state =
  let () = assert(Core_kernel.Set.is_subset h ~of_:graph.nodes) in
  let () = add_vertices_to_hash h state in
  let new_neighbours = connected graph h in
  let new_nodes = VSet.diff graph.nodes h |> Util.flip VSet.add vertex in
  let removed_keys =
    VMap.filter_keys graph.edges ~f:(fun v -> not (VSet.mem h v))
  in
  let removed_edges = 
    VMap.map removed_keys 
    ~f:(fun s -> 
      if disjoint s h then
        s
      else
        VSet.add s vertex |> Util.flip VSet.diff h)
  in
  let new_edges = VMap.add_exn removed_edges ~key:vertex ~data:new_neighbours in
  {nodes = new_nodes; edges = new_edges}

(** [connect_vertices vertices vertex graph]: for a given [graph],
    add [vertex] to the neighbourhoods of all vertices in [vertices]*)
let connect_vertices vertices vertex graph =
  let () = assert(VSet.mem graph.nodes vertex) in
  let () = assert(VSet.for_all vertices ~f:(VSet.mem graph.nodes)) in
  let updated_vertex_neighbours = 
    VMap.update graph.edges vertex
      ~f:(fun vset ->
        match vset with
        | None -> vertices
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
            | None -> VSet.singleton vertex
            | Some vset -> VSet.add vset vertex))
  in
  {nodes = graph.nodes; edges = updated_vertices_neighbours}

(** [induced_subgraph graph vertices]: subgraph of [graph] that contains only 
    the vertices in [vertices]  *)
let induced_subgraph graph vertices =
  let edges = 
    VMap.filter_keys graph.edges ~f:(fun v -> VSet.mem vertices v)
    |> VMap.map ~f:(fun s -> VSet.inter s vertices)
  in
  {nodes = vertices; edges = edges}

(** [w G H h]: set of vertices of [G <~> H] to which [h] is connected *)
let w g h v =
  let new_h = VSet.remove h v in
  match VMap.find (g <~> new_h).edges v with
  | None -> VSet.empty
  | Some vset -> vset
  
(** [is_module G H]: checks if [H] is a module of [G] *)  
let is_module g h =
  let connected = 
    match VSet.choose h with
    | None -> VSet.empty
    | Some v -> 
    w g h v
  in
  VSet.for_all h 
    ~f:(fun v -> 
      let v_connected = w g h v in
      VSet.equal connected v_connected)

(** [edge_tuple_list edges]: given a mapping [edges], return a corresponding 
    list of edges (non-repeating) *)
let rec edge_tuple_list edge_map =
  if VMap.is_empty edge_map then
    []
  else
    let vi, vi_neighbours = VMap.min_elt_exn edge_map in
    let new_edge_map = remove_vertex_edges vi edge_map in
    let new_edges = VSet.fold vi_neighbours
      ~init:[]
      ~f:(fun accum vj -> (vi, vj) :: accum) in
    new_edges @ edge_tuple_list new_edge_map

let add_or_init v y = 
  match v with
  | None -> Some (VSet.singleton y)
  | Some z -> Some (VSet.add z y)

(** [edge_map edge_tuple_list]: given a list of edges [edge_tuple_list], 
    return a corresponding mapping *)
let edge_map edge_tuple_list =
  let rec edge_list_to_map edges map = 
    match edges with
    | [] -> map
    | (x, y) :: t -> 
      let map1 = VMap.change map x ~f:(fun v -> add_or_init v y) in
      let map2 = VMap.change map1 y ~f:(fun v -> add_or_init v x) in
      edge_list_to_map t map2
  in
  edge_list_to_map edge_tuple_list VMap.empty

let vset_to_iset vset =
  Core_kernel.Set.map (module Int) vset ~f:(fun v -> v.id)

let iset_to_vset map iset =
  Core_kernel.Set.map (module Vertex) iset ~f:(fun i -> Map.find_exn map i)

let vmap_to_imap map =
  VMap.fold map
    ~init:(Core_kernel.Map.empty (module Int))
    ~f:(fun ~key:k ~data:v accum ->
      let data = vset_to_iset v in
      Core_kernel.Map.add_exn accum ~key:k.id ~data:data)

(** [id_map vset]: returns a map from the [id]s of the elements of [vset] to 
    the elements themselves *)
let id_map vset =
  VSet.fold vset
    ~init:(Core_kernel.Map.empty (module Int)) 
    ~f:(fun accum vertex -> 
      Core_kernel.Map.add_exn accum ~key:vertex.id ~data:vertex)

(** [vertex_neighbour_pairs vertices edge_map]: return an assoc list from every 
    vertex to one of its neighbours *)
let vertex_neighbour_pairs v edge_map =
  List.map v 
    ~f:(fun vi ->
      let vi_neighbours = VMap.find_exn edge_map vi in
      let vj = VSet.choose vi_neighbours in
      match vj with
      | None -> VSet.singleton vi
      | Some vj -> VSet.of_list [vi; vj])
