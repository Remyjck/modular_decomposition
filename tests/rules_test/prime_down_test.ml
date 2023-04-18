open Gscore
exception READERROR of string

let (=.) = Tree.struct_equal

(*2 values in each file, expected and start*)
let path = "./graph_p1_suite.json"

let graphs = Parsegraph.read_file_as_graphs path
(*Graph from example 4.16 in "An analytic proof system on graphs"*)

let expected, initial = match graphs with
| (expected)::(initial)::[] -> expected, initial
| _ -> raise (READERROR "Could not find valid graph")

let expTree = Caml.Option.get @@ Condense.tree_from_graph expected
let initTree = Caml.Option.get @@ Condense.tree_from_graph initial

let%test "Ex4.16_prime_down_only" =  (Rules.prime_down initTree) =. expTree
let%test "Ex4.16_is_valid" = Tree.is_empty (Rules.atomic_identity_down (Rules.prime_down initTree))
