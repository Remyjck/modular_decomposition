open Base
open Graph
open Yojson.Basic

let show_tree tree = to_channel Caml.stdout (Parsegraph.serialize_tree tree)

let show_graph graph =
  let () = Stdio.printf "Nodes: "; Set.iter graph.nodes ~f:(fun v -> Stdio.printf "%s " (getLabel v)); Stdio.printf "\n"; in
  Stdio.printf "Edges: \n"; Map.iteri graph.edges ~f:(fun ~key:k ~data:d ->
    Stdio.printf "\t%s: " (getLabel k);
    Set.iter d ~f:(fun v -> Stdio.printf "%s, " (getLabel v));
    Stdio.printf "\n")

let show_tree_as_graph tree = show_graph (Tree.tree_to_graph tree)

let show_graph_as_tree graph state= show_tree (Caml.Option.get (Tree.tree_from_graph graph state))

let show_graph_json graph = to_channel Caml.stdout (Parsegraph.serialize_graph graph)

let show_tree_as_graph_json tree = show_graph_json (Tree.tree_to_graph tree)
