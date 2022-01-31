type marking = Unmarked | Left | Right | Mix
type connective =
    Empty
  | Leaf of Modular_decomposition.Graph.atom
  | Par
  | Tensor
  | Prime
type tree = {
  connective : connective;
  mark : marking;
  successors : tree list;
  id : int;
}
val tree_nodes : tree -> Modular_decomposition.Graph.atom list
type path = Top | Node of tree * tree list * path * tree list
type zipper = { path : path; tree : tree; }
val top_tree : tree -> zipper
val go_left : zipper -> zipper
val go_right : zipper -> zipper
val go_up : zipper -> zipper
val go_down : zipper -> zipper
val go_through_path : zipper -> path -> zipper
val change : zipper -> tree -> zipper
val update_marking : zipper -> marking -> zipper
val zipper_children : zipper -> zipper list
val leaves_dfs :
  Modular_decomposition.Graph.atom list -> zipper -> zipper list
val share_parent : zipper -> zipper -> bool
val maximal_subtree :
  zipper -> Modular_decomposition.Graph.atom list -> zipper list
val maximal_subtrees :
  zipper list -> Modular_decomposition.Graph.atom list -> zipper list
val parents : zipper list -> zipper list
val unify : tree list -> zipper -> zipper
val is_root : zipper -> bool
val replace_by_double :
  zipper list -> zipper -> zipper * zipper -> zipper list
val replace_children : zipper list -> zipper -> tree list -> zipper list
val mark_ancestors : zipper -> marking -> zipper
val mark_children : zipper -> marking -> zipper
