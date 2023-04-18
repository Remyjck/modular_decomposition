(*Try to prove example 4.8 in GS, page 13*)
open Gscore
exception READERROR of string

let (=.) = Tree.struct_equal

(*2 values in each file, expected and start*)
let path = "./graph_sp_suite.json"

let graphs = Parsegraph.read_file_as_graphs path

let expected, initial = match graphs with
| expected::initial::[] -> expected, initial
| _ -> raise (READERROR "Could not find valid graph")

let expTree = Option.get (Condense.tree_from_graph expected)
let initTree = Option.get (Condense.tree_from_graph initial)

let%test "Note6.3_s_par_only" =  (Rules.switch_par initTree) =. expTree
