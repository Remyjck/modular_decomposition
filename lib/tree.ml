open Graph

type modularTree = 
  | Leaf of atom 
  | Par of modularTree list
  | Tensor of modularTree list
  | Prime of modularTree list

let rec tree_nodes tree res =
  match tree with
  | Leaf x -> x :: res
  | _ mtl -> 

let tree_nodes tree = 
  tree_nodes tree []

let refine graph tree =
  let f elem = 
    
  in List.iter f graph.nodes