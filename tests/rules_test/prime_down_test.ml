open Core
exception READERROR of string

let (=.) = Tree.struct_equal

(*2 values in each file, expected and start*)
let path = "./graph_p1_suite.json"

let graphs = Parsegraph.read_file_as_graphs path
(*Graph from example 4.16 in "An analytic proof system on graphs"*)

let expected, initial, stateExp, stateInit = match graphs with
| (expected,stateExp)::(initial,stateInit)::[] -> expected, initial, stateExp, stateInit
| _ -> raise (READERROR "Could not find valid graph")

let expTree = Caml.Option.get @@ Tree.tree_from_graph expected stateExp
let initTree = Caml.Option.get @@ Tree.tree_from_graph initial stateInit




let%test "Ex4.16_prime_down_only" =  (Rules.prime_down initTree) =. expTree
