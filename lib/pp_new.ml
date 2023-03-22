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
