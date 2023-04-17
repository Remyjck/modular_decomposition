open Gscore
exception READERROR of string


(*2 values in each file, expected and start*)
let path = "./fingerprints.json"

let proofs = Parsegraph.read_file_as_fingerprints path
(*Graph from example 4.16 in "An analytic proof system on graphs"*)

let rec verify_proofs (proofs: Fingerprint.proof list) = match proofs with
  | [] -> ()
  | proof :: rest ->
    let name = proof.id in
    let _ = Fingerprint.verify proof in
    verify_proofs rest (*TODO change tests to work here*)
