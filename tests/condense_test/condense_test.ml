open Core
open Base

let path = "./graph.json"

let graph, state = Parsegraph.read_file_as_graph path
let graph2, state2 = Parsegraph.read_file_as_graph path

let condensed_graph = Condense.condense_cliques graph state

let _ = Graph.show condensed_graph

let%test_unit "Condensed_Nodes_Count" = [%test_eq: int] (Set.length condensed_graph.nodes) 5
let%test_unit "Condensed_Edges_Count" = [%test_eq: int] (Map.length condensed_graph.edges) 5
let%test_unit  "Condensed_Edges_Tuple_Count" = [%test_eq: int] (List.length (Graph.edge_tuple_list condensed_graph.edges)) 6

(*
let min_cond = Condense.condensible_subgraphs condensed_graph
let%test _ = Set.length min_cond = 1

let prime_list =
  Set.fold min_cond
    ~init:[]
    ~f:(fun accum vset ->
      let subgraph = Graph.induced_subgraph condensed_graph vset in
      let node = Graph.Prime (Graph.vmap_to_imap subgraph.edges subgraph.nodes) in
      (node, vset) :: accum)
let%test _ = List.length prime_list = 1
let%test _ = Set.length (snd (List.nth_exn prime_list 0)) = 5

let res =
  List.fold prime_list
    ~init:condensed_graph
    ~f:(fun graph (node, h) -> Condense.condense_prime node h graph state)
let%test _ = Set.length res.nodes = 1
let () =
  let root = Set.choose_exn res.nodes in
  Hashtbl.add_exn state.id_map ~key:(root.id) ~data:(root)

let res2 = Condense.process graph2 state2
let%test _ = Graph.VSet.equal res.nodes res2.nodes
let%test _  = Hashtbl.equal (Graph.Vertex.equal) state.id_map state2.id_map
*)
