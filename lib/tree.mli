type connective =
    Atom of Graph.atom
  | Tensor of tree list
  | Par of tree list
  | Prime of Id_graph.id_graph * tree list
and tree = { connective : connective; id : int; }
val successors : tree -> tree list
val from_map : Util.IMap.t -> Id_graph.id_graph
val tree_from_condensed : Graph.graph -> Graph.state -> tree option
val tree_to_graph : tree -> Graph.graph
val tree_from_graph : Graph.graph -> Graph.state -> tree option
val show : tree -> unit
val is_dual: tree -> tree -> bool
val struct_equal: tree -> tree -> bool
val is_empty: tree -> bool
val simplify: tree -> Graph.state -> tree option
