open Graph
open Core_kernel

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
  if VSet.length vset < 2 then vset else
  let rec add_to_set res to_add =
    if VSet.is_empty to_add then res else
    let new_res = VSet.union res to_add in
    let new_connected = connected graph new_res |> Util.flip VSet.diff res in
    let new_to_add = VSet.fold new_res 
      ~init:(VSet.empty)
      ~f:(fun acum v ->
        let wgi = w graph new_res v in
        VSet.union acum (VSet.diff new_connected wgi))
    in
    add_to_set new_res new_to_add
  in
  add_to_set VSet.empty vset 

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

(* Algorithm 3.6 *)
(** [condensible_subgraphs graph]: returns the minimal condensible subgraphs of 
    [graph]*)
let condensible_subgraphs graph =
  let v = VSet.elements graph.nodes in
  let edge_list = edge_tuple_list graph.edges in
  let v_to_edge_index = Hashtbl.create (module Vertex) in
  let () = List.iteri edge_list ~f:(fun i (v1, v2) ->
    Hashtbl.change v_to_edge_index v1
      ~f:(fun l ->
        match l with
        | None -> Some [i]
        | Some l -> Some (i :: l));
    Hashtbl.change v_to_edge_index v2
      ~f:(fun l ->
        match l with
        | None -> Some [i]
        | Some l -> Some (i :: l)))
  in
  let min_con_edges = List.map edge_list 
    ~f:(fun (v1, v2) -> smallest_condensible graph (VSet.of_list [v1; v2]))
  in
  let h = List.map v ~f:(fun v ->
    let defined_on_v = List.map 
      (match Hashtbl.find v_to_edge_index v with
        | None -> []
        | Some l -> l)
      ~f:(fun i -> List.nth_exn min_con_edges i)
    in
    let rec smallest_card l = match l with
      | [a] -> a
      | [] -> VSet.empty
      | h :: t -> 
        let min_card = smallest_card t in
        if VSet.length h < VSet.length min_card then
          h
        else
          min_card
    in
    smallest_card defined_on_v)
  in 
  let considered = VSet.of_list v in
  let res = List.foldi v ~init:considered
    ~f:(fun i acum vi ->
      let hi = List.nth_exn h i in
      if not (VSet.mem acum vi) then acum else
      VSet.fold hi ~init:acum
        ~f:(fun acum2 vj ->
          let j = vertex_index vj v in
          if j = i then acum2 else
          let vj = List.nth_exn v j in
          if not (VSet.mem acum2 vj) then acum2 else
          let hj = List.nth_exn h j in
          if (VSet.length hj) >= (VSet.length hi) then
            VSet.remove acum2 vj
          else
            VSet.remove acum2 vi))
  in
  VSet.fold res ~init:VSetSet.empty
    ~f:(fun acum vi ->
      let i = vertex_index vi v in
      VSetSet.add acum (List.nth_exn h i))

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
    condense_cliques (condense_set cliques_and_ind graph state) state

(* Algorithm 3.4 *)
let rec process graph state =
  if VSet.length graph.nodes <= 1 then graph else
  let condensed_graph = condense_cliques graph state in
  let min_cond = condensible_subgraphs condensed_graph in
  if VSetSet.is_empty min_cond then
    let node = Prime (vmap_to_imap condensed_graph.edges) in
    condense_prime node condensed_graph.nodes condensed_graph state
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
        ~f:(fun graph (node, h) -> condense_prime node h graph state)
    in
    process prime_condensed_graph state