open Core
open Core.Id_graph
open Slap.Size

(*K3, K2 graphs complete*)

let emptyidg = {nodes=[]; edges=[]}
let gs = Parsegraph.read_file_as_id_graphs "idg.json"
let k3, k2 = match gs with
| k3::k2::_ -> k3,k2
| _ -> emptyidg, emptyidg



module SK2 = (val of_int_dyn (length k2) : SIZE)
module SK3 = (val of_int_dyn (length k3) : SIZE)

let%test "empty_iso_reflexive" = is_sub_iso emptyidg emptyidg

let%test "empty_iso_subgraph_k3" = is_sub_iso emptyidg k3
let%test "empty_iso_subgraph_k2" = is_sub_iso emptyidg k2

let%test "iso_reflexive_k3" = is_sub_iso k3 k3
let%test "iso_reflexive_k2" = is_sub_iso k2 k2
let%test "iso_sg_k2_k3" = is_sub_iso k2 k3
let%test "not_iso_sg_k3_k2" = not (is_sub_iso k3 k2)

