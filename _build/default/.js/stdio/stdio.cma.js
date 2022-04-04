(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
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
    var
     global_data=runtime.caml_get_global_data(),
     flags=[0,0,0],
     cst=caml_string_of_jsbytes("\n"),
     flags$0=[0,1,[0,3,0]],
     Base_List=global_data.Base__List,
     Caml=global_data.Caml,
     Base=global_data.Base,
     Base_Char=global_data.Base__Char,
     Base_String=global_data.Base__String,
     Stdlib_Buffer=global_data.Stdlib__Buffer,
     Base_Buffer=global_data.Base__Buffer,
     Stdlib=global_data.Stdlib,
     Base_Exn=global_data.Base__Exn,
     Stdlib_Printf=global_data.Stdlib__Printf,
     Stdio=[0];
    caml_register_global(6,Stdio,"Stdio__");
    var Stdio_Import=[0];
    caml_register_global(7,Stdio_Import,"Stdio__Import");
    var
     _a_=[0,caml_string_of_jsbytes("<stderr>")],
     _b_=[0,caml_string_of_jsbytes("<stdout>")],
     _c_=[0,caml_string_of_jsbytes("<Out_channel.t>")];
    function equal(t1,t2){return caml_call2(Base[223],t1,t2)}
    var seek=Caml[95][4],pos=Caml[95][5],length=Caml[95][6],stdin=Caml[37];
    function create(opt,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      var flags$0=binary?[0,6,flags]:flags;
      return caml_call3(Caml[80],flags$0,0,file)}
    var close=Caml[92];
    function with_file(binary,file,f)
     {var _u_=create(binary,file);return caml_call3(Base_Exn[11],f,_u_,close)}
    function may_eof(f)
     {try
       {var _s_=[0,caml_call1(f,0)];return _s_}
      catch(_t_)
       {_t_ = caml_wrap_exception(_t_);
        if(_t_ === Stdlib[12])return 0;
        throw _t_}}
    function input(t,buf,pos,len){return caml_call4(Caml[83],t,buf,pos,len)}
    function really_input(t,buf,pos,len)
     {return may_eof
              (function(param){return caml_call4(Caml[84],t,buf,pos,len)})}
    function really_input_exn(t,buf,pos,len)
     {return caml_call4(Caml[84],t,buf,pos,len)}
    function input_byte(t)
     {return may_eof(function(param){return caml_call1(Caml[86],t)})}
    function input_char(t)
     {return may_eof(function(param){return caml_call1(Caml[81],t)})}
    function input_binary_int(t)
     {return may_eof(function(param){return caml_call1(Caml[87],t)})}
    function unsafe_input_value(t)
     {return may_eof(function(param){return caml_call1(Caml[88],t)})}
    function input_buffer(t,buf,len)
     {return may_eof
              (function(param){return caml_call3(Stdlib_Buffer[22],buf,t,len)})}
    var set_binary_mode=Caml[94];
    function input_all(t)
     {var buffer=caml_call1(Base_Buffer[2],65536),chunk_size=65536;
      function loop(param)
       {for(;;){caml_call3(Stdlib_Buffer[22],buffer,t,chunk_size);continue}}
      try
       {var _q_=loop(0);return _q_}
      catch(_r_)
       {_r_ = caml_wrap_exception(_r_);
        if(_r_ === Stdlib[12])return caml_call1(Base_Buffer[3],buffer);
        throw _r_}}
    function trim(fix_win_eol,line)
     {if(fix_win_eol)
       {var len=runtime.caml_ml_string_length(line);
        if(caml_call2(Base[203],len,0))
         {var _o_=runtime.caml_string_get(line,caml_call2(Base[181],len,1));
          if(caml_call2(Base_Char[15],_o_,13))
           {var _p_=caml_call2(Base[181],len,1);
            return caml_call3(Base_String[2],line,0,_p_)}}
        return line}
      return line}
    function input_line(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var match=may_eof(function(param){return caml_call1(Caml[82],t)});
      if(match){var line=match[1];return [0,trim(fix_win_eol,line)]}
      return 0}
    function input_line_exn(opt,t)
     {if(opt)var sth=opt[1],fix_win_eol=sth;else var fix_win_eol=1;
      var line=caml_call1(Caml[82],t);
      return trim(fix_win_eol,line)}
    function fold_lines(fix_win_eol,t,ac,f)
     {var ac$0=ac;
      for(;;)
       {var match=input_line(fix_win_eol,t);
        if(match)
         {var line=match[1],ac$1=caml_call2(f,ac$0,line),ac$0=ac$1;continue}
        return ac$0}}
    function input_lines(fix_win_eol,t)
     {var
       _n_=
        fold_lines
         (fix_win_eol,t,0,function(lines,line){return [0,line,lines]});
      return caml_call1(Base_List[37],_n_)}
    function iter_lines(fix_win_eol,t,f)
     {return fold_lines
              (fix_win_eol,
               t,
               0,
               function(param,line){return caml_call1(f,line)})}
    function read_lines(fix_win_eol,fname)
     {return with_file
              (0,fname,function(_m_){return input_lines(fix_win_eol,_m_)})}
    function read_all(fname){return with_file(0,fname,input_all)}
    var
     Stdio_In_channel=
      [0,
       equal,
       stdin,
       create,
       with_file,
       close,
       input,
       really_input,
       really_input_exn,
       input_char,
       input_byte,
       input_binary_int,
       unsafe_input_value,
       input_buffer,
       input_all,
       input_line,
       input_line_exn,
       fold_lines,
       input_lines,
       iter_lines,
       seek,
       pos,
       length,
       set_binary_mode,
       read_lines,
       read_all];
    caml_register_global(17,Stdio_In_channel,"Stdio__In_channel");
    function equal$0(t1,t2){return caml_call2(Base[223],t1,t2)}
    var
     seek$0=Caml[95][1],
     pos$0=Caml[95][2],
     length$0=Caml[95][3],
     stdout=Caml[38],
     stderr=Caml[39];
    function sexp_of_t(t)
     {return caml_call2(Base[223],t,stderr)
              ?_a_
              :caml_call2(Base[223],t,stdout)?_b_:_c_}
    function create$0(opt,_j_,_i_,_h_,file)
     {if(opt)var sth=opt[1],binary=sth;else var binary=1;
      if(_j_)var sth$0=_j_[1],append=sth$0;else var append=0;
      if(_i_)var sth$1=_i_[1],fail_if_exists=sth$1;else var fail_if_exists=0;
      if(_h_)var sth$2=_h_[1],perm=sth$2;else var perm=438;
      var
       _k_=binary?6:7,
       flags=[0,_k_,flags$0],
       _l_=append?2:4,
       flags$1=[0,_l_,flags],
       flags$2=fail_if_exists?[0,5,flags$1]:flags$1;
      return caml_call3(Caml[61],flags$2,perm,file)}
    var
     set_binary_mode$0=Caml[77],
     flush=Caml[62],
     close$0=Caml[75],
     close_no_err=Caml[76];
    function output(t,buf,pos,len){return caml_call4(Caml[67],t,buf,pos,len)}
    function output_substring(t,buf,pos,len)
     {return caml_call4(Caml[68],t,buf,pos,len)}
    var
     output_string=Caml[65],
     output_bytes=Caml[66],
     output_char=Caml[64],
     output_byte=Caml[69],
     output_binary_int=Caml[70],
     output_buffer=Stdlib_Buffer[10],
     output_value=Caml[71];
    function newline(t){return caml_call2(output_string,t,cst)}
    function output_lines(t,lines)
     {function _g_(line){caml_call2(output_string,t,line);return newline(t)}
      return caml_call2(Base_List[9],lines,_g_)}
    var
     printf=Stdlib_Printf[2],
     eprintf=Stdlib_Printf[3],
     fprintf=Stdlib_Printf[1],
     kfprintf=Stdlib_Printf[8],
     print_string=Caml[41],
     print_endline=Caml[45],
     prerr_endline=Caml[52];
    function print_s(mach,sexp)
     {var
       _f_=
        mach?caml_call1(Base[84][15],sexp):caml_call2(Base[84][14],0,sexp);
      return caml_call1(print_endline,_f_)}
    function eprint_s(mach,sexp)
     {var
       _e_=
        mach?caml_call1(Base[84][15],sexp):caml_call2(Base[84][14],0,sexp);
      return caml_call1(prerr_endline,_e_)}
    function with_file$0(binary,append,fail_if_exists,perm,file,f)
     {var _d_=create$0(binary,append,fail_if_exists,perm,file);
      return caml_call3(Base_Exn[11],f,_d_,close$0)}
    function write_lines(file,lines)
     {return with_file$0
              (0,0,0,0,file,function(t){return output_lines(t,lines)})}
    function write_all(file,data)
     {return with_file$0
              (0,
               0,
               0,
               0,
               file,
               function(t){return caml_call2(output_string,t,data)})}
    var
     Stdio_Out_channel=
      [0,
       sexp_of_t,
       equal$0,
       stdout,
       stderr,
       create$0,
       with_file$0,
       close$0,
       close_no_err,
       set_binary_mode$0,
       flush,
       output,
       output_string,
       output_substring,
       output_bytes,
       output_char,
       output_byte,
       output_binary_int,
       output_buffer,
       output_value,
       newline,
       output_lines,
       fprintf,
       printf,
       print_s,
       eprint_s,
       eprintf,
       kfprintf,
       print_string,
       print_endline,
       prerr_endline,
       seek$0,
       pos$0,
       length$0,
       write_lines,
       write_all];
    caml_register_global(19,Stdio_Out_channel,"Stdio__Out_channel");
    var
     Stdio$0=
      [0,
       stdin,
       stdout,
       stderr,
       printf,
       print_s,
       eprint_s,
       eprintf,
       print_string,
       print_endline,
       prerr_endline];
    caml_register_global(20,Stdio$0,"Stdio");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzdGRpby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
