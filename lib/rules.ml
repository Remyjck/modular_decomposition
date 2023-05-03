open Tree
open Base

let ( = ) = Poly.( = )

(*Work on tree nodes*)

(*Inference rules*)

let is_atom tree = match tree with Atom _ -> true | _ -> false
let is_prime tree = match tree with Prime _ -> true | _ -> false
let find_dual_pair trees = Util.find_fitting_pair trees Equality.is_dual

let find_atomic_dual_pair trees =
  Util.find_fitting_pair trees (fun t1 t2 ->
      match (t1, t2) with
      | Atom a, Atom b -> Graph.is_dual_atom a b
      | _ -> false)

let propagate_once f tree =
  match tree with
  | Prime (idg, sub) -> Prime (idg, List.map ~f sub)
  | Atom a -> Atom a
  | Tensor sub -> Tensor (List.map ~f sub)
  | Par sub -> Par (List.map ~f sub)

(*atomic identity down - ai_down*)
let rec atomic_identity_down (tree : tree) =
  match tree with
  | Par nodes ->
      let pair_option = find_atomic_dual_pair nodes in
      let new_tree =
        match pair_option with
        | None -> propagate_once atomic_identity_down tree
        | Some (a, b) ->
            Par
              (List.filter nodes ~f:(fun t ->
                   not (Equality.equal_tree t a || Equality.equal_tree t b)))
      in
      if Equality.equal_tree new_tree tree then tree
      else atomic_identity_down new_tree
  | _ -> propagate_once atomic_identity_down tree

(*Switch par implementation*)
(*P(M1,...,Mn) & N -> P(M1,...,Mi & N,...,Mn) *)
(*select selects an index from the subnodes*)

(*NOTE there are TWO selection that need to happen, which node to move into the context and where to!*)

type selector = tree list -> int

(*IMPORTANT THIS ALSO APPLIES TO SMALLER PRIME GRAPHS and fully connected ones!!!*)
let switch_par_generic (select_node_in_prime : selector)
    (select_first_node : selector) (select_corresponding : selector) tree =
  match tree with
  | Par sub ->
      let primes, corresponding = List.partition_tf sub ~f:is_prime in
      if primes = [] then tree
      else
        let corr_index = select_corresponding corresponding in
        let prime_index = select_first_node primes in
        let prime = List.nth_exn primes prime_index in
        let corr = List.nth_exn corresponding corr_index in
        let prime_par_n =
          match prime with
          | Prime (idg, sub_graphs) ->
              let chosen_node_index = select_node_in_prime sub_graphs in
              let chosen = List.nth_exn sub_graphs chosen_node_index in
              let chosen_par = Par [ chosen; corr ] in
              let new_nodes =
                List.mapi sub_graphs ~f:(fun i t ->
                    if i = chosen_node_index then chosen_par else t)
              in
              Prime (idg, new_nodes)
          | _ -> tree
        in
        let new_primes = List.filteri primes ~f:(fun i _ -> i <> prime_index) in
        let new_corr =
          List.filteri corresponding ~f:(fun i _ -> i <> corr_index)
        in
        let new_sub = prime_par_n :: List.append new_primes new_corr in
        Par new_sub
  | _ -> tree

let pick_largest =
  let rec aux max max_index index = function
    | [] -> max_index
    | t :: rest ->
        let new_val =
          match t with Prime (idg, _) -> Id_graph.length idg | _ -> max
        in
        let max_index, max =
          if max < new_val then (index, new_val) else (max_index, max)
        in
        aux max max_index (index + 1) rest
  in
  aux 0 0 0

let pick_first _ = 0

let pick_first_atom_or_first trees =
  let opt = List.findi trees ~f:(fun _ t -> is_atom t) in
  match opt with None -> 0 | Some (i, _) -> i

let switch_par =
  switch_par_generic pick_first pick_largest pick_first_atom_or_first

(*prime down - p_down*)

let prime_down (tree : tree) =
  match tree with
  | Par sub -> (
      let pair_option = find_dual_pair sub in
      match pair_option with
      | None -> tree
      | Some (t1, t2) -> (
          match (t1, t2) with
          | Prime (_, sub1), Prime (_, sub2) ->
              Tensor (Caml.List.map2 (fun t1 t2 -> Par [ t1; t2 ]) sub1 sub2)
          | _ -> Par sub))
  | _ -> tree

let find_proof (_ : Tree.tree) = []
let is_valid (_ : Tree.tree) = false
