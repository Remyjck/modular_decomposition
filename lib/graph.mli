type atom = { label : string; pol : bool; }
type node =
    Atom of atom
  | Tensor of Util.ISet.t
  | Par of Util.ISet.t
  | Prime of Util.IMap.t
type vertex = { connective : node; id : int; }
val compare_vertex : vertex -> vertex -> int
val vertex_of_sexp : Sexplib0.Sexp.t -> vertex
val sexp_of_vertex : vertex -> Sexplib0.Sexp.t
val hash_vertex : vertex -> int
val getLabel : vertex -> string
module Vertex :
  sig
    module T :
      sig
        type t = vertex
        val compare : t -> t -> int
        val t_of_sexp : Sexplib0.Sexp.t -> t
        val sexp_of_t : t -> Sexplib0.Sexp.t
        val hash_fold_t :
          Base_internalhash_types.state -> t -> Base_internalhash_types.state
        val hash : t -> int
        val show : vertex -> unit
      end
    type t = vertex
    val t_of_sexp : Sexplib0.Sexp.t -> t
    val sexp_of_t : t -> Sexplib0.Sexp.t
    val hash_fold_t :
      Base_internalhash_types.state -> t -> Base_internalhash_types.state
    val hash : t -> int
    val show : vertex -> unit
    val ( >= ) : T.t -> T.t -> bool
    val ( <= ) : T.t -> T.t -> bool
    val ( = ) : T.t -> T.t -> bool
    val ( > ) : T.t -> T.t -> bool
    val ( < ) : T.t -> T.t -> bool
    val ( <> ) : T.t -> T.t -> bool
    val equal : T.t -> T.t -> bool
    val compare : T.t -> T.t -> int
    val min : T.t -> T.t -> T.t
    val max : T.t -> T.t -> T.t
    val ascending : T.t -> T.t -> int
    val descending : T.t -> T.t -> int
    val between : T.t -> low:T.t -> high:T.t -> bool
    val clamp_exn : T.t -> min:T.t -> max:T.t -> T.t
    val clamp : T.t -> min:T.t -> max:T.t -> T.t Base.Or_error.t
    type comparator_witness = Base.Comparable.Make(T).comparator_witness
    val comparator : (T.t, comparator_witness) Base.Comparator.t
  end
val vertex_index : Vertex.T.t -> Vertex.T.t list -> int
module VSet :
  sig
    module T :
      sig
        type t = Base.Set.M(Vertex).t
        val compare : t -> t -> int
        val t_of_sexp : Sexplib0.Sexp.t -> t
        val sexp_of_t : t -> Sexplib0.Sexp.t
        val hash_fold_t :
          Base_internalhash_types.state -> t -> Base_internalhash_types.state
        val hash : t -> int
      end
    type t = Base.Set.M(Vertex).t
    val t_of_sexp : Sexplib0.Sexp.t -> t
    val sexp_of_t : t -> Sexplib0.Sexp.t
    val hash_fold_t :
      Base_internalhash_types.state -> t -> Base_internalhash_types.state
    val hash : t -> int
    val ( >= ) : T.t -> T.t -> bool
    val ( <= ) : T.t -> T.t -> bool
    val ( = ) : T.t -> T.t -> bool
    val ( > ) : T.t -> T.t -> bool
    val ( < ) : T.t -> T.t -> bool
    val ( <> ) : T.t -> T.t -> bool
    val equal : T.t -> T.t -> bool
    val compare : T.t -> T.t -> int
    val min : T.t -> T.t -> T.t
    val max : T.t -> T.t -> T.t
    val ascending : T.t -> T.t -> int
    val descending : T.t -> T.t -> int
    val between : T.t -> low:T.t -> high:T.t -> bool
    val clamp_exn : T.t -> min:T.t -> max:T.t -> T.t
    val clamp : T.t -> min:T.t -> max:T.t -> T.t Base.Or_error.t
    type comparator_witness = Base.Comparable.Make(T).comparator_witness
    val comparator : (T.t, comparator_witness) Base.Comparator.t
  end
module VMap : sig type t = VSet.t Base.Map.M(Vertex).t end
type verticies = VSet.t
type edges = VMap.t
type graph = { nodes : verticies; edges : edges; }
val show : graph -> unit
type state = {
  mutable total_vertices : int;
  id_map : (int, vertex) Base.Hashtbl.t;
}
val fresh_id : state -> int
val new_state : int -> state
val add_vertices_to_hash : verticies -> state -> unit
val add_vertex : Vertex.t -> graph -> graph
val graph_difference : graph -> verticies -> graph
val find_or_empty :
  ('a, (Vertex.t, Vertex.comparator_witness) Base.Set.t, 'b) Base.Map.t ->
  'a -> (Vertex.t, Vertex.comparator_witness) Base.Set.t
val successors : graph -> verticies -> verticies
val replace : graph -> verticies -> Vertex.t -> state -> graph

(** Connects every vertex from a list of verticies in the graph to a given vertex*)
val connect_vertices_to_vertex : verticies -> Vertex.t -> graph -> graph
(** Connects every vertex from the first list to every vertex in the second list within the graph*)
val connect_vertices : verticies -> verticies -> graph -> graph
val induced_subgraph : graph -> verticies -> graph
val edge_tuple_list : edges -> (Vertex.t * Vertex.t) list
val edge_maps : (Vertex.t * Vertex.t) list -> edges
val to_graph : Vertex.t list -> (Vertex.t * Vertex.t) list -> graph * state
val vset_to_iset : verticies -> Util.ISet.t
val iset_to_vset : (int, Vertex.t, 'a) Base.Map.t -> Util.ISet.t -> verticies
val vmap_to_imap : edges -> verticies -> Util.IMap.t
val id_map :
  verticies -> (int, Vertex.t, Base.Int.comparator_witness) Base.Map.t
val singleton: vertex -> verticies

(*Empty Constructors*)
val empty_vertex_set: unit -> verticies
val empty_vertex_map: unit -> edges
val empty_graph: unit -> graph
val is_dual_atom: atom -> atom -> bool
