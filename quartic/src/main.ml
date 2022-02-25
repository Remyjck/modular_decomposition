open Quartic
open Core_kernel
open Js_of_ocaml

let state = {Graph.total_vertices = 0; id_map = Hashtbl.create (module Int)}

let get_nodes_arr cy : Js.Unsafe.any_js_array  = 
  let colletion = Js.Unsafe.meth_call cy "nodes" [||] in
  Js.Unsafe.meth_call colletion "toArray" [||]

let get_edges_arr cy : Js.Unsafe.any_js_array =
  let collection = Js.Unsafe.meth_call cy "edges" [||] in
  Js.Unsafe.meth_call collection "toArray" [||]

let node_to_vertex (node : <data : Js.js_string Js.t -> Js.Unsafe.any Js.meth> Js.t) =
  let access_data (string : string) =
    node##data (Js.string string)
  in
  let id = Js.Unsafe.coerce (access_data "id") |> Js.parseInt in
  let label = Js.Unsafe.coerce (access_data "label") |> Js.to_string in
  let pol = Js.Unsafe.coerce (access_data "polarisation") |> Js.to_bool in
  let atom = {Graph.label=label; pol=pol} in
  {Graph.connective = Atom atom; id = id}

let to_edge (vertices : Graph.vertex list) (edge : <data : Js.js_string Js.t -> Js.Unsafe.any Js.meth> Js.t) =
  let access_data (string : string) = 
    edge##data (Js.string string)
  in
  let source_id = Js.Unsafe.coerce (access_data "source") |> Js.parseInt in
  let target_id = Js.Unsafe.coerce (access_data "target") |> Js.parseInt in
  let source = List.find_exn vertices ~f:(fun v -> v.id = source_id) in
  let target = List.find_exn vertices ~f:(fun v -> v.id = target_id) in
  (source, target)

let doc = Dom_html.document
let cy : 'b Js.t = Js.Unsafe.js_expr "cy"
let nodes = (Js.Unsafe.coerce (get_nodes_arr cy)) |> Js.to_array
let vertices = Array.map nodes ~f:(node_to_vertex) |> Array.to_list
let edges_arr = (Js.Unsafe.coerce (get_edges_arr cy)) |> Js.to_array
let edge_list = Array.map edges_arr ~f:(to_edge vertices)
