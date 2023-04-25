type id_graph = { nodes : int list; edges : (int * int) list }

val length : id_graph -> int
val is_sub_iso : id_graph -> id_graph -> bool
val is_iso : id_graph -> id_graph -> bool
val completetion_graph : id_graph -> id_graph
val id_graph_complement : id_graph -> id_graph
val is_dual : id_graph -> id_graph -> bool
