
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
(** [induced_graph graph vertices] returns the graph induced by [vertices] *)

val neighbours : map_graph -> atom -> atom list

val compute_neighborhoods : map_graph -> atom -> atom list * atom list
(** [compute_neighborhoods graph vertex] returns a tuple containing
    the neighborhood and non-neighborhood of the vertex *)

val neighbour_list : map_graph -> atom list -> atom list -> atom list
(** [neighbour_list graph neighbour_list list] returns the sublist of [list] 
    where the elements have at least one neighbour in [neighbour] *)
