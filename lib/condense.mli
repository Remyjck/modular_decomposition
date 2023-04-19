type subset =
    Singleton of Graph.vertex
  | Clique of Graph.verticies
  | IndSet of Graph.verticies
val compare_subset : subset -> subset -> int
val subset_of_sexp : Sexplib0.Sexp.t -> subset
val sexp_of_subset : subset -> Sexplib0.Sexp.t
val subset_contains : Graph.vertex -> subset -> bool
val smallest_condensible: Graph.graph -> Graph.verticies -> Graph.verticies option
val subset_add : Graph.vertex -> subset -> subset
(*Process converts a graph into the modular decomposition of the graph*)
val process : Graph.graph -> Graph.graph
val isPrime : Graph.graph -> bool
val tree_from_graph: Graph.graph  -> Tree.tree option
