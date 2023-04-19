open Base
open Util

let (=) = Poly.(=)

type atom = {
    label : string;
    pol : bool;
  }
  [@@deriving compare, sexp, hash]

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

let getLabel vertex =
  match vertex.connective with
  | Atom atom -> atom.label
  | Tensor _ -> "⊗"
  | Par _ -> "⅋"
  | Prime _ -> "prime"

module Vertex = struct
  module T = struct
    type t = vertex [@@deriving compare, sexp, hash]
    let show t = Stdio.printf "%s %d" (getLabel t) t.id
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

module VSet = struct
  module T = struct
    type t = Base.Set.M(Vertex).t [@@deriving compare, sexp, hash]
  end
  include T
  include Comparable.Make(T)
end

module VMap = struct
  type t = VSet.t Base.Map.M(Vertex).t
end

type verticies = VSet.t
type edges = VMap.t



type graph = {
    nodes : verticies;
    edges : edges;
  }

let empty_vertex_set (): verticies = Set.empty (module Vertex)
let empty_vertex_map (): edges = Map.empty (module Vertex)

let empty_graph () = {nodes=empty_vertex_set (); edges=empty_vertex_map () }

let singleton v : verticies= Set.singleton (module Vertex) v

let add_vertex vertex graph =
    {nodes = Set.add graph.nodes vertex; edges = graph.edges}



(** [graph_difference graph vertices]: subgraph of [graph] that contains all vertices not in
    [vertices] *)
let graph_difference graph (vertices: verticies) =
  let nodes = Set.diff graph.nodes vertices in
  let edges = complement_map vertices graph.edges in
  {nodes = nodes; edges = edges}

let find_or_empty map v =
  match Map.find map v with
  | None -> empty_vertex_set ()
  | Some vset -> vset

(** [successors graph vertices]: set of vertices to which [vertices] is
    connected *)
let successors graph (vertices: verticies) : verticies =
    Set.fold vertices
      ~init:(empty_vertex_set ())
      ~f:(fun accum v ->
        let to_add =
          match Map.find graph.edges v with
          | None -> empty_vertex_set ()
          | Some vset -> vset
        in
        Set.union accum to_add)
    |> Fn.flip Set.diff vertices

(** [connect_vertices vertices vertex graph]: for a given [graph],
    add edges connecting every element of [vertices] to [vertex] *)
let connect_vertices_to_vertex (vertices:verticies) vertex graph =
  let () = assert(Set.mem graph.nodes vertex) in
  let () = assert(Set.for_all vertices ~f:(Set.mem graph.nodes)) in
  let edges = Set.fold vertices ~init:graph.edges ~f:(fun accum v ->
    Map.update accum v ~f:(function
    | None -> singleton vertex
    | Some vset -> Set.add vset vertex))
  in
    let edges = Map.update edges vertex ~f:(function
    | None -> vertices
    | Some vset -> (Set.union vset vertices))
  in
  {nodes=graph.nodes; edges=edges}

let connect_vertices v1 v2 g =
  let rec aux rem acc = match Set.find rem ~f:(fun _ -> true) with
  | None -> acc
  | Some v -> aux (Set.remove rem v) (connect_vertices_to_vertex v2 v acc) in
  aux v1 g


(** [induced_subgraph graph vertices]: subgraph of [graph] that contains only
    the vertices in [vertices]  *)
let induced_subgraph graph (vertices: verticies) =
  let edges = intersect_map vertices graph.edges in
  {nodes = vertices; edges = edges}

(** [remove_vertex_edges]: given a mapping [edges], remove [vertex] from
  its keys and values  *)
let remove_vertex_edges (edges:edges) vertex : edges =
  Map.remove edges vertex |> Map.map ~f:(Fn.flip Set.remove vertex)

let remove_vertices_edges (vertices: verticies) edges =
  Set.fold vertices ~init:edges ~f:remove_vertex_edges

(** [edge_tuple_list edges]: given a mapping [edges],
    return a corresponding list of edges  *)
let rec edge_tuple_list (edge_map: edges) =
  if Map.is_empty edge_map then
    []
  else
    let vi, vi_neighbours = Map.min_elt_exn edge_map in
    let new_edges = Set.fold vi_neighbours
      ~init:[]
      ~f:(fun accum vj -> (vi, vj) :: accum)
    in
    let new_edge_map = remove_vertex_edges edge_map vi
    in
    new_edges @ edge_tuple_list new_edge_map

let add_or_init y (v:verticies option): verticies option=
  match v with
  | None -> Some (singleton y)
  | Some z -> Some (Set.add z y)

(** [edge_map ~reverse edge_tuple_list]: given a list of edges [edge_tuple_list],
    return a corresponding mapping, if [reverse] then the mapping is from targets to sources *)
let edge_maps edge_tuple_list : edges =
  let rec edge_list_to_map edges map =
    match edges with
    | [] -> map
    | (x, y) :: t ->
      let new_map = Map.change map y ~f:(add_or_init x) in
      edge_list_to_map t new_map
  in
  edge_list_to_map edge_tuple_list (empty_vertex_map ())

let to_graph vertex_list edge_list =
  let nodes = List.fold vertex_list
    ~init:(empty_vertex_set ())
    ~f:(fun acum v -> Set.add acum v)
  in
  let edges = edge_maps edge_list in
  {nodes; edges}

let vset_to_iset (vset : verticies) : ISet.t =
  Set.map (module Int) vset ~f:(fun v -> v.id)

let vmap_to_imap (map: edges) (nodes:verticies) : IMap.t =
  let empty_map = Set.fold nodes ~init:(Map.empty (module Int))
    ~f:(fun accum vertex ->
      Map.add_exn accum ~key:vertex.id ~data:(Set.empty (module Int)))
  in
  Map.fold map
    ~init:empty_map
    ~f:(fun ~key:k ~data:v accum ->
      let data = vset_to_iset v in
      Map.update accum k.id ~f:(function
        | None -> data
        | Some iset -> Set.union iset data))

(** [id_map vset]: returns a map from the [id]s of the elements of [vset] to
    the elements themselves *)
let id_map (vset: verticies) =
  Set.fold vset
    ~init:(Map.empty (module Int))
    ~f:(fun accum vertex ->
      Map.add_exn accum ~key:vertex.id ~data:vertex)

let is_dual_atom (a:atom) (b:atom) = a.pol = not b.pol && a.label = b.label

let equal_graph g1 g2 = (VSet.equal g1.nodes g2.nodes) && (Map.equal (VSet.equal) g1.edges g2.edges)

let is_empty g = (Set.is_empty g.nodes) && (Map.is_empty g.edges)
