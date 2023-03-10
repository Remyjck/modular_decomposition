open Core
open Core.Id_graph
exception READERROR of string

(*E4 empty 4 nodes, K4 graph complete*)

let emptyidg = {nodes=[]; edges=[]}
let gs = Parsegraph.read_file_as_id_graphs "idg_simple.json"
let e4, k4, h, g = match gs with
| e4::k4::h::g::_ -> e4,k4,g,h
| _ -> raise (READERROR "Could not find valid graph")


let%test "is_dual_e4_k4" = is_dual e4 k4
let%test "is_dual_k4_e4" = is_dual k4 e4
let%test "is_dual_h_g" = is_dual h g
let%test "is_dual_g_h" = is_dual g h

