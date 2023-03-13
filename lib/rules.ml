open Tree

(*Work on tree nodes*)

(*Inference rules*)

(*atomic identity down - ai_down*)
let atomic_identity_down (tree: tree) = match tree.connective with
| Par nodes ->
  let tr = match nodes with
    | [] -> None
    |  node::[] -> Some node
    | a::b::_ ->
      let tr = match a.connective,b.connective with
        | (Atom a, Atom b) -> if (a.label = b.label) && (a.pol <> b.pol) then None else Some tree
        | _ -> Some tree
      in tr
  in tr
| _ -> Some tree (*Else traverse deeper into the tree until finished*)


(*super switch down - ss_down*)
(*TODO how do i handle context*)
let super_switch_down tree = tree

(*prime down - p_down*)



(*dumb version for now TODO test this*)
let prime_down (tree: tree) = match tree.connective with
| Par (a::b::[]) -> if is_dual a b then match a.connective, b.connective with
  | Prime (_, sub1), Prime (_, sub2) -> {tree with connective = Tensor (List.map2 (fun t1 t2 -> {id=t1.id + t2.id + 1;connective= Par [t1;t2] } ) sub1 sub2)}
  | _ -> tree
   else tree
| _ -> tree


(*Deduction rules*)

(*Context*)

(*Par*)

(*Tensor*)
