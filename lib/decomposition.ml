open Tree

type direction = 
  | Left
  | Right

let unficiation a p = 
  match a with
  | [] -> failwith "Found parent with no child"
  | [t] -> change p t
  | tl -> unify tl p

let partition p tj =
  let t_ids = List.map (fun t -> t.tree.id) tj in
  List.partition 
    (fun t -> List.mem t.id t_ids)
    p.tree.successors

let refine forest x direction = 
  let (mark : marking) = match direction with 
    | Left -> Left
    | Right -> Right
  in
  let max_subtrees = maximal_subtrees forest x in
  let parent_nodes = parents max_subtrees in
  let rec refine_iter parent_list forest =
    match parent_list with
    | [] -> forest
    | pi :: t ->
      let new_forest = 
        match pi.tree.connective with
        | Prime -> 
          let new_pi =
            mark_ancestors pi mark |> Util.flip mark_children mark
          in
          replace_by_list forest pi [new_pi] 
        | _ ->
          let (a,b) = partition pi max_subtrees in
          let ta = unficiation a pi |> Util.flip mark_ancestors mark in
          let tb = unficiation b pi |> Util.flip mark_ancestors mark in
          if is_root pi then 
            let replacement = match direction with
            | Left -> [ta; tb]
            | Right -> [tb; ta]
            in
            replace_by_list forest pi replacement
          else
            replace_children forest pi [ta.tree; tb.tree]
      in
      refine_iter t new_forest
  in
  refine_iter parent_nodes forest
