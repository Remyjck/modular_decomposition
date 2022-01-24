open Graph

type marking = 
  | Unmarked
  | Left
  | Right
  | Mix

module rec A : sig
  type t = 
    | Leaf of atom 
    | Node of { 
      node : node;
      mutable mark : marking;
      }
  and node = 
    | Par of t list
    | Tensor of t list
    | Prime of t list TreeGraph.t 
  val compare: t -> t -> int
end = struct
  type t = 
    | Leaf of atom 
    | Node of { 
      node : node;
      mutable mark : marking;
      }
  and node = 
    | Par of t list
    | Tensor of t list
    | Prime of t list TreeGraph.t 
  let compare t1 t2 = 
    match (t1, t2) with
    | (Leaf a1, Leaf a2) -> Stdlib.compare a1 a2 
    | (Leaf _, Node _) -> 1
    | (Node _, Leaf _) -> -1
    | (Node n1, Node n2) -> Stdlib.compare n1.node n2.node
end
and TreeGraph
  : Map.S with type key = A.t 
  = Map.Make(A)

open A

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

let successors node = 
  match node with
  | Leaf _ -> []
  | Node node ->
    match node.node with 
    | Par tl | Tensor tl -> tl
    | Prime treegraph -> TreeGraph.bindings treegraph |> List.map fst

let tree_nodes tree = 
  let rec tree_nodes tree res =
    match tree with
    | Leaf x -> x :: res
    | node ->
      List.concat_map (fun elem -> tree_nodes elem res) (successors node)
  in
  tree_nodes tree []

let induced_treegraph g trees = 
  let filtered_keys =
    TreeGraph.filter (fun key _ -> List.mem key trees) g
  in
  TreeGraph.map (List.filter (fun elem -> List.mem elem trees)) filtered_keys

let rec maximal_subtree mdt x = 
  match mdt with
  | Leaf a -> if List.mem a x then Some (Leaf a) else None
  | Node node ->
    let subtrees = List.map 
      (fun tree -> maximal_subtree tree x)
      (successors (Node node))
    in
    match subtrees with
    | [] -> None
    | [st] -> st
    | stl -> 
      let mark = node.mark in
      let successor_list = Util.sanitize stl in
      match node.node with
      | Par _ -> Some (Node {node = Par successor_list; mark = mark})
      | Tensor _ -> Some (Node {node = Tensor successor_list; mark = mark})
      | Prime treegraph -> 
        let subgraph = induced_treegraph treegraph successor_list in
        Some (Node {node = Prime subgraph; mark = mark})

type path = 
  | Top
  | Node of t * t list * path * t list

type zipper =
  {
    path : path;
    tree : t;
  }

let top_tree t = {path = Top; tree = t}

let go_left z = match z.path with
  | Top -> invalid_arg "left of top"
  | Node (node, l::left, up, right) ->
    {
      path = Node(node, left, up, z.tree::right);
      tree = l;
    }
  | Node (_, [], _, _) -> invalid_arg "left of first"

let go_right z = match z.path with
  | Top -> invalid_arg "right of top"
  | Node (node, left, up, r::right) ->
    {
      path = Node(node, z.tree::left, up, right);
      tree = r;
    }
  | Node (_, _, _, []) -> invalid_arg "right of last"

let go_up z = match z.path with
  | Top -> invalid_arg "up of top"
  | Node (node, _, up, _) ->
    match node with 
    | Leaf _ -> failwith "up to leaf"
    | node -> { tree = node; path = up; }

let go_down z = match z.tree with
  | Leaf _ -> invalid_arg "down of leaf"
  | node ->
    match successors node with
    | t1 :: trees -> 
      {
        path = Node(node, [], z.path, trees);
        tree = t1;
      }
    | [] -> invalid_arg "down to empty"