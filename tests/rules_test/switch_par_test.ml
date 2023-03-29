(*Try to prove example 4.8 in GS, page 13*)
open Gscore
exception READERROR of string

let (=.) = Tree.struct_equal

(*2 values in each file, expected and start*)
let path = "./graph_sp_suite.json"

let graphs = Parsegraph.read_file_as_graphs path

let expected, initial, stateExp, stateInit = match graphs with
| (expected,stateExp)::(initial,stateInit)::[] -> expected, initial, stateExp, stateInit
| _ -> raise (READERROR "Could not find valid graph")

let expTree = Option.get (Option.bind (Tree.tree_from_graph expected stateExp) Tree.simplify)
let initTree = Option.get (Option.bind (Tree.tree_from_graph initial stateInit) Tree.simplify)


let () = Pp_new.show_tree (Rules.switch_par  initTree)

let%test "Note6.3_s_par_only" =  (Rules.switch_par initTree) =. expTree
