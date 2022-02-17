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
let smallest_condensible graph vset =
  if VSet.length vset < 2 then VSet.empty else
  let v = VSet.elements vset in
  let vv = ref v in
  let i = ref 2 in
  let b = ref (w graph vset (List.hd_exn v)) in
  while !i > List.length !vv do 
    let wi = List.nth_exn !vv !i in
    let connected = w graph (VSet.of_list !vv) wi in
    let b2 = VSet.union !b connected in
    let to_add = VSet.diff (b2) (VSet.inter connected !b) in
    vv := (VSet.elements to_add) @ !vv;
    b := b2;
    i := !i + 1
  done;
  VSet.of_list !vv
  
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

let subset_contains v subset =
  match subset with
  | Clique vset -> VSet.mem vset v
  | IndSet vset -> VSet.mem vset v

let subset_add v subset =
  match subset with 
  | Clique vset -> Clique (VSet.add vset v)
  | IndSet vset -> IndSet (VSet.add vset v)

(* Algorithm 3.5 *)
(** [cc_and_is graph]: returns the set of maximal condensible cliques and 
    independent set of [graph] *)
let cc_and_is g =
  let visited = ref VSet.empty in
  let res = ref Subsetset.empty in
  let v = VSet.elements g.nodes in
  List.iteri v ~f:(fun i vi ->
    let vi_neighbours = 
      match VMap.find g.edges vi with
      | None -> VSet.empty 
      | Some vset -> vset
    in
    List.iteri v ~f:(fun j vj ->
      if j <= i then () else
      if VSet.mem !visited vj then () else
      let vj_neighbours =
        match VMap.find g.edges vj with
        | None -> VSet.empty
        | Some vset -> vset
      in
      if VSet.equal (VSet.remove vi_neighbours vj) (VSet.remove vj_neighbours vi) then
        let () = Printf.printf "%d %d\n" vi.id vj.id in
        let () = visited := VSet.add !visited vj in
        if not (VSet.mem !visited vi) then
          let () = visited := VSet.add !visited vi in
          let subset = 
            if VSet.mem vi_neighbours vj then
              Clique (VSet.of_list [vi; vj])
            else
              IndSet (VSet.of_list [vi; vj])
          in
          res := Subsetset.add !res subset;
        else
          let subset = Subsetset.find_exn !res ~f:(subset_contains vi) in 
          let new_subset = subset_add vj subset in
          let () = res := Subsetset.remove !res subset in
          res := Subsetset.add !res new_subset
    )
  );
  !res

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
let condense_subset subset graph state =
  let h, node = 
    match subset with
    | Clique set -> set, Tensor (vset_to_iset set)
    | IndSet set -> set, Par (vset_to_iset set)
  in
  let new_vertex = 
    {
      connective = node;
      id = fresh_id state;
    }
  in
  replace graph h new_vertex state

(** [condense_prime node vertices graph]: given a prime [node] and it's 
    corresponding [vertices], condense vertices into a fresh vertex *)
let condense_prime node vertices graph state =
  let new_vertex =
    {
      connective = node;
      id = fresh_id state;
    }
  in 
  replace graph vertices new_vertex state

module VILMap = Core.Map.Make(Vertex)

(* Algorithm 3.6 *)
(** [condensible_subgraphs graph]: returns the minimal condensible subgraphs of 
    [graph]*)
let condensible_subgraphs graph =
  let v = VSet.elements graph.nodes in
  let vertex_to_assoc_edges = ref VILMap.empty in
  let edge_list = edge_tuple_list graph.edges in
  let min_con_edges = List.map edge_list 
    ~f:(fun (v1, v2) -> smallest_condensible graph (VSet.of_list [v1; v2]))
  in
  List.iter v ~f:(fun vi -> List.iteri edge_list ~f:(fun i (v1, v2) ->
    if Vertex.equal vi v1 || Vertex.equal vi v2 then
      vertex_to_assoc_edges := VILMap.change !vertex_to_assoc_edges vi 
        ~f:(fun il ->
          match il with
          | None -> Some [i]
          | Some l -> Some (i :: l))
  ));
  let min_map = ref (
    VILMap.map !vertex_to_assoc_edges ~f:(fun il ->
      let sl = List.map il ~f:(List.nth_exn min_con_edges) in
      List.fold sl ~init:VSet.empty ~f:(fun min s ->
        if VSet.length min > VSet.length s then s else min)))
  in
  List.iteri v ~f:(fun i vi -> 
    let hi =
      match VILMap.find !min_map vi with
      | None -> VSet.empty
      | Some vset -> vset
    in
    let mi = VSet.length hi in
    if mi = 0 then min_map := VILMap.remove !min_map vi else
    List.iteri v ~f:(fun j vj ->
      if j <= i then () else
      if not (VSet.mem hi vj) then () else
      let mj =
        match VILMap.find !min_map vj with
        | None -> 0
        | Some vset -> VSet.length vset
      in
      if mj = 0 then min_map := VILMap.remove !min_map vj else
      if mj >= mi then
        min_map := VILMap.remove !min_map vj
      else
        min_map := VILMap.remove !min_map vi
  ));
  VSetSet.of_list (VILMap.data !min_map)

(** [condense_set subsets graph]: given a set of disjoint subsets, condense them
    all in [graph] *)
let condense_set subsets graph state =
  Subsetset.fold subsets
    ~init:graph
    ~f:(fun accum ss -> condense_subset ss accum state)

(** [condense_cliques graph]: condense all of the condensible maximal cliques 
    and independent sets in [graph] into fresh vertices *)
let rec condense_cliques graph state =
  let cliques_and_ind = cc_and_is graph in
  if Subsetset.is_empty cliques_and_ind then
    graph
  else
    let () = 
      Printf.printf("Found cliques and ind:\n");
      Printf.printf "%d\n" (Subsetset.length cliques_and_ind)
    in
    condense_cliques (condense_set cliques_and_ind graph state) state

(* Algorithm 3.4 *)
let rec process graph state =
  if VSet.length graph.nodes <= 1 then graph else
  let condensed_graph = condense_cliques graph state in
  let min_cond = condensible_subgraphs condensed_graph in
  let () = Printf.printf "Found condensible subgraphs:\n%d\n" (VSetSet.length min_cond) in
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
    if List.length prime_list = 0 then
      let node = Prime (vmap_to_imap condensed_graph.edges) in
      condense_prime node condensed_graph.nodes condensed_graph state
    else 
      let prime_condensed_graph =
        List.fold prime_list
          ~init:condensed_graph 
          ~f:(fun graph (node, h) -> condense_prime node h graph state)
      in
      process prime_condensed_graph state