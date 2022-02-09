
type atom = 
  {
    var : int;
    pol : bool;
  }

module IMap = Map.Make(Int)
module ISet = Set.Make(Int)

type node =
  | Atom of atom
  | Tensor of ISet.t
  | Par of ISet.t
  | Prime of ISet.t IMap.t

type vertex = 
  {
    connective : node;
    id : int;
  }

module Vertex = struct
  type t = vertex
  let compare v1 v2 = Int.compare v1.id v2.id
end

module VMap = Map.Make(Vertex)
module VSet = Set.Make(Vertex)

type graph =
  {
    nodes : VSet.t;
    edges : VSet.t VMap.t;
  }

let total_vertices = ref 0

let fresh_id = 
  total_vertices := !total_vertices + 1;
  !total_vertices - 1

(** [<~> graph vertices]: subgraph of [graph] that contains all vertices not in [vertices] *)
let (<~>) graph vertices =
  let nodes = VSet.diff graph.nodes vertices in
  let edges =
    VMap.filter (fun v _ -> not (VSet.mem v vertices)) graph.edges
    |> VMap.map (fun s -> VSet.diff s vertices)
  in
  {nodes = nodes; edges = edges}

(** [induced_subgraph graph vertices]: subgraph of [graph] that contains only the vertices in [vertices]  *)
let induced_subgraph graph vertices =
  let edges = 
    VMap.filter (fun v _ -> (VSet.mem v vertices)) graph.edges
    |> VMap.map (fun s -> VSet.inter s vertices)
  in
  {nodes = vertices; edges = edges}

(** [connected graph vertices]: set of vertices to which [vertices] is connected *)
let connected graph vertices =
    VSet.fold (fun v -> VMap.find v graph |> VSet.union) vertices VSet.empty

(** [w G H h]: set of vertices of [G <~> H] to which [h] is connected *)
let w g h v =
  VMap.find v (g <~> h).edges 
  
(** [is_module G H]: checks if [H] is a module of [G] *)  
let is_module g h =
  let connected = VSet.choose h |> w g h in
  VSet.for_all (fun v -> connected = w g h v)

(** [remove_vertex vertex edges]: given a mapping [edges], remove [vertex] from its keys and values  *)
let remove_vertex v edges =
  VMap.filter (fun vi _ -> not (vi = v)) edges
  |> VMap.map (VSet.remove v)

(** [edge_tuple_list edges]: given a mapping [edges], return a corresponding list of edges (non-repeating) *)
let rec edge_tuple_list edge_map =
  if VMap.is_empty edge_map then
    []
  else
    let vi, vi_neighbours = VMap.choose edge_map in
    let new_edge_map = remove_vertex vi edge_map in
    if VSet.is_empty vi_neighbours then edge_tuple_list new_edge_map else
    let new_edges = VSet.fold (fun vj -> List.cons (vi, vj)) vi_neighbours [] in
    new_edges @ edge_tuple_list new_edge_map

(** [smallest_condensible graph set]: returns the smallest condensible set containing all vertices of [set] *)
let smallest_condensible g v =
  let vl = VSet.elements v in
  let rec smallest_condesible wl i b =
    if i > List.length wl then
      VSet.of_list wl
    else
      let wi = List.nth wl (i-1) in
      let connected = w g (VSet.of_list wl) wi in
      let new_b = VSet.union connected b in
      let to_add = 
        VSet.diff (new_b) (VSet.inter b connected)
        |> VSet.elements
      in
      let new_wl = List.append wl to_add in
      smallest_condesible new_wl (i+1) new_b
  in
  let b = w g v (List.hd vl) in
  smallest_condesible vl 2 b

type subset =
  | Clique of VSet.t 
  | IndSet of VSet.t

module Subset = struct
  type t = subset
  let compare s1 s2 =
    match s1, s2 with
    | Clique ss1, Clique ss2 -> VSet.compare ss1 ss2
    | IndSet ss1, IndSet ss2 -> VSet.compare ss1 ss2
    | Clique _, IndSet _ -> 1
    | IndSet _, Clique _ -> 0
end

module Subsetset = Set.Make(Subset)

let update_subset subset vi vi_neighbours vj vj_neighbours =
  match subset with
  | IndSet set -> 
    if vj_neighbours = vi_neighbours then
      IndSet (VSet.add vj set)
    else
      subset
  | Clique set ->
    if vj_neighbours = (VSet.add vi vi_neighbours) then
      Clique (VSet.add vj set)
    else if (VSet.cardinal set = 1) && (vj_neighbours = vi_neighbours) then
      IndSet (VSet.add vj set)
    else
      subset

(** [update_subsetset subsetset new_subset]: given a set of subsets [subsetset], update it by adding [new_subset] *)
let update_subsetset subsetset new_subset =
  match new_subset with
  | IndSet _ -> Subsetset.add new_subset subsetset
  | Clique set ->
    if VSet.cardinal set = 1 then
      subsetset
    else 
      (Subsetset.add new_subset subsetset)

(** [cc_and_is graph]: returns the set of maximal condensible cliques and independent set of [graph] *)
let cc_and_is g =
  let len_v = (VSet.cardinal g.nodes) in
  let v = VSet.elements g.nodes in
  let rec iterate_i i res =
    if i >= len_v then
      res
    else
      let vi = List.nth v (i-1) in
      let vi_neighbours = VMap.find vi g.edges in
      let rec iterate_j j subset =
        if j >= len_v then
          subset
        else
          let vj = List.nth v (j-1) in
          let vj_neighbours = VMap.find vj g.edges in
          let updated_subset = update_subset subset vi vi_neighbours vj vj_neighbours in
          iterate_j (j+1) updated_subset
      in
      let j = i+1 in
      let new_subset = iterate_j j (Clique (VSet.singleton vi)) in
      let updated_res = update_subsetset res new_subset in
      iterate_i (i+1) updated_res
  in
  iterate_i 1 (Subsetset.empty)

type connective =
  | ParCon
  | TensorCon
  | PrimeCon

let replace graph h vertex =
  let new_nodes = VSet.diff graph.nodes h |> VSet.add vertex in
  let new_edges =
    VMap.filter (fun v _ -> not (VSet.mem v h)) graph.edges
    |> VMap.map (fun s -> 
      if VSet.disjoint s h then
        s
      else
        VSet.add vertex s |> Util.flip VSet.diff h)
  in
  {nodes = new_nodes; edges = new_edges}

let vset_to_iset vset =
  VSet.fold (fun v -> ISet.add v.id) vset ISet.empty

let iset_to_vset map iset =
  ISet.fold (fun i -> VSet.add (IMap.find i map)) iset VSet.empty

let vmap_to_imap map =
  VMap.fold
    (fun k v -> IMap.add k.id (vset_to_iset v))
    map
    IMap.empty

let subset_set_to_nodes subsetset =
  Subsetset.fold
    (fun ss -> 
      let node =
        match ss with
        | Clique vset -> Tensor (vset_to_iset vset)
        | IndSet vset -> Par (vset_to_iset vset)
      in
      List.cons node)
    subsetset
    []

  (* | PrimeCon -> 
    let subgraph = induced_subgraph graph h in
    Prime (vmap_to_imap subgraph.edges) *)

let condense_subset graph subset =
  let h, node = 
    match subset with
    | Clique set -> set, Tensor (vset_to_iset set)
    | IndSet set -> set, Par (vset_to_iset set)
  in
  let new_vertex = 
    {
      connective = node;
      id = fresh_id;
    }
  in
  replace graph h new_vertex

let condense_prime graph node vertices =
  let new_vertex =
    {
      connective = node;
      id = fresh_id;
    }
  in 
  replace graph vertices new_vertex

let vertex_neighbour_pairs v edge_map =
  List.map 
    (fun vi ->
      let vi_neighbours = VMap.find vi edge_map in
      let vj = VSet.choose vi_neighbours in
      VSet.of_list [vi; vj])
    v

module VSetSet = Set.Make(VSet)

(** [condensible_subgraphs graph]: corresponds to algorithm 3.6 of the paper *)
let condensible_subgraphs graph =
  let v = VSet.elements graph.nodes in
  let edges = vertex_neighbour_pairs v graph.edges in
  let h = List.map (smallest_condensible graph) edges in
  let () = assert (List.length v = List.length h) in
  let m = List.map (VSet.cardinal) h in
  let to_delete vi =
    let i = Util.index vi v in
    let hi = List.nth h i in
    let mi = List.nth m i in
    let hj = VSet.filter (fun vj -> Util.before vi vj v) hi in
    VSet.fold 
      (fun vj -> 
        let j = Util.index vj v in
        let mj = List.nth m j in
        if mj >= mi then VSetSet.add (List.nth h j) else VSetSet.add hi)
      hj
      VSetSet.empty
    |> VSetSet.elements
  in
  let to_delete = List.concat_map to_delete v in
  VSetSet.diff (VSetSet.of_list h) (VSetSet.of_list to_delete)
    
let condense_set graph subsets =
  Subsetset.fold
    (fun ss -> Util.flip condense_subset ss)
    subsets
    graph

let rec condense_cliques graph =
  let cliques_and_ind = cc_and_is graph in
  if Subsetset.is_empty cliques_and_ind then
    graph
  else
    condense_cliques (condense_set graph cliques_and_ind)

let rec process graph =
  if VSet.cardinal graph.nodes = 1 then graph else
  let condensed_graph = condense_cliques graph in
  let min_cond = condensible_subgraphs condensed_graph in
  if VSetSet.is_empty min_cond then
    condensed_graph
  else
    let prime_list = 
      VSetSet.fold 
        (fun vset -> 
          let subgraph = induced_subgraph condensed_graph vset in
          List.cons ((Prime (vmap_to_imap subgraph.edges)), vset))
        min_cond
        []
    in
    let prime_condensed_graph =
      List.fold_left 
        (fun graph (node, h) -> condense_prime graph node h)
        condensed_graph
        prime_list 
    in
    process prime_condensed_graph
