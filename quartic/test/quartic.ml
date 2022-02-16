open Quartic
open Core

let () = print_endline "Hello, World!"

let graph =
    let buf = In_channel.read_all "graph.json" in
    let js_obj = Yojson.Basic.from_string buf in
    Parsegraph.parse js_obj

let graph = Condense.process graph

let json = Parsegraph.serialize_graph graph

let () = print_endline (Yojson.Basic.pretty_to_string json)

let () = print_endline "Goodbye, World!"
