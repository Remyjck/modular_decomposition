open Quartic
open Core

let js_obj =
    let buf = In_channel.read_all "./graph.json" in
    Yojson.Basic.from_string buf

let graph, state = Parsegraph.parse js_obj

let vertex = {Graph.connective = Atom {label = "new"; pol = true}; id = Graph.fresh_id state}
let%test _ = vertex.id = 9

let graph = Graph.add_vertex vertex graph
let%test _ = Graph.VSet.mem graph.nodes vertex

let graph = Graph.remove_vertex vertex graph
let%test _ = Graph.VSet.mem graph.nodes vertex |> not


let vset1, vset2 = Graph.VSet.partition_tf graph.nodes ~f:(fun v -> v.id mod 2 = 0)
let%test _ = Graph.disjoint vset1 vset2
let%test _ = Graph.disjoint vset1 vset1 |> not

let%test _ = Graph.VSet.equal (Graph.(<~>) graph vset1).nodes vset2
let%test _ = Graph.VSet.equal (Graph.connected graph vset1) vset2

let%test _ = 
    let dummy_state : Graph.state = {
      total_vertices = 8;
      id_map = Hashtbl.create (module Int)
    } 
    in
    let neighbours = Graph.connected graph vset1 in
    let () = assert(Graph.VSet.equal neighbours vset2) in
    let graph = Graph.replace graph vset1 vertex dummy_state in
    Graph.disjoint vset1 graph.nodes
    &&
    not (Hashtbl.is_empty dummy_state.id_map)
    &&
    Graph.VSet.equal (Graph.VMap.find_exn graph.edges vertex) neighbours

let%test _ =
    let graph = Graph.add_vertex vertex graph in
    let graph = Graph.connect_vertices vset1 vertex graph in
    Graph.VSet.for_all vset1
      ~f:(fun v ->
        Graph.VSet.mem (Graph.VMap.find_exn graph.edges v) vertex)

let%test _ =
  let graph = Graph.(<~>) graph vset1 in 
  Graph.VSet.for_all graph.nodes
    ~f:(fun v -> not (Graph.VSet.mem vset1 v))
  &&
  Graph.VMap.for_all graph.edges
    ~f:(fun vset -> Graph.disjoint vset vset1)

let%test _ =
  let graph = Graph.induced_subgraph graph vset1 in
  Graph.VSet.equal graph.nodes vset1
  &&
  Graph.VMap.for_all graph.edges
    ~f:(fun vset -> Graph.VSet.is_subset vset ~of_:vset1)

let%test _ =
  let from_id_list list =
    Graph.VSet.filter graph.nodes
      ~f:(fun v -> List.mem list v.id ~equal:Int.equal)
  in
  let module1 = [4;5] in
  let module2 = [1;2] in
  let notmodule = [3;7] in
  let vertices1 = from_id_list module1 in
  let vertices2 = from_id_list module2 in
  let vertices3 = from_id_list notmodule in
  Graph.is_module graph vertices1
  &&
  Graph.is_module graph vertices2
  &&
  not (Graph.is_module graph vertices3)

let condensed_graph = Condense.condense_cliques graph state
let%test _ = Graph.VSet.length condensed_graph.nodes = 5
let%test _ = Graph.VMap.length condensed_graph.edges = 5
let%test _ = List.length (Graph.edge_tuple_list condensed_graph.edges) = 6

let min_cond = Condense.condensible_subgraphs condensed_graph
let%test _ = Condense.VSetSet.length min_cond = 0

let prime_list =
  Condense.VSetSet.fold min_cond
    ~init:[]
    ~f:(fun accum vset -> 
      let subgraph = Graph.induced_subgraph condensed_graph vset in
      let node = Graph.Prime (Graph.vmap_to_imap subgraph.edges) in
      (node, vset) :: accum)
let%test _ = List.length prime_list = 0

let res =
  let node = Graph.Prime (Graph.vmap_to_imap condensed_graph.edges) in
  Condense.condense_prime node condensed_graph.nodes condensed_graph state
let%test _ = Graph.VSet.length res.nodes = 1

let tree = Tree.tree_from_condensed res state

let json_as_graph = Parsegraph.serialize_tree_as_graph tree
let json = Parsegraph.serialize_tree tree

(* let () = print_endline (Yojson.Basic.pretty_to_string json_as_graph)
let () = print_endline (Yojson.Basic.pretty_to_string json) *)
