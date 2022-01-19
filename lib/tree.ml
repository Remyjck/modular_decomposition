open Graph

type node  = 
  | Par
  | Tensor
  | Prime

type marking = 
  | Unmarked
  | Left
  | Right
  | Mix

type modularTree = 
  | Leaf of atom 
  | Node of { 
    tl : modularTree list;
    node : node;
    mutable mark : marking;
    }

let update_marking node mark = 
  match node with
  | Leaf _ -> ()
  | Node node ->
    match node.mark with
    | Unmarked -> node.mark <- mark
    | Left -> 
      (match mark with
      | Unmarked | Left -> ()
      | Right | Mix -> node.mark <- Mix)
    | Right -> 
      (match mark with
      | Unmarked | Right -> ()
      | Left | Mix -> node.mark <- Mix)
    | Mix -> ()

let rec tree_nodes tree res =
  match tree with
  | Leaf x -> x :: res
  | Node node ->
    List.concat_map (fun elem -> tree_nodes elem res) node.tl

let tree_nodes tree = 
  tree_nodes tree []

let rec maximal_subtree mdt x = 
  match mdt with
  | Leaf a -> if List.mem a x then Some (Leaf a) else None
  | Node node ->
    let subtrees = List.map 
      (fun tree -> maximal_subtree tree x)
      node.tl
    in
    match subtrees with
    | [] -> None
    | [st] -> st
    | stl -> Some (Node {tl = Util.sanitize stl; node = node.node; mark = node.mark})
