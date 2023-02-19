open Core
open Base

let path = "./graph.json"

let graph, state = Parsegraph.read_file_as_graph path
let graph2, state2 = Parsegraph.read_file_as_graph path


let vertex = {Graph.connective = Atom {label = "new"; pol = true}; id = Graph.fresh_id state}
let%test _ = vertex.id = 9


let graph3 = Graph.add_vertex vertex graph
let%test _ = Set.mem graph3.nodes vertex

let vset1, vset2 = Set.partition_tf graph.nodes ~f:(fun v -> v.id % 2 = 0)
let%test _ = Util.disjoint vset1 vset2
let%test _ = Util.disjoint vset1 vset1 |> not

let%test _ = Graph.VSet.equal (Graph.graph_difference graph vset1).nodes vset2
let%test _ = Graph.VSet.equal (Graph.successors graph vset1) vset2

let dummy_state : Graph.state = {
  total_vertices = 8;
  id_map = Hashtbl.create (module Int)
}
let neighbours = Graph.successors graph vset1
let () = assert(Graph.VSet.equal neighbours vset2)
let dummy_graph = Graph.replace graph vset1 vertex dummy_state
let%test _ = Util.disjoint vset1 dummy_graph.nodes
let%test _ = not (Hashtbl.is_empty dummy_state.id_map)
let%test _ = Graph.VSet.equal (Graph.find_or_empty dummy_graph.edges vertex) neighbours

let%test _ =
    let graph = Graph.add_vertex vertex graph in
    let graph = Graph.connect_vertices_to_vertex vset1 vertex graph in
    Set.for_all vset1
      ~f:(fun v ->
        Set.mem (Map.find_exn graph.edges v) vertex)

let%test _ =
  let graph = Graph.graph_difference graph vset1 in
  Set.for_all graph.nodes
    ~f:(fun v -> not (Set.mem vset1 v))
  &&
  Map.for_all graph.edges
    ~f:(fun vset -> Util.disjoint vset vset1)

let%test _ =
  let graph = Graph.induced_subgraph graph vset1 in
  Graph.VSet.equal graph.nodes vset1
  &&
  Map.for_all graph.edges
    ~f:(fun vset -> Set.is_subset vset ~of_:vset1)
