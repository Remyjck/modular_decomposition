open Quartic
open Core_kernel

let js_obj =
    let buf = In_channel.read_all "condensible_graph.json" in
    Yojson.Basic.from_string buf

let graph, state = Parsegraph.parse js_obj

let%test _ = Graph.VSet.length graph.nodes = 5
let%test _ = 
  let total_edges = 
  Graph.VMap.fold graph.edges ~init:0
    ~f:(fun ~key:_ ~data:d acc -> acc + Graph.VSet.length d)
  in
  total_edges = 14

let v1 = {Graph.connective=Atom {label = "1"; pol = true}; id=1}
let v3 = {Graph.connective=Atom {label = "3"; pol = true}; id=3}
let v4 = {Graph.connective=Atom {label = "4"; pol = true}; id=4}
let v7 = {Graph.connective=Atom {label = "7"; pol = true}; id=7}
let v8 = {Graph.connective=Atom {label = "8"; pol = true}; id=8}
let vset13 = Graph.VSet.of_list [v1; v3]
let vset34 = Graph.VSet.of_list [v3; v4]
let vset47 = Graph.VSet.of_list [v4; v7]
let vset78 = Graph.VSet.of_list [v7; v8]
let vset18 = Graph.VSet.of_list [v1; v8]
let vset38 = Graph.VSet.of_list [v3; v8]
let vset48 = Graph.VSet.of_list [v4; v8]

let scond13 = Condense.smallest_condensible graph vset13
let%test _ = Graph.VSet.length scond13 = 4

let scond34 = Condense.smallest_condensible graph vset34
let%test _ = Graph.VSet.length scond34 = 4

let scond47 = Condense.smallest_condensible graph vset47
let%test _ = Graph.VSet.length scond47 = 4

let scond78 = Condense.smallest_condensible graph vset78
let%test _ = Graph.VSet.length scond78 = 5

let scond18 = Condense.smallest_condensible graph vset18
let%test _ = Graph.VSet.length scond18 = 5

let scond38 = Condense.smallest_condensible graph vset38
let%test _ = Graph.VSet.length scond38 = 5

let scond48 = Condense.smallest_condensible graph vset48
let%test _ = Graph.VSet.length scond48 = 5

let cond_sub = Condense.condensible_subgraphs graph
let%test _ = Condense.VSetSet.length cond_sub = 1

let sub = Condense.VSetSet.choose_exn cond_sub
let%test _ = Graph.VSet.length sub = 4