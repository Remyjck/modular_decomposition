type var = int

type atom = 
  {
    var : var;
    pol : bool;
  }

type vertex = 
  {
    value : atom;
    id : int;
  }

module Vertex = struct
  type t = vertex
  let compare v1 v2 = Int.compare v1.id v2.id
end

module VMap = Map.Make(Vertex)
module VSet = Set.Make(Vertex)

type graph =
  {
    nodes : VSet.t;
    edges : VSet.t VMap.t;
  }

let (<~>) graph vertices =
  let nodes = VSet.diff graph.nodes vertices in
  let edges =
    VMap.filter (fun v _ -> not (VSet.mem v vertices)) graph.edges
    |> VMap.map (fun s -> VSet.diff s vertices)
  in
  {nodes = nodes; edges = edges}