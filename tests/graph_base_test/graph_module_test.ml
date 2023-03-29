open Gscore
open Base

let path = "./graph.json"

let graph, state = Parsegraph.read_file_as_graph path
let graph2, state2 = Parsegraph.read_file_as_graph path


let%test _ =
  let from_id_list list =
    Set.filter graph.nodes
      ~f:(fun v -> List.mem list v.id ~equal:Int.equal)
  in
  let module1 = [4;5] in
  let module2 = [1;2] in
  let notmodule = [3;7] in
  let vertices1 = from_id_list module1 in
  let vertices2 = from_id_list module2 in
  let vertices3 = from_id_list notmodule in
  Graph_module.is_module graph vertices1
  &&
  Graph_module.is_module graph vertices2
  &&
  not (Graph_module.is_module graph vertices3)


(* share_module*)
