open Quartic
open Base

let js_obj =
  let s = Stdio.In_channel.read_all "before_graph.json" in
  Yojson.Basic.from_string s

let graph, state = Parsegraph.parse ~directed:true js_obj

let () = Map.iteri graph.edges ~f:(fun ~key:k ~data:d ->
  Stdio.printf "Neighbours of %d: " k.id;
  Set.iter d ~f:(fun d -> Stdio.printf "%d " d.id);
  Stdio.printf "\n")

let condensed = Condense.process graph state

let tree = Tree.tree_from_condensed condensed state |> Option.value_exn

let graph2 = Tree.tree_to_graph ~directed:true tree
let%test _ = Graph.VSet.equal graph.nodes graph2.nodes
let%test _ = Map.equal (Graph.VSet.equal) graph.edges graph2.edges

let () = Map.iteri graph2.edges ~f:(fun ~key:k ~data:d ->
  Stdio.printf "Neighbours of %d: " k.id;
  Set.iter d ~f:(fun d -> Stdio.printf "%d " d.id);
  Stdio.printf "\n")