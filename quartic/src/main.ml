open Quartic
open Base
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

let draw_prime_graph cy parent (id_graph : Tree.id_graph) =
  let () = List.iter id_graph.nodes ~f:(fun id ->
    let rep_id = String.concat [(Int.to_string id); "-rep"] |> Js.string in
    let node = object%js 
      val group = Js.string "nodes"
      val data = object%js
        val label = Js.string ""
        val polarisation = true
        val id = rep_id
        val parent = parent
      end
    end
    in
    let _ = cy##add (Js.Unsafe.coerce node) in
    let edge = object%js
      val data = object%js
        val source = rep_id
        val target = id
      end
    end
    in
    let added_edge = cy##add (Js.Unsafe.coerce edge) in
    (Js.Unsafe.coerce added_edge)##addClass (Js.string "compoundOut"))
  in
  let () = List.iter id_graph.edges ~f:(fun (id1, id2) ->
    let edge = object%js
      val data = object%js
        val source = String.concat [(Int.to_string id1); "-rep"] |> Js.string
        val target = String.concat [(Int.to_string id2); "-rep"] |> Js.string
      end
    end
    in
    let added_edge = cy##add (Js.Unsafe.coerce edge) in
    (Js.Unsafe.coerce added_edge)##addClass (Js.string "compoundIn"))
  in
  ()

let rec draw_tree cy (tree : Tree.tree) =
  let id = Int.to_string tree.id |> Js.string in
  let group = Js.string "nodes" in
  let label, polarisation, id_list =
    match tree.connective with
    | Atom atom -> Js.string atom.label, Js.bool atom.pol, None
    | Tensor tl ->
      let id_list = List.map tl ~f:(draw_tree cy) in
      Js.string "⊗", Js.bool true, Some id_list
    | Par tl ->
      let id_list = List.map tl ~f:(draw_tree cy) in
      Js.string "⅋", Js.bool true, Some id_list
    | Prime (_, tl) ->
      let id_list = List.map tl ~f:(draw_tree cy) in
      Js.string "", Js.bool true, Some id_list
  in
  let node = object%js
    val group = group
    val data = object%js
      val id = id
      val label = label
      val polarisation = polarisation
    end
  end
  in
  let () = cy##add (Js.Unsafe.coerce node) in
  let () = 
    match id_list with
    | None -> ()
    | Some ids ->
      match tree.connective with
      | Prime (id_graph,_) -> draw_prime_graph (Js.Unsafe.coerce cy) id id_graph 
      | _ ->
        List.iter ids ~f:(fun target_id ->
          let edge = object%js 
            val data = object%js
              val source = id
              val target = target_id
            end
          end
          in
          cy##add (Js.Unsafe.coerce edge))
  in    
  (Int.to_string tree.id) |> Js.string

let get_layout cy root =
  let name = if ((cy##nodes (Js.string ":child"))##toArray |> Js.to_array |> Array.length) > 0 then 
    "cose-bilkent"
    else
    "breadthfirst"
  in
  let options = object%js
    val name = name |> Js.string
    val animate = Js.bool false
    val roots = [|root|]
    val spacingFactor = 1.0
    val directed = true
  end
  in
  cy##layout options

let decompose () =
  let cy = Js.Unsafe.js_expr "cy1" in
  let nodes = (Js.Unsafe.coerce (get_nodes_arr cy)) |> Js.to_array in
  let vertices = Array.map nodes ~f:(node_to_vertex) |> Array.to_list in
  let edges_arr = (Js.Unsafe.coerce (get_edges_arr cy)) |> Js.to_array in
  let edge_list = Array.map edges_arr ~f:(to_edge vertices) |> Array.to_list in

  let (graph, state) = Graph.to_graph vertices edge_list in
  let condensed_graph = Condense.process graph state in
  let tree = Tree.tree_from_condensed condensed_graph state in

  let cy2 = Js.Unsafe.js_expr "cy2" in
  let () = cy2##elements##remove in
  match tree with
  | None -> ()
  | Some tree ->
    let root = draw_tree cy2 tree in
    let _ = (get_layout cy2 root)##run in
    ()

let _ = Js.export_all (object%js method decompose = decompose () end)

