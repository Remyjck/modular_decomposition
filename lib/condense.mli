type subset =
    Singleton of Graph.vertex
  | Clique of Graph.verticies
  | IndSet of Graph.verticies

val compare_subset : subset -> subset -> int
val subset_of_sexp : Sexplib0.Sexp.t -> subset
val sexp_of_subset : subset -> Sexplib0.Sexp.t
val subset_contains : Graph.vertex -> subset -> bool
val subset_add : Graph.vertex -> subset -> subset
val condense_subset : subset -> Graph.graph -> Graph.state -> Graph.graph
val condense_prime :
  Graph.node -> Graph.verticies -> Graph.graph -> Graph.state -> Graph.graph
val condensible_subgraphs :
  Graph.graph -> (Graph.verticies, Graph.VSet.comparator_witness) Base.Set.t
val condense_set :
  (subset, 'a) Base.Set.t -> Graph.graph -> Graph.state -> Graph.graph
val condense_cliques : Graph.graph -> Graph.state -> Graph.graph
val return : Graph.graph -> Graph.state -> Graph.graph
(*Process converts a graph into the modular decomposition of the graph*)
val process : Graph.graph -> Graph.state -> Graph.graph
val isPrime : Graph.graph -> bool
