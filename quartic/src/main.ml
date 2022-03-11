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
    let added_node = cy##add (Js.Unsafe.coerce node) in
    let edge = object%js
      val data = object%js
        val source = rep_id
        val target = id
      end
    end
    in
    let added_edge = cy##add (Js.Unsafe.coerce edge) in
    let () = (Js.Unsafe.coerce added_edge)##addClass (Js.string "compoundOut") in
    (Js.Unsafe.coerce added_node)##addClass (Js.string "inCompound"))
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
    | Before tl ->
      let id_list = List.map tl ~f:(draw_tree cy) in
      Js.string "◃", Js.bool true, Some id_list
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


  let directed = Js.Unsafe.js_expr "directed" |> Js.to_bool in
  let (graph, state) = Graph.to_graph ~directed:directed vertices edge_list in
  let condensed_graph = Condense.process graph state in
  let tree = Tree.tree_from_condensed condensed_graph state in

  let cy2 = Js.Unsafe.js_expr "cy2" in
  let removed = cy2##elements##remove in
  let () = cy2##.changes##push ([|Js.Unsafe.inject (Js.string "remove"); removed|] |> Js.array) in
  match tree with
  | None -> ()
  | Some tree ->
    let () = Js.Unsafe.global##.tree := (Parsegraph.serialize_tree tree |> Yojson.Basic.pretty_to_string |> Js.string) in
    let root = draw_tree cy2 tree in
    let root_node = cy2##nodes (String.concat ["#";Js.to_string root] |> Js.string) in
    let () = (Js.Unsafe.coerce root_node)##addClass (Js.string "root") in
    let () = cy2##.changes##push ([|Js.Unsafe.inject (Js.string "replace"); cy2##elements|] |> Js.array) in
    let _ = (get_layout cy2 root)##run in
    ()

let rec read_prime root id =
  let children = root##children |> Js.to_array |> Array.to_list in
  let () = assert (List.length children > 3) in
  let nodes = List.map children ~f:(fun c -> 
    let node_id_s = c##id |> Js.to_string in
    Util.remove_rep node_id_s)
  in
  let edge_objs = (Js.Unsafe.coerce root##children)##connectedEdges
    (Js.string ".compoundIn") |> Js.to_array |> Array.to_list
  in
  let edges = List.map edge_objs ~f:(fun edge ->
    let source = edge##source##id |> Js.to_string |> Util.remove_rep in
    let target = edge##target##id |> Js.to_string |> Util.remove_rep in
    (source, target))
  in
  let successors_objs = ((Js.Unsafe.coerce root##children)##outgoers (Js.string "node"))##orphans
    |> Js.to_array |> Array.to_list
  in
  let successors = List.map successors_objs ~f:read_tree in
  let id_graph = {Tree.nodes = nodes; edges = edges} in
  let connective = Tree.Prime (id_graph, successors) in
  {Tree.connective = connective; id = id}

and read_atom node id label =
  let pol = node##data (Js.string "polarisation") |> Js.to_bool in
  let connective = Tree.Atom {Graph.label = label; pol = pol} in
  {Tree.connective = connective; id = id}

and read_tree root =
  let label_string = root##data (Js.string "label") |> Js.to_string in
  let id = root##data (Js.string "id") |> Js.parseInt in
  if String.equal label_string "" then read_prime root id else
  let successors = root##outgoers (Js.string "node") |> Js.to_array |> Array.to_list in
  if List.is_empty successors then read_atom (Js.Unsafe.coerce root) id label_string else
  let tl = List.map successors ~f:read_tree in
  let connective =
    if String.equal label_string "⊗" then 
      Tree.Tensor tl
    else 
      if String.equal label_string "◃" then
        Tree.Before tl
      else
        if String.equal label_string "⅋" then
          Tree.Par tl
        else
          raise_s (Sexp.message "error" [])
  in
  {Tree.connective = connective; id = id}

let draw_graph ?directed cy (graph : Graph.graph) =
  Set.iter graph.nodes ~f:(fun v ->
    match v.connective with
    | Atom atom -> 
      let node = object%js
        val group = Js.string "nodes"
        val data = object%js
          val id = Int.to_string v.id |> Js.string
          val label = Js.string atom.label
          val polarisation = Js.bool atom.pol
        end
      end
      in
      cy##add node 
    | _ -> ());
  let edge_list = Graph.get_edge_list ?directed:directed graph in
  List.iter edge_list ~f:(fun (src, trgt) ->
    let edge = object%js
      val group = Js.string "edges"
      val data = object%js
        val source = Int.to_string src.id |> Js.string
        val target = Int.to_string trgt.id |> Js.string
      end
    end
    in
    (Js.Unsafe.coerce cy)##add edge)

let recompose () =
  let cy = Js.Unsafe.js_expr "cy2" in
  let root_arr = cy##nodes (Js.string ".root") |> Js.to_array in 
  if Array.is_empty root_arr then () else
  let root = Array.get root_arr 0 in
  let tree = read_tree root in
  let directed = Js.Unsafe.js_expr "directed" |> Js.to_bool in
  let graph = Tree.tree_to_graph ~directed:directed tree in

  let cy1 = Js.Unsafe.js_expr "cy1" in
  let removed = cy1##elements##remove in
  let () = cy1##.changes##push ([|Js.Unsafe.inject (Js.string "remove"); removed|] |> Js.array) in
  let () = draw_graph ~directed:directed cy1 graph in
  let () = cy1##.changes##push ([|Js.Unsafe.inject (Js.string "replace"); cy1##elements|] |> Js.array) in
  Js.Unsafe.global##cleanLayout(cy1)

let isPrimeIdGraph idGraph =
  let jsnode_list = idGraph##nodes |> Js.to_array |> Array.to_list in
  let jsedge_list = idGraph##edges |> Js.to_array |> Array.to_list in
  let node_list = List.map jsnode_list ~f:(fun n ->
    let label = n##id |> Js.to_string in
    let id =  Util.remove_rep label in
    let atom = Graph.Atom {Graph.label = label; pol = true} in
    {Graph.connective = atom; id = id})
  in
  let edge_list = List.map jsedge_list ~f:(fun e ->
    let source_id = e##data (Js.string "source") |> Js.to_string |> Util.remove_rep in
    let target_id = e##data (Js.string "target") |> Js.to_string |> Util.remove_rep in
    let source = List.find_exn node_list ~f:(fun v -> v.id = source_id) in
    let target = List.find_exn node_list ~f:(fun v -> v.id = target_id) in
    (source, target))
  in
  let graph, _ = Graph.to_graph node_list edge_list in
  Condense.isPrime graph

let getTreeJson () =
  Js.Unsafe.global##.tree

let _ = Js.export_all (object%js
  method decompose = decompose ()
  method getTreeJson = getTreeJson ()
  method recompose = recompose ()
  method isPrime graph = isPrimeIdGraph graph
  end)

