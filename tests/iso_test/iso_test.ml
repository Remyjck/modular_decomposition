open Core.Id_graph
open Slap.Size

let nodes = [1;2]

let edges = [(1,2)]

let idg = {nodes; edges}

let emptyidg = {nodes=[]; edges=[]}

module S = (val of_int_dyn (length idg) : SIZE)


let%test "empty_iso_reflexive" = is_sub_iso emptyidg emptyidg

let%test "empty_iso_subgraph" = is_sub_iso emptyidg idg

let%test "iso_reflexive" = is_sub_iso idg idg

