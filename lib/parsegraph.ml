open Graph
open Base
open Yojson.Basic.Util

let to_vertex js_obj =
  let id = js_obj |> member "id" |> to_int in
  let label = js_obj |> member "label" |> to_string in
  let polarisation = js_obj |> member "polarisation" |> to_bool in
  let atom = Atom {label=label; pol=polarisation} in
  {connective=atom; id=id}

let to_nodes js_obj =
  let json_list = to_list js_obj in
  let vertex_list = List.map json_list ~f:to_vertex in
  Set.of_list (module Vertex) vertex_list

let to_id_tuple js_obj =
  let src = js_obj |> member "source" |> to_int in
  let dest = js_obj |> member "target" |> to_int in
  (src, dest)

let to_id_list js_obj =
  to_list js_obj |> List.map ~f:to_id_tuple

let to_assoc_list id_list nodes =
  let map = id_map nodes in
  List.map id_list
    ~f:(fun (src, dest) ->
      (Map.find_exn map src, Map.find_exn map dest))

let to_edge_maps nodes js_obj =
  let id_list = to_id_list js_obj in
  let vertex_assoc = to_assoc_list id_list nodes in
  Graph.edge_maps vertex_assoc

let parse js_obj =
  let nodes = js_obj |> member "nodes" |> to_nodes in
  let edges = js_obj |> member "edges" |> to_edge_maps nodes in
  let max_id =
    let ids = List.map (Set.elements nodes) ~f:(fun v -> v.id) in
    match List.max_elt ids ~compare:Int.compare with
    | None -> 0
    | Some n -> n
  in
  ({nodes=nodes; edges=edges},
   {total_vertices = max_id; id_map = Hashtbl.create (module Int)})

let from_vertex vertex =
  let id = `Int vertex.id in
  let label, pol =
    match vertex.connective with
    | Atom atom ->
      (`String atom.label, `Bool atom.pol)
    | _ -> failwith "Tried to serialize non-atomic graph"
    in
    `Assoc [
      ("id", id);
      ("label", label);
      ("polarisation", pol)
    ]

let from_nodes vset =
  let node_list = Set.elements vset in
  let json_list = List.map node_list ~f:from_vertex in
  `List json_list

let from_id_tuple (id1, id2) =
  let source = `Int id1 in
  let target = `Int id2 in
  `Assoc [
    ("source", source);
    ("target", target)
  ]

let from_edges edge_map =
  let edge_list = edge_tuple_list edge_map in
  let id_list =
    List.map edge_list
      ~f:(fun (v1, v2) -> (v1.id, v2.id))
  in
  let json_list = List.map id_list ~f:from_id_tuple in
  json_list

let serialize_graph graph =
  let nodes = from_nodes graph.nodes in
  let edges = `List (from_edges graph.edges)
  in
  `Assoc [
    ("nodes", nodes);
    ("edges", edges)
  ]


let from_connective connective =
  match connective with
  | Tree.Atom _ -> `String "atom", None
  | Tree.Tensor _ -> `String "tensor", None
  | Tree.Par _ -> `String "par", None
  | Tree.Prime (id_graph, _) -> `String "prime", Some id_graph

let from_id_graph (id_graph : Id_graph.id_graph) =
  let nodes = List.map id_graph.nodes ~f:(fun n -> `Int n) in
  let nodes_json = `List nodes in
  let edges = List.map id_graph.edges
    ~f:(fun (n1,n2) -> `Assoc [("source", `Int n1); ("target", `Int n2)])
  in
  let edges_json = `List edges in
  `Assoc [("nodes", nodes_json); ("edges", edges_json)]

let rec serialize_tree (tree : Tree.tree) : Yojson.Basic.t =
  let id = `Int tree.id in
  let connective, id_graph = from_connective tree.connective in
  let node_base = [("connective", connective); ("id", id)] in
  let node =
    match id_graph with
    | None -> `Assoc node_base
    | Some graph -> `Assoc (("graph", from_id_graph graph) :: node_base)
  in
  let successors = List.map (Tree.successors tree) ~f:serialize_tree in
  `Assoc [
    ("node", node);
    ("successors", `List successors)
  ]

let read_file_as_graph filepath =
  let s = Stdio.In_channel.read_all filepath in
  let js_obj = Yojson.Basic.from_string s in
  parse js_obj

let read_file_as_graphs filepath =
  let s = Stdio.In_channel.read_all filepath in
  let js_obj = Yojson.Basic.from_string s in
  List.map ~f:parse (to_list js_obj)


let parse_idg js_obj : Id_graph.id_graph =
  let nodes = js_obj |> member "nodeCount" |> to_int in
  let edges = js_obj |> member "edges" |> to_id_list in
  {nodes=List.init ~f:(fun x -> x+1) nodes; edges}

let read_file_as_id_graph filepath =
  let s = Stdio.In_channel.read_all filepath in
  let js_obj = Yojson.Basic.from_string s in
  parse_idg js_obj

let read_file_as_id_graphs filepath =
  let s = Stdio.In_channel.read_all filepath in
  let js_obj = Yojson.Basic.from_string s in
  List.map ~f:parse_idg (to_list js_obj)
