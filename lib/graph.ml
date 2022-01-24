type var = int;;

type atom = 
  {
    var : var;
    pol : bool;
  }

type visited = 
  | Unvisited
  | Visited

type vertex = 
  {
    value : atom;
    mutable visited : visited;
    mutable alpha : vertex list;
  }

type edge_list_graph =
  {
    nodes : vertex list;
    edges : (vertex * vertex) list;
  }

module AtomMap = Map.Make(struct type t = vertex let compare = compare end);;

type map_graph = 
  {
    nodes : vertex list;
    edges : vertex list AtomMap.t;
  }

let edge_list_to_map (g : edge_list_graph) = 
  let rec edge_list_to_map edges atommap = 
    match edges with
    | [] -> atommap
    | (x, y) :: t -> 
      let atommap1 = AtomMap.update x (Util.add_or_init y) atommap in
      let atommap2 = AtomMap.update y (Util.add_or_init y) atommap1 in
      edge_list_to_map t atommap2
  in
  {
    nodes = g.nodes;
    edges = edge_list_to_map g.edges AtomMap.empty
  }

let induced_graph g vertices = 
  let induced_graph_edges edges vertices = 
    AtomMap.map 
      (fun vl -> List.filter 
        (fun x -> (List.mem x vertices))
        vl)
      edges
  in
  { 
    nodes = vertices;
    edges = induced_graph_edges g.edges vertices
  }

let neighbours g x = 
  let neighb = AtomMap.find_opt x g.edges in 
  match neighb with
  | None -> []
  | Some l -> l

let non_neighborhood g neighbours =
  List.filter (fun x -> not (List.mem x neighbours)) g.nodes

let compute_neighborhoods g x =
  let neighborhood = neighbours g x in
  let nnbgh = non_neighborhood g neighborhood in
  (neighborhood, nnbgh)

let neighbour_list g neighx nnghx = 
  let rec neighbour_list g neigh nngh res = 
    match nngh with 
    | [] -> res
    | x :: t -> let neighx = neighbours g x in
      match List.find_opt (fun x -> List.mem x neigh) neighx with
      | None -> neighbour_list g neigh t res
      | Some _ -> neighbour_list g neigh t (x :: res)
  in
  neighbour_list g neighx nnghx []

let dfs graph =
  match graph.nodes with
  | [] -> []
  | start :: _ ->
    let rec rdfs visited node =
      if not (List.mem node visited) then
        begin
          let s = neighbours graph node in
          List.fold_left rdfs (node :: visited) s
        end
      else visited
    in rdfs [] start

let is_connected graph =
  let visited = dfs graph in
  List.length graph.nodes = List.length visited

let complement graph = 
  let compl_edges = AtomMap.map 
    (fun vl -> Util.list_difference graph.nodes vl)
    graph.edges
  in { nodes = graph.nodes; edges = compl_edges}
