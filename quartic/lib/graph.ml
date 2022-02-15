
type atom = 
  {
    label : string;
    pol : bool;
  }

module IMap = Map.Make(Int)
module ISet = Set.Make(Int)

type node =
  | Atom of atom
  | Tensor of ISet.t
  | Par of ISet.t
  | Prime of ISet.t IMap.t

type vertex = 
  {
    connective : node;
    id : int;
  }

module Vertex = struct
  type t = vertex
  let compare v1 v2 = Int.compare v1.id v2.id
end

module VMap = Map.Make(Vertex)
module VSet = Set.Make(Vertex)

type graph =
  {
    nodes : VSet.t;
    edges : VSet.t VMap.t;
  }

let total_vertices = ref 0

let fresh_id = 
  total_vertices := !total_vertices + 1;
  !total_vertices - 1

(** [add_vertex vertex graph]: remove [vertex] from [graph] in both the nodes and edges *)
let add_vertex vertex graph =
  {nodes = VSet.add vertex graph.nodes; edges = graph.edges}

(** [remove_vertex vertex edges]: given a mapping [edges], remove [vertex] from its keys and values  *)
let remove_vertex v edges =
  edges |> VMap.remove v |> VMap.map (VSet.remove v)

(** [connect_vertices vertices vertex graph]: for a given [graph],
    add [vertex] to the neighbourhoods of all vertices in [vertices]*)
let connect_vertices vertices vertex graph =
  let updated_vertex_neighbours = 
    VMap.update vertex
      (fun vset ->
        match vset with
        | None -> raise Not_found
        | Some vset -> (Some (VSet.union vset vertices)))
      graph.edges
  in
  let updated_vertices_neighbours =
    VSet.fold 
      (fun v ->
        VMap.update v (fun vset ->
          match vset with
          | None -> raise Not_found
          | Some vset -> Some(VSet.add vertex vset)))
      vertices
      updated_vertex_neighbours
  in
  {nodes = graph.nodes; edges = updated_vertices_neighbours}

(** [<~> graph vertices]: subgraph of [graph] that contains all vertices not in [vertices] *)
let (<~>) graph vertices =
  let nodes = VSet.diff graph.nodes vertices in
  let edges =
    VMap.filter (fun v _ -> not (VSet.mem v vertices)) graph.edges
    |> VMap.map (fun s -> VSet.diff s vertices)
  in
  {nodes = nodes; edges = edges}

(** [induced_subgraph graph vertices]: subgraph of [graph] that contains only the vertices in [vertices]  *)
let induced_subgraph graph vertices =
  let edges = 
    VMap.filter (fun v _ -> (VSet.mem v vertices)) graph.edges
    |> VMap.map (fun s -> VSet.inter s vertices)
  in
  {nodes = vertices; edges = edges}

(** [connected graph vertices]: set of vertices to which [vertices] is connected *)
let connected graph vertices =
    VSet.fold (fun v -> VMap.find v graph |> VSet.union) vertices VSet.empty

(** [w G H h]: set of vertices of [G <~> H] to which [h] is connected *)
let w g h v =
  VMap.find v (g <~> h).edges 
  
(** [is_module G H]: checks if [H] is a module of [G] *)  
let is_module g h =
  let connected = VSet.choose h |> w g h in
  VSet.for_all (fun v -> connected = w g h v)

(** [edge_tuple_list edges]: given a mapping [edges], return a corresponding list of edges (non-repeating) *)
let rec edge_tuple_list edge_map =
  if VMap.is_empty edge_map then
    []
  else
    let vi, vi_neighbours = VMap.choose edge_map in
    let new_edge_map = remove_vertex vi edge_map in
    let new_edges = VSet.fold (fun vj -> List.cons (vi, vj)) vi_neighbours [] in
    new_edges @ edge_tuple_list new_edge_map

let add_or_init new_elem y = 
  match y with
  | None -> Some (VSet.singleton new_elem)
  | Some z -> Some (VSet.add new_elem z)

(** [edge_map edge_tuple_list]: given a list of edges [edge_tuple_list], return a corresponding mapping *)
let edge_map edge_tuple_list =
  let rec edge_list_to_map edges map = 
    match edges with
    | [] -> map
    | (x, y) :: t -> 
      let map1 = VMap.update x (add_or_init y) map in
      let map2 = VMap.update y (add_or_init y) map1 in
      edge_list_to_map t map2
  in
  edge_list_to_map edge_tuple_list VMap.empty

let vset_to_iset vset =
  VSet.fold (fun v -> ISet.add v.id) vset ISet.empty

let iset_to_vset map iset =
  ISet.fold (fun i -> VSet.add (IMap.find i map)) iset VSet.empty

let vmap_to_imap map =
  VMap.fold
    (fun k v -> IMap.add k.id (vset_to_iset v))
    map
    IMap.empty

(** [id_map vset]: returns a map from the [id]s of the elements of [vset] to the elements themselves *)
let id_map vset =
  VSet.fold (fun vertex -> IMap.add vertex.id vertex) vset IMap.empty

let vertex_neighbour_pairs v edge_map =
  List.map 
    (fun vi ->
      let vi_neighbours = VMap.find vi edge_map in
      let vj = VSet.choose vi_neighbours in
      VSet.of_list [vi; vj])
    v
