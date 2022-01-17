type var = int;;

type atom = 
  {var : var;
   pol : bool};;

type graph_term =
  {nodes : atom list;
   edges : (atom * atom) list};;

let rec induced_graph_edges edges vertices res = 
  match edges with
  | [] -> res 
  | (x, y) :: t -> if (List.mem x vertices) && (List.mem y vertices)
                   then induced_graph_edges t vertices ((x, y) :: res)
                   else induced_graph_edges t vertices res
  ;;

let induced_graph g vertices =
  let induced_edges = induced_graph_edges g.edges vertices [] in
  {nodes = vertices; edges = induced_edges};;

let rec neighbours edges x acc =
  match edges with
  | [] -> acc
  | (y, z) :: t when (z = x) -> neighbours t x (y :: acc)
  | (z, y) :: t when (z = x) -> neighbours t x (y :: acc)
  | _ :: t -> neighbours t x acc

let neighbours g x = 
  neighbours g.edges x [];;

let non_neighborhood g neighbours =
  List.filter (fun x -> not (List.mem x neighbours)) g.nodes;;

let compute_neighborhoods g x =
  let neighborhood = neighbours g x in
  (neighborhood, non_neighborhood g neighborhood);;

let decomposition_trees g =
  let x = List.hd g.nodes in
    let (neighborhood, non_neighborhood) = compute_neighborhoods g x in
    let gnx = induced_graph g neighborhood in
    [gnx, x, non_neighborhood]