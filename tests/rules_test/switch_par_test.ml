(*Try to prove example 4.8 in GS, page 13*)
open Core
exception READERROR of string

let (=.) = Tree.struct_equal

(*2 values in each file, expected and start*)
let path = "./graph_sp_suite.json"

let graphs = Parsegraph.read_file_as_graphs path

let expected, initial, stateExp, stateInit = match graphs with
| (expected,stateExp)::(initial,stateInit)::[] -> expected, initial, stateExp, stateInit
| _ -> raise (READERROR "Could not find valid graph")

let expTree = Caml.Option.get @@ Tree.tree_from_graph expected stateExp
let initTree = Caml.Option.get @@ Tree.tree_from_graph initial stateInit

let () = Tree.show (Rules.switch_par_atom_first initTree)

let%test "Note6.3_s_par_only" =  (Rules.switch_par_atom_first initTree) =. expTree
