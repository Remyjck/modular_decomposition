open Gscore
exception READERROR of string

let (=.) = Tree.struct_equal

let path = "./graph_ai_suite.json"

let graphs = Parsegraph.read_file_as_graphs path
let trees = List.map (fun g -> Option.get (Condense.tree_from_graph g)) graphs

(*
  gr1: a par not a
  gr2: a par not b
  gr3: (a par not a) par (b par not b)
  gr4: (a par not a) tensor (b par not b)
  gr5: (a par not b) tensor (b par not a)
  gr6: (a par not a) tensor (b par not b)
*)

let tr1, tr2, tr3, tr4, tr5, tr6 = match trees with
| tr1::tr2::tr3::tr4::tr5::tr6::_ -> tr1, tr2, tr3, tr4, tr5, tr6
| _ -> raise (READERROR "Could not find valid graph")


let%test "ai_down_1" = Tree.is_empty (Rules.atomic_identity_down tr1)
let%test "ai_down_2" = not (Tree.is_empty (Rules.atomic_identity_down tr2))
let%test "ai_down_3" = Tree.is_empty (Rules.atomic_identity_down tr3)
let%test "ai_down_4" = not (Tree.is_empty (Rules.atomic_identity_down tr4))
let%test "ai_down_5" = not (Tree.is_empty (Rules.atomic_identity_down tr5))
let%test "ai_down_6" = Tree.is_empty (Rules.atomic_identity_down tr6)

(* share_module*)
