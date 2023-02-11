open Base
open Graph

let share_module graph vi vj =
  let si = find_or_empty graph.edges vi |> Fn.flip Set.remove vj in
  let sj = find_or_empty graph.edges vj |> Fn.flip Set.remove vi in
  VSet.equal si sj

let is_module g (h:verticies) =
  let connected =
    match Set.choose h with
    | None -> Set.empty (module Vertex)
    | Some v ->
    w g h v
  in
  Set.for_all h
    ~f:(fun v ->
      let v_connected = w g h v in
      Set.equal connected v_connected)
