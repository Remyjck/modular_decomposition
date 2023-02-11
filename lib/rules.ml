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
| _ -> Some tree

(*super switch down - ss_down*)
(*TODO how do i handle context*)
let super_switch_down tree = tree

(*prime down - p_down*)
let prime_down tree = tree

(*Deduction rules*)

(*Context*)

(*Par*)

(*Tensor*)
