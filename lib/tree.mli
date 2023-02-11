type id_graph = { nodes : int list; edges : (int * int) list; }
type connective =
    Atom of Graph.atom
  | Tensor of tree list
  | Par of tree list
  | Prime of id_graph * tree list
and tree = { connective : connective; id : int; }
val successors : tree -> tree list
val from_map : Util.IMap.t -> id_graph
val tree_from_condensed : Graph.graph -> Graph.state -> tree option
val tree_to_graph : tree -> Graph.graph
val tree_from_graph : Graph.graph -> Graph.state -> tree option
val show : tree -> unit
