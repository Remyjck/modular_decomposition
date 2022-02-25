open Core_kernel

type id_graph = {
    nodes : int list;
    edges : (int * int) list;
}

type connective =
  | Tensor of tree list
  | Par of tree list
  | Prime of id_graph * (tree list)
  | Atom of Graph.atom

and tree = {
    connective : connective;
    id: int;
    }

let successors tree =
  match tree.connective with
  | Atom _ -> []
  | Tensor tl -> tl
  | Par tl -> tl
  | Prime (_, tl) -> tl

let remove_id id map =
  Map.remove map id |> Map.map ~f:(fun v -> Set.remove v id)

let from_map map =
  let nodes = Map.keys map in
  let edges =
    let rec id_tuples_from_map (map : Graph.IMap.t) =
      if Map.is_empty map then
        []
      else
        let id, id_neighbours = Map.min_elt_exn map in
        let new_imap = remove_id id map in
        let new_edges = Set.fold id_neighbours
          ~init:[]
          ~f:(fun accum id2 -> (id, id2) :: accum)
        in
        new_edges @ id_tuples_from_map new_imap
    in
    id_tuples_from_map map
  in
  {nodes = nodes; edges = edges}
          
let rec tree_from_id id (state : Graph.state) =
  let vertex : Graph.vertex = Hashtbl.find_exn state.id_map id in
  match vertex.connective with
  | Graph.Atom atom -> {connective = Atom atom; id = vertex.id}
  | Graph.Tensor iset -> 
    let tree_list = trees_from_id_list (Set.elements iset) state in
    {connective = Tensor tree_list; id = vertex.id}
  | Graph.Par iset ->
    let tree_list = trees_from_id_list (Set.elements iset) state in
    {connective = Par tree_list; id = vertex.id}
  | Graph.Prime map ->
    let id_graph = from_map map in
    let tree_list = trees_from_id_list id_graph.nodes state in
    {connective = Prime (id_graph, tree_list); id = vertex.id}

and trees_from_id_list id_list state =
  List.map id_list ~f:(Util.flip tree_from_id state)

let tree_from_condensed (graph : Graph.graph) state =
  let () = assert(Graph.VSet.length graph.nodes = 1) in
  let root = Graph.VSet.choose_exn graph.nodes in
  match root.connective with
  | Graph.Atom atom -> {connective = Atom atom; id = root.id}
  | Graph.Tensor iset -> 
    let tree_list = trees_from_id_list (Set.elements iset) state in
    {connective = Tensor tree_list; id = root.id}
  | Graph.Par iset ->
    let tree_list = trees_from_id_list (Set.elements iset) state in
    {connective = Par tree_list; id = root.id}
  | Graph.Prime map ->
    let id_graph = from_map map in
    let tree_list = trees_from_id_list id_graph.nodes state in
    {connective = Prime (id_graph, tree_list); id = root.id}