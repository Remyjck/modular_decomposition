type rule_id =
  AI_down |
  Prime_down |
  Switch_Par of Rules.selector * Rules.selector * Rules.selector

type proof = {
  id: string;
  initial: Graph.graph * Graph.state;
  expected: Graph.graph * Graph.state;
  steps: rule_id list;
}

let verify pf =
  let {id=_; initial; expected; steps}= pf in
  let initial_graph, initial_state = initial in
  let expected_graph, expected_state = expected in
  let initial_tree = Option.get @@ Tree.tree_from_graph initial_graph initial_state in
  let expected_tree = Option.get @@ Tree.tree_from_graph expected_graph expected_state in
  let rec aux proof_state = function
  | [] -> Tree.struct_equal proof_state expected_tree
  | step::rest -> (match step with
    | AI_down -> aux (Rules.atomic_identity_down proof_state) rest
    | Prime_down -> aux (Rules.prime_down proof_state) rest
    | Switch_Par (select_first_prime, select_in_prime, select_corresponding) ->
        aux (Rules.switch_par_generic select_in_prime select_first_prime select_corresponding proof_state) rest) in
  aux initial_tree steps
