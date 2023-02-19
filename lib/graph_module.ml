open Base
open Graph

type context = {graph: graph; connnected: verticies; }

let share_module graph vi vj =
  let si = find_or_empty graph.edges vi |> Fn.flip Set.remove vj in
  let sj = find_or_empty graph.edges vj |> Fn.flip Set.remove vi in
  VSet.equal si sj

let keep_links g (h:verticies) v : verticies =
  let new_h = Set.remove h v in
  match Map.find (graph_difference g new_h).edges v with
  | None -> Set.empty (module Vertex)
  | Some vset -> vset

let is_module g (h:verticies) =
  let connected =
    match Set.choose h with
    | None -> Set.empty (module Vertex)
    | Some v ->
    keep_links g h v
  in
  Set.for_all h
    ~f:(fun v ->
      let v_connected = keep_links g h v in
      Set.equal connected v_connected)




let create_context graph modu =
  if is_module graph modu then (*remove incident edges or smth*)
    let remGraph = graph_difference graph modu in
    let singleVertexOpt = Set.find modu ~f:(fun _ -> true) in
    match singleVertexOpt with
    | None -> None
    | Some v ->
      let r = keep_links graph modu v in
      Some {graph= remGraph; connnected= r}
  else None

(*take context and graph and make the new graph boom done*)
(*
let apply_context context graph =
  let new_nodes = Set.union graph.nodes context.graph.nodes in
  let basic_edges = Map.merge graph.edges context.graph.edges ~f:(*TODO*) in
  let new_edges = connect_vertices context.connnected graph.nodes (empty_graph ()) in
  let new_edges = Map.merge new_edges.edges basic_edges  in
  {nodes=new_nodes; edges=new_edges}
   *)


