(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_to_array=runtime.caml_js_to_array,
     caml_js_wrap_meth_callback=runtime.caml_js_wrap_meth_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes("#"),
     cst_cose_bilkent=caml_string_of_jsbytes("cose-bilkent"),
     cst_breadthfirst=caml_string_of_jsbytes("breadthfirst"),
     cst_source=caml_string_of_jsbytes("source"),
     cst_target=caml_string_of_jsbytes("target"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_label=caml_string_of_jsbytes("label"),
     cst_polarisation=caml_string_of_jsbytes("polarisation"),
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Base=global_data.Base,
     Quartic_Util=global_data.Quartic__Util,
     Base_List=global_data.Base__List,
     Base_Array=global_data.Base__Array,
     Quartic_Graph=global_data.Quartic__Graph,
     Quartic_Condense=global_data.Quartic__Condense,
     Dune_exe_Reading=global_data.Dune__exe__Reading,
     Quartic_Tree=global_data.Quartic__Tree,
     Dune_exe_Drawing=global_data.Dune__exe__Drawing,
     Quartic_Parsegraph=global_data.Quartic__Parsegraph,
     Yojson=global_data.Yojson,
     Base_String=global_data.Base__String;
    function get_nodes_arr(cy)
     {var colletion=cy.nodes();return colletion.toArray()}
    function get_edges_arr(cy)
     {var collection=cy.edges();return collection.toArray()}
    function node_to_vertex(t1)
     {function access_data(string)
       {var t0=caml_jsstring_of_string(string);return t1.data(t0)}
      var
       _u_=access_data(cst_id),
       id=caml_call1(Js_of_ocaml_Js[42],_u_),
       label=caml_string_of_jsstring(access_data(cst_label)),
       pol=access_data(cst_polarisation) | 0,
       atom=[0,label,pol];
      return [0,[0,atom],id]}
    function to_edge(vertices,t3)
     {function access_data(string)
       {var t2=caml_jsstring_of_string(string);return t3.data(t2)}
      var
       _q_=access_data(cst_source),
       source_id=caml_call1(Js_of_ocaml_Js[42],_q_),
       _r_=access_data(cst_target),
       target_id=caml_call1(Js_of_ocaml_Js[42],_r_);
      function _s_(v){return caml_call2(Base[202],v[2],source_id)}
      var source=caml_call2(Base_List[69],vertices,_s_);
      function _t_(v){return caml_call2(Base[202],v[2],target_id)}
      var target=caml_call2(Base_List[69],vertices,_t_);
      return [0,source,target]}
    function get_layout(cy,root)
     {var
       t6=cy.nodes(":child"),
       _o_=caml_js_to_array(t6.toArray()),
       _p_=caml_call1(Base_Array[8],_o_),
       name=caml_call2(Base[203],_p_,0)?cst_cose_bilkent:cst_breadthfirst,
       t9=[0,root],
       t8=! ! 0,
       t7=caml_jsstring_of_string(name),
       t12={"name":t7,"animate":t8,"roots":t9,"spacingFactor":1.,"directed":1};
      return cy.layout(t12)}
    function decompose(param)
     {var
       cy=cy1,
       nodes=caml_js_to_array(get_nodes_arr(cy)),
       _i_=caml_call2(Base_Array[39],nodes,node_to_vertex),
       vertices=caml_call1(Base_Array[20],_i_),
       edges_arr=caml_js_to_array(get_edges_arr(cy));
      function _j_(_n_){return to_edge(vertices,_n_)}
      var
       _k_=caml_call2(Base_Array[39],edges_arr,_j_),
       edge_list=caml_call1(Base_Array[20],_k_),
       directed$0=directed | 0,
       match=caml_call3(Quartic_Graph[68],[0,directed$0],vertices,edge_list),
       state=match[2],
       graph=match[1],
       condensed_graph=caml_call2(Quartic_Condense[21],graph,state),
       tree=caml_call3(Quartic_Tree[2],[0,directed$0],condensed_graph,state),
       t25=cy2,
       t15=t25.elements(),
       removed=t15.remove(),
       t17=caml_js_from_array([0,"remove",removed]),
       t18=t25.changes;
      t18.push(t17);
      if(tree)
       {var
         tree$0=tree[1],
         _l_=caml_call1(Quartic_Parsegraph[18],tree$0),
         t19=caml_jsstring_of_string(caml_call2(Yojson[10][31],0,_l_));
        Js_of_ocaml_Js[48][1].tree = t19;
        var
         root=caml_call2(Dune_exe_Drawing[3],t25,tree$0),
         _m_=[0,cst,[0,caml_string_of_jsstring(root),0]],
         t21=caml_jsstring_of_string(caml_call2(Base_String[50],0,_m_)),
         t24=t25.nodes(t21);
        t24.addClass("root");
        var
         t27=caml_js_from_array([0,"replace",t25.elements()]),
         t28=t25.changes;
        t28.push(t27);
        var t29=get_layout(t25,root);
        t29.run();
        return 0}
      return 0}
    function recompose(param)
     {var t31=cy2,root_arr=caml_js_to_array(t31.nodes(".root"));
      if(caml_call1(Base_Array[9],root_arr))return 0;
      var
       root=runtime.caml_check_bound(root_arr,0)[1],
       tree=caml_call1(Dune_exe_Reading[4],root),
       directed$0=directed | 0,
       graph=caml_call2(Quartic_Tree[3],[0,directed$0],tree),
       t41=cy1,
       t33=t41.elements(),
       removed=t33.remove(),
       t35=caml_js_from_array([0,"remove",removed]),
       t36=t41.changes;
      t36.push(t35);
      caml_call3(Dune_exe_Drawing[4],[0,directed$0],t41,graph);
      var
       t39=caml_js_from_array([0,"replace",t41.elements()]),
       t40=t41.changes;
      t40.push(t39);
      return Js_of_ocaml_Js[48][1].cleanLayout(t41)}
    function isPrimeIdGraph(directed,idGraph)
     {var
       _a_=caml_js_to_array(idGraph.nodes()),
       jsnode_list=caml_call1(Base_Array[20],_a_),
       _b_=caml_js_to_array(idGraph.edges()),
       jsedge_list=caml_call1(Base_Array[20],_b_);
      function _c_(n)
       {var
         label=caml_string_of_jsstring(n.id()),
         id=caml_call1(Quartic_Util[4],label),
         atom=[0,[0,label,1]];
        return [0,atom,id]}
      var node_list=caml_call2(Base_List[74],jsnode_list,_c_);
      function _d_(e)
       {var
         _e_=caml_string_of_jsstring(e.data("source")),
         source_id=caml_call1(Quartic_Util[4],_e_),
         _f_=caml_string_of_jsstring(e.data("target")),
         target_id=caml_call1(Quartic_Util[4],_f_);
        function _g_(v){return caml_call2(Base[202],v[2],source_id)}
        var source=caml_call2(Base_List[69],node_list,_g_);
        function _h_(v){return caml_call2(Base[202],v[2],target_id)}
        var target=caml_call2(Base_List[69],node_list,_h_);
        return [0,source,target]}
      var
       edge_list=caml_call2(Base_List[74],jsedge_list,_d_),
       match=caml_call3(Quartic_Graph[68],directed,node_list,edge_list),
       graph=match[1];
      return caml_call1(Quartic_Condense[22],graph)}
    function getTreeJson(param){return Js_of_ocaml_Js[48][1].tree}
    function t55(param,graph)
     {var directed$0=directed | 0;return isPrimeIdGraph([0,directed$0],graph)}
    function t54(param){return recompose(0)}
    function t53(param){return getTreeJson(0)}
    function t52(param){return decompose(0)}
    caml_call1
     (Js_of_ocaml_Js[47],
      {"decompose":caml_js_wrap_meth_callback(t52),
       "getTreeJson":caml_js_wrap_meth_callback(t53),
       "recompose":caml_js_wrap_meth_callback(t54),
       "isPrime":caml_js_wrap_meth_callback(t55)});
    var
     Dune_exe_Main=
      [0,
       get_nodes_arr,
       get_edges_arr,
       node_to_vertex,
       to_edge,
       get_layout,
       decompose,
       recompose,
       isPrimeIdGraph,
       getTreeJson];
    runtime.caml_register_global(89,Dune_exe_Main,"Dune__exe__Main");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fTWFpbi5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZ2V0X25vZGVzX2FyciIsImN5IiwiY29sbGV0aW9uIiwiZ2V0X2VkZ2VzX2FyciIsImNvbGxlY3Rpb24iLCJub2RlX3RvX3ZlcnRleCIsImFjY2Vzc19kYXRhIiwic3RyaW5nIiwiaWQiLCJsYWJlbCIsInBvbCIsImF0b20iLCJ0b19lZGdlIiwidmVydGljZXMiLCJzb3VyY2VfaWQiLCJ0YXJnZXRfaWQiLCJ2Iiwic291cmNlIiwidGFyZ2V0IiwiZ2V0X2xheW91dCIsInJvb3QiLCJuYW1lIiwiZGVjb21wb3NlIiwiY3kxIiwibm9kZXMiLCJlZGdlc19hcnIiLCJlZGdlX2xpc3QiLCJkaXJlY3RlZCQwIiwiZGlyZWN0ZWQiLCJzdGF0ZSIsImdyYXBoIiwiY29uZGVuc2VkX2dyYXBoIiwidHJlZSIsImN5MiIsInJlbW92ZWQiLCJ0cmVlJDAiLCJyZWNvbXBvc2UiLCJyb290X2FyciIsImlzUHJpbWVJZEdyYXBoIiwiaWRHcmFwaCIsImpzbm9kZV9saXN0IiwianNlZGdlX2xpc3QiLCJuIiwibm9kZV9saXN0IiwiZSIsImdldFRyZWVKc29uIl0sInNvdXJjZXMiOlsiL21udC9kL1Byb2plY3RzL21vZHVsYXJfZGVjb21wb3NpdGlvbi9fYnVpbGQvZGVmYXVsdC9zcmMvbWFpbi5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQU1JQSxjQUFjQztNQUNBLElBQVpDLFVBQVksV0FDaEIsMEJBQTRDO2FBRTFDQyxjQUFjRjtNQUNDLElBQWJHLFdBQWEsV0FDakIsMkJBQTZDO2FBRTNDQztNQUNGLFNBQUlDLFlBQWFDO1FBQ0osK0JBRElBLDBCQUNjO01BRUw7O09BQWpCO09BQ3lDLDhCQUFyQjtPQUMwQixJQUE1QjtPQUE0QixRQURuREUsTUFDQUM7TUFBbUQsYUFDbkRDLE1BSEFILEdBSW1DO2FBRXJDSSxRQUFTQztNQUNYLFNBQUlQLFlBQWFDO1FBQ0osK0JBRElBLDBCQUNjO01BRUU7O09BQWpCO09BQ2lCO09BQWpCO21CQUM0QlMsR0FBSyw0QkFBTEEsS0FGeENGLFVBRTZEO01BQXBELElBQVRHLE9BQVMseUJBTkZKO01BTUUsYUFDK0JHLEdBQUssNEJBQUxBLEtBRnhDRCxVQUU2RDtNQUFwRCxJQUFURyxPQUFTLHlCQVBGTDtNQU9FLFVBRFRJLE9BQ0FDLE9BQ1k7YUFFZEMsV0FBV2xCLEdBQUdtQjtNQUN3QztVQUQzQ25CO09BQzJDO09BQTFDOztPQUtkLE1BTmdCbUI7T0FRQTtPQURILDJCQU5UQzs7YUFEU3BCLGNBY0s7YUFFaEJxQjtNQUNPO1VBQVhDO09BQ2tELHVCQUFsQixjQUQxQnRCO09BRVcsOEJBRFh1QixNQXRDRm5CO09BdUNhO09BQ3FDLDJCQUFsQixjQUg5Qko7TUFJbUMsa0IsT0EvQnJDVyxRQTZCRUM7TUFFWTtxQ0FEWlk7T0FDWTtPQUcyQixXQUE3Q0c7T0FDdUIsc0NBRGpCRCxZQUxBZCxTQUVBYTtPQUlpQjs7T0FDQyxnREFEakJJLE1BQU9EO09BRUQsbUNBSFBGLFlBRUFJLGdCQURRRjtPQUlaLElBQUZJOztPQUNNQztPQUMwQixtQ0FEMUJBOzs7U0FIQUY7UUFRRjtnQkFSRUE7U0FRbUMsc0NBRGhDRztTQUMrRiw0QkFBL0Q7O1FBQXJDO1NBQ1csd0NBRk5BO1NBRzBDLHNDQUQzQ2Y7U0FDNkQsNEJBQXJDOzs7UUFGNUI7U0FJOEI7OztRQUo5QixRQUtRLGVBSkpBOzs7TUFISSxRQVFOO2FBRUZnQjtNQUNPLFFBQVhILElBQzhDO01BQ3pDLDRCQURDSSxVQUM0QjtNQUZ2QjtPQUdFLDhCQUZQQTtPQUdPLG9DQURQakI7T0FFdUMsV0FBN0NRO09BQ2Msb0NBRFJELFlBREFLO09BSUosSUFBRlQ7O09BQ01XO09BQzBCLG1DQUQxQkE7OztNQUVLLGtDQU5MUCxnQkFDQUc7TUFOSztPQVlxQjs7O21EQUNJO2FBRWhDUSxlQUFnQlYsU0FBU1c7TUFDSzs0QkFETEE7T0FDVDtPQUNjLHFCQUZMQTtPQUVUO21CQUMyQkc7UUFDMUI7dUNBRDBCQTtTQUVqQyw4QkFETmpDO1NBQ00sV0FETkE7UUFDTSxVQUNORSxLQURBSCxHQUU4QjtNQUpwQixJQUFabUMsVUFBWSx5QkFGWkg7TUFFWSxhQU02Qkk7UUFDQztxQ0FEREE7U0FDM0I7U0FDNEIsNEJBRkRBO1NBRTNCO3FCQUM2QjVCLEdBQUssNEJBQUxBLEtBRnpDRixVQUU4RDtRQUFyRCxJQUFURyxPQUFTLHlCQVRYMEI7UUFTVyxhQUNnQzNCLEdBQUssNEJBQUxBLEtBRnpDRCxVQUU4RDtRQUFyRCxJQUFURyxPQUFTLHlCQVZYeUI7UUFVVyxVQURUMUIsT0FDQUMsT0FDWTtNQUxGOzBDQVBadUI7T0FjVyxtQ0FoQkdiLFNBR2RlLFVBTUFqQjtPQU9XOzZDQUFYSSxNQUNrQjthQUVwQmUsbUIsaUNBQ3FCO3VCQU1SZjtNQUM4QixJQUF2Q0gsV0FBUkMsYUFBK0MseUJBQXZDRCxZQURTRyxNQUUwQjt3QkFIdEIsbUJBQVk7d0JBRFYscUJBQWM7d0JBRGhCLG1CQUFZO0lBRHpCOzs7Ozs7Ozs7T0E3R0o5QjtPQUlBRztPQUlBRTtPQVVBTztPQVVBTztPQWdCQUc7T0EyQkFjO09BZ0JBRTtPQW1CQU87SUFHSTtVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBRdWFydGljXHJcbm9wZW4gQmFzZVxyXG5vcGVuIEpzX29mX29jYW1sXHJcbm9wZW4gRHJhd2luZ1xyXG5vcGVuIFJlYWRpbmdcclxuXHJcbmxldCBnZXRfbm9kZXNfYXJyIGN5IDogSnMuVW5zYWZlLmFueV9qc19hcnJheSAgPSBcclxuICBsZXQgY29sbGV0aW9uID0gSnMuVW5zYWZlLm1ldGhfY2FsbCBjeSBcIm5vZGVzXCIgW3x8XSBpblxyXG4gIEpzLlVuc2FmZS5tZXRoX2NhbGwgY29sbGV0aW9uIFwidG9BcnJheVwiIFt8fF1cclxuXHJcbmxldCBnZXRfZWRnZXNfYXJyIGN5IDogSnMuVW5zYWZlLmFueV9qc19hcnJheSA9XHJcbiAgbGV0IGNvbGxlY3Rpb24gPSBKcy5VbnNhZmUubWV0aF9jYWxsIGN5IFwiZWRnZXNcIiBbfHxdIGluXHJcbiAgSnMuVW5zYWZlLm1ldGhfY2FsbCBjb2xsZWN0aW9uIFwidG9BcnJheVwiIFt8fF1cclxuXHJcbmxldCBub2RlX3RvX3ZlcnRleCAobm9kZSA6IDxkYXRhIDogSnMuanNfc3RyaW5nIEpzLnQgLT4gSnMuVW5zYWZlLmFueSBKcy5tZXRoPiBKcy50KSA9XHJcbiAgbGV0IGFjY2Vzc19kYXRhIChzdHJpbmcgOiBzdHJpbmcpID1cclxuICAgIG5vZGUjI2RhdGEgKEpzLnN0cmluZyBzdHJpbmcpXHJcbiAgaW5cclxuICBsZXQgaWQgPSBKcy5VbnNhZmUuY29lcmNlIChhY2Nlc3NfZGF0YSBcImlkXCIpIHw+IEpzLnBhcnNlSW50IGluXHJcbiAgbGV0IGxhYmVsID0gSnMuVW5zYWZlLmNvZXJjZSAoYWNjZXNzX2RhdGEgXCJsYWJlbFwiKSB8PiBKcy50b19zdHJpbmcgaW5cclxuICBsZXQgcG9sID0gSnMuVW5zYWZlLmNvZXJjZSAoYWNjZXNzX2RhdGEgXCJwb2xhcmlzYXRpb25cIikgfD4gSnMudG9fYm9vbCBpblxyXG4gIGxldCBhdG9tID0ge0dyYXBoLmxhYmVsPWxhYmVsOyBwb2w9cG9sfSBpblxyXG4gIHtHcmFwaC5jb25uZWN0aXZlID0gQXRvbSBhdG9tOyBpZCA9IGlkfVxyXG5cclxubGV0IHRvX2VkZ2UgKHZlcnRpY2VzIDogR3JhcGgudmVydGV4IGxpc3QpIChlZGdlIDogPGRhdGEgOiBKcy5qc19zdHJpbmcgSnMudCAtPiBKcy5VbnNhZmUuYW55IEpzLm1ldGg+IEpzLnQpID1cclxuICBsZXQgYWNjZXNzX2RhdGEgKHN0cmluZyA6IHN0cmluZykgPSBcclxuICAgIGVkZ2UjI2RhdGEgKEpzLnN0cmluZyBzdHJpbmcpXHJcbiAgaW5cclxuICBsZXQgc291cmNlX2lkID0gSnMuVW5zYWZlLmNvZXJjZSAoYWNjZXNzX2RhdGEgXCJzb3VyY2VcIikgfD4gSnMucGFyc2VJbnQgaW5cclxuICBsZXQgdGFyZ2V0X2lkID0gSnMuVW5zYWZlLmNvZXJjZSAoYWNjZXNzX2RhdGEgXCJ0YXJnZXRcIikgfD4gSnMucGFyc2VJbnQgaW5cclxuICBsZXQgc291cmNlID0gTGlzdC5maW5kX2V4biB2ZXJ0aWNlcyB+ZjooZnVuIHYgLT4gdi5pZCA9IHNvdXJjZV9pZCkgaW5cclxuICBsZXQgdGFyZ2V0ID0gTGlzdC5maW5kX2V4biB2ZXJ0aWNlcyB+ZjooZnVuIHYgLT4gdi5pZCA9IHRhcmdldF9pZCkgaW5cclxuICAoc291cmNlLCB0YXJnZXQpXHJcblxyXG5sZXQgZ2V0X2xheW91dCBjeSByb290ID1cclxuICBsZXQgbmFtZSA9IGlmICgoY3kjI25vZGVzIChKcy5zdHJpbmcgXCI6Y2hpbGRcIikpIyN0b0FycmF5IHw+IEpzLnRvX2FycmF5IHw+IEFycmF5Lmxlbmd0aCkgPiAwIHRoZW4gXHJcbiAgICBcImNvc2UtYmlsa2VudFwiXHJcbiAgICBlbHNlXHJcbiAgICBcImJyZWFkdGhmaXJzdFwiXHJcbiAgaW5cclxuICBsZXQgb3B0aW9ucyA9IG9iamVjdCVqc1xyXG4gICAgdmFsIG5hbWUgPSBuYW1lIHw+IEpzLnN0cmluZ1xyXG4gICAgdmFsIGFuaW1hdGUgPSBKcy5ib29sIGZhbHNlXHJcbiAgICB2YWwgcm9vdHMgPSBbfHJvb3R8XVxyXG4gICAgdmFsIHNwYWNpbmdGYWN0b3IgPSAxLjBcclxuICAgIHZhbCBkaXJlY3RlZCA9IHRydWVcclxuICBlbmRcclxuICBpblxyXG4gIGN5IyNsYXlvdXQgb3B0aW9uc1xyXG5cclxubGV0IGRlY29tcG9zZSAoKSA9XHJcbiAgbGV0IGN5ID0gSnMuVW5zYWZlLmpzX2V4cHIgXCJjeTFcIiBpblxyXG4gIGxldCBub2RlcyA9IChKcy5VbnNhZmUuY29lcmNlIChnZXRfbm9kZXNfYXJyIGN5KSkgfD4gSnMudG9fYXJyYXkgaW5cclxuICBsZXQgdmVydGljZXMgPSBBcnJheS5tYXAgbm9kZXMgfmY6KG5vZGVfdG9fdmVydGV4KSB8PiBBcnJheS50b19saXN0IGluXHJcbiAgbGV0IGVkZ2VzX2FyciA9IChKcy5VbnNhZmUuY29lcmNlIChnZXRfZWRnZXNfYXJyIGN5KSkgfD4gSnMudG9fYXJyYXkgaW5cclxuICBsZXQgZWRnZV9saXN0ID0gQXJyYXkubWFwIGVkZ2VzX2FyciB+ZjoodG9fZWRnZSB2ZXJ0aWNlcykgfD4gQXJyYXkudG9fbGlzdCBpblxyXG5cclxuXHJcbiAgbGV0IGRpcmVjdGVkID0gSnMuVW5zYWZlLmpzX2V4cHIgXCJkaXJlY3RlZFwiIHw+IEpzLnRvX2Jvb2wgaW5cclxuICBsZXQgKGdyYXBoLCBzdGF0ZSkgPSBHcmFwaC50b19ncmFwaCB+ZGlyZWN0ZWQ6ZGlyZWN0ZWQgdmVydGljZXMgZWRnZV9saXN0IGluXHJcbiAgbGV0IGNvbmRlbnNlZF9ncmFwaCA9IENvbmRlbnNlLnByb2Nlc3MgZ3JhcGggc3RhdGUgaW5cclxuICBsZXQgdHJlZSA9IFRyZWUudHJlZV9mcm9tX2NvbmRlbnNlZCB+ZGlyZWN0ZWQ6ZGlyZWN0ZWQgY29uZGVuc2VkX2dyYXBoIHN0YXRlIGluXHJcblxyXG4gIGxldCBjeTIgPSBKcy5VbnNhZmUuanNfZXhwciBcImN5MlwiIGluXHJcbiAgbGV0IHJlbW92ZWQgPSBjeTIjI2VsZW1lbnRzIyNyZW1vdmUgaW5cclxuICBsZXQgKCkgPSBjeTIjIy5jaGFuZ2VzIyNwdXNoIChbfEpzLlVuc2FmZS5pbmplY3QgKEpzLnN0cmluZyBcInJlbW92ZVwiKTsgcmVtb3ZlZHxdIHw+IEpzLmFycmF5KSBpblxyXG4gIG1hdGNoIHRyZWUgd2l0aFxyXG4gIHwgTm9uZSAtPiAoKVxyXG4gIHwgU29tZSB0cmVlIC0+XHJcbiAgICBsZXQgKCkgPSBKcy5VbnNhZmUuZ2xvYmFsIyMudHJlZSA6PSAoUGFyc2VncmFwaC5zZXJpYWxpemVfdHJlZSB0cmVlIHw+IFlvanNvbi5CYXNpYy5wcmV0dHlfdG9fc3RyaW5nIHw+IEpzLnN0cmluZykgaW5cclxuICAgIGxldCByb290ID0gZHJhd190cmVlIGN5MiB0cmVlIGluXHJcbiAgICBsZXQgcm9vdF9ub2RlID0gY3kyIyNub2RlcyAoU3RyaW5nLmNvbmNhdCBbXCIjXCI7SnMudG9fc3RyaW5nIHJvb3RdIHw+IEpzLnN0cmluZykgaW5cclxuICAgIGxldCAoKSA9IChKcy5VbnNhZmUuY29lcmNlIHJvb3Rfbm9kZSkjI2FkZENsYXNzIChKcy5zdHJpbmcgXCJyb290XCIpIGluXHJcbiAgICBsZXQgKCkgPSBjeTIjIy5jaGFuZ2VzIyNwdXNoIChbfEpzLlVuc2FmZS5pbmplY3QgKEpzLnN0cmluZyBcInJlcGxhY2VcIik7IGN5MiMjZWxlbWVudHN8XSB8PiBKcy5hcnJheSkgaW5cclxuICAgIGxldCBfID0gKGdldF9sYXlvdXQgY3kyIHJvb3QpIyNydW4gaW5cclxuICAgICgpXHJcblxyXG5sZXQgcmVjb21wb3NlICgpID1cclxuICBsZXQgY3kgPSBKcy5VbnNhZmUuanNfZXhwciBcImN5MlwiIGluXHJcbiAgbGV0IHJvb3RfYXJyID0gY3kjI25vZGVzIChKcy5zdHJpbmcgXCIucm9vdFwiKSB8PiBKcy50b19hcnJheSBpbiBcclxuICBpZiBBcnJheS5pc19lbXB0eSByb290X2FyciB0aGVuICgpIGVsc2VcclxuICBsZXQgcm9vdCA9IEFycmF5LmdldCByb290X2FyciAwIGluXHJcbiAgbGV0IHRyZWUgPSByZWFkX3RyZWUgcm9vdCBpblxyXG4gIGxldCBkaXJlY3RlZCA9IEpzLlVuc2FmZS5qc19leHByIFwiZGlyZWN0ZWRcIiB8PiBKcy50b19ib29sIGluXHJcbiAgbGV0IGdyYXBoID0gVHJlZS50cmVlX3RvX2dyYXBoIH5kaXJlY3RlZDpkaXJlY3RlZCB0cmVlIGluXHJcblxyXG4gIGxldCBjeTEgPSBKcy5VbnNhZmUuanNfZXhwciBcImN5MVwiIGluXHJcbiAgbGV0IHJlbW92ZWQgPSBjeTEjI2VsZW1lbnRzIyNyZW1vdmUgaW5cclxuICBsZXQgKCkgPSBjeTEjIy5jaGFuZ2VzIyNwdXNoIChbfEpzLlVuc2FmZS5pbmplY3QgKEpzLnN0cmluZyBcInJlbW92ZVwiKTsgcmVtb3ZlZHxdIHw+IEpzLmFycmF5KSBpblxyXG4gIGxldCAoKSA9IGRyYXdfZ3JhcGggfmRpcmVjdGVkOmRpcmVjdGVkIGN5MSBncmFwaCBpblxyXG4gIGxldCAoKSA9IGN5MSMjLmNoYW5nZXMjI3B1c2ggKFt8SnMuVW5zYWZlLmluamVjdCAoSnMuc3RyaW5nIFwicmVwbGFjZVwiKTsgY3kxIyNlbGVtZW50c3xdIHw+IEpzLmFycmF5KSBpblxyXG4gIEpzLlVuc2FmZS5nbG9iYWwjI2NsZWFuTGF5b3V0KGN5MSlcclxuXHJcbmxldCBpc1ByaW1lSWRHcmFwaCA/ZGlyZWN0ZWQgaWRHcmFwaCA9XHJcbiAgbGV0IGpzbm9kZV9saXN0ID0gaWRHcmFwaCMjbm9kZXMgfD4gSnMudG9fYXJyYXkgfD4gQXJyYXkudG9fbGlzdCBpblxyXG4gIGxldCBqc2VkZ2VfbGlzdCA9IGlkR3JhcGgjI2VkZ2VzIHw+IEpzLnRvX2FycmF5IHw+IEFycmF5LnRvX2xpc3QgaW5cclxuICBsZXQgbm9kZV9saXN0ID0gTGlzdC5tYXAganNub2RlX2xpc3QgfmY6KGZ1biBuIC0+XHJcbiAgICBsZXQgbGFiZWwgPSBuIyNpZCB8PiBKcy50b19zdHJpbmcgaW5cclxuICAgIGxldCBpZCA9ICBVdGlsLnJlbW92ZV9yZXAgbGFiZWwgaW5cclxuICAgIGxldCBhdG9tID0gR3JhcGguQXRvbSB7R3JhcGgubGFiZWwgPSBsYWJlbDsgcG9sID0gdHJ1ZX0gaW5cclxuICAgIHtHcmFwaC5jb25uZWN0aXZlID0gYXRvbTsgaWQgPSBpZH0pXHJcbiAgaW5cclxuICBsZXQgZWRnZV9saXN0ID0gTGlzdC5tYXAganNlZGdlX2xpc3QgfmY6KGZ1biBlIC0+XHJcbiAgICBsZXQgc291cmNlX2lkID0gZSMjZGF0YSAoSnMuc3RyaW5nIFwic291cmNlXCIpIHw+IEpzLnRvX3N0cmluZyB8PiBVdGlsLnJlbW92ZV9yZXAgaW5cclxuICAgIGxldCB0YXJnZXRfaWQgPSBlIyNkYXRhIChKcy5zdHJpbmcgXCJ0YXJnZXRcIikgfD4gSnMudG9fc3RyaW5nIHw+IFV0aWwucmVtb3ZlX3JlcCBpblxyXG4gICAgbGV0IHNvdXJjZSA9IExpc3QuZmluZF9leG4gbm9kZV9saXN0IH5mOihmdW4gdiAtPiB2LmlkID0gc291cmNlX2lkKSBpblxyXG4gICAgbGV0IHRhcmdldCA9IExpc3QuZmluZF9leG4gbm9kZV9saXN0IH5mOihmdW4gdiAtPiB2LmlkID0gdGFyZ2V0X2lkKSBpblxyXG4gICAgKHNvdXJjZSwgdGFyZ2V0KSlcclxuICBpblxyXG4gIGxldCBncmFwaCwgXyA9IEdyYXBoLnRvX2dyYXBoID9kaXJlY3RlZDpkaXJlY3RlZCBub2RlX2xpc3QgZWRnZV9saXN0IGluXHJcbiAgQ29uZGVuc2UuaXNQcmltZSBncmFwaFxyXG5cclxubGV0IGdldFRyZWVKc29uICgpID1cclxuICBKcy5VbnNhZmUuZ2xvYmFsIyMudHJlZVxyXG5cclxubGV0IF8gPSBKcy5leHBvcnRfYWxsIChvYmplY3QlanNcclxuICBtZXRob2QgZGVjb21wb3NlID0gZGVjb21wb3NlICgpXHJcbiAgbWV0aG9kIGdldFRyZWVKc29uID0gZ2V0VHJlZUpzb24gKClcclxuICBtZXRob2QgcmVjb21wb3NlID0gcmVjb21wb3NlICgpXHJcbiAgbWV0aG9kIGlzUHJpbWUgZ3JhcGggPVxyXG4gICAgbGV0IGRpcmVjdGVkID0gSnMuVW5zYWZlLmpzX2V4cHIgXCJkaXJlY3RlZFwiIHw+IEpzLnRvX2Jvb2wgaW5cclxuICAgIGlzUHJpbWVJZEdyYXBoIH5kaXJlY3RlZDpkaXJlY3RlZCBncmFwaFxyXG4gIGVuZClcclxuXHJcbiJdfQ==
