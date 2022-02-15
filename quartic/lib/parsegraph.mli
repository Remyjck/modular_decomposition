val parse : Yojson.Basic.t -> Graph.graph

val serialize_graph : Graph.graph -> 
    [> `Assoc of
        ((string *
        [> `List of
                [> `Assoc of
                    ((string * [> `Int of int ]) *
                    (string * [> `String of string ]) *
                    (string * [> `Bool of bool ]))
                    list ]
                list ]) *
        (string *
        [> `List of
                [> `Assoc of
                    ((string * [> `Int of int ]) * (string * [> `Int of int ]))
                    list ]
                list ]))
        list ]