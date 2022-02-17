open Core
open Quartic

let js_obj =
    let buf = In_channel.read_all "graphm.json" in
    Yojson.Basic.from_string buf

let graph, state = Parsegraph.parse js_obj

let graph = Condense.process graph state