open Graph

type marking = 
  | Unmarked
  | Left
  | Right
  | Mix

type connective =
  | Empty
  | Leaf of vertex
  | Par
  | Tensor
  | Prime 

type tree = {
    connective : connective;
    mark : marking;
    successors : tree list;
    id : int;
  }

let tree_nodes tree = 
  let rec tree_nodes tree res =
    match tree.connective with
    | Leaf x -> x :: res
    | Empty | Par | Tensor | Prime ->
      List.concat_map (fun elem -> tree_nodes elem res) (tree.successors)
  in
  tree_nodes tree []

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
  | Node (node, l, up, r) ->
    match node.connective with 
    | Leaf _ -> failwith "up to leaf"
    | _ -> { 
      tree = {
        connective = node.connective;
        mark = node.mark;
        successors = (List.rev l) @ (z.tree :: r);
        id = node.id;
      }; 
      path = up; 
    }

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

let rec go_to_top z =
  match z.path with
  | Top -> z
  | _ -> go_up z |> go_to_top

let go_through_path z path = 
  let rec path_from_root path acc =
    match path with
    | Top -> acc
    | Node(_, l, p, _) -> path_from_root p (go_down :: (List.map (fun _ -> go_right) l) @ acc)
  in
  let directions = path_from_root path [] in
  let rec walk z directions =
    match directions with
    | [] -> z
    | h :: t -> walk (h z) t
  in
  let top = go_to_top z in
  walk top directions

let change zipper tree = {tree = tree; path = zipper.path}

let change_marking z m =
  let tree = 
    {
      connective = z.tree.connective;
      mark = m;
      successors = z.tree.successors;
      id = z.tree.id
    }
  in
  change z tree

let update_marking z m =
  let new_mark = 
  match z.tree.mark with 
  | Unmarked -> m
  | Left ->
    (match m with 
    | Right -> Mix
    | mark -> mark)
  | Right ->
    (match m with
    | Left -> Mix
    | mark -> mark)
  | Mix -> Mix
  in
  change_marking z new_mark

let zipper_children z = 
  try
    let first_child = go_down z in
    let rec all_right z = 
      try
        let next = go_right z in
        z :: (all_right next)
      with
        _ -> [z]
    in
    all_right first_child
  with
    _ -> []

let rec leaves_dfs x z = match z.tree.connective with
  | Leaf a -> if List.mem a x then [z] else []
  | _ -> List.concat_map (leaves_dfs x) (zipper_children z) 

let share_parent z1 z2 = 
  try
    let p1 = go_up z1 in
    let p2 = go_up z2 in
    p1.tree.id = p2.tree.id
  with _ -> false

let maximal_subtree z x =
  let leaves = leaves_dfs x z in
  let rec join forest prev res changed =
    match forest with
    | [] -> 
      let result =
        match prev with
        | None -> res
        | Some z -> z :: res
      in
      if changed then
        join result None [] false
      else
        result
    | h :: t ->
      match prev with 
      | None -> join t (Some h) [] changed
      | Some z -> if share_parent h z then 
          let parent = try go_up h with _ -> h in
          join t (Some h) (parent :: res) true
        else
          join t (Some h) (z :: res) changed
  in
  join leaves None [] false

let maximal_subtrees forest x = 
  List.concat_map 
    (fun zipper -> maximal_subtree zipper x)
    forest

let parents forest = List.map go_up forest

let unify tl zipper =
  {
  path = zipper.path;
  tree = 
    {
      connective = zipper.tree.connective;
      mark = Unmarked;
      successors = tl;
      id = 0; (* TODO: add id generation *)
    }
  }

let is_root zipper = 
  match zipper.path with
  | Top -> true
  | _ -> false

let replace_by_list forest replacee replacements = 
  let rec replace forest =
    match forest with
    | [] -> []
    | h :: t ->
      if h.tree.id = replacee.tree.id then
        replacements @ t 
      else
        h :: (replace t)
  in
  replace forest

let replace_children forest replacee children = 
  let og_id = replacee.tree.id in
  let new_tree = 
    {
      path = replacee.path;
      tree = {
        connective = replacee.tree.connective;
        mark = replacee.tree.mark;
        successors = children;
        id = replacee.tree.id;
      }
    }
  in
  let rec replace forest =
    match forest with
    | [] -> []
    | h :: t ->
      if h.tree.id = og_id then
        new_tree :: t
      else
        h :: (replace t)
  in
  replace forest

let rec mark_to_top z mark =
  match z.path with 
  | Top -> update_marking z mark
  | _ -> update_marking z mark |> go_up |> Util.flip mark_to_top mark

let mark_ancestors z mark =
  let path = z.path in
  let top = mark_to_top z mark in
  go_through_path top path

let rec mark_children z mark =
  match z.tree.connective with
  | Leaf _ -> update_marking z mark
  | _ ->
    let first_child = go_down z |> Util.flip update_marking mark in
    let rec mark_siblings z mark =
      try
        let next = go_right z |> Util.flip update_marking mark in
        let marked_children = mark_children next mark in
        mark_siblings marked_children mark
      with
        _ -> z
    in
    mark_siblings first_child mark |> go_up

let remove_marks z =
  mark_ancestors z Unmarked |> Util.flip mark_children Unmarked 

let delete_marked forest =
  let rec delete_marked forest res change =
    match forest with
    | [] -> if change 
      then delete_marked (List.rev res) [] false
      else List.rev res
    | h :: t ->
      match h.tree.mark with
      | Unmarked -> delete_marked t (h :: res) change
      | _ ->
        match h.tree.successors with
        | [] ->
          (match h.tree.connective with
          | Leaf _ -> delete_marked t (h :: res) change
          | _ -> delete_marked t res change)
        | [c] -> delete_marked t (top_tree c :: res) true
        | _ -> delete_marked t (h :: res) change
  in
  delete_marked forest [] false

let delete_from_children z c =
  let rec new_children tl c =
    match tl with
    | [] -> []
    | h :: t ->
      if h = c then t
      else h :: new_children t c
  in
  let new_tree = 
    {
      connective = z.tree.connective;
      mark = z.tree.mark;
      successors = new_children z.tree.successors c;
      id = z.tree.id;
    }
  in
  change z new_tree

let unfold forest mark =
  let rec unfold forest mark res changed =
    match forest with
    | [] -> if changed
      then unfold (List.rev res) mark [] false
      else List.rev res
    | h :: t ->
      if h.tree.mark = mark || h.tree.mark = Mix
      then 
        let marked_child = List.find_opt
          (fun t -> t.mark = mark || t.mark = Mix)
          h.tree.successors
        in
        match marked_child with
        | None -> unfold t mark (h :: res) changed
        | Some c ->
          let new_h = delete_from_children h c in
          match mark with
          | Left -> unfold t mark (new_h :: top_tree c :: res) true
          | Right -> unfold t mark (top_tree c :: new_h :: res) true
          | _ -> failwith "unfolded forest on unexpected mark"
      else
        unfold t mark (h :: res) true
  in
  unfold forest mark [] false