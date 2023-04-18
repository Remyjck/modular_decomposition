type rule_id =
    AI_down
  | Prime_down
  | Switch_Par of Rules.selector * Rules.selector * Rules.selector
type proof = {
  id : string;
  initial : Graph.graph * Graph.state;
  expected : Graph.graph * Graph.state;
  steps : rule_id list;
}

(*Takes a proof as input and returns None on success and Some result on failure, together with the output*)
val verify : proof -> Tree.tree option
