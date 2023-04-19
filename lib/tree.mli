type connective =
    Atom of Graph.atom
  | Tensor of tree list
  | Par of tree list
  | Prime of Id_graph.id_graph * tree list
and tree = { connective : connective; id : int; }
val successors : tree -> tree list
val from_map : Util.IMap.t -> Id_graph.id_graph
val tree_to_graph : tree -> Graph.graph
val empty_tree: int -> tree
