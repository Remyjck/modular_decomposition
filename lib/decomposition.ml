open Tree

type direction = 
  | Left
  | Right

let unficiation a p= 
  match a with
  | [] -> failwith "Found parent with no child"
  | [t] -> top_tree t
  | tl -> unify tl p

let refine forest x direction = 
  let max_subtrees = maximal_subtrees forest x in
  let parent_nodes = parents max_subtrees in
  let rec refine_iter parent_list forest =
    match parent_list with
    | [] -> forest
    | pi :: t ->
      let (a,b) = List.partition 
        (fun suc -> List.mem 
          suc.id 
          (List.map 
            (fun zipper -> zipper.tree.id)
            max_subtrees))
        pi.tree.successors
      in
      let ta = unficiation a pi in
      let tb = unficiation b pi in
      let (mark : marking) = match direction with 
        | Left -> Left
        | Right -> Right
      in
      let prime_nodes = (mark_ancestors ta mark) @ (mark_ancestors tb mark) in
      mark_children prime_nodes mark
      ;
      let new_forest =
        if is_root pi then 
          let replacement = match direction with
          | Left -> ta, tb
          | Right -> tb, ta
          in
          replace_by_double forest pi replacement
        else
          replace_children forest pi [ta.tree; tb.tree]
      in
      refine_iter t new_forest
  in
  refine_iter parent_nodes forest
