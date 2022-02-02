type marking = Unmarked | Left | Right | Mix
type connective =
    Empty
  | Leaf of Graph.atom
  | Par
  | Tensor
  | Prime
type tree = {
  connective : connective;
  mark : marking;
  successors : tree list;
  id : int;
}
val tree_nodes : tree -> Graph.atom list
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
  Graph.atom list -> zipper -> zipper list
val share_parent : zipper -> zipper -> bool
val maximal_subtree :
  zipper -> Graph.atom list -> zipper list
val maximal_subtrees :
  zipper list -> Graph.atom list -> zipper list
val parents : zipper list -> zipper list
val unify : tree list -> zipper -> zipper
val is_root : zipper -> bool
val replace_by_list :
  zipper list -> zipper -> zipper list -> zipper list
val replace_children : zipper list -> zipper -> tree list -> zipper list
val mark_ancestors : zipper -> marking -> zipper
val mark_children : zipper -> marking -> zipper
val unfold : zipper list -> marking -> zipper list
val delete_marked : zipper list -> zipper list
val remove_marks : zipper -> zipper