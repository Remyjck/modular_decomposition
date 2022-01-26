let add_or_init new_elem y = 
  match y with
  | None -> Some [new_elem]
  | Some z -> Some (new_elem :: z)

let list_difference main sub = 
  let rec rlist_difference main sub res =
    match main with
    | [] -> res
    | h :: t ->
      if (List.mem h sub) then
        rlist_difference t sub res
      else
        rlist_difference t sub (h :: res)
  in rlist_difference main sub []