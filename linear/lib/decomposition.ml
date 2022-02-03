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

(* TODO: direction only indicates the placement of v relative to x,
   still need to check placement of the tree being refined *)
let refine forest alpha direction = 
  let (mark : marking) = match direction with 
    | Left -> Left
    | Right -> Right
  in
  let max_subtrees = maximal_subtrees forest alpha in
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

let rec position v x forest =
  match forest with
  | [] -> failwith "Neither vertex nor x found"
  | h :: t ->
    let nodes = tree_nodes h.tree in
    if List.mem v nodes then
      Left
    else if List.mem x nodes then
      Right
    else
      position v x t

let active_edges graph v forest x =
  let rec siblings v forest =
    match forest with
    | [] -> failwith "Parent of v not found"
    | h :: t ->
      let potential_siblings = tree_nodes h.tree in
      if List.mem v potential_siblings then
        List.filter (fun n -> v <> n && v <> x)  potential_siblings
      else
        siblings v t
  in 
  let siblings = siblings v forest in
  let neighbours = Graph.AtomMap.find v graph in
  List.filter (fun v -> List.mem v siblings |> not) neighbours
        
let rec refine_top graph vertices x forest =
  match vertices with
  | [] -> forest
  | v :: t ->
    let direction = position v x forest in
    let active_edges = active_edges graph v forest x in
    let new_forest = refine forest active_edges direction in
    refine_top graph t x new_forest

let promotion forest =
  let left_promoted = unfold forest Left in
  let right_promoted = unfold left_promoted Right in
  let cleaned = delete_marked right_promoted in
  List.map remove_marks cleaned
