open Base
open Slap.D
open Slap.Size
open Poly


(*NOTE the Slap library creates matricies that are 1 indexed*)


type id_graph = {
    nodes : int list;
    edges : (int * int) list;
}

let isEdge (a,b) idg =
    let {nodes=_;edges} = idg in
    (*use the or statement because we are working with undirected edges*)
    List.find edges ~f:(fun (c,d) -> a = c && b = d || a = d && b = c) <> None

let length idg =
    let {nodes; edges=_} = idg in
    List.length nodes

let length_edges idg =
    (*we are not working with a set so this is a lot less reliable ISSUE TODO*)
    let {nodes; edges=_} = idg in
    List.length nodes

(*We are passing the dimension since we need to keep the scope outside this function*)
let adj_mat idg dim=
    let {nodes; edges=_} = idg in
    let nodes = List.to_array nodes in
    let m = Mat.init dim dim (fun i j ->
        (*fill symetrically*)
        if isEdge (nodes.(i-1), nodes.(j-1)) idg then 1.0 else 0.0) in
    m

let degrees idg dim =
    let m = adj_mat idg dim in
    let v = Mat.fold_top (fun acc vec -> Vec.add acc vec) (Vec.make0 dim) m in
    Vec.to_array v


let genInitialPerm idg1 idg2 dim1 dim2 =
    let degArr1 = degrees idg1 dim1 in
    let degArr2 = degrees idg2 dim2 in
    Mat.init dim1 dim2 (fun i j -> if degArr2.(j-1) >= degArr1.(i-1) then 1.0 else 0.0)

let setImmut a i v =
    let cpy = Array.copy a in
    let () = cpy.(i) <- v in
    cpy



let no1setinrow perm depth =
    let row = Mat.row_dyn perm (depth + 1) in
    List.find (Vec.to_list row) ~f:(fun v -> v = 1.0) = None

let onlysetchosen perm depth chosen =
    Mat.mapi (
        fun i j v -> match i, j with
        | i,j when i - 1 = depth && j - 1 = chosen -> v
        | i,_ when i - 1 = depth -> 0.0
        | _ -> v
    ) perm


let refine perm = perm
let anyrow0 perm needle=
    let rec aux = function
    | index when index = needle -> false
    | index -> if no1setinrow perm index then true else aux (index + 1) in
    aux 1

(*needle * haystack matrix*)
let ullmann_enumeration perm haystack needle=
    let rec find_at_depth depth perm freeVert  results=
        if no1setinrow perm depth
            then
                results
        else
            let rec aux results = function
            | chosen when (haystack - 1) = chosen || (not freeVert.(chosen) || Mat.get_dyn perm (depth + 1) (chosen + 1) = 0.0) -> results
            | chosen ->
                let perm = onlysetchosen perm depth chosen in
                let perm = refine perm in
                let res =
                    if anyrow0 perm needle
                        then results
                    else
                        if depth = needle - 1
                            then perm::results
                        else
                            let freeVert = setImmut freeVert chosen false in
                            find_at_depth (depth+1) perm freeVert results in
                aux res (chosen + 1) in
            aux results 0 in
    find_at_depth 0 perm (Array.create ~len:haystack true) []


let is_sub_iso idg1 idg2 =
    let l1 = length idg1 in
    let l2 = length idg2 in
    if l1 = 0 then true else
    if l1 <= l2 then
        if length_edges idg1 = 0 then true
        else
            let module Dim1 = (val of_int_dyn l1 : SIZE) in
            let module Dim2 = (val of_int_dyn l2 : SIZE) in
            let m0 = genInitialPerm idg1 idg2 Dim1.value Dim2.value in
            let res = ullmann_enumeration m0 l1 l2 in
            not @@ List.is_empty res
    else false





