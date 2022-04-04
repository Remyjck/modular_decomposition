(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_rep=caml_string_of_jsbytes("-rep"),
     cst_Quartic_Util=caml_string_of_jsbytes("Quartic__Util"),
     cst_quartic=caml_string_of_jsbytes("quartic"),
     cst_lib_util_ml=caml_string_of_jsbytes("lib/util.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_quartic$0=caml_string_of_jsbytes("quartic"),
     cst_quartic$1=caml_string_of_jsbytes("quartic"),
     cst_Quartic_Util$0=caml_string_of_jsbytes("Quartic__Util"),
     cst_Vertex_not_found_when_look=
      caml_string_of_jsbytes("Vertex not found when looking for index"),
     cst_error=caml_string_of_jsbytes("error"),
     cst$1=caml_string_of_jsbytes("\xe2\x8a\x97"),
     cst$2=caml_string_of_jsbytes("\xe2\x85\x8b"),
     cst$3=caml_string_of_jsbytes("\xe2\x97\x83"),
     cst_prime$1=caml_string_of_jsbytes("prime"),
     cst_connective=caml_string_of_jsbytes("connective"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_id$0=caml_string_of_jsbytes("id"),
     cst_connective$0=caml_string_of_jsbytes("connective"),
     cst_atom=caml_string_of_jsbytes("atom"),
     cst_Atom=caml_string_of_jsbytes("Atom"),
     cst_Before=caml_string_of_jsbytes("Before"),
     cst_Par=caml_string_of_jsbytes("Par"),
     cst_Prime=caml_string_of_jsbytes("Prime"),
     cst_Tensor=caml_string_of_jsbytes("Tensor"),
     cst_before=caml_string_of_jsbytes("before"),
     cst_par=caml_string_of_jsbytes("par"),
     cst_prime=caml_string_of_jsbytes("prime"),
     cst_tensor=caml_string_of_jsbytes("tensor"),
     cst_atom$0=caml_string_of_jsbytes("atom"),
     cst_Atom$0=caml_string_of_jsbytes("Atom"),
     cst_Before$0=caml_string_of_jsbytes("Before"),
     cst_Par$0=caml_string_of_jsbytes("Par"),
     cst_Prime$0=caml_string_of_jsbytes("Prime"),
     cst_Tensor$0=caml_string_of_jsbytes("Tensor"),
     cst_before$0=caml_string_of_jsbytes("before"),
     cst_par$0=caml_string_of_jsbytes("par"),
     cst_prime$0=caml_string_of_jsbytes("prime"),
     cst_tensor$0=caml_string_of_jsbytes("tensor"),
     cst_label=caml_string_of_jsbytes("label"),
     cst_pol=caml_string_of_jsbytes("pol"),
     cst_pol$0=caml_string_of_jsbytes("pol"),
     cst_label$0=caml_string_of_jsbytes("label"),
     cst_Quartic_Graph=caml_string_of_jsbytes("Quartic__Graph"),
     cst_quartic$2=caml_string_of_jsbytes("quartic"),
     cst_lib_graph_ml=caml_string_of_jsbytes("lib/graph.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_quartic$3=caml_string_of_jsbytes("quartic"),
     tp_loc=caml_string_of_jsbytes("lib/graph.ml.atom"),
     tp_loc$0=caml_string_of_jsbytes("lib/graph.ml.node"),
     tp_loc$1=caml_string_of_jsbytes("lib/graph.ml.vertex"),
     cst_quartic$4=caml_string_of_jsbytes("quartic"),
     cst_Quartic_Graph$0=caml_string_of_jsbytes("Quartic__Graph"),
     cst_Quartic_Tree=caml_string_of_jsbytes("Quartic__Tree"),
     cst_quartic$5=caml_string_of_jsbytes("quartic"),
     cst_lib_tree_ml=caml_string_of_jsbytes("lib/tree.ml"),
     cst$4=caml_string_of_jsbytes(""),
     cst_quartic$6=caml_string_of_jsbytes("quartic"),
     cst_quartic$7=caml_string_of_jsbytes("quartic"),
     cst_Quartic_Tree$0=caml_string_of_jsbytes("Quartic__Tree"),
     cst_target$2=caml_string_of_jsbytes("target"),
     cst_source$2=caml_string_of_jsbytes("source"),
     cst_id$3=caml_string_of_jsbytes("id"),
     cst_connective$1=caml_string_of_jsbytes("connective"),
     cst_graph=caml_string_of_jsbytes("graph"),
     cst_id$4=caml_string_of_jsbytes("id"),
     cst_connective$2=caml_string_of_jsbytes("connective"),
     cst_graph$0=caml_string_of_jsbytes("graph"),
     cst_successors=caml_string_of_jsbytes("successors"),
     cst_node=caml_string_of_jsbytes("node"),
     cst_edges$2=caml_string_of_jsbytes("edges"),
     cst_nodes$2=caml_string_of_jsbytes("nodes"),
     cst_target$1=caml_string_of_jsbytes("target"),
     cst_source$1=caml_string_of_jsbytes("source"),
     cst_edges$1=caml_string_of_jsbytes("edges"),
     cst_nodes$1=caml_string_of_jsbytes("nodes"),
     cst_edges$0=caml_string_of_jsbytes("edges"),
     cst_nodes$0=caml_string_of_jsbytes("nodes"),
     cst_target$0=caml_string_of_jsbytes("target"),
     cst_source$0=caml_string_of_jsbytes("source"),
     cst_Tried_to_serialize_non_ato=
      caml_string_of_jsbytes("Tried to serialize non-atomic graph"),
     cst_polarisation$0=caml_string_of_jsbytes("polarisation"),
     cst_label$2=caml_string_of_jsbytes("label"),
     cst_id$2=caml_string_of_jsbytes("id"),
     cst_nodes=caml_string_of_jsbytes("nodes"),
     cst_edges=caml_string_of_jsbytes("edges"),
     cst_source=caml_string_of_jsbytes("source"),
     cst_target=caml_string_of_jsbytes("target"),
     cst_id$1=caml_string_of_jsbytes("id"),
     cst_label$1=caml_string_of_jsbytes("label"),
     cst_polarisation=caml_string_of_jsbytes("polarisation"),
     cst_Quartic_Parsegraph=caml_string_of_jsbytes("Quartic__Parsegraph"),
     cst_quartic$8=caml_string_of_jsbytes("quartic"),
     cst_lib_parsegraph_ml=caml_string_of_jsbytes("lib/parsegraph.ml"),
     cst$5=caml_string_of_jsbytes(""),
     cst_quartic$9=caml_string_of_jsbytes("quartic"),
     cst_quartic$10=caml_string_of_jsbytes("quartic"),
     cst_Quartic_Parsegraph$0=caml_string_of_jsbytes("Quartic__Parsegraph"),
     cst_Cannot_condense_singleton=
      caml_string_of_jsbytes("Cannot condense singleton"),
     cst_error$2=caml_string_of_jsbytes("error"),
     cst_Cannot_add_vertex_to_Singl=
      caml_string_of_jsbytes("Cannot add vertex to Singleton subset"),
     cst_error$1=caml_string_of_jsbytes("error"),
     cst_Found_Empty_Before=caml_string_of_jsbytes("Found Empty Before"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_Before$1=caml_string_of_jsbytes("Before"),
     cst_Clique=caml_string_of_jsbytes("Clique"),
     cst_IndSet=caml_string_of_jsbytes("IndSet"),
     cst_Singleton=caml_string_of_jsbytes("Singleton"),
     cst_before$1=caml_string_of_jsbytes("before"),
     cst_clique=caml_string_of_jsbytes("clique"),
     cst_indSet=caml_string_of_jsbytes("indSet"),
     cst_singleton=caml_string_of_jsbytes("singleton"),
     cst_Before$2=caml_string_of_jsbytes("Before"),
     cst_Clique$0=caml_string_of_jsbytes("Clique"),
     cst_IndSet$0=caml_string_of_jsbytes("IndSet"),
     cst_Singleton$0=caml_string_of_jsbytes("Singleton"),
     cst_before$2=caml_string_of_jsbytes("before"),
     cst_clique$0=caml_string_of_jsbytes("clique"),
     cst_indSet$0=caml_string_of_jsbytes("indSet"),
     cst_singleton$0=caml_string_of_jsbytes("singleton"),
     cst_Quartic_Condense=caml_string_of_jsbytes("Quartic__Condense"),
     cst_quartic$11=caml_string_of_jsbytes("quartic"),
     cst_lib_condense_ml=caml_string_of_jsbytes("lib/condense.ml"),
     cst$6=caml_string_of_jsbytes(""),
     cst_quartic$12=caml_string_of_jsbytes("quartic"),
     tp_loc$2=caml_string_of_jsbytes("lib/condense.ml.subset"),
     cst_quartic$13=caml_string_of_jsbytes("quartic"),
     cst_Quartic_Condense$0=caml_string_of_jsbytes("Quartic__Condense"),
     Stdlib=global_data.Stdlib,
     Stdlib_String=global_data.Stdlib__String,
     Assert_failure=global_data.Assert_failure,
     Base_String=global_data.Base__String,
     Base_Int=global_data.Base__Int,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Base_Map=global_data.Base__Map,
     Base_Set=global_data.Base__Set,
     Base=global_data.Base,
     Base_List=global_data.Base__List,
     Base_Hashtbl=global_data.Base__Hashtbl,
     Stdio=global_data.Stdio,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Hash=global_data.Base__Hash,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base_Comparable=global_data.Base__Comparable,
     Stdlib_List=global_data.Stdlib__List,
     Yojson=global_data.Yojson,
     Quartic=[0];
    caml_register_global(164,Quartic,"Quartic");
    caml_call1(Ppx_module_timer_runtime[4],cst_Quartic_Util);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_quartic);
    caml_call1(Expect_test_collector[4][1],cst_lib_util_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_quartic$0,cst);
    var
     _a_=[0,caml_string_of_jsbytes("lib/util.ml"),21,11],
     _w_=[0,caml_string_of_jsbytes("lib/graph.ml"),217,11],
     _v_=[0,caml_string_of_jsbytes("lib/graph.ml"),218,11],
     _u_=[0,caml_string_of_jsbytes("lib/graph.ml"),183,11],
     _s_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(", "),0]],
       caml_string_of_jsbytes("%s, ")],
     _r_=
      [0,
       [12,9,[2,0,[11,caml_string_of_jsbytes(": "),0]]],
       caml_string_of_jsbytes("\t%s: ")],
     _t_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _o_=[0,[2,0,[12,32,0]],caml_string_of_jsbytes("%s ")],
     _n_=
      [0,
       [11,caml_string_of_jsbytes("Nodes: "),0],
       caml_string_of_jsbytes("Nodes: ")],
     _p_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _q_=
      [0,
       [11,caml_string_of_jsbytes("Edges: \n"),0],
       caml_string_of_jsbytes("Edges: \n")],
     _m_=[0,[2,0,[12,32,[4,0,0,0,0]]],caml_string_of_jsbytes("%s %d")],
     _k_=[0,caml_string_of_jsbytes("id")],
     _l_=[0,caml_string_of_jsbytes("connective")],
     _j_=[0,caml_string_of_jsbytes("lib/graph.ml"),27,0],
     _e_=[0,caml_string_of_jsbytes("Atom")],
     _f_=[0,caml_string_of_jsbytes("Tensor")],
     _g_=[0,caml_string_of_jsbytes("Par")],
     _h_=[0,caml_string_of_jsbytes("Before")],
     _i_=[0,caml_string_of_jsbytes("Prime")],
     _c_=[0,caml_string_of_jsbytes("pol")],
     _d_=[0,caml_string_of_jsbytes("label")],
     _b_=[0,caml_string_of_jsbytes("lib/graph.ml"),3,0],
     _y_=[0,0],
     _x_=[0,caml_string_of_jsbytes("lib/tree.ml"),53,11],
     _z_=[0,[0,-976970511,caml_string_of_jsbytes("atom")],0],
     _A_=[0,[0,-976970511,caml_string_of_jsbytes("tensor")],0],
     _B_=[0,[0,-976970511,caml_string_of_jsbytes("par")],0],
     _C_=[0,[0,-976970511,caml_string_of_jsbytes("before")],0],
     _D_=[0,-976970511,caml_string_of_jsbytes("prime")],
     _E_=[0,caml_string_of_jsbytes("Singleton")],
     _F_=[0,caml_string_of_jsbytes("Clique")],
     _G_=[0,caml_string_of_jsbytes("Before")],
     _H_=[0,caml_string_of_jsbytes("IndSet")];
    function flip(f,x,y){return caml_call2(f,y,x)}
    function before(v1,v2,vl)
     {var vl$0=vl;
      for(;;)
       {if(vl$0)
         {var v=vl$0[1];
          if(caml_equal(v,v1))return 1;
          if(caml_equal(v,v2))return 0;
          var vl$1=vl$0[2],vl$0=vl$1;
          continue}
        throw Stdlib[8]}}
    function index(elem,l)
     {var l$0=l,i=0;
      for(;;)
       {if(l$0)
         {var t=l$0[2],h=l$0[1];
          if(caml_equal(h,elem))return i;
          var i$0=i + 1 | 0,l$0=t,i=i$0;
          continue}
        throw Stdlib[8]}}
    function remove_rep(string)
     {if(caml_call2(Stdlib_String[11],cst_rep,string))
       {var _dv_=caml_call2(Base_String[78],string,45)[1];
        return caml_call1(Base_Int[10],_dv_)}
      throw [0,Assert_failure,_a_]}
    function resolve(param){if(param){var bool=param[1];return bool}return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_quartic$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Quartic_Util$0);
    var Quartic_Util=[0,flip,before,index,remove_rep,resolve];
    caml_register_global(174,Quartic_Util,"Quartic__Util");
    caml_call1(Ppx_module_timer_runtime[4],cst_Quartic_Graph);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_quartic$2);
    caml_call1(Expect_test_collector[4][1],cst_lib_graph_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_quartic$3,cst$0);
    function compare_atom(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Base[160],a_001[1],b_002[1]);
      return 0 === n?caml_call2(Base[93],a_001[2],b_002[2]):n}
    function atom_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       label_field=[0,0],
       pol_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _dn_=param[1];
          if(1 === _dn_[0])
           {var _do_=_dn_[1];
            if(_do_)
             {var _dp_=_do_[1];
              if(0 === _dp_[0])
               {var _dq_=_do_[2],_dr_=_dp_[1],switch$0=0;
                if(! _dq_ || ! _dq_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_du_)
                     {function field_sexp(param)
                       {if(_du_)
                         {if(_du_[2])throw [0,Assert_failure,_b_];
                          var x=_du_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_dq_);
                  if(caml_string_notequal(_dr_,cst_label))
                   if(caml_string_notequal(_dr_,cst_pol))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_dr_,extra[1]]}
                   else
                    if(pol_field[1])
                     duplicates[1] = [0,_dr_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=caml_call1(Base[97],field_sexp$0);
                      pol_field[1] = [0,fvalue]}
                  else
                   if(label_field[1])
                    duplicates[1] = [0,_dr_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=caml_call1(Base[164],field_sexp$1);
                     label_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_dn_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var _ds_=label_field[1],_dt_=pol_field[1];
        if(_ds_ && _dt_)
         {var pol_value=_dt_[1],label_value=_ds_[1];
          return [0,label_value,pol_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === label_field[1]?1:0,cst_label$0],
                  [0,[0,0 === pol_field[1]?1:0,cst_pol$0],0]])}}
    function sexp_of_atom(param)
     {var
       v_pol=param[2],
       v_label=param[1],
       arg=caml_call1(Base[98],v_pol),
       bnds=[0,[1,[0,_c_,[0,arg,0]]],0],
       arg$0=caml_call1(Base[165],v_label),
       bnds$0=[0,[1,[0,_d_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function hash_fold_atom(hsv,arg)
     {var hsv$0=caml_call2(Base[162],hsv,arg[1]);
      return caml_call2(Base[95],hsv$0,arg[2])}
    function hash_atom(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_dm_=hash_fold_atom(hsv,x);
      return caml_call1(Base_Hash[9],_dm_)}
    function compare(a_003,b_004)
     {return caml_call3(Base_Set[67],[0],a_003,b_004)}
    function t_of_sexp(t)
     {return caml_call2(Base_Set[66],[0,Base_Int[8],Base_Int[27]],t)}
    function sexp_of_t(v){return caml_call2(Base_Set[65],[0,Base_Int[9]],v)}
    function hash_fold_t(hsv,arg)
     {return caml_call3(Base_Set[69],[0,Base_Int[6]],hsv,arg)}
    var func=caml_call1(Base_Set[70],[0,Base_Int[6]]);
    function hash(x){return caml_call1(func,x)}
    var ISet=[0,compare,t_of_sexp,sexp_of_t,hash_fold_t,hash];
    caml_call1(Base_Comparable[10],[0,ISet[1],ISet[3]]);
    function compare$0(a_005,b_006)
     {function _dl_(a_007,b_008){return caml_call2(ISet[1],a_007,b_008)}
      return caml_call4(Base_Map[97],[0],_dl_,a_005,b_006)}
    function t_of_sexp$0(t)
     {return caml_call3(Base_Map[95],[0,Base_Int[8],Base_Int[27]],ISet[2],t)}
    function sexp_of_t$0(v)
     {return caml_call3(Base_Map[94],[0,Base_Int[9]],ISet[3],v)}
    function hash_fold_t$0(hsv,arg)
     {return caml_call4(Base_Map[99],[0,Base_Int[6]],ISet[4],hsv,arg)}
    function hash$0(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_dk_=hash_fold_t$0(hsv,x);
      return caml_call1(Base_Hash[9],_dk_)}
    var
     IMap=[0,compare$0,t_of_sexp$0,sexp_of_t$0,hash_fold_t$0,hash$0],
     include=caml_call1(Base_Comparable[10],[0,IMap[1],IMap[3]]),
     symbol=include[1],
     symbol$0=include[2],
     symbol$1=include[3],
     symbol$2=include[4],
     symbol$3=include[5],
     symbol$4=include[6],
     equal=include[7],
     compare$1=include[8],
     min=include[9],
     max=include[10],
     ascending=include[11],
     descending=include[12],
     between=include[13],
     clamp_exn=include[14],
     clamp=include[15],
     comparator=include[16],
     validate_lbound=include[17],
     validate_ubound=include[18],
     validate_bound=include[19];
    function compare_node(a_009,b_010)
     {if(caml_call2(Ppx_compare_lib[1],a_009,b_010))return 0;
      var switch$0=0;
      switch(a_009[0])
       {case 0:
         var _de_=a_009[1];
         if(0 === b_010[0])
          {var b_012=b_010[1];return compare_atom(_de_,b_012)}
         return -1;
        case 1:
         var _df_=a_009[1];
         switch(b_010[0])
          {case 0:break;
           case 1:var b_014=b_010[1];return caml_call2(ISet[1],_df_,b_014);
           default:return -1}
         break;
        case 2:
         var _dg_=a_009[1];
         switch(b_010[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:var b_016=b_010[1];return caml_call2(ISet[1],_dg_,b_016);
           default:return -1}
         break;
        case 3:
         var _dh_=a_009[1];
         switch(b_010[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:
            var
             b_018=b_010[1],
             _di_=
              function(a_019,b_020){return caml_call2(Base[115],a_019,b_020)};
            return caml_call3(Base[136],_di_,_dh_,b_018);
           default:return -1}
         break;
        default:
         var _dj_=a_009[1];
         switch(b_010[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:switch$0 = 2;break;
           case 3:return 1;
           default:var b_022=b_010[1];return caml_call2(IMap[1],_dj_,b_022)}}
      switch(switch$0){case 0:return 1;case 1:return 1;default:return 1}}
    function node_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _c__=sexp[1],_c$_=caml_string_compare(_c__,cst_atom),switch$0=0;
        if(0 <= _c$_)
         if(0 < _c$_)
          if(caml_string_notequal(_c__,cst_before))
           if(caml_string_notequal(_c__,cst_par))
            if(caml_string_notequal(_c__,cst_prime))
             {if(! caml_string_notequal(_c__,cst_tensor))switch$0 = 2}
            else
             switch$0 = 5;
           else
            switch$0 = 3;
          else
           switch$0 = 4;
         else
          switch$0 = 1;
        else
         if(caml_string_notequal(_c__,cst_Atom))
          if(caml_string_notequal(_c__,cst_Before))
           if(caml_string_notequal(_c__,cst_Par))
            if(caml_string_notequal(_c__,cst_Prime))
             {if(! caml_string_notequal(_c__,cst_Tensor))switch$0 = 2}
            else
             switch$0 = 5;
           else
            switch$0 = 3;
          else
           switch$0 = 4;
         else
          switch$0 = 1;
        switch(switch$0)
         {case 1:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp)
          }}
      else
       {var _da_=sexp[1];
        if(! _da_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _db_=_da_[1];
        if(0 !== _db_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var _dc_=_db_[1],_dd_=caml_string_compare(_dc_,cst_atom$0),switch$1=0;
        if(0 <= _dd_)
         if(0 < _dd_)
          if(caml_string_notequal(_dc_,cst_before$0))
           if(caml_string_notequal(_dc_,cst_par$0))
            if(caml_string_notequal(_dc_,cst_prime$0))
             {if(! caml_string_notequal(_dc_,cst_tensor$0))switch$1 = 2}
            else
             switch$1 = 5;
           else
            switch$1 = 3;
          else
           switch$1 = 4;
         else
          switch$1 = 1;
        else
         if(caml_string_notequal(_dc_,cst_Atom$0))
          if(caml_string_notequal(_dc_,cst_Before$0))
           if(caml_string_notequal(_dc_,cst_Par$0))
            if(caml_string_notequal(_dc_,cst_Prime$0))
             {if(! caml_string_notequal(_dc_,cst_Tensor$0))switch$1 = 2}
            else
             switch$1 = 5;
           else
            switch$1 = 3;
          else
           switch$1 = 4;
         else
          switch$1 = 1;
        switch(switch$1)
         {case 1:
           var sexp_args$3=_da_[2];
           if(sexp_args$3 && ! sexp_args$3[2])
            {var v0$7=sexp_args$3[1],v0$8=atom_of_sexp(v0$7);return [0,v0$8]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_dc_,sexp);
          case 2:
           var sexp_args=_da_[2];
           if(sexp_args && ! sexp_args[2])
            {var v0=sexp_args[1],v0$0=caml_call1(ISet[2],v0);return [1,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_dc_,sexp);
          case 3:
           var sexp_args$1=_da_[2];
           if(sexp_args$1 && ! sexp_args$1[2])
            {var v0$3=sexp_args$1[1],v0$4=caml_call1(ISet[2],v0$3);
             return [2,v0$4]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_dc_,sexp);
          case 4:
           var sexp_args$2=_da_[2];
           if(sexp_args$2 && ! sexp_args$2[2])
            {var
              v0$5=sexp_args$2[1],
              v0$6=caml_call2(Base[139],Base[119],v0$5);
             return [3,v0$6]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_dc_,sexp);
          case 5:
           var sexp_args$0=_da_[2];
           if(sexp_args$0 && ! sexp_args$0[2])
            {var v0$1=sexp_args$0[1],v0$2=caml_call1(IMap[2],v0$1);
             return [4,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_dc_,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_node(param)
     {switch(param[0])
       {case 0:
         var v0=param[1],v0$0=sexp_of_atom(v0);return [1,[0,_e_,[0,v0$0,0]]];
        case 1:
         var v0$1=param[1],v0$2=caml_call1(ISet[3],v0$1);
         return [1,[0,_f_,[0,v0$2,0]]];
        case 2:
         var v0$3=param[1],v0$4=caml_call1(ISet[3],v0$3);
         return [1,[0,_g_,[0,v0$4,0]]];
        case 3:
         var v0$5=param[1],v0$6=caml_call2(Base[140],Base[120],v0$5);
         return [1,[0,_h_,[0,v0$6,0]]];
        default:
         var v0$7=param[1],v0$8=caml_call1(IMap[3],v0$7);
         return [1,[0,_i_,[0,v0$8,0]]]}}
    function hash_fold_node(hsv,arg)
     {switch(arg[0])
       {case 0:
         var a0=arg[1],hsv$0=caml_call2(Base_Hash[3],hsv,0);
         return hash_fold_atom(hsv$0,a0);
        case 1:
         var a0$0=arg[1],hsv$1=caml_call2(Base_Hash[3],hsv,1);
         return caml_call2(ISet[4],hsv$1,a0$0);
        case 2:
         var a0$1=arg[1],hsv$2=caml_call2(Base_Hash[3],hsv,2);
         return caml_call2(ISet[4],hsv$2,a0$1);
        case 3:
         var a0$2=arg[1],hsv$3=caml_call2(Base_Hash[3],hsv,3);
         return caml_call3(Base[138],Base[117],hsv$3,a0$2);
        default:
         var a0$3=arg[1],hsv$4=caml_call2(Base_Hash[3],hsv,4);
         return caml_call2(IMap[4],hsv$4,a0$3)}}
    function hash_node(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_c9_=hash_fold_node(hsv,x);
      return caml_call1(Base_Hash[9],_c9_)}
    function compare_vertex(a_023,b_024)
     {if(caml_call2(Ppx_compare_lib[1],a_023,b_024))return 0;
      var n=compare_node(a_023[1],b_024[1]);
      return 0 === n?caml_call2(Base[115],a_023[2],b_024[2]):n}
    function vertex_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$1,sexp);
      var
       field_sexps=sexp[1],
       connective_field=[0,0],
       id_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _c1_=param[1];
          if(1 === _c1_[0])
           {var _c2_=_c1_[1];
            if(_c2_)
             {var _c3_=_c2_[1];
              if(0 === _c3_[0])
               {var _c4_=_c2_[2],_c5_=_c3_[1],switch$0=0;
                if(! _c4_ || ! _c4_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_c8_)
                     {function field_sexp(param)
                       {if(_c8_)
                         {if(_c8_[2])throw [0,Assert_failure,_j_];
                          var x=_c8_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$1,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_c4_);
                  if(caml_string_notequal(_c5_,cst_connective))
                   if(caml_string_notequal(_c5_,cst_id))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_c5_,extra[1]]}
                   else
                    if(id_field[1])
                     duplicates[1] = [0,_c5_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=caml_call1(Base[119],field_sexp$0);
                      id_field[1] = [0,fvalue]}
                  else
                   if(connective_field[1])
                    duplicates[1] = [0,_c5_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=node_of_sexp(field_sexp$1);
                     connective_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$1,_c1_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$1,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$1,extra[1],sexp);
        var _c6_=connective_field[1],_c7_=id_field[1];
        if(_c6_ && _c7_)
         {var id_value=_c7_[1],connective_value=_c6_[1];
          return [0,connective_value,id_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$1,
                 sexp,
                 [0,
                  [0,0 === connective_field[1]?1:0,cst_connective$0],
                  [0,[0,0 === id_field[1]?1:0,cst_id$0],0]])}}
    function sexp_of_vertex(param)
     {var
       v_id=param[2],
       v_connective=param[1],
       arg=caml_call1(Base[120],v_id),
       bnds=[0,[1,[0,_k_,[0,arg,0]]],0],
       arg$0=sexp_of_node(v_connective),
       bnds$0=[0,[1,[0,_l_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function hash_fold_vertex(hsv,arg)
     {var hsv$0=hash_fold_node(hsv,arg[1]);
      return caml_call2(Base[117],hsv$0,arg[2])}
    function hash_vertex(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_c0_=hash_fold_vertex(hsv,x);
      return caml_call1(Base_Hash[9],_c0_)}
    function getLabel(vertex)
     {var _cZ_=vertex[1];
      switch(_cZ_[0])
       {case 0:var atom=_cZ_[1];return atom[1];
        case 1:return cst$1;
        case 2:return cst$2;
        case 3:return cst$3;
        default:return cst_prime$1}}
    function hash$1(x){return hash_vertex(x)}
    function show(t)
     {var _cX_=t[2],_cY_=getLabel(t);
      return caml_call3(Stdio[4],_m_,_cY_,_cX_)}
    var
     T=
      [0,
       compare_vertex,
       vertex_of_sexp,
       sexp_of_vertex,
       hash_fold_vertex,
       hash$1,
       show],
     t_of_sexp$1=T[2],
     sexp_of_t$1=T[3],
     hash_fold_t$1=T[4],
     hash$2=T[5],
     show$0=T[6],
     include$0=caml_call1(Base_Comparable[10],[0,T[1],T[3]]),
     symbol$5=include$0[1],
     symbol$6=include$0[2],
     symbol$7=include$0[3],
     symbol$8=include$0[4],
     symbol$9=include$0[5],
     symbol$10=include$0[6],
     equal$0=include$0[7],
     compare$2=include$0[8],
     min$0=include$0[9],
     max$0=include$0[10],
     ascending$0=include$0[11],
     descending$0=include$0[12],
     between$0=include$0[13],
     clamp_exn$0=include$0[14],
     clamp$0=include$0[15],
     comparator$0=include$0[16],
     validate_lbound$0=include$0[17],
     validate_ubound$0=include$0[18],
     validate_bound$0=include$0[19],
     Vertex=
      [0,
       T,
       t_of_sexp$1,
       sexp_of_t$1,
       hash_fold_t$1,
       hash$2,
       show$0,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$2,
       min$0,
       max$0,
       ascending$0,
       descending$0,
       between$0,
       clamp_exn$0,
       clamp$0,
       comparator$0,
       validate_lbound$0,
       validate_ubound$0,
       validate_bound$0];
    function vertex_index(elem,l)
     {var l$0=l,i=0;
      for(;;)
       {if(l$0)
         {var t=l$0[2],h=l$0[1];
          if(caml_call2(Vertex[13],h,elem))return i;
          var i$0=caml_call2(Base[180],i,1),l$0=t,i=i$0;
          continue}
        var
         _cV_=
          [0,
           caml_call1(Sexplib0_Sexp_conv[7],cst_Vertex_not_found_when_look),
           0],
         _cW_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_error),_cV_]];
        return caml_call1(Base[222],_cW_)}}
    function compare$3(a_027,b_028)
     {return caml_call3(Base_Set[67],[0],a_027,b_028)}
    function t_of_sexp$2(t)
     {return caml_call2(Base_Set[66],[0,Vertex[2],Vertex[22]],t)}
    function sexp_of_t$2(v){return caml_call2(Base_Set[65],[0,Vertex[3]],v)}
    function hash_fold_t$2(hsv,arg)
     {return caml_call3(Base_Set[69],[0,Vertex[4]],hsv,arg)}
    var func$0=caml_call1(Base_Set[70],[0,Vertex[4]]);
    function hash$3(x){return caml_call1(func$0,x)}
    var
     T$0=[0,compare$3,t_of_sexp$2,sexp_of_t$2,hash_fold_t$2,hash$3],
     t_of_sexp$3=T$0[2],
     sexp_of_t$3=T$0[3],
     hash_fold_t$3=T$0[4],
     hash$4=T$0[5],
     include$1=caml_call1(Base_Comparable[10],[0,T$0[1],T$0[3]]),
     symbol$11=include$1[1],
     symbol$12=include$1[2],
     symbol$13=include$1[3],
     symbol$14=include$1[4],
     symbol$15=include$1[5],
     symbol$16=include$1[6],
     equal$1=include$1[7],
     compare$4=include$1[8],
     min$1=include$1[9],
     max$1=include$1[10],
     ascending$1=include$1[11],
     descending$1=include$1[12],
     between$1=include$1[13],
     clamp_exn$1=include$1[14],
     clamp$1=include$1[15],
     comparator$1=include$1[16],
     validate_lbound$1=include$1[17],
     validate_ubound$1=include$1[18],
     validate_bound$1=include$1[19],
     VSet=
      [0,
       T$0,
       t_of_sexp$3,
       sexp_of_t$3,
       hash_fold_t$3,
       hash$4,
       symbol$11,
       symbol$12,
       symbol$13,
       symbol$14,
       symbol$15,
       symbol$16,
       equal$1,
       compare$4,
       min$1,
       max$1,
       ascending$1,
       descending$1,
       between$1,
       clamp_exn$1,
       clamp$1,
       comparator$1,
       validate_lbound$1,
       validate_ubound$1,
       validate_bound$1],
     VMap=[0];
    function show$1(graph)
     {caml_call1(Stdio[4],_n_);
      function _cP_(v)
       {var _cU_=getLabel(v);return caml_call2(Stdio[4],_o_,_cU_)}
      caml_call2(Base_Set[47],graph[1],_cP_);
      caml_call1(Stdio[4],_p_);
      caml_call1(Stdio[4],_q_);
      function _cQ_(k,d)
       {var _cR_=getLabel(k);
        caml_call2(Stdio[4],_r_,_cR_);
        function _cS_(v)
         {var _cT_=getLabel(v);return caml_call2(Stdio[4],_s_,_cT_)}
        caml_call2(Base_Set[47],d,_cS_);
        return caml_call1(Stdio[4],_t_)}
      return caml_call2(Base_Map[40],graph[2],_cQ_)}
    function fresh_id(state)
     {state[1] = caml_call2(Base[180],state[1],1);return state[1]}
    function add_vertices_to_hash(vertices,state)
     {function _cO_(v){return caml_call3(Base_Hashtbl[36],state[2],v[2],v)}
      return caml_call2(Base_Set[47],vertices,_cO_)}
    function add_vertex(vertex,graph)
     {var _cM_=graph[3],_cN_=graph[2];
      return [0,caml_call2(Base_Set[10],graph[1],vertex),_cN_,_cM_]}
    function remove_vertex_edges(v,edges)
     {var _cI_=Base_Set[11];
      function _cJ_(_cL_){return flip(_cI_,v,_cL_)}
      var _cK_=caml_call2(Base_Map[36],edges,v);
      return caml_call2(Base_Map[43],_cK_,_cJ_)}
    function remove_vertices_edges(vertices,edges)
     {function _cH_(accum,v){return remove_vertex_edges(v,accum)}
      return caml_call3(Base_Set[43],vertices,edges,_cH_)}
    function remove_vertex(v,graph)
     {var
       new_nodes=caml_call2(Base_Set[11],graph[1],v),
       new_edges=remove_vertex_edges(v,graph[2]),
       new_edges_from=remove_vertex_edges(v,graph[3]);
      return [0,new_nodes,new_edges,new_edges_from]}
    function disjoint(s1,s2)
     {var diff=caml_call2(Base_Set[15],s1,s2);
      return caml_call2(Base_Set[19],s1,diff)}
    function complement_map(set,map)
     {var _cC_=Base_Set[15];
      function _cD_(_cG_){return flip(_cC_,set,_cG_)}
      function _cE_(ele){return 1 - caml_call2(Base_Set[9],set,ele)}
      var _cF_=caml_call2(Base_Map[48],map,_cE_);
      return caml_call2(Base_Map[43],_cF_,_cD_)}
    function symbol$17(graph,vertices)
     {var
       nodes=caml_call2(Base_Set[15],graph[1],vertices),
       edges=complement_map(vertices,graph[2]),
       edges_from=complement_map(vertices,graph[3]);
      return [0,nodes,edges,edges_from]}
    function find_or_empty(map,v)
     {var match=caml_call2(Base_Map[34],map,v);
      if(match){var vset=match[1];return vset}
      return caml_call1(Base_Set[5],[0,Vertex[22]])}
    function successors(graph,vertices)
     {function _cz_(accum,v)
       {var match=caml_call2(Base_Map[34],graph[2],v);
        if(match)
         var vset=match[1],to_add=vset;
        else
         var to_add=caml_call1(Base_Set[5],[0,Vertex[22]]);
        return caml_call2(Base_Set[12],accum,to_add)}
      var
       _cA_=caml_call1(Base_Set[5],[0,Vertex[22]]),
       _cB_=caml_call3(Base_Set[43],vertices,_cA_,_cz_);
      return flip(Base_Set[15],vertices,_cB_)}
    function predecessors(graph,vertices)
     {function _cw_(accum,v)
       {var match=caml_call2(Base_Map[34],graph[3],v);
        if(match)
         var vset=match[1],to_add=vset;
        else
         var to_add=caml_call1(Base_Set[5],[0,Vertex[22]]);
        return caml_call2(Base_Set[12],accum,to_add)}
      var
       _cx_=caml_call1(Base_Set[5],[0,Vertex[22]]),
       _cy_=caml_call3(Base_Set[43],vertices,_cx_,_cw_);
      return flip(Base_Set[15],vertices,_cy_)}
    function connected(graph,vertices)
     {var _cu_=predecessors(graph,vertices),_cv_=successors(graph,vertices);
      return caml_call2(Base_Set[12],_cv_,_cu_)}
    function neighbour(graph,vertex)
     {var match=caml_call2(Base_Map[34],graph[2],vertex);
      if(match)
       var set=match[1],edges_to=set;
      else
       var edges_to=caml_call1(Base_Set[5],[0,Vertex[22]]);
      var match$0=caml_call2(Base_Map[34],graph[3],vertex);
      if(match$0)
       var set$0=match$0[1],edges_from=set$0;
      else
       var edges_from=caml_call1(Base_Set[5],[0,Vertex[22]]);
      return caml_call2(Base_Set[12],edges_to,edges_from)}
    function neighbours(graph,vertices)
     {var _cs_=predecessors(graph,vertices),_ct_=successors(graph,vertices);
      return caml_call2(Base_Set[12],_ct_,_cs_)}
    function replace(graph,h,vertex,state)
     {if(caml_call2(Base_Set[29],h,graph[1]))
       {add_vertices_to_hash(h,state);
        var
         _cj_=caml_call2(Base_Set[15],graph[1],h),
         new_nodes=flip(Base_Set[10],vertex,_cj_),
         removed_edges=remove_vertices_edges(h,graph[2]),
         removed_edges_from=remove_vertices_edges(h,graph[3]),
         _ck_=successors(graph,h),
         new_successors=flip(Base_Set[15],h,_ck_),
         _cl_=predecessors(graph,h),
         new_predecessors=flip(Base_Set[15],h,_cl_),
         _cm_=
          function(param)
           {if(param)
             {var vset=param[1];
              return caml_call2(Base_Set[12],vset,new_successors)}
            return new_successors},
         new_edges=caml_call3(Base_Map[33],removed_edges,vertex,_cm_),
         _cn_=
          function(accum,v)
           {function _cr_(param)
             {if(param)
               {var vset=param[1];return caml_call2(Base_Set[10],vset,vertex)}
              return caml_call2(Base_Set[6],[0,Vertex[22]],vertex)}
            return caml_call3(Base_Map[33],accum,v,_cr_)},
         new_edges$0=caml_call3(Base_Set[43],new_predecessors,new_edges,_cn_),
         _co_=
          function(param)
           {if(param)
             {var vset=param[1];
              return caml_call2(Base_Set[12],vset,new_predecessors)}
            return new_predecessors},
         new_edges_from=
          caml_call3(Base_Map[33],removed_edges_from,vertex,_co_),
         _cp_=
          function(accum,v)
           {function _cq_(param)
             {if(param)
               {var vset=param[1];return caml_call2(Base_Set[10],vset,vertex)}
              return caml_call2(Base_Set[6],[0,Vertex[22]],vertex)}
            return caml_call3(Base_Map[33],accum,v,_cq_)},
         new_edges_from$0=
          caml_call3(Base_Set[43],new_successors,new_edges_from,_cp_);
        return [0,new_nodes,new_edges$0,new_edges_from$0]}
      throw [0,Assert_failure,_u_]}
    function connect_vertices(directed,vertices,vertex,graph)
     {if(caml_call2(Base_Set[9],graph[1],vertex))
       {var _ce_=caml_call1(Base_Set[9],graph[1]);
        if(caml_call2(Base_Set[21],vertices,_ce_))
         {var
           _cf_=
            function(accum,v)
             {function _ci_(param)
               {if(param)
                 {var vset=param[1];
                  return caml_call2(Base_Set[10],vset,vertex)}
                return caml_call2(Base_Set[6],[0,Vertex[22]],vertex)}
              return caml_call3(Base_Map[33],accum,v,_ci_)},
           edges=caml_call3(Base_Set[43],vertices,graph[2],_cf_);
          if(resolve(directed))
           {var
             _cg_=
              function(param)
               {if(param)
                 {var vset=param[1];
                  return caml_call2(Base_Set[12],vset,vertices)}
                return vertices},
             edges_from=caml_call3(Base_Map[33],graph[3],vertex,_cg_);
            return [0,graph[1],edges,edges_from]}
          var
           _ch_=
            function(param)
             {if(param)
               {var vset=param[1];
                return caml_call2(Base_Set[12],vset,vertices)}
              return vertices},
           edges$0=caml_call3(Base_Map[33],edges,vertex,_ch_);
          return [0,graph[1],edges$0,edges$0]}
        throw [0,Assert_failure,_v_]}
      throw [0,Assert_failure,_w_]}
    function intersect_map(set,map)
     {var _b$_=Base_Set[14];
      function _ca_(_cd_){return flip(_b$_,set,_cd_)}
      var
       _cb_=caml_call1(Base_Set[9],set),
       _cc_=caml_call2(Base_Map[48],map,_cb_);
      return caml_call2(Base_Map[43],_cc_,_ca_)}
    function induced_subgraph(graph,vertices)
     {var
       edges=intersect_map(vertices,graph[2]),
       edges_from=intersect_map(vertices,graph[3]);
      return [0,vertices,edges,edges_from]}
    function w(g,h,v)
     {var
       new_h=caml_call2(Base_Set[11],h,v),
       _b__=symbol$17(g,new_h)[2],
       match=caml_call2(Base_Map[34],_b__,v);
      if(match){var vset=match[1];return vset}
      return caml_call1(Base_Set[5],[0,Vertex[22]])}
    function is_module(g,h)
     {var match=caml_call1(Base_Set[55],h);
      if(match)
       var v=match[1],connected=w(g,h,v);
      else
       var connected=caml_call1(Base_Set[5],[0,Vertex[22]]);
      function _b9_(v)
       {var v_connected=w(g,h,v);
        return caml_call2(Base_Set[19],connected,v_connected)}
      return caml_call2(Base_Set[21],h,_b9_)}
    function edge_tuple_list(directed,edge_map)
     {if(caml_call1(Base_Map[24],edge_map))return 0;
      var
       match=caml_call1(Base_Map[72],edge_map),
       vi_neighbours=match[2],
       vi=match[1];
      function _b7_(accum,vj){return [0,[0,vi,vj],accum]}
      var
       new_edges=caml_call3(Base_Set[43],vi_neighbours,0,_b7_),
       new_edge_map=
        resolve(directed)
         ?caml_call2(Base_Map[36],edge_map,vi)
         :remove_vertex_edges(vi,edge_map),
       _b8_=edge_tuple_list(directed,new_edge_map);
      return caml_call2(Base[179],new_edges,_b8_)}
    function add_or_init(v,y)
     {if(v){var z=v[1];return [0,caml_call2(Base_Set[10],z,y)]}
      return [0,caml_call2(Base_Set[6],[0,Vertex[22]],y)]}
    function edge_map(reverse,edge_tuple_list)
     {var
       map$1=caml_call1(Base_Map[5],[0,Vertex[22]]),
       edges=edge_tuple_list,
       map=map$1;
      for(;;)
       {if(edges)
         {var t=edges[2],match=edges[1],y=match[2],x=match[1];
          if(reverse)
           var
            _b5_=function(x){return function(v){return add_or_init(v,x)}}(x),
            map$0=caml_call3(Base_Map[32],map,y,_b5_);
          else
           var
            _b6_=function(y){return function(v){return add_or_init(v,y)}}(y),
            map$0=caml_call3(Base_Map[32],map,x,_b6_);
          var edges=t,map=map$0;
          continue}
        return map}}
    function edge_maps(directed,edge_list)
     {if(resolve(directed))
       var edges=edge_map(0,edge_list);
      else
       var
        _b2_=function(param,v1,v2){return caml_call2(Base_Set[12],v1,v2)},
        _b3_=edge_map(1,edge_list),
        _b4_=edge_map(0,edge_list),
        edges=caml_call3(Base_Map[67],_b4_,_b3_,_b2_);
      var edges_from=resolve(directed)?edge_map(1,edge_list):edges;
      return [0,edges,edges_from]}
    function to_graph(directed,vertex_list,edge_list)
     {function _bZ_(param,v)
       {var max=param[2],acum=param[1],_b1_=caml_call2(Base_Int[21],max,v[2]);
        return [0,caml_call2(Base_Set[10],acum,v),_b1_]}
      var
       _b0_=[0,caml_call1(Base_Set[5],[0,Vertex[22]]),0],
       match=caml_call3(Base_List[10],vertex_list,_b0_,_bZ_),
       max_id=match[2],
       vertices=match[1],
       match$0=edge_maps(directed,edge_list),
       edges_from=match$0[2],
       edges=match$0[1];
      return [0,
              [0,vertices,edges,edges_from],
              [0,
               max_id,
               caml_call3
                (Base_Hashtbl[4],0,0,[0,Base_Int[19],Base_Int[9],Base_Int[7]])]]}
    function vset_to_iset(vset)
     {function _bY_(v){return v[2]}
      return caml_call3(Base_Set[40],[0,Base_Int[27]],vset,_bY_)}
    function iset_to_vset(map,iset)
     {function _bX_(i){return caml_call2(Base_Map[35],map,i)}
      return caml_call3(Base_Set[40],[0,Vertex[22]],iset,_bX_)}
    function vmap_to_imap(map,nodes)
     {function _bS_(accum,vertex)
       {var _bW_=caml_call1(Base_Set[5],[0,Base_Int[27]]);
        return caml_call3(Base_Map[28],accum,vertex[2],_bW_)}
      var
       _bT_=caml_call1(Base_Map[5],[0,Base_Int[27]]),
       empty_map=caml_call3(Base_Set[43],nodes,_bT_,_bS_);
      function _bU_(k,v,accum)
       {var data=vset_to_iset(v);
        function _bV_(param)
         {if(param)
           {var iset=param[1];return caml_call2(Base_Set[12],iset,data)}
          return data}
        return caml_call3(Base_Map[33],accum,k[2],_bV_)}
      return caml_call3(Base_Map[45],map,empty_map,_bU_)}
    function id_map(vset)
     {function _bQ_(accum,vertex)
       {return caml_call3(Base_Map[28],accum,vertex[2],vertex)}
      var _bR_=caml_call1(Base_Map[5],[0,Base_Int[27]]);
      return caml_call3(Base_Set[43],vset,_bR_,_bQ_)}
    function vertex_neighbour_pairs(v,edge_map)
     {function _bP_(vi)
       {var
         vi_neighbours=caml_call2(Base_Map[35],edge_map,vi),
         vj=caml_call1(Base_Set[55],vi_neighbours);
        if(vj)
         {var vj$0=vj[1];
          return caml_call2(Base_Set[32],[0,Vertex[22]],[0,vi,[0,vj$0,0]])}
        return caml_call2(Base_Set[6],[0,Vertex[22]],vi)}
      return caml_call2(Base_List[74],v,_bP_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_quartic$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Quartic_Graph$0);
    var
     Quartic_Graph=
      [0,
       compare_atom,
       atom_of_sexp,
       sexp_of_atom,
       hash_fold_atom,
       hash_atom,
       ISet,
       IMap,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare$1,
       min,
       max,
       ascending,
       descending,
       between,
       clamp_exn,
       clamp,
       comparator,
       validate_lbound,
       validate_ubound,
       validate_bound,
       compare_node,
       node_of_sexp,
       sexp_of_node,
       hash_fold_node,
       hash_node,
       compare_vertex,
       vertex_of_sexp,
       sexp_of_vertex,
       hash_fold_vertex,
       hash_vertex,
       getLabel,
       Vertex,
       vertex_index,
       VSet,
       VMap,
       show$1,
       fresh_id,
       add_vertices_to_hash,
       add_vertex,
       remove_vertex_edges,
       remove_vertices_edges,
       remove_vertex,
       disjoint,
       complement_map,
       symbol$17,
       find_or_empty,
       successors,
       predecessors,
       connected,
       neighbour,
       neighbours,
       replace,
       connect_vertices,
       intersect_map,
       induced_subgraph,
       w,
       is_module,
       edge_tuple_list,
       add_or_init,
       edge_map,
       edge_maps,
       to_graph,
       vset_to_iset,
       iset_to_vset,
       vmap_to_imap,
       id_map,
       vertex_neighbour_pairs];
    caml_register_global(186,Quartic_Graph,"Quartic__Graph");
    caml_call1(Ppx_module_timer_runtime[4],cst_Quartic_Tree);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_quartic$5);
    caml_call1(Expect_test_collector[4][1],cst_lib_tree_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_quartic$6,cst$4);
    function successors$0(tree)
     {var _bO_=tree[1];
      switch(_bO_[0])
       {case 0:return 0;
        case 1:var tl=_bO_[1];return tl;
        case 2:var tl$0=_bO_[1];return tl$0;
        case 3:var tl$1=_bO_[1];return tl$1;
        default:var tl$2=_bO_[2];return tl$2}}
    function tree_from_condensed(directed,graph,state)
     {var _bA_=caml_call1(Base_Set[7],graph[1]);
      if(caml_call2(Base[200],_bA_,1))
       {var match=caml_call1(Base_Set[55],graph[1]);
        if(match)
         {var
           root=match[1],
           trees_from_id_list=
            function(id_list,state)
             {function _bM_(_bN_){return flip(tree_from_id,state,_bN_)}
              return caml_call2(Base_List[74],id_list,_bM_)},
           tree_from_id=
            function(id,state)
             {var
               vertex=caml_call2(Base_Hashtbl[53],state[2],id),
               _bB_=vertex[1];
              switch(_bB_[0])
               {case 0:var atom=_bB_[1];return [0,[0,atom],vertex[2]];
                case 1:
                 var
                  iset=_bB_[1],
                  tree_list=
                   trees_from_id_list(caml_call1(Base_Set[50],iset),state),
                  _bC_=
                   function(t)
                    {var _bH_=t[1];
                     if(1 === _bH_[0]){var tl=_bH_[1];return [0,tl]}
                     return [1,t]},
                  match=caml_call2(Base_List[56],tree_list,_bC_),
                  tree_list$0=match[2],
                  tensor_lists=match[1],
                  successors=
                   caml_call1(Base_List[134],[0,tree_list$0,tensor_lists]);
                 return [0,[1,successors],vertex[2]];
                case 2:
                 var
                  iset$0=_bB_[1],
                  tree_list$1=
                   trees_from_id_list(caml_call1(Base_Set[50],iset$0),state),
                  _bD_=
                   function(t)
                    {var _bG_=t[1];
                     if(2 === _bG_[0]){var tl=_bG_[1];return [0,tl]}
                     return [1,t]},
                  match$0=caml_call2(Base_List[56],tree_list$1,_bD_),
                  tree_list$2=match$0[2],
                  par_lists=match$0[1],
                  successors$0=
                   caml_call1(Base_List[134],[0,tree_list$2,par_lists]);
                 return [0,[2,successors$0],vertex[2]];
                case 3:
                 var
                  ilist=_bB_[1],
                  tree_list$3=trees_from_id_list(ilist,state),
                  parse_before=
                   function(tl)
                    {if(tl)
                      {var t=tl[2],h=tl[1],_bE_=h[1];
                       if(3 === _bE_[0])
                        {var tl$0=_bE_[1],_bF_=parse_before(t);
                         return caml_call2(Base[179],tl$0,_bF_)}
                       return [0,h,parse_before(t)]}
                     return 0},
                  successors$1=parse_before(tree_list$3);
                 return [0,[3,successors$1],vertex[2]];
                default:
                 var
                  map=_bB_[1],
                  nodes=caml_call1(Base_Map[61],map),
                  id_tuples_from_map=
                   function(map)
                    {if(caml_call1(Base_Map[24],map))return 0;
                     var
                      match=caml_call1(Base_Map[72],map),
                      id_neighbours=match[2],
                      id=match[1];
                     if(resolve(directed))
                      var new_imap=caml_call2(Base_Map[36],map,id);
                     else
                      var
                       _bI_=function(v){return caml_call2(Base_Set[11],v,id)},
                       _bJ_=caml_call2(Base_Map[36],map,id),
                       new_imap=caml_call2(Base_Map[43],_bJ_,_bI_);
                     function _bK_(accum,id2){return [0,[0,id,id2],accum]}
                     var
                      new_edges=caml_call3(Base_Set[43],id_neighbours,0,_bK_),
                      _bL_=id_tuples_from_map(new_imap);
                     return caml_call2(Base[179],new_edges,_bL_)},
                  edges=id_tuples_from_map(map),
                  id_graph=[0,nodes,edges],
                  tree_list$4=trees_from_id_list(id_graph[1],state);
                 return [0,[4,id_graph,tree_list$4],vertex[2]]}};
          return [0,tree_from_id(root[2],state)]}
        return 0}
      throw [0,Assert_failure,_x_]}
    function tree_to_graph(directed,tree)
     {function join_sets(symmetric,vs1,vs2)
       {function _by_(li,vi)
         {function _bz_(lj,vj)
           {if(symmetric)
             {var bool=symmetric[1];
              return bool?[0,[0,vi,vj],[0,[0,vj,vi],lj]]:[0,[0,vi,vj],lj]}
            return [0,[0,vi,vj],lj]}
          return caml_call3(Base_Set[43],vs2,li,_bz_)}
        return caml_call3(Base_Set[43],vs1,0,_by_)}
      function tree_to_graph_r(tree)
       {var _bi_=tree[1];
        switch(_bi_[0])
         {case 0:
           var
            atom=_bi_[1],
            node=caml_call2(Base_Set[6],[0,Vertex[22]],[0,[0,atom],tree[2]]);
           return [0,node,0];
          case 1:
           var
            tl=_bi_[1],
            nel=caml_call2(Base_List[74],tl,tree_to_graph_r),
            _bj_=
             function(param,_bv_)
              {var
                el=_bv_[2],
                vset=_bv_[1],
                elacc=param[2],
                vsetacc=param[1],
                vertices=caml_call2(Base_Set[12],vsetacc,vset),
                edge_base=caml_call2(Base[179],el,elacc),
                edges=join_sets(directed,vsetacc,vset);
               return [0,vertices,caml_call2(Base[179],edges,edge_base)]},
            _bk_=[0,caml_call1(Base_Set[5],[0,Vertex[22]]),0],
            match=caml_call3(Base_List[10],nel,_bk_,_bj_),
            edges=match[2],
            nodes=match[1];
           return [0,nodes,edges];
          case 2:
           var
            tl$0=_bi_[1],
            _bl_=
             function(param,t)
              {var
                el=param[2],
                vset=param[1],
                match=tree_to_graph_r(t),
                el_to_add=match[2],
                nodes=match[1],
                _bu_=caml_call2(Base[179],el_to_add,el);
               return [0,caml_call2(Base_Set[12],vset,nodes),_bu_]},
            _bm_=[0,caml_call1(Base_Set[5],[0,Vertex[22]]),0],
            match$0=caml_call3(Base_List[10],tl$0,_bm_,_bl_),
            edges$0=match$0[2],
            nodes$0=match$0[1];
           return [0,nodes$0,edges$0];
          case 3:
           var
            tl$1=_bi_[1],
            nel$0=caml_call2(Base_List[74],tl$1,tree_to_graph_r),
            _bn_=
             function(param,_bt_)
              {var
                el=_bt_[2],
                vset=_bt_[1],
                elacc=param[2],
                vsetacc=param[1],
                vertices=caml_call2(Base_Set[12],vsetacc,vset),
                edge_base=caml_call2(Base[179],el,elacc),
                edges=join_sets(_y_,vset,vsetacc);
               return [0,vertices,caml_call2(Base[179],edges,edge_base)]},
            _bo_=[0,caml_call1(Base_Set[5],[0,Vertex[22]]),0],
            match$1=caml_call3(Base_List[10],nel$0,_bo_,_bn_),
            edges$1=match$1[2],
            nodes$1=match$1[1];
           return [0,nodes$1,edges$1];
          default:
           var
            tl$2=_bi_[2],
            id_graph=_bi_[1],
            _bp_=
             function(param,t)
              {var
                map=param[3],
                el=param[2],
                vset=param[1],
                match=tree_to_graph_r(t),
                edges=match[2],
                nodes=match[1],
                nmap=caml_call3(Base_Map[28],map,t[2],nodes),
                _bx_=caml_call2(Base[179],edges,el);
               return [0,caml_call2(Base_Set[12],vset,nodes),_bx_,nmap]},
            _bq_=caml_call1(Base_Map[5],[0,Base_Int[27]]),
            _br_=[0,caml_call1(Base_Set[5],[0,Vertex[22]]),0,_bq_],
            match$2=caml_call3(Base_List[10],tl$2,_br_,_bp_),
            id_map=match$2[3],
            edges$2=match$2[2],
            vertices=match$2[1],
            _bs_=
             function(el,param)
              {var
                id2=param[2],
                id1=param[1],
                _bw_=find_or_empty(id_map,id2),
                new_edges=join_sets(0,find_or_empty(id_map,id1),_bw_);
               return caml_call2(Base[179],new_edges,el)},
            new_edges=caml_call3(Base_List[10],id_graph[2],0,_bs_);
           return [0,vertices,caml_call2(Base[179],new_edges,edges$2)]}}
      var
       match=tree_to_graph_r(tree),
       edges=match[2],
       vertices=match[1],
       match$0=edge_maps(directed,edges),
       edges_from=match$0[2],
       edges$0=match$0[1];
      return [0,vertices,edges$0,edges_from]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_quartic$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Quartic_Tree$0);
    var Quartic_Tree=[0,successors$0,tree_from_condensed,tree_to_graph];
    caml_register_global(187,Quartic_Tree,"Quartic__Tree");
    caml_call1(Ppx_module_timer_runtime[4],cst_Quartic_Parsegraph);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_quartic$8);
    caml_call1(Expect_test_collector[4][1],cst_lib_parsegraph_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_quartic$9,cst$5);
    function to_vertex(js_obj)
     {var
       _bf_=caml_call2(Yojson[10][100][7],cst_id$1,js_obj),
       id=caml_call1(Yojson[10][100][18],_bf_),
       _bg_=caml_call2(Yojson[10][100][7],cst_label$1,js_obj),
       label=caml_call1(Yojson[10][100][21],_bg_),
       _bh_=caml_call2(Yojson[10][100][7],cst_polarisation,js_obj),
       polarisation=caml_call1(Yojson[10][100][12],_bh_),
       atom=[0,[0,label,polarisation]];
      return [0,atom,id]}
    function to_nodes(js_obj)
     {var
       json_list=caml_call1(Yojson[10][100][20],js_obj),
       vertex_list=caml_call2(Base_List[74],json_list,to_vertex);
      return caml_call2(Base_Set[32],[0,Vertex[22]],vertex_list)}
    function to_id_tuple(js_obj)
     {var
       _bd_=caml_call2(Yojson[10][100][7],cst_source,js_obj),
       src=caml_call1(Yojson[10][100][18],_bd_),
       _be_=caml_call2(Yojson[10][100][7],cst_target,js_obj),
       dest=caml_call1(Yojson[10][100][18],_be_);
      return [0,src,dest]}
    function to_id_list(js_obj)
     {var _bc_=caml_call1(Yojson[10][100][20],js_obj);
      return caml_call2(Base_List[74],_bc_,to_id_tuple)}
    function to_assoc_list(id_list,nodes)
     {var map=id_map(nodes);
      function _ba_(param)
       {var dest=param[2],src=param[1],_bb_=caml_call2(Base_Map[35],map,dest);
        return [0,caml_call2(Base_Map[35],map,src),_bb_]}
      return caml_call2(Base_List[74],id_list,_ba_)}
    function equal_int_tuple(param,_a7_)
     {var
       t22=_a7_[2],
       t21=_a7_[1],
       t12=param[2],
       t11=param[1],
       _a8_=caml_call2(Base[202],t11,t21),
       _a9_=_a8_?caml_call2(Base[202],t12,t22):_a8_;
      if(_a9_)
       var _a__=_a9_;
      else
       {var _a$_=caml_call2(Base[202],t11,t22);
        if(_a$_)return caml_call2(Base[202],t12,t21);
        var _a__=_a$_}
      return _a__}
    function to_edge_maps(directed,nodes,js_obj)
     {var
       id_list=to_id_list(js_obj),
       vertex_assoc=to_assoc_list(id_list,nodes);
      return edge_maps(directed,vertex_assoc)}
    function parse(directed,js_obj)
     {var
       nodes=to_nodes(caml_call2(Yojson[10][100][7],cst_nodes,js_obj)),
       match=
        to_edge_maps
         (directed,nodes,caml_call2(Yojson[10][100][7],cst_edges,js_obj)),
       edges_from=match[2],
       edges=match[1];
      function _a5_(v){return v[2]}
      var
       _a6_=caml_call1(Base_Set[50],nodes),
       ids=caml_call2(Base_List[74],_a6_,_a5_),
       match$0=caml_call2(Base_List[21],ids,Base_Int[19]);
      if(match$0)var n=match$0[1],max_id=n;else var max_id=0;
      return [0,
              [0,nodes,edges,edges_from],
              [0,
               max_id,
               caml_call3
                (Base_Hashtbl[4],0,0,[0,Base_Int[19],Base_Int[9],Base_Int[7]])]]}
    function from_vertex(vertex)
     {var id=[0,3654863,vertex[2]],_a3_=vertex[1];
      if(0 === _a3_[0])
       var
        atom=_a3_[1],
        pol=[0,737456202,atom[2]],
        label=[0,-976970511,atom[1]],
        pol$0=pol,
        label$0=label;
      else
       var
        _a4_=caml_call1(Base[220],cst_Tried_to_serialize_non_ato),
        pol$0=_a4_[2],
        label$0=_a4_[1];
      return [0,
              963043957,
              [0,
               [0,cst_id$2,id],
               [0,[0,cst_label$2,label$0],[0,[0,cst_polarisation$0,pol$0],0]]]]}
    function from_nodes(vset)
     {var
       node_list=caml_call1(Base_Set[50],vset),
       json_list=caml_call2(Base_List[74],node_list,from_vertex);
      return [0,848054398,json_list]}
    function from_id_tuple(param)
     {var
       id2=param[2],
       id1=param[1],
       source=[0,3654863,id1],
       target=[0,3654863,id2];
      return [0,
              963043957,
              [0,[0,cst_source$0,source],[0,[0,cst_target$0,target],0]]]}
    function from_edges(edge_map)
     {var edge_list=edge_tuple_list(0,edge_map);
      function _a2_(param){var v2=param[2],v1=param[1];return [0,v1[2],v2[2]]}
      var
       id_list=caml_call2(Base_List[74],edge_list,_a2_),
       json_list=caml_call2(Base_List[74],id_list,from_id_tuple);
      return json_list}
    function serialize_graph(directed,graph)
     {var nodes=from_nodes(graph[1]);
      if(directed)
       {var bool=directed[1];
        if(bool)
         var
          _aZ_=from_edges(graph[3]),
          _a0_=from_edges(graph[2]),
          _a1_=[0,848054398,caml_call2(Base[179],_a0_,_aZ_)];
        else
         var _a1_=[0,848054398,from_edges(graph[2])];
        var edges=_a1_}
      else
       var edges=[0,848054398,from_edges(graph[2])];
      return [0,
              963043957,
              [0,[0,cst_nodes$0,nodes],[0,[0,cst_edges$0,edges],0]]]}
    function from_connective(connective)
     {switch(connective[0])
       {case 0:return _z_;
        case 1:return _A_;
        case 2:return _B_;
        case 3:return _C_;
        default:var id_graph=connective[1];return [0,_D_,[0,id_graph]]}}
    function from_id_graph(id_graph)
     {function _aX_(n){return [0,3654863,n]}
      var
       nodes=caml_call2(Base_List[74],id_graph[1],_aX_),
       nodes_json=[0,848054398,nodes];
      function _aY_(param)
       {var n2=param[2],n1=param[1];
        return [0,
                963043957,
                [0,
                 [0,cst_source$1,[0,3654863,n1]],
                 [0,[0,cst_target$1,[0,3654863,n2]],0]]]}
      var
       edges=caml_call2(Base_List[74],id_graph[2],_aY_),
       edges_json=[0,848054398,edges];
      return [0,
              963043957,
              [0,[0,cst_nodes$1,nodes_json],[0,[0,cst_edges$1,edges_json],0]]]}
    function serialized_nodes_and_edges(tree)
     {var
       match=from_connective(tree[1]),
       id_graph=match[2],
       connective=match[1],
       id=[0,3654863,tree[2]],
       successors=successors$0(tree),
       node_base=[0,[0,cst_connective$1,connective],[0,[0,cst_id$3,id],0]];
      if(id_graph)
       var
        id_graph$0=id_graph[1],
        new_node=
         [0,963043957,[0,[0,cst_graph,from_id_graph(id_graph$0)],node_base]];
      else
       var new_node=[0,963043957,node_base];
      if(successors)
       {var
         _aU_=caml_call2(Base_List[74],successors,serialized_nodes_and_edges),
         match$0=caml_call1(Stdlib_List[54],_aU_),
         edges=match$0[2],
         nodes=match$0[1],
         node=[0,new_node,caml_call1(Base_List[134],nodes)],
         _aV_=
          function(t)
           {return [0,
                    963043957,
                    [0,
                     [0,cst_source$2,id],
                     [0,[0,cst_target$2,[0,3654863,t[2]]],0]]]},
         new_edges=caml_call2(Base_List[74],successors,_aV_),
         _aW_=caml_call1(Base_List[134],edges),
         edge=caml_call2(Base[179],new_edges,_aW_);
        return [0,node,edge]}
      return [0,[0,new_node,0],0]}
    function serialize_tree_as_graph(tree)
     {var
       match=serialized_nodes_and_edges(tree),
       edges=match[2],
       nodes=match[1],
       json_nodes=[0,848054398,nodes],
       json_edges=[0,848054398,edges];
      return [0,
              963043957,
              [0,[0,cst_nodes$2,json_nodes],[0,[0,cst_edges$2,json_edges],0]]]}
    function serialize_tree(tree)
     {var
       id=[0,3654863,tree[2]],
       match=from_connective(tree[1]),
       id_graph=match[2],
       connective=match[1],
       node_base=[0,[0,cst_connective$2,connective],[0,[0,cst_id$4,id],0]];
      if(id_graph)
       var
        graph=id_graph[1],
        node=[0,963043957,[0,[0,cst_graph$0,from_id_graph(graph)],node_base]];
      else
       var node=[0,963043957,node_base];
      var
       _aT_=successors$0(tree),
       successors=caml_call2(Base_List[74],_aT_,serialize_tree);
      return [0,
              963043957,
              [0,
               [0,cst_node,node],
               [0,[0,cst_successors,[0,848054398,successors]],0]]]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_quartic$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Quartic_Parsegraph$0);
    var
     Quartic_Parsegraph=
      [0,
       to_vertex,
       to_nodes,
       to_id_tuple,
       to_id_list,
       to_assoc_list,
       equal_int_tuple,
       to_edge_maps,
       parse,
       from_vertex,
       from_nodes,
       from_id_tuple,
       from_edges,
       serialize_graph,
       from_connective,
       from_id_graph,
       serialized_nodes_and_edges,
       serialize_tree_as_graph,
       serialize_tree];
    caml_register_global(190,Quartic_Parsegraph,"Quartic__Parsegraph");
    caml_call1(Ppx_module_timer_runtime[4],cst_Quartic_Condense);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_quartic$11);
    caml_call1(Expect_test_collector[4][1],cst_lib_condense_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_quartic$12,cst$6);
    var VSetSet=[0];
    function compare_subset(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var switch$0=0;
      switch(a_001[0])
       {case 0:
         var _aO_=a_001[1];
         if(0 === b_002[0])
          {var b_004=b_002[1];return compare_vertex(_aO_,b_004)}
         return -1;
        case 1:
         var _aP_=a_001[1];
         switch(b_002[0])
          {case 0:break;
           case 1:var b_006=b_002[1];return caml_call2(VSet[13],_aP_,b_006);
           default:return -1}
         break;
        case 2:
         var _aQ_=a_001[1];
         switch(b_002[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:
            var
             b_008=b_002[1],
             _aR_=function(a_009,b_010){return compare_vertex(a_009,b_010)};
            return caml_call3(Base[136],_aR_,_aQ_,b_008);
           default:return -1}
         break;
        default:
         var _aS_=a_001[1];
         switch(b_002[0])
          {case 0:break;
           case 1:switch$0 = 1;break;
           case 2:return 1;
           default:var b_012=b_002[1];return caml_call2(VSet[13],_aS_,b_012)}}
      return switch$0?1:1}
    function subset_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _aK_=sexp[1],switch$0=0;
        if(caml_string_notequal(_aK_,cst_Before$1))
         {var switch$1=0;
          if(caml_string_notequal(_aK_,cst_Clique))
           {var switch$2=0;
            if(caml_string_notequal(_aK_,cst_IndSet))
             {var switch$3=0;
              if(caml_string_notequal(_aK_,cst_Singleton))
               if(caml_string_notequal(_aK_,cst_before$1))
                if(caml_string_notequal(_aK_,cst_clique))
                 if(caml_string_notequal(_aK_,cst_indSet))
                  {if(caml_string_notequal(_aK_,cst_singleton))
                    {switch$0 = 1;switch$1 = 1;switch$2 = 1;switch$3 = 1}}
                 else
                  switch$3 = 1;
                else
                 {switch$2 = 1;switch$3 = 1}
               else
                {switch$1 = 1;switch$2 = 1;switch$3 = 1}
              if(! switch$3)
               return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
            if(! switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
        if(! switch$0)
         return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$2,sexp)}
      else
       {var _aL_=sexp[1];
        if(! _aL_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$2,sexp);
        var _aM_=_aL_[1];
        if(0 !== _aM_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$2,sexp);
        var _aN_=_aM_[1],switch$4=0;
        if(caml_string_notequal(_aN_,cst_Before$2))
         {var switch$5=0;
          if(caml_string_notequal(_aN_,cst_Clique$0))
           {var switch$6=0;
            if(caml_string_notequal(_aN_,cst_IndSet$0))
             {var switch$7=0;
              if(caml_string_notequal(_aN_,cst_Singleton$0))
               if(caml_string_notequal(_aN_,cst_before$2))
                if(caml_string_notequal(_aN_,cst_clique$0))
                 if(caml_string_notequal(_aN_,cst_indSet$0))
                  {if(caml_string_notequal(_aN_,cst_singleton$0))
                    {switch$4 = 1;switch$5 = 1;switch$6 = 1;switch$7 = 1}}
                 else
                  switch$7 = 1;
                else
                 {switch$6 = 1;switch$7 = 1}
               else
                {switch$5 = 1;switch$6 = 1;switch$7 = 1}
              if(! switch$7)
               {var sexp_args=_aL_[2];
                if(sexp_args && ! sexp_args[2])
                 {var v0=sexp_args[1],v0$0=vertex_of_sexp(v0);return [0,v0$0]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[4],tp_loc$2,_aN_,sexp)}}
            if(! switch$6)
             {var sexp_args$0=_aL_[2];
              if(sexp_args$0 && ! sexp_args$0[2])
               {var v0$1=sexp_args$0[1],v0$2=caml_call1(VSet[2],v0$1);
                return [3,v0$2]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$2,_aN_,sexp)}}
          if(! switch$5)
           {var sexp_args$1=_aL_[2];
            if(sexp_args$1 && ! sexp_args$1[2])
             {var v0$3=sexp_args$1[1],v0$4=caml_call1(VSet[2],v0$3);
              return [1,v0$4]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$2,_aN_,sexp)}}
        if(! switch$4)
         {var sexp_args$2=_aL_[2];
          if(sexp_args$2 && ! sexp_args$2[2])
           {var
             v0$5=sexp_args$2[1],
             v0$6=caml_call2(Base[139],vertex_of_sexp,v0$5);
            return [2,v0$6]}
          return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$2,_aN_,sexp)}}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$2,sexp)}
    function sexp_of_subset(param)
     {switch(param[0])
       {case 0:
         var v0=param[1],v0$0=sexp_of_vertex(v0);
         return [1,[0,_E_,[0,v0$0,0]]];
        case 1:
         var v0$1=param[1],v0$2=caml_call1(VSet[3],v0$1);
         return [1,[0,_F_,[0,v0$2,0]]];
        case 2:
         var v0$3=param[1],v0$4=caml_call2(Base[140],sexp_of_vertex,v0$3);
         return [1,[0,_G_,[0,v0$4,0]]];
        default:
         var v0$5=param[1],v0$6=caml_call1(VSet[3],v0$5);
         return [1,[0,_H_,[0,v0$6,0]]]}}
    var
     T$1=[0,compare_subset,subset_of_sexp,sexp_of_subset],
     t_of_sexp$4=T$1[2],
     sexp_of_t$4=T$1[3],
     include$2=caml_call1(Base_Comparable[10],[0,T$1[1],T$1[3]]),
     symbol$18=include$2[1],
     symbol$19=include$2[2],
     symbol$20=include$2[3],
     symbol$21=include$2[4],
     symbol$22=include$2[5],
     symbol$23=include$2[6],
     equal$2=include$2[7],
     compare$5=include$2[8],
     min$2=include$2[9],
     max$2=include$2[10],
     ascending$2=include$2[11],
     descending$2=include$2[12],
     between$2=include$2[13],
     clamp_exn$2=include$2[14],
     clamp$2=include$2[15],
     comparator$2=include$2[16],
     validate_lbound$2=include$2[17],
     validate_ubound$2=include$2[18],
     validate_bound$2=include$2[19],
     Subset=
      [0,
       T$1,
       t_of_sexp$4,
       sexp_of_t$4,
       symbol$18,
       symbol$19,
       symbol$20,
       symbol$21,
       symbol$22,
       symbol$23,
       equal$2,
       compare$5,
       min$2,
       max$2,
       ascending$2,
       descending$2,
       between$2,
       clamp_exn$2,
       clamp$2,
       comparator$2,
       validate_lbound$2,
       validate_ubound$2,
       validate_bound$2],
     Subsetset=[0];
    function smallest_condensible(graph,vset)
     {var _aF_=caml_call1(Base_Set[7],vset);
      if(caml_call2(Base[199],_aF_,2))return 0;
      var res$0=caml_call1(Base_Set[5],[0,Vertex[22]]),res=res$0,to_add=vset;
      for(;;)
       {if(caml_call1(Base_Set[8],to_add))return [0,res];
        var
         new_res=caml_call2(Base_Set[12],res,to_add),
         _aG_=connected(graph,new_res),
         new_connected=flip(Base_Set[15],res,_aG_),
         _aH_=
          function(new_res,new_connected)
            {return function(acum,v)
              {var
                wgi=w(graph,new_res,v),
                _aJ_=caml_call2(Base_Set[15],new_connected,wgi);
               return caml_call2(Base_Set[12],acum,_aJ_)}}
           (new_res,new_connected),
         _aI_=caml_call1(Base_Set[5],[0,Vertex[22]]),
         to_add$0=caml_call3(Base_Set[43],new_res,_aI_,_aH_),
         res=new_res,
         to_add=to_add$0;
        continue}}
    function update_subset(subset,vi,vi_neighbours,vj,vj_neighbours)
     {switch(subset[0])
       {case 0:
         var vertex=subset[1];
         if(caml_call2(VSet[12],vj_neighbours,vi_neighbours))
          return [3,
                  caml_call2(Base_Set[32],[0,Vertex[22]],[0,vertex,[0,vj,0]])];
         var
          _ay_=caml_call2(Base_Set[11],vi_neighbours,vj),
          _az_=caml_call2(Base_Set[11],vj_neighbours,vi);
         return caml_call2(VSet[12],_az_,_ay_)
                 ?caml_call2(Base_Set[9],vj_neighbours,vi)
                   ?caml_call2(Base_Set[9],vi_neighbours,vj)
                     ?[1,
                       caml_call2(Base_Set[32],[0,Vertex[22]],[0,vertex,[0,vj,0]])]
                     :[2,[0,vj,[0,vi,0]]]
                   :[2,[0,vi,[0,vj,0]]]
                 :subset;
        case 1:
         var
          set=subset[1],
          _aA_=caml_call2(Base_Set[10],vi_neighbours,vi),
          _aB_=caml_call2(Base_Set[10],vj_neighbours,vj);
         return caml_call2(Base_Set[19],_aB_,_aA_)
                 ?[1,caml_call2(Base_Set[10],set,vj)]
                 :subset;
        case 2:
         var vlist=subset[1];
         if(vlist)
          {var h=vlist[1];
           if(! caml_call2(Base_Set[9],vi_neighbours,h))
            {var _aC_=caml_call2(Base_Set[10],vi_neighbours,h);
             if(caml_call2(Base_Set[19],_aC_,vj_neighbours))
              return [2,[0,vj,vlist]]}
           return subset}
         var
          _aD_=[0,caml_call1(Sexplib0_Sexp_conv[7],cst_Found_Empty_Before),0],
          _aE_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_error$0),_aD_]];
         return caml_call1(Base[222],_aE_);
        default:
         var set$0=subset[1];
         return caml_call2(VSet[12],vj_neighbours,vi_neighbours)
                 ?[3,caml_call2(Base_Set[10],set$0,vj)]
                 :subset}}
    function update_subsetset(subsetset,new_subset)
     {return 0 === new_subset[0]
              ?subsetset
              :caml_call2(Base_Set[10],subsetset,new_subset)}
    function subset_contains(v,subset)
     {switch(subset[0])
       {case 0:var vertex=subset[1];return caml_call2(Vertex[13],vertex,v);
        case 1:var vset=subset[1];return caml_call2(Base_Set[9],vset,v);
        case 2:
         var vlist=subset[1];
         return caml_call3(Base_List[6],vlist,v,Vertex[13]);
        default:var vset$0=subset[1];return caml_call2(Base_Set[9],vset$0,v)}}
    function subset_add(graph,v,subset)
     {switch(subset[0])
       {case 0:
         var
          _av_=
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Cannot_add_vertex_to_Singl),
            0],
          _aw_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_error$1),_av_]];
         return caml_call1(Base[222],_aw_);
        case 1:var vset=subset[1];return [1,caml_call2(Base_Set[10],vset,v)];
        case 2:
         var
          vlist=subset[1],
          last=caml_call1(Base_List[66],vlist),
          _ax_=find_or_empty(graph[2],last);
         return caml_call2(Base_Set[9],_ax_,v)
                 ?[2,[0,v,vlist]]
                 :[2,caml_call2(Base[179],vlist,[0,v,0])];
        default:
         var vset$0=subset[1];return [3,caml_call2(Base_Set[10],vset$0,v)]}}
    function share_module(graph,vi,vj)
     {var
       _aq_=find_or_empty(graph[2],vi),
       si=flip(Base_Set[11],vj,_aq_),
       _ar_=find_or_empty(graph[2],vj),
       sj=flip(Base_Set[11],vi,_ar_),
       _as_=find_or_empty(graph[3],vi),
       pi=flip(Base_Set[11],vj,_as_),
       _at_=find_or_empty(graph[3],vj),
       pj=flip(Base_Set[11],vi,_at_),
       _au_=caml_call2(VSet[12],si,sj);
      return _au_?caml_call2(VSet[12],pi,pj):_au_}
    function cc_and_is(g)
     {var
       visited=[0,caml_call1(Base_Set[5],[0,Vertex[22]])],
       res=[0,caml_call1(Base_Set[5],[0,Subset[19]])],
       v=caml_call1(Base_Set[50],g[1]);
      function _ak_(i,vi)
       {var
         vi_successors=find_or_empty(g[2],vi),
         vi_predecessors=find_or_empty(g[3],vi);
        function _al_(j,vj)
         {if(caml_call2(Base[200],j,i))return 0;
          if(caml_call2(Base_Set[9],visited[1],vj))return 0;
          var _am_=share_module(g,vi,vj);
          if(_am_)
           {visited[1] = caml_call2(Base_Set[10],visited[1],vj);
            if(! caml_call2(Base_Set[9],visited[1],vi))
             {visited[1] = caml_call2(Base_Set[10],visited[1],vi);
              var
               subset$0=
                caml_call2(Base_Set[9],vi_successors,vj)
                 ?caml_call2(Base_Set[9],vi_predecessors,vj)
                   ?[1,caml_call2(Base_Set[32],[0,Vertex[22]],[0,vi,[0,vj,0]])]
                   :[2,[0,vj,[0,vi,0]]]
                 :caml_call2(Base_Set[9],vi_predecessors,vj)
                   ?[2,[0,vi,[0,vj,0]]]
                   :[3,caml_call2(Base_Set[32],[0,Vertex[22]],[0,vi,[0,vj,0]])];
              res[1] = caml_call2(Base_Set[10],res[1],subset$0);
              return 0}
            var
             _an_=function(_ap_){return subset_contains(vi,_ap_)},
             subset=caml_call2(Base_Set[26],res[1],_an_),
             new_subset=subset_add(g,vj,subset);
            res[1] = caml_call2(Base_Set[11],res[1],subset);
            res[1] = caml_call2(Base_Set[10],res[1],new_subset);
            var _ao_=0}
          else
           var _ao_=_am_;
          return _ao_}
        return caml_call2(Base_List[96],v,_al_)}
      caml_call2(Base_List[96],v,_ak_);
      return res[1]}
    function subset_set_to_nodes(subsetset)
     {function _ai_(accum,ss)
       {switch(ss[0])
         {case 0:return accum;
          case 1:var vset=ss[1];return [0,[1,vset_to_iset(vset)],accum];
          case 2:
           var vlist=ss[1],_aj_=function(v){return v[2]};
           return [0,[3,caml_call2(Base_List[74],vlist,_aj_)],accum];
          default:var vset$0=ss[1];return [0,[2,vset_to_iset(vset$0)],accum]}}
      return caml_call3(Base_Set[43],subsetset,0,_ai_)}
    function condense_subset(subset,graph,state)
     {switch(subset[0])
       {case 0:
         var
          _ae_=
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Cannot_condense_singleton),
            0],
          _af_=[1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_error$2),_ae_]],
          _ag_=caml_call1(Base[222],_af_),
          node=_ag_[2],
          h=_ag_[1];
         break;
        case 1:var set=subset[1],node=[1,vset_to_iset(set)],h=set;break;
        case 2:
         var
          vlist=subset[1],
          _ah_=function(v){return v[2]},
          node$0=[3,caml_call2(Base_List[74],vlist,_ah_)],
          node=node$0,
          h=caml_call2(Base_Set[32],[0,Vertex[22]],vlist);
         break;
        default:
         var
          set$0=subset[1],
          node$1=[2,vset_to_iset(set$0)],
          node=node$1,
          h=set$0}
      var new_vertex=[0,node,fresh_id(state)];
      return replace(graph,h,new_vertex,state)}
    function condense_prime(node,vertices,graph,state)
     {var new_vertex=[0,node,fresh_id(state)];
      return replace(graph,vertices,new_vertex,state)}
    function condensible_subgraphs(graph)
     {var
       v=caml_call1(Base_Set[50],graph[1]),
       edge_list=edge_tuple_list(0,graph[2]),
       v_to_edge_index=
        caml_call3(Base_Hashtbl[4],0,0,[0,Vertex[14],Vertex[3],Vertex[5]]);
      function _R_(i,param)
       {var v2=param[2],v1=param[1];
        function _ac_(l)
         {if(l){var l$0=l[1];return [0,[0,i,l$0]]}return [0,[0,i,0]]}
        caml_call3(Base_Hashtbl[37],v_to_edge_index,v1,_ac_);
        function _ad_(l)
         {if(l){var l$0=l[1];return [0,[0,i,l$0]]}return [0,[0,i,0]]}
        return caml_call3(Base_Hashtbl[37],v_to_edge_index,v2,_ad_)}
      caml_call2(Base_List[96],edge_list,_R_);
      function _S_(param)
       {var v2=param[2],v1=param[1];
        return smallest_condensible
                (graph,
                 caml_call2(Base_Set[32],[0,Vertex[22]],[0,v1,[0,v2,0]]))}
      var min_con_edges=caml_call2(Base_List[74],edge_list,_S_);
      function _T_(v)
       {function ___(i){return caml_call2(Base_List[36],min_con_edges,i)}
        var match=caml_call2(Base_Hashtbl[52],v_to_edge_index,v);
        if(match)var l=match[1],l$0=l;else var l$0=0;
        var defined_on_v=caml_call2(Base_List[74],l$0,___);
        function smallest_card(l)
         {if(l)
           {var _$_=l[1];
            if(l[2])
             {var t=l[2],min_card=smallest_card(t);
              if(_$_)
               {var
                 h=_$_[1],
                 _aa_=caml_call1(Base_Set[7],min_card),
                 _ab_=caml_call1(Base_Set[7],h);
                return caml_call2(Base[199],_ab_,_aa_)?h:min_card}
              return min_card}
            if(_$_){var a=_$_[1];return a}
            return caml_call1(Base_Set[5],[0,Vertex[22]])}
          return caml_call1(Base_Set[5],[0,Vertex[22]])}
        return smallest_card(defined_on_v)}
      var
       h=caml_call2(Base_List[74],v,_T_),
       considered=caml_call2(Base_Set[32],[0,Vertex[22]],v);
      function _U_(i,acum,vi)
       {var hi=caml_call2(Base_List[36],h,i);
        if(caml_call2(Base_Set[9],acum,vi))
         {var
           _X_=
            function(acum2,vj)
             {var j=vertex_index(vj,v);
              if(caml_call2(Base[202],j,i))return acum2;
              var vj$0=caml_call2(Base_List[36],v,j);
              if(caml_call2(Base_Set[9],acum2,vj$0))
               {var
                 hj=caml_call2(Base_List[36],h,j),
                 _Y_=caml_call1(Base_Set[7],hi),
                 _Z_=caml_call1(Base_Set[7],hj);
                return caml_call2(Base[204],_Z_,_Y_)
                        ?caml_call2(Base_Set[11],acum2,vj$0)
                        :caml_call2(Base_Set[11],acum2,vi)}
              return acum2};
          return caml_call3(Base_Set[43],hi,acum,_X_)}
        return acum}
      var res=caml_call3(Base_List[97],v,considered,_U_);
      function _V_(acum,vi)
       {var i=vertex_index(vi,v),set=caml_call2(Base_List[36],h,i);
        return caml_call1(Base_Set[8],set)
                ?acum
                :caml_call2(Base_Set[10],acum,set)}
      var _W_=caml_call1(Base_Set[5],[0,VSet[21]]);
      return caml_call3(Base_Set[43],res,_W_,_V_)}
    function condense_set(subsets,graph,state)
     {function _Q_(accum,ss){return condense_subset(ss,accum,state)}
      return caml_call3(Base_Set[43],subsets,graph,_Q_)}
    function condense_cliques(graph,state)
     {var graph$0=graph;
      for(;;)
       {var cliques_and_ind=cc_and_is(graph$0);
        if(caml_call1(Base_Set[8],cliques_and_ind))return graph$0;
        var
         graph$1=condense_set(cliques_and_ind,graph$0,state),
         graph$0=graph$1;
        continue}}
    function return$0(graph,state)
     {var match=caml_call1(Base_Set[55],graph[1]);
      if(match)
       {var root=match[1];caml_call3(Base_Hashtbl[36],state[2],root[2],root)}
      return graph}
    function process(graph,state)
     {var graph$0=graph;
      for(;;)
       {var _M_=caml_call1(Base_Set[7],graph$0[1]);
        if(caml_call2(Base[200],_M_,1))return return$0(graph$0,state);
        var
         condensed_graph=condense_cliques(graph$0,state),
         _N_=caml_call1(Base_Set[7],condensed_graph[1]);
        if(caml_call2(Base[200],_N_,1))return return$0(condensed_graph,state);
        var min_cond=condensible_subgraphs(condensed_graph);
        if(caml_call1(Base_Set[8],min_cond))
         {var
           node=[4,vmap_to_imap(condensed_graph[2],condensed_graph[1])],
           res=condense_prime(node,condensed_graph[1],condensed_graph,state);
          return return$0(res,state)}
        var
         _O_=
          function(condensed_graph)
            {return function(accum,vset)
              {var
                subgraph=induced_subgraph(condensed_graph,vset),
                node=[4,vmap_to_imap(subgraph[2],subgraph[1])];
               return [0,[0,node,vset],accum]}}
           (condensed_graph),
         prime_list=caml_call3(Base_Set[43],min_cond,0,_O_),
         _P_=
          function(graph,param)
           {var h=param[2],node=param[1];
            return condense_prime(node,h,graph,state)},
         graph$1=caml_call3(Base_List[10],prime_list,condensed_graph,_P_),
         graph$0=graph$1;
        continue}}
    function isPrime(graph)
     {var cliques_and_in=cc_and_is(graph);
      if(caml_call1(Base_Set[8],cliques_and_in))
       {var min_cond=condensible_subgraphs(graph);
        if(caml_call1(Base_Set[8],min_cond))return 1;
        var _I_=caml_call1(Base_Set[7],min_cond);
        if(caml_call2(Base[202],_I_,1))
         {var
           _J_=caml_call1(Base_Set[7],graph[1]),
           _K_=caml_call1(Base_Set[56],min_cond),
           _L_=caml_call1(Base_Set[7],_K_);
          if(caml_call2(Base[202],_L_,_J_))return 1}
        return 0}
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_quartic$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Quartic_Condense$0);
    var
     Quartic_Condense=
      [0,
       VSetSet,
       compare_subset,
       subset_of_sexp,
       sexp_of_subset,
       Subset,
       Subsetset,
       smallest_condensible,
       update_subset,
       update_subsetset,
       subset_contains,
       subset_add,
       share_module,
       cc_and_is,
       subset_set_to_nodes,
       condense_subset,
       condense_prime,
       condensible_subgraphs,
       condense_set,
       condense_cliques,
       return$0,
       process,
       isPrime];
    caml_register_global(191,Quartic_Condense,"Quartic__Condense");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIucXVhcnRpYy5vYmpzL3F1YXJ0aWMuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInRwX2xvYyIsInRwX2xvYyQwIiwidHBfbG9jJDEiLCJ0cF9sb2MkMiIsImZsaXAiLCJmIiwieCIsInkiLCJiZWZvcmUiLCJ2MSIsInYyIiwidmwiLCJ2bCQwIiwidiIsInZsJDEiLCJpbmRleCIsImVsZW0iLCJsIiwibCQwIiwiaSIsInQiLCJoIiwiaSQwIiwicmVtb3ZlX3JlcCIsInN0cmluZyIsInJlc29sdmUiLCJib29sIiwiY29tcGFyZV9hdG9tIiwiYV8wMDEiLCJiXzAwMiIsIm4iLCJhdG9tX29mX3NleHAiLCJzZXhwIiwiZmllbGRfc2V4cHMiLCJsYWJlbF9maWVsZCIsInBvbF9maWVsZCIsImR1cGxpY2F0ZXMiLCJleHRyYSIsInRhaWwiLCJmaWVsZF9zZXhwJDIiLCJmaWVsZF9zZXhwIiwiZmllbGRfc2V4cCQwIiwiZnZhbHVlIiwiZmllbGRfc2V4cCQxIiwiZnZhbHVlJDAiLCJwb2xfdmFsdWUiLCJsYWJlbF92YWx1ZSIsInNleHBfb2ZfYXRvbSIsInZfcG9sIiwidl9sYWJlbCIsImFyZyIsImJuZHMiLCJhcmckMCIsImJuZHMkMCIsImhhc2hfZm9sZF9hdG9tIiwiaHN2IiwiaHN2JDAiLCJoYXNoX2F0b20iLCJjb21wYXJlIiwiYV8wMDMiLCJiXzAwNCIsInRfb2Zfc2V4cCIsInNleHBfb2ZfdCIsImhhc2hfZm9sZF90IiwiZnVuYyIsImhhc2giLCJjb21wYXJlJDAiLCJhXzAwNSIsImJfMDA2IiwiYV8wMDciLCJiXzAwOCIsInRfb2Zfc2V4cCQwIiwic2V4cF9vZl90JDAiLCJoYXNoX2ZvbGRfdCQwIiwiaGFzaCQwIiwiY29tcGFyZV9ub2RlIiwiYV8wMDkiLCJiXzAxMCIsImJfMDEyIiwiYl8wMTQiLCJiXzAxNiIsImJfMDE4IiwiYV8wMTkiLCJiXzAyMCIsImJfMDIyIiwibm9kZV9vZl9zZXhwIiwic2V4cF9hcmdzJDMiLCJ2MCQ3IiwidjAkOCIsInNleHBfYXJncyIsInYwIiwidjAkMCIsInNleHBfYXJncyQxIiwidjAkMyIsInYwJDQiLCJzZXhwX2FyZ3MkMiIsInYwJDUiLCJ2MCQ2Iiwic2V4cF9hcmdzJDAiLCJ2MCQxIiwidjAkMiIsInNleHBfb2Zfbm9kZSIsImhhc2hfZm9sZF9ub2RlIiwiYTAiLCJhMCQwIiwiaHN2JDEiLCJhMCQxIiwiaHN2JDIiLCJhMCQyIiwiaHN2JDMiLCJhMCQzIiwiaHN2JDQiLCJoYXNoX25vZGUiLCJjb21wYXJlX3ZlcnRleCIsImFfMDIzIiwiYl8wMjQiLCJ2ZXJ0ZXhfb2Zfc2V4cCIsImNvbm5lY3RpdmVfZmllbGQiLCJpZF9maWVsZCIsImlkX3ZhbHVlIiwiY29ubmVjdGl2ZV92YWx1ZSIsInNleHBfb2ZfdmVydGV4Iiwidl9pZCIsInZfY29ubmVjdGl2ZSIsImhhc2hfZm9sZF92ZXJ0ZXgiLCJoYXNoX3ZlcnRleCIsImdldExhYmVsIiwidmVydGV4IiwiYXRvbSIsImhhc2gkMSIsInNob3ciLCJ0X29mX3NleHAkMSIsInNleHBfb2ZfdCQxIiwiaGFzaF9mb2xkX3QkMSIsImhhc2gkMiIsInNob3ckMCIsInZlcnRleF9pbmRleCIsImNvbXBhcmUkMyIsImFfMDI3IiwiYl8wMjgiLCJ0X29mX3NleHAkMiIsInNleHBfb2ZfdCQyIiwiaGFzaF9mb2xkX3QkMiIsImZ1bmMkMCIsImhhc2gkMyIsInRfb2Zfc2V4cCQzIiwic2V4cF9vZl90JDMiLCJoYXNoX2ZvbGRfdCQzIiwiaGFzaCQ0Iiwic2hvdyQxIiwiZ3JhcGgiLCJrIiwiZCIsImZyZXNoX2lkIiwic3RhdGUiLCJhZGRfdmVydGljZXNfdG9faGFzaCIsInZlcnRpY2VzIiwiYWRkX3ZlcnRleCIsInJlbW92ZV92ZXJ0ZXhfZWRnZXMiLCJlZGdlcyIsInJlbW92ZV92ZXJ0aWNlc19lZGdlcyIsImFjY3VtIiwicmVtb3ZlX3ZlcnRleCIsIm5ld19ub2RlcyIsIm5ld19lZGdlcyIsIm5ld19lZGdlc19mcm9tIiwiZGlzam9pbnQiLCJzMSIsInMyIiwiZGlmZiIsImNvbXBsZW1lbnRfbWFwIiwic2V0IiwibWFwIiwiZWxlIiwic3ltYm9sJDE3Iiwibm9kZXMiLCJlZGdlc19mcm9tIiwiZmluZF9vcl9lbXB0eSIsInZzZXQiLCJzdWNjZXNzb3JzIiwidG9fYWRkIiwicHJlZGVjZXNzb3JzIiwiY29ubmVjdGVkIiwibmVpZ2hib3VyIiwiZWRnZXNfdG8iLCJzZXQkMCIsIm5laWdoYm91cnMiLCJyZXBsYWNlIiwicmVtb3ZlZF9lZGdlcyIsInJlbW92ZWRfZWRnZXNfZnJvbSIsIm5ld19zdWNjZXNzb3JzIiwibmV3X3ByZWRlY2Vzc29ycyIsIm5ld19lZGdlcyQwIiwibmV3X2VkZ2VzX2Zyb20kMCIsImNvbm5lY3RfdmVydGljZXMiLCJkaXJlY3RlZCIsImVkZ2VzJDAiLCJpbnRlcnNlY3RfbWFwIiwiaW5kdWNlZF9zdWJncmFwaCIsInciLCJnIiwibmV3X2giLCJpc19tb2R1bGUiLCJ2X2Nvbm5lY3RlZCIsImVkZ2VfdHVwbGVfbGlzdCIsImVkZ2VfbWFwIiwidmlfbmVpZ2hib3VycyIsInZpIiwidmoiLCJuZXdfZWRnZV9tYXAiLCJhZGRfb3JfaW5pdCIsInoiLCJyZXZlcnNlIiwibWFwJDEiLCJtYXAkMCIsImVkZ2VfbWFwcyIsImVkZ2VfbGlzdCIsInRvX2dyYXBoIiwidmVydGV4X2xpc3QiLCJtYXgiLCJhY3VtIiwibWF4X2lkIiwidnNldF90b19pc2V0IiwiaXNldF90b192c2V0IiwiaXNldCIsInZtYXBfdG9faW1hcCIsImVtcHR5X21hcCIsImRhdGEiLCJpZF9tYXAiLCJ2ZXJ0ZXhfbmVpZ2hib3VyX3BhaXJzIiwidmokMCIsInN1Y2Nlc3NvcnMkMCIsInRyZWUiLCJ0bCIsInRsJDAiLCJ0bCQxIiwidGwkMiIsInRyZWVfZnJvbV9jb25kZW5zZWQiLCJyb290IiwidHJlZXNfZnJvbV9pZF9saXN0IiwiaWRfbGlzdCIsInRyZWVfZnJvbV9pZCIsImlkIiwidHJlZV9saXN0IiwidHJlZV9saXN0JDAiLCJ0ZW5zb3JfbGlzdHMiLCJpc2V0JDAiLCJ0cmVlX2xpc3QkMSIsInRyZWVfbGlzdCQyIiwicGFyX2xpc3RzIiwiaWxpc3QiLCJ0cmVlX2xpc3QkMyIsInBhcnNlX2JlZm9yZSIsInN1Y2Nlc3NvcnMkMSIsImlkX3R1cGxlc19mcm9tX21hcCIsImlkX25laWdoYm91cnMiLCJuZXdfaW1hcCIsImlkMiIsImlkX2dyYXBoIiwidHJlZV9saXN0JDQiLCJ0cmVlX3RvX2dyYXBoIiwiam9pbl9zZXRzIiwic3ltbWV0cmljIiwidnMxIiwidnMyIiwibGkiLCJsaiIsInRyZWVfdG9fZ3JhcGhfciIsIm5vZGUiLCJuZWwiLCJlbCIsImVsYWNjIiwidnNldGFjYyIsImVkZ2VfYmFzZSIsImVsX3RvX2FkZCIsIm5vZGVzJDAiLCJuZWwkMCIsImVkZ2VzJDEiLCJub2RlcyQxIiwibm1hcCIsImVkZ2VzJDIiLCJpZDEiLCJ0b192ZXJ0ZXgiLCJqc19vYmoiLCJsYWJlbCIsInBvbGFyaXNhdGlvbiIsInRvX25vZGVzIiwianNvbl9saXN0IiwidG9faWRfdHVwbGUiLCJzcmMiLCJkZXN0IiwidG9faWRfbGlzdCIsInRvX2Fzc29jX2xpc3QiLCJlcXVhbF9pbnRfdHVwbGUiLCJ0MjIiLCJ0MjEiLCJ0MTIiLCJ0MTEiLCJ0b19lZGdlX21hcHMiLCJ2ZXJ0ZXhfYXNzb2MiLCJwYXJzZSIsImlkcyIsImZyb21fdmVydGV4IiwicG9sIiwicG9sJDAiLCJsYWJlbCQwIiwiZnJvbV9ub2RlcyIsIm5vZGVfbGlzdCIsImZyb21faWRfdHVwbGUiLCJzb3VyY2UiLCJ0YXJnZXQiLCJmcm9tX2VkZ2VzIiwic2VyaWFsaXplX2dyYXBoIiwiZnJvbV9jb25uZWN0aXZlIiwiY29ubmVjdGl2ZSIsImZyb21faWRfZ3JhcGgiLCJub2Rlc19qc29uIiwibjIiLCJuMSIsImVkZ2VzX2pzb24iLCJzZXJpYWxpemVkX25vZGVzX2FuZF9lZGdlcyIsIm5vZGVfYmFzZSIsImlkX2dyYXBoJDAiLCJuZXdfbm9kZSIsImVkZ2UiLCJzZXJpYWxpemVfdHJlZV9hc19ncmFwaCIsImpzb25fbm9kZXMiLCJqc29uX2VkZ2VzIiwic2VyaWFsaXplX3RyZWUiLCJjb21wYXJlX3N1YnNldCIsInN1YnNldF9vZl9zZXhwIiwic2V4cF9vZl9zdWJzZXQiLCJ0X29mX3NleHAkNCIsInNleHBfb2ZfdCQ0Iiwic21hbGxlc3RfY29uZGVuc2libGUiLCJyZXMkMCIsInJlcyIsIm5ld19yZXMiLCJuZXdfY29ubmVjdGVkIiwid2dpIiwidG9fYWRkJDAiLCJ1cGRhdGVfc3Vic2V0Iiwic3Vic2V0IiwidmpfbmVpZ2hib3VycyIsInZsaXN0IiwidXBkYXRlX3N1YnNldHNldCIsInN1YnNldHNldCIsIm5ld19zdWJzZXQiLCJzdWJzZXRfY29udGFpbnMiLCJ2c2V0JDAiLCJzdWJzZXRfYWRkIiwibGFzdCIsInNoYXJlX21vZHVsZSIsInNpIiwic2oiLCJwaSIsInBqIiwiY2NfYW5kX2lzIiwidmlzaXRlZCIsInZpX3N1Y2Nlc3NvcnMiLCJ2aV9wcmVkZWNlc3NvcnMiLCJqIiwic3Vic2V0JDAiLCJzdWJzZXRfc2V0X3RvX25vZGVzIiwic3MiLCJjb25kZW5zZV9zdWJzZXQiLCJub2RlJDEiLCJuZXdfdmVydGV4IiwiY29uZGVuc2VfcHJpbWUiLCJjb25kZW5zaWJsZV9zdWJncmFwaHMiLCJ2X3RvX2VkZ2VfaW5kZXgiLCJtaW5fY29uX2VkZ2VzIiwiZGVmaW5lZF9vbl92Iiwic21hbGxlc3RfY2FyZCIsIm1pbl9jYXJkIiwiYSIsImNvbnNpZGVyZWQiLCJoaSIsImFjdW0yIiwiaGoiLCJjb25kZW5zZV9zZXQiLCJzdWJzZXRzIiwiY29uZGVuc2VfY2xpcXVlcyIsImdyYXBoJDAiLCJjbGlxdWVzX2FuZF9pbmQiLCJncmFwaCQxIiwicmV0dXJuJDAiLCJwcm9jZXNzIiwiY29uZGVuc2VkX2dyYXBoIiwibWluX2NvbmQiLCJzdWJncmFwaCIsInByaW1lX2xpc3QiLCJpc1ByaW1lIiwiY2xpcXVlc19hbmRfaW4iXSwic291cmNlcyI6WyIvbW50L2QvUHJvamVjdHMvbW9kdWxhcl9kZWNvbXBvc2l0aW9uL19idWlsZC9kZWZhdWx0L2xpYi9ncmFwaC5tbCIsIi9tbnQvZC9Qcm9qZWN0cy9tb2R1bGFyX2RlY29tcG9zaXRpb24vX2J1aWxkL2RlZmF1bHQvbGliL2NvbmRlbnNlLm1sIiwiL21udC9kL1Byb2plY3RzL21vZHVsYXJfZGVjb21wb3NpdGlvbi9fYnVpbGQvZGVmYXVsdC9saWIvdXRpbC5tbCIsIi9tbnQvZC9Qcm9qZWN0cy9tb2R1bGFyX2RlY29tcG9zaXRpb24vX2J1aWxkL2RlZmF1bHQvbGliL3RyZWUubWwiLCIvbW50L2QvUHJvamVjdHMvbW9kdWxhcl9kZWNvbXBvc2l0aW9uL19idWlsZC9kZWZhdWx0L2xpYi9wYXJzZWdyYXBoLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRUFBO0tBZ0JBQztLQVFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbkJBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFBSUMsS0FBS0MsRUFBRUMsRUFBRUMsR0FBSSxrQkFBUkYsRUFBSUUsRUFBRkQsRUFBVztJQUF0QixTQUVRRSxPQUFPQyxHQUFHQyxHQUFHQztNLElBQUFDO01BQ25CO1dBRG1CQTtVQUdMLElBQVpDLEVBSGlCRDtVQUdMLGNBQVpDLEVBSFdKLElBR2E7VUFDWixjQURaSSxFQUhjSCxJQUlVO1VBRFosSUFFRixLQUxPRTs7UUFFWCxnQkFHa0I7SUFQNUIsU0FTSUcsTUFDY0MsS0FBS0M7Z0JBQUVFO01BQ3JCO1dBRG1CRDtjQUdaRSxFQUhZRixPQUdqQkcsRUFIaUJIO1VBSWQsY0FESEcsRUFIWUwsTUFJSyxPQUpFRztVQUlLLFFBSkxBLFVBQUZELElBR1pFLEVBSGNEOztRQUViLGdCQUlNO0lBaEJs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cUIrQztTQUYvRCxpQ0FURTZPLFdBUkZIO1NBRlVMO2lCQXVCdUI7SUF4VHZDLFNBMFRJUyxRQUFRbFA7TUFDVyxJQUFqQm1QLGVBQWlCLFVBRFhuUDtNQUVQLDBCQURDbVA7UUFFYSxJQUFYSixTQUFXLHNCQUhQL087UUFJTCwwQkFEQytPLFVBRUY7UUFGYSxRQUlWLHVCQUpEQTtRQUlDO1VBQWtFO3NDQVAvRC9PO1dBT21DLDRCQUp2QytPO1dBSTRCOzJDQUM1QjtRQUVBO01BRUosUUFBSzs7Ozs7Ozs7O09BL1RUNUQ7Ozs7O09Bc0JJSztPQWtCQU87T0FtQ0FJO09BS0FHO09BT0FFO09BWUFFO09BVUFLO09Bc0NBTTtPQVlBRTtPQW1CQUc7T0FZQUM7T0FxRUFXO09BT0lFO09BT0pJO09BU0lDO09BeUJKSzs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4gQmFzZVxyXG5cclxudHlwZSBhdG9tID0ge1xyXG4gICAgbGFiZWwgOiBzdHJpbmc7XHJcbiAgICBwb2wgOiBib29sO1xyXG4gIH1cclxuICBbQEBkZXJpdmluZyBjb21wYXJlLCBzZXhwLCBoYXNoXVxyXG5cclxubW9kdWxlIElTZXQgPSBzdHJ1Y3RcclxuICB0eXBlIHQgPSBCYXNlLlNldC5NKEludCkudCBbQEBkZXJpdmluZyBjb21wYXJlLCBzZXhwLCBoYXNoXVxyXG5lbmRcclxuaW5jbHVkZSBDb21wYXJhYmxlLk1ha2UoSVNldClcclxuXHJcbm1vZHVsZSBJTWFwID0gc3RydWN0XHJcbiAgdHlwZSB0ID0gSVNldC50IEJhc2UuTWFwLk0oSW50KS50IFtAQGRlcml2aW5nIGNvbXBhcmUsIHNleHAsIGhhc2hdXHJcbmVuZFxyXG5pbmNsdWRlIENvbXBhcmFibGUuTWFrZShJTWFwKVxyXG5cclxudHlwZSBub2RlID1cclxuICB8IEF0b20gb2YgYXRvbVxyXG4gIHwgVGVuc29yIG9mIElTZXQudFxyXG4gIHwgUGFyIG9mIElTZXQudFxyXG4gIHwgQmVmb3JlIG9mIGludCBsaXN0XHJcbiAgfCBQcmltZSBvZiBJTWFwLnRcclxuICBbQEBkZXJpdmluZyBjb21wYXJlLCBzZXhwLCBoYXNoXVxyXG5cclxudHlwZSB2ZXJ0ZXggPSB7XHJcbiAgICBjb25uZWN0aXZlIDogbm9kZTtcclxuICAgIGlkIDogaW50O1xyXG4gIH1cclxuICBbQEBkZXJpdmluZyBjb21wYXJlLCBzZXhwLCBoYXNoXVxyXG5cclxubGV0IGdldExhYmVsIHZlcnRleCA9IFxyXG4gIG1hdGNoIHZlcnRleC5jb25uZWN0aXZlIHdpdGhcclxuICB8IEF0b20gYXRvbSAtPiBhdG9tLmxhYmVsXHJcbiAgfCBUZW5zb3IgXyAtPiBcIuKKl1wiXHJcbiAgfCBQYXIgXyAtPiBcIuKFi1wiXHJcbiAgfCBCZWZvcmUgXyAtPiBcIuKXg1wiXHJcbiAgfCBQcmltZSBfIC0+IFwicHJpbWVcIlxyXG5cclxubW9kdWxlIFZlcnRleCA9IHN0cnVjdFxyXG4gIG1vZHVsZSBUID0gc3RydWN0XHJcbiAgICB0eXBlIHQgPSB2ZXJ0ZXggW0BAZGVyaXZpbmcgY29tcGFyZSwgc2V4cCwgaGFzaF1cclxuICAgIGxldCBzaG93IHQgPSBTdGRpby5wcmludGYgXCIlcyAlZFwiIChnZXRMYWJlbCB0KSB0LmlkXHJcbiAgZW5kXHJcbiAgaW5jbHVkZSBUXHJcbiAgaW5jbHVkZSBDb21wYXJhYmxlLk1ha2UoVClcclxuZW5kXHJcblxyXG5sZXQgdmVydGV4X2luZGV4IGVsZW0gbCA9XHJcbiAgbGV0IHJlYyBpbmRleF9yIGVsZW0gbCBpID1cclxuICAgIG1hdGNoIGwgd2l0aFxyXG4gICAgfCBbXSAtPiByYWlzZV9zIFslbWVzc2FnZSBcImVycm9yXCIgXCJWZXJ0ZXggbm90IGZvdW5kIHdoZW4gbG9va2luZyBmb3IgaW5kZXhcIl1cclxuICAgIHwgaCA6OiB0IC0+XHJcbiAgICAgIGlmIFZlcnRleC5lcXVhbCBoIGVsZW0gdGhlbiBpIGVsc2UgaW5kZXhfciBlbGVtIHQgKGkrMSlcclxuICBpblxyXG4gIGluZGV4X3IgZWxlbSBsIDBcclxuXHJcbm1vZHVsZSBWU2V0ID0gc3RydWN0XHJcbiAgbW9kdWxlIFQgPSBzdHJ1Y3RcclxuICAgIHR5cGUgdCA9IEJhc2UuU2V0Lk0oVmVydGV4KS50IFtAQGRlcml2aW5nIGNvbXBhcmUsIHNleHAsIGhhc2hdXHJcbiAgZW5kXHJcbiAgaW5jbHVkZSBUXHJcbiAgaW5jbHVkZSBDb21wYXJhYmxlLk1ha2UoVClcclxuZW5kXHJcblxyXG5tb2R1bGUgVk1hcCA9IHN0cnVjdFxyXG4gIHR5cGUgdCA9IFZTZXQudCBCYXNlLk1hcC5NKFZlcnRleCkudFxyXG5lbmRcclxuXHJcbnR5cGUgZ3JhcGggPSB7XHJcbiAgICBub2RlcyA6IFZTZXQudDtcclxuICAgIGVkZ2VzIDogVk1hcC50O1xyXG4gICAgZWRnZXNfZnJvbSA6IFZNYXAudDtcclxuICB9XHJcblxyXG5sZXQgc2hvdyBncmFwaCA9XHJcbiAgbGV0ICgpID0gU3RkaW8ucHJpbnRmIFwiTm9kZXM6IFwiOyBTZXQuaXRlciBncmFwaC5ub2RlcyB+ZjooZnVuIHYgLT4gU3RkaW8ucHJpbnRmIFwiJXMgXCIgKGdldExhYmVsIHYpKTsgU3RkaW8ucHJpbnRmIFwiXFxuXCI7IGluXHJcbiAgU3RkaW8ucHJpbnRmIFwiRWRnZXM6IFxcblwiOyBNYXAuaXRlcmkgZ3JhcGguZWRnZXMgfmY6KGZ1biB+a2V5OmsgfmRhdGE6ZCAtPiBcclxuICAgIFN0ZGlvLnByaW50ZiBcIlxcdCVzOiBcIiAoZ2V0TGFiZWwgayk7XHJcbiAgICBTZXQuaXRlciBkIH5mOihmdW4gdiAtPiBTdGRpby5wcmludGYgXCIlcywgXCIgKGdldExhYmVsIHYpKTtcclxuICAgIFN0ZGlvLnByaW50ZiBcIlxcblwiKVxyXG5cclxudHlwZSBzdGF0ZSA9IHtcclxuICBtdXRhYmxlIHRvdGFsX3ZlcnRpY2VzIDogaW50O1xyXG4gIGlkX21hcCA6IChpbnQsIFZlcnRleC50KSBIYXNodGJsLnQ7XHJcbn1cclxuXHJcbmxldCBmcmVzaF9pZCBzdGF0ZSA9IFxyXG4gIHN0YXRlLnRvdGFsX3ZlcnRpY2VzIDwtIHN0YXRlLnRvdGFsX3ZlcnRpY2VzICsgMTtcclxuICBzdGF0ZS50b3RhbF92ZXJ0aWNlc1xyXG5cclxubGV0IGFkZF92ZXJ0aWNlc190b19oYXNoIHZlcnRpY2VzIHN0YXRlID1cclxuICBTZXQuaXRlciB2ZXJ0aWNlc1xyXG4gIH5mOihmdW4gdiAtPiBIYXNodGJsLmFkZF9leG4gc3RhdGUuaWRfbWFwIH5rZXk6di5pZCB+ZGF0YTp2KVxyXG5cclxuKCoqIFthZGRfdmVydGV4IHZlcnRleCBncmFwaF06IHJlbW92ZSBbdmVydGV4XSBmcm9tIFtncmFwaF0gaW4gYm90aCB0aGUgbm9kZXMgXHJcbiAgICBhbmQgZWRnZXMgKilcclxubGV0IGFkZF92ZXJ0ZXggdmVydGV4IGdyYXBoID1cclxuICAgIHtub2RlcyA9IFNldC5hZGQgZ3JhcGgubm9kZXMgdmVydGV4OyBlZGdlcyA9IGdyYXBoLmVkZ2VzOyBlZGdlc19mcm9tID0gZ3JhcGguZWRnZXNfZnJvbX1cclxuXHJcbigqKiBbcmVtb3ZlX3ZlcnRleCB2ZXJ0ZXggZWRnZXNdOiBnaXZlbiBhIG1hcHBpbmcgW2VkZ2VzXSwgcmVtb3ZlIFt2ZXJ0ZXhdIGZyb20gXHJcbiAgICBpdHMga2V5cyBhbmQgdmFsdWVzICAqKVxyXG5sZXQgcmVtb3ZlX3ZlcnRleF9lZGdlcyB2IGVkZ2VzID1cclxuICBNYXAucmVtb3ZlIGVkZ2VzIHYgfD4gTWFwLm1hcCB+ZjooVXRpbC5mbGlwIFNldC5yZW1vdmUgdilcclxuXHJcbmxldCByZW1vdmVfdmVydGljZXNfZWRnZXMgdmVydGljZXMgZWRnZXMgPSBcclxuICBTZXQuZm9sZCB2ZXJ0aWNlcyB+aW5pdDplZGdlcyB+ZjooZnVuIGFjY3VtIHYgLT4gcmVtb3ZlX3ZlcnRleF9lZGdlcyB2IGFjY3VtKVxyXG5cclxubGV0IHJlbW92ZV92ZXJ0ZXggdiBncmFwaCA9XHJcbiAgbGV0IG5ld19ub2RlcyA9IFNldC5yZW1vdmUgZ3JhcGgubm9kZXMgdiBpblxyXG4gIGxldCBuZXdfZWRnZXMgPSByZW1vdmVfdmVydGV4X2VkZ2VzIHYgZ3JhcGguZWRnZXMgaW4gXHJcbiAgbGV0IG5ld19lZGdlc19mcm9tID0gcmVtb3ZlX3ZlcnRleF9lZGdlcyB2IGdyYXBoLmVkZ2VzX2Zyb20gaW5cclxuICB7bm9kZXMgPSBuZXdfbm9kZXM7IGVkZ2VzID0gbmV3X2VkZ2VzOyBlZGdlc19mcm9tID0gbmV3X2VkZ2VzX2Zyb219XHJcblxyXG5sZXQgZGlzam9pbnQgczEgczIgPVxyXG4gIGxldCBkaWZmID0gU2V0LmRpZmYgczEgczIgaW4gKCogTyhsMSArIGwyKSAqKVxyXG4gIFNldC5lcXVhbCBzMSBkaWZmICgqIE8obDEgKyBsMikgKilcclxuXHJcbmxldCBjb21wbGVtZW50X21hcCBzZXQgbWFwID1cclxuICBNYXAuZmlsdGVyX2tleXMgbWFwIH5mOihmdW4gZWxlIC0+IFNldC5tZW0gc2V0IGVsZSB8PiBub3QpXHJcbiAgfD4gTWFwLm1hcCB+ZjooVXRpbC5mbGlwIFNldC5kaWZmIHNldClcclxuXHJcbigqKiBbPH4+IGdyYXBoIHZlcnRpY2VzXTogc3ViZ3JhcGggb2YgW2dyYXBoXSB0aGF0IGNvbnRhaW5zIGFsbCB2ZXJ0aWNlcyBub3QgaW4gXHJcbiAgICBbdmVydGljZXNdICopXHJcbmxldCAoPH4+KSBncmFwaCB2ZXJ0aWNlcyA9XHJcbiAgbGV0IG5vZGVzID0gU2V0LmRpZmYgZ3JhcGgubm9kZXMgdmVydGljZXMgaW5cclxuICBsZXQgZWRnZXMgPSBjb21wbGVtZW50X21hcCB2ZXJ0aWNlcyBncmFwaC5lZGdlcyBpblxyXG4gIGxldCBlZGdlc19mcm9tID0gY29tcGxlbWVudF9tYXAgdmVydGljZXMgZ3JhcGguZWRnZXNfZnJvbSBpblxyXG4gIHtub2RlcyA9IG5vZGVzOyBlZGdlcyA9IGVkZ2VzOyBlZGdlc19mcm9tID0gZWRnZXNfZnJvbX1cclxuXHJcbmxldCBmaW5kX29yX2VtcHR5IG1hcCB2ID1cclxuICBtYXRjaCBCYXNlLk1hcC5maW5kIG1hcCB2IHdpdGggXHJcbiAgfCBOb25lIC0+IEJhc2UuU2V0LmVtcHR5IChtb2R1bGUgVmVydGV4KVxyXG4gIHwgU29tZSB2c2V0IC0+IHZzZXRcclxuXHJcbigqKiBbc3VjY2Vzc29ycyBncmFwaCB2ZXJ0aWNlc106IHNldCBvZiB2ZXJ0aWNlcyB0byB3aGljaCBbdmVydGljZXNdIGlzIFxyXG4gICAgY29ubmVjdGVkICopXHJcbmxldCBzdWNjZXNzb3JzIGdyYXBoIHZlcnRpY2VzID1cclxuICAgIFNldC5mb2xkIHZlcnRpY2VzXHJcbiAgICAgIH5pbml0OihTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpKVxyXG4gICAgICB+ZjooZnVuIGFjY3VtIHYgLT4gXHJcbiAgICAgICAgbGV0IHRvX2FkZCA9IFxyXG4gICAgICAgICAgbWF0Y2ggTWFwLmZpbmQgZ3JhcGguZWRnZXMgdiB3aXRoXHJcbiAgICAgICAgICB8IE5vbmUgLT4gU2V0LmVtcHR5IChtb2R1bGUgVmVydGV4KVxyXG4gICAgICAgICAgfCBTb21lIHZzZXQgLT4gdnNldFxyXG4gICAgICAgIGluXHJcbiAgICAgICAgU2V0LnVuaW9uIGFjY3VtIHRvX2FkZClcclxuICAgIHw+IFV0aWwuZmxpcCBTZXQuZGlmZiB2ZXJ0aWNlc1xyXG5cclxubGV0IHByZWRlY2Vzc29ycyBncmFwaCB2ZXJ0aWNlcyA9IFxyXG4gICAgU2V0LmZvbGQgdmVydGljZXNcclxuICAgICAgfmluaXQ6KFNldC5lbXB0eSAobW9kdWxlIFZlcnRleCkpXHJcbiAgICAgIH5mOihmdW4gYWNjdW0gdiAtPiBcclxuICAgICAgICBsZXQgdG9fYWRkID0gXHJcbiAgICAgICAgICBtYXRjaCBNYXAuZmluZCBncmFwaC5lZGdlc19mcm9tIHYgd2l0aFxyXG4gICAgICAgICAgfCBOb25lIC0+IFNldC5lbXB0eSAobW9kdWxlIFZlcnRleClcclxuICAgICAgICAgIHwgU29tZSB2c2V0IC0+IHZzZXRcclxuICAgICAgICBpblxyXG4gICAgICAgIFNldC51bmlvbiBhY2N1bSB0b19hZGQpXHJcbiAgICB8PiBVdGlsLmZsaXAgU2V0LmRpZmYgdmVydGljZXNcclxuXHJcbmxldCBjb25uZWN0ZWQgZ3JhcGggdmVydGljZXMgPVxyXG4gIFNldC51bmlvbiAoc3VjY2Vzc29ycyBncmFwaCB2ZXJ0aWNlcykgKHByZWRlY2Vzc29ycyBncmFwaCB2ZXJ0aWNlcylcclxuXHJcbmxldCBuZWlnaGJvdXIgZ3JhcGggdmVydGV4ID1cclxuICBsZXQgZWRnZXNfdG8gPSBtYXRjaCBNYXAuZmluZCBncmFwaC5lZGdlcyB2ZXJ0ZXggd2l0aFxyXG4gICAgfCBOb25lIC0+IFNldC5lbXB0eSAobW9kdWxlIFZlcnRleClcclxuICAgIHwgU29tZSBzZXQgLT4gc2V0XHJcbiAgaW5cclxuICBsZXQgZWRnZXNfZnJvbSA9IG1hdGNoIE1hcC5maW5kIGdyYXBoLmVkZ2VzX2Zyb20gdmVydGV4IHdpdGhcclxuICAgIHwgTm9uZSAtPiBTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpXHJcbiAgICB8IFNvbWUgc2V0IC0+IHNldFxyXG4gIGluXHJcbiAgU2V0LnVuaW9uIGVkZ2VzX3RvIGVkZ2VzX2Zyb21cclxuXHJcbmxldCBuZWlnaGJvdXJzIGdyYXBoIHZlcnRpY2VzID1cclxuICBTZXQudW5pb24gKHN1Y2Nlc3NvcnMgZ3JhcGggdmVydGljZXMpIChwcmVkZWNlc3NvcnMgZ3JhcGggdmVydGljZXMpXHJcblxyXG4oKiogW3JlcGxhY2UgZ3JhcGggdmVydGljZXMgdmVydGV4XTogcmVwbGFjZSBhbGwgdmVydGljZXMgaW4gW3ZlcnRpY2VzXSBieSBcclxuICAgIFt2ZXJ0ZXhdIGluIFtncmFwaF0gKilcclxubGV0IHJlcGxhY2UgZ3JhcGggaCB2ZXJ0ZXggc3RhdGUgPVxyXG4gIGxldCAoKSA9IGFzc2VydChTZXQuaXNfc3Vic2V0IGggfm9mXzpncmFwaC5ub2RlcykgaW5cclxuICBsZXQgKCkgPSBhZGRfdmVydGljZXNfdG9faGFzaCBoIHN0YXRlIGluXHJcbiAgKCogbGV0ICgpID0gU3RkaW8ucHJpbnRmIFwiUmVwbGFjaW5nIHsgXCI7IFNldC5pdGVyIGggfmY6KGZ1biB2IC0+IFZlcnRleC5zaG93IHY7IFN0ZGlvLnByaW50ZiBcIiwgXCIpOyBTdGRpby5wcmludGYgXCJ9IHdpdGg6XFxuXCI7XHJcbiAgICBWZXJ0ZXguc2hvdyB2ZXJ0ZXg7IFN0ZGlvLnByaW50ZiBcIlxcblwiXHJcbiAgaW4gKilcclxuICBsZXQgbmV3X25vZGVzID0gU2V0LmRpZmYgZ3JhcGgubm9kZXMgaCB8PiBVdGlsLmZsaXAgU2V0LmFkZCB2ZXJ0ZXggaW5cclxuICBsZXQgcmVtb3ZlZF9lZGdlcyA9IHJlbW92ZV92ZXJ0aWNlc19lZGdlcyBoIGdyYXBoLmVkZ2VzIGluXHJcbiAgbGV0IHJlbW92ZWRfZWRnZXNfZnJvbSA9IHJlbW92ZV92ZXJ0aWNlc19lZGdlcyBoIGdyYXBoLmVkZ2VzX2Zyb20gaW5cclxuXHJcbiAgbGV0IG5ld19zdWNjZXNzb3JzID0gc3VjY2Vzc29ycyBncmFwaCBoIHw+IFV0aWwuZmxpcCBTZXQuZGlmZiBoIGluXHJcbiAgbGV0IG5ld19wcmVkZWNlc3NvcnMgPSBwcmVkZWNlc3NvcnMgZ3JhcGggaCB8PiBVdGlsLmZsaXAgU2V0LmRpZmYgaCBpblxyXG4gIGxldCBuZXdfZWRnZXMgPSBNYXAudXBkYXRlIHJlbW92ZWRfZWRnZXMgdmVydGV4IH5mOihmdW5jdGlvbiBcclxuICAgIHwgTm9uZSAtPiBuZXdfc3VjY2Vzc29yc1xyXG4gICAgfCBTb21lIHZzZXQgLT4gU2V0LnVuaW9uIHZzZXQgbmV3X3N1Y2Nlc3NvcnMpXHJcbiAgaW5cclxuICBsZXQgbmV3X2VkZ2VzID0gU2V0LmZvbGQgbmV3X3ByZWRlY2Vzc29ycyB+aW5pdDpuZXdfZWRnZXMgfmY6KGZ1biBhY2N1bSB2IC0+XHJcbiAgICBNYXAudXBkYXRlIGFjY3VtIHYgfmY6KGZ1bmN0aW9uXHJcbiAgICAgIHwgTm9uZSAtPiBTZXQuc2luZ2xldG9uIChtb2R1bGUgVmVydGV4KSB2ZXJ0ZXhcclxuICAgICAgfCBTb21lIHZzZXQgLT4gU2V0LmFkZCB2c2V0IHZlcnRleCkpXHJcbiAgaW5cclxuICBsZXQgbmV3X2VkZ2VzX2Zyb20gPSBNYXAudXBkYXRlIHJlbW92ZWRfZWRnZXNfZnJvbSB2ZXJ0ZXggfmY6KGZ1bmN0aW9uXHJcbiAgICB8IE5vbmUgLT4gbmV3X3ByZWRlY2Vzc29yc1xyXG4gICAgfCBTb21lIHZzZXQgLT4gU2V0LnVuaW9uIHZzZXQgbmV3X3ByZWRlY2Vzc29ycylcclxuICBpblxyXG4gIGxldCBuZXdfZWRnZXNfZnJvbSA9IFNldC5mb2xkIG5ld19zdWNjZXNzb3JzIH5pbml0Om5ld19lZGdlc19mcm9tIH5mOihmdW4gYWNjdW0gdiAtPlxyXG4gICAgTWFwLnVwZGF0ZSBhY2N1bSB2IH5mOihmdW5jdGlvblxyXG4gICAgICB8IE5vbmUgLT4gU2V0LnNpbmdsZXRvbiAobW9kdWxlIFZlcnRleCkgdmVydGV4XHJcbiAgICAgIHwgU29tZSB2c2V0IC0+IFNldC5hZGQgdnNldCB2ZXJ0ZXgpKVxyXG4gIGluIFxyXG4gIHtub2RlcyA9IG5ld19ub2RlczsgZWRnZXMgPSBuZXdfZWRnZXM7IGVkZ2VzX2Zyb20gPSBuZXdfZWRnZXNfZnJvbX1cclxuXHJcbigqKiBbY29ubmVjdF92ZXJ0aWNlcyB2ZXJ0aWNlcyB2ZXJ0ZXggZ3JhcGhdOiBmb3IgYSBnaXZlbiBbZ3JhcGhdLFxyXG4gICAgYWRkIGVkZ2VzIGNvbm5lY3RpbmcgZXZlcnkgZWxlbWVudCBvZiBbdmVydGljZXNdIHRvIFt2ZXJ0ZXhdICopXHJcbmxldCBjb25uZWN0X3ZlcnRpY2VzID9kaXJlY3RlZCB2ZXJ0aWNlcyB2ZXJ0ZXggZ3JhcGggPVxyXG4gIGxldCAoKSA9IGFzc2VydChTZXQubWVtIGdyYXBoLm5vZGVzIHZlcnRleCkgaW5cclxuICBsZXQgKCkgPSBhc3NlcnQoU2V0LmZvcl9hbGwgdmVydGljZXMgfmY6KFNldC5tZW0gZ3JhcGgubm9kZXMpKSBpblxyXG4gIGxldCBlZGdlcyA9IFNldC5mb2xkIHZlcnRpY2VzIH5pbml0OmdyYXBoLmVkZ2VzIH5mOihmdW4gYWNjdW0gdiAtPlxyXG4gICAgTWFwLnVwZGF0ZSBhY2N1bSB2IH5mOihmdW5jdGlvblxyXG4gICAgfCBOb25lIC0+IFNldC5zaW5nbGV0b24gKG1vZHVsZSBWZXJ0ZXgpIHZlcnRleFxyXG4gICAgfCBTb21lIHZzZXQgLT4gU2V0LmFkZCB2c2V0IHZlcnRleCkpXHJcbiAgaW5cclxuICBpZiBVdGlsLnJlc29sdmUgZGlyZWN0ZWQgdGhlblxyXG4gICAgbGV0IGVkZ2VzX2Zyb20gPSBNYXAudXBkYXRlIGdyYXBoLmVkZ2VzX2Zyb20gdmVydGV4IH5mOihmdW5jdGlvbiB8IE5vbmUgLT4gdmVydGljZXMgfCBTb21lIHZzZXQgLT4gU2V0LnVuaW9uIHZzZXQgdmVydGljZXMpIGluXHJcbiAgICB7bm9kZXM9Z3JhcGgubm9kZXM7IGVkZ2VzPWVkZ2VzOyBlZGdlc19mcm9tPWVkZ2VzX2Zyb219XHJcbiAgZWxzZVxyXG4gICAgbGV0IGVkZ2VzID0gTWFwLnVwZGF0ZSBlZGdlcyB2ZXJ0ZXggfmY6KGZ1bmN0aW9uIHwgTm9uZSAtPiB2ZXJ0aWNlcyB8IFNvbWUgdnNldCAtPiAoU2V0LnVuaW9uIHZzZXQgdmVydGljZXMpKSBpblxyXG4gICAge25vZGVzPWdyYXBoLm5vZGVzOyBlZGdlcz1lZGdlczsgZWRnZXNfZnJvbT1lZGdlc31cclxuICAgICAgICBcclxubGV0IGludGVyc2VjdF9tYXAgc2V0IG1hcCA9XHJcbiAgTWFwLmZpbHRlcl9rZXlzIG1hcCB+ZjooU2V0Lm1lbSBzZXQpXHJcbiAgfD4gTWFwLm1hcCB+ZjooVXRpbC5mbGlwIFNldC5pbnRlciBzZXQpXHJcblxyXG4oKiogW2luZHVjZWRfc3ViZ3JhcGggZ3JhcGggdmVydGljZXNdOiBzdWJncmFwaCBvZiBbZ3JhcGhdIHRoYXQgY29udGFpbnMgb25seSBcclxuICAgIHRoZSB2ZXJ0aWNlcyBpbiBbdmVydGljZXNdICAqKVxyXG5sZXQgaW5kdWNlZF9zdWJncmFwaCBncmFwaCB2ZXJ0aWNlcyA9XHJcbiAgbGV0IGVkZ2VzID0gaW50ZXJzZWN0X21hcCB2ZXJ0aWNlcyBncmFwaC5lZGdlcyBpblxyXG4gIGxldCBlZGdlc19mcm9tID0gaW50ZXJzZWN0X21hcCB2ZXJ0aWNlcyBncmFwaC5lZGdlc19mcm9tIGluXHJcbiAge25vZGVzID0gdmVydGljZXM7IGVkZ2VzID0gZWRnZXM7IGVkZ2VzX2Zyb20gPSBlZGdlc19mcm9tfVxyXG5cclxuKCoqIFt3IEcgSCBoXTogc2V0IG9mIHZlcnRpY2VzIG9mIFtHIDx+PiBIXSB0byB3aGljaCBbaF0gaXMgY29ubmVjdGVkICopXHJcbmxldCB3IGcgaCB2ID1cclxuICBsZXQgbmV3X2ggPSBTZXQucmVtb3ZlIGggdiBpblxyXG4gIG1hdGNoIE1hcC5maW5kIChnIDx+PiBuZXdfaCkuZWRnZXMgdiB3aXRoXHJcbiAgfCBOb25lIC0+IFNldC5lbXB0eSAobW9kdWxlIFZlcnRleClcclxuICB8IFNvbWUgdnNldCAtPiB2c2V0XHJcbiAgXHJcbigqKiBbaXNfbW9kdWxlIEcgSF06IGNoZWNrcyBpZiBbSF0gaXMgYSBtb2R1bGUgb2YgW0ddICopICBcclxubGV0IGlzX21vZHVsZSBnIGggPVxyXG4gIGxldCBjb25uZWN0ZWQgPSBcclxuICAgIG1hdGNoIFNldC5jaG9vc2UgaCB3aXRoXHJcbiAgICB8IE5vbmUgLT4gU2V0LmVtcHR5IChtb2R1bGUgVmVydGV4KVxyXG4gICAgfCBTb21lIHYgLT4gXHJcbiAgICB3IGcgaCB2XHJcbiAgaW5cclxuICBTZXQuZm9yX2FsbCBoIFxyXG4gICAgfmY6KGZ1biB2IC0+IFxyXG4gICAgICBsZXQgdl9jb25uZWN0ZWQgPSB3IGcgaCB2IGluXHJcbiAgICAgIFNldC5lcXVhbCBjb25uZWN0ZWQgdl9jb25uZWN0ZWQpXHJcblxyXG4oKiogW2VkZ2VfdHVwbGVfbGlzdCA/ZGlyZWN0ZWQgZWRnZXNdOiBnaXZlbiBhIG1hcHBpbmcgW2VkZ2VzXSxcclxuICAgIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgbGlzdCBvZiBlZGdlcyAgKilcclxubGV0IHJlYyBlZGdlX3R1cGxlX2xpc3QgP2RpcmVjdGVkIGVkZ2VfbWFwID1cclxuICBpZiBNYXAuaXNfZW1wdHkgZWRnZV9tYXAgdGhlblxyXG4gICAgW11cclxuICBlbHNlXHJcbiAgICBsZXQgdmksIHZpX25laWdoYm91cnMgPSBNYXAubWluX2VsdF9leG4gZWRnZV9tYXAgaW5cclxuICAgIGxldCBuZXdfZWRnZXMgPSBTZXQuZm9sZCB2aV9uZWlnaGJvdXJzXHJcbiAgICAgIH5pbml0OltdXHJcbiAgICAgIH5mOihmdW4gYWNjdW0gdmogLT4gKHZpLCB2aikgOjogYWNjdW0pIFxyXG4gICAgaW5cclxuICAgIGxldCBuZXdfZWRnZV9tYXAgPSBpZiBVdGlsLnJlc29sdmUgZGlyZWN0ZWQgdGhlbiBcclxuICAgICAgICBNYXAucmVtb3ZlIGVkZ2VfbWFwIHZpXHJcbiAgICAgIGVsc2UgXHJcbiAgICAgICAgcmVtb3ZlX3ZlcnRleF9lZGdlcyB2aSBlZGdlX21hcFxyXG4gICAgaW5cclxuICAgIG5ld19lZGdlcyBAIGVkZ2VfdHVwbGVfbGlzdCA/ZGlyZWN0ZWQ6ZGlyZWN0ZWQgbmV3X2VkZ2VfbWFwXHJcblxyXG5sZXQgYWRkX29yX2luaXQgdiB5ID0gXHJcbiAgbWF0Y2ggdiB3aXRoXHJcbiAgfCBOb25lIC0+IFNvbWUgKFNldC5zaW5nbGV0b24gKG1vZHVsZSBWZXJ0ZXgpIHkpXHJcbiAgfCBTb21lIHogLT4gU29tZSAoU2V0LmFkZCB6IHkpXHJcblxyXG4oKiogW2VkZ2VfbWFwIH5yZXZlcnNlIGVkZ2VfdHVwbGVfbGlzdF06IGdpdmVuIGEgbGlzdCBvZiBlZGdlcyBbZWRnZV90dXBsZV9saXN0XSwgXHJcbiAgICByZXR1cm4gYSBjb3JyZXNwb25kaW5nIG1hcHBpbmcsIGlmIFtyZXZlcnNlXSB0aGVuIHRoZSBtYXBwaW5nIGlzIGZyb20gdGFyZ2V0cyB0byBzb3VyY2VzICopXHJcbmxldCBlZGdlX21hcCB+cmV2ZXJzZSBlZGdlX3R1cGxlX2xpc3QgPVxyXG4gIGxldCByZWMgZWRnZV9saXN0X3RvX21hcCBlZGdlcyBtYXAgPSBcclxuICAgIG1hdGNoIGVkZ2VzIHdpdGhcclxuICAgIHwgW10gLT4gbWFwXHJcbiAgICB8ICh4LCB5KSA6OiB0IC0+IFxyXG4gICAgICBsZXQgbmV3X21hcCA9XHJcbiAgICAgICAgaWYgcmV2ZXJzZSB0aGVuXHJcbiAgICAgICAgICBNYXAuY2hhbmdlIG1hcCB5IH5mOihmdW4gdiAtPiBhZGRfb3JfaW5pdCB2IHgpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgTWFwLmNoYW5nZSBtYXAgeCB+ZjooZnVuIHYgLT4gYWRkX29yX2luaXQgdiB5KSBcclxuICAgICAgaW5cclxuICAgICAgZWRnZV9saXN0X3RvX21hcCB0IG5ld19tYXBcclxuICBpblxyXG4gIGVkZ2VfbGlzdF90b19tYXAgZWRnZV90dXBsZV9saXN0IChNYXAuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpKVxyXG5cclxubGV0IGVkZ2VfbWFwcyA/ZGlyZWN0ZWQgZWRnZV9saXN0ID1cclxuICBsZXQgZWRnZXMgPSBcclxuICAgIGlmIFV0aWwucmVzb2x2ZSBkaXJlY3RlZCB0aGVuXHJcbiAgICAgIGVkZ2VfbWFwIH5yZXZlcnNlOmZhbHNlIGVkZ2VfbGlzdFxyXG4gICAgZWxzZVxyXG4gICAgICBNYXAubWVyZ2Vfc2tld2VkIChlZGdlX21hcCB+cmV2ZXJzZTpmYWxzZSBlZGdlX2xpc3QpIChlZGdlX21hcCB+cmV2ZXJzZTp0cnVlIGVkZ2VfbGlzdClcclxuICAgICAgICB+Y29tYmluZTooZnVuIH5rZXk6XyB2MSB2MiAtPiBTZXQudW5pb24gdjEgdjIpXHJcbiAgaW5cclxuICBsZXQgZWRnZXNfZnJvbSA9IFxyXG4gICAgaWYgVXRpbC5yZXNvbHZlIGRpcmVjdGVkIHRoZW4gZWRnZV9tYXAgfnJldmVyc2U6dHJ1ZSBlZGdlX2xpc3QgZWxzZSBlZGdlc1xyXG4gIGluXHJcbiAgZWRnZXMsIGVkZ2VzX2Zyb21cclxuXHJcbmxldCB0b19ncmFwaCA/ZGlyZWN0ZWQgdmVydGV4X2xpc3QgZWRnZV9saXN0ID0gXHJcbiAgbGV0IHZlcnRpY2VzLCBtYXhfaWQgPSBMaXN0LmZvbGQgdmVydGV4X2xpc3RcclxuICAgIH5pbml0OihTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpLCAwKVxyXG4gICAgfmY6KGZ1biAoYWN1bSwgbWF4KSB2IC0+XHJcbiAgICAgIChTZXQuYWRkIGFjdW0gdiksIChJbnQubWF4IG1heCB2LmlkKSlcclxuICBpblxyXG4gIGxldCBlZGdlcywgZWRnZXNfZnJvbSA9IGVkZ2VfbWFwcyA/ZGlyZWN0ZWQ6ZGlyZWN0ZWQgZWRnZV9saXN0IGluXHJcbiAge25vZGVzPXZlcnRpY2VzOyBlZGdlcz1lZGdlczsgZWRnZXNfZnJvbT1lZGdlc19mcm9tfSwge3RvdGFsX3ZlcnRpY2VzPW1heF9pZDsgaWRfbWFwPUhhc2h0YmwuY3JlYXRlIChtb2R1bGUgSW50KX1cclxuXHJcbmxldCB2c2V0X3RvX2lzZXQgdnNldCA9XHJcbiAgU2V0Lm1hcCAobW9kdWxlIEludCkgdnNldCB+ZjooZnVuIHYgLT4gdi5pZClcclxuXHJcbmxldCBpc2V0X3RvX3ZzZXQgbWFwIGlzZXQgPVxyXG4gIFNldC5tYXAgKG1vZHVsZSBWZXJ0ZXgpIGlzZXQgfmY6KGZ1biBpIC0+IE1hcC5maW5kX2V4biBtYXAgaSlcclxuXHJcbmxldCB2bWFwX3RvX2ltYXAgbWFwIG5vZGVzID1cclxuICBsZXQgZW1wdHlfbWFwID0gU2V0LmZvbGQgbm9kZXMgfmluaXQ6KE1hcC5lbXB0eSAobW9kdWxlIEludCkpXHJcbiAgICB+ZjooZnVuIGFjY3VtIHZlcnRleCAtPlxyXG4gICAgICBNYXAuYWRkX2V4biBhY2N1bSB+a2V5OnZlcnRleC5pZCB+ZGF0YTooU2V0LmVtcHR5IChtb2R1bGUgSW50KSkpXHJcbiAgaW4gXHJcbiAgTWFwLmZvbGQgbWFwXHJcbiAgICB+aW5pdDplbXB0eV9tYXBcclxuICAgIH5mOihmdW4gfmtleTprIH5kYXRhOnYgYWNjdW0gLT5cclxuICAgICAgbGV0IGRhdGEgPSB2c2V0X3RvX2lzZXQgdiBpblxyXG4gICAgICBNYXAudXBkYXRlIGFjY3VtIGsuaWQgfmY6KGZ1bmN0aW9uXHJcbiAgICAgICAgfCBOb25lIC0+IGRhdGFcclxuICAgICAgICB8IFNvbWUgaXNldCAtPiBTZXQudW5pb24gaXNldCBkYXRhKSlcclxuXHJcbigqKiBbaWRfbWFwIHZzZXRdOiByZXR1cm5zIGEgbWFwIGZyb20gdGhlIFtpZF1zIG9mIHRoZSBlbGVtZW50cyBvZiBbdnNldF0gdG8gXHJcbiAgICB0aGUgZWxlbWVudHMgdGhlbXNlbHZlcyAqKVxyXG5sZXQgaWRfbWFwIHZzZXQgPVxyXG4gIFNldC5mb2xkIHZzZXRcclxuICAgIH5pbml0OihNYXAuZW1wdHkgKG1vZHVsZSBJbnQpKSBcclxuICAgIH5mOihmdW4gYWNjdW0gdmVydGV4IC0+IFxyXG4gICAgICBNYXAuYWRkX2V4biBhY2N1bSB+a2V5OnZlcnRleC5pZCB+ZGF0YTp2ZXJ0ZXgpXHJcblxyXG4oKiogW3ZlcnRleF9uZWlnaGJvdXJfcGFpcnMgdmVydGljZXMgZWRnZV9tYXBdOiByZXR1cm4gYW4gYXNzb2MgbGlzdCBmcm9tIGV2ZXJ5IFxyXG4gICAgdmVydGV4IHRvIG9uZSBvZiBpdHMgbmVpZ2hib3VycyAqKVxyXG5sZXQgdmVydGV4X25laWdoYm91cl9wYWlycyB2IGVkZ2VfbWFwID1cclxuICBMaXN0Lm1hcCB2IFxyXG4gICAgfmY6KGZ1biB2aSAtPlxyXG4gICAgICBsZXQgdmlfbmVpZ2hib3VycyA9IE1hcC5maW5kX2V4biBlZGdlX21hcCB2aSBpblxyXG4gICAgICBsZXQgdmogPSBTZXQuY2hvb3NlIHZpX25laWdoYm91cnMgaW5cclxuICAgICAgbWF0Y2ggdmogd2l0aFxyXG4gICAgICB8IE5vbmUgLT4gU2V0LnNpbmdsZXRvbiAobW9kdWxlIFZlcnRleCkgdmlcclxuICAgICAgfCBTb21lIHZqIC0+IFNldC5vZl9saXN0IChtb2R1bGUgVmVydGV4KSBbdmk7IHZqXSlcclxuIiwib3BlbiBHcmFwaFxyXG5vcGVuIEJhc2VcclxuXHJcbm1vZHVsZSBWU2V0U2V0ID0gc3RydWN0XHJcbiAgdHlwZSB0ID0gQmFzZS5TZXQuTShWU2V0KS50XHJcbmVuZFxyXG5cclxudHlwZSBzdWJzZXQgPVxyXG4gIHwgU2luZ2xldG9uIG9mIHZlcnRleFxyXG4gIHwgQ2xpcXVlIG9mIFZTZXQudFxyXG4gIHwgQmVmb3JlIG9mIHZlcnRleCBsaXN0IFxyXG4gIHwgSW5kU2V0IG9mIFZTZXQudFxyXG4gIFtAQGRlcml2aW5nIGNvbXBhcmUsIHNleHBdXHJcblxyXG5tb2R1bGUgU3Vic2V0ID0gc3RydWN0XHJcbiAgbW9kdWxlIFQgPSBzdHJ1Y3RcclxuICAgIHR5cGUgdCA9IHN1YnNldCBbQEBkZXJpdmluZyBjb21wYXJlLCBzZXhwXVxyXG4gIGVuZFxyXG4gIGluY2x1ZGUgVFxyXG4gIGluY2x1ZGUgQ29tcGFyYWJsZS5NYWtlKFQpXHJcbmVuZFxyXG5cclxubW9kdWxlIFN1YnNldHNldCA9IHN0cnVjdFxyXG4gIHR5cGUgdCA9IFNldC5NKFN1YnNldCkudFxyXG5lbmRcclxuXHJcbigqIEFsZ29yaXRobSAyLjIgKilcclxuKCoqIFtzbWFsbGVzdF9jb25kZW5zaWJsZSBncmFwaCBzZXRdOiByZXR1cm5zIHRoZSBzbWFsbGVzdCBjb25kZW5zaWJsZSBzZXQgXHJcbiAgICBjb250YWluaW5nIGFsbCB2ZXJ0aWNlcyBvZiBbc2V0XSAqKVxyXG5sZXQgc21hbGxlc3RfY29uZGVuc2libGUgZ3JhcGggdnNldCA9XHJcbiAgaWYgU2V0Lmxlbmd0aCB2c2V0IDwgMiB0aGVuIE5vbmUgZWxzZVxyXG4gIGxldCByZWMgYWRkX3RvX3NldCByZXMgdG9fYWRkID1cclxuICAgIGlmIFNldC5pc19lbXB0eSB0b19hZGQgdGhlbiByZXMgZWxzZVxyXG4gICAgbGV0IG5ld19yZXMgPSBTZXQudW5pb24gcmVzIHRvX2FkZCBpblxyXG4gICAgbGV0IG5ld19jb25uZWN0ZWQgPSBjb25uZWN0ZWQgZ3JhcGggbmV3X3JlcyB8PiBVdGlsLmZsaXAgU2V0LmRpZmYgcmVzIGluXHJcbiAgICBsZXQgbmV3X3RvX2FkZCA9IFNldC5mb2xkIG5ld19yZXMgXHJcbiAgICAgIH5pbml0OihTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpKVxyXG4gICAgICB+ZjooZnVuIGFjdW0gdiAtPlxyXG4gICAgICAgIGxldCB3Z2kgPSB3IGdyYXBoIG5ld19yZXMgdiBpblxyXG4gICAgICAgIFNldC51bmlvbiBhY3VtIChTZXQuZGlmZiBuZXdfY29ubmVjdGVkIHdnaSkpXHJcbiAgICBpblxyXG4gICAgYWRkX3RvX3NldCBuZXdfcmVzIG5ld190b19hZGRcclxuICBpblxyXG4gIFNvbWUgKGFkZF90b19zZXQgKFNldC5lbXB0eSAobW9kdWxlIFZlcnRleCkpIHZzZXQpXHJcblxyXG4oKiogW3VwZGF0ZV9zdWJzZXQgc3Vic2V0IHYxIHN1Y2ModjEpIHYyIHN1Y2ModjIpXTogYWRkIFt2Ml0gdG8gW3N1YnNldF1cclxuICAgIGlmIGl0IGJlbG9uZ3MgdG8gdGhlIHNhbWUgc3Vic2V0IGFzIFt2MV0gKilcclxubGV0IHVwZGF0ZV9zdWJzZXQgc3Vic2V0IHZpIHZpX25laWdoYm91cnMgdmogdmpfbmVpZ2hib3VycyA9XHJcbiAgbWF0Y2ggc3Vic2V0IHdpdGhcclxuICB8IFNpbmdsZXRvbiB2ZXJ0ZXggLT5cclxuICAgIGlmIFZTZXQuZXF1YWwgdmpfbmVpZ2hib3VycyB2aV9uZWlnaGJvdXJzIHRoZW5cclxuICAgICAgSW5kU2V0IChTZXQub2ZfbGlzdCAobW9kdWxlIFZlcnRleCkgW3ZlcnRleDsgdmpdKVxyXG4gICAgZWxzZVxyXG4gICAgICBpZiBWU2V0LmVxdWFsIChTZXQucmVtb3ZlIHZqX25laWdoYm91cnMgdmkpIChTZXQucmVtb3ZlIHZpX25laWdoYm91cnMgdmopIHRoZW5cclxuICAgICAgICBpZiBTZXQubWVtIHZqX25laWdoYm91cnMgdmkgdGhlblxyXG4gICAgICAgICAgaWYgU2V0Lm1lbSB2aV9uZWlnaGJvdXJzIHZqIHRoZW4gQ2xpcXVlIChTZXQub2ZfbGlzdCAobW9kdWxlIFZlcnRleCkgW3ZlcnRleDsgdmpdKVxyXG4gICAgICAgICAgZWxzZSBCZWZvcmUgW3ZqOyB2aV1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBCZWZvcmUgW3ZpOyB2al1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIHN1YnNldFxyXG4gIHwgSW5kU2V0IHNldCAtPiBcclxuICAgIGlmIFZTZXQuZXF1YWwgdmpfbmVpZ2hib3VycyB2aV9uZWlnaGJvdXJzIHRoZW5cclxuICAgICAgSW5kU2V0IChTZXQuYWRkIHNldCB2ailcclxuICAgIGVsc2VcclxuICAgICAgc3Vic2V0XHJcbiAgfCBDbGlxdWUgc2V0IC0+XHJcbiAgICBpZiBTZXQuZXF1YWwgKFNldC5hZGQgdmpfbmVpZ2hib3VycyB2aikgKFNldC5hZGQgdmlfbmVpZ2hib3VycyB2aSkgdGhlblxyXG4gICAgICBDbGlxdWUgKFNldC5hZGQgc2V0IHZqKVxyXG4gICAgZWxzZVxyXG4gICAgICBzdWJzZXRcclxuICB8IEJlZm9yZSB2bGlzdCAtPlxyXG4gICAgbWF0Y2ggdmxpc3Qgd2l0aFxyXG4gICAgfCBbXSAtPiByYWlzZV9zIFslbWVzc2FnZSBcImVycm9yXCIgXCJGb3VuZCBFbXB0eSBCZWZvcmVcIl1cclxuICAgIHwgaCA6OiBfIC0+XHJcbiAgICAgIGlmIG5vdCAoU2V0Lm1lbSB2aV9uZWlnaGJvdXJzIGgpICYmIFNldC5lcXVhbCAoU2V0LmFkZCB2aV9uZWlnaGJvdXJzIGgpIHZqX25laWdoYm91cnMgdGhlblxyXG4gICAgICAgIEJlZm9yZSAodmogOjogdmxpc3QpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBzdWJzZXRcclxuXHJcbigqKiBbdXBkYXRlX3N1YnNldHNldCBzdWJzZXRzZXQgbmV3X3N1YnNldF06IGdpdmVuIGEgc2V0IG9mIHN1YnNldHMgW3N1YnNldHNldF0sXHJcbiAgICB1cGRhdGUgaXQgYnkgYWRkaW5nIFtuZXdfc3Vic2V0XSAqKVxyXG5sZXQgdXBkYXRlX3N1YnNldHNldCBzdWJzZXRzZXQgbmV3X3N1YnNldCA9XHJcbiAgbWF0Y2ggbmV3X3N1YnNldCB3aXRoXHJcbiAgfCBTaW5nbGV0b24gXyAtPiBzdWJzZXRzZXRcclxuICB8IF8gLT4gU2V0LmFkZCBzdWJzZXRzZXQgbmV3X3N1YnNldFxyXG5cclxubGV0IHN1YnNldF9jb250YWlucyB2IHN1YnNldCA9XHJcbiAgbWF0Y2ggc3Vic2V0IHdpdGhcclxuICB8IFNpbmdsZXRvbiB2ZXJ0ZXggLT4gVmVydGV4LmVxdWFsIHZlcnRleCB2XHJcbiAgfCBDbGlxdWUgdnNldCAtPiBTZXQubWVtIHZzZXQgdlxyXG4gIHwgSW5kU2V0IHZzZXQgLT4gU2V0Lm1lbSB2c2V0IHZcclxuICB8IEJlZm9yZSB2bGlzdCAtPiBMaXN0Lm1lbSB2bGlzdCB2IH5lcXVhbDooVmVydGV4LmVxdWFsKVxyXG5cclxubGV0IHN1YnNldF9hZGQgZ3JhcGggdiBzdWJzZXQgPVxyXG4gIG1hdGNoIHN1YnNldCB3aXRoIFxyXG4gIHwgU2luZ2xldG9uIF8gLT4gcmFpc2VfcyBbJW1lc3NhZ2UgXCJlcnJvclwiIFwiQ2Fubm90IGFkZCB2ZXJ0ZXggdG8gU2luZ2xldG9uIHN1YnNldFwiXVxyXG4gIHwgQ2xpcXVlIHZzZXQgLT4gQ2xpcXVlIChTZXQuYWRkIHZzZXQgdilcclxuICB8IEluZFNldCB2c2V0IC0+IEluZFNldCAoU2V0LmFkZCB2c2V0IHYpXHJcbiAgfCBCZWZvcmUgdmxpc3QgLT4gXHJcbiAgICBsZXQgbGFzdCA9IExpc3QuaGRfZXhuIHZsaXN0IGluIFxyXG4gICAgaWYgU2V0Lm1lbSAoZmluZF9vcl9lbXB0eSBncmFwaC5lZGdlcyBsYXN0KSB2IHRoZW5cclxuICAgICAgQmVmb3JlICh2IDo6IHZsaXN0KVxyXG4gICAgZWxzZVxyXG4gICAgICBCZWZvcmUgKHZsaXN0QFt2XSlcclxuXHJcbmxldCBzaGFyZV9tb2R1bGUgZ3JhcGggdmkgdmogPVxyXG4gIGxldCBzaSA9IGZpbmRfb3JfZW1wdHkgZ3JhcGguZWRnZXMgdmkgfD4gVXRpbC5mbGlwIFNldC5yZW1vdmUgdmogaW5cclxuICBsZXQgc2ogPSBmaW5kX29yX2VtcHR5IGdyYXBoLmVkZ2VzIHZqIHw+IFV0aWwuZmxpcCBTZXQucmVtb3ZlIHZpIGluXHJcbiAgbGV0IHBpID0gZmluZF9vcl9lbXB0eSBncmFwaC5lZGdlc19mcm9tIHZpIHw+IFV0aWwuZmxpcCBTZXQucmVtb3ZlIHZqIGluXHJcbiAgbGV0IHBqID0gZmluZF9vcl9lbXB0eSBncmFwaC5lZGdlc19mcm9tIHZqIHw+IFV0aWwuZmxpcCBTZXQucmVtb3ZlIHZpIGluXHJcbiAgVlNldC5lcXVhbCBzaSBzaiAmJiBWU2V0LmVxdWFsIHBpIHBqXHJcblxyXG4oKiBBbGdvcml0aG0gMy41ICopXHJcbigqKiBbY2NfYW5kX2lzIGdyYXBoXTogcmV0dXJucyB0aGUgc2V0IG9mIG1heGltYWwgY29uZGVuc2libGUgY2xpcXVlcyBhbmQgXHJcbiAgICBpbmRlcGVuZGVudCBzZXQgb2YgW2dyYXBoXSAqKVxyXG5sZXQgY2NfYW5kX2lzIGcgPVxyXG4gIGxldCB2aXNpdGVkID0gcmVmIChTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpKSBpblxyXG4gIGxldCByZXMgPSByZWYgKFNldC5lbXB0eSAobW9kdWxlIFN1YnNldCkpIGluXHJcbiAgbGV0IHYgPSBTZXQuZWxlbWVudHMgZy5ub2RlcyBpblxyXG4gIExpc3QuaXRlcmkgdiB+ZjooZnVuIGkgdmkgLT5cclxuICAgIGxldCB2aV9zdWNjZXNzb3JzID0gZmluZF9vcl9lbXB0eSBnLmVkZ2VzIHZpIGluXHJcbiAgICBsZXQgdmlfcHJlZGVjZXNzb3JzID0gZmluZF9vcl9lbXB0eSBnLmVkZ2VzX2Zyb20gdmkgaW5cclxuICAgIExpc3QuaXRlcmkgdiB+ZjooZnVuIGogdmogLT5cclxuICAgICAgaWYgaiA8PSBpIHRoZW4gKCkgZWxzZVxyXG4gICAgICBpZiBTZXQubWVtICF2aXNpdGVkIHZqIHRoZW4gKCkgZWxzZVxyXG4gICAgICBpZiBzaGFyZV9tb2R1bGUgZyB2aSB2aiB0aGVuXHJcbiAgICAgICAgbGV0ICgpID0gdmlzaXRlZCA6PSBTZXQuYWRkICF2aXNpdGVkIHZqIGluXHJcbiAgICAgICAgaWYgbm90IChTZXQubWVtICF2aXNpdGVkIHZpKSB0aGVuXHJcbiAgICAgICAgICBsZXQgKCkgPSB2aXNpdGVkIDo9IFNldC5hZGQgIXZpc2l0ZWQgdmkgaW5cclxuICAgICAgICAgIGxldCBzdWJzZXQgPSBcclxuICAgICAgICAgICAgaWYgU2V0Lm1lbSB2aV9zdWNjZXNzb3JzIHZqIHRoZW5cclxuICAgICAgICAgICAgICBpZiBTZXQubWVtIHZpX3ByZWRlY2Vzc29ycyB2aiB0aGVuXHJcbiAgICAgICAgICAgICAgICBDbGlxdWUgKFNldC5vZl9saXN0IChtb2R1bGUgVmVydGV4KSBbdmk7IHZqXSlcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBCZWZvcmUgW3ZqOyB2aV1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGlmIFNldC5tZW0gdmlfcHJlZGVjZXNzb3JzIHZqIHRoZW5cclxuICAgICAgICAgICAgICAgIEJlZm9yZSBbdmk7IHZqXVxyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIEluZFNldCAoU2V0Lm9mX2xpc3QgKG1vZHVsZSBWZXJ0ZXgpIFt2aTsgdmpdKVxyXG4gICAgICAgICAgaW5cclxuICAgICAgICAgIHJlcyA6PSBTZXQuYWRkICFyZXMgc3Vic2V0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGxldCBzdWJzZXQgPSBTZXQuZmluZF9leG4gIXJlcyB+Zjooc3Vic2V0X2NvbnRhaW5zIHZpKSBpbiBcclxuICAgICAgICAgIGxldCBuZXdfc3Vic2V0ID0gc3Vic2V0X2FkZCBnIHZqIHN1YnNldCBpblxyXG4gICAgICAgICAgbGV0ICgpID0gcmVzIDo9IFNldC5yZW1vdmUgIXJlcyBzdWJzZXQgaW5cclxuICAgICAgICAgIHJlcyA6PSBTZXQuYWRkICFyZXMgbmV3X3N1YnNldFxyXG4gICAgKVxyXG4gICk7XHJcbiAgIXJlc1xyXG5cclxuKCoqIFtzdWJzZXRfc2V0X3RvX25vZGVzIHN1YnNldHNldF06IGdpdmVuIGEgc2V0IG9mIHN1YnNldHMsIGNvbnZlcnQgZWFjaCBzdWJzZXRcclxuICAgIHRvIGEgW25vZGVdIGFuZCByZXR1cm4gdGhlbSBpbiBhIGxpc3QgKilcclxubGV0IHN1YnNldF9zZXRfdG9fbm9kZXMgc3Vic2V0c2V0ID1cclxuICBTZXQuZm9sZCBzdWJzZXRzZXRcclxuICAgIH5pbml0OltdXHJcbiAgICB+ZjooZnVuIGFjY3VtIHNzIC0+IFxyXG4gICAgICBtYXRjaCBzcyB3aXRoXHJcbiAgICAgIHwgU2luZ2xldG9uIF8gLT4gYWNjdW1cclxuICAgICAgfCBDbGlxdWUgdnNldCAtPiBUZW5zb3IgKHZzZXRfdG9faXNldCB2c2V0KSA6OiBhY2N1bVxyXG4gICAgICB8IEluZFNldCB2c2V0IC0+IFBhciAodnNldF90b19pc2V0IHZzZXQpIDo6IGFjY3VtXHJcbiAgICAgIHwgQmVmb3JlIHZsaXN0IC0+IEJlZm9yZSAoTGlzdC5tYXAgdmxpc3QgfmY6KGZ1biB2IC0+IHYuaWQpKSA6OiBhY2N1bSlcclxuXHJcbigqKiBbY29uZGVuc2Vfc3Vic2V0IHN1YnNldCBncmFwaF06IGdpdmVuIFtzdWJzZXRdLCBjb25kZW5zZSBpdHMgdmVydGljZXMgaW50byBhXHJcbiAgICBmcmVzaCB2ZXJ0ZXggaW4gW2dyYXBoXSAqKVxyXG5sZXQgY29uZGVuc2Vfc3Vic2V0IHN1YnNldCBncmFwaCBzdGF0ZSA9XHJcbiAgbGV0IGgsIG5vZGUgPSBcclxuICAgIG1hdGNoIHN1YnNldCB3aXRoXHJcbiAgICB8IFNpbmdsZXRvbiBfIC0+IHJhaXNlX3MgWyVtZXNzYWdlIFwiZXJyb3JcIiBcIkNhbm5vdCBjb25kZW5zZSBzaW5nbGV0b25cIl1cclxuICAgIHwgQ2xpcXVlIHNldCAtPiBzZXQsIFRlbnNvciAodnNldF90b19pc2V0IHNldClcclxuICAgIHwgSW5kU2V0IHNldCAtPiBzZXQsIFBhciAodnNldF90b19pc2V0IHNldClcclxuICAgIHwgQmVmb3JlIHZsaXN0IC0+IFxyXG4gICAgICBTZXQub2ZfbGlzdCAobW9kdWxlIFZlcnRleCkgdmxpc3QsIEJlZm9yZSAoTGlzdC5tYXAgdmxpc3QgfmY6KGZ1biB2IC0+IHYuaWQpKVxyXG4gIGluXHJcbiAgbGV0IG5ld192ZXJ0ZXggPSBcclxuICAgIHtcclxuICAgICAgY29ubmVjdGl2ZSA9IG5vZGU7XHJcbiAgICAgIGlkID0gZnJlc2hfaWQgc3RhdGU7XHJcbiAgICB9XHJcbiAgaW5cclxuICByZXBsYWNlIGdyYXBoIGggbmV3X3ZlcnRleCBzdGF0ZVxyXG5cclxuKCoqIFtjb25kZW5zZV9wcmltZSBub2RlIHZlcnRpY2VzIGdyYXBoXTogZ2l2ZW4gYSBwcmltZSBbbm9kZV0gYW5kIGl0J3MgXHJcbiAgICBjb3JyZXNwb25kaW5nIFt2ZXJ0aWNlc10sIGNvbmRlbnNlIHZlcnRpY2VzIGludG8gYSBmcmVzaCB2ZXJ0ZXggKilcclxubGV0IGNvbmRlbnNlX3ByaW1lIG5vZGUgdmVydGljZXMgZ3JhcGggc3RhdGUgPVxyXG4gIGxldCBuZXdfdmVydGV4ID1cclxuICAgIHtcclxuICAgICAgY29ubmVjdGl2ZSA9IG5vZGU7XHJcbiAgICAgIGlkID0gZnJlc2hfaWQgc3RhdGU7XHJcbiAgICB9XHJcbiAgaW4gXHJcbiAgcmVwbGFjZSBncmFwaCB2ZXJ0aWNlcyBuZXdfdmVydGV4IHN0YXRlXHJcblxyXG4oKiBBbGdvcml0aG0gMy42ICopXHJcbigqKiBbY29uZGVuc2libGVfc3ViZ3JhcGhzIGdyYXBoXTogcmV0dXJucyB0aGUgbWluaW1hbCBjb25kZW5zaWJsZSBzdWJncmFwaHMgb2YgXHJcbiAgICBbZ3JhcGhdKilcclxubGV0IGNvbmRlbnNpYmxlX3N1YmdyYXBocyBncmFwaCA9XHJcbiAgbGV0IHYgPSBTZXQuZWxlbWVudHMgZ3JhcGgubm9kZXMgaW5cclxuICBsZXQgZWRnZV9saXN0ID0gZWRnZV90dXBsZV9saXN0IGdyYXBoLmVkZ2VzIGluXHJcbiAgbGV0IHZfdG9fZWRnZV9pbmRleCA9IEhhc2h0YmwuY3JlYXRlIChtb2R1bGUgVmVydGV4KSBpblxyXG4gIGxldCAoKSA9IExpc3QuaXRlcmkgZWRnZV9saXN0IH5mOihmdW4gaSAodjEsIHYyKSAtPlxyXG4gICAgSGFzaHRibC5jaGFuZ2Ugdl90b19lZGdlX2luZGV4IHYxXHJcbiAgICAgIH5mOihmdW4gbCAtPlxyXG4gICAgICAgIG1hdGNoIGwgd2l0aFxyXG4gICAgICAgIHwgTm9uZSAtPiBTb21lIFtpXVxyXG4gICAgICAgIHwgU29tZSBsIC0+IFNvbWUgKGkgOjogbCkpO1xyXG4gICAgSGFzaHRibC5jaGFuZ2Ugdl90b19lZGdlX2luZGV4IHYyXHJcbiAgICAgIH5mOihmdW4gbCAtPlxyXG4gICAgICAgIG1hdGNoIGwgd2l0aFxyXG4gICAgICAgIHwgTm9uZSAtPiBTb21lIFtpXVxyXG4gICAgICAgIHwgU29tZSBsIC0+IFNvbWUgKGkgOjogbCkpKVxyXG4gIGluXHJcbiAgbGV0IG1pbl9jb25fZWRnZXMgPSBMaXN0Lm1hcCBlZGdlX2xpc3QgXHJcbiAgICB+ZjooZnVuICh2MSwgdjIpIC0+IHNtYWxsZXN0X2NvbmRlbnNpYmxlIGdyYXBoIChTZXQub2ZfbGlzdCAobW9kdWxlIFZlcnRleCkgW3YxOyB2Ml0pKVxyXG4gIGluXHJcbiAgbGV0IGggPSBMaXN0Lm1hcCB2IH5mOihmdW4gdiAtPlxyXG4gICAgbGV0IGRlZmluZWRfb25fdiA9IExpc3QubWFwIFxyXG4gICAgICAobWF0Y2ggSGFzaHRibC5maW5kIHZfdG9fZWRnZV9pbmRleCB2IHdpdGhcclxuICAgICAgICB8IE5vbmUgLT4gW11cclxuICAgICAgICB8IFNvbWUgbCAtPiBsKVxyXG4gICAgICB+ZjooZnVuIGkgLT4gTGlzdC5udGhfZXhuIG1pbl9jb25fZWRnZXMgaSlcclxuICAgIGluXHJcbiAgICBsZXQgcmVjIHNtYWxsZXN0X2NhcmQgbCA9IG1hdGNoIGwgd2l0aFxyXG4gICAgICB8IFthXSAtPiAobWF0Y2ggYSB3aXRoXHJcbiAgICAgICAgfCBOb25lIC0+IFNldC5lbXB0eSAobW9kdWxlIFZlcnRleCkgXHJcbiAgICAgICAgfCBTb21lIGEgLT4gYSlcclxuICAgICAgfCBbXSAtPiBTZXQuZW1wdHkgKG1vZHVsZSBWZXJ0ZXgpXHJcbiAgICAgIHwgaCA6OiB0IC0+IFxyXG4gICAgICAgIGxldCBtaW5fY2FyZCA9IHNtYWxsZXN0X2NhcmQgdCBpblxyXG4gICAgICAgIG1hdGNoIGggd2l0aCBcclxuICAgICAgICB8IE5vbmUgLT4gbWluX2NhcmRcclxuICAgICAgICB8IFNvbWUgaCAtPlxyXG4gICAgICAgICAgaWYgU2V0Lmxlbmd0aCBoIDwgU2V0Lmxlbmd0aCBtaW5fY2FyZCB0aGVuXHJcbiAgICAgICAgICAgIGhcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbWluX2NhcmRcclxuICAgIGluXHJcbiAgICBzbWFsbGVzdF9jYXJkIGRlZmluZWRfb25fdilcclxuICBpbiBcclxuICBsZXQgY29uc2lkZXJlZCA9IFNldC5vZl9saXN0IChtb2R1bGUgVmVydGV4KSB2IGluXHJcbiAgbGV0IHJlcyA9IExpc3QuZm9sZGkgdiB+aW5pdDpjb25zaWRlcmVkXHJcbiAgICB+ZjooZnVuIGkgYWN1bSB2aSAtPlxyXG4gICAgICBsZXQgaGkgPSBMaXN0Lm50aF9leG4gaCBpIGluXHJcbiAgICAgIGlmIG5vdCAoU2V0Lm1lbSBhY3VtIHZpKSB0aGVuIGFjdW0gZWxzZVxyXG4gICAgICBTZXQuZm9sZCBoaSB+aW5pdDphY3VtXHJcbiAgICAgICAgfmY6KGZ1biBhY3VtMiB2aiAtPlxyXG4gICAgICAgICAgbGV0IGogPSB2ZXJ0ZXhfaW5kZXggdmogdiBpblxyXG4gICAgICAgICAgaWYgaiA9IGkgdGhlbiBhY3VtMiBlbHNlXHJcbiAgICAgICAgICBsZXQgdmogPSBMaXN0Lm50aF9leG4gdiBqIGluXHJcbiAgICAgICAgICBpZiBub3QgKFNldC5tZW0gYWN1bTIgdmopIHRoZW4gYWN1bTIgZWxzZVxyXG4gICAgICAgICAgbGV0IGhqID0gTGlzdC5udGhfZXhuIGggaiBpblxyXG4gICAgICAgICAgaWYgKFNldC5sZW5ndGggaGopID49IChTZXQubGVuZ3RoIGhpKSB0aGVuXHJcbiAgICAgICAgICAgIFNldC5yZW1vdmUgYWN1bTIgdmpcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgU2V0LnJlbW92ZSBhY3VtMiB2aSkpXHJcbiAgaW5cclxuICBTZXQuZm9sZCByZXMgfmluaXQ6KFNldC5lbXB0eSAobW9kdWxlIFZTZXQpKVxyXG4gICAgfmY6KGZ1biBhY3VtIHZpIC0+XHJcbiAgICAgIGxldCBpID0gdmVydGV4X2luZGV4IHZpIHYgaW5cclxuICAgICAgbGV0IHNldCA9IExpc3QubnRoX2V4biBoIGkgaW5cclxuICAgICAgaWYgU2V0LmlzX2VtcHR5IHNldCB0aGVuIGFjdW0gZWxzZVxyXG4gICAgICBTZXQuYWRkIGFjdW0gc2V0KVxyXG5cclxuKCoqIFtjb25kZW5zZV9zZXQgc3Vic2V0cyBncmFwaF06IGdpdmVuIGEgc2V0IG9mIGRpc2pvaW50IHN1YnNldHMsIGNvbmRlbnNlIHRoZW1cclxuICAgIGFsbCBpbiBbZ3JhcGhdICopXHJcbmxldCBjb25kZW5zZV9zZXQgc3Vic2V0cyBncmFwaCBzdGF0ZSA9XHJcbiAgU2V0LmZvbGQgc3Vic2V0c1xyXG4gICAgfmluaXQ6Z3JhcGhcclxuICAgIH5mOihmdW4gYWNjdW0gc3MgLT4gY29uZGVuc2Vfc3Vic2V0IHNzIGFjY3VtIHN0YXRlKVxyXG5cclxuKCoqIFtjb25kZW5zZV9jbGlxdWVzIGdyYXBoXTogY29uZGVuc2UgYWxsIG9mIHRoZSBjb25kZW5zaWJsZSBtYXhpbWFsIGNsaXF1ZXMgXHJcbiAgICBhbmQgaW5kZXBlbmRlbnQgc2V0cyBpbiBbZ3JhcGhdIGludG8gZnJlc2ggdmVydGljZXMgKilcclxubGV0IHJlYyBjb25kZW5zZV9jbGlxdWVzIGdyYXBoIHN0YXRlID1cclxuICBsZXQgY2xpcXVlc19hbmRfaW5kID0gY2NfYW5kX2lzIGdyYXBoIGluXHJcbiAgaWYgU2V0LmlzX2VtcHR5IGNsaXF1ZXNfYW5kX2luZCB0aGVuXHJcbiAgICBncmFwaFxyXG4gIGVsc2VcclxuICAgIGNvbmRlbnNlX2NsaXF1ZXMgKGNvbmRlbnNlX3NldCBjbGlxdWVzX2FuZF9pbmQgZ3JhcGggc3RhdGUpIHN0YXRlXHJcblxyXG5sZXQgcmV0dXJuIGdyYXBoIHN0YXRlID0gXHJcbiAgICBsZXQgKCkgPVxyXG4gICAgICBtYXRjaCBTZXQuY2hvb3NlIGdyYXBoLm5vZGVzIHdpdGhcclxuICAgICAgfCBOb25lIC0+ICgpXHJcbiAgICAgIHwgU29tZSByb290IC0+IEhhc2h0YmwuYWRkX2V4biBzdGF0ZS5pZF9tYXAgfmtleTpyb290LmlkIH5kYXRhOnJvb3RcclxuICAgIGluXHJcbiAgICBncmFwaFxyXG5cclxuKCogQWxnb3JpdGhtIDMuNCAqKVxyXG5sZXQgcmVjIHByb2Nlc3MgZ3JhcGggc3RhdGUgPVxyXG4gIGlmIFNldC5sZW5ndGggZ3JhcGgubm9kZXMgPD0gMSB0aGVuIHJldHVybiBncmFwaCBzdGF0ZSBlbHNlXHJcbiAgbGV0IGNvbmRlbnNlZF9ncmFwaCA9IGNvbmRlbnNlX2NsaXF1ZXMgZ3JhcGggc3RhdGUgaW5cclxuICBpZiBTZXQubGVuZ3RoIGNvbmRlbnNlZF9ncmFwaC5ub2RlcyA8PSAxIHRoZW4gcmV0dXJuIGNvbmRlbnNlZF9ncmFwaCBzdGF0ZSBlbHNlXHJcbiAgbGV0IG1pbl9jb25kID0gY29uZGVuc2libGVfc3ViZ3JhcGhzIGNvbmRlbnNlZF9ncmFwaCBpblxyXG4gIGlmIFNldC5pc19lbXB0eSBtaW5fY29uZCB0aGVuXHJcbiAgICBsZXQgbm9kZSA9IFByaW1lICh2bWFwX3RvX2ltYXAgY29uZGVuc2VkX2dyYXBoLmVkZ2VzIGNvbmRlbnNlZF9ncmFwaC5ub2RlcykgaW5cclxuICAgIGxldCByZXMgPSBjb25kZW5zZV9wcmltZSBub2RlIGNvbmRlbnNlZF9ncmFwaC5ub2RlcyBjb25kZW5zZWRfZ3JhcGggc3RhdGUgaW5cclxuICAgIHJldHVybiByZXMgc3RhdGVcclxuICBlbHNlXHJcbiAgICBsZXQgcHJpbWVfbGlzdCA9IFxyXG4gICAgICBTZXQuZm9sZCBtaW5fY29uZFxyXG4gICAgICAgIH5pbml0OltdXHJcbiAgICAgICAgfmY6KGZ1biBhY2N1bSB2c2V0IC0+IFxyXG4gICAgICAgICAgbGV0IHN1YmdyYXBoID0gaW5kdWNlZF9zdWJncmFwaCBjb25kZW5zZWRfZ3JhcGggdnNldCBpblxyXG4gICAgICAgICAgbGV0IG5vZGUgPSBQcmltZSAodm1hcF90b19pbWFwIHN1YmdyYXBoLmVkZ2VzIHN1YmdyYXBoLm5vZGVzKSBpblxyXG4gICAgICAgICAgKG5vZGUsIHZzZXQpIDo6IGFjY3VtKVxyXG4gICAgaW5cclxuICAgIGxldCBwcmltZV9jb25kZW5zZWRfZ3JhcGggPVxyXG4gICAgICBMaXN0LmZvbGQgcHJpbWVfbGlzdFxyXG4gICAgICAgIH5pbml0OmNvbmRlbnNlZF9ncmFwaCBcclxuICAgICAgICB+ZjooZnVuIGdyYXBoIChub2RlLCBoKSAtPiBjb25kZW5zZV9wcmltZSBub2RlIGggZ3JhcGggc3RhdGUpXHJcbiAgICBpblxyXG4gICAgcHJvY2VzcyBwcmltZV9jb25kZW5zZWRfZ3JhcGggc3RhdGVcclxuXHJcbmxldCBpc1ByaW1lIGdyYXBoID1cclxuICBsZXQgY2xpcXVlc19hbmRfaW4gPSBjY19hbmRfaXMgZ3JhcGggaW4gXHJcbiAgaWYgU2V0LmlzX2VtcHR5IGNsaXF1ZXNfYW5kX2luIHRoZW5cclxuICAgIGxldCBtaW5fY29uZCA9IGNvbmRlbnNpYmxlX3N1YmdyYXBocyBncmFwaCBpblxyXG4gICAgaWYgU2V0LmlzX2VtcHR5IG1pbl9jb25kIHRoZW5cclxuICAgICAgdHJ1ZVxyXG4gICAgZWxzZVxyXG4gICAgICBpZiBTZXQubGVuZ3RoIG1pbl9jb25kID0gMSAmJiBTZXQubGVuZ3RoIChTZXQuY2hvb3NlX2V4biBtaW5fY29uZCkgPSBTZXQubGVuZ3RoIGdyYXBoLm5vZGVzIHRoZW5cclxuICAgICAgICB0cnVlXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBmYWxzZVxyXG4gIGVsc2VcclxuICAgIGZhbHNlIiwibGV0IGZsaXAgZiB4IHkgPSBmIHkgeFxyXG5cclxubGV0IHJlYyBiZWZvcmUgdjEgdjIgdmwgPVxyXG4gIG1hdGNoIHZsIHdpdGhcclxuICB8IFtdIC0+IHJhaXNlIE5vdF9mb3VuZFxyXG4gIHwgdiA6OiBfIHdoZW4gKHYgPSB2MSkgLT4gdHJ1ZVxyXG4gIHwgdiA6OiBfIHdoZW4gKHYgPSB2MikgLT4gZmFsc2VcclxuICB8IF8gOjogdCAtPiBiZWZvcmUgdjEgdjIgdFxyXG5cclxubGV0IGluZGV4IGVsZW0gbCA9XHJcbiAgbGV0IHJlYyBpbmRleF9yIGVsZW0gbCBpID1cclxuICAgIG1hdGNoIGwgd2l0aFxyXG4gICAgfCBbXSAtPiByYWlzZSBOb3RfZm91bmRcclxuICAgIHwgaCA6OiB0IC0+XHJcbiAgICAgIGlmIGggPSBlbGVtIHRoZW4gaSBlbHNlIGluZGV4X3IgZWxlbSB0IChpKzEpXHJcbiAgaW5cclxuICBpbmRleF9yIGVsZW0gbCAwXHJcblxyXG4oKiogR2l2ZW4gW3N0cmluZ10gb2YgdGhlIGZvcm0gW1swLTldKi1yZXBdLCByZXR1cm4gdGhlIGludGVnZXIgd3JpdHRlbiB3aXRob3V0IHRoZSBcInJlcFwiICopXHJcbmxldCByZW1vdmVfcmVwIHN0cmluZyA9IFxyXG4gIGxldCAoKSA9IGFzc2VydCAoU3RkbGliLlN0cmluZy5lbmRzX3dpdGggfnN1ZmZpeDpcIi1yZXBcIiBzdHJpbmcpIGluXHJcbiAgQmFzZS5TdHJpbmcubHNwbGl0Ml9leG4gc3RyaW5nIH5vbjonLScgfD4gZnN0IHw+IEJhc2UuSW50Lm9mX3N0cmluZ1xyXG5cclxubGV0IHJlc29sdmUgPSBmdW5jdGlvblxyXG4gIHwgTm9uZSAtPiBmYWxzZVxyXG4gIHwgU29tZSBib29sIC0+IGJvb2wiLCJvcGVuIEJhc2VcclxuXHJcbnR5cGUgaWRfZ3JhcGggPSB7XHJcbiAgICBub2RlcyA6IGludCBsaXN0O1xyXG4gICAgZWRnZXMgOiAoaW50ICogaW50KSBsaXN0O1xyXG59XHJcblxyXG50eXBlIGNvbm5lY3RpdmUgPVxyXG4gIHwgQXRvbSBvZiBHcmFwaC5hdG9tXHJcbiAgfCBUZW5zb3Igb2YgdHJlZSBsaXN0XHJcbiAgfCBQYXIgb2YgdHJlZSBsaXN0XHJcbiAgfCBCZWZvcmUgb2YgdHJlZSBsaXN0XHJcbiAgfCBQcmltZSBvZiBpZF9ncmFwaCAqICh0cmVlIGxpc3QpXHJcblxyXG5hbmQgdHJlZSA9IHtcclxuICAgIGNvbm5lY3RpdmUgOiBjb25uZWN0aXZlO1xyXG4gICAgaWQ6IGludDtcclxuICAgIH1cclxuXHJcbmxldCBzdWNjZXNzb3JzIHRyZWUgPVxyXG4gIG1hdGNoIHRyZWUuY29ubmVjdGl2ZSB3aXRoXHJcbiAgfCBBdG9tIF8gLT4gW11cclxuICB8IFRlbnNvciB0bCAtPiB0bFxyXG4gIHwgUGFyIHRsIC0+IHRsXHJcbiAgfCBCZWZvcmUgdGwgLT4gdGxcclxuICB8IFByaW1lIChfLCB0bCkgLT4gdGxcclxuXHJcbmxldCByZW1vdmVfaWQgaWQgbWFwID1cclxuICBNYXAucmVtb3ZlIG1hcCBpZCB8PiBNYXAubWFwIH5mOihmdW4gdiAtPiBTZXQucmVtb3ZlIHYgaWQpXHJcblxyXG5sZXQgZnJvbV9tYXAgP2RpcmVjdGVkIG1hcCA9XHJcbiAgbGV0IG5vZGVzID0gTWFwLmtleXMgbWFwIGluXHJcbiAgbGV0IGVkZ2VzID1cclxuICAgIGxldCByZWMgaWRfdHVwbGVzX2Zyb21fbWFwIChtYXAgOiBHcmFwaC5JTWFwLnQpID1cclxuICAgICAgaWYgTWFwLmlzX2VtcHR5IG1hcCB0aGVuXHJcbiAgICAgICAgW11cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxldCBpZCwgaWRfbmVpZ2hib3VycyA9IE1hcC5taW5fZWx0X2V4biBtYXAgaW5cclxuICAgICAgICBsZXQgbmV3X2ltYXAgPSBcclxuICAgICAgICAgIGlmIFV0aWwucmVzb2x2ZSBkaXJlY3RlZCB0aGVuIE1hcC5yZW1vdmUgbWFwIGlkIGVsc2UgcmVtb3ZlX2lkIGlkIG1hcFxyXG4gICAgICAgIGluXHJcbiAgICAgICAgbGV0IG5ld19lZGdlcyA9IFNldC5mb2xkIGlkX25laWdoYm91cnNcclxuICAgICAgICAgIH5pbml0OltdXHJcbiAgICAgICAgICB+ZjooZnVuIGFjY3VtIGlkMiAtPiAoaWQsIGlkMikgOjogYWNjdW0pXHJcbiAgICAgICAgaW5cclxuICAgICAgICBuZXdfZWRnZXMgQCBpZF90dXBsZXNfZnJvbV9tYXAgbmV3X2ltYXBcclxuICAgIGluXHJcbiAgICBpZF90dXBsZXNfZnJvbV9tYXAgbWFwXHJcbiAgaW5cclxuICB7bm9kZXMgPSBub2RlczsgZWRnZXMgPSBlZGdlc31cclxuXHJcbmxldCB0cmVlX2Zyb21fY29uZGVuc2VkID9kaXJlY3RlZCAoZ3JhcGggOiBHcmFwaC5ncmFwaCkgc3RhdGUgPVxyXG4gIGxldCAoKSA9IGFzc2VydChTZXQubGVuZ3RoIGdyYXBoLm5vZGVzIDw9IDEpIGluXHJcbiAgbWF0Y2ggU2V0LmNob29zZSBncmFwaC5ub2RlcyB3aXRoXHJcbiAgICB8IE5vbmUgLT4gTm9uZSBcclxuICAgIHwgU29tZSByb290IC0+XHJcbiAgICAgIGxldCByZWMgdHJlZV9mcm9tX2lkIGlkIChzdGF0ZSA6IEdyYXBoLnN0YXRlKSA9XHJcbiAgICAgICAgbGV0IHZlcnRleCA6IEdyYXBoLnZlcnRleCA9IEhhc2h0YmwuZmluZF9leG4gc3RhdGUuaWRfbWFwIGlkIGluXHJcbiAgICAgICAgbWF0Y2ggdmVydGV4LmNvbm5lY3RpdmUgd2l0aFxyXG4gICAgICAgIHwgR3JhcGguQXRvbSBhdG9tIC0+IHtjb25uZWN0aXZlID0gQXRvbSBhdG9tOyBpZCA9IHZlcnRleC5pZH1cclxuXHJcbiAgICAgICAgfCBHcmFwaC5UZW5zb3IgaXNldCAtPiBcclxuICAgICAgICAgIGxldCB0cmVlX2xpc3QgPSB0cmVlc19mcm9tX2lkX2xpc3QgKFNldC5lbGVtZW50cyBpc2V0KSBzdGF0ZSBpblxyXG4gICAgICAgICAgbGV0IHRlbnNvcl9saXN0cywgdHJlZV9saXN0ID0gTGlzdC5wYXJ0aXRpb25fbWFwIHRyZWVfbGlzdCB+ZjooZnVuIHQgLT5cclxuICAgICAgICAgICAgbWF0Y2ggdC5jb25uZWN0aXZlIHdpdGhcclxuICAgICAgICAgICAgfCBUZW5zb3IgdGwgLT4gRmlyc3QgdGxcclxuICAgICAgICAgICAgfCBfIC0+IFNlY29uZCB0KVxyXG4gICAgICAgICAgaW5cclxuICAgICAgICAgIGxldCBzdWNjZXNzb3JzID0gTGlzdC5jb25jYXQgKHRyZWVfbGlzdCA6OiB0ZW5zb3JfbGlzdHMpIGluXHJcbiAgICAgICAgICB7Y29ubmVjdGl2ZSA9IFRlbnNvciBzdWNjZXNzb3JzOyBpZCA9IHZlcnRleC5pZH1cclxuXHJcbiAgICAgICAgfCBHcmFwaC5QYXIgaXNldCAtPlxyXG4gICAgICAgICAgbGV0IHRyZWVfbGlzdCA9IHRyZWVzX2Zyb21faWRfbGlzdCAoU2V0LmVsZW1lbnRzIGlzZXQpIHN0YXRlIGluXHJcbiAgICAgICAgICBsZXQgcGFyX2xpc3RzLCB0cmVlX2xpc3QgPSBMaXN0LnBhcnRpdGlvbl9tYXAgdHJlZV9saXN0IH5mOihmdW4gdCAtPlxyXG4gICAgICAgICAgICBtYXRjaCB0LmNvbm5lY3RpdmUgd2l0aFxyXG4gICAgICAgICAgICB8IFBhciB0bCAtPiBGaXJzdCB0bFxyXG4gICAgICAgICAgICB8IF8gLT4gU2Vjb25kIHQpXHJcbiAgICAgICAgICBpblxyXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NvcnMgPSBMaXN0LmNvbmNhdCAodHJlZV9saXN0IDo6IHBhcl9saXN0cykgaW5cclxuICAgICAgICAgIHtjb25uZWN0aXZlID0gUGFyIHN1Y2Nlc3NvcnM7IGlkID0gdmVydGV4LmlkfVxyXG5cclxuICAgICAgICB8IEdyYXBoLkJlZm9yZSBpbGlzdCAtPlxyXG4gICAgICAgICAgbGV0IHRyZWVfbGlzdCA9IHRyZWVzX2Zyb21faWRfbGlzdCBpbGlzdCBzdGF0ZSBpblxyXG4gICAgICAgICAgbGV0IHJlYyBwYXJzZV9iZWZvcmUgdGwgPVxyXG4gICAgICAgICAgICBtYXRjaCB0bCB3aXRoIFxyXG4gICAgICAgICAgICB8IFtdIC0+IFtdXHJcbiAgICAgICAgICAgIHwgaCA6OiB0IC0+XHJcbiAgICAgICAgICAgICAgbWF0Y2ggaC5jb25uZWN0aXZlIHdpdGhcclxuICAgICAgICAgICAgICB8IEJlZm9yZSB0bCAtPiB0bCBAIChwYXJzZV9iZWZvcmUgdClcclxuICAgICAgICAgICAgICB8IF8gLT4gaCA6OiAocGFyc2VfYmVmb3JlIHQpXHJcbiAgICAgICAgICBpblxyXG4gICAgICAgICAgbGV0IHN1Y2Nlc3NvcnMgPSBwYXJzZV9iZWZvcmUgdHJlZV9saXN0IGluXHJcbiAgICAgICAgICB7Y29ubmVjdGl2ZSA9IEJlZm9yZSBzdWNjZXNzb3JzOyBpZCA9IHZlcnRleC5pZH1cclxuXHJcbiAgICAgICAgfCBHcmFwaC5QcmltZSBtYXAgLT5cclxuICAgICAgICAgIGxldCBpZF9ncmFwaCA9IGZyb21fbWFwID9kaXJlY3RlZDpkaXJlY3RlZCBtYXAgaW5cclxuICAgICAgICAgIGxldCB0cmVlX2xpc3QgPSB0cmVlc19mcm9tX2lkX2xpc3QgaWRfZ3JhcGgubm9kZXMgc3RhdGUgaW5cclxuICAgICAgICAgIHtjb25uZWN0aXZlID0gUHJpbWUgKGlkX2dyYXBoLCB0cmVlX2xpc3QpOyBpZCA9IHZlcnRleC5pZH1cclxuXHJcbiAgICAgIGFuZCB0cmVlc19mcm9tX2lkX2xpc3QgaWRfbGlzdCBzdGF0ZSA9XHJcbiAgICAgICAgTGlzdC5tYXAgaWRfbGlzdCB+ZjooVXRpbC5mbGlwIHRyZWVfZnJvbV9pZCBzdGF0ZSlcclxuICAgICAgaW5cclxuICAgICAgU29tZSAodHJlZV9mcm9tX2lkIHJvb3QuaWQgc3RhdGUpXHJcblxyXG4oKiogW3RyZWVfdG9fZ3JhcGggP2RpcmVjdGVkIHRyZWVdIGNvbnZlcnRzIGEgdHJlZSB0byBhIGdyYXBoLCB1c2luZyBbZGlyZWN0ZWRdIHRvIHNwZWNpZnkgaWYgdGhlIHRyZWUgaXMgZGlyZWN0ZWQgKilcclxubGV0IHRyZWVfdG9fZ3JhcGggP2RpcmVjdGVkIHRyZWUgPSBcclxuICBsZXQgam9pbl9zZXRzID9zeW1tZXRyaWMgdnMxIHZzMiA9IFxyXG4gICAgU2V0LmZvbGQgdnMxIH5pbml0OihbXSkgfmY6KGZ1biBsaSB2aSAtPlxyXG4gICAgICBTZXQuZm9sZCB2czIgfmluaXQ6KGxpKSB+ZjooZnVuIGxqIHZqIC0+XHJcbiAgICAgICAgbWF0Y2ggc3ltbWV0cmljIHdpdGhcclxuICAgICAgICB8IE5vbmUgLT4gKHZpLCB2aikgOjogbGpcclxuICAgICAgICB8IFNvbWUgYm9vbCAtPiBpZiBib29sIHRoZW4gKHZpLCB2aikgOjogKHZqLCB2aSkgOjogbGogZWxzZVxyXG4gICAgICAgICAgKHZpLCB2aikgOjogbGopKVxyXG4gIGluXHJcbiAgbGV0IHJlYyB0cmVlX3RvX2dyYXBoX3IgdHJlZSA9IFxyXG4gICAgbWF0Y2ggdHJlZS5jb25uZWN0aXZlIHdpdGhcclxuICAgIHwgQXRvbSBhdG9tIC0+IFxyXG4gICAgICBsZXQgbm9kZSA9IFNldC5zaW5nbGV0b24gKG1vZHVsZSBHcmFwaC5WZXJ0ZXgpIHtjb25uZWN0aXZlPUF0b20gYXRvbTsgaWQ9dHJlZS5pZH0gaW5cclxuICAgICAgKG5vZGUsIFtdKVxyXG5cclxuICAgIHwgUGFyIHRsIC0+XHJcbiAgICAgIGxldCBub2RlcywgZWRnZXMgPSBMaXN0LmZvbGQgdGwgfmluaXQ6KFNldC5lbXB0eSAobW9kdWxlIEdyYXBoLlZlcnRleCksIFtdKVxyXG4gICAgICAgIH5mOihmdW4gKHZzZXQsIGVsKSB0IC0+XHJcbiAgICAgICAgICBsZXQgbm9kZXMsIGVsX3RvX2FkZCA9IHRyZWVfdG9fZ3JhcGhfciB0IGluXHJcbiAgICAgICAgICAoU2V0LnVuaW9uIHZzZXQgbm9kZXMsIGVsX3RvX2FkZCBAIGVsKSlcclxuICAgICAgaW4gXHJcbiAgICAgIChub2RlcywgZWRnZXMpXHJcblxyXG4gICAgfCBUZW5zb3IgdGwgLT5cclxuICAgICAgbGV0IG5lbCA9IExpc3QubWFwIHRsIH5mOih0cmVlX3RvX2dyYXBoX3IpIGluXHJcbiAgICAgIGxldCBub2RlcywgZWRnZXMgPSBMaXN0LmZvbGQgbmVsIH5pbml0OihTZXQuZW1wdHkgKG1vZHVsZSBHcmFwaC5WZXJ0ZXgpLCBbXSlcclxuICAgICAgICB+ZjooZnVuICh2c2V0YWNjLCBlbGFjYykgKHZzZXQsIGVsKSAtPlxyXG4gICAgICAgICAgbGV0IHZlcnRpY2VzID0gU2V0LnVuaW9uIHZzZXRhY2MgdnNldCBpblxyXG4gICAgICAgICAgbGV0IGVkZ2VfYmFzZSA9IGVsIEAgZWxhY2MgaW5cclxuICAgICAgICAgIGxldCBlZGdlcyA9IGpvaW5fc2V0cyA/c3ltbWV0cmljOmRpcmVjdGVkIHZzZXRhY2MgdnNldCBpblxyXG4gICAgICAgICAgdmVydGljZXMsIGVkZ2VzIEAgZWRnZV9iYXNlKVxyXG4gICAgICBpblxyXG4gICAgICBub2RlcywgZWRnZXNcclxuICAgIFxyXG4gICAgfCBCZWZvcmUgdGwgLT5cclxuICAgICAgbGV0IG5lbCA9IExpc3QubWFwIHRsIH5mOih0cmVlX3RvX2dyYXBoX3IpIGluXHJcbiAgICAgIGxldCBub2RlcywgZWRnZXMgPSBMaXN0LmZvbGQgbmVsIH5pbml0OihTZXQuZW1wdHkgKG1vZHVsZSBHcmFwaC5WZXJ0ZXgpLCBbXSlcclxuICAgICAgICB+ZjooZnVuICh2c2V0YWNjLCBlbGFjYykgKHZzZXQsIGVsKSAtPlxyXG4gICAgICAgICAgbGV0IHZlcnRpY2VzID0gU2V0LnVuaW9uIHZzZXRhY2MgdnNldCBpblxyXG4gICAgICAgICAgbGV0IGVkZ2VfYmFzZSA9IGVsIEAgZWxhY2MgaW5cclxuICAgICAgICAgIGxldCBlZGdlcyA9IGpvaW5fc2V0cyB+c3ltbWV0cmljOmZhbHNlIHZzZXQgdnNldGFjYyBpblxyXG4gICAgICAgICAgdmVydGljZXMsIGVkZ2VzIEAgZWRnZV9iYXNlKVxyXG4gICAgICBpblxyXG4gICAgICBub2RlcywgZWRnZXNcclxuXHJcbiAgICB8IFByaW1lIChpZF9ncmFwaCwgdGwpIC0+XHJcbiAgICAgIGxldCB2ZXJ0aWNlcywgZWRnZXMsIGlkX21hcCA9IExpc3QuZm9sZCB0bCB+aW5pdDooU2V0LmVtcHR5IChtb2R1bGUgR3JhcGguVmVydGV4KSwgW10sIE1hcC5lbXB0eSAobW9kdWxlIEludCkpXHJcbiAgICAgICAgfmY6KGZ1biAodnNldCwgZWwsIG1hcCkgdCAtPlxyXG4gICAgICAgICAgbGV0IG5vZGVzLCBlZGdlcyA9IHRyZWVfdG9fZ3JhcGhfciB0IGluXHJcbiAgICAgICAgICBsZXQgbm1hcCA9IE1hcC5hZGRfZXhuIG1hcCB+a2V5OnQuaWQgfmRhdGE6bm9kZXMgaW5cclxuICAgICAgICAgIChTZXQudW5pb24gdnNldCBub2RlcywgZWRnZXMgQCBlbCwgbm1hcCkpXHJcbiAgICAgIGluXHJcbiAgICAgIGxldCBuZXdfZWRnZXMgPSBMaXN0LmZvbGQgaWRfZ3JhcGguZWRnZXMgfmluaXQ6KFtdKVxyXG4gICAgICAgIH5mOihmdW4gZWwgKGlkMSwgaWQyKSAtPlxyXG4gICAgICAgICAgbGV0IG5ld19lZGdlcyA9IGpvaW5fc2V0c1xyXG4gICAgICAgICAgICAoR3JhcGguZmluZF9vcl9lbXB0eSBpZF9tYXAgaWQxKVxyXG4gICAgICAgICAgICAoR3JhcGguZmluZF9vcl9lbXB0eSBpZF9tYXAgaWQyKVxyXG4gICAgICAgICAgaW5cclxuICAgICAgICAgIG5ld19lZGdlcyBAIGVsKVxyXG4gICAgICBpblxyXG4gICAgICB2ZXJ0aWNlcywgbmV3X2VkZ2VzIEAgZWRnZXNcclxuICBpblxyXG4gIGxldCB2ZXJ0aWNlcywgZWRnZXMgPSB0cmVlX3RvX2dyYXBoX3IgdHJlZSBpblxyXG4gIGxldCBlZGdlcywgZWRnZXNfZnJvbSA9IEdyYXBoLmVkZ2VfbWFwcyA/ZGlyZWN0ZWQgZWRnZXMgaW5cclxuICB7R3JhcGgubm9kZXMgPSB2ZXJ0aWNlczsgZWRnZXMgPSBlZGdlczsgZWRnZXNfZnJvbSA9IGVkZ2VzX2Zyb219Iiwib3BlbiBHcmFwaFxyXG5vcGVuIEJhc2Vcclxub3BlbiBZb2pzb24uQmFzaWMuVXRpbFxyXG5cclxubGV0IHRvX3ZlcnRleCBqc19vYmogPVxyXG4gIGxldCBpZCA9IGpzX29iaiB8PiBtZW1iZXIgXCJpZFwiIHw+IHRvX2ludCBpblxyXG4gIGxldCBsYWJlbCA9IGpzX29iaiB8PiBtZW1iZXIgXCJsYWJlbFwiIHw+IHRvX3N0cmluZyBpblxyXG4gIGxldCBwb2xhcmlzYXRpb24gPSBqc19vYmogfD4gbWVtYmVyIFwicG9sYXJpc2F0aW9uXCIgfD4gdG9fYm9vbCBpblxyXG4gIGxldCBhdG9tID0gQXRvbSB7bGFiZWw9bGFiZWw7IHBvbD1wb2xhcmlzYXRpb259IGluXHJcbiAge2Nvbm5lY3RpdmU9YXRvbTsgaWQ9aWR9XHJcblxyXG5sZXQgdG9fbm9kZXMganNfb2JqID1cclxuICBsZXQganNvbl9saXN0ID0gdG9fbGlzdCBqc19vYmogaW5cclxuICBsZXQgdmVydGV4X2xpc3QgPSBMaXN0Lm1hcCBqc29uX2xpc3QgfmY6dG9fdmVydGV4IGluXHJcbiAgU2V0Lm9mX2xpc3QgKG1vZHVsZSBWZXJ0ZXgpIHZlcnRleF9saXN0XHJcblxyXG5sZXQgdG9faWRfdHVwbGUganNfb2JqID1cclxuICBsZXQgc3JjID0ganNfb2JqIHw+IG1lbWJlciBcInNvdXJjZVwiIHw+IHRvX2ludCBpblxyXG4gIGxldCBkZXN0ID0ganNfb2JqIHw+IG1lbWJlciBcInRhcmdldFwiIHw+IHRvX2ludCBpblxyXG4gIChzcmMsIGRlc3QpXHJcblxyXG5sZXQgdG9faWRfbGlzdCBqc19vYmogPVxyXG4gIHRvX2xpc3QganNfb2JqIHw+IExpc3QubWFwIH5mOnRvX2lkX3R1cGxlXHJcblxyXG5sZXQgdG9fYXNzb2NfbGlzdCBpZF9saXN0IG5vZGVzID1cclxuICBsZXQgbWFwID0gaWRfbWFwIG5vZGVzIGluXHJcbiAgTGlzdC5tYXAgaWRfbGlzdFxyXG4gICAgfmY6KGZ1biAoc3JjLCBkZXN0KSAtPlxyXG4gICAgICAoTWFwLmZpbmRfZXhuIG1hcCBzcmMsIE1hcC5maW5kX2V4biBtYXAgZGVzdCkpXHJcblxyXG5sZXQgZXF1YWxfaW50X3R1cGxlICh0MTEsIHQxMikgKHQyMSwgdDIyKSA9XHJcbiAgKHQxMSA9IHQyMSAmJiB0MTIgPSB0MjIpXHJcbiAgfHxcclxuICAodDExID0gdDIyICYmIHQxMiA9IHQyMSlcclxuXHJcbmxldCB0b19lZGdlX21hcHMgP2RpcmVjdGVkIG5vZGVzIGpzX29iaiA9IFxyXG4gIGxldCBpZF9saXN0ID0gdG9faWRfbGlzdCBqc19vYmogaW5cclxuICBsZXQgdmVydGV4X2Fzc29jID0gdG9fYXNzb2NfbGlzdCBpZF9saXN0IG5vZGVzIGluXHJcbiAgR3JhcGguZWRnZV9tYXBzID9kaXJlY3RlZDpkaXJlY3RlZCB2ZXJ0ZXhfYXNzb2NcclxuXHJcbmxldCBwYXJzZSA/ZGlyZWN0ZWQganNfb2JqID1cclxuICBsZXQgbm9kZXMgPSBqc19vYmogfD4gbWVtYmVyIFwibm9kZXNcIiB8PiB0b19ub2RlcyBpblxyXG4gIGxldCBlZGdlcywgZWRnZXNfZnJvbSA9IGpzX29iaiB8PiBtZW1iZXIgXCJlZGdlc1wiIHw+IHRvX2VkZ2VfbWFwcyA/ZGlyZWN0ZWQ6ZGlyZWN0ZWQgbm9kZXMgaW5cclxuICBsZXQgbWF4X2lkID0gXHJcbiAgICBsZXQgaWRzID0gTGlzdC5tYXAgKFNldC5lbGVtZW50cyBub2RlcykgfmY6KGZ1biB2IC0+IHYuaWQpIGluXHJcbiAgICBtYXRjaCBMaXN0Lm1heF9lbHQgaWRzIH5jb21wYXJlOkludC5jb21wYXJlIHdpdGhcclxuICAgIHwgTm9uZSAtPiAwXHJcbiAgICB8IFNvbWUgbiAtPiBuIFxyXG4gIGluXHJcbiAgKHtub2Rlcz1ub2RlczsgZWRnZXM9ZWRnZXM7IGVkZ2VzX2Zyb209ZWRnZXNfZnJvbX0sXHJcbiAgIHt0b3RhbF92ZXJ0aWNlcyA9IG1heF9pZDsgaWRfbWFwID0gSGFzaHRibC5jcmVhdGUgKG1vZHVsZSBJbnQpfSlcclxuXHJcbmxldCBmcm9tX3ZlcnRleCB2ZXJ0ZXggPVxyXG4gIGxldCBpZCA9IGBJbnQgdmVydGV4LmlkIGluXHJcbiAgbGV0IGxhYmVsLCBwb2wgPSBcclxuICAgIG1hdGNoIHZlcnRleC5jb25uZWN0aXZlIHdpdGhcclxuICAgIHwgQXRvbSBhdG9tIC0+XHJcbiAgICAgIChgU3RyaW5nIGF0b20ubGFiZWwsIGBCb29sIGF0b20ucG9sKVxyXG4gICAgfCBfIC0+IGZhaWx3aXRoIFwiVHJpZWQgdG8gc2VyaWFsaXplIG5vbi1hdG9taWMgZ3JhcGhcIlxyXG4gICAgaW5cclxuICAgIGBBc3NvYyBbXHJcbiAgICAgIChcImlkXCIsIGlkKTtcclxuICAgICAgKFwibGFiZWxcIiwgbGFiZWwpO1xyXG4gICAgICAoXCJwb2xhcmlzYXRpb25cIiwgcG9sKVxyXG4gICAgXVxyXG5cclxubGV0IGZyb21fbm9kZXMgdnNldCA9XHJcbiAgbGV0IG5vZGVfbGlzdCA9IFNldC5lbGVtZW50cyB2c2V0IGluXHJcbiAgbGV0IGpzb25fbGlzdCA9IExpc3QubWFwIG5vZGVfbGlzdCB+Zjpmcm9tX3ZlcnRleCBpblxyXG4gIGBMaXN0IGpzb25fbGlzdFxyXG5cclxubGV0IGZyb21faWRfdHVwbGUgKGlkMSwgaWQyKSA9XHJcbiAgbGV0IHNvdXJjZSA9IGBJbnQgaWQxIGluXHJcbiAgbGV0IHRhcmdldCA9IGBJbnQgaWQyIGluXHJcbiAgYEFzc29jIFtcclxuICAgIChcInNvdXJjZVwiLCBzb3VyY2UpO1xyXG4gICAgKFwidGFyZ2V0XCIsIHRhcmdldClcclxuICBdXHJcblxyXG5sZXQgZnJvbV9lZGdlcyBlZGdlX21hcCA9XHJcbiAgbGV0IGVkZ2VfbGlzdCA9IGVkZ2VfdHVwbGVfbGlzdCBlZGdlX21hcCBpblxyXG4gIGxldCBpZF9saXN0ID0gXHJcbiAgICBMaXN0Lm1hcCBlZGdlX2xpc3RcclxuICAgICAgfmY6KGZ1biAodjEsIHYyKSAtPiAodjEuaWQsIHYyLmlkKSlcclxuICBpblxyXG4gIGxldCBqc29uX2xpc3QgPSBMaXN0Lm1hcCBpZF9saXN0IH5mOmZyb21faWRfdHVwbGUgaW5cclxuICBqc29uX2xpc3RcclxuXHJcbmxldCBzZXJpYWxpemVfZ3JhcGggP2RpcmVjdGVkIGdyYXBoID1cclxuICBsZXQgbm9kZXMgPSBmcm9tX25vZGVzIGdyYXBoLm5vZGVzIGluXHJcbiAgbGV0IGVkZ2VzID0gbWF0Y2ggZGlyZWN0ZWQgd2l0aFxyXG4gICAgfCBOb25lIC0+IGBMaXN0IChmcm9tX2VkZ2VzIGdyYXBoLmVkZ2VzKVxyXG4gICAgfCBTb21lIGJvb2wgLT5cclxuICAgICAgaWYgYm9vbCB0aGVuXHJcbiAgICAgICAgYExpc3QgKChmcm9tX2VkZ2VzIGdyYXBoLmVkZ2VzKSBAIGZyb21fZWRnZXMgZ3JhcGguZWRnZXNfZnJvbSlcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGBMaXN0IChmcm9tX2VkZ2VzIGdyYXBoLmVkZ2VzKVxyXG4gIGluXHJcbiAgYEFzc29jIFtcclxuICAgIChcIm5vZGVzXCIsIG5vZGVzKTtcclxuICAgIChcImVkZ2VzXCIsIGVkZ2VzKVxyXG4gIF1cclxuXHJcbmxldCBmcm9tX2Nvbm5lY3RpdmUgY29ubmVjdGl2ZSA9XHJcbiAgbWF0Y2ggY29ubmVjdGl2ZSB3aXRoXHJcbiAgfCBUcmVlLkF0b20gXyAtPiBgU3RyaW5nIFwiYXRvbVwiLCBOb25lXHJcbiAgfCBUcmVlLlRlbnNvciBfIC0+IGBTdHJpbmcgXCJ0ZW5zb3JcIiwgTm9uZVxyXG4gIHwgVHJlZS5QYXIgXyAtPiBgU3RyaW5nIFwicGFyXCIsIE5vbmVcclxuICB8IFRyZWUuQmVmb3JlIF8gLT4gYFN0cmluZyBcImJlZm9yZVwiLCBOb25lXHJcbiAgfCBUcmVlLlByaW1lIChpZF9ncmFwaCwgXykgLT4gYFN0cmluZyBcInByaW1lXCIsIFNvbWUgaWRfZ3JhcGhcclxuXHJcbmxldCBmcm9tX2lkX2dyYXBoIChpZF9ncmFwaCA6IFRyZWUuaWRfZ3JhcGgpID1cclxuICBsZXQgbm9kZXMgPSBMaXN0Lm1hcCBpZF9ncmFwaC5ub2RlcyB+ZjooZnVuIG4gLT4gYEludCBuKSBpblxyXG4gIGxldCBub2Rlc19qc29uID0gYExpc3Qgbm9kZXMgaW5cclxuICBsZXQgZWRnZXMgPSBMaXN0Lm1hcCBpZF9ncmFwaC5lZGdlc1xyXG4gICAgfmY6KGZ1biAobjEsbjIpIC0+IGBBc3NvYyBbKFwic291cmNlXCIsIGBJbnQgbjEpOyAoXCJ0YXJnZXRcIiwgYEludCBuMildKVxyXG4gIGluXHJcbiAgbGV0IGVkZ2VzX2pzb24gPSBgTGlzdCBlZGdlcyBpblxyXG4gIGBBc3NvYyBbKFwibm9kZXNcIiwgbm9kZXNfanNvbik7IChcImVkZ2VzXCIsIGVkZ2VzX2pzb24pXVxyXG5cclxubGV0IHJlYyBzZXJpYWxpemVkX25vZGVzX2FuZF9lZGdlcyAodHJlZSA6IFRyZWUudHJlZSkgPVxyXG4gIGxldCBjb25uZWN0aXZlLCBpZF9ncmFwaCA9IGZyb21fY29ubmVjdGl2ZSB0cmVlLmNvbm5lY3RpdmUgaW5cclxuICBsZXQgaWQgPSBgSW50IHRyZWUuaWQgaW5cclxuICBsZXQgc3VjY2Vzc29ycyA9IFRyZWUuc3VjY2Vzc29ycyB0cmVlIGluXHJcbiAgbGV0IG5vZGVfYmFzZSA9IFsoXCJjb25uZWN0aXZlXCIsIGNvbm5lY3RpdmUpOyAoXCJpZFwiLCBpZCldIGluXHJcbiAgbGV0IG5ld19ub2RlID0gXHJcbiAgICBtYXRjaCBpZF9ncmFwaCB3aXRoXHJcbiAgICAgIHwgTm9uZSAtPiBgQXNzb2Mgbm9kZV9iYXNlXHJcbiAgICAgIHwgU29tZSBpZF9ncmFwaCAtPiBgQXNzb2MgKFxyXG4gICAgICAgIChcImdyYXBoXCIsIChmcm9tX2lkX2dyYXBoIGlkX2dyYXBoKSkgOjogbm9kZV9iYXNlKVxyXG4gIGluXHJcbiAgbWF0Y2ggc3VjY2Vzc29ycyB3aXRoXHJcbiAgfCBbXSAtPiAgKFtuZXdfbm9kZV0sIFtdKVxyXG4gIHwgbCAtPiBcclxuICAgIGxldCBub2RlcywgZWRnZXMgPSBMaXN0Lm1hcCBsIH5mOnNlcmlhbGl6ZWRfbm9kZXNfYW5kX2VkZ2VzIHw+IFN0ZGxpYi5MaXN0LnNwbGl0IGluXHJcbiAgICBsZXQgbm9kZSA9IG5ld19ub2RlIDo6IChMaXN0LmNvbmNhdCBub2RlcykgaW5cclxuICAgIGxldCBuZXdfZWRnZXMgPSBMaXN0Lm1hcCBzdWNjZXNzb3JzXHJcbiAgICAgIH5mOihmdW4gKHQgOiBUcmVlLnRyZWUpIC0+XHJcbiAgICAgICAgYEFzc29jIFsoXCJzb3VyY2VcIiwgaWQpOyAoXCJ0YXJnZXRcIiwgYEludCB0LmlkKV0pXHJcbiAgICBpblxyXG4gICAgbGV0IGVkZ2UgPSBuZXdfZWRnZXMgQCBMaXN0LmNvbmNhdCBlZGdlcyBpblxyXG4gICAgbm9kZSwgZWRnZVxyXG5cclxubGV0IHNlcmlhbGl6ZV90cmVlX2FzX2dyYXBoICh0cmVlIDogVHJlZS50cmVlKSA9XHJcbiAgbGV0IG5vZGVzLCBlZGdlcyA9IHNlcmlhbGl6ZWRfbm9kZXNfYW5kX2VkZ2VzIHRyZWUgaW5cclxuICBsZXQganNvbl9ub2RlcyA9IGBMaXN0IG5vZGVzIGluXHJcbiAgbGV0IGpzb25fZWRnZXMgPSBgTGlzdCBlZGdlcyBpblxyXG4gIGBBc3NvYyBbKFwibm9kZXNcIiwganNvbl9ub2Rlcyk7IChcImVkZ2VzXCIsIGpzb25fZWRnZXMpXVxyXG5cclxubGV0IHJlYyBzZXJpYWxpemVfdHJlZSAodHJlZSA6IFRyZWUudHJlZSkgOiBZb2pzb24uQmFzaWMudCA9XHJcbiAgbGV0IGlkID0gYEludCB0cmVlLmlkIGluXHJcbiAgbGV0IGNvbm5lY3RpdmUsIGlkX2dyYXBoID0gZnJvbV9jb25uZWN0aXZlIHRyZWUuY29ubmVjdGl2ZSBpblxyXG4gIGxldCBub2RlX2Jhc2UgPSBbKFwiY29ubmVjdGl2ZVwiLCBjb25uZWN0aXZlKTsgKFwiaWRcIiwgaWQpXSBpblxyXG4gIGxldCBub2RlID1cclxuICAgIG1hdGNoIGlkX2dyYXBoIHdpdGhcclxuICAgIHwgTm9uZSAtPiBgQXNzb2Mgbm9kZV9iYXNlXHJcbiAgICB8IFNvbWUgZ3JhcGggLT4gYEFzc29jICgoXCJncmFwaFwiLCBmcm9tX2lkX2dyYXBoIGdyYXBoKSA6OiBub2RlX2Jhc2UpXHJcbiAgaW5cclxuICBsZXQgc3VjY2Vzc29ycyA9IExpc3QubWFwIChUcmVlLnN1Y2Nlc3NvcnMgdHJlZSkgfmY6c2VyaWFsaXplX3RyZWUgaW5cclxuICBgQXNzb2MgW1xyXG4gICAgKFwibm9kZVwiLCBub2RlKTtcclxuICAgIChcInN1Y2Nlc3NvcnNcIiwgYExpc3Qgc3VjY2Vzc29ycylcclxuICBdIl19
