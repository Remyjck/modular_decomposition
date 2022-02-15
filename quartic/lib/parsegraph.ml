open Graph
open Yojson.Basic.Util

let to_vertex js_obj =
  let id = js_obj |> member "id" |> to_int in
  let label = js_obj |> member "label" |> to_string in
  let polarisation = js_obj |> member "polarisation" |> to_bool in
  let atom = Atom {label=label; pol=polarisation} in
  {connective=atom; id=id}

let to_nodes js_obj =
  let json_list = to_list js_obj in
  let vertex_list = List.map to_vertex json_list in
  VSet.of_list vertex_list

let to_edge_tuple js_obj =
  let src = js_obj |> member "source" |> to_int in
  let dest = js_obj |> member "target" |> to_int in
  (src, dest)

let to_id_list js_obj =
  to_list js_obj |> List.map to_edge_tuple

let to_edge_list id_list nodes =
  let map = id_map nodes in
  List.map
    (fun (src, dest) ->
      (IMap.find src map, IMap.find dest map))
    id_list 

let parse js_obj =
  let nodes = js_obj |> member "nodes" |> to_nodes in
  let id_list = js_obj |> member "edges" |> to_id_list in
  let edge_list = to_edge_list id_list nodes in
  let edges = edge_map edge_list in
  {nodes=nodes; edges=edges}