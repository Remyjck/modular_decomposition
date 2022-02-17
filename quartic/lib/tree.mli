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

val successors : tree -> tree list

val tree_from_condensed : Graph.graph -> Graph.state -> tree