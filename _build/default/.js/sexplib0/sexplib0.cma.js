(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_format_float=runtime.caml_format_float,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst$11=caml_string_of_jsbytes(""),
     cst$2=caml_string_of_jsbytes("("),
     cst$3=caml_string_of_jsbytes("()"),
     cst$4=caml_string_of_jsbytes(")"),
     cst$5=caml_string_of_jsbytes(" "),
     cst$6=caml_string_of_jsbytes("("),
     cst$7=caml_string_of_jsbytes("()"),
     cst$8=caml_string_of_jsbytes(")"),
     cst$10=caml_string_of_jsbytes("()"),
     cst$9=caml_string_of_jsbytes("()"),
     cst=caml_string_of_jsbytes("\\"),
     cst_n=caml_string_of_jsbytes("\\n"),
     cst$0=caml_string_of_jsbytes(' "'),
     cst$1=caml_string_of_jsbytes('"'),
     t_sexp_grammar=[1,0],
     cst_Sexplib0_Sexp_Not_found_s=
      caml_string_of_jsbytes("Sexplib0__Sexp.Not_found_s"),
     cst_Sexplib0_Sexp_Of_sexp_erro=
      caml_string_of_jsbytes("Sexplib0__Sexp.Of_sexp_error"),
     unit_sexp_grammar=[1,[6,0]],
     bool_sexp_grammar=[1,[1,1]],
     string_sexp_grammar=[1,[1,0]],
     char_sexp_grammar=[1,[1,2]],
     int_sexp_grammar=[1,[1,4]],
     float_sexp_grammar=[1,[1,3]],
     int32_sexp_grammar=[1,[1,4]],
     int64_sexp_grammar=[1,[1,4]],
     nativeint_sexp_grammar=[1,[1,4]],
     ref_sexp_grammar=[1,[2,[0,caml_string_of_jsbytes("'a"),0],[3,0]]],
     lazy_t_sexp_grammar=[1,[2,[0,caml_string_of_jsbytes("'a"),0],[3,0]]],
     option_sexp_grammar=[1,[2,[0,caml_string_of_jsbytes("'a"),0],[7,[3,0]]]],
     list_sexp_grammar=
      [1,[2,[0,caml_string_of_jsbytes("'a"),0],[6,[0,[2,[3,0]],0]]]],
     empty_sexp_grammar=[1,[10,0]],
     tuple2_sexp_grammar=
      [1,
       [2,
        [0,caml_string_of_jsbytes("'a"),[0,caml_string_of_jsbytes("'b"),0]],
        [6,[0,[0,[3,0]],[0,[0,[3,1]],0]]]]],
     cst_Assert_failure=caml_string_of_jsbytes("Assert_failure"),
     cst_Match_failure=caml_string_of_jsbytes("Match_failure"),
     cst_fun_of_sexp_cannot_convert=
      caml_string_of_jsbytes("fun_of_sexp: cannot convert function values"),
     cst_opaque_of_sexp_cannot_conv=
      caml_string_of_jsbytes("opaque_of_sexp: cannot convert opaque values"),
     cst_hashtbl_of_sexp_tuple_list=
      caml_string_of_jsbytes("hashtbl_of_sexp: tuple list needed"),
     cst_hashtbl_of_sexp_list_neede=
      caml_string_of_jsbytes("hashtbl_of_sexp: list needed"),
     cst_array_of_sexp_list_needed=
      caml_string_of_jsbytes("array_of_sexp: list needed"),
     cst_list_of_sexp_list_needed=
      caml_string_of_jsbytes("list_of_sexp: list needed"),
     cst_triple_of_sexp_list_needed=
      caml_string_of_jsbytes("triple_of_sexp: list needed"),
     cst_triple_of_sexp_list_must_c=
      caml_string_of_jsbytes
       ("triple_of_sexp: list must contain exactly three elements only"),
     cst_pair_of_sexp_list_needed=
      caml_string_of_jsbytes("pair_of_sexp: list needed"),
     cst_pair_of_sexp_list_must_con=
      caml_string_of_jsbytes
       ("pair_of_sexp: list must contain exactly two elements only"),
     cst_None=caml_string_of_jsbytes("None"),
     cst_none=caml_string_of_jsbytes("none"),
     cst_option_of_sexp_only_none_c=
      caml_string_of_jsbytes("option_of_sexp: only none can be atom"),
     cst_Some=caml_string_of_jsbytes("Some"),
     cst_some=caml_string_of_jsbytes("some"),
     cst_option_of_sexp_list_must_r=
      caml_string_of_jsbytes
       ("option_of_sexp: list must represent optional value"),
     cst_None$0=caml_string_of_jsbytes("None"),
     cst_none$0=caml_string_of_jsbytes("none"),
     cst_option_of_sexp_only_none_c$0=
      caml_string_of_jsbytes("option_of_sexp: only none can be atom"),
     cst_Some$0=caml_string_of_jsbytes("Some"),
     cst_some$0=caml_string_of_jsbytes("some"),
     cst_option_of_sexp_list_must_b=
      caml_string_of_jsbytes("option_of_sexp: list must be (some el)"),
     cst_nativeint_of_sexp=caml_string_of_jsbytes("nativeint_of_sexp: "),
     cst_nativeint_of_sexp_atom_nee=
      caml_string_of_jsbytes("nativeint_of_sexp: atom needed"),
     cst_int64_of_sexp=caml_string_of_jsbytes("int64_of_sexp: "),
     cst_int64_of_sexp_atom_needed=
      caml_string_of_jsbytes("int64_of_sexp: atom needed"),
     cst_int32_of_sexp=caml_string_of_jsbytes("int32_of_sexp: "),
     cst_int32_of_sexp_atom_needed=
      caml_string_of_jsbytes("int32_of_sexp: atom needed"),
     cst_float_of_sexp=caml_string_of_jsbytes("float_of_sexp: "),
     cst_float_of_sexp_atom_needed=
      caml_string_of_jsbytes("float_of_sexp: atom needed"),
     cst_int_of_sexp=caml_string_of_jsbytes("int_of_sexp: "),
     cst_int_of_sexp_atom_needed=
      caml_string_of_jsbytes("int_of_sexp: atom needed"),
     cst_char_of_sexp_atom_string_m=
      caml_string_of_jsbytes
       ("char_of_sexp: atom string must contain one character only"),
     cst_char_of_sexp_atom_needed=
      caml_string_of_jsbytes("char_of_sexp: atom needed"),
     cst_bytes_of_sexp_atom_needed=
      caml_string_of_jsbytes("bytes_of_sexp: atom needed"),
     cst_string_of_sexp_atom_needed=
      caml_string_of_jsbytes("string_of_sexp: atom needed"),
     cst_False=caml_string_of_jsbytes("False"),
     cst_True=caml_string_of_jsbytes("True"),
     cst_false=caml_string_of_jsbytes("false"),
     cst_true=caml_string_of_jsbytes("true"),
     cst_bool_of_sexp_unknown_strin=
      caml_string_of_jsbytes("bool_of_sexp: unknown string"),
     cst_bool_of_sexp_atom_needed=
      caml_string_of_jsbytes("bool_of_sexp: atom needed"),
     cst_unit_of_sexp_empty_list_ne=
      caml_string_of_jsbytes("unit_of_sexp: empty list needed"),
     cst_15G=caml_string_of_jsbytes("%.15G"),
     cst_17G=caml_string_of_jsbytes("%.17G"),
     cst$13=caml_string_of_jsbytes(" "),
     cst_of_sexp_trying_to_convert_=
      caml_string_of_jsbytes("_of_sexp: trying to convert an empty type"),
     cst_of_sexp_the_empty_list_is_$0=
      caml_string_of_jsbytes
       ("_of_sexp: the empty list is an invalid polymorphic variant"),
     cst_of_sexp_a_nested_list_is_a$0=
      caml_string_of_jsbytes
       ("_of_sexp: a nested list is an invalid polymorphic variant"),
     cst_of_sexp_polymorphic_varian$0=
      caml_string_of_jsbytes
       ("_of_sexp: polymorphic variant tag takes an argument"),
     cst_of_sexp_polymorphic_varian=
      caml_string_of_jsbytes
       ("_of_sexp: polymorphic variant does not take arguments"),
     cst_of_sexp_no_matching_varian=
      caml_string_of_jsbytes("_of_sexp: no matching variant found"),
     cst_of_sexp_cannot_convert_val=
      caml_string_of_jsbytes
       ("_of_sexp: cannot convert values of types resulting from polymorphic record fields"),
     cst_of_sexp_list_instead_of_at=
      caml_string_of_jsbytes
       ("_of_sexp: list instead of atom for record expected"),
     cst_extra_fields=caml_string_of_jsbytes("extra fields"),
     cst_duplicate_fields=caml_string_of_jsbytes("duplicate fields"),
     cst$12=caml_string_of_jsbytes(" "),
     cst_of_sexp_record_conversion_$0=
      caml_string_of_jsbytes
       ("_of_sexp: record conversion: only pairs expected, their first element must be an atom"),
     cst_of_sexp_record_conversion_=
      caml_string_of_jsbytes
       ("_of_sexp: record conversion: a [sexp.bool] field was given a payload."),
     cst_of_sexp_unexpected_sum_tag=
      caml_string_of_jsbytes("_of_sexp: unexpected sum tag"),
     cst_of_sexp_the_empty_list_is_=
      caml_string_of_jsbytes("_of_sexp: the empty list is an invalid sum"),
     cst_of_sexp_a_nested_list_is_a=
      caml_string_of_jsbytes("_of_sexp: a nested list is an invalid sum"),
     cst_of_sexp_sum_tag_must_be_a_=
      caml_string_of_jsbytes("_of_sexp: sum tag must be a structured value"),
     cst_of_sexp_sum_tag_does_not_t=
      caml_string_of_jsbytes("_of_sexp: sum tag does not take arguments"),
     cst_Sexplib0_Sexp_conv_error_N=
      caml_string_of_jsbytes("Sexplib0__Sexp_conv_error.No_variant_match"),
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_StringLabels=global_data.Stdlib__StringLabels,
     Stdlib_Format=global_data.Stdlib__Format,
     Stdlib_ListLabels=global_data.Stdlib__ListLabels,
     Stdlib_Buffer=global_data.Stdlib__Buffer,
     Stdlib=global_data.Stdlib,
     Stdlib_BytesLabels=global_data.Stdlib__BytesLabels,
     Stdlib_Char=global_data.Stdlib__Char,
     Stdlib_Bytes=global_data.Stdlib__Bytes,
     Assert_failure=global_data.Assert_failure,
     Stdlib_Arg=global_data.Stdlib__Arg,
     Stdlib_Lazy=global_data.Stdlib__Lazy,
     Stdlib_Parsing=global_data.Stdlib__Parsing,
     Stdlib_Queue=global_data.Stdlib__Queue,
     Stdlib_Scanf=global_data.Stdlib__Scanf,
     Stdlib_Stack=global_data.Stdlib__Stack,
     Stdlib_Stream=global_data.Stdlib__Stream,
     Stdlib_Sys=global_data.Stdlib__Sys,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdlib_MoreLabels=global_data.Stdlib__MoreLabels,
     Stdlib_Printexc=global_data.Stdlib__Printexc,
     Stdlib_Ephemeron=global_data.Stdlib__Ephemeron,
     Stdlib_Gc=global_data.Stdlib__Gc,
     Stdlib_Nativeint=global_data.Stdlib__Nativeint,
     Stdlib_Int64=global_data.Stdlib__Int64,
     Stdlib_Int32=global_data.Stdlib__Int32,
     Stdlib_Obj=global_data.Stdlib__Obj,
     Sexplib0=[0];
    caml_register_global(153,Sexplib0,"Sexplib0__");
    var
     next=[0,0],
     _b_=[0,[15,[17,2,0]],caml_string_of_jsbytes("%a@?")],
     _a_=[0,0,0],
     _aJ_=[0,0],
     _aG_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),354,17],
     _aC_=[0,caml_string_of_jsbytes("Exit")],
     _aD_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),359,17],
     _ay_=[0,caml_string_of_jsbytes("End_of_file")],
     _az_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),364,17],
     _au_=[0,caml_string_of_jsbytes("Failure")],
     _av_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),369,17],
     _aq_=[0,caml_string_of_jsbytes("Not_found")],
     _ar_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),374,17],
     _am_=[0,caml_string_of_jsbytes("Invalid_argument")],
     _an_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),379,17],
     _aj_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),384,17],
     _af_=[0,caml_string_of_jsbytes("Not_found_s")],
     _ag_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),389,17],
     _ac_=[0,caml_string_of_jsbytes("Sys_error")],
     _ad_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),394,17],
     ___=[0,caml_string_of_jsbytes("Arg.Help")],
     _$_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),399,17],
     _W_=[0,caml_string_of_jsbytes("Arg.Bad")],
     _X_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),404,17],
     _S_=[0,caml_string_of_jsbytes("Lazy.Undefined")],
     _T_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),409,17],
     _O_=[0,caml_string_of_jsbytes("Parsing.Parse_error")],
     _P_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),414,17],
     _K_=[0,caml_string_of_jsbytes("Queue.Empty")],
     _L_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),419,17],
     _G_=[0,caml_string_of_jsbytes("Scanf.Scan_failure")],
     _H_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),424,17],
     _C_=[0,caml_string_of_jsbytes("Stack.Empty")],
     _D_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),429,17],
     _y_=[0,caml_string_of_jsbytes("Stream.Failure")],
     _z_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),434,17],
     _u_=[0,caml_string_of_jsbytes("Stream.Error")],
     _v_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),439,17],
     _q_=[0,caml_string_of_jsbytes("Sys.Break")],
     _r_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),444,17],
     _m_=[0,caml_string_of_jsbytes("Sexplib.Conv.Of_sexp_error")],
     _n_=[0,caml_string_of_jsbytes("src/sexp_conv.ml"),450,17],
     _k_=
      [0,
       [2,0,[12,32,[2,0,[12,58,[4,0,0,0,[12,58,[4,0,0,0,0]]]]]]],
       caml_string_of_jsbytes("%s %s:%d:%d")],
     _j_=[0,2],
     _h_=[0,caml_string_of_jsbytes("<fun>")],
     _g_=[0,caml_string_of_jsbytes("<opaque>")],
     _d_=[0,caml_string_of_jsbytes("some")],
     _e_=[1,0],
     _f_=[0,caml_string_of_jsbytes("none")],
     _c_=[1,0],
     _aO_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes("_of_sexp: polymorphic variant tag "),
         [3,
          0,
          [11,caml_string_of_jsbytes(" has incorrect number of arguments"),0]]]],
       caml_string_of_jsbytes
        ("%s_of_sexp: polymorphic variant tag %S has incorrect number of arguments")],
     _aN_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes
          ("_of_sexp: the following record elements were undefined: "),
         [2,0,0]]],
       caml_string_of_jsbytes
        ("%s_of_sexp: the following record elements were undefined: %s")],
     _aM_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes("_of_sexp: "),
         [2,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]],
       caml_string_of_jsbytes("%s_of_sexp: %s: %s")],
     _aL_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes("_of_sexp: sum tag "),
         [3,
          0,
          [11,caml_string_of_jsbytes(" has incorrect number of arguments"),0]]]],
       caml_string_of_jsbytes
        ("%s_of_sexp: sum tag %S has incorrect number of arguments")],
     _aK_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes("_of_sexp: tuple of size "),
         [4,0,0,0,[11,caml_string_of_jsbytes(" expected"),0]]]],
       caml_string_of_jsbytes("%s_of_sexp: tuple of size %d expected")];
    function create(param)
     {return [246,
              function(param){var id=next[1];next[1] = id + 1 | 0;return id}]}
    function force(t)
     {var _cf_=caml_obj_tag(t);
      return 250 === _cf_
              ?t[1]
              :246 === _cf_?caml_call1(CamlinternalLazy[2],t):t}
    function compare(a,b)
     {var _ce_=force(b);return runtime.caml_int_compare(force(a),_ce_)}
    var Sexplib0_Lazy_group_id=[0,compare,create,force];
    caml_register_global(155,Sexplib0_Lazy_group_id,"Sexplib0__Lazy_group_id");
    var Atom=[0],include=[0,Atom];
    caml_register_global(156,include,"Sexplib0__Raw_grammar");
    function sexp_of_t(t){return t}
    function t_of_sexp(t){return t}
    function compare$0(a$0,b$0)
     {if(a$0 === b$0)return 0;
      if(0 === a$0[0])
       {var _cc_=a$0[1];
        if(0 === b$0[0])
         {var b$1=b$0[1];return caml_call2(Stdlib_StringLabels[9],_cc_,b$1)}
        return -1}
      var _cd_=a$0[1];
      if(0 === b$0[0])return 1;
      var b$2=b$0[1],a=_cd_,b=b$2;
      for(;;)
       {if(a)
         {if(b)
           {var ys=b[2],y=b[1],xs=a[2],x=a[1],res=compare$0(x,y);
            if(0 === res){var a=xs,b=ys;continue}
            return res}
          return 1}
        return b?-1:0}}
    function equal(a,b){return 0 === compare$0(a,b)?1:0}
    var
     Not_found_s=[248,cst_Sexplib0_Sexp_Not_found_s,caml_fresh_oo_id(0)],
     Of_sexp_error=[248,cst_Sexplib0_Sexp_Of_sexp_erro,caml_fresh_oo_id(0)],
     default_indent=[0,1];
    function must_escape(str)
     {var len=caml_ml_string_length(str),_b4_=0 === len?1:0;
      if(_b4_)return _b4_;
      var ix$3=len - 1 | 0,ix=ix$3;
      for(;;)
       {var match=caml_string_get(str,ix),switch$0=0;
        if(92 <= match)
         {var switcher=match - 93 | 0;
          if(33 < switcher >>> 0)
           if(0 <= switcher)switch$0 = 2;else switch$0 = 1;
          else
           if(31 === switcher)
            {var _b5_=0 < ix?1:0;
             if(_b5_)
              {var
                ix$0=ix - 1 | 0,
                _b6_=caml_string_get(str,ix$0),
                _b7_=caml_call2(Stdlib_Char[8],_b6_,35);
               if(! _b7_){var ix=ix$0;continue}
               var _b8_=_b7_}
             else
              var _b8_=_b5_;
             return _b8_}}
        else
         if(42 <= match)
          {if(59 === match)switch$0 = 1}
         else
          if(33 <= match)
           switch(match - 33 | 0)
            {case 2:
              var _b__=0 < ix?1:0;
              if(_b__)
               {var
                 ix$2=ix - 1 | 0,
                 _b$_=caml_string_get(str,ix$2),
                 _ca_=caml_call2(Stdlib_Char[8],_b$_,124);
                if(! _ca_){var ix=ix$2;continue}
                var _cb_=_ca_}
              else
               var _cb_=_b__;
              return _cb_;
             case 1:
             case 7:
             case 8:switch$0 = 1;break
             }
          else
           switch$0 = 2;
        switch(switch$0)
         {case 0:
           var _b9_=0 < ix?1:0;
           if(_b9_){var ix$1=ix - 1 | 0,ix=ix$1;continue}
           return _b9_;
          case 1:return 1;
          default:return 1}}}
    function escaped(s)
     {var n=[0,0],_bU_=caml_ml_string_length(s) - 1 | 0,_bT_=0;
      if(! (_bU_ < 0))
       {var i$0=_bT_;
        for(;;)
         {var match=caml_string_unsafe_get(s,i$0),switch$0=0;
          if(32 <= match)
           {var _b1_=match - 34 | 0,switch$1=0;
            if(58 < _b1_ >>> 0)
             {if(93 <= _b1_)switch$1 = 1}
            else
             if(56 < _b1_ - 1 >>> 0){switch$0 = 1;switch$1 = 1}
            if(! switch$1){var _b2_=1;switch$0 = 2}}
          else
           if(11 <= match)
            {if(13 === match)switch$0 = 1}
           else
            if(8 <= match)switch$0 = 1;
          switch(switch$0){case 0:var _b2_=4;break;case 1:var _b2_=2;break}
          n[1] = n[1] + _b2_ | 0;
          var _b3_=i$0 + 1 | 0;
          if(_bU_ !== i$0){var i$0=_b3_;continue}
          break}}
      if(n[1] === caml_ml_string_length(s))return s;
      var s$0=caml_create_bytes(n[1]);
      n[1] = 0;
      var _bW_=caml_ml_string_length(s) - 1 | 0,_bV_=0;
      if(! (_bW_ < 0))
       {var i=_bV_;
        for(;;)
         {var c=caml_string_unsafe_get(s,i),switch$2=0;
          if(35 <= c)
           if(92 === c)
            switch$2 = 2;
           else
            if(127 <= c)switch$2 = 1;else switch$2 = 3;
          else
           if(32 <= c)
            if(34 <= c)switch$2 = 2;else switch$2 = 3;
           else
            if(14 <= c)
             switch$2 = 1;
            else
             switch(c)
              {case 8:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],98);
                break;
               case 9:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],116);
                break;
               case 10:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],110);
                break;
               case 13:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],114);
                break;
               default:switch$2 = 1}
          switch(switch$2)
           {case 1:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             var _bY_=caml_call1(Stdlib_Char[1],48 + (c / 100 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_bY_);
             n[1]++;
             var
              _bZ_=
               caml_call1(Stdlib_Char[1],48 + ((c / 10 | 0) % 10 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_bZ_);
             n[1]++;
             var _b0_=caml_call1(Stdlib_Char[1],48 + (c % 10 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_b0_);
             break;
            case 2:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],c);
             break;
            case 3:caml_bytes_unsafe_set(s$0,n[1],c);break
            }
          n[1]++;
          var _bX_=i + 1 | 0;
          if(_bW_ !== i){var i=_bX_;continue}
          break}}
      return caml_call1(Stdlib_BytesLabels[48],s$0)}
    function esc_str(str)
     {var
       src=escaped(str),
       len=caml_ml_string_length(src),
       dst=caml_create_bytes(len + 2 | 0);
      caml_call5(Stdlib_Bytes[12],src,0,dst,1,len);
      caml_bytes_unsafe_set(dst,0,34);
      caml_bytes_unsafe_set(dst,len + 1 | 0,34);
      return caml_call1(Stdlib_BytesLabels[48],dst)}
    function index_of_newline(str,start)
     {try
       {var _bR_=[0,caml_call3(Stdlib_StringLabels[31],str,start,10)];
        return _bR_}
      catch(_bS_)
       {_bS_ = caml_wrap_exception(_bS_);
        if(_bS_ === Stdlib[8])return 0;
        throw _bS_}}
    function mach_maybe_esc_str(str){return must_escape(str)?esc_str(str):str}
    function pp_hum_indent(indent,ppf,param)
     {if(0 === param[0])
       {var str=param[1];
        if(must_escape(str))
         {var match=index_of_newline(str,0);
          if(match)
           var
            index=match[1],
            _bN_=(index + 1 | 0) === caml_ml_string_length(str)?1:0;
          else
           var _bN_=1;
          if(_bN_)
           {var _bO_=esc_str(str);
            return caml_call2(Stdlib_Format[13],ppf,_bO_)}
          caml_call2(Stdlib_Format[1],ppf,0);
          caml_call2(Stdlib_Format[13],ppf,cst$0);
          var index$0=0;
          for(;;)
           {var end_pos_opt=index_of_newline(str,index$0);
            if(end_pos_opt)
             var end_pos=end_pos_opt[1],end_pos$0=end_pos;
            else
             var end_pos$0=caml_ml_string_length(str);
            var
             next_line=
              caml_call3
               (Stdlib_StringLabels[15],str,index$0,end_pos$0 - index$0 | 0),
             _bP_=escaped(next_line);
            caml_call2(Stdlib_Format[13],ppf,_bP_);
            if(end_pos_opt)
             {var newline_index=end_pos_opt[1];
              caml_call2(Stdlib_Format[13],ppf,cst);
              caml_call2(Stdlib_Format[34],ppf,0);
              caml_call2(Stdlib_Format[13],ppf,cst_n);
              var index$1=newline_index + 1 | 0,index$0=index$1;
              continue}
            caml_call2(Stdlib_Format[13],ppf,cst$1);
            return caml_call2(Stdlib_Format[3],ppf,0)}}
        return caml_call2(Stdlib_Format[13],ppf,str)}
      var _bQ_=param[1];
      if(_bQ_)
       {var t=_bQ_[2],h=_bQ_[1];
        caml_call2(Stdlib_Format[1],ppf,indent);
        caml_call2(Stdlib_Format[13],ppf,cst$2);
        pp_hum_indent(indent,ppf,h);
        var param$0=t;
        for(;;)
         {if(param$0)
           {var t$0=param$0[2],h$0=param$0[1];
            caml_call2(Stdlib_Format[27],ppf,0);
            pp_hum_indent(indent,ppf,h$0);
            var param$0=t$0;
            continue}
          caml_call2(Stdlib_Format[13],ppf,cst$4);
          return caml_call2(Stdlib_Format[3],ppf,0)}}
      return caml_call2(Stdlib_Format[13],ppf,cst$3)}
    function pp_mach_internal(may_need_space,ppf,param)
     {if(0 === param[0])
       {var
         str=param[1],
         str$0=mach_maybe_esc_str(str),
         new_may_need_space=str$0 === str?1:0,
         new_may_need_space$0=may_need_space?new_may_need_space:may_need_space;
        if(new_may_need_space$0)caml_call2(Stdlib_Format[13],ppf,cst$5);
        caml_call2(Stdlib_Format[13],ppf,str$0);
        return new_may_need_space}
      var _bM_=param[1];
      if(_bM_)
       {var t=_bM_[2],h=_bM_[1];
        caml_call2(Stdlib_Format[13],ppf,cst$6);
        var
         may_need_space$0=pp_mach_internal(0,ppf,h),
         may_need_space$1=may_need_space$0,
         param$0=t;
        for(;;)
         {if(param$0)
           {var
             t$0=param$0[2],
             h$0=param$0[1],
             may_need_space$2=pp_mach_internal(may_need_space$1,ppf,h$0),
             may_need_space$1=may_need_space$2,
             param$0=t$0;
            continue}
          caml_call2(Stdlib_Format[13],ppf,cst$8);
          return 0}}
      caml_call2(Stdlib_Format[13],ppf,cst$7);
      return 0}
    function pp_hum(ppf,sexp)
     {return pp_hum_indent(default_indent[1],ppf,sexp)}
    function pp(ppf,sexp){pp_mach_internal(0,ppf,sexp);return 0}
    function size_loop(acc,param)
     {var _bK_=acc[2],_bL_=acc[1];
      if(0 === param[0])
       {var str=param[1];
        return [0,_bL_ + 1 | 0,_bK_ + caml_ml_string_length(str) | 0]}
      var lst=param[1];
      return caml_call3(Stdlib_ListLabels[25],size_loop,acc,lst)}
    function size(sexp){return size_loop(_a_,sexp)}
    function to_buffer_hum(buf,opt,sexp)
     {if(opt)var sth=opt[1],indent=sth;else var indent=default_indent[1];
      var ppf=caml_call1(Stdlib_Format[111],buf);
      function _bH_(_bI_,_bJ_){return pp_hum_indent(indent,_bI_,_bJ_)}
      return caml_call4(Stdlib_Format[129],ppf,_b_,_bH_,sexp)}
    function to_buffer(buf,sexp)
     {function loop(may_need_space,param)
       {if(0 === param[0])
         {var
           str=param[1],
           str$0=mach_maybe_esc_str(str),
           new_may_need_space=str$0 === str?1:0,
           new_may_need_space$0=
            may_need_space?new_may_need_space:may_need_space;
          if(new_may_need_space$0)caml_call2(Stdlib_Buffer[12],buf,32);
          caml_call2(Stdlib_Buffer[16],buf,str$0);
          return new_may_need_space}
        var _bG_=param[1];
        if(_bG_)
         {var t=_bG_[2],h=_bG_[1];
          caml_call2(Stdlib_Buffer[12],buf,40);
          var
           may_need_space$0=loop(0,h),
           may_need_space$1=may_need_space$0,
           param$0=t;
          for(;;)
           {if(param$0)
             {var
               t$0=param$0[2],
               h$0=param$0[1],
               may_need_space$2=loop(may_need_space$1,h$0),
               may_need_space$1=may_need_space$2,
               param$0=t$0;
              continue}
            caml_call2(Stdlib_Buffer[12],buf,41);
            return 0}}
        caml_call2(Stdlib_Buffer[16],buf,cst$9);
        return 0}
      loop(0,sexp);
      return 0}
    function to_buffer_gen(buf,add_char,add_string,sexp)
     {function loop(may_need_space,param)
       {if(0 === param[0])
         {var
           str=param[1],
           str$0=mach_maybe_esc_str(str),
           new_may_need_space=str$0 === str?1:0,
           new_may_need_space$0=
            may_need_space?new_may_need_space:may_need_space;
          if(new_may_need_space$0)caml_call2(add_char,buf,32);
          caml_call2(add_string,buf,str$0);
          return new_may_need_space}
        var _bF_=param[1];
        if(_bF_)
         {var t=_bF_[2],h=_bF_[1];
          caml_call2(add_char,buf,40);
          var
           may_need_space$0=loop(0,h),
           may_need_space$1=may_need_space$0,
           param$0=t;
          for(;;)
           {if(param$0)
             {var
               t$0=param$0[2],
               h$0=param$0[1],
               may_need_space$2=loop(may_need_space$1,h$0),
               may_need_space$1=may_need_space$2,
               param$0=t$0;
              continue}
            caml_call2(add_char,buf,41);
            return 0}}
        caml_call2(add_string,buf,cst$10);
        return 0}
      loop(0,sexp);
      return 0}
    function buffer(param){return caml_call1(Stdlib_Buffer[1],1024)}
    function to_string_hum(indent,sexp)
     {if(0 === sexp[0])
       {var str=sexp[1],match=index_of_newline(str,0),_bE_=match?0:1;
        if(_bE_)return mach_maybe_esc_str(str)}
      var buf=buffer(0);
      to_buffer_hum(buf,indent,sexp);
      return caml_call1(Stdlib_Buffer[2],buf)}
    function to_string(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return mach_maybe_esc_str(str)}
      var buf=buffer(0);
      to_buffer(buf,sexp);
      return caml_call1(Stdlib_Buffer[2],buf)}
    var
     of_float_style=[0,1009018843],
     of_int_style=[0,1009018843],
     Builtin=
      [0,
       unit_sexp_grammar,
       bool_sexp_grammar,
       string_sexp_grammar,
       string_sexp_grammar,
       char_sexp_grammar,
       int_sexp_grammar,
       float_sexp_grammar,
       int32_sexp_grammar,
       int64_sexp_grammar,
       nativeint_sexp_grammar,
       ref_sexp_grammar,
       lazy_t_sexp_grammar,
       option_sexp_grammar,
       list_sexp_grammar,
       list_sexp_grammar];
    function message(name,fields)
     {function conv_fields(param)
       {if(param)
         {var rest=param[2],match=param[1],fsexp=match[2],fname=match[1];
          return caml_string_notequal(fname,cst$11)
                  ?[0,[1,[0,[0,fname],[0,fsexp,0]]],conv_fields(rest)]
                  :[0,fsexp,conv_fields(rest)]}
        return 0}
      return [1,[0,[0,name],conv_fields(fields)]]}
    var
     Sexplib0_Sexp=
      [0,
       t_of_sexp,
       sexp_of_t,
       t_sexp_grammar,
       equal,
       compare$0,
       Not_found_s,
       Of_sexp_error,
       message,
       default_indent,
       pp_hum,
       pp_hum_indent,
       pp,
       pp,
       to_string_hum,
       to_string,
       to_string,
       of_float_style,
       of_int_style,
       [0,
        [0,
         Builtin,
         empty_sexp_grammar,
         empty_sexp_grammar,
         empty_sexp_grammar,
         tuple2_sexp_grammar],
        size,
        buffer,
        to_buffer,
        to_buffer_hum,
        to_buffer,
        to_buffer_gen,
        mach_maybe_esc_str,
        must_escape,
        esc_str]];
    caml_register_global(165,Sexplib0_Sexp,"Sexplib0__Sexp");
    var
     default_string_of_float=
      [0,
       function(x)
        {var y=caml_format_float(cst_15G,x);
         return caml_float_of_string(y) == x?y:caml_format_float(cst_17G,x)}],
     read_old_option_format=[0,1],
     write_old_option_format=[0,1];
    function list_map(f,l)
     {var _bD_=caml_call2(Stdlib_ListLabels[21],f,l);
      return caml_call1(Stdlib_ListLabels[9],_bD_)}
    function sexp_of_unit(param){return _c_}
    function sexp_of_bool(b){return [0,caml_call1(Stdlib[30],b)]}
    function sexp_of_string(str){return [0,str]}
    function sexp_of_bytes(bytes)
     {return [0,caml_call1(Stdlib_BytesLabels[6],bytes)]}
    function sexp_of_char(c)
     {return [0,caml_call2(Stdlib_StringLabels[1],1,c)]}
    function sexp_of_int(n){return [0,caml_call1(Stdlib[33],n)]}
    function sexp_of_float(n)
     {return [0,caml_call1(default_string_of_float[1],n)]}
    function sexp_of_int32(n){return [0,caml_call1(Stdlib_Int32[14],n)]}
    function sexp_of_int64(n){return [0,caml_call1(Stdlib_Int64[14],n)]}
    function sexp_of_nativeint(n)
     {return [0,caml_call1(Stdlib_Nativeint[15],n)]}
    function sexp_of_ref(sexp_of_a,rf){return caml_call1(sexp_of_a,rf[1])}
    function sexp_of_lazy_t(sexp_of_a,lv)
     {var
       _bB_=caml_obj_tag(lv),
       _bC_=
        250 === _bB_?lv[1]:246 === _bB_?caml_call1(CamlinternalLazy[2],lv):lv;
      return caml_call1(sexp_of_a,_bC_)}
    function sexp_of_option(sexp_of_a,param)
     {if(param)
       {var x=param[1];
        return write_old_option_format[1]
                ?[1,[0,caml_call1(sexp_of_a,x),0]]
                :[1,[0,_d_,[0,caml_call1(sexp_of_a,x),0]]]}
      return write_old_option_format[1]?_e_:_f_}
    function sexp_of_pair(sexp_of_a,sexp_of_b,param)
     {var b=param[2],a=param[1],_bA_=[0,caml_call1(sexp_of_b,b),0];
      return [1,[0,caml_call1(sexp_of_a,a),_bA_]]}
    function sexp_of_triple(sexp_of_a,sexp_of_b,sexp_of_c,param)
     {var
       c=param[3],
       b=param[2],
       a=param[1],
       _by_=[0,caml_call1(sexp_of_c,c),0],
       _bz_=[0,caml_call1(sexp_of_b,b),_by_];
      return [1,[0,caml_call1(sexp_of_a,a),_bz_]]}
    function sexp_of_list(sexp_of_a,lst)
     {var _bx_=caml_call2(Stdlib_ListLabels[21],sexp_of_a,lst);
      return [1,caml_call1(Stdlib_ListLabels[9],_bx_)]}
    function sexp_of_array(sexp_of_a,ar)
     {var lst_ref=[0,0],_bu_=ar.length - 1 - 1 | 0;
      if(! (_bu_ < 0))
       {var i=_bu_;
        for(;;)
         {var _bv_=lst_ref[1];
          lst_ref[1]
          =
          [0,caml_call1(sexp_of_a,caml_check_bound(ar,i)[1 + i]),_bv_];
          var _bw_=i - 1 | 0;
          if(0 !== i){var i=_bw_;continue}
          break}}
      return [1,lst_ref[1]]}
    function sexp_of_hashtbl(sexp_of_key,sexp_of_val,htbl)
     {function coll(k,v,acc)
       {var _bt_=[0,caml_call1(sexp_of_val,v),0];
        return [0,[1,[0,caml_call1(sexp_of_key,k),_bt_]],acc]}
      return [1,caml_call3(Stdlib_MoreLabels[1][14],coll,htbl,0)]}
    function sexp_of_opaque(param){return _g_}
    function sexp_of_fun(param){return _h_}
    var
     compare$1=runtime.caml_compare,
     Int=[0,compare$1],
     Exn_ids=caml_call1(Stdlib_MoreLabels[2][1],Int),
     id=Stdlib_Obj[25],
     of_val=Stdlib_Obj[23],
     exn_id_map=[0,Exn_ids[1]];
    function clean_up_handler(slot)
     {for(;;)
       {var
         id$0=caml_call1(id,slot),
         old_exn_id_map=exn_id_map[1],
         new_exn_id_map=caml_call2(Exn_ids[7],id$0,old_exn_id_map);
        if(exn_id_map[1] !== old_exn_id_map)continue;
        exn_id_map[1] = new_exn_id_map;
        return 0}}
    function add(opt,extension_constructor,sexp_of_exn)
     {if(opt)var sth=opt[1],finalise=sth;else var finalise=1;
      var id$0=caml_call1(id,extension_constructor);
      function loop(param)
       {for(;;)
         {var
           old_exn_id_map=exn_id_map[1],
           ephe=caml_call1(Stdlib_Ephemeron[1][1],0);
          caml_call2(Stdlib_Ephemeron[1][10],ephe,sexp_of_exn);
          caml_call2(Stdlib_Ephemeron[1][4],ephe,extension_constructor);
          var new_exn_id_map=caml_call3(Exn_ids[4],id$0,ephe,old_exn_id_map);
          if(exn_id_map[1] !== old_exn_id_map)continue;
          exn_id_map[1] = new_exn_id_map;
          if(finalise)
           try
            {var
              _br_=
               caml_call2(Stdlib_Gc[3],clean_up_handler,extension_constructor);
             return _br_}
           catch(_bs_)
            {_bs_ = caml_wrap_exception(_bs_);
             if(_bs_[1] === Stdlib[6])return 0;
             throw _bs_}
          return finalise}}
      return loop(0)}
    function add_auto(finalise,exn,sexp_of_exn)
     {return add(finalise,caml_call1(of_val,exn),sexp_of_exn)}
    function find_auto(exn)
     {var id$0=caml_call1(id,caml_call1(of_val,exn));
      try
       {var ephe=caml_call2(Exn_ids[28],id$0,exn_id_map[1])}
      catch(_bq_)
       {_bq_ = caml_wrap_exception(_bq_);
        if(_bq_ === Stdlib[8])return 0;
        throw _bq_}
      var match=caml_call1(Stdlib_Ephemeron[1][8],ephe);
      if(match)
       {var sexp_of_exn=match[1];return [0,caml_call1(sexp_of_exn,exn)]}
      return 0}
    function size$0(param)
     {var _bn_=0,_bo_=exn_id_map[1];
      function _bp_(param,ephe,acc)
       {var match=caml_call1(Stdlib_Ephemeron[1][8],ephe);
        return match?acc + 1 | 0:acc}
      return caml_call3(Exn_ids[13],_bp_,_bo_,_bn_)}
    var For_unit_tests_only=[0,size$0];
    function sexp_of_exn_opt(exn){return find_auto(exn)}
    function sexp_of_exn(exn)
     {var match=sexp_of_exn_opt(exn);
      if(match){var sexp=match[1];return sexp}
      return [1,[0,[0,caml_call1(Stdlib_Printexc[1],exn)],0]]}
    function exn_to_string(e){return to_string_hum(0,sexp_of_exn(e))}
    function _i_(exn)
     {var match=sexp_of_exn_opt(exn);
      if(match){var sexp=match[1];return [0,to_string_hum(_j_,sexp)]}
      return 0}
    caml_call1(Stdlib_Printexc[9],_i_);
    var record_check_extra_fields=[0,1];
    function of_sexp_error_exn(exc,sexp){throw [0,Of_sexp_error,exc,sexp]}
    function of_sexp_error(what,sexp)
     {throw [0,Of_sexp_error,[0,Stdlib[7],what],sexp]}
    function unit_of_sexp(sexp)
     {if(1 === sexp[0] && ! sexp[1])return 0;
      return of_sexp_error(cst_unit_of_sexp_empty_list_ne,sexp)}
    function bool_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _bm_=sexp[1];
        if(caml_string_notequal(_bm_,cst_False))
         {var switch$0=0;
          if(caml_string_notequal(_bm_,cst_True))
           if(caml_string_notequal(_bm_,cst_false))
            {if(caml_string_notequal(_bm_,cst_true))
              return of_sexp_error(cst_bool_of_sexp_unknown_strin,sexp)}
           else
            switch$0 = 1;
          if(! switch$0)return 1}
        return 0}
      return of_sexp_error(cst_bool_of_sexp_atom_needed,sexp)}
    function string_of_sexp(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return str}
      return of_sexp_error(cst_string_of_sexp_atom_needed,sexp)}
    function bytes_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];return caml_call1(Stdlib_BytesLabels[5],str)}
      return of_sexp_error(cst_bytes_of_sexp_atom_needed,sexp)}
    function char_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        if(1 !== caml_ml_string_length(str))
         of_sexp_error(cst_char_of_sexp_atom_string_m,sexp);
        return caml_string_get(str,0)}
      return of_sexp_error(cst_char_of_sexp_atom_needed,sexp)}
    function int_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bl_=caml_int_of_string(str);return _bl_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bk_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[28],cst_int_of_sexp,_bk_),sexp)}}
      return of_sexp_error(cst_int_of_sexp_atom_needed,sexp)}
    function float_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bj_=caml_float_of_string(str);return _bj_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bi_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[28],cst_float_of_sexp,_bi_),sexp)}}
      return of_sexp_error(cst_float_of_sexp_atom_needed,sexp)}
    function int32_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bh_=caml_int_of_string(str);return _bh_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bg_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[28],cst_int32_of_sexp,_bg_),sexp)}}
      return of_sexp_error(cst_int32_of_sexp_atom_needed,sexp)}
    function int64_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bf_=runtime.caml_int64_of_string(str);return _bf_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _be_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[28],cst_int64_of_sexp,_be_),sexp)}}
      return of_sexp_error(cst_int64_of_sexp_atom_needed,sexp)}
    function nativeint_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bd_=caml_int_of_string(str);return _bd_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bc_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[28],cst_nativeint_of_sexp,_bc_),sexp)}}
      return of_sexp_error(cst_nativeint_of_sexp_atom_nee,sexp)}
    function ref_of_sexp(a_of_sexp,sexp)
     {return [0,caml_call1(a_of_sexp,sexp)]}
    function lazy_t_of_sexp(a_of_sexp,sexp)
     {var _bb_=caml_call1(a_of_sexp,sexp);
      return caml_call1(Stdlib_Lazy[4],_bb_)}
    function option_of_sexp(a_of_sexp,sexp)
     {if(read_old_option_format[1])
       {if(0 === sexp[0])
         {var _a3_=sexp[1];
          if
           (caml_string_notequal(_a3_,cst_None)
            &&
            caml_string_notequal(_a3_,cst_none))
           return of_sexp_error(cst_option_of_sexp_only_none_c,sexp)}
        else
         {var _a4_=sexp[1];
          if(_a4_)
           {var _a5_=_a4_[1];
            if(_a4_[2])
             {var switch$0=0;
              if(0 === _a5_[0])
               {var _a6_=_a5_[1],switch$1=0;
                if
                 (caml_string_notequal(_a6_,cst_Some)
                  &&
                  caml_string_notequal(_a6_,cst_some))
                 switch$1 = 1;
                if(! switch$1)
                 {var _a7_=_a4_[2];if(! _a7_[2]){var el=_a7_[1];switch$0 = 1}}}
              if(! switch$0)
               return of_sexp_error(cst_option_of_sexp_list_must_r,sexp)}
            else
             var el=_a5_;
            return [0,caml_call1(a_of_sexp,el)]}}
        return 0}
      if(0 === sexp[0])
       {var _a8_=sexp[1];
        if
         (caml_string_notequal(_a8_,cst_None$0)
          &&
          caml_string_notequal(_a8_,cst_none$0))
         return of_sexp_error(cst_option_of_sexp_only_none_c$0,sexp);
        return 0}
      var _a9_=sexp[1];
      if(_a9_)
       {var _a__=_a9_[1];
        if(0 === _a__[0])
         {var _a$_=_a__[1],switch$2=0;
          if
           (!
            caml_string_notequal(_a$_,cst_Some$0)
            ||
            !
            caml_string_notequal(_a$_,cst_some$0))
           switch$2 = 1;
          if(switch$2)
           {var _ba_=_a9_[2];
            if(_ba_ && ! _ba_[2])
             {var el$0=_ba_[1];return [0,caml_call1(a_of_sexp,el$0)]}}}}
      return of_sexp_error(cst_option_of_sexp_list_must_b,sexp)}
    function pair_of_sexp(a_of_sexp,b_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_pair_of_sexp_list_needed,sexp);
      var _a1_=sexp[1];
      if(_a1_)
       {var _a2_=_a1_[2];
        if(_a2_ && ! _a2_[2])
         {var
           b_sexp=_a2_[1],
           a_sexp=_a1_[1],
           a=caml_call1(a_of_sexp,a_sexp),
           b=caml_call1(b_of_sexp,b_sexp);
          return [0,a,b]}}
      return of_sexp_error(cst_pair_of_sexp_list_must_con,sexp)}
    function triple_of_sexp(a_of_sexp,b_of_sexp,c_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_triple_of_sexp_list_needed,sexp);
      var _aY_=sexp[1];
      if(_aY_)
       {var _aZ_=_aY_[2];
        if(_aZ_)
         {var _a0_=_aZ_[2];
          if(_a0_ && ! _a0_[2])
           {var
             c_sexp=_a0_[1],
             b_sexp=_aZ_[1],
             a_sexp=_aY_[1],
             a=caml_call1(a_of_sexp,a_sexp),
             b=caml_call1(b_of_sexp,b_sexp),
             c=caml_call1(c_of_sexp,c_sexp);
            return [0,a,b,c]}}}
      return of_sexp_error(cst_triple_of_sexp_list_must_c,sexp)}
    function list_of_sexp(a_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_list_of_sexp_list_needed,sexp);
      var lst=sexp[1],rev_lst=caml_call2(Stdlib_ListLabels[21],a_of_sexp,lst);
      return caml_call1(Stdlib_ListLabels[9],rev_lst)}
    function array_of_sexp(a_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_array_of_sexp_list_needed,sexp);
      var _aW_=sexp[1];
      if(_aW_)
       {var
         t=_aW_[2],
         h=_aW_[1],
         len=caml_call1(Stdlib_ListLabels[1],t) + 1 | 0,
         res=runtime.caml_make_vect(len,caml_call1(a_of_sexp,h)),
         i=1,
         param=t;
        for(;;)
         {if(param)
           {var t$0=param[2],h$0=param[1],_aX_=caml_call1(a_of_sexp,h$0);
            caml_check_bound(res,i)[1 + i] = _aX_;
            var i$0=i + 1 | 0,i=i$0,param=t$0;
            continue}
          return res}}
      return [0]}
    function hashtbl_of_sexp(key_of_sexp,val_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_hashtbl_of_sexp_list_neede,sexp);
      var lst=sexp[1],htbl=caml_call2(Stdlib_MoreLabels[1][1],0,0);
      function act(param)
       {if(1 === param[0])
         {var _aS_=param[1];
          if(_aS_)
           {var _aT_=_aS_[2];
            if(_aT_ && ! _aT_[2])
             {var
               v_sexp=_aT_[1],
               k_sexp=_aS_[1],
               _aU_=caml_call1(val_of_sexp,v_sexp),
               _aV_=caml_call1(key_of_sexp,k_sexp);
              return caml_call3(Stdlib_MoreLabels[1][5],htbl,_aV_,_aU_)}}}
        return of_sexp_error(cst_hashtbl_of_sexp_tuple_list,sexp)}
      caml_call2(Stdlib_ListLabels[17],act,lst);
      return htbl}
    function opaque_of_sexp(sexp)
     {return of_sexp_error(cst_opaque_of_sexp_cannot_conv,sexp)}
    function fun_of_sexp(sexp)
     {return of_sexp_error(cst_fun_of_sexp_cannot_convert,sexp)}
    function get_flc_error(name,param)
     {var chr=param[3],line=param[2],file=param[1];
      return [0,caml_call5(Stdlib_Printf[4],_k_,name,file,line,chr)]}
    var
     _l_=0,
     _o_=
      [0,
       [0,
        Of_sexp_error,
        function(param)
         {if(param[1] === Of_sexp_error)
           {var sexp=param[3],exc=param[2];
            return [1,[0,_m_,[0,sexp_of_exn(exc),[0,sexp,0]]]]}
          throw [0,Assert_failure,_n_]}],
       _l_];
    function _p_(param)
     {if(param === Stdlib_Sys[44])return _q_;throw [0,Assert_failure,_r_]}
    var _s_=[0,[0,Stdlib_Sys[44],_p_],_o_];
    function _t_(param)
     {if(param[1] === Stdlib_Stream[2])
       {var arg=param[2];return [1,[0,_u_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_v_]}
    var _w_=[0,[0,Stdlib_Stream[2],_t_],_s_];
    function _x_(param)
     {if(param === Stdlib_Stream[1])return _y_;throw [0,Assert_failure,_z_]}
    var _A_=[0,[0,Stdlib_Stream[1],_x_],_w_];
    function _B_(param)
     {if(param === Stdlib_Stack[1])return _C_;throw [0,Assert_failure,_D_]}
    var _E_=[0,[0,Stdlib_Stack[1],_B_],_A_];
    function _F_(param)
     {if(param[1] === Stdlib_Scanf[2])
       {var arg=param[2];return [1,[0,_G_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_H_]}
    var _I_=[0,[0,Stdlib_Scanf[2],_F_],_E_];
    function _J_(param)
     {if(param === Stdlib_Queue[1])return _K_;throw [0,Assert_failure,_L_]}
    var _M_=[0,[0,Stdlib_Queue[1],_J_],_I_];
    function _N_(param)
     {if(param === Stdlib_Parsing[10])return _O_;throw [0,Assert_failure,_P_]}
    var _Q_=[0,[0,Stdlib_Parsing[10],_N_],_M_];
    function _R_(param)
     {if(param === Stdlib_Lazy[1])return _S_;throw [0,Assert_failure,_T_]}
    var _U_=[0,[0,Stdlib_Lazy[1],_R_],_Q_];
    function _V_(param)
     {if(param[1] === Stdlib_Arg[8])
       {var arg=param[2];return [1,[0,_W_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_X_]}
    var _Y_=[0,[0,Stdlib_Arg[8],_V_],_U_];
    function _Z_(param)
     {if(param[1] === Stdlib_Arg[7])
       {var arg=param[2];return [1,[0,___,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_$_]}
    var _aa_=[0,[0,Stdlib_Arg[7],_Z_],_Y_];
    function _ab_(param)
     {if(param[1] === Stdlib[11])
       {var arg=param[2];return [1,[0,_ac_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_ad_]}
    var
     _ae_=[0,[0,Stdlib[11],_ab_],_aa_],
     _ah_=
      [0,
       [0,
        Not_found_s,
        function(param)
         {if(param[1] === Not_found_s)
           {var arg=param[2];return [1,[0,_af_,[0,arg,0]]]}
          throw [0,Assert_failure,_ag_]}],
       _ae_];
    function _ai_(param)
     {if(param[1] === Stdlib[4])
       {var arg=param[2];return get_flc_error(cst_Match_failure,arg)}
      throw [0,Assert_failure,_aj_]}
    var _ak_=[0,[0,Stdlib[4],_ai_],_ah_];
    function _al_(param)
     {if(param[1] === Stdlib[6])
       {var arg=param[2];return [1,[0,_am_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_an_]}
    var _ao_=[0,[0,Stdlib[6],_al_],_ak_];
    function _ap_(param)
     {if(param === Stdlib[8])return _aq_;throw [0,Assert_failure,_ar_]}
    var _as_=[0,[0,Stdlib[8],_ap_],_ao_];
    function _at_(param)
     {if(param[1] === Stdlib[7])
       {var arg=param[2];return [1,[0,_au_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_av_]}
    var _aw_=[0,[0,Stdlib[7],_at_],_as_];
    function _ax_(param)
     {if(param === Stdlib[12])return _ay_;throw [0,Assert_failure,_az_]}
    var _aA_=[0,[0,Stdlib[12],_ax_],_aw_];
    function _aB_(param)
     {if(param === Stdlib[3])return _aC_;throw [0,Assert_failure,_aD_]}
    var _aE_=[0,[0,Stdlib[3],_aB_],_aA_];
    function _aF_(param)
     {if(param[1] === Stdlib[5])
       {var arg=param[2];return get_flc_error(cst_Assert_failure,arg)}
      throw [0,Assert_failure,_aG_]}
    var _aH_=[0,[0,Stdlib[5],_aF_],_aE_];
    function _aI_(param)
     {var handler=param[2],extension_constructor=param[1];
      return add(_aJ_,extension_constructor,handler)}
    caml_call2(Stdlib_ListLabels[17],_aI_,_aH_);
    var
     Sexplib0_Sexp_conv=
      [0,
       default_string_of_float,
       write_old_option_format,
       read_old_option_format,
       list_map,
       sexp_of_unit,
       sexp_of_bool,
       sexp_of_string,
       sexp_of_bytes,
       sexp_of_char,
       sexp_of_int,
       sexp_of_float,
       sexp_of_int32,
       sexp_of_int64,
       sexp_of_nativeint,
       sexp_of_ref,
       sexp_of_lazy_t,
       sexp_of_option,
       sexp_of_pair,
       sexp_of_triple,
       sexp_of_list,
       sexp_of_array,
       sexp_of_hashtbl,
       sexp_of_opaque,
       sexp_of_fun,
       Of_sexp_error,
       record_check_extra_fields,
       of_sexp_error,
       of_sexp_error_exn,
       unit_of_sexp,
       bool_of_sexp,
       string_of_sexp,
       bytes_of_sexp,
       char_of_sexp,
       int_of_sexp,
       float_of_sexp,
       int32_of_sexp,
       int64_of_sexp,
       nativeint_of_sexp,
       ref_of_sexp,
       lazy_t_of_sexp,
       option_of_sexp,
       pair_of_sexp,
       triple_of_sexp,
       list_of_sexp,
       array_of_sexp,
       hashtbl_of_sexp,
       opaque_of_sexp,
       fun_of_sexp,
       sexp_of_exn,
       sexp_of_exn_opt,
       [0,add_auto,add,For_unit_tests_only]];
    caml_register_global(184,Sexplib0_Sexp_conv,"Sexplib0__Sexp_conv");
    function tuple_of_size_n_expected(loc,n,sexp)
     {return of_sexp_error(caml_call3(Stdlib_Printf[4],_aK_,loc,n),sexp)}
    function stag_no_args(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_sum_tag_does_not_t),sexp)}
    function stag_incorrect_n_args(loc,tag,sexp)
     {var msg=caml_call3(Stdlib_Printf[4],_aL_,loc,tag);
      return of_sexp_error(msg,sexp)}
    function stag_takes_args(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_sum_tag_must_be_a_),sexp)}
    function nested_list_invalid_sum(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_a_nested_list_is_a),sexp)}
    function empty_list_invalid_sum(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_the_empty_list_is_),sexp)}
    function unexpected_stag(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_unexpected_sum_tag),sexp)}
    function record_sexp_bool_with_payload(loc,sexp)
     {var msg=caml_call2(Stdlib[28],loc,cst_of_sexp_record_conversion_);
      return of_sexp_error(msg,sexp)}
    function record_only_pairs_expected(loc,sexp)
     {var msg=caml_call2(Stdlib[28],loc,cst_of_sexp_record_conversion_$0);
      return of_sexp_error(msg,sexp)}
    function record_superfluous_fields(what,loc,rev_fld_names,sexp)
     {var
       _aR_=caml_call1(Stdlib_ListLabels[9],rev_fld_names),
       fld_names_str=caml_call2(Stdlib_StringLabels[6],cst$12,_aR_),
       msg=caml_call4(Stdlib_Printf[4],_aM_,loc,what,fld_names_str);
      return of_sexp_error(msg,sexp)}
    function record_duplicate_fields(loc,rev_fld_names,sexp)
     {return record_superfluous_fields
              (cst_duplicate_fields,loc,rev_fld_names,sexp)}
    function record_extra_fields(loc,rev_fld_names,sexp)
     {return record_superfluous_fields
              (cst_extra_fields,loc,rev_fld_names,sexp)}
    function record_get_undefined_loop(fields,param)
     {var fields$0=fields,param$0=param;
      for(;;)
       {if(param$0)
         {var _aP_=param$0[1];
          if(_aP_[1])
           {var
             param$1=param$0[2],
             field=_aP_[2],
             fields$1=[0,field,fields$0],
             fields$0=fields$1,
             param$0=param$1;
            continue}
          var param$2=param$0[2],param$0=param$2;
          continue}
        var _aQ_=caml_call1(Stdlib_ListLabels[9],fields$0);
        return caml_call2(Stdlib_StringLabels[6],cst$13,_aQ_)}}
    function record_undefined_elements(loc,sexp,lst)
     {var
       undefined$0=record_get_undefined_loop(0,lst),
       msg=caml_call3(Stdlib_Printf[4],_aN_,loc,undefined$0);
      return of_sexp_error(msg,sexp)}
    function record_list_instead_atom(loc,sexp)
     {var msg=caml_call2(Stdlib[28],loc,cst_of_sexp_list_instead_of_at);
      return of_sexp_error(msg,sexp)}
    function record_poly_field_value(loc,sexp)
     {var msg=caml_call2(Stdlib[28],loc,cst_of_sexp_cannot_convert_val);
      return of_sexp_error(msg,sexp)}
    var
     No_variant_match=
      [248,cst_Sexplib0_Sexp_conv_error_N,caml_fresh_oo_id(0)];
    function no_variant_match(param){throw No_variant_match}
    function no_matching_variant_found(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_no_matching_varian),sexp)}
    function ptag_no_args(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_polymorphic_varian),sexp)}
    function ptag_incorrect_n_args(loc,cnstr,sexp)
     {var msg=caml_call3(Stdlib_Printf[4],_aO_,loc,cnstr);
      return of_sexp_error(msg,sexp)}
    function ptag_takes_args(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_polymorphic_varian$0),
               sexp)}
    function nested_list_invalid_poly_var(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_a_nested_list_is_a$0),
               sexp)}
    function empty_list_invalid_poly_var(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_the_empty_list_is_$0),
               sexp)}
    function empty_type(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[28],loc,cst_of_sexp_trying_to_convert_),sexp)}
    var
     Sexplib0_Sexp_conv_error=
      [0,
       Of_sexp_error,
       tuple_of_size_n_expected,
       stag_no_args,
       stag_incorrect_n_args,
       stag_takes_args,
       nested_list_invalid_sum,
       empty_list_invalid_sum,
       unexpected_stag,
       record_sexp_bool_with_payload,
       record_only_pairs_expected,
       record_superfluous_fields,
       record_duplicate_fields,
       record_extra_fields,
       record_get_undefined_loop,
       record_undefined_elements,
       record_list_instead_atom,
       record_poly_field_value,
       No_variant_match,
       no_variant_match,
       no_matching_variant_found,
       ptag_no_args,
       ptag_incorrect_n_args,
       ptag_takes_args,
       nested_list_invalid_poly_var,
       empty_list_invalid_poly_var,
       empty_type];
    caml_register_global
     (185,Sexplib0_Sexp_conv_error,"Sexplib0__Sexp_conv_error");
    var Sexplib0_Sexpable=[0];
    caml_register_global(186,Sexplib0_Sexpable,"Sexplib0__Sexpable");
    var Private=[0],Sexplib0$0=[0,Private];
    caml_register_global(187,Sexplib0$0,"Sexplib0");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXhwbGliMC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
