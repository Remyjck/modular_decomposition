
type var = int

type atom = 
  {
      var : var;
      pol : bool;
  }

type vertex = 
  {
    value : atom;
    id : int;
  }

type edge_list_graph = 
  {
      nodes : vertex list;
      edges : (vertex * vertex) list;
  }

module AtomMap : Map.S with type key = vertex

type map_graph = 
  {
      nodes : vertex list;
      edges : vertex list AtomMap.t;
  }

val edge_list_to_map : edge_list_graph -> map_graph

val induced_graph : map_graph -> vertex list -> map_graph
(** [induced_graph graph vertices] returns the graph induced by [vertices] *)

val neighbours : map_graph -> vertex -> vertex list

val compute_neighborhoods : map_graph -> vertex -> vertex list * vertex list
(** [compute_neighborhoods graph vertex] returns a tuple containing
    the neighborhood and non-neighborhood of the vertex *)

val neighbour_list : map_graph -> vertex list -> vertex list -> vertex list
(** [neighbour_list graph neighbour_list list] returns the sublist of [list] 
    where the elements have at least one neighbour in [neighbour] *)

val dfs : map_graph -> vertex list

val is_connected : map_graph -> bool

val complement : map_graph -> map_graph