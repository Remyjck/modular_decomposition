open Tree
open Base


(*Work on tree nodes*)

(*Inference rules*)

let find_dual_pair trees = Util.find_fitting_pair trees is_dual

let find_atomic_dual_pair trees = Util.find_fitting_pair trees (fun t1 t2 ->
    match t1.connective, t2.connective with
    | Atom a, Atom b  ->
      Graph.is_dual_atom a b
    | _ -> false
  )

 let propagate_once f tree =
  let new_node = match tree.connective with
  | Prime (idg, sub) -> Prime (idg, List.map ~f sub)
  | Atom a -> Atom a
  | Tensor sub -> Tensor (List.map ~f sub)
  | Par sub -> Par (List.map ~f sub) in
  {connective=new_node; id=tree.id+1}


(*atomic identity down - ai_down*)
let rec atomic_identity_down (tree: tree) = match tree.connective with
| Par nodes ->
  let pair_option = find_atomic_dual_pair nodes in
  let new_node = match pair_option with
  | None -> (propagate_once atomic_identity_down tree).connective
  | Some (a,b) -> Par (List.filter nodes ~f:(fun t -> not (Tree.struct_equal t a || Tree.struct_equal t b))) in
  let new_tree = ({connective=new_node; id=tree.id+1}) in
  if Tree.struct_equal new_tree tree then tree else atomic_identity_down new_tree
| _ -> propagate_once atomic_identity_down tree


(*Switch par implementation*)
(*P(M1,...,Mn) & N -> P(M1,...,Mi & N,...,Mn) *)
(*f selects an element from the subnodes*)
let switch_par f tree = f tree
(*
   Plan: check if top node is Par,
    Check if there is a pair of one Non prime tree and one prime tree
    Use f to move N to one of the nodes in P.
*)

(*prime down - p_down*)



(*dumb version for now TODO test this*)
let prime_down (tree: tree) = match tree.connective with
  | Par sub ->
    (let pair_option = find_dual_pair sub in
    match pair_option with
    | None -> tree
    | Some (t1, t2) ->
      let new_node = match t1.connective, t2.connective with
        | (Prime (_, sub1), Prime (_, sub2)) -> Tensor (Caml.List.map2 (fun t1 t2 -> {id=t1.id + t2.id + 1; connective= Par [t1;t2]}) sub1 sub2)
        | _ -> Par sub in
    {connective=new_node; id=tree.id+1})
  | _ -> tree

let find_proof (_:Tree.tree) = []

let is_valid (_:Tree.tree) = false
