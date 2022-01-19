type var = int;;

type atom = 
  {
    var : var;
    pol : bool;
  }

type edge_list_graph =
  {
    nodes : atom list;
    edges : (atom * atom) list;
  }

module AtomMap = Map.Make(struct type t = atom let compare = compare end);;

type map_graph = 
  {
    nodes : atom list;
    edges : atom list AtomMap.t;
  }

let add_or_init new_elem y = 
  match y with
  | None -> Some [new_elem]
  | Some z -> Some (new_elem :: z)

let rec edge_list_to_map edges atommap = 
  match edges with
  | [] -> atommap
  | (x, y) :: t -> 
    let atommap1 = AtomMap.update x (add_or_init y) atommap in
    let atommap2 = AtomMap.update y (add_or_init y) atommap1 in
    edge_list_to_map t atommap2

let edge_list_to_map (g : edge_list_graph) = 
  {
    nodes = g.nodes;
    edges = edge_list_to_map g.edges AtomMap.empty
  }

(* let rec induced_graph_edges edges vertices res = 
  match edges with
  | [] -> res 
  | (x, y) :: t -> 
    if (List.mem x vertices) && (List.mem y vertices) then
      induced_graph_edges t vertices ((x, y) :: res)
    else 
      induced_graph_edges t vertices res

let induced_graph (g : edge_list_graph) vertices : edge_list_graph =
  let induced_edges = induced_graph_edges g.edges vertices [] in
  {nodes = vertices; edges = induced_edges};; *)

let induced_graph_edges edges vertices = 
  AtomMap.map 
    (fun vl -> List.filter 
      (fun x -> (List.mem x vertices))
      vl)
    edges

let induced_graph g vertices = 
  let induced_edges = induced_graph_edges g.edges vertices in 
  { 
    nodes = vertices;
    edges = induced_edges
  }

(* let rec neighbours edges x acc =
  match edges with
  | [] -> acc
  | (y, z) :: t when (z = x) -> neighbours t x (y :: acc)
  | (z, y) :: t when (z = x) -> neighbours t x (y :: acc)
  | _ :: t -> neighbours t x acc

let neighbours (g : edge_list_graph) x = 
  neighbours g.edges x [];; *)

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

(* let rec is_edge edges (x, y) =
  match edges with
  | [] -> false
  | (i, j) :: t -> if (i = x && j = y) || (i = y && j = x) then true else is_edge t (x, y)

let rec neighbour_list edges x neighb = 
  match neighb with 
  | [] -> false
  | y :: t -> if is_edge edges (x, y) then true else neighbour_list edges x t

let rec neighbours_list (g : edge_list_graph) n nl na =
  match nl with
  | [] -> na
  | x :: t -> if neighbour_list g.edges x n then neighbours_list g n nl (x :: na) else neighbours_list g n t na *)

let rec neighbour_list g neigh nngh res = 
  match nngh with 
  | [] -> res
  | x :: t -> let neighx = neighbours g x in
    match List.find_opt (fun x -> List.mem x neigh) neighx with
    | None -> neighbour_list g neigh t res
    | Some _ -> neighbour_list g neigh t (x :: res)

let neighbour_list g neighx nnghx = 
  neighbour_list g neighx nnghx []