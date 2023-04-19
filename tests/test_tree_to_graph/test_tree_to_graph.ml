open Gscore
open Base

let graph = Parsegraph.read_file_as_graph "./graph.json"
let tree = Condense.tree_from_graph graph |> Caml.Option.get

let graph2 = Tree.tree_to_graph tree
let%test _ = Graph.VSet.equal graph.nodes graph2.nodes
let%test _ = Map.equal (Graph.VSet.equal) graph.edges graph2.edges
