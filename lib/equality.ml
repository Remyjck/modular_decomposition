open Tree
open Base

let rec is_dual t1 t2 =
  match (t1.connective, t2.connective) with
  | Prime (idg1, sub1), Prime (idg2, sub2) ->
      Id_graph.is_dual idg1 idg2
      && Caml.List.for_all2 is_dual sub1 sub2 (*very suboptimal and also bad*)
  | Atom a, Atom b -> Graph.is_dual_atom a b
  | Tensor sub1, Tensor sub2 -> Caml.List.for_all2 is_dual sub1 sub2
  | Par sub1, Par sub2 -> Caml.List.for_all2 is_dual sub1 sub2
  | _ -> false

let rec is_empty tree =
  match tree.connective with
  | Prime (_, []) -> true
  | Prime (_, sub) -> Caml.List.for_all is_empty sub
  | Atom _ -> false
  | Tensor [] -> true
  | Tensor sub -> Caml.List.for_all is_empty sub
  | Par [] -> true
  | Par sub -> Caml.List.for_all is_empty sub

let simplify tree =
  let rec aux tree =
    match tree.connective with
    | Par [] -> None
    | Tensor [] -> None
    | Prime (_, []) -> None
    | Tensor [ t ] -> Some { t with id = t.id * 19 }
    | Prime (_, [ t ]) -> Some { t with id = t.id * 17 }
    | Par [ t ] -> Some { t with id = t.id * 13 }
    | Atom _ -> Some tree
    | Par trees -> (
        let nodes = List.filter_map trees ~f:(fun t -> aux t) in
        match nodes with
        | [] -> None
        | [ t ] -> Some { t with id = t.id * 5 }
        | _ -> Some { id = tree.id * 7; connective = Par nodes })
    | Tensor trees -> (
        let nodes = List.filter_map trees ~f:(fun t -> aux t) in
        match nodes with
        | [] -> None
        | [ t ] -> Some { t with id = t.id * 23 }
        | _ -> Some { id = tree.id * 3; connective = Par nodes })
    | Prime (_, _) -> Some tree
  in
  aux tree

let rec struct_equal t1 t2 =
  match (simplify t1, simplify t2) with
  | None, None -> true
  | Some _, None -> false
  | None, Some _ -> false
  | Some t1, Some t2 -> (
      match (t1.connective, t2.connective) with
      | Prime (_, []), Prime (_, []) -> true
      | Prime (idg1, sub1), Prime (idg2, sub2) -> (
          let isol = Id_graph.find_sub_iso idg1 idg2 in
          let isor = Id_graph.find_sub_iso idg2 idg1 in
          match (isol, isor) with
          | Some _, None -> false
          | None, Some _ -> false
          | None, None -> false
          | Some isol, Some _ ->
              (*increasing complexity of equality check*)
              Caml.List.for_all2
                (fun s1 n ->
                  let corresponding_id = Map.find_exn isol n in
                  let corresponding_index =
                    fst
                      (List.findi_exn idg2.nodes ~f:(fun _ x ->
                           x = corresponding_id))
                  in
                  let corresponding_sub =
                    List.nth_exn sub2 corresponding_index
                  in
                  struct_equal s1 corresponding_sub)
                sub1 idg1.nodes)
      | Atom _, Atom _ -> true
      | Tensor [], Tensor [] -> true
      | Tensor sub1, Tensor sub2 ->
          Caml.List.for_all2 struct_equal sub1 sub2 (*breaks for reordering*)
      | Par [], Par [] -> true
      | Par sub1, Par sub2 -> Caml.List.for_all2 struct_equal sub1 sub2
      | _ -> false)

let equal_tree t1 t2 = Graph.equal_graph (tree_to_graph t1) (tree_to_graph t2)
