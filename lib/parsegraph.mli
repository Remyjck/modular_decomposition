val to_vertex : Yojson.Basic.t -> Graph.vertex
val to_nodes :
  Yojson.Basic.t ->
  (Graph.vertex, Graph.Vertex.comparator_witness) Base.Set.t
val to_id_tuple : Yojson.Basic.t -> int * int
val to_id_list : Yojson.Basic.t -> (int * int) list
val to_assoc_list :
  (int * int) list -> Graph.verticies -> (Graph.vertex * Graph.vertex) list
val to_edge_maps : Graph.verticies -> Yojson.Basic.t -> Graph.edges
val parse : Yojson.Basic.t -> Graph.graph * Graph.state
val from_vertex :
  Graph.vertex ->
  [> `Assoc of
       (string * [> `Bool of bool | `Int of int | `String of string ]) list ]
val from_nodes :
  (Graph.vertex, 'a) Base.Set.t ->
  [> `List of
       [> `Assoc of
            (string * [> `Bool of bool | `Int of int | `String of string ])
            list ]
       list ]
val serialize_graph :
  Graph.graph ->
  [> `Assoc of
       (string *
        [> `List of
             [> `Assoc of
                  (string *
                   [> `Bool of bool | `Int of int | `String of string ])
                  list ]
             list ])
       list ]
val serialize_tree : Tree.tree -> Yojson.Basic.t
val read_file_as_graph : string -> Graph.graph * Graph.state
