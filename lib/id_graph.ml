open Base
exception OptFail of string

type id_graph = {
    nodes : int list;
    edges : (int * int) list;
}

let (=) = Poly.(=)

let optFail = function
| None -> raise (OptFail "whoops")
| Some x -> x


let adj_matrix (idg:id_graph) =
  let {nodes; edges} = idg in
  let n = List.length nodes in
  let m = Array.make_matrix ~dimx:n ~dimy:n 0 in
  let rec aux rem_edges = match rem_edges with
  | [] -> ()
  | (x,y)::t ->
    let i,_ = optFail @@ List.findi nodes ~f: (fun _ a -> a = x) in
    let j,_ = optFail @@ List.findi nodes ~f: (fun _ a -> a = y) in
    let _ = m.(i).(j) <- if i <> j then 1 else 0 in
    aux t in
  let _ = aux edges in
  let l = Array.to_list m in
  List.map l ~f:(Array.to_list)

let graph_from_adj adj_mat nodes=
  let () = assert (List.length adj_mat = List.length nodes) in
  let zipNodesToRow row = List.zip_exn nodes row in
  let keepIfSet nodeRowLst = List.filter nodeRowLst ~f:(fun (_, r) -> r = 1) in
  (*TODO*)

let dual idg =
  let {nodes; edges} = idg in
  let ad = adj_matrix idg in
  let flipped = List.map ~f:(List.map ~f:(fun x -> 1-x)) ad in
  (graph_from_adj flipped nodes)

(*For now use brute force algorithm for isomorphism*)
(*let is_iso idg1 idg2 = false*)



(*let isDual idg1 idg2 = false*)

(*
  Facts:

  A prime graph


*)
