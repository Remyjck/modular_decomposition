open Gscore
exception READERROR of string



(*2 values in each file, expected and start*)
let path = "./fingerprints.json"

let proofs = Parsegraph.read_file_as_fingerprints path
(*Graph from example 4.16 in "An analytic proof system on graphs"*)

let proofs_arr = Array.of_list proofs

let len = Array.length proofs_arr


let () = assert (len = 4)


let () = Pp_new.show_tree (Option.get (Fingerprint.verify (proofs_arr.(3))))
let () = Pp_new.show_graph_as_tree (fst proofs_arr.(3).expected) (snd proofs_arr.(3).expected)

let%test "test_ai" = None = Fingerprint.verify (proofs_arr.(0))
let%test "test_pp_one_step" = None = Fingerprint.verify (proofs_arr.(1))
let%test "test_pp_verif" = None = Fingerprint.verify (proofs_arr.(2))
let%test "test_sw" = None = Fingerprint.verify (proofs_arr.(3))
