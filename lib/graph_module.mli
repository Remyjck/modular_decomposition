type context = {
  graph : Graph.graph;
  connnected : Graph.verticies;
}

val share_module :
  Graph.graph -> Graph.vertex -> Graph.vertex -> bool

val is_module : Graph.graph -> Graph.verticies -> bool

val create_context :
  Graph.graph -> Graph.verticies -> context option

  (*

  val apply_context: context -> Graph.Graph -> Graph.Graph
     *)


(** keep_links g h v, finds all the nodes connected to v in g - h*)
val keep_links: Graph.graph -> Graph.verticies -> Graph.vertex -> Graph.verticies
