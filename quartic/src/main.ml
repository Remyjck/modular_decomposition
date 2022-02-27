open Quartic
open Core_kernel
open Js_of_ocaml

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

let rec draw_tree cy (tree : Tree.tree) =
  let id = string_of_int tree.id |> Js.string in
  let group = Js.string "nodes" in
  match tree.connective with
  | Atom atom -> 
    let node = object%js
      val group = group
      val data = object%js
        val id = id
        val label = atom.label |> Js.string
        val polarisation = atom.pol |> Js.bool
      end
    end
    in
    let () = cy##add node in
    node
  | Tensor tl ->
    let () = Firebug.console##log "here" in
    let _ = List.map tl ~f:(draw_tree cy) in
    let node = object%js
      val group = group
      val data = object%js
        val id = id
        val label = Js.string "Tensor"
        val polarisation = Js.bool true
      end
    end
    in
    let () = cy##add node in
    node
  | Par tl ->
    let _ = List.map tl ~f:(draw_tree cy) in
    let node = object%js
      val group = group
      val data = object%js
        val id = id
        val label = Js.string "Par"
        val polarisation = Js.bool true
      end
    end
    in
    let () = cy##add node in
    node
  | Prime (_, tl) ->
    let _ = List.map tl ~f:(draw_tree cy) in
    let node = object%js
      val group = group
      val data = object%js
        val id = id
        val label = Js.string "Prime"
        val polarisation = Js.bool true
      end
    end
    in
    let () = cy##add node in
    node

let doc = Dom_html.document
let cy = Js.Unsafe.js_expr "cy1"
let nodes = (Js.Unsafe.coerce (get_nodes_arr cy)) |> Js.to_array
let vertices = Array.map nodes ~f:(node_to_vertex) |> Array.to_list
let edges_arr = (Js.Unsafe.coerce (get_edges_arr cy)) |> Js.to_array
let edge_list = Array.map edges_arr ~f:(to_edge vertices) |> Array.to_list

let (graph, state) = Graph.to_graph vertices edge_list
let condensed_graph = Condense.process graph state
(* let tree = Tree.tree_from_condensed condensed_graph state *)

let cy2 = Js.Unsafe.js_expr "cy2"
let () = cy2##elements##remove
(* let _ = draw_tree cy2 tree *)
