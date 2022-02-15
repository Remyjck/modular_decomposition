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
  map |> Graph.IMap.remove id |> Graph.IMap.map (Graph.ISet.remove id)

let from_map map =
  let nodes = Graph.IMap.bindings map |> List.map (fun (key, _) -> key) in
  let edges =
    let rec id_tuples_from_map map =
      if Graph.IMap.is_empty map then
        []
      else
        let id, id_neighbours = Graph.IMap.choose map in
        let new_imap = remove_id id map in
        let new_edges = Graph.ISet.fold (fun id2 -> List.cons (id, id2)) id_neighbours [] in
        new_edges @ id_tuples_from_map new_imap
    in
    id_tuples_from_map map
  in
  {nodes = nodes; edges = edges}
          
let rec tree_from_id imap id =
  let vertex : Graph.vertex = Graph.IMap.find id imap in
  match vertex.connective with
  | Graph.Atom atom -> {connective = Atom atom; id = vertex.id}
  | Graph.Tensor iset -> 
    let tree_list = trees_from_id_list imap (Graph.ISet.elements iset) in
    {connective = Tensor tree_list; id = vertex.id}
  | Graph.Par iset ->
    let tree_list = trees_from_id_list imap (Graph.ISet.elements iset) in
    {connective = Tensor tree_list; id = vertex.id}
  | Graph.Prime map ->
    let id_graph = from_map map in
    let tree_list = trees_from_id_list imap id_graph.nodes in
    {connective = Prime (id_graph, tree_list); id = vertex.id}

and trees_from_id_list imap id_list =
  List.map (tree_from_id imap) id_list

let tree_from_condensed (graph : Graph.graph) imap =
  let () = assert(Graph.VSet.cardinal graph.nodes = 1) in
  let root = Graph.VSet.choose graph.nodes in
  match root.connective with
  | Graph.Atom atom -> {connective = Atom atom; id = root.id}
  | Graph.Tensor iset -> 
    let tree_list = trees_from_id_list imap (Graph.ISet.elements iset) in
    {connective = Tensor tree_list; id = root.id}
  | Graph.Par iset ->
    let tree_list = trees_from_id_list imap (Graph.ISet.elements iset) in
    {connective = Par tree_list; id = root.id}
  | Graph.Prime map ->
    let id_graph = from_map map in
    let tree_list = trees_from_id_list imap id_graph.nodes in
    {connective = Prime (id_graph, tree_list); id = root.id}