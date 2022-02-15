val parse : Yojson.Basic.t -> Graph.graph

val serialize_graph : Graph.graph -> 
    [> `Assoc of
     (string *
      [> `List of
           [> `Assoc of
                (string *
                 [> `Bool of bool | `Int of int | `String of string ])
                list ]
           list ])
     list ]

val serialize_tree_as_graph : Tree.tree -> 
    [> `Assoc of
     (string *
      [> `List of
           [> `Assoc of
                (string *
                 [> `Assoc of
                      ((string * [> `List of [> `Int of int ] list ]) *
                       (string *
                        [> `List of
                             [> `Assoc of (string * [> `Int of int ]) list ]
                             list ]))
                      list
                  | `Int of int
                  | `String of string ])
                list ]
           list ])
     list ]

val serialize_tree : Tree.tree ->
    ([> `Assoc of
      (string *
       [> `Assoc of
            (string *
             [> `Assoc of
                  ((string * [> `List of [> `Int of int ] list ]) *
                   (string *
                    [> `List of
                         [> `Assoc of (string * [> `Int of int ]) list ] list
                    ]))
                  list
              | `Int of int
              | `String of string ])
            list
        | `List of 'a list ])
      list ]
 as 'a)