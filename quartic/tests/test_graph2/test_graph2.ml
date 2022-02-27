open Quartic
open Core_kernel

let js_obj =
    let buf = In_channel.read_all "graph2.json" in
    Yojson.Basic.from_string buf

let graph, state = Parsegraph.parse js_obj

let condensed_graph = Condense.condense_cliques graph state
let%test _ = Graph.VSet.length condensed_graph.nodes = 5
let%test _ = Graph.VMap.length condensed_graph.edges = 5
let%test _ = List.length (Graph.edge_tuple_list condensed_graph.edges) = 7

let min_cond = Condense.condensible_subgraphs condensed_graph
let%test _ = Condense.VSetSet.length min_cond = 1
let%test _ = Graph.VSet.length (Condense.VSetSet.choose_exn min_cond) = 4

let prime_list =
  Condense.VSetSet.fold min_cond
    ~init:[]
    ~f:(fun accum vset -> 
      let subgraph = Graph.induced_subgraph condensed_graph vset in
      let node = Graph.Prime (Graph.vmap_to_imap subgraph.edges) in
      (node, vset) :: accum)
let%test _ = List.length prime_list = 1
let%test _ = Graph.VSet.length (snd (List.nth_exn prime_list 0)) = 4

let prime_condensed_graph =
  List.fold prime_list
    ~init:condensed_graph 
    ~f:(fun graph (node, h) -> Condense.condense_prime node h graph state)
let%test _ = Graph.VSet.length prime_condensed_graph.nodes = 2

let res = Condense.condense_cliques prime_condensed_graph state
let%test _ = Graph.VSet.length res.nodes = 1

let tree = Tree.tree_from_condensed res state

let json_as_graph = Parsegraph.serialize_tree_as_graph tree
let json = Parsegraph.serialize_tree tree

(* let () = print_endline (Yojson.Basic.pretty_to_string json_as_graph)
let () = print_endline (Yojson.Basic.pretty_to_string json) *)