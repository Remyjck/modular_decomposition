open Graph

type marking = 
  | Unmarked
  | Left
  | Right
  | Mix

type connective =
  | Empty
  | Leaf of atom
  | Par
  | Tensor
  | Prime of int list list 

type tree = {
    connective : connective;
    mutable mark : marking;
    successors : tree list;
    id : int;
  }

let update_marking node mark = 
    match node.mark with
    | Unmarked -> node.mark <- mark
    | Left -> 
      (match mark with
      | Unmarked | Left -> ()
      | Right | Mix -> node.mark <- Mix)
    | Right -> 
      (match mark with
      | Unmarked | Right -> ()
      | Left | Mix -> node.mark <- Mix)
    | Mix -> ()

let tree_nodes tree = 
  let rec tree_nodes tree res =
    match tree.connective with
    | Leaf x -> x :: res
    | Empty | Par | Tensor | Prime _ ->
      List.concat_map (fun elem -> tree_nodes elem res) (tree.successors)
  in
  tree_nodes tree []

let rec maximal_subtree mdt x = 
  match mdt.connective with
  | Leaf a ->
    if List.mem a x then 
      mdt
    else 
      {connective = Empty; mark = mdt.mark; id = mdt.id; successors = []}
  | _ ->
    let subtrees = List.map 
      (fun tree -> maximal_subtree tree x)
      mdt.successors
    in
    let successor_list = List.filter 
      (fun elem -> elem.connective <> Empty )
      subtrees
    in
    match successor_list with
    | [] -> {connective = Empty; mark = mdt.mark; successors = []; id = mdt.id}
    | l -> {connective = mdt.connective; mark = mdt.mark; successors = l; id = mdt.id}
  
type path = 
  | Top
  | Node of tree * tree list * path * tree list

type zipper =
  {
    path : path;
    tree : tree;
  }

let top_tree t = {path = Top; tree = t}

let go_left z = match z.path with
  | Top -> invalid_arg "left of top"
  | Node (node, l::left, up, right) ->
    {
      path = Node(node, left, up, z.tree::right);
      tree = l;
    }
  | Node (_, [], _, _) -> invalid_arg "left of first"

let go_right z = match z.path with
  | Top -> invalid_arg "right of top"
  | Node (node, left, up, r::right) ->
    {
      path = Node(node, z.tree::left, up, right);
      tree = r;
    }
  | Node (_, _, _, []) -> invalid_arg "right of last"

let go_up z = match z.path with
  | Top -> invalid_arg "up of top"
  | Node (node, _, up, _) ->
    match node.connective with 
    | Leaf _ -> failwith "up to leaf"
    | _ -> { tree = z.tree; path = up; }

let go_down z = match z.tree.connective with
  | Leaf _ -> invalid_arg "down of leaf"
  | _ ->
    match z.tree.successors with
    | t1 :: trees -> 
      {
        path = Node(z.tree, [], z.path, trees);
        tree = t1;
      }
    | [] -> invalid_arg "down to empty"