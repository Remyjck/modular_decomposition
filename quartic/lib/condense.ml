open Graph
open Core

module VSetSet = Set.Make(VSet)

type subset =
  | Clique of VSet.t 
  | IndSet of VSet.t
  [@@deriving compare, sexp]

module Subset = struct
  type t = subset
  [@@deriving compare, sexp]
end

module Subsetset = Set.Make(Subset)

(* Algorithm 2.2 *)
(** [smallest_condensible graph set]: returns the smallest condensible set 
    containing all vertices of [set] *)
let smallest_condensible g v =
  let vl = VSet.elements v in
  let rec smallest_condesible wl i b =
    if i > List.length wl then
      VSet.of_list wl
    else
      let wi = List.nth_exn wl (i-1) in
      let connected = w g (VSet.of_list wl) wi in
      let new_b = VSet.union connected b in
      let to_add = 
        VSet.diff (new_b) (VSet.inter b connected)
        |> VSet.elements
      in
      let new_wl = List.append wl to_add in
      smallest_condesible new_wl (i+1) new_b
  in
  let b = w g v (List.hd_exn vl) in
  smallest_condesible vl 2 b

(** [update_subset subset v1 succ(v1) v2 succ(v2)]: add [v2] to [subset]
    if it belongs to the same subset as [v1] *)
let update_subset subset vi vi_neighbours vj vj_neighbours =
  match subset with
  | IndSet set -> 
    if VSet.equal vj_neighbours vi_neighbours then
      IndSet (Set.add set vj)
    else
      subset
  | Clique set ->
    if Set.equal vj_neighbours (Set.add vi_neighbours vi) then
      Clique (Set.add set vj)
    else if (Set.length set = 1) && (Set.equal vj_neighbours vi_neighbours) then
      IndSet (Set.add set vj)
    else
      subset

(** [update_subsetset subsetset new_subset]: given a set of subsets [subsetset],
    update it by adding [new_subset] *)
let update_subsetset subsetset new_subset =
  match new_subset with
  | IndSet _ -> Subsetset.add subsetset new_subset
  | Clique set ->
    if Set.length set = 1 then
      subsetset
    else 
      (Subsetset.add subsetset new_subset)

(* Algorithm 3.5 *)
(** [cc_and_is graph]: returns the set of maximal condensible cliques and 
    independent set of [graph] *)
let cc_and_is g =
  let len_v = (Set.length g.nodes) in
  let v = VSet.elements g.nodes in
  let rec iterate_i i res =
    if i >= len_v then
      res
    else
      let vi = List.nth_exn v (i-1) in
      let vi_neighbours = VMap.find_exn g.edges vi in
      let rec iterate_j j subset =
        if j >= len_v then
          subset
        else
          let vj = List.nth_exn v (j-1) in
          let vj_neighbours = VMap.find_exn g.edges vj in
          let updated_subset = update_subset subset vi vi_neighbours vj vj_neighbours in
          iterate_j (j+1) updated_subset
      in
      let j = i+1 in
      let new_subset = iterate_j j (Clique (VSet.singleton vi)) in
      let updated_res = update_subsetset res new_subset in
      iterate_i (i+1) updated_res
  in
  iterate_i 1 (Subsetset.empty)

(** [subset_set_to_nodes subsetset]: given a set of subsets, convert each subset
    to a [node] and return them in a list *)
let subset_set_to_nodes subsetset =
  Subsetset.fold subsetset
    ~init:[]
    ~f:(fun accum ss -> 
      let node =
        match ss with
        | Clique vset -> Tensor (vset_to_iset vset)
        | IndSet vset -> Par (vset_to_iset vset)
      in
      node :: accum)

(** [condense_subset subset graph]: given [subset], condense its vertices into a
    fresh vertex in [graph] *)
let condense_subset subset graph =
  let h, node = 
    match subset with
    | Clique set -> set, Tensor (vset_to_iset set)
    | IndSet set -> set, Par (vset_to_iset set)
  in
  let new_vertex = 
    {
      connective = node;
      id = fresh_id;
    }
  in
  replace graph h new_vertex

(** [condense_prime node vertices graph]: given a prime [node] and it's 
    corresponding [vertices], condense vertices into a fresh vertex *)
let condense_prime node vertices graph =
  let new_vertex =
    {
      connective = node;
      id = fresh_id;
    }
  in 
  replace graph vertices new_vertex

(* Algorithm 3.6 *)
(** [condensible_subgraphs graph]: returns the minimal condensible subgraphs of 
    [graph]*)
let condensible_subgraphs graph =
  let v = VSet.elements graph.nodes in
  let edges = vertex_neighbour_pairs v graph.edges in
  let h = List.map edges ~f:(smallest_condensible graph) in
  let () = assert (List.length v = List.length h) in
  let m = List.map h ~f:(VSet.length) in
  let to_delete vi =
    let i = Util.index vi v in
    let hi = List.nth_exn h i in
    let mi = List.nth_exn m i in
    let hj = VSet.filter hi ~f:(fun vj -> Util.before vi vj v) in
    VSet.fold hj
      ~init:VSetSet.empty 
      ~f:(fun accum vj -> 
        let j = Util.index vj v in
        let mj = List.nth_exn m j in
        if mj >= mi then VSetSet.add accum (List.nth_exn h j) else VSetSet.add accum hi)
    |> VSetSet.elements
  in
  let to_delete = List.concat_map v ~f:to_delete in
  VSetSet.diff (VSetSet.of_list h) (VSetSet.of_list to_delete)
    
(** [condense_set subsets graph]: given a set of disjoint subsets, condense them
    all in [graph] *)
let condense_set subsets graph =
  Subsetset.fold subsets
    ~init:graph
    ~f:(fun accum ss -> condense_subset ss accum)

(** [condense_cliques graph]: condense all of the condensible maximal cliques 
    and independent sets in [graph] into fresh vertices *)
let rec condense_cliques graph =
  let cliques_and_ind = cc_and_is graph in
  if Subsetset.is_empty cliques_and_ind then
    graph
  else
    condense_cliques (condense_set cliques_and_ind graph)

(* Algorithm 3.4 *)
let rec process graph =
  if VSet.length graph.nodes = 1 then graph else
  let condensed_graph = condense_cliques graph in
  let min_cond = condensible_subgraphs condensed_graph in
  if VSetSet.is_empty min_cond then
    condensed_graph
  else
    let prime_list = 
      VSetSet.fold min_cond
        ~init:[]
        ~f:(fun accum vset -> 
          let subgraph = induced_subgraph condensed_graph vset in
          let node = Prime (vmap_to_imap subgraph.edges) in
          (node, vset) :: accum)
    in
    let prime_condensed_graph =
      List.fold prime_list
        ~init:condensed_graph 
        ~f:(fun graph (node, h) -> condense_prime node h graph)
    in
    process prime_condensed_graph