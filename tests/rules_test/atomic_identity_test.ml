open Core
open Base

let path = "./graph_ai.json"

let graph, state = Parsegraph.read_file_as_graph path
let tr = Caml.Option.get @@ Tree.tree_from_graph graph state

let%test _ =
  let gr = Tree.tree_to_graph tr in
  let edges = gr.edges in (Map.is_empty edges)


let%test _ = phys_equal (Rules.atomic_identity_down tr) None

(* share_module*)
