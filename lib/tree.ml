open Base
open Id_graph

let (=) = Poly.(=)

type connective =
  | Atom of Graph.atom
  | Tensor of tree list
  | Par of tree list
  | Prime of id_graph * (tree list)

and tree = {
    connective : connective;
    id: int;
    }

let successors tree =
  match tree.connective with
  | Atom _ -> []
  | Tensor tl -> tl
  | Par tl -> tl
  | Prime (_, tl) -> tl

let from_map (map: Util.IMap.t) =
  let nodes = Map.keys map in
  let edges =
    let rec id_tuples_from_map (map : Util.IMap.t) =
      if Map.is_empty map then
        []
      else
        let id, id_neighbours = Map.min_elt_exn map in
        let new_imap = Util.remove_id id map
        in
        let new_edges = Set.fold id_neighbours
          ~init:[]
          ~f:(fun accum id2 -> (id, id2) :: accum)
        in
        new_edges @ id_tuples_from_map new_imap
    in
    id_tuples_from_map map
  in
  {nodes = nodes; edges = edges}

let tree_from_condensed (graph : Graph.graph) state =
  let () = assert(Set.length graph.nodes <= 1) in
  match Set.choose graph.nodes with
    | None -> None
    | Some root ->
      let rec tree_from_id id (state : Graph.state) =
        let vertex : Graph.vertex = Hashtbl.find_exn state.id_map id in
        match vertex.connective with
        | Graph.Atom atom -> {connective = Atom atom; id = vertex.id}
        | Graph.Tensor iset ->
          let tree_list = trees_from_id_list (Set.elements iset) state in
          let tensor_lists, tree_list = List.partition_map tree_list ~f:(fun t ->
            match t.connective with
            | Tensor tl -> First tl
            | _ -> Second t)
          in
          let successors = List.concat (tree_list :: tensor_lists) in
          {connective = Tensor successors; id = vertex.id}
        | Graph.Par iset ->
          let tree_list = trees_from_id_list (Set.elements iset) state in
          let par_lists, tree_list = List.partition_map tree_list ~f:(fun t ->
            match t.connective with
            | Par tl -> First tl
            | _ -> Second t)
          in
          let successors = List.concat (tree_list :: par_lists) in
          {connective = Par successors; id = vertex.id}
        | Graph.Prime map ->
          let id_graph = from_map map in
          let tree_list = trees_from_id_list id_graph.nodes state in
          {connective = Prime (id_graph, tree_list); id = vertex.id}

      and trees_from_id_list id_list state =
        List.map id_list ~f:(Fn.flip tree_from_id state)
      in
      Some (tree_from_id root.id state)

let tree_from_graph graph state = tree_from_condensed (Condense.process graph state) state

(** [tree_to_graph tree] converts a tree to a graph *)
let tree_to_graph tree =
  let join_sets vs1 vs2 =
    Set.fold vs1 ~init:([]) ~f:(fun li vi ->
      Set.fold vs2 ~init:(li) ~f:(fun lj vj -> (vi, vj) :: lj))
  in
  let rec tree_to_graph_r tree =
    match tree.connective with
    | Atom atom ->
      let node = Set.singleton (module Graph.Vertex) {connective=Atom atom; id=tree.id} in
      (node, [])

    | Par tl ->
      let nodes, edges = List.fold tl ~init:(Graph.empty_vertex_set (), [])
        ~f:(fun (vset, el) t ->
          let nodes, el_to_add = tree_to_graph_r t in
          (Set.union vset nodes, el_to_add @ el))
      in
      (nodes, edges)

    | Tensor tl ->
      let nel = List.map tl ~f:(tree_to_graph_r) in
      let nodes, edges = List.fold nel ~init:(Graph.empty_vertex_set (), [])
        ~f:(fun (vsetacc, elacc) (vset, el) ->
          let vertices = Set.union vsetacc vset in
          let edge_base = el @ elacc in
          let edges = join_sets vsetacc vset in
          vertices, edges @ edge_base)
      in
      (nodes, edges)
    | Prime (id_graph, tl) ->
      let vertices, edges, id_map = List.fold tl ~init:(Graph.empty_vertex_set (), [], Map.empty (module Int))
        ~f:(fun (vset, el, map) t ->
          let nodes, edges = tree_to_graph_r t in
          let nmap = Map.add_exn map ~key:t.id ~data:nodes in
          (Set.union vset nodes, edges @ el, nmap))
      in
      let new_edges = List.fold id_graph.edges ~init:([])
        ~f:(fun el (id1, id2) ->
          let new_edges = join_sets
            (Graph.find_or_empty id_map id1)
            (Graph.find_or_empty id_map id2)
          in
          new_edges @ el)
      in
      (vertices, new_edges @ edges)
  in
  let vertices, edges = tree_to_graph_r tree in
  let edges = Graph.edge_maps edges in
  {Graph.nodes = vertices; edges = edges}

let show tree = Graph.show (tree_to_graph tree)




let rec is_dual t1 t2 = match t1.connective, t2.connective with
| Prime (idg1, sub1), Prime (idg2, sub2) -> (Id_graph.is_dual idg1 idg2) && Caml.List.for_all2 is_dual sub1 sub2 (*very suboptimal and also bad*)
| Atom a, Atom b -> Graph.is_dual_atom a b
| Tensor sub1, Tensor sub2 -> Caml.List.for_all2 is_dual sub1 sub2
| Par sub1, Par sub2 -> Caml.List.for_all2 is_dual sub1 sub2
| _ -> false

let rec struct_equal t1 t2 = match t1.connective, t2.connective with
| Prime (_, []), Prime (_, []) -> true
| Prime (_, (_::_)), Prime (_, []) -> false
| Prime (_, []), Prime (_, (_::_)) -> false
| Prime (idg1, sub1), Prime (idg2, sub2) -> (Id_graph.is_iso idg1 idg2) && Caml.List.for_all2 struct_equal sub1 sub2 (*very suboptimal and also bad*)
| Atom a, Atom b -> a = b
| Tensor [], Tensor [] -> true
| Tensor (_::_), Tensor [] -> false
| Tensor [], Tensor (_::_) -> false
| Tensor sub1, Tensor sub2 -> Caml.List.for_all2 struct_equal sub1 sub2
| Par [], Par [] -> true
| Par (_::_), Par [] -> false
| Par [], Par (_::_) -> false
| Par sub1, Par sub2 -> Caml.List.for_all2 struct_equal sub1 sub2
| _ -> false

let rec is_empty tree = match tree.connective with
| Prime (_, []) -> true
| Prime (_, sub) -> Caml.List.for_all is_empty sub
| Atom _ -> false
| Tensor [] -> true
| Tensor sub -> Caml.List.for_all is_empty sub
| Par [] -> true
| Par sub -> Caml.List.for_all is_empty sub

let simplify tree = tree (*drop empty nodes, drop singleton nodes and propagate up, etc*)
