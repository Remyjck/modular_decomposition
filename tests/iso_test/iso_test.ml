open Core.Id_graph
open Slap.Size
open Slap.D

let nodes = [1;2;3;4;5]

let edges = [(1,2);(2,3);(3,4);(4,5)]

let idg = {nodes; edges}

let emptyidg = {nodes=[]; edges=[]}

module S = (val of_int_dyn (length idg) : SIZE)

let adj = adj_mat idg S.value
let _ = pp_mat Format.std_formatter adj
let _ = Array.iter (pp_num @@ Format.std_formatter) (degrees idg S.value)


let%test "empty_iso_reflexive" = is_sub_iso emptyidg emptyidg

let%test "empty_iso_subgraph" = is_sub_iso emptyidg idg

let%test "iso_reflexive" = is_sub_iso idg idg

