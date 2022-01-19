
type var = int

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

module AtomMap : Map.S with type key = atom

type map_graph = 
  {
      nodes : atom list;
      edges : atom list AtomMap.t;
  }

val edge_list_to_map : edge_list_graph -> map_graph

val induced_graph : map_graph -> atom list -> map_graph

val neighbours : map_graph -> atom -> atom list

val compute_neighborhoods : map_graph -> atom -> atom list * atom list

val neighbour_list : map_graph -> atom list -> atom list -> atom list