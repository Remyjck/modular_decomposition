(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_get_2=runtime.caml_ba_get_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_layout=runtime.caml_ba_layout,
     caml_check_bound=runtime.caml_check_bound,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy;
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Base_quickcheck_Observer_o=
      caml_string_of_jsbytes("Base_quickcheck.Observer.observe: size < 0"),
     cst_Float_uniform_exclusive_bo=
      caml_string_of_jsbytes("Float.uniform_exclusive: bounds are not finite"),
     cst_Float_uniform_exclusive_re=
      caml_string_of_jsbytes
       ("Float.uniform_exclusive: requested range is empty"),
     cst_Base_quickcheck_Generator_$5=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.weighted_recursive_union: lists must be non-empty"),
     cst_Base_quickcheck_Generator_$2=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: weight is not finite"),
     cst_Base_quickcheck_Generator_$3=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: weight is negative"),
     cst_Base_quickcheck_Generator_$1=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: empty list"),
     cst_Base_quickcheck_Generator_$4=
      caml_string_of_jsbytes
       ("Base_quickcheck.Generator.of_weighted_list: total weight is zero"),
     cst_Base_quickcheck_Generator_$0=
      caml_string_of_jsbytes("Base_quickcheck.Generator.of_list: empty list"),
     cst_Base_quickcheck_Generator_=
      caml_string_of_jsbytes("Base_quickcheck.Generator.generate: size < 0"),
     cst_dim2=caml_string_of_jsbytes("dim2"),
     cst_dim1=caml_string_of_jsbytes("dim1"),
     cst_Base_quickcheck_Test_run_t=
      caml_string_of_jsbytes("Base_quickcheck.Test.run: test failed"),
     cst_Base_quickcheck_Test_run_i=
      caml_string_of_jsbytes
       ("Base_quickcheck.Test.run: insufficient size values for test count"),
     cst=caml_string_of_jsbytes("..."),
     names=
      [0,
       caml_string_of_jsbytes("seed"),
       [0,
        caml_string_of_jsbytes("test_count"),
        [0,
         caml_string_of_jsbytes("shrink_count"),
         [0,caml_string_of_jsbytes("sizes"),0]]]],
     cst_sizes=caml_string_of_jsbytes("sizes"),
     cst_shrink_count=caml_string_of_jsbytes("shrink_count"),
     cst_test_count=caml_string_of_jsbytes("test_count"),
     cst_seed=caml_string_of_jsbytes("seed"),
     Base=global_data.Base,
     Base_Array=global_data.Base__Array,
     Stdlib_Bigarray=global_data.Stdlib__Bigarray,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Set=global_data.Base__Set,
     Base_Map=global_data.Base__Map,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     Splittable_random=global_data.Splittable_random,
     Base_Float=global_data.Base__Float,
     Base_Int=global_data.Base__Int,
     Base_Int63=global_data.Base__Int63,
     Base_Char=global_data.Base__Char,
     Base_Either=global_data.Base__Either,
     Base_Option=global_data.Base__Option,
     Assert_failure=global_data.Assert_failure,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Error=global_data.Base__Error,
     Base_Hash=global_data.Base__Hash,
     Base_Staged=global_data.Base__Staged,
     Base_Applicative=global_data.Base__Applicative,
     Base_Monad=global_data.Base__Monad,
     Base_Int32=global_data.Base__Int32,
     Base_Int64=global_data.Base__Int64,
     Base_Nativeint=global_data.Base__Nativeint,
     Base_Sequence=global_data.Base__Sequence,
     Base_Field=global_data.Base__Field,
     Base_Backtrace=global_data.Base__Backtrace,
     Base_Or_error=global_data.Base__Or_error,
     Base_Random=global_data.Base__Random,
     Base_Bool=global_data.Base__Bool,
     Base_quickcheck=[0];
    caml_register_global(80,Base_quickcheck,"Base_quickcheck__");
    var Base_quickcheck_With_basic_typ=[0];
    caml_register_global
     (81,Base_quickcheck_With_basic_typ,"Base_quickcheck__With_basic_types");
    var
     _c_=[0,caml_string_of_jsbytes("size")],
     _$_=[0,0,0],
     _W_=[0,caml_string_of_jsbytes("upper_bound")],
     _X_=[0,caml_string_of_jsbytes("lower_bound")],
     _Y_=[0,caml_string_of_jsbytes("upper_bound")],
     _Z_=[0,caml_string_of_jsbytes("lower_bound")],
     _p_=[0,0],
     _o_=[0,1],
     _n_=[0,caml_string_of_jsbytes("src/generator.ml"),198,4],
     _m_=[0,caml_string_of_jsbytes("src/generator.ml"),225,6],
     _l_=[0,caml_string_of_jsbytes("src/generator.ml"),160,14],
     _j_=[0,caml_string_of_jsbytes("weight")],
     _k_=[0,caml_string_of_jsbytes("weight")],
     _d_=[0,caml_string_of_jsbytes("size")],
     _aC_=[0,0],
     _aD_=[0,caml_string_of_jsbytes("error")],
     _aE_=[0,caml_string_of_jsbytes("input")],
     _aA_=[0,0],
     _aB_=[0,0],
     _ay_=[0,caml_string_of_jsbytes("number_of_size_values")],
     _az_=[0,caml_string_of_jsbytes("test_count")],
     _aq_=[0,caml_string_of_jsbytes("sizes")],
     _ar_=[0,caml_string_of_jsbytes("shrink_count")],
     _as_=[0,caml_string_of_jsbytes("test_count")],
     _at_=[0,caml_string_of_jsbytes("seed")],
     _ag_=[0,caml_string_of_jsbytes("Deterministic")],
     _ah_=[0,caml_string_of_jsbytes("Nondeterministic")],
     _au_=[0,104758188],
     _av_=[0,104758188],
     _ax_=[0,caml_string_of_jsbytes("an arbitrary but deterministic string")],
     _aF_=[0,0];
    function offset(param){return param?1:0}
    var Layout=[0,offset];
    function iteri(t,f)
     {var
       _fp_=caml_ba_layout(t),
       offset=caml_call1(Layout[1],_fp_),
       _fr_=caml_ba_dim_1(t),
       _fs_=caml_call2(Base[181],_fr_,1),
       _fq_=0;
      if(! (_fs_ < 0))
       {var i=_fq_;
        for(;;)
         {var _ft_=caml_ba_get_1(t,caml_call2(Base[180],i,offset));
          caml_call2(f,caml_call2(Base[180],i,offset),_ft_);
          var _fu_=i + 1 | 0;
          if(_fs_ !== i){var i=_fu_;continue}
          break}}
      return 0}
    function init(kind,layout,dim,f)
     {var t=caml_call3(Stdlib_Bigarray[19][1],kind,layout,dim);
      iteri
       (t,
        function(i,param){return runtime.caml_ba_set_1(t,i,caml_call1(f,i))});
      return t}
    function fold(t,init,f)
     {var init$0=[0,init];
      iteri
       (t,
        function(i,param)
         {var _fo_=caml_ba_get_1(t,i);
          init$0[1] = caml_call2(f,init$0[1],_fo_);
          return 0});
      return init$0[1]}
    function to_array(t)
     {var _fl_=caml_ba_layout(t),offset=caml_call1(Layout[1],_fl_);
      function _fm_(i){return caml_ba_get_1(t,caml_call2(Base[180],i,offset))}
      var _fn_=caml_ba_dim_1(t);
      return caml_call2(Base_Array[27],_fn_,_fm_)}
    function sexp_of_t(sexp_of_elt,sexp_of_pack,sexp_of_layout,t)
     {var _fk_=to_array(t);return caml_call2(Base[91],sexp_of_elt,_fk_)}
    function hash_fold(hash_fold_elt,state,t)
     {var _fj_=caml_ba_dim_1(t),state$0=caml_call2(Base[117],state,_fj_);
      return fold(t,state$0,hash_fold_elt)}
    function iteri$0(t,f)
     {var
       _e9_=caml_ba_layout(t),
       offset=caml_call1(Layout[1],_e9_),
       _e$_=caml_ba_dim_1(t),
       _fa_=caml_call2(Base[181],_e$_,1),
       _e__=0;
      if(! (_fa_ < 0))
       {var i=_e__;
        for(;;)
         {var _fc_=caml_ba_dim_2(t),_fd_=caml_call2(Base[181],_fc_,1),_fb_=0;
          if(! (_fd_ < 0))
           {var j=_fb_;
            for(;;)
             {var
               _ff_=caml_call2(Base[180],j,offset),
               _fg_=caml_ba_get_2(t,caml_call2(Base[180],i,offset),_ff_),
               _fh_=caml_call2(Base[180],j,offset);
              caml_call3(f,caml_call2(Base[180],i,offset),_fh_,_fg_);
              var _fi_=j + 1 | 0;
              if(_fd_ !== j){var j=_fi_;continue}
              break}}
          var _fe_=i + 1 | 0;
          if(_fa_ !== i){var i=_fe_;continue}
          break}}
      return 0}
    function init$0(kind,layout,dim1,dim2,f)
     {var t=caml_call4(Stdlib_Bigarray[20][1],kind,layout,dim1,dim2);
      iteri$0
       (t,
        function(i,j,param)
         {return runtime.caml_ba_set_2(t,i,j,caml_call2(f,i,j))});
      return t}
    function fold$0(t,init,f)
     {var init$0=[0,init];
      iteri$0
       (t,
        function(param,_e8_,elt)
         {init$0[1] = caml_call2(f,init$0[1],elt);return 0});
      return init$0[1]}
    function to_array$0(t)
     {var _e2_=caml_ba_layout(t),offset=caml_call1(Layout[1],_e2_);
      function _e3_(i)
       {function _e5_(j)
         {var _e7_=caml_call2(Base[180],j,offset);
          return caml_ba_get_2(t,caml_call2(Base[180],i,offset),_e7_)}
        var _e6_=caml_ba_dim_2(t);
        return caml_call2(Base_Array[27],_e6_,_e5_)}
      var _e4_=caml_ba_dim_1(t);
      return caml_call2(Base_Array[27],_e4_,_e3_)}
    function sexp_of_t$0(sexp_of_elt,sexp_of_pack,sexp_of_layout,t)
     {var _e0_=to_array$0(t),_e1_=caml_call1(Base[91],sexp_of_elt);
      return caml_call2(Base[91],_e1_,_e0_)}
    function hash_fold$0(hash_fold_elt,state,t)
     {var
       _eY_=caml_ba_dim_1(t),
       state$0=caml_call2(Base[117],state,_eY_),
       _eZ_=caml_ba_dim_2(t),
       state$1=caml_call2(Base[117],state$0,_eZ_);
      return fold$0(t,state$1,hash_fold_elt)}
    var
     _a_=[0,sexp_of_t$0,init$0,iteri$0,fold$0,to_array$0,hash_fold$0],
     _b_=[0,sexp_of_t,init,iteri,fold,to_array,hash_fold],
     Base_quickcheck_Bigarray_helpe=[0,Layout,_b_,_a_];
    caml_register_global
     (85,Base_quickcheck_Bigarray_helpe,"Base_quickcheck__Bigarray_helpers");
    function create(f){return f}
    function observe(t,x,size,hash)
     {if(caml_call2(Base[199],size,0))
       {var
         _eW_=[0,[1,[0,_c_,[0,caml_call1(Base[120],size),0]]],0],
         _eX_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Observer_o),
            _eW_]];
        return caml_call1(Base[222],_eX_)}
      return caml_call3(t,x,size,hash)}
    function quickcheck_observer_unit(param,_eV_,hash){return hash}
    var include=[0,quickcheck_observer_unit,create,observe];
    caml_register_global(87,include,"Base_quickcheck__Observer0");
    function create$0(f){return caml_call1(Base_Staged[1],f)}
    function generate(t,size,random)
     {if(caml_call2(Base[199],size,0))
       {var
         _eT_=[0,[1,[0,_d_,[0,caml_call1(Base[120],size),0]]],0],
         _eU_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_),
            _eT_]];
        return caml_call1(Base[222],_eU_)}
      return caml_call3(Base_Staged[2],t,size,random)}
    var size=create$0(function(size,param){return size});
    function fn(dom,rng)
     {return create$0
              (function(size,random)
                {var random$0=caml_call1(Splittable_random[1][5],random);
                 return function(x)
                  {var
                    hash=observe(dom,x,size,caml_call1(Base_Hash[7],0)),
                    random=caml_call1(Splittable_random[1][4],random$0),
                    _eS_=caml_call1(Base_Hash[9],hash);
                   caml_call2(Splittable_random[1][3],random,_eS_);
                   return generate(rng,size,random)}})}
    function with_size(t,size)
     {return create$0(function(param,random){return generate(t,size,random)})}
    function perturb(t,salt)
     {return create$0
              (function(size,random)
                {caml_call2(Splittable_random[1][3],random,salt);
                 return generate(t,size,random)})}
    function filter_map(t,f)
     {function loop(size,random)
       {var size$0=size;
        for(;;)
         {var x=generate(t,size$0,random),match=caml_call1(f,x);
          if(match){var y=match[1];return y}
          var size$1=caml_call2(Base[180],size$0,1),size$0=size$1;
          continue}}
      return create$0(loop)}
    function filter(t,f)
     {return filter_map(t,function(x){return caml_call1(f,x)?[0,x]:0})}
    function return$0(x){return create$0(function(param,_eR_){return x})}
    function map(t,f)
     {return create$0
              (function(size,random)
                {return caml_call1(f,generate(t,size,random))})}
    function apply(tf,tx)
     {return create$0
              (function(size,random)
                {var f=generate(tf,size,random),x=generate(tx,size,random);
                 return caml_call1(f,x)})}
    function bind(t,f)
     {return create$0
              (function(size,random)
                {var x=generate(t,size,random);
                 return generate(caml_call1(f,x),size,random)})}
    function all(list)
     {return create$0
              (function(size,random)
                {function _eP_(_eQ_){return generate(_eQ_,size,random)}
                 return caml_call2(Base_List[74],list,_eP_)})}
    function all_unit(list)
     {return create$0
              (function(size,random)
                {function _eN_(_eO_){return generate(_eO_,size,random)}
                 return caml_call2(Base_List[9],list,_eN_)})}
    var
     map$0=[0,-198771759,map],
     For_applicative=caml_call1(Base_Applicative[5],[0,return$0,apply,map$0]),
     both=For_applicative[3],
     map2=For_applicative[9],
     map3=For_applicative[10],
     include$0=For_applicative[13],
     symbol=include$0[1],
     symbol$0=include$0[2],
     symbol$1=include$0[3],
     map$1=[0,-198771759,map],
     For_monad=caml_call1(Base_Monad[1],[0,bind,return$0,map$1]),
     _f_=For_monad[7],
     _g_=For_monad[3],
     _e_=For_monad[8],
     _h_=_g_[1],
     _i_=_g_[2];
    function of_list(list)
     {if(caml_call1(Base_List[8],list))
       {var
         _eL_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$0);
        caml_call1(Base_Error[27],_eL_)}
      var
       array=caml_call1(Base_Array[38],list),
       _eM_=caml_call1(Base_Array[8],array),
       hi=caml_call2(Base[181],_eM_,1),
       lo=0;
      return create$0
              (function(param,random)
                {var index=caml_call3(Splittable_random[3],random,lo,hi);
                 return caml_check_bound(array,index)[1 + index]})}
    function union(list){return caml_call1(_f_,of_list(list))}
    function of_weighted_list(alist)
     {if(caml_call1(Base_List[8],alist))
       {var
         _eC_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$1);
        caml_call1(Base_Error[27],_eC_)}
      var
       match=caml_call1(Base_List[90],alist),
       values=match[2],
       weights=match[1],
       value_array=caml_call1(Base_Array[38],values);
      function _eD_(param){return 0.}
      var
       _eE_=caml_call1(Base_Array[8],value_array),
       array=caml_call2(Base_Array[27],_eE_,_eD_);
      function _eF_(index,acc,weight)
       {if(1 - caml_call1(Base_Float[117],weight))
         {var
           _eH_=[0,[1,[0,_j_,[0,caml_call1(Base[113],weight),0]]],0],
           _eI_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$2),
              _eH_]];
          caml_call1(Base_Error[27],_eI_)}
        if(caml_call2(Base_Float[13],weight,0.))
         {var
           _eJ_=[0,[1,[0,_k_,[0,caml_call1(Base[113],weight),0]]],0],
           _eK_=
            [1,
             [0,
              caml_call1
               (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$3),
              _eJ_]];
          caml_call1(Base_Error[27],_eK_)}
        var cumulative=caml_call2(Base[211],acc,weight);
        runtime.caml_array_set(array,index,cumulative);
        return cumulative}
      var sum=caml_call3(Base_List[97],weights,0.,_eF_);
      if(caml_call2(Base_Float[10],sum,0.))
       {var
         _eG_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$4);
        caml_call1(Base_Error[27],_eG_)}
      return create$0
              (function(param,random)
                {var
                  choice=caml_call3(Splittable_random[8],random,0.,sum),
                  match=
                   caml_call6
                    (Base_Array[5],0,0,array,Base_Float[16],926943384,choice);
                 if(match)
                  {var index=match[1];
                   return caml_check_bound(value_array,index)[1 + index]}
                 throw [0,Assert_failure,_l_]})}
    function weighted_union(alist)
     {return caml_call1(_f_,of_weighted_list(alist))}
    function of_lazy(lazy_t)
     {return create$0
              (function(size,random)
                {var
                  _eA_=caml_obj_tag(lazy_t),
                  _eB_=
                   250 === _eA_
                    ?lazy_t[1]
                    :246 === _eA_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
                 return generate(_eB_,size,random)})}
    function fixed_point(of_generator)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_ez_){return caml_call1(of_generator,of_lazy(lazy_t))}]);
      var _ey_=caml_obj_tag(lazy_t);
      return 250 === _ey_
              ?lazy_t[1]
              :246 === _ey_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t}
    function weighted_recursive_union(nonrec_list,f)
     {return fixed_point
              (function(self)
                {function _er_(param)
                  {var t=param[2],w=param[1];
                   function _ex_(n)
                    {return with_size(t,caml_call2(Base[181],n,1))}
                   return [0,w,caml_call2(For_monad[11][4][2],size,_ex_)]}
                 var
                  _es_=caml_call1(f,self),
                  rec_list=caml_call2(Base_List[74],_es_,_er_),
                  _et_=caml_call1(Base_List[8],nonrec_list),
                  _eu_=_et_ || caml_call1(Base_List[8],rec_list);
                 if(_eu_)
                  {var
                    _ev_=
                     caml_call1
                      (Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Generator_$5);
                   caml_call1(Base[222],_ev_)}
                 var
                  nonrec_gen=weighted_union(nonrec_list),
                  rec_gen=
                   weighted_union(caml_call2(Base[179],nonrec_list,rec_list));
                 function _ew_(param){return 0 === param?nonrec_gen:rec_gen}
                 return caml_call2(For_monad[11][4][2],size,_ew_)})}
    function recursive_union(nonrec_list,f)
     {function weighted(list)
       {function _eq_(t){return [0,1.,t]}
        return caml_call2(Base_List[74],list,_eq_)}
      function _ep_(self){return weighted(caml_call1(f,self))}
      return weighted_recursive_union(weighted(nonrec_list),_ep_)}
    function sizes(opt,_ea_,param)
     {if(opt)var sth=opt[1],min_length=sth;else var min_length=0;
      if(_ea_)
       var sth$0=_ea_[1],max_length=sth$0;
      else
       var max_length=Base_Int[90];
      return create$0
              (function(size,random)
                {if(caml_call2(Base[200],min_length,max_length))
                  {var
                    upper_bound=caml_call2(Base[180],min_length,size),
                    max_length$0=
                     caml_call2(Base[204],upper_bound,min_length)
                      ?caml_call2(Base[210],max_length,upper_bound)
                      :max_length,
                    len=
                     caml_call3
                      (Splittable_random[10][1],random,min_length,max_length$0);
                   if(caml_call2(Base[202],len,0))return 0;
                   var
                    _eb_=function(param){return 0},
                    sizes=caml_call2(Base_Array[27],len,_eb_),
                    _ec_=caml_call2(Base[181],len,min_length),
                    remaining=caml_call2(Base[181],size,_ec_),
                    max_index=caml_call2(Base[181],len,1),
                    _ed_=1;
                   if(! (remaining < 1))
                    {var for$0=_ed_;
                     for(;;)
                      {var
                        index=
                         caml_call3(Splittable_random[10][1],random,0,max_index),
                        _el_=caml_check_bound(sizes,index)[1 + index],
                        _em_=caml_call2(Base[180],_el_,1);
                       caml_check_bound(sizes,index)[1 + index] = _em_;
                       var _en_=for$0 + 1 | 0;
                       if(remaining !== for$0){var for$0=_en_;continue}
                       break}}
                   var _ef_=caml_call2(Base[181],max_index,1),_ee_=0;
                   if(! (_ef_ < 0))
                    {var i=_ee_;
                     for(;;)
                      {var j=caml_call3(Splittable_random[3],random,i,max_index);
                       caml_call3(Base_Array[72],sizes,i,j);
                       var _ek_=i + 1 | 0;
                       if(_ef_ !== i){var i=_ek_;continue}
                       break}}
                   var
                    _eg_=caml_call2(Base[181],len,min_length),
                    _eh_=function(_eo_){return _eo_},
                    _ei_=
                     caml_call3
                      (Base_Array[17],[0,Base_Int[44],Base_Int[47]],sizes,_eh_),
                    _ej_=caml_call2(Base[180],_ei_,_eg_);
                   if(caml_call2(Base[202],_ej_,size))
                    return caml_call1(Base_Array[20],sizes);
                   throw [0,Assert_failure,_m_]}
                 throw [0,Assert_failure,_n_]})}
    var
     quickcheck_generator_unit=caml_call1(For_monad[11][1],0),
     quickcheck_generator_bool=
      create$0
       (function(param,random){return caml_call1(Splittable_random[2],random)});
    function quickcheck_generator_option(value_t)
     {var _d$_=[0,map(value_t,Base_Option[29]),0];
      return union([0,caml_call1(For_monad[11][1],0),_d$_])}
    function either(fst_t,snd_t)
     {var _d__=[0,map(snd_t,Base_Either[17]),0];
      return union([0,map(fst_t,Base_Either[16]),_d__])}
    function result(ok_t,err_t)
     {function _d9_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map(either(ok_t,err_t),_d9_)}
    function list_generic(min_length,max_length,elt_gen)
     {function _d6_(sizes)
       {function _d8_(size){return with_size(elt_gen,size)}
        return all(caml_call2(Base_List[74],sizes,_d8_))}
      var _d7_=sizes(min_length,max_length,0);
      return caml_call2(For_monad[11][4][2],_d7_,_d6_)}
    function quickcheck_generator_list(elt_gen)
     {return list_generic(0,0,elt_gen)}
    function list_non_empty(elt_gen){return list_generic(_o_,0,elt_gen)}
    function list_with_length(elt_gen,length)
     {return list_generic([0,length],[0,length],elt_gen)}
    function list_filtered(elts)
     {var
       elts$0=caml_call1(Base_Array[38],elts),
       length_of_input=caml_call1(Base_Array[8],elts$0);
      return create$0
              (function(param,random)
                {var
                  length_of_output=
                   caml_call3(Splittable_random[3],random,0,length_of_input);
                 function _dY_(_d5_){return _d5_}
                 var
                  indices=caml_call2(Base_Array[27],length_of_input,_dY_),
                  _d0_=caml_call2(Base[181],length_of_output,1),
                  _dZ_=0;
                 if(! (_d0_ < 0))
                  {var i=_dZ_;
                   for(;;)
                    {var
                      _d2_=caml_call2(Base[181],length_of_input,1),
                      j=caml_call3(Splittable_random[3],random,i,_d2_);
                     caml_call3(Base_Array[72],indices,i,j);
                     var _d3_=i + 1 | 0;
                     if(_d0_ !== i){var i=_d3_;continue}
                     break}}
                 caml_call4
                  (Base_Array[48],
                   _p_,
                   [0,length_of_output],
                   indices,
                   Base_Int[19]);
                 function _d1_(i)
                  {var _d4_=caml_check_bound(indices,i)[1 + i];
                   return caml_check_bound(elts$0,_d4_)[1 + _d4_]}
                 return caml_call2(Base_List[119],length_of_output,_d1_)})}
    function list_permutations(list)
     {return create$0
              (function(param,random)
                {var
                  array=caml_call1(Base_Array[38],list),
                  _dV_=caml_call1(Base_Array[8],array),
                  _dW_=caml_call2(Base[181],_dV_,1),
                  _dU_=1;
                 if(! (_dW_ < 1))
                  {var i=_dU_;
                   for(;;)
                    {var j=caml_call3(Splittable_random[3],random,0,i);
                     caml_call3(Base_Array[72],array,i,j);
                     var _dX_=i + 1 | 0;
                     if(_dW_ !== i){var i=_dX_;continue}
                     break}}
                 return caml_call1(Base_Array[20],array)})}
    function char_uniform_inclusive(lo,hi)
     {return create$0
              (function(param,random)
                {var
                  _dR_=caml_call1(Base_Char[31],hi),
                  _dS_=caml_call1(Base_Char[31],lo),
                  _dT_=caml_call3(Splittable_random[3],random,_dS_,_dR_);
                 return caml_call1(Base_Char[34],_dT_)})}
    var
     char_uppercase=char_uniform_inclusive(65,90),
     char_lowercase=char_uniform_inclusive(97,122),
     char_digit=char_uniform_inclusive(48,57),
     char_print_uniform=char_uniform_inclusive(32,126),
     char_uniform=char_uniform_inclusive(Base_Char[47],Base_Char[48]),
     char_alpha=union([0,char_lowercase,[0,char_uppercase,0]]),
     char_alphanum=
      weighted_union([0,[0,52.,char_alpha],[0,[0,10.,char_digit],0]]),
     char_whitespace=
      of_list(caml_call2(Base_List[53],Base_Char[1],Base_Char[44])),
     char_print=
      weighted_union
       ([0,[0,10.,char_alphanum],[0,[0,1.,char_print_uniform],0]]),
     _q_=[0,[0,1.,caml_call1(For_monad[11][1],Base_Char[48])],0],
     quickcheck_generator_char=
      weighted_union
       ([0,
         [0,100.,char_print],
         [0,
          [0,10.,char_uniform],
          [0,[0,1.,caml_call1(For_monad[11][1],Base_Char[47])],_q_]]]);
    function small_int(allow_zero)
     {return create$0
              (function(size,random)
                {var
                  lower_bound=allow_zero?0:1,
                  upper_bound=caml_call2(Base[180],size,1),
                  _dQ_=caml_call2(Base[181],upper_bound,lower_bound),
                  weighted_low=
                   caml_call3(Splittable_random[10][1],random,0,_dQ_),
                  weighted_high=caml_call2(Base[181],upper_bound,weighted_low);
                 return weighted_high})}
    var
     small_positive_or_zero_int=small_int(1),
     small_strictly_positive_int=small_int(0);
    function For_integer(Integer)
     {function uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[102],random,lo,hi)})}
      function log_uniform_inclusive(lo,hi)
       {return create$0
                (function(param,random)
                  {return caml_call3(Integer[103],random,lo,hi)})}
      function non_uniform(f,lo,hi)
       {var
         _dO_=[0,[0,0.9,caml_call2(f,lo,hi)],0],
         _dP_=[0,[0,0.05,caml_call1(For_monad[11][1],hi)],_dO_];
        return weighted_union
                ([0,[0,0.05,caml_call1(For_monad[11][1],lo)],_dP_])}
      function inclusive(_dM_,_dN_)
       {return non_uniform(uniform_inclusive,_dM_,_dN_)}
      function log_inclusive(_dK_,_dL_)
       {return non_uniform(log_uniform_inclusive,_dK_,_dL_)}
      var
       uniform_all=uniform_inclusive(Integer[91],Integer[90]),
       let_syntax_002=log_inclusive(Integer[44],Integer[90]);
      function _dI_(param)
       {var magnitude=param[2],negative=param[1];
        return negative?caml_call1(Integer[76],magnitude):magnitude}
      var
       _dJ_=
        caml_call2
         (For_monad[11][4][4],quickcheck_generator_bool,let_syntax_002),
       all=caml_call2(For_monad[11][4][3],_dJ_,_dI_);
      return [0,
              uniform_inclusive,
              log_uniform_inclusive,
              non_uniform,
              inclusive,
              log_inclusive,
              uniform_all,
              all]}
    var
     t_sexp_grammar=Base_Int[1],
     of_float=Base_Int[2],
     to_float=Base_Int[3],
     of_int_exn=Base_Int[4],
     to_int_exn=Base_Int[5],
     hash_fold_t=Base_Int[6],
     hash=Base_Int[7],
     t_of_sexp=Base_Int[8],
     sexp_of_t$1=Base_Int[9],
     of_string=Base_Int[10],
     to_string=Base_Int[11],
     symbol$2=Base_Int[12],
     symbol$3=Base_Int[13],
     symbol$4=Base_Int[14],
     symbol$5=Base_Int[15],
     symbol$6=Base_Int[16],
     symbol$7=Base_Int[17],
     equal=Base_Int[18],
     compare=Base_Int[19],
     min=Base_Int[20],
     max=Base_Int[21],
     ascending=Base_Int[22],
     descending=Base_Int[23],
     between=Base_Int[24],
     clamp_exn=Base_Int[25],
     clamp=Base_Int[26],
     comparator=Base_Int[27],
     validate_lbound=Base_Int[28],
     validate_ubound=Base_Int[29],
     validate_bound=Base_Int[30],
     pp=Base_Int[31],
     validate_positive=Base_Int[32],
     validate_non_negative=Base_Int[33],
     validate_negative=Base_Int[34],
     validate_non_positive=Base_Int[35],
     is_positive=Base_Int[36],
     is_non_negative=Base_Int[37],
     is_negative=Base_Int[38],
     is_non_positive=Base_Int[39],
     sign=Base_Int[40],
     invariant=Base_Int[41],
     Hex=Base_Int[42],
     to_string_hum=Base_Int[43],
     zero=Base_Int[44],
     one=Base_Int[45],
     minus_one=Base_Int[46],
     symbol$8=Base_Int[47],
     symbol$9=Base_Int[48],
     symbol$10=Base_Int[49],
     symbol$11=Base_Int[50],
     neg=Base_Int[51],
     symbol$12=Base_Int[52],
     symbol$13=Base_Int[53],
     symbol$14=Base_Int[54],
     symbol$15=Base_Int[55],
     rem=Base_Int[56],
     symbol$16=Base_Int[57],
     land=Base_Int[58],
     lor=Base_Int[59],
     lxor=Base_Int[60],
     lnot=Base_Int[61],
     lsl=Base_Int[62],
     asr=Base_Int[63],
     round=Base_Int[64],
     round_towards_zero=Base_Int[65],
     round_down=Base_Int[66],
     round_up=Base_Int[67],
     round_nearest=Base_Int[68],
     abs=Base_Int[69],
     succ=Base_Int[70],
     pred=Base_Int[71],
     pow=Base_Int[72],
     bit_and=Base_Int[73],
     bit_or=Base_Int[74],
     bit_xor=Base_Int[75],
     bit_not=Base_Int[76],
     popcount=Base_Int[77],
     shift_left=Base_Int[78],
     shift_right=Base_Int[79],
     decr=Base_Int[80],
     incr=Base_Int[81],
     of_int32_exn=Base_Int[82],
     to_int32_exn=Base_Int[83],
     of_int64_exn=Base_Int[84],
     to_int64=Base_Int[85],
     of_nativeint_exn=Base_Int[86],
     to_nativeint_exn=Base_Int[87],
     of_float_unchecked=Base_Int[88],
     num_bits=Base_Int[89],
     max_value=Base_Int[90],
     min_value=Base_Int[91],
     lsr=Base_Int[92],
     shift_right_logical=Base_Int[93],
     ceil_pow2=Base_Int[94],
     floor_pow2=Base_Int[95],
     ceil_log2=Base_Int[96],
     floor_log2=Base_Int[97],
     is_pow2=Base_Int[98],
     clz=Base_Int[99],
     ctz=Base_Int[100],
     O=Base_Int[101],
     uniform=Splittable_random[3],
     log_uniform=Splittable_random[10][1],
     For_int=
      For_integer
       ([0,
         t_sexp_grammar,
         of_float,
         to_float,
         of_int_exn,
         to_int_exn,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t$1,
         of_string,
         to_string,
         symbol$2,
         symbol$3,
         symbol$4,
         symbol$5,
         symbol$6,
         symbol$7,
         equal,
         compare,
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
         pp,
         validate_positive,
         validate_non_negative,
         validate_negative,
         validate_non_positive,
         is_positive,
         is_non_negative,
         is_negative,
         is_non_positive,
         sign,
         invariant,
         Hex,
         to_string_hum,
         zero,
         one,
         minus_one,
         symbol$8,
         symbol$9,
         symbol$10,
         symbol$11,
         neg,
         symbol$12,
         symbol$13,
         symbol$14,
         symbol$15,
         rem,
         symbol$16,
         land,
         lor,
         lxor,
         lnot,
         lsl,
         asr,
         round,
         round_towards_zero,
         round_down,
         round_up,
         round_nearest,
         abs,
         succ,
         pred,
         pow,
         bit_and,
         bit_or,
         bit_xor,
         bit_not,
         popcount,
         shift_left,
         shift_right,
         decr,
         incr,
         of_int32_exn,
         to_int32_exn,
         of_int64_exn,
         to_int64,
         of_nativeint_exn,
         to_nativeint_exn,
         of_float_unchecked,
         num_bits,
         max_value,
         min_value,
         lsr,
         shift_right_logical,
         ceil_pow2,
         floor_pow2,
         ceil_log2,
         floor_log2,
         is_pow2,
         clz,
         ctz,
         O,
         uniform,
         log_uniform]),
     quickcheck_generator_int=For_int[7],
     int_uniform=For_int[6],
     int_inclusive=For_int[4],
     int_uniform_inclusive=For_int[1],
     int_log_inclusive=For_int[5],
     int_log_uniform_inclusive=For_int[2],
     t_sexp_grammar$0=Base_Int32[1],
     of_float$0=Base_Int32[2],
     to_float$0=Base_Int32[3],
     of_int_exn$0=Base_Int32[4],
     to_int_exn$0=Base_Int32[5],
     hash_fold_t$0=Base_Int32[6],
     hash$0=Base_Int32[7],
     t_of_sexp$0=Base_Int32[8],
     sexp_of_t$2=Base_Int32[9],
     of_string$0=Base_Int32[10],
     to_string$0=Base_Int32[11],
     symbol$17=Base_Int32[12],
     symbol$18=Base_Int32[13],
     symbol$19=Base_Int32[14],
     symbol$20=Base_Int32[15],
     symbol$21=Base_Int32[16],
     symbol$22=Base_Int32[17],
     equal$0=Base_Int32[18],
     compare$0=Base_Int32[19],
     min$0=Base_Int32[20],
     max$0=Base_Int32[21],
     ascending$0=Base_Int32[22],
     descending$0=Base_Int32[23],
     between$0=Base_Int32[24],
     clamp_exn$0=Base_Int32[25],
     clamp$0=Base_Int32[26],
     comparator$0=Base_Int32[27],
     validate_lbound$0=Base_Int32[28],
     validate_ubound$0=Base_Int32[29],
     validate_bound$0=Base_Int32[30],
     pp$0=Base_Int32[31],
     validate_positive$0=Base_Int32[32],
     validate_non_negative$0=Base_Int32[33],
     validate_negative$0=Base_Int32[34],
     validate_non_positive$0=Base_Int32[35],
     is_positive$0=Base_Int32[36],
     is_non_negative$0=Base_Int32[37],
     is_negative$0=Base_Int32[38],
     is_non_positive$0=Base_Int32[39],
     sign$0=Base_Int32[40],
     invariant$0=Base_Int32[41],
     Hex$0=Base_Int32[42],
     to_string_hum$0=Base_Int32[43],
     zero$0=Base_Int32[44],
     one$0=Base_Int32[45],
     minus_one$0=Base_Int32[46],
     symbol$23=Base_Int32[47],
     symbol$24=Base_Int32[48],
     symbol$25=Base_Int32[49],
     symbol$26=Base_Int32[50],
     neg$0=Base_Int32[51],
     symbol$27=Base_Int32[52],
     symbol$28=Base_Int32[53],
     symbol$29=Base_Int32[54],
     symbol$30=Base_Int32[55],
     rem$0=Base_Int32[56],
     symbol$31=Base_Int32[57],
     land$0=Base_Int32[58],
     lor$0=Base_Int32[59],
     lxor$0=Base_Int32[60],
     lnot$0=Base_Int32[61],
     lsl$0=Base_Int32[62],
     asr$0=Base_Int32[63],
     round$0=Base_Int32[64],
     round_towards_zero$0=Base_Int32[65],
     round_down$0=Base_Int32[66],
     round_up$0=Base_Int32[67],
     round_nearest$0=Base_Int32[68],
     abs$0=Base_Int32[69],
     succ$0=Base_Int32[70],
     pred$0=Base_Int32[71],
     pow$0=Base_Int32[72],
     bit_and$0=Base_Int32[73],
     bit_or$0=Base_Int32[74],
     bit_xor$0=Base_Int32[75],
     bit_not$0=Base_Int32[76],
     popcount$0=Base_Int32[77],
     shift_left$0=Base_Int32[78],
     shift_right$0=Base_Int32[79],
     decr$0=Base_Int32[80],
     incr$0=Base_Int32[81],
     of_int32_exn$0=Base_Int32[82],
     to_int32_exn$0=Base_Int32[83],
     of_int64_exn$0=Base_Int32[84],
     to_int64$0=Base_Int32[85],
     of_nativeint_exn$0=Base_Int32[86],
     to_nativeint_exn$0=Base_Int32[87],
     of_float_unchecked$0=Base_Int32[88],
     num_bits$0=Base_Int32[89],
     max_value$0=Base_Int32[90],
     min_value$0=Base_Int32[91],
     lsr$0=Base_Int32[92],
     shift_right_logical$0=Base_Int32[93],
     ceil_pow2$0=Base_Int32[94],
     floor_pow2$0=Base_Int32[95],
     ceil_log2$0=Base_Int32[96],
     floor_log2$0=Base_Int32[97],
     is_pow2$0=Base_Int32[98],
     clz$0=Base_Int32[99],
     ctz$0=Base_Int32[100],
     O$0=Base_Int32[101],
     uniform$0=Splittable_random[4],
     log_uniform$0=Splittable_random[10][2],
     For_int32=
      For_integer
       ([0,
         t_sexp_grammar$0,
         of_float$0,
         to_float$0,
         of_int_exn$0,
         to_int_exn$0,
         hash_fold_t$0,
         hash$0,
         t_of_sexp$0,
         sexp_of_t$2,
         of_string$0,
         to_string$0,
         symbol$17,
         symbol$18,
         symbol$19,
         symbol$20,
         symbol$21,
         symbol$22,
         equal$0,
         compare$0,
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
         validate_bound$0,
         pp$0,
         validate_positive$0,
         validate_non_negative$0,
         validate_negative$0,
         validate_non_positive$0,
         is_positive$0,
         is_non_negative$0,
         is_negative$0,
         is_non_positive$0,
         sign$0,
         invariant$0,
         Hex$0,
         to_string_hum$0,
         zero$0,
         one$0,
         minus_one$0,
         symbol$23,
         symbol$24,
         symbol$25,
         symbol$26,
         neg$0,
         symbol$27,
         symbol$28,
         symbol$29,
         symbol$30,
         rem$0,
         symbol$31,
         land$0,
         lor$0,
         lxor$0,
         lnot$0,
         lsl$0,
         asr$0,
         round$0,
         round_towards_zero$0,
         round_down$0,
         round_up$0,
         round_nearest$0,
         abs$0,
         succ$0,
         pred$0,
         pow$0,
         bit_and$0,
         bit_or$0,
         bit_xor$0,
         bit_not$0,
         popcount$0,
         shift_left$0,
         shift_right$0,
         decr$0,
         incr$0,
         of_int32_exn$0,
         to_int32_exn$0,
         of_int64_exn$0,
         to_int64$0,
         of_nativeint_exn$0,
         to_nativeint_exn$0,
         of_float_unchecked$0,
         num_bits$0,
         max_value$0,
         min_value$0,
         lsr$0,
         shift_right_logical$0,
         ceil_pow2$0,
         floor_pow2$0,
         ceil_log2$0,
         floor_log2$0,
         is_pow2$0,
         clz$0,
         ctz$0,
         O$0,
         uniform$0,
         log_uniform$0]),
     quickcheck_generator_int32=For_int32[7],
     int32_uniform=For_int32[6],
     int32_inclusive=For_int32[4],
     int32_uniform_inclusive=For_int32[1],
     int32_log_inclusive=For_int32[5],
     int32_log_uniform_inclusive=For_int32[2],
     t_sexp_grammar$1=Base_Int63[1],
     of_float$1=Base_Int63[2],
     to_float$1=Base_Int63[3],
     of_int_exn$1=Base_Int63[4],
     to_int_exn$1=Base_Int63[5],
     hash_fold_t$1=Base_Int63[6],
     hash$1=Base_Int63[7],
     t_of_sexp$1=Base_Int63[8],
     sexp_of_t$3=Base_Int63[9],
     of_string$1=Base_Int63[10],
     to_string$1=Base_Int63[11],
     symbol$32=Base_Int63[12],
     symbol$33=Base_Int63[13],
     symbol$34=Base_Int63[14],
     symbol$35=Base_Int63[15],
     symbol$36=Base_Int63[16],
     symbol$37=Base_Int63[17],
     equal$1=Base_Int63[18],
     compare$1=Base_Int63[19],
     min$1=Base_Int63[20],
     max$1=Base_Int63[21],
     ascending$1=Base_Int63[22],
     descending$1=Base_Int63[23],
     between$1=Base_Int63[24],
     clamp_exn$1=Base_Int63[25],
     clamp$1=Base_Int63[26],
     comparator$1=Base_Int63[27],
     validate_lbound$1=Base_Int63[28],
     validate_ubound$1=Base_Int63[29],
     validate_bound$1=Base_Int63[30],
     pp$1=Base_Int63[31],
     validate_positive$1=Base_Int63[32],
     validate_non_negative$1=Base_Int63[33],
     validate_negative$1=Base_Int63[34],
     validate_non_positive$1=Base_Int63[35],
     is_positive$1=Base_Int63[36],
     is_non_negative$1=Base_Int63[37],
     is_negative$1=Base_Int63[38],
     is_non_positive$1=Base_Int63[39],
     sign$1=Base_Int63[40],
     invariant$1=Base_Int63[41],
     Hex$1=Base_Int63[42],
     to_string_hum$1=Base_Int63[43],
     zero$1=Base_Int63[44],
     one$1=Base_Int63[45],
     minus_one$1=Base_Int63[46],
     symbol$38=Base_Int63[47],
     symbol$39=Base_Int63[48],
     symbol$40=Base_Int63[49],
     symbol$41=Base_Int63[50],
     neg$1=Base_Int63[51],
     symbol$42=Base_Int63[52],
     symbol$43=Base_Int63[53],
     symbol$44=Base_Int63[54],
     symbol$45=Base_Int63[55],
     rem$1=Base_Int63[56],
     symbol$46=Base_Int63[57],
     land$1=Base_Int63[58],
     lor$1=Base_Int63[59],
     lxor$1=Base_Int63[60],
     lnot$1=Base_Int63[61],
     lsl$1=Base_Int63[62],
     asr$1=Base_Int63[63],
     round$1=Base_Int63[64],
     round_towards_zero$1=Base_Int63[65],
     round_down$1=Base_Int63[66],
     round_up$1=Base_Int63[67],
     round_nearest$1=Base_Int63[68],
     abs$1=Base_Int63[69],
     succ$1=Base_Int63[70],
     pred$1=Base_Int63[71],
     pow$1=Base_Int63[72],
     bit_and$1=Base_Int63[73],
     bit_or$1=Base_Int63[74],
     bit_xor$1=Base_Int63[75],
     bit_not$1=Base_Int63[76],
     popcount$1=Base_Int63[77],
     shift_left$1=Base_Int63[78],
     shift_right$1=Base_Int63[79],
     decr$1=Base_Int63[80],
     incr$1=Base_Int63[81],
     of_int32_exn$1=Base_Int63[82],
     to_int32_exn$1=Base_Int63[83],
     of_int64_exn$1=Base_Int63[84],
     to_int64$1=Base_Int63[85],
     of_nativeint_exn$1=Base_Int63[86],
     to_nativeint_exn$1=Base_Int63[87],
     of_float_unchecked$1=Base_Int63[88],
     num_bits$1=Base_Int63[89],
     max_value$1=Base_Int63[90],
     min_value$1=Base_Int63[91],
     lsr$1=Base_Int63[92],
     shift_right_logical$1=Base_Int63[93],
     ceil_pow2$1=Base_Int63[94],
     floor_pow2$1=Base_Int63[95],
     ceil_log2$1=Base_Int63[96],
     is_pow2$1=Base_Int63[97],
     clz$1=Base_Int63[98],
     ctz$1=Base_Int63[99],
     O$1=Base_Int63[100],
     floor_log2$1=Base_Int63[119],
     uniform$1=Splittable_random[5],
     log_uniform$1=Splittable_random[10][3],
     For_int63=
      For_integer
       ([0,
         t_sexp_grammar$1,
         of_float$1,
         to_float$1,
         of_int_exn$1,
         to_int_exn$1,
         hash_fold_t$1,
         hash$1,
         t_of_sexp$1,
         sexp_of_t$3,
         of_string$1,
         to_string$1,
         symbol$32,
         symbol$33,
         symbol$34,
         symbol$35,
         symbol$36,
         symbol$37,
         equal$1,
         compare$1,
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
         validate_bound$1,
         pp$1,
         validate_positive$1,
         validate_non_negative$1,
         validate_negative$1,
         validate_non_positive$1,
         is_positive$1,
         is_non_negative$1,
         is_negative$1,
         is_non_positive$1,
         sign$1,
         invariant$1,
         Hex$1,
         to_string_hum$1,
         zero$1,
         one$1,
         minus_one$1,
         symbol$38,
         symbol$39,
         symbol$40,
         symbol$41,
         neg$1,
         symbol$42,
         symbol$43,
         symbol$44,
         symbol$45,
         rem$1,
         symbol$46,
         land$1,
         lor$1,
         lxor$1,
         lnot$1,
         lsl$1,
         asr$1,
         round$1,
         round_towards_zero$1,
         round_down$1,
         round_up$1,
         round_nearest$1,
         abs$1,
         succ$1,
         pred$1,
         pow$1,
         bit_and$1,
         bit_or$1,
         bit_xor$1,
         bit_not$1,
         popcount$1,
         shift_left$1,
         shift_right$1,
         decr$1,
         incr$1,
         of_int32_exn$1,
         to_int32_exn$1,
         of_int64_exn$1,
         to_int64$1,
         of_nativeint_exn$1,
         to_nativeint_exn$1,
         of_float_unchecked$1,
         num_bits$1,
         max_value$1,
         min_value$1,
         lsr$1,
         shift_right_logical$1,
         ceil_pow2$1,
         floor_pow2$1,
         ceil_log2$1,
         floor_log2$1,
         is_pow2$1,
         clz$1,
         ctz$1,
         O$1,
         uniform$1,
         log_uniform$1]),
     int63=For_int63[7],
     int63_uniform=For_int63[6],
     int63_inclusive=For_int63[4],
     int63_uniform_inclusive=For_int63[1],
     int63_log_inclusive=For_int63[5],
     int63_log_uniform_inclusive=For_int63[2],
     t_sexp_grammar$2=Base_Int64[1],
     of_float$2=Base_Int64[2],
     to_float$2=Base_Int64[3],
     of_int_exn$2=Base_Int64[4],
     to_int_exn$2=Base_Int64[5],
     hash_fold_t$2=Base_Int64[6],
     hash$2=Base_Int64[7],
     t_of_sexp$2=Base_Int64[8],
     sexp_of_t$4=Base_Int64[9],
     of_string$2=Base_Int64[10],
     to_string$2=Base_Int64[11],
     symbol$47=Base_Int64[12],
     symbol$48=Base_Int64[13],
     symbol$49=Base_Int64[14],
     symbol$50=Base_Int64[15],
     symbol$51=Base_Int64[16],
     symbol$52=Base_Int64[17],
     equal$2=Base_Int64[18],
     compare$2=Base_Int64[19],
     min$2=Base_Int64[20],
     max$2=Base_Int64[21],
     ascending$2=Base_Int64[22],
     descending$2=Base_Int64[23],
     between$2=Base_Int64[24],
     clamp_exn$2=Base_Int64[25],
     clamp$2=Base_Int64[26],
     comparator$2=Base_Int64[27],
     validate_lbound$2=Base_Int64[28],
     validate_ubound$2=Base_Int64[29],
     validate_bound$2=Base_Int64[30],
     pp$2=Base_Int64[31],
     validate_positive$2=Base_Int64[32],
     validate_non_negative$2=Base_Int64[33],
     validate_negative$2=Base_Int64[34],
     validate_non_positive$2=Base_Int64[35],
     is_positive$2=Base_Int64[36],
     is_non_negative$2=Base_Int64[37],
     is_negative$2=Base_Int64[38],
     is_non_positive$2=Base_Int64[39],
     sign$2=Base_Int64[40],
     invariant$2=Base_Int64[41],
     Hex$2=Base_Int64[42],
     to_string_hum$2=Base_Int64[43],
     zero$2=Base_Int64[44],
     one$2=Base_Int64[45],
     minus_one$2=Base_Int64[46],
     symbol$53=Base_Int64[47],
     symbol$54=Base_Int64[48],
     symbol$55=Base_Int64[49],
     symbol$56=Base_Int64[50],
     neg$2=Base_Int64[51],
     symbol$57=Base_Int64[52],
     symbol$58=Base_Int64[53],
     symbol$59=Base_Int64[54],
     symbol$60=Base_Int64[55],
     rem$2=Base_Int64[56],
     symbol$61=Base_Int64[57],
     land$2=Base_Int64[58],
     lor$2=Base_Int64[59],
     lxor$2=Base_Int64[60],
     lnot$2=Base_Int64[61],
     lsl$2=Base_Int64[62],
     asr$2=Base_Int64[63],
     round$2=Base_Int64[64],
     round_towards_zero$2=Base_Int64[65],
     round_down$2=Base_Int64[66],
     round_up$2=Base_Int64[67],
     round_nearest$2=Base_Int64[68],
     abs$2=Base_Int64[69],
     succ$2=Base_Int64[70],
     pred$2=Base_Int64[71],
     pow$2=Base_Int64[72],
     bit_and$2=Base_Int64[73],
     bit_or$2=Base_Int64[74],
     bit_xor$2=Base_Int64[75],
     bit_not$2=Base_Int64[76],
     popcount$2=Base_Int64[77],
     shift_left$2=Base_Int64[78],
     shift_right$2=Base_Int64[79],
     decr$2=Base_Int64[80],
     incr$2=Base_Int64[81],
     of_int32_exn$2=Base_Int64[82],
     to_int32_exn$2=Base_Int64[83],
     of_int64_exn$2=Base_Int64[84],
     to_int64$2=Base_Int64[85],
     of_nativeint_exn$2=Base_Int64[86],
     to_nativeint_exn$2=Base_Int64[87],
     of_float_unchecked$2=Base_Int64[88],
     num_bits$2=Base_Int64[89],
     max_value$2=Base_Int64[90],
     min_value$2=Base_Int64[91],
     lsr$2=Base_Int64[92],
     shift_right_logical$2=Base_Int64[93],
     ceil_pow2$2=Base_Int64[94],
     floor_pow2$2=Base_Int64[95],
     ceil_log2$2=Base_Int64[96],
     floor_log2$2=Base_Int64[97],
     is_pow2$2=Base_Int64[98],
     clz$2=Base_Int64[99],
     ctz$2=Base_Int64[100],
     O$2=Base_Int64[101],
     uniform$2=Splittable_random[6],
     log_uniform$2=Splittable_random[10][4],
     For_int64=
      For_integer
       ([0,
         t_sexp_grammar$2,
         of_float$2,
         to_float$2,
         of_int_exn$2,
         to_int_exn$2,
         hash_fold_t$2,
         hash$2,
         t_of_sexp$2,
         sexp_of_t$4,
         of_string$2,
         to_string$2,
         symbol$47,
         symbol$48,
         symbol$49,
         symbol$50,
         symbol$51,
         symbol$52,
         equal$2,
         compare$2,
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
         validate_bound$2,
         pp$2,
         validate_positive$2,
         validate_non_negative$2,
         validate_negative$2,
         validate_non_positive$2,
         is_positive$2,
         is_non_negative$2,
         is_negative$2,
         is_non_positive$2,
         sign$2,
         invariant$2,
         Hex$2,
         to_string_hum$2,
         zero$2,
         one$2,
         minus_one$2,
         symbol$53,
         symbol$54,
         symbol$55,
         symbol$56,
         neg$2,
         symbol$57,
         symbol$58,
         symbol$59,
         symbol$60,
         rem$2,
         symbol$61,
         land$2,
         lor$2,
         lxor$2,
         lnot$2,
         lsl$2,
         asr$2,
         round$2,
         round_towards_zero$2,
         round_down$2,
         round_up$2,
         round_nearest$2,
         abs$2,
         succ$2,
         pred$2,
         pow$2,
         bit_and$2,
         bit_or$2,
         bit_xor$2,
         bit_not$2,
         popcount$2,
         shift_left$2,
         shift_right$2,
         decr$2,
         incr$2,
         of_int32_exn$2,
         to_int32_exn$2,
         of_int64_exn$2,
         to_int64$2,
         of_nativeint_exn$2,
         to_nativeint_exn$2,
         of_float_unchecked$2,
         num_bits$2,
         max_value$2,
         min_value$2,
         lsr$2,
         shift_right_logical$2,
         ceil_pow2$2,
         floor_pow2$2,
         ceil_log2$2,
         floor_log2$2,
         is_pow2$2,
         clz$2,
         ctz$2,
         O$2,
         uniform$2,
         log_uniform$2]),
     quickcheck_generator_int64=For_int64[7],
     int64_uniform=For_int64[6],
     int64_inclusive=For_int64[4],
     int64_uniform_inclusive=For_int64[1],
     int64_log_inclusive=For_int64[5],
     int64_log_uniform_inclusive=For_int64[2],
     t_sexp_grammar$3=Base_Nativeint[1],
     of_float$3=Base_Nativeint[2],
     to_float$3=Base_Nativeint[3],
     of_int_exn$3=Base_Nativeint[4],
     to_int_exn$3=Base_Nativeint[5],
     hash_fold_t$3=Base_Nativeint[6],
     hash$3=Base_Nativeint[7],
     t_of_sexp$3=Base_Nativeint[8],
     sexp_of_t$5=Base_Nativeint[9],
     of_string$3=Base_Nativeint[10],
     to_string$3=Base_Nativeint[11],
     symbol$62=Base_Nativeint[12],
     symbol$63=Base_Nativeint[13],
     symbol$64=Base_Nativeint[14],
     symbol$65=Base_Nativeint[15],
     symbol$66=Base_Nativeint[16],
     symbol$67=Base_Nativeint[17],
     equal$3=Base_Nativeint[18],
     compare$3=Base_Nativeint[19],
     min$3=Base_Nativeint[20],
     max$3=Base_Nativeint[21],
     ascending$3=Base_Nativeint[22],
     descending$3=Base_Nativeint[23],
     between$3=Base_Nativeint[24],
     clamp_exn$3=Base_Nativeint[25],
     clamp$3=Base_Nativeint[26],
     comparator$3=Base_Nativeint[27],
     validate_lbound$3=Base_Nativeint[28],
     validate_ubound$3=Base_Nativeint[29],
     validate_bound$3=Base_Nativeint[30],
     pp$3=Base_Nativeint[31],
     validate_positive$3=Base_Nativeint[32],
     validate_non_negative$3=Base_Nativeint[33],
     validate_negative$3=Base_Nativeint[34],
     validate_non_positive$3=Base_Nativeint[35],
     is_positive$3=Base_Nativeint[36],
     is_non_negative$3=Base_Nativeint[37],
     is_negative$3=Base_Nativeint[38],
     is_non_positive$3=Base_Nativeint[39],
     sign$3=Base_Nativeint[40],
     invariant$3=Base_Nativeint[41],
     Hex$3=Base_Nativeint[42],
     to_string_hum$3=Base_Nativeint[43],
     zero$3=Base_Nativeint[44],
     one$3=Base_Nativeint[45],
     minus_one$3=Base_Nativeint[46],
     symbol$68=Base_Nativeint[47],
     symbol$69=Base_Nativeint[48],
     symbol$70=Base_Nativeint[49],
     symbol$71=Base_Nativeint[50],
     neg$3=Base_Nativeint[51],
     symbol$72=Base_Nativeint[52],
     symbol$73=Base_Nativeint[53],
     symbol$74=Base_Nativeint[54],
     symbol$75=Base_Nativeint[55],
     rem$3=Base_Nativeint[56],
     symbol$76=Base_Nativeint[57],
     land$3=Base_Nativeint[58],
     lor$3=Base_Nativeint[59],
     lxor$3=Base_Nativeint[60],
     lnot$3=Base_Nativeint[61],
     lsl$3=Base_Nativeint[62],
     asr$3=Base_Nativeint[63],
     round$3=Base_Nativeint[64],
     round_towards_zero$3=Base_Nativeint[65],
     round_down$3=Base_Nativeint[66],
     round_up$3=Base_Nativeint[67],
     round_nearest$3=Base_Nativeint[68],
     abs$3=Base_Nativeint[69],
     succ$3=Base_Nativeint[70],
     pred$3=Base_Nativeint[71],
     pow$3=Base_Nativeint[72],
     bit_and$3=Base_Nativeint[73],
     bit_or$3=Base_Nativeint[74],
     bit_xor$3=Base_Nativeint[75],
     bit_not$3=Base_Nativeint[76],
     popcount$3=Base_Nativeint[77],
     shift_left$3=Base_Nativeint[78],
     shift_right$3=Base_Nativeint[79],
     decr$3=Base_Nativeint[80],
     incr$3=Base_Nativeint[81],
     of_int32_exn$3=Base_Nativeint[82],
     to_int32_exn$3=Base_Nativeint[83],
     of_int64_exn$3=Base_Nativeint[84],
     to_int64$3=Base_Nativeint[85],
     of_nativeint_exn$3=Base_Nativeint[86],
     to_nativeint_exn$3=Base_Nativeint[87],
     of_float_unchecked$3=Base_Nativeint[88],
     num_bits$3=Base_Nativeint[89],
     max_value$3=Base_Nativeint[90],
     min_value$3=Base_Nativeint[91],
     lsr$3=Base_Nativeint[92],
     shift_right_logical$3=Base_Nativeint[93],
     ceil_pow2$3=Base_Nativeint[94],
     floor_pow2$3=Base_Nativeint[95],
     ceil_log2$3=Base_Nativeint[96],
     floor_log2$3=Base_Nativeint[97],
     is_pow2$3=Base_Nativeint[98],
     clz$3=Base_Nativeint[99],
     ctz$3=Base_Nativeint[100],
     O$3=Base_Nativeint[101],
     uniform$3=Splittable_random[7],
     log_uniform$3=Splittable_random[10][5],
     For_nativeint=
      For_integer
       ([0,
         t_sexp_grammar$3,
         of_float$3,
         to_float$3,
         of_int_exn$3,
         to_int_exn$3,
         hash_fold_t$3,
         hash$3,
         t_of_sexp$3,
         sexp_of_t$5,
         of_string$3,
         to_string$3,
         symbol$62,
         symbol$63,
         symbol$64,
         symbol$65,
         symbol$66,
         symbol$67,
         equal$3,
         compare$3,
         min$3,
         max$3,
         ascending$3,
         descending$3,
         between$3,
         clamp_exn$3,
         clamp$3,
         comparator$3,
         validate_lbound$3,
         validate_ubound$3,
         validate_bound$3,
         pp$3,
         validate_positive$3,
         validate_non_negative$3,
         validate_negative$3,
         validate_non_positive$3,
         is_positive$3,
         is_non_negative$3,
         is_negative$3,
         is_non_positive$3,
         sign$3,
         invariant$3,
         Hex$3,
         to_string_hum$3,
         zero$3,
         one$3,
         minus_one$3,
         symbol$68,
         symbol$69,
         symbol$70,
         symbol$71,
         neg$3,
         symbol$72,
         symbol$73,
         symbol$74,
         symbol$75,
         rem$3,
         symbol$76,
         land$3,
         lor$3,
         lxor$3,
         lnot$3,
         lsl$3,
         asr$3,
         round$3,
         round_towards_zero$3,
         round_down$3,
         round_up$3,
         round_nearest$3,
         abs$3,
         succ$3,
         pred$3,
         pow$3,
         bit_and$3,
         bit_or$3,
         bit_xor$3,
         bit_not$3,
         popcount$3,
         shift_left$3,
         shift_right$3,
         decr$3,
         incr$3,
         of_int32_exn$3,
         to_int32_exn$3,
         of_int64_exn$3,
         to_int64$3,
         of_nativeint_exn$3,
         to_nativeint_exn$3,
         of_float_unchecked$3,
         num_bits$3,
         max_value$3,
         min_value$3,
         lsr$3,
         shift_right_logical$3,
         ceil_pow2$3,
         floor_pow2$3,
         ceil_log2$3,
         floor_log2$3,
         is_pow2$3,
         clz$3,
         ctz$3,
         O$3,
         uniform$3,
         log_uniform$3]),
     quickcheck_generator_nativeint=For_nativeint[7],
     _r_=For_nativeint[6],
     _s_=For_nativeint[4],
     _t_=For_nativeint[1],
     _u_=For_nativeint[5],
     _v_=For_nativeint[2],
     float_zero_exponent=caml_call1(Base_Float[124],0.),
     float_zero_mantissa=caml_call1(Base_Float[125],0.),
     float_max_positive_subnormal_v=
      caml_call2(Base_Float[58],759637122,Base_Float[54]),
     float_subnormal_exponent=caml_call1(Base_Float[124],Base_Float[53]),
     float_min_subnormal_mantissa=caml_call1(Base_Float[125],Base_Float[53]),
     float_max_subnormal_mantissa=
      caml_call1(Base_Float[125],float_max_positive_subnormal_v),
     _w_=Base_Float[52],
     lower_bound=caml_call1(Base_Float[124],Base_Float[54]),
     upper_bound=caml_call1(Base_Float[124],_w_),
     float_max_nan_mantissa=caml_call1(Base_Float[125],_w_),
     float_inf_exponent=caml_call1(Base_Float[124],Base_Float[40]),
     float_inf_mantissa=caml_call1(Base_Float[125],Base_Float[40]),
     float_nan_exponent=caml_call1(Base_Float[124],Base_Float[39]),
     float_min_nan_mantissa=caml_call1(Base_Int63[70],float_inf_mantissa),
     float_num_mantissa_bits=52;
    function _x_(num_bits)
     {function _dD_(bits)
       {var _dH_=caml_call2(Base_Int[48],float_num_mantissa_bits,num_bits);
        return caml_call2(Base_Int63[78],bits,_dH_)}
      var
       _dE_=caml_call2(Base_Int63[78],Base_Int63[45],num_bits),
       _dF_=caml_call1(Base_Int63[71],_dE_),
       _dG_=caml_call2(For_int63[4],Base_Int63[44],_dF_);
      return caml_call2(For_monad[11][4][3],_dG_,_dD_)}
    var
     _y_=caml_call2(For_int[1],0,float_num_mantissa_bits),
     float_normal_mantissa=caml_call2(For_monad[11][4][2],_y_,_x_),
     upper_bound$0=caml_call1(Base_Float[124],1.),
     _F_=0;
    function _z_(offset){return caml_call2(Base_Int[47],upper_bound$0,offset)}
    var
     _A_=caml_call2(Base_Int[48],upper_bound,upper_bound$0),
     _B_=caml_call2(For_int[5],0,_A_),
     _G_=[0,caml_call2(For_monad[11][4][3],_B_,_z_),_F_];
    function _C_(offset){return caml_call2(Base_Int[48],upper_bound$0,offset)}
    var
     _D_=caml_call2(Base_Int[48],upper_bound$0,lower_bound),
     _E_=caml_call2(For_int[5],0,_D_),
     float_exponent=union([0,caml_call2(For_monad[11][4][3],_E_,_C_),_G_]);
    function _H_(negative)
     {return caml_call3
              (Base_Float[122],
               negative,
               float_zero_exponent,
               float_zero_mantissa)}
    var
     float_zero=caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_H_),
     let_syntax_004=caml_call1(For_monad[11][1],float_subnormal_exponent),
     let_syntax_005=
      caml_call2
       (For_int63[5],
        float_min_subnormal_mantissa,
        float_max_subnormal_mantissa);
    function _I_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[122],negative,exponent,mantissa)}
    var
     _J_=caml_call2(For_monad[11][4][4],let_syntax_004,let_syntax_005),
     _K_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_J_),
     float_subnormal=caml_call2(For_monad[11][4][3],_K_,_I_);
    function _L_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[122],negative,exponent,mantissa)}
    var
     _M_=caml_call2(For_monad[11][4][4],float_exponent,float_normal_mantissa),
     _N_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_M_),
     float_normal=caml_call2(For_monad[11][4][3],_N_,_L_);
    function _O_(negative)
     {return caml_call3
              (Base_Float[122],negative,float_inf_exponent,float_inf_mantissa)}
    var
     float_infinite=
      caml_call2(For_monad[11][4][3],quickcheck_generator_bool,_O_),
     let_syntax_010=caml_call1(For_monad[11][1],float_nan_exponent),
     let_syntax_011=
      caml_call2(For_int63[4],float_min_nan_mantissa,float_max_nan_mantissa);
    function _P_(param)
     {var
       match=param[2],
       mantissa=match[2],
       exponent=match[1],
       negative=param[1];
      return caml_call3(Base_Float[122],negative,exponent,mantissa)}
    var
     _Q_=caml_call2(For_monad[11][4][4],let_syntax_010,let_syntax_011),
     _R_=caml_call2(For_monad[11][4][4],quickcheck_generator_bool,_Q_),
     float_nan=caml_call2(For_monad[11][4][3],_R_,_P_);
    function float_of_class(c)
     {switch(c)
       {case 0:return float_infinite;
        case 1:return float_nan;
        case 2:return float_normal;
        case 3:return float_subnormal;
        default:return float_zero}}
    function float_matching_classes(filter)
     {function _dA_(c)
       {if(caml_call1(filter,c))
         {var _dB_=float_of_class(c);
          switch(c)
           {case 0:var _dC_=1.;break;
            case 1:var _dC_=1.;break;
            case 2:var _dC_=100.;break;
            case 3:var _dC_=10.;break;
            default:var _dC_=1.}
          return [0,[0,_dC_,_dB_]]}
        return 0}
      return weighted_union
              (caml_call2(Base_List[122],Base_Float[115][2],_dA_))}
    var
     float_finite=
      float_matching_classes(function(param){return 2 <= param?1:0}),
     float_without_nan=
      float_matching_classes(function(param){return 1 === param?0:1}),
     quickcheck_generator_float=
      float_matching_classes(function(param){return 1}),
     float_finite_non_zero=
      float_matching_classes(function(param){return 1 < param - 2 >>> 0?0:1});
    function _S_(t){return caml_call1(Base_Float[104],t)}
    var
     float_strictly_positive=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_S_);
    function _T_(t)
     {var _dz_=caml_call1(Base_Float[104],t);
      return caml_call1(Base[216],_dz_)}
    var
     float_strictly_negative=
      caml_call2(For_monad[11][4][3],float_finite_non_zero,_T_);
    function _U_(t){return caml_call1(Base_Float[104],t)}
    var
     float_positive_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_U_);
    function _V_(t)
     {var _dy_=caml_call1(Base_Float[104],t);
      return caml_call1(Base[216],_dy_)}
    var
     float_negative_or_zero=
      caml_call2(For_monad[11][4][3],float_finite,_V_);
    function float_uniform_exclusive(lower_bound,upper_bound)
     {var
       _dq_=1 - caml_call1(Base_Float[117],lower_bound),
       _dr_=_dq_ || 1 - caml_call1(Base_Float[117],upper_bound);
      if(_dr_)
       {var
         _ds_=[0,[1,[0,_W_,[0,caml_call1(Base[113],upper_bound),0]]],0],
         _dt_=[0,[1,[0,_X_,[0,caml_call1(Base[113],lower_bound),0]]],_ds_],
         _du_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Float_uniform_exclusive_bo),
            _dt_]];
        caml_call1(Base[222],_du_)}
      var
       lower_inclusive=caml_call2(Base_Float[58],19067,lower_bound),
       upper_inclusive=caml_call2(Base_Float[58],759637122,upper_bound);
      if(caml_call2(Base_Float[105][10],lower_inclusive,upper_inclusive))
       {var
         _dv_=[0,[1,[0,_Y_,[0,caml_call1(Base[113],upper_bound),0]]],0],
         _dw_=[0,[1,[0,_Z_,[0,caml_call1(Base[113],lower_bound),0]]],_dv_],
         _dx_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Float_uniform_exclusive_re),
            _dw_]];
        caml_call1(Base[222],_dx_)}
      return create$0
              (function(param,random)
                {return caml_call3
                         (Splittable_random[8],
                          random,
                          lower_inclusive,
                          upper_inclusive)})}
    function float_inclusive(lower_bound,upper_bound)
     {var
       _do_=[0,[0,0.9,float_uniform_exclusive(lower_bound,upper_bound)],0],
       _dp_=[0,[0,0.05,caml_call1(For_monad[11][1],upper_bound)],_do_];
      return weighted_union
              ([0,[0,0.05,caml_call1(For_monad[11][1],lower_bound)],_dp_])}
    function string_with_length_of(char_gen,length)
     {var _dn_=list_with_length(char_gen,length);
      return map(_dn_,Base_String[110])}
    function string_of(char_gen)
     {return bind
              (small_positive_or_zero_int,
               function(length){return string_with_length_of(char_gen,length)})}
    function string_non_empty_of(char_gen)
     {return bind
              (small_strictly_positive_int,
               function(length){return string_with_length_of(char_gen,length)})}
    var
     quickcheck_generator_string=string_of(quickcheck_generator_char),
     string_non_empty=string_non_empty_of(quickcheck_generator_char);
    function string_with_length(length)
     {return string_with_length_of(quickcheck_generator_char,length)}
    function sexp_of(atom)
     {return fixed_point
              (function(self)
                {function _dg_(size)
                  {function _dh_(param)
                    {if(0 === param)
                      {var _dk_=function(atom){return [0,atom]};
                       return caml_call2(For_monad[11][4][3],atom,_dk_)}
                     function _dl_(list){return [1,list]}
                     var _dm_=quickcheck_generator_list(self);
                     return caml_call2(For_monad[11][4][3],_dm_,_dl_)}
                   var
                    _di_=caml_call2(Base[180],size,1),
                    _dj_=caml_call2(For_int[2],0,_di_);
                   return caml_call2(For_monad[11][4][2],_dj_,_dh_)}
                 return caml_call2(For_monad[11][4][2],size,_dg_)})}
    var sexp=sexp_of(quickcheck_generator_string);
    function map_tree_using_comparator(comparator,key_gen,data_gen)
     {function _da_(keys)
       {var keys$0=caml_call2(Base_List[111],comparator[1],keys);
        function _dc_(data)
         {var
           _de_=caml_call2(Base_List[93],keys$0,data),
           _df_=caml_call2(Base_Map[101][3][7],comparator,_de_);
          return caml_call1(For_monad[11][1],_df_)}
        var _dd_=list_with_length(data_gen,caml_call1(Base_List[7],keys$0));
        return caml_call2(For_monad[11][4][2],_dd_,_dc_)}
      var _db_=quickcheck_generator_list(key_gen);
      return caml_call2(For_monad[11][4][2],_db_,_da_)}
    function set_tree_using_comparator(comparator,elt_gen)
     {var _c$_=caml_call1(Base_Set[72][3][54],comparator);
      return map(quickcheck_generator_list(elt_gen),_c$_)}
    function map_t_m(m,key_gen,data_gen)
     {var
       comparator=m[1],
       _c__=map_tree_using_comparator(comparator,key_gen,data_gen);
      return map(_c__,caml_call1(Base_Map[101][91],comparator))}
    function set_t_m(m,elt_gen)
     {var comparator=m[1],_c9_=set_tree_using_comparator(comparator,elt_gen);
      return map(_c9_,caml_call1(Base_Set[72][63],comparator))}
    function bigarray1(t,kind,layout)
     {function _c5_(elts)
       {var
         elts$0=caml_call1(Base_Array[38],elts),
         dim=caml_call1(Base_Array[8],elts$0),
         offset=caml_call1(Layout[1],layout);
        function _c7_(i)
         {var _c8_=caml_call2(Base[181],i,offset);
          return caml_check_bound(elts$0,_c8_)[1 + _c8_]}
        return caml_call4(_b_[2],kind,layout,dim,_c7_)}
      var _c6_=quickcheck_generator_list(t);
      return caml_call2(For_monad[11][4][3],_c6_,_c5_)}
    var
     bigstring=bigarray1(quickcheck_generator_char,12,0),
     float32_vec=bigarray1(quickcheck_generator_float,0,1),
     float64_vec=bigarray1(quickcheck_generator_float,1,1);
    function ___(max_total_size)
     {if(0 === max_total_size)return caml_call1(For_monad[11][1],_$_);
      function _cY_(a)
       {function _c0_(b)
         {function _c4_(param){return param?[0,a,b]:[0,b,a]}
          return caml_call2
                  (For_monad[11][4][3],quickcheck_generator_bool,_c4_)}
        var max_b=caml_call2(Base[183],max_total_size,a);
        function _c1_(b_weighted_low)
         {return caml_call2(Base[181],max_b,b_weighted_low)}
        var
         _c2_=caml_call2(int_log_uniform_inclusive,0,max_b),
         _c3_=caml_call2(For_monad[11][4][3],_c2_,_c1_);
        return caml_call2(For_monad[11][4][2],_c3_,_c0_)}
      var _cZ_=caml_call2(int_log_uniform_inclusive,1,max_total_size);
      return caml_call2(For_monad[11][4][2],_cZ_,_cY_)}
    var bigarray2_dim=caml_call2(For_monad[11][4][2],size,___);
    function bigarray2(t,kind,layout)
     {function _cS_(param)
       {var dim2=param[2],dim1=param[1];
        function _cT_(elts)
         {var
           elts$0=caml_call2(Base_Array[75],elts,Base_Array[38]),
           offset=caml_call1(Layout[1],layout);
          function _cV_(i,j)
           {var
             _cW_=caml_call2(Base[181],j,offset),
             _cX_=caml_call2(Base[181],i,offset);
            return caml_check_bound
                     (caml_check_bound(elts$0,_cX_)[1 + _cX_],_cW_)
                    [1 + _cW_]}
          return caml_call5(_a_[2],kind,layout,dim1,dim2,_cV_)}
        var _cU_=list_with_length(list_with_length(t,dim2),dim1);
        return caml_call2(For_monad[11][4][3],_cU_,_cT_)}
      return caml_call2(For_monad[11][4][2],bigarray2_dim,_cS_)}
    var
     float32_mat=bigarray2(quickcheck_generator_float,0,1),
     float64_mat=bigarray2(quickcheck_generator_float,1,1),
     Base_quickcheck_Generator=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       int63,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       sexp,
       quickcheck_generator_option,
       quickcheck_generator_list,
       either,
       result,
       bigstring,
       float32_vec,
       float64_vec,
       float32_mat,
       float64_mat,
       fn,
       map_t_m,
       set_t_m,
       map_tree_using_comparator,
       set_tree_using_comparator,
       of_list,
       union,
       both,
       symbol,
       symbol$0,
       symbol$1,
       apply,
       map2,
       map3,
       For_applicative[13],
       _h_,
       _i_,
       For_monad[3],
       bind,
       return$0,
       map,
       _f_,
       _e_,
       all,
       all_unit,
       For_monad[11],
       size,
       with_size,
       sizes,
       filter,
       filter_map,
       recursive_union,
       fixed_point,
       of_lazy,
       of_weighted_list,
       weighted_union,
       weighted_recursive_union,
       small_positive_or_zero_int,
       small_strictly_positive_int,
       int_uniform,
       int32_uniform,
       int63_uniform,
       int64_uniform,
       _r_,
       int_inclusive,
       int32_inclusive,
       int63_inclusive,
       int64_inclusive,
       _s_,
       int_uniform_inclusive,
       int32_uniform_inclusive,
       int63_uniform_inclusive,
       int64_uniform_inclusive,
       _t_,
       int_log_uniform_inclusive,
       int32_log_uniform_inclusive,
       int63_log_uniform_inclusive,
       int64_log_uniform_inclusive,
       _v_,
       int_log_inclusive,
       int32_log_inclusive,
       int63_log_inclusive,
       int64_log_inclusive,
       _u_,
       float_inclusive,
       float_uniform_exclusive,
       float_without_nan,
       float_finite,
       float_strictly_positive,
       float_strictly_negative,
       float_positive_or_zero,
       float_negative_or_zero,
       float_of_class,
       char_lowercase,
       char_uppercase,
       char_digit,
       char_alpha,
       char_alphanum,
       char_whitespace,
       char_print,
       char_uniform_inclusive,
       string_non_empty,
       string_with_length,
       string_of,
       string_non_empty_of,
       string_with_length_of,
       sexp_of,
       list_non_empty,
       list_with_length,
       list_filtered,
       list_permutations,
       perturb,
       create$0,
       generate];
    caml_register_global
     (109,Base_quickcheck_Generator,"Base_quickcheck__Generator");
    function quickcheck_shrinker_float(param){return Base_Sequence[38]}
    function create$1(_cR_){return _cR_}
    function shrink(_cQ_){return _cQ_}
    function map$2(t,f,f_inverse)
     {return function(x)
       {var _cP_=caml_call1(t,caml_call1(f_inverse,x));
        return caml_call2(Base_Sequence[32],_cP_,f)}}
    function filter$0(t,f)
     {return function(x)
       {var _cO_=caml_call1(t,x);return caml_call2(Base_Sequence[51],_cO_,f)}}
    function filter_map$0(t,f,f_inverse)
     {return function(x)
       {var _cN_=caml_call1(t,caml_call1(f_inverse,x));
        return caml_call2(Base_Sequence[76],_cN_,f)}}
    function of_lazy$0(lazy_t)
     {return function(x)
       {var
         _cJ_=
          [246,
           function(_cK_)
            {var
              _cL_=caml_obj_tag(lazy_t),
              _cM_=
               250 === _cL_
                ?lazy_t[1]
                :246 === _cL_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
             return caml_call1(_cM_,x)}];
        return caml_call1(Base_Sequence[103],_cJ_)}}
    function fixed_point$0(of_shrinker)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_cI_){return caml_call1(of_shrinker,of_lazy$0(lazy_t))}]);
      return of_lazy$0(lazy_t)}
    function both$0(fst_t,snd_t)
     {return function(param)
       {var snd=param[2],fst=param[1],_cB_=0;
        function _cC_(snd){return [0,fst,snd]}
        var
         _cD_=caml_call1(snd_t,snd),
         _cE_=[0,caml_call2(Base_Sequence[32],_cD_,_cC_),_cB_];
        function _cF_(fst){return [0,fst,snd]}
        var
         _cG_=caml_call1(fst_t,fst),
         _cH_=[0,caml_call2(Base_Sequence[32],_cG_,_cF_),_cE_];
        return caml_call1(Base_Sequence[66],_cH_)}}
    function float64_vec$0(src)
     {var dim=caml_ba_dim_1(src);
      if(0 === dim)return Base_Sequence[38];
      var
       kind=caml_ba_kind(src),
       layout=caml_ba_layout(src),
       offset=caml_call1(Layout[1],layout);
      function _cy_(to_skip)
       {var to_skip$0=caml_call2(Base[180],to_skip,offset);
        function _cz_(i)
         {var
           i$0=
            caml_call2(Base[199],i,to_skip$0)?i:caml_call2(Base[180],i,1);
          return caml_ba_get_1(src,i$0)}
        var _cA_=caml_call2(Base[181],dim,1);
        return caml_call4(_b_[2],kind,layout,_cA_,_cz_)}
      return caml_call2(Base_Sequence[75],dim,_cy_)}
    function dim2(r){return r[2]}
    function dim1(r){return r[1]}
    function _aa_(r,v){return [0,r[1],v]}
    var _ab_=0,dim2$0=[0,function(param){return 0},cst_dim2,_ab_,dim2,_aa_];
    function _ac_(r,v){return [0,v,r[2]]}
    var _ad_=0,dim1$0=[0,function(param){return 0},cst_dim1,_ad_,dim1,_ac_];
    function shrink$0(field,src)
     {var
       _cu_=caml_ba_dim_2(src),
       dims=[0,caml_ba_dim_1(src),_cu_],
       match=caml_call2(Base_Field[3],field,dims);
      if(0 === match)return Base_Sequence[38];
      var
       kind=caml_ba_kind(src),
       layout=caml_ba_layout(src),
       offset=caml_call1(Layout[1],layout),
       match$0=caml_call3(Base_Field[6],field,dims,Base_Int[71]),
       dim2=match$0[2],
       dim1=match$0[1];
      function _cv_(to_skip)
       {var to_skip$0=caml_call2(Base[180],to_skip,offset);
        function skip(i)
         {return caml_call2(Base[199],i,to_skip$0)?i:caml_call2(Base[180],i,1)}
        function _cx_(dim1,dim2)
         {var
           match=caml_call3(Base_Field[6],field,[0,dim1,dim2],skip),
           dim2$0=match[2],
           dim1$0=match[1];
          return caml_ba_get_2(src,dim1$0,dim2$0)}
        return caml_call5(_a_[2],kind,layout,dim1,dim2,_cx_)}
      var _cw_=caml_call2(Base_Field[3],field,dims);
      return caml_call2(Base_Sequence[75],_cw_,_cv_)}
    function float64_mat$0(src)
     {var _cs_=[0,shrink$0(dim2$0,src),0],_ct_=[0,shrink$0(dim1$0,src),_cs_];
      return caml_call1(Base_Sequence[66],_ct_)}
    function quickcheck_shrinker_option(value_t)
     {return function(param)
       {if(param)
         {var
           value=param[1],
           _co_=Base_Option[29],
           _cp_=caml_call1(value_t,value),
           _cq_=caml_call2(Base_Sequence[32],_cp_,_co_),
           _cr_=caml_call1(Base_Sequence[97],0);
          return caml_call2(Base_Sequence[61],_cr_,_cq_)}
        return Base_Sequence[38]}}
    function quickcheck_shrinker_list(elt_t)
     {return fixed_point$0
              (function(list_t)
                {return function(param)
                  {if(param)
                    {var
                      tail=param[2],
                      head=param[1],
                      _cg_=0,
                      _ch_=function(tail){return [0,head,tail]},
                      _ci_=caml_call1(list_t,tail),
                      _cj_=[0,caml_call2(Base_Sequence[32],_ci_,_ch_),_cg_],
                      _ck_=function(head){return [0,head,tail]},
                      _cl_=caml_call1(elt_t,head),
                      _cm_=[0,caml_call2(Base_Sequence[32],_cl_,_ck_),_cj_],
                      _cn_=[0,caml_call1(Base_Sequence[97],tail),_cm_];
                     return caml_call1(Base_Sequence[66],_cn_)}
                   return Base_Sequence[38]}})}
    var
     _ae_=Base_String[16],
     _af_=Base_String[110],
     quickcheck_shrinker_string=
      map$2(quickcheck_shrinker_list(quickcheck_shrinker_float),_af_,_ae_),
     sexp$0=
      fixed_point$0
       (function(shrinker)
         {return function(param)
           {if(0 === param[0])return Base_Sequence[38];
            var
             l=param[1],
             _ce_=caml_call1(quickcheck_shrinker_list(shrinker),l),
             _cf_=Base_Sequence[32],
             shrink_list=caml_call2(_cf_,_ce_,function(l){return [1,l]}),
             shrink_tree=caml_call1(Base_Sequence[102],l);
            return caml_call1
                    (Base_Sequence[66],[0,shrink_list,[0,shrink_tree,0]])}});
    function either$0(fst_t,snd_t)
     {return function(either)
       {if(0 === either[0])
         {var fst=either[1],_ca_=Base_Either[16],_cb_=caml_call1(fst_t,fst);
          return caml_call2(Base_Sequence[32],_cb_,_ca_)}
        var snd=either[1],_cc_=Base_Either[17],_cd_=caml_call1(snd_t,snd);
        return caml_call2(Base_Sequence[32],_cd_,_cc_)}}
    function result$0(ok_t,err_t)
     {function _b__(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      function _b$_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return map$2(either$0(ok_t,err_t),_b$_,_b__)}
    function map_tree_using_comparator$0(comparator,key_t,data_t)
     {return function(tree)
       {var alist=caml_call2(Base_Map[101][3][62],0,tree);
        function _b0_(param)
         {var k=param[1];
          return caml_call3(Base_Map[101][3][36],comparator,tree,k)}
        var
         _b1_=caml_call1(Base_Sequence[102],alist),
         drop_keys=caml_call2(Base_Sequence[32],_b1_,_b0_);
        function _b2_(param)
         {var
           data=param[2],
           key=param[1],
           tree$0=caml_call3(Base_Map[101][3][36],comparator,tree,key);
          function _b8_(smaller_key)
           {var
             match=
              caml_call4
               (Base_Map[101][3][26],comparator,tree$0,smaller_key,data);
            if(typeof match === "number")return 0;
            var tree=match[2];
            return [0,tree]}
          var _b9_=caml_call1(key_t,key);
          return caml_call2(Base_Sequence[76],_b9_,_b8_)}
        var
         _b3_=caml_call2(Base_List[74],alist,_b2_),
         shrink_keys=caml_call1(Base_Sequence[66],_b3_);
        function _b4_(param)
         {var data=param[2],key=param[1];
          function _b6_(smaller_data)
           {return caml_call4
                    (Base_Map[101][3][28],comparator,tree,key,smaller_data)}
          var _b7_=caml_call1(data_t,data);
          return caml_call2(Base_Sequence[32],_b7_,_b6_)}
        var
         _b5_=caml_call2(Base_List[74],alist,_b4_),
         shrink_data=caml_call1(Base_Sequence[66],_b5_);
        return caml_call1
                (Base_Sequence[66],
                 [0,drop_keys,[0,shrink_keys,[0,shrink_data,0]]])}}
    function set_tree_using_comparator$0(comparator,elt_t)
     {return function(tree)
       {var list=caml_call1(Base_Set[72][3][15],tree);
        function _bU_(elt)
         {return caml_call3(Base_Set[72][3][20],comparator,tree,elt)}
        var
         _bV_=caml_call1(Base_Sequence[102],list),
         drop_elts=caml_call2(Base_Sequence[32],_bV_,_bU_);
        function _bW_(elt)
         {var tree$0=caml_call3(Base_Set[72][3][20],comparator,tree,elt);
          function _bY_(smaller_elt)
           {var
             match=
              caml_call3(Base_Set[72][3][18],comparator,tree$0,smaller_elt);
            return match
                    ?0
                    :[0,
                      caml_call3
                       (Base_Set[72][3][19],comparator,tree$0,smaller_elt)]}
          var _bZ_=caml_call1(elt_t,elt);
          return caml_call2(Base_Sequence[76],_bZ_,_bY_)}
        var
         _bX_=caml_call2(Base_List[74],list,_bW_),
         shrink_elts=caml_call1(Base_Sequence[66],_bX_);
        return caml_call1(Base_Sequence[66],[0,drop_elts,[0,shrink_elts,0]])}}
    function map_t(key_t,data_t)
     {return function(map_t)
       {var
         comparator=caml_call1(Base_Map[4],map_t),
         _bS_=Base_Map[101][68],
         _bT_=caml_call1(Base_Map[101][91],comparator),
         t=
          map$2
           (map_tree_using_comparator$0(comparator,key_t,data_t),_bT_,_bS_);
        return caml_call1(t,map_t)}}
    function set_t(elt_t)
     {return function(set_t)
       {var
         comparator=caml_call1(Base_Set[4],set_t),
         _bQ_=Base_Set[72][47],
         _bR_=caml_call1(Base_Set[72][63],comparator),
         t=map$2(set_tree_using_comparator$0(comparator,elt_t),_bR_,_bQ_);
        return caml_call1(t,set_t)}}
    var
     Base_quickcheck_Shrinker=
      [0,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       sexp$0,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       both$0,
       either$0,
       result$0,
       float64_vec$0,
       float64_vec$0,
       float64_vec$0,
       float64_mat$0,
       float64_mat$0,
       map_t,
       set_t,
       map_tree_using_comparator$0,
       set_tree_using_comparator$0,
       map$2,
       filter$0,
       filter_map$0,
       fixed_point$0,
       of_lazy$0,
       create$1,
       shrink];
    caml_register_global
     (112,Base_quickcheck_Shrinker,"Base_quickcheck__Shrinker");
    var Base_quickcheck_Test_intf=[0];
    caml_register_global
     (113,Base_quickcheck_Test_intf,"Base_quickcheck__Test_intf");
    function sexp_of_t$6(param)
     {if(param)
       {var v0=param[1],v0$0=caml_call1(Base[165],v0);
        return [1,[0,_ag_,[0,v0$0,0]]]}
      return _ah_}
    var Seed=[0,sexp_of_t$6];
    function sizes$0(r){return r[4]}
    function shrink_count(r){return r[3]}
    function test_count(r){return r[2]}
    function seed(r){return r[1]}
    function _ai_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _aj_=0,
     sizes$1=[0,function(param){return 0},cst_sizes,_aj_,sizes$0,_ai_];
    function _ak_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _al_=0,
     shrink_count$0=
      [0,function(param){return 0},cst_shrink_count,_al_,shrink_count,_ak_];
    function _am_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _an_=0,
     test_count$0=
      [0,function(param){return 0},cst_test_count,_an_,test_count,_am_];
    function _ao_(r,v){return [0,v,r[2],r[3],r[4]]}
    var _ap_=0,seed$0=[0,function(param){return 0},cst_seed,_ap_,seed,_ao_];
    function make_creator
     (seed_fun,test_count_fun,shrink_count_fun,sizes_fun,compile_acc)
     {var
       match=caml_call2(seed_fun,seed$0,compile_acc),
       compile_acc$0=match[2],
       seed_gen=match[1],
       match$0=caml_call2(test_count_fun,test_count$0,compile_acc$0),
       compile_acc$1=match$0[2],
       test_count_gen=match$0[1],
       match$1=caml_call2(shrink_count_fun,shrink_count$0,compile_acc$1),
       compile_acc$2=match$1[2],
       shrink_count_gen=match$1[1],
       match$2=caml_call2(sizes_fun,sizes$1,compile_acc$2),
       compile_acc$3=match$2[2],
       sizes_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 seed=caml_call1(seed_gen,acc),
                 test_count=caml_call1(test_count_gen,acc),
                 shrink_count=caml_call1(shrink_count_gen,acc),
                 sizes=caml_call1(sizes_gen,acc);
                return [0,seed,test_count,shrink_count,sizes]},
              compile_acc$3]}
    function create$2(seed,test_count,shrink_count,sizes)
     {return [0,seed,test_count,shrink_count,sizes]}
    function map$3(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bN_=caml_call1(sizes_fun,sizes$1),
       _bO_=caml_call1(shrink_count_fun,shrink_count$0),
       _bP_=caml_call1(test_count_fun,test_count$0);
      return [0,caml_call1(seed_fun,seed$0),_bP_,_bO_,_bN_]}
    function iter(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call1(seed_fun,seed$0);
      caml_call1(test_count_fun,test_count$0);
      caml_call1(shrink_count_fun,shrink_count$0);
      return caml_call1(sizes_fun,sizes$1)}
    function fold$1(init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {return caml_call2
              (sizes_fun,
               caml_call2
                (shrink_count_fun,
                 caml_call2
                  (test_count_fun,
                   caml_call2(seed_fun,init,seed$0),
                   test_count$0),
                 shrink_count$0),
               sizes$1)}
    function map_poly(record)
     {var
       _bK_=[0,caml_call1(record[1],sizes$1),0],
       _bL_=[0,caml_call1(record[1],shrink_count$0),_bK_],
       _bM_=[0,caml_call1(record[1],test_count$0),_bL_];
      return [0,caml_call1(record[1],seed$0),_bM_]}
    function for_all(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bH_=caml_call1(seed_fun,seed$0),
       _bI_=_bH_?caml_call1(test_count_fun,test_count$0):_bH_,
       _bJ_=_bI_?caml_call1(shrink_count_fun,shrink_count$0):_bI_;
      return _bJ_?caml_call1(sizes_fun,sizes$1):_bJ_}
    function exists(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bG_=caml_call1(seed_fun,seed$0),
       _bE_=_bG_ || caml_call1(test_count_fun,test_count$0),
       _bF_=_bE_ || caml_call1(shrink_count_fun,shrink_count$0);
      return _bF_?_bF_:caml_call1(sizes_fun,sizes$1)}
    function to_list(seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bB_=[0,caml_call1(sizes_fun,sizes$1),0],
       _bC_=[0,caml_call1(shrink_count_fun,shrink_count$0),_bB_],
       _bD_=[0,caml_call1(test_count_fun,test_count$0),_bC_];
      return [0,caml_call1(seed_fun,seed$0),_bD_]}
    function iter$0(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {caml_call3(seed_fun,seed$0,record,record[1]);
      caml_call3(test_count_fun,test_count$0,record,record[2]);
      caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return caml_call3(sizes_fun,sizes$1,record,record[4])}
    function fold$2
     (record,init,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var _by_=record[4],_bz_=record[3],_bA_=record[2];
      return caml_call4
              (sizes_fun,
               caml_call4
                (shrink_count_fun,
                 caml_call4
                  (test_count_fun,
                   caml_call4(seed_fun,init,seed$0,record,record[1]),
                   test_count$0,
                   record,
                   _bA_),
                 shrink_count$0,
                 record,
                 _bz_),
               sizes$1,
               record,
               _by_)}
    function for_all$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bv_=caml_call3(seed_fun,seed$0,record,record[1]),
       _bw_=_bv_?caml_call3(test_count_fun,test_count$0,record,record[2]):_bv_,
       _bx_=
        _bw_?caml_call3(shrink_count_fun,shrink_count$0,record,record[3]):_bw_;
      return _bx_?caml_call3(sizes_fun,sizes$1,record,record[4]):_bx_}
    function exists$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bu_=caml_call3(seed_fun,seed$0,record,record[1]),
       _bs_=_bu_ || caml_call3(test_count_fun,test_count$0,record,record[2]),
       _bt_=
        _bs_
        ||
        caml_call3(shrink_count_fun,shrink_count$0,record,record[3]);
      return _bt_?_bt_:caml_call3(sizes_fun,sizes$1,record,record[4])}
    function to_list$0
     (record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bp_=[0,caml_call3(sizes_fun,sizes$1,record,record[4]),0],
       _bq_=
        [0,caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),_bp_],
       _br_=[0,caml_call3(test_count_fun,test_count$0,record,record[2]),_bq_];
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_br_]}
    function map$4(record,seed_fun,test_count_fun,shrink_count_fun,sizes_fun)
     {var
       _bm_=caml_call3(sizes_fun,sizes$1,record,record[4]),
       _bn_=caml_call3(shrink_count_fun,shrink_count$0,record,record[3]),
       _bo_=caml_call3(test_count_fun,test_count$0,record,record[2]);
      return [0,caml_call3(seed_fun,seed$0,record,record[1]),_bo_,_bn_,_bm_]}
    function set_all_mutable_fields(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$2,
       for_all$0,
       exists$0,
       to_list$0,
       map$4,
       set_all_mutable_fields];
    function sexp_of_t$7(param)
     {var
       v_sizes=param[4],
       v_shrink_count=param[3],
       v_test_count=param[2],
       v_seed=param[1],
       _bl_=Base[120],
       match=caml_call2(Base_Sequence[86],v_sizes,100),
       suffix=match[2],
       prefix=match[1],
       prefix$0=caml_call2(Base_List[74],prefix,_bl_),
       match$0=caml_call1(Base_Sequence[6],suffix),
       bnds=0,
       suffix$0=match$0?0:[0,caml_call1(Sexplib0_Sexp_conv[7],cst),0],
       arg=[1,caml_call2(Base[179],prefix$0,suffix$0)],
       bnds$0=[0,[1,[0,_aq_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Base[120],v_shrink_count),
       bnds$1=[0,[1,[0,_ar_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Base[120],v_test_count),
       bnds$2=[0,[1,[0,_as_,[0,arg$1,0]]],bnds$1],
       arg$2=caml_call1(Seed[1],v_seed),
       bnds$3=[0,[1,[0,_at_,[0,arg$2,0]]],bnds$2];
      return [1,bnds$3]}
    var
     _aw_=caml_call5(Base_List[117],0,_av_,_au_,0,30),
     default_config=[0,_ax_,10000,10000,caml_call1(Base_Sequence[95],_aw_)],
     lazy_nondeterministic_state=
      [246,function(_bk_){return caml_call2(Base_Random[18][3],0,0)}];
    function with_sample(f,opt,_bg_,generator)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_bg_)var sth$0=_bg_[1],examples=sth$0;else var examples=0;
      var match=config[1];
      if(match)
       var
        string=match[1],
        _a__=runtime.Base_hash_string(string),
        random=caml_call1(Splittable_random[1][2],_a__);
      else
       var
        _a$_=caml_obj_tag(lazy_nondeterministic_state),
        _ba_=
         250 === _a$_
          ?lazy_nondeterministic_state[1]
          :246 === _a$_
            ?caml_call1(CamlinternalLazy[2],lazy_nondeterministic_state)
            :lazy_nondeterministic_state,
        random=caml_call1(Splittable_random[1][1],_ba_);
      function _bb_(param)
       {var
         number_of_size_values=param[2],
         sizes=param[1],
         match=caml_call2(Base[204],number_of_size_values,config[2]);
        if(match)return 0;
        var match$0=caml_call1(Base_Sequence[39],sizes);
        if(match$0)
         {var match$1=match$0[1],remaining_sizes=match$1[2],size=match$1[1];
          return [0,
                  [0,
                   size,
                   [0,
                    remaining_sizes,
                    caml_call2(Base[180],number_of_size_values,1)]]]}
        var
         _bh_=
          [0,[1,[0,_ay_,[0,caml_call1(Base[120],number_of_size_values),0]]],0],
         _bi_=[0,[1,[0,_az_,[0,caml_call1(Base[120],config[2]),0]]],_bh_],
         _bj_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Test_run_i),
            _bi_]];
        return caml_call1(Base[222],_bj_)}
      var
       _bc_=caml_call2(Base_Sequence[42],[0,config[4],0],_bb_),
       _bd_=Base_Sequence[32],
       _be_=
        caml_call2
         (_bd_,_bc_,function(size){return generate(generator,size,random)}),
       _bf_=caml_call1(Base_Sequence[102],examples),
       sequence=caml_call2(Base_Sequence[61],_bf_,_be_);
      return caml_call1(f,sequence)}
    function result$1(f,opt,_a5_,m)
     {if(opt)var sth=opt[1],config=sth;else var config=default_config;
      if(_a5_)var sth$0=_a5_[1],examples=sth$0;else var examples=0;
      var _a6_=m[2],_a7_=[0,examples],_a8_=[0,config];
      return with_sample
              (function(sequence)
                {function _a9_(param,input)
                  {var match=caml_call1(f,input);
                   if(0 === match[0])return _aA_;
                   var error=match[1];
                   return [1,[0,input,error]]}
                 var match$2=caml_call3(Base_Sequence[9],sequence,0,_a9_);
                 if(0 === match$2[0])return _aB_;
                 var
                  match$3=match$2[1],
                  error$1=match$3[2],
                  input$0=match$3[1],
                  shrinker=m[3],
                  shrink_count$1=config[3],
                  alternates$2=caml_call1(shrinker,input$0),
                  shrink_count=shrink_count$1,
                  alternates=alternates$2,
                  input=input$0,
                  error=error$1;
                 for(;;)
                  {if(0 !== shrink_count)
                    {var
                      shrink_count$0=caml_call2(Base[181],shrink_count,1),
                      match=caml_call1(Base_Sequence[39],alternates);
                     if(match)
                      {var
                        match$0=match[1],
                        alternates$0=match$0[2],
                        alternate=match$0[1],
                        match$1=caml_call1(f,alternate);
                       if(0 === match$1[0])
                        {var shrink_count=shrink_count$0,alternates=alternates$0;
                         continue}
                       var
                        error$0=match$1[1],
                        alternates$1=caml_call1(shrinker,alternate),
                        shrink_count=shrink_count$0,
                        alternates=alternates$1,
                        input=alternate,
                        error=error$0;
                       continue}}
                   return [1,[0,input,error]]}},
               _a8_,
               _a7_,
               _a6_)}
    function run(f,config,examples,M)
     {function f$0(x)
       {function _a3_(param){return caml_call1(f,x)}
        var _a4_=[0,caml_call1(Base_Backtrace[6][1],0)];
        return caml_call2(Base_Or_error[28],_a4_,_a3_)}
      var match=result$1(f$0,config,examples,M);
      if(0 === match[0])return _aC_;
      var
       match$0=match[1],
       error=match$0[2],
       input=match$0[1],
       _a0_=[0,[1,[0,_aD_,[0,caml_call1(Base_Error[6],error),0]]],0],
       _a1_=[0,[1,[0,_aE_,[0,caml_call1(M[1],input),0]]],_a0_],
       _a2_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_Base_quickcheck_Test_run_t),
          _a1_]];
      return caml_call1(Base_Or_error[34],_a2_)}
    function with_sample_exn(f,config,examples,generator)
     {function f$0(x)
       {function _aZ_(param){return caml_call1(f,x)}
        return caml_call2(Base_Or_error[27],0,_aZ_)}
      var _aY_=with_sample(f$0,config,examples,generator);
      return caml_call1(Base_Or_error[30],_aY_)}
    function run_exn(f,config,examples,testable)
     {function f$0(x)
       {function _aW_(param){return caml_call1(f,x)}
        var _aX_=[0,caml_call1(Base_Backtrace[6][1],0)];
        return caml_call2(Base_Or_error[27],_aX_,_aW_)}
      var _aV_=run(f$0,config,examples,testable);
      return caml_call1(Base_Or_error[30],_aV_)}
    var
     Base_quickcheck_Test=
      [0,
       [0,
        Seed,
        sizes$0,
        shrink_count,
        test_count,
        seed,
        [0,
         names,
         sizes$1,
         shrink_count$0,
         test_count$0,
         seed$0,
         fold$1,
         make_creator,
         create$2,
         map$3,
         iter,
         for_all,
         exists,
         to_list,
         map_poly,
         Direct],
        sexp_of_t$7],
       default_config,
       run,
       run_exn,
       result$1,
       with_sample,
       with_sample_exn];
    caml_register_global(117,Base_quickcheck_Test,"Base_quickcheck__Test");
    function unmap(t,f)
     {return function(x,size,hash)
       {return observe(t,caml_call1(f,x),size,hash)}}
    function of_hash_fold(f)
     {return function(x,param,hash){return caml_call2(f,hash,x)}}
    function of_lazy$1(lazy_t)
     {return function(x,size,hash)
       {var
         _aT_=caml_obj_tag(lazy_t),
         _aU_=
          250 === _aT_
           ?lazy_t[1]
           :246 === _aT_?caml_call1(CamlinternalLazy[2],lazy_t):lazy_t;
        return observe(_aU_,x,size,hash)}}
    function fixed_point$1(wrap)
     {var lazy_t=[];
      caml_update_dummy
       (lazy_t,
        [246,function(_aS_){return caml_call1(wrap,of_lazy$1(lazy_t))}]);
      return of_lazy$1(lazy_t)}
    var
     quickcheck_observer_bool=of_hash_fold(Base_Bool[3]),
     quickcheck_observer_char=of_hash_fold(Base_Char[3]),
     quickcheck_observer_int=of_hash_fold(Base_Int[6]),
     quickcheck_observer_int32=of_hash_fold(Base_Int32[6]),
     int63$0=of_hash_fold(Base_Int63[6]),
     quickcheck_observer_int64=of_hash_fold(Base_Int64[6]),
     quickcheck_observer_nativeint=of_hash_fold(Base_Nativeint[6]),
     quickcheck_observer_float=of_hash_fold(Base_Float[4]),
     quickcheck_observer_string=of_hash_fold(Base_String[20]),
     sexp$1=of_hash_fold(Base[84][1]),
     bigstring$0=of_hash_fold(caml_call1(_b_[6],Base[102])),
     float32_vec$0=of_hash_fold(caml_call1(_b_[6],Base[110])),
     float64_vec$1=of_hash_fold(caml_call1(_b_[6],Base[110])),
     float32_mat$0=of_hash_fold(caml_call1(_a_[6],Base[110])),
     float64_mat$1=of_hash_fold(caml_call1(_a_[6],Base[110]));
    function either$1(fst_t,snd_t)
     {return function(either,size,hash)
       {if(0 === either[0])
         {var fst=either[1];
          return observe(fst_t,fst,size,caml_call2(Base[117],hash,1))}
        var snd=either[1];
        return observe(snd_t,snd,size,caml_call2(Base[117],hash,2))}}
    function result$2(ok_t,err_t)
     {function _aR_(param)
       {if(0 === param[0]){var ok=param[1];return [0,ok]}
        var err=param[1];
        return [1,err]}
      return unmap(either$1(ok_t,err_t),_aR_)}
    function both$1(fst_t,snd_t)
     {return function(param,size,hash)
       {var
         snd=param[2],
         fst=param[1],
         hash$0=observe(fst_t,fst,size,hash),
         hash$1=observe(snd_t,snd,size,hash$0);
        return hash$1}}
    function quickcheck_observer_option(value_t)
     {function _aQ_(param)
       {if(param){var value=param[1];return [1,value]}return _aF_}
      return unmap(either$1(quickcheck_observer_unit,value_t),_aQ_)}
    function quickcheck_observer_list(elt_t)
     {return function(list,size,hash)
       {var
         _aN_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_aN_),
         length=caml_call1(Base_List[7],list),
         sizes$0=generate(sizes([0,length],[0,length],0),size,random);
        function _aO_(hash,elt,size)
         {return observe(elt_t,elt,size,caml_call2(Base[117],hash,1))}
        var _aP_=caml_call2(Base[117],hash,0);
        return caml_call4(Base_List[45],list,sizes$0,_aP_,_aO_)}}
    function fn$0(dom,rng)
     {return function(f,size,hash)
       {var
         _aK_=caml_call1(Base_Hash[9],hash),
         random=caml_call1(Splittable_random[1][2],_aK_),
         _aL_=caml_call2(Base[182],size,2),
         sizes$0=generate(sizes(0,0,0),_aL_,random);
        function _aM_(hash,size)
         {var x=generate(dom,size,random);
          return observe(rng,caml_call1(f,x),size,hash)}
        return caml_call3(Base_List[10],sizes$0,hash,_aM_)}}
    function map_tree(key_obs,data_obs)
     {var arg=Base_Map[101][3][62];
      function _aJ_(eta){return caml_call2(arg,0,eta)}
      return unmap(quickcheck_observer_list(both$1(key_obs,data_obs)),_aJ_)}
    function set_tree(elt_obs)
     {var _aI_=Base_Set[72][3][15];
      return unmap(quickcheck_observer_list(elt_obs),_aI_)}
    function map_t$0(key_obs,data_obs)
     {var _aH_=Base_Map[101][68];
      return unmap(map_tree(key_obs,data_obs),_aH_)}
    function set_t$0(elt_obs)
     {var _aG_=Base_Set[72][47];return unmap(set_tree(elt_obs),_aG_)}
    var
     Base_quickcheck_Observer=
      [0,
       quickcheck_observer_unit,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       int63$0,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       sexp$1,
       quickcheck_observer_option,
       quickcheck_observer_list,
       both$1,
       either$1,
       result$2,
       bigstring$0,
       float32_vec$0,
       float64_vec$1,
       float32_mat$0,
       float64_mat$1,
       fn$0,
       map_t$0,
       set_t$0,
       map_tree,
       set_tree,
       of_hash_fold,
       unmap,
       fixed_point$1,
       of_lazy$1,
       create,
       observe];
    caml_register_global
     (119,Base_quickcheck_Observer,"Base_quickcheck__Observer");
    var
     include$1=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list];
    caml_register_global(120,include$1,"Base_quickcheck__Export");
    var
     Private=[0],
     Base_quickcheck$0=
      [0,
       quickcheck_generator_unit,
       quickcheck_generator_bool,
       quickcheck_generator_char,
       quickcheck_generator_string,
       quickcheck_generator_int,
       quickcheck_generator_int32,
       quickcheck_generator_int64,
       quickcheck_generator_nativeint,
       quickcheck_generator_float,
       quickcheck_observer_unit,
       quickcheck_observer_bool,
       quickcheck_observer_char,
       quickcheck_observer_string,
       quickcheck_observer_int,
       quickcheck_observer_int32,
       quickcheck_observer_int64,
       quickcheck_observer_nativeint,
       quickcheck_observer_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_string,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_shrinker_float,
       quickcheck_generator_option,
       quickcheck_generator_list,
       quickcheck_observer_option,
       quickcheck_observer_list,
       quickcheck_shrinker_option,
       quickcheck_shrinker_list,
       Private];
    caml_register_global(121,Base_quickcheck$0,"Base_quickcheck");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYXNlX3F1aWNrY2hlY2suY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
