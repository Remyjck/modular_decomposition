open Base

type rule_id =
  AI_down |
  Prime_down |
  Switch_Par of Rules.selector * Rules.selector * Rules.selector

type proof = {
  id: string;
  initial: Graph.graph;
  expected: Graph.graph;
  steps: rule_id list;
}

let verify pf =
  let {id=_; initial; expected; steps}= pf in
  let initial_tree =  Caml.Option.get @@ Condense.tree_from_graph initial in
  let expected_tree = Caml.Option.get @@ Condense.tree_from_graph expected in
  let rec aux proof_state = function
  | [] -> if Equality.struct_equal proof_state expected_tree then None else Some proof_state
  | step::rest ->
    let new_proof_state = match step with
    | AI_down -> Rules.atomic_identity_down proof_state
    | Prime_down -> Rules.prime_down proof_state
    | Switch_Par (select_first_prime, select_in_prime, select_corresponding) ->
        Rules.switch_par_generic select_in_prime select_first_prime select_corresponding proof_state in
    let new_proof_state = match Equality.simplify new_proof_state with
    | Some t -> t
    | None -> Tree.empty_tree 300 in
    let new_proof_state = {new_proof_state with id=200} in
    aux new_proof_state rest in
  aux initial_tree steps
