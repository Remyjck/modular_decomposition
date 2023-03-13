open Core
exception READERROR of string


let path = "./graph_test_suite.json"

let graphs = Parsegraph.read_file_as_graphs path
(*Graph from example 4.16 in "An analytic proof system on graphs"*)

let trees = List.map (fun (g,s) -> Caml.Option.get (Tree.tree_from_graph g s)) graphs




let%test "Equality_same_ids" =  List.for_all2 Tree.struct_equal trees trees
let%test "Equality_diff_ids" =  List.for_all2 Tree.struct_equal trees (List.map (fun (t:Tree.tree) -> ({t with id=t.id*2})) trees)
let%test "Inequality_pairwise" = match trees with
  | t1::t2::t3::_ -> not (Tree.struct_equal t1 t2) && not (Tree.struct_equal t1 t3)
  | _ -> false
let%test "Symmetry" = List.for_all2 (fun t1 t2 -> Tree.struct_equal t1 t2 && Tree.struct_equal t2 t1) trees trees
