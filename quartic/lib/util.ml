let flip f x y = f y x

let rec before v1 v2 vl =
  match vl with
  | [] -> raise Not_found
  | v :: _ when (v = v1) -> true
  | v :: _ when (v = v2) -> false
  | _ :: t -> before v1 v2 t

let index elem l =
  let rec index_r elem l i =
    match l with
    | [] -> raise Not_found
    | h :: t ->
      if h = elem then i else index_r elem t (i+1)
  in
  index_r elem l 0