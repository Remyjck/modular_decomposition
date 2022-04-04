(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_gc_quick_stat=runtime.caml_gc_quick_stat,
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
     cst$3=caml_string_of_jsbytes("\n"),
     cst_ppx_module_timer_overridin=
      caml_string_of_jsbytes
       ("ppx_module_timer: overriding time measurements for testing"),
     cst_FAKE_MODULES=caml_string_of_jsbytes("FAKE_MODULES"),
     cst$1=caml_string_of_jsbytes(" "),
     cst_compactions=caml_string_of_jsbytes("compactions"),
     cst_major_collections=caml_string_of_jsbytes("major collections"),
     cst_minor_collections=caml_string_of_jsbytes("minor collections"),
     cst$2=caml_string_of_jsbytes(""),
     cst_GC=caml_string_of_jsbytes("; GC: "),
     cst$0=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes(""),
     cst_ns$0=caml_string_of_jsbytes("ns"),
     cst_ns=caml_string_of_jsbytes("ns"),
     am_recording_environment_varia=caml_string_of_jsbytes("PPX_MODULE_TIMER"),
     Base=global_data.Base,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     Base_Int63=global_data.Base__Int63,
     Stdio=global_data.Stdio,
     Base_Option=global_data.Base__Option,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Printf=global_data.Base__Printf,
     Base_Int=global_data.Base__Int,
     Time_now=global_data.Time_now,
     Assert_failure=global_data.Assert_failure,
     Caml=global_data.Caml,
     _e_=
      [0,
       [11,caml_string_of_jsbytes("Line "),[4,0,0,0,0]],
       caml_string_of_jsbytes("Line %d")],
     _f_=
      [0,
       [11,caml_string_of_jsbytes("Fake__Dependency_"),[4,0,0,0,0]],
       caml_string_of_jsbytes("Fake__Dependency_%d")],
     _d_=[0,[2,[1,1],[12,32,[2,0,0]]],caml_string_of_jsbytes("%*s %s")],
     _c_=[0,caml_string_of_jsbytes(", ")],
     _b_=
      [0,caml_string_of_jsbytes("runtime/ppx_module_timer_runtime.ml"),110,6],
     _a_=
      [0,caml_string_of_jsbytes("runtime/ppx_module_timer_runtime.ml"),94,6];
    function get_am_recording_environment_v(param)
     {try
       {var value=runtime.caml_sys_getenv(am_recording_environment_varia)}
      catch(_ar_){return 0}
      return [0,value]}
    var
     am_recording_value=get_am_recording_environment_v(0),
     am_recording=caml_call1(Base_Option[37],am_recording_value);
    function to_nanoseconds(t){return t}
    function of_nanoseconds(t){return t}
    function of_string(string)
     {var _aq_=caml_call2(Base_String[97],string,cst_ns);
      return caml_call1(Base_Int63[10],_aq_)}
    function to_string(nanos)
     {var _ap_=caml_call1(Base_Int63[11],nanos);
      return caml_call2(Base[217],_ap_,cst_ns$0)}
    function to_string_with_same_unit(list)
     {return caml_call2(Base_List[74],list,to_string)}
    var format=[0,[0,of_string,to_string_with_same_unit]];
    function of_string$0(string)
     {var Format=format[1];return caml_call1(Format[1],string)}
    function create(nested_timer,param)
     {var _ao_=caml_gc_quick_stat(0);
      return [0,cst,Base_Int63[44],_ao_,nested_timer,0]}
    function record_start(t,description)
     {if(am_recording)
       {if(! caml_call1(Base_String[5],t[1]))throw [0,Assert_failure,_a_];
        t[1] = description;
        t[3] = caml_gc_quick_stat(0);
        t[2] = caml_call1(Time_now[1],0);
        var _an_=0}
      else
       var _an_=am_recording;
      return _an_}
    function record_until(t,description)
     {if(am_recording)
       {var
         until=caml_call1(Time_now[1],0),
         start=t[2],
         gc_stats_after=caml_gc_quick_stat(0),
         gc_stats_before=t[3],
         runtime=caml_call2(Base_Int63[48],until,start);
        if(caml_call2(Base_String[108],t[1],description))
         {var
           _ak_=caml_call2(Base[181],gc_stats_after[14],gc_stats_before[14]),
           _al_=caml_call2(Base[181],gc_stats_after[5],gc_stats_before[5]),
           gc_events=
            [0,
             caml_call2(Base[181],gc_stats_after[4],gc_stats_before[4]),
             _al_,
             _ak_],
           _am_=t[4];
          if(_am_)
           var
            nested$0=_am_[1],
            nested_timing_events=caml_call1(Base_List[37],nested$0[5]);
          else
           var nested_timing_events=0;
          var
           timing_event=
            [0,description,runtime,gc_events,nested_timing_events];
          t[5] = [0,timing_event,t[5]];
          t[1] = cst$0;
          t[2] = Base_Int63[44];
          var _aj_=t[4];
          if(_aj_){var nested=_aj_[1];nested[5] = 0;return 0}
          return 0}
        throw [0,Assert_failure,_b_]}
      return am_recording}
    var
     definition_timer=create(0,0),
     module_timer=create([0,definition_timer],0);
    function record_start$0(module_name)
     {return record_start(module_timer,module_name)}
    function record_until$0(module_name)
     {return record_until(module_timer,module_name)}
    function record_definition_start(loc)
     {return record_start(definition_timer,loc)}
    function record_definition_until(loc)
     {return record_until(definition_timer,loc)}
    function timing_events_to_strings(list,indent)
     {function _V_(timing_event){return timing_event[2]}
      var
       string=caml_call2(Base_List[74],list,_V_),
       Format=format[1],
       duration_strings=caml_call1(Format[2],string),
       prefix=caml_call2(Base_String[46],indent,32);
      function _W_(duration_string,param)
       {var
         nested_timing_events=param[4],
         gc_events=param[3],
         description=param[1];
        function _ab_(line){return caml_call2(Base[217],cst$3,line)}
        var
         _ac_=
          timing_events_to_strings
           (nested_timing_events,caml_call2(Base[180],indent,4)),
         _ad_=caml_call2(Base_List[74],_ac_,_ab_),
         _ae_=caml_call2(Base_String[50],0,_ad_),
         compactions=gc_events[3],
         major_collections=gc_events[2],
         minor_collections=gc_events[1];
        function to_list(description,count)
         {if(caml_call2(Base[202],count,0))return 0;
          var
           _ah_=caml_call2(Base[217],cst$1,description),
           _ai_=caml_call1(Base_Int[11],count);
          return [0,caml_call2(Base[217],_ai_,_ah_),0]}
        var
         _Y_=to_list(cst_compactions,compactions),
         _Z_=to_list(cst_major_collections,major_collections),
         ___=caml_call2(Base[179],_Z_,_Y_),
         _$_=to_list(cst_minor_collections,minor_collections),
         strings=caml_call2(Base[179],_$_,___);
        if(caml_call1(Base_List[8],strings))
         var _af_=cst$2;
        else
         var
          _aa_=caml_call2(Base_String[50],_c_,strings),
          _af_=caml_call2(Base[217],cst_GC,_aa_);
        var _ag_=caml_call2(Base[217],_af_,_ae_);
        return [0,duration_string,caml_call2(Base[217],description,_ag_)]}
      var list$0=caml_call3(Base_List[81],duration_strings,list,_W_);
      function _S_(width,param)
       {var left=param[1];
        return caml_call2
                (Base_Int[21],width,runtime.caml_ml_string_length(left))}
      var left_column_width=caml_call3(Base_List[10],list$0,0,_S_);
      function _T_(param)
       {var right=param[2],left=param[1];
        return caml_call4(Base_Printf[2],_d_,left_column_width,left,right)}
      var _U_=caml_call2(Base_List[74],list$0,_T_),_X_=Base_List[74];
      return caml_call2
              (_X_,
               _U_,
               function(line){return caml_call2(Base[217],prefix,line)})}
    function gc_events(i)
     {var
       _M_=caml_call2(Base[189],i,8),
       _N_=caml_call2(Base[202],_M_,7)?1:0,
       _O_=caml_call2(Base[189],i,4),
       _P_=caml_call2(Base[202],_O_,3)?1:0,
       _Q_=caml_call2(Base[189],i,2),
       _R_=caml_call2(Base[202],_Q_,1)?1:0;
      return [0,_R_,_P_,_N_]}
    var
     fake_timing_events=
      [246,
       function(_v_)
        {function _w_(i)
          {var _x_=caml_call2(Base[180],i,1),_y_=caml_call2(Base[189],_x_,4);
           if(caml_call2(Base[202],_y_,0))
            var
             _z_=
              function(j)
               {var
                 _H_=gc_events(j),
                 _I_=caml_call2(Base[180],j,1),
                 _J_=caml_call2(Base[182],900,_I_),
                 _K_=caml_call1(Base_Int63[102],_J_),
                 _L_=caml_call2(Base[180],j,1);
                return [0,caml_call2(Base_Printf[2],_e_,_L_),_K_,_H_,0]},
             _A_=caml_call2(Base[180],i,1),
             _B_=caml_call2(Base_List[119],_A_,_z_);
           else
            var _B_=0;
           var
            _C_=gc_events(i),
            _D_=caml_call2(Base[180],i,1),
            _E_=caml_call2(Base[182],900,_D_),
            _F_=caml_call1(Base_Int63[102],_E_),
            _G_=caml_call2(Base[180],i,1);
           return [0,caml_call2(Base_Printf[2],_f_,_G_),_F_,_C_,_B_]}
         return caml_call2(Base_List[119],12,_w_)}];
    function print_recorded_timing_events(timing_events)
     {function notify_of_overriding(param)
       {return caml_call1(Stdio[9],cst_ppx_module_timer_overridin)}
      var string=caml_call4(Base_Option[42],0,0,0,am_recording_value);
      if(runtime.caml_string_notequal(string,cst_FAKE_MODULES))
       {try
         {var switch$0=0,override=of_string$0(string);switch$0 = 1}
        catch(_u_){var timing_events$0=timing_events}
        if(switch$0)
         {notify_of_overriding(0);
          var
           _k_=
            function(index,timing_event)
             {var
               _p_=caml_call2(Base[180],index,1),
               _q_=caml_call1(Base_Int63[102],_p_),
               runtime=caml_call2(Base_Int63[49],override,_q_);
              function _r_(index,nested_timing_event)
               {var
                 _s_=caml_call2(Base[180],index,1),
                 _t_=caml_call1(Base_Int63[102],_s_),
                 runtime=caml_call2(Base_Int63[49],override,_t_);
                return [0,
                        nested_timing_event[1],
                        runtime,
                        nested_timing_event[3],
                        nested_timing_event[4]]}
              var
               nested_timing_events=
                caml_call2(Base_List[94],timing_event[4],_r_);
              return [0,
                      timing_event[1],
                      runtime,
                      timing_event[3],
                      nested_timing_events]},
           timing_events$0=caml_call2(Base_List[94],timing_events,_k_)}}
      else
       {notify_of_overriding(0);
        var
         _l_=runtime.caml_obj_tag(fake_timing_events),
         _m_=
          250 === _l_
           ?fake_timing_events[1]
           :246 === _l_
             ?caml_call1(CamlinternalLazy[2],fake_timing_events)
             :fake_timing_events,
         timing_events$0=_m_}
      var
       _h_=
        function(_o_){return timing_events_to_strings(_o_,0)}(timing_events$0),
       _i_=Base_List[9],
       _j_=Stdio[9];
      return function(_n_){return caml_call2(_i_,_n_,_j_)}(_h_)}
    if(am_recording)
     {var
       _g_=
        function(param)
         {return print_recorded_timing_events
                  (caml_call1(Base_List[37],module_timer[5]))};
      caml_call1(Caml[99],_g_)}
    var
     Ppx_module_timer_runtime=
      [0,
       am_recording,
       am_recording_environment_varia,
       [0,to_nanoseconds,of_nanoseconds,format],
       record_start$0,
       record_until$0,
       record_definition_start,
       record_definition_until];
    runtime.caml_register_global
     (32,Ppx_module_timer_runtime,"Ppx_module_timer_runtime");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfbW9kdWxlX3RpbWVyX3J1bnRpbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
