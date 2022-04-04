(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     class$0=caml_string_of_jsbytes("atom"),
     class$1=caml_string_of_jsbytes("tensor"),
     cst=caml_string_of_jsbytes("\xe2\x8a\x97"),
     class$2=caml_string_of_jsbytes("par"),
     cst$0=caml_string_of_jsbytes("\xe2\x85\x8b"),
     class$3=caml_string_of_jsbytes("before"),
     class$4=caml_string_of_jsbytes("prime"),
     Base_Int=global_data.Base__Int,
     Base_Set=global_data.Base__Set,
     Quartic_Graph=global_data.Quartic__Graph,
     Base_List=global_data.Base__List,
     Base_String=global_data.Base__String,
     _d_=[0,caml_string_of_jsbytes("-rep"),0],
     _b_=[0,caml_string_of_jsbytes("-rep"),0],
     _c_=[0,caml_string_of_jsbytes("-rep"),0],
     _a_=[0,caml_string_of_jsbytes("-rep"),0];
    function draw_prime_graph(cy,parent,id_graph)
     {function _u_(id)
       {var
         _y_=[0,caml_call1(Base_Int[11],id),_a_],
         t8=caml_jsstring_of_string(caml_call2(Base_String[50],0,_y_)),
         t5={"label":"","polarisation":1,"id":t8,"parent":parent},
         t6={"group":"nodes","data":t5},
         t16=cy.add(t6),
         t9=caml_jsstring_of_string(caml_call1(Base_Int[11],id)),
         t10={"source":t8,"target":t9},
         t11={"data":t10},
         t14=cy.add(t11);
        t14.addClass("compoundOut");
        return t16.addClass("inCompound")}
      caml_call2(Base_List[9],id_graph[1],_u_);
      function _v_(param)
       {var
         id2=param[2],
         id1=param[1],
         _w_=[0,caml_call1(Base_Int[11],id2),_b_],
         t18=caml_jsstring_of_string(caml_call2(Base_String[50],0,_w_)),
         _x_=[0,caml_call1(Base_Int[11],id1),_c_],
         t17=caml_jsstring_of_string(caml_call2(Base_String[50],0,_x_)),
         t19={"source":t17,"target":t18},
         t20={"data":t19},
         t23=cy.add(t20);
        return t23.addClass("compoundIn")}
      caml_call2(Base_List[9],id_graph[2],_v_);
      return 0}
    function draw_before(cy,parent,tl)
     {function _r_(t)
       {var
         id=caml_call1(Base_Int[11],t[2]),
         t32=caml_jsstring_of_string(caml_call2(Base_String[50],0,[0,id,_d_])),
         t29={"label":"","polarisation":1,"id":t32,"parent":parent},
         t30={"group":"nodes","data":t29},
         t40=cy.add(t30),
         t33=caml_jsstring_of_string(id),
         t34={"source":t32,"target":t33},
         t35={"data":t34},
         t38=cy.add(t35);
        t38.addClass("compoundOut");
        t40.addClass("inCompound");
        return t32}
      var il=caml_call2(Base_List[74],tl,_r_),il$0=il;
      for(;;)
       {if(il$0)
         {var _s_=il$0[2],_t_=il$0[1];
          if(_s_)
           {var
             t=_s_[2],
             h2=_s_[1],
             t43={"source":h2,"target":_t_},
             t44={"data":t43},
             t47=cy.add(t44);
            t47.addClass("before");
            if(caml_call1(Base_List[8],t))
             {var t51=cy.getElementById(h2);t51.addClass("before-root")}
            var il$1=[0,h2,t],il$0=il$1;
            continue}
          return 0}
        return 0}}
    var draw_tree=function _q_(_o_,_p_){return _q_.fun(_o_,_p_)};
    runtime.caml_update_dummy
     (draw_tree,
      function(cy,tree)
       {var
         t61=caml_jsstring_of_string(caml_call1(Base_Int[11],tree[2])),
         _h_=tree[1];
        switch(_h_[0])
         {case 0:
           var
            atom=_h_[1],
            polarisation=! ! atom[2],
            class$5=class$0,
            id_list=0,
            polarisation$0=polarisation,
            label=caml_jsstring_of_string(atom[1]);
           break;
          case 1:
           var
            tl$0=_h_[1],
            _k_=caml_call1(draw_tree,cy),
            id_list$0=caml_call2(Base_List[74],tl$0,_k_),
            id_list$1=[0,id_list$0],
            polarisation$1=! ! 1,
            class$5=class$1,
            id_list=id_list$1,
            polarisation$0=polarisation$1,
            label=caml_jsstring_of_string(cst);
           break;
          case 2:
           var
            tl$1=_h_[1],
            _l_=caml_call1(draw_tree,cy),
            id_list$2=caml_call2(Base_List[74],tl$1,_l_),
            id_list$3=[0,id_list$2],
            polarisation$2=! ! 1,
            class$5=class$2,
            id_list=id_list$3,
            polarisation$0=polarisation$2,
            label=caml_jsstring_of_string(cst$0);
           break;
          case 3:
           var
            tl$2=_h_[1],
            _m_=caml_call1(draw_tree,cy),
            id_list$4=caml_call2(Base_List[74],tl$2,_m_),
            id_list$5=[0,id_list$4],
            polarisation$3=! ! 1,
            class$5=class$3,
            id_list=id_list$5,
            polarisation$0=polarisation$3,
            label="";
           break;
          default:
           var
            tl$3=_h_[2],
            _n_=caml_call1(draw_tree,cy),
            id_list$6=caml_call2(Base_List[74],tl$3,_n_),
            id_list$7=[0,id_list$6],
            polarisation$4=! ! 1,
            label$0="",
            class$5=class$4,
            id_list=id_list$7,
            polarisation$0=polarisation$4,
            label=label$0}
        var
         t56={"id":t61,"label":label,"polarisation":polarisation$0},
         t57={"group":"nodes","data":t56},
         t60=cy.add(t57),
         t59=caml_jsstring_of_string(class$5);
        t60.addClass(t59);
        if(id_list)
         {var ids=id_list[1],_i_=tree[1];
          switch(_i_[0])
           {case 3:var tl=_i_[1];draw_before(cy,t61,tl);break;
            case 4:
             var id_graph=_i_[1];draw_prime_graph(cy,t61,id_graph);break;
            default:
             var
              _j_=
               function(target_id)
                {var t63={"source":t61,"target":target_id},t64={"data":t63};
                 cy.add(t64);
                 return 0};
             caml_call2(Base_List[9],ids,_j_)}}
        return caml_jsstring_of_string(caml_call1(Base_Int[11],tree[2]))});
    function draw_graph(directed,t78,graph)
     {function _e_(v)
       {var _g_=v[1];
        if(0 === _g_[0])
         {var
           atom=_g_[1],
           t68=! ! atom[2],
           t67=caml_jsstring_of_string(atom[1]),
           t66=caml_jsstring_of_string(caml_call1(Base_Int[11],v[2])),
           t70={"id":t66,"label":t67,"polarisation":t68},
           t71={"group":"nodes","data":t70};
          return t78.add(t71)}
        return 0}
      caml_call2(Base_Set[47],graph[1],_e_);
      var edge_list=caml_call2(Quartic_Graph[64],directed,graph[2]);
      function _f_(param)
       {var
         trgt=param[2],
         src=param[1],
         t74=caml_jsstring_of_string(caml_call1(Base_Int[11],trgt[2])),
         t73=caml_jsstring_of_string(caml_call1(Base_Int[11],src[2])),
         t76={"source":t73,"target":t74},
         t77={"group":"edges","data":t76};
        return t78.add(t77)}
      return caml_call2(Base_List[9],edge_list,_f_)}
    var
     Dune_exe_Drawing=
      [0,draw_prime_graph,draw_before,draw_tree,draw_graph];
    runtime.caml_register_global(124,Dune_exe_Drawing,"Dune__exe__Drawing");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fRHJhd2luZy5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiY2xhc3MkNCIsImRyYXdfcHJpbWVfZ3JhcGgiLCJjeSIsInBhcmVudCIsImlkX2dyYXBoIiwiaWQiLCJpZDIiLCJpZDEiLCJkcmF3X2JlZm9yZSIsInRsIiwidCIsImlsIiwiaWwkMCIsImgyIiwiaWwkMSIsImRyYXdfdHJlZSIsInRyZWUiLCJhdG9tIiwiY2xhc3MkNSIsImlkX2xpc3QiLCJwb2xhcmlzYXRpb24kMCIsImxhYmVsIiwidGwkMCIsImlkX2xpc3QkMCIsInRsJDEiLCJpZF9saXN0JDIiLCJ0bCQyIiwiaWRfbGlzdCQ0IiwidGwkMyIsImlkX2xpc3QkNiIsImlkX2xpc3QkNyIsInBvbGFyaXNhdGlvbiQ0IiwibGFiZWwkMCIsImlkcyIsInRhcmdldF9pZCIsImRyYXdfZ3JhcGgiLCJkaXJlY3RlZCIsImdyYXBoIiwidiIsImVkZ2VfbGlzdCIsInRyZ3QiLCJzcmMiXSwic291cmNlcyI6WyIvbW50L2QvUHJvamVjdHMvbW9kdWxhcl9kZWNvbXBvc2l0aW9uL19idWlsZC9kZWZhdWx0L3NyYy9kcmF3aW5nLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7O0tBNEZvQ0E7Ozs7Ozs7Ozs7YUF4RmhDQyxpQkFBaUJDLEdBQUdDLE9BQVFDO01BQzlCLGFBQTBDQztRQUNaO3dDQURZQTtTQUNlLDJCQUExQzswREFGT0Y7O2FBQUhEO1NBaUJnQiwyQkFBaEIsd0JBaEJ1Qkc7OzthQUR2Qkg7O3lDQXVCK0M7TUF0QnpELHdCQURxQkU7TUFDckI7UUF3QjRCOzs7U0FJSCwrQkFKY0U7U0FJYyw0QkFBM0M7U0FEZSwrQkFIU0M7U0FHbUIsNEJBQTNDOzs7YUE1QkFMO3lDQWtDZ0Q7TUFUMUQsd0JBekJxQkU7TUF5QnJCLFFBV1A7YUFFQUksWUFBWU4sR0FBR0MsT0FBT007TUFDeEIsYUFBc0NDO1FBQzNCO29DQUQyQkE7U0FFRyw0QkFBMUIsZ0NBRFRMOzREQUZXRjs7YUFBSEQ7U0FrQkssNEJBaEJiRzs7O2FBRlFIOzs7a0JBeUJOO01BeEJVLGdDQURNTyxRQTRCTEc7TUFDakI7V0FEaUJBOzs7O2FBSUhGO2FBQU5HOzs7aUJBaENJWDs7WUEwQ0UsMkJBVkFRO3NCQWhDRlIsa0JBZ0NKVztZQVVzRixZQVZ0RkEsR0FBTUgsR0FKR0U7O1VBR1I7UUFERCxTQWVZO1FBRWhCRzs7O2VBQVViLEdBQUljO1FBQ1U7cUNBQXJCLHdCQURXQTtTQUVwQixJQUZvQkE7UUFFcEI7O1dBR3VDO1lBQTlCQztZQUE4QixpQkFBOUJBO1lBRnlCQztZQUFUQztZQUFkQztZQUFQQyxNQUVhLHdCQUFSSjs7O1dBRXdCO1lBRHRCSztZQUNzQixlQVAzQlAsVUFBVWI7WUFPRSxtQ0FEUG9CO1lBQ08sYUFBVkM7WUFDYTtZQUxhTDtZQUFUQztZQUFkQztZQUFQQyxNQUtBOzs7V0FFNkI7WUFEekJHO1lBQ3lCLGVBVjNCVCxVQUFVYjtZQVVFLG1DQURWc0I7WUFDVSxhQUFWQztZQUNhO1lBUmFQO1lBQVRDO1lBQWRDO1lBQVBDLE1BUUE7OztXQUU2QjtZQUR0Qks7WUFDc0IsZUFiM0JYLFVBQVViO1lBYUUsbUNBRFB3QjtZQUNPLGFBQVZDO1lBQ1U7WUFYZ0JUO1lBQVRDO1lBQWRDO1lBQVBDOzs7V0FhNkI7WUFEbkJPO1lBQ21CLGVBaEIzQmIsVUFBVWI7WUFnQkUsbUNBREowQjtZQUNJLGFBQVZDO1lBQ1U7WUFBZDtZQWQ4Qlg7WUFBVEM7WUFBZEM7WUFBUEM7UUFGMEI7K0JBRTFCQSxxQkFBT0Q7O2FBSEtsQjtTQTZCNEIsNEJBMUJWZ0I7O1dBQVRDO2NBOEJoQmMsSUE5QmdCZCxlQUhMSDs7bUJBb0NELElBQU5QLFVBQU0sWUFwQ0hQLE9Bb0NITzs7YUFEZSxJQUFmTCxnQkFBZSxpQkFuQ1pGLE9BbUNIRTs7YUFHUDs7d0JBQXNCOEI7O2lCQXRDWmhDO3lCQThDcUM7YUFSL0Msd0JBTEcrQjtRQWVjLCtCQUF2Qix3QkFoRG9CakIsU0FnRGdCO2FBRWxDbUIsV0FBWUMsYUFBYUM7TUFDM0IsYUFBNkJDO1FBQzNCLFFBRDJCQTtRQUMzQjtVQU95QjtXQU5sQnJCO1dBTWtCLFFBTmxCQTtXQUtXLDRCQUxYQTtXQUkwQiw0QkFBbEIsd0JBTllxQjs7OztRQWFwQixRQUFFO01BYlgsd0JBRDJCRDtNQWVYLElBQVpFLFVBQVksNkJBZkZILFNBQWFDO01BZVg7UUFDTzs7O1NBS2lCLDRCQUFyQix3QkFMZUc7U0FJSyw0QkFBcEIsd0JBSlVDOzs7MkJBU0s7TUFWbEIsK0JBQVpGLGNBVThCOzs7U0FoS2hDdEMsaUJBc0NBTyxZQStDSU8sVUFrREpvQjs7VSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4gUXVhcnRpY1xyXG5vcGVuIEJhc2Vcclxub3BlbiBKc19vZl9vY2FtbFxyXG5cclxubGV0IGRyYXdfcHJpbWVfZ3JhcGggY3kgcGFyZW50IChpZF9ncmFwaCA6IFRyZWUuaWRfZ3JhcGgpID1cclxuICBsZXQgKCkgPSBMaXN0Lml0ZXIgaWRfZ3JhcGgubm9kZXMgfmY6KGZ1biBpZCAtPlxyXG4gICAgbGV0IHJlcF9pZCA9IFN0cmluZy5jb25jYXQgWyhJbnQudG9fc3RyaW5nIGlkKTsgXCItcmVwXCJdIHw+IEpzLnN0cmluZyBpblxyXG4gICAgbGV0IG5vZGUgPSBvYmplY3QlanMgXHJcbiAgICAgIHZhbCBncm91cCA9IEpzLnN0cmluZyBcIm5vZGVzXCJcclxuICAgICAgdmFsIGRhdGEgPSBvYmplY3QlanNcclxuICAgICAgICB2YWwgbGFiZWwgPSBKcy5zdHJpbmcgXCJcIlxyXG4gICAgICAgIHZhbCBwb2xhcmlzYXRpb24gPSB0cnVlXHJcbiAgICAgICAgdmFsIGlkID0gcmVwX2lkXHJcbiAgICAgICAgdmFsIHBhcmVudCA9IHBhcmVudFxyXG4gICAgICBlbmRcclxuICAgIGVuZFxyXG4gICAgaW5cclxuICAgIGxldCBhZGRlZF9ub2RlID0gY3kjI2FkZCAoSnMuVW5zYWZlLmNvZXJjZSBub2RlKSBpblxyXG4gICAgbGV0IGVkZ2UgPSBvYmplY3QlanNcclxuICAgICAgdmFsIGRhdGEgPSBvYmplY3QlanNcclxuICAgICAgICB2YWwgc291cmNlID0gcmVwX2lkXHJcbiAgICAgICAgdmFsIHRhcmdldCA9IEludC50b19zdHJpbmcgaWQgfD4gSnMuc3RyaW5nXHJcbiAgICAgIGVuZFxyXG4gICAgZW5kXHJcbiAgICBpblxyXG4gICAgbGV0IGFkZGVkX2VkZ2UgPSBjeSMjYWRkIChKcy5VbnNhZmUuY29lcmNlIGVkZ2UpIGluXHJcbiAgICBsZXQgKCkgPSAoSnMuVW5zYWZlLmNvZXJjZSBhZGRlZF9lZGdlKSMjYWRkQ2xhc3MgKEpzLnN0cmluZyBcImNvbXBvdW5kT3V0XCIpIGluXHJcbiAgICAoSnMuVW5zYWZlLmNvZXJjZSBhZGRlZF9ub2RlKSMjYWRkQ2xhc3MgKEpzLnN0cmluZyBcImluQ29tcG91bmRcIikpXHJcbiAgaW5cclxuICBsZXQgKCkgPSBMaXN0Lml0ZXIgaWRfZ3JhcGguZWRnZXMgfmY6KGZ1biAoaWQxLCBpZDIpIC0+XHJcbiAgICBsZXQgZWRnZSA9IG9iamVjdCVqc1xyXG4gICAgICB2YWwgZGF0YSA9IG9iamVjdCVqc1xyXG4gICAgICAgIHZhbCBzb3VyY2UgPSBTdHJpbmcuY29uY2F0IFsoSW50LnRvX3N0cmluZyBpZDEpOyBcIi1yZXBcIl0gfD4gSnMuc3RyaW5nXHJcbiAgICAgICAgdmFsIHRhcmdldCA9IFN0cmluZy5jb25jYXQgWyhJbnQudG9fc3RyaW5nIGlkMik7IFwiLXJlcFwiXSB8PiBKcy5zdHJpbmdcclxuICAgICAgZW5kXHJcbiAgICBlbmRcclxuICAgIGluXHJcbiAgICBsZXQgYWRkZWRfZWRnZSA9IGN5IyNhZGQgKEpzLlVuc2FmZS5jb2VyY2UgZWRnZSkgaW5cclxuICAgIChKcy5VbnNhZmUuY29lcmNlIGFkZGVkX2VkZ2UpIyNhZGRDbGFzcyAoSnMuc3RyaW5nIFwiY29tcG91bmRJblwiKSlcclxuICBpblxyXG4gICgpXHJcblxyXG5sZXQgZHJhd19iZWZvcmUgY3kgcGFyZW50IHRsID1cclxuICBsZXQgcmVwX2lkX2xpc3QgPSBMaXN0Lm1hcCB0bCB+ZjooZnVuIHQgLT5cclxuICAgIGxldCBpZCA9IEludC50b19zdHJpbmcgdC5UcmVlLmlkIGluXHJcbiAgICBsZXQgcmVwX2lkID0gU3RyaW5nLmNvbmNhdCBbaWQ7IFwiLXJlcFwiXSB8PiBKcy5zdHJpbmcgaW5cclxuICAgIGxldCBub2RlID0gb2JqZWN0JWpzIFxyXG4gICAgICB2YWwgZ3JvdXAgPSBKcy5zdHJpbmcgXCJub2Rlc1wiXHJcbiAgICAgIHZhbCBkYXRhID0gb2JqZWN0JWpzXHJcbiAgICAgICAgdmFsIGxhYmVsID0gSnMuc3RyaW5nIFwiXCJcclxuICAgICAgICB2YWwgcG9sYXJpc2F0aW9uID0gdHJ1ZVxyXG4gICAgICAgIHZhbCBpZCA9IHJlcF9pZFxyXG4gICAgICAgIHZhbCBwYXJlbnQgPSBwYXJlbnRcclxuICAgICAgZW5kXHJcbiAgICBlbmRcclxuICAgIGluXHJcbiAgICBsZXQgYWRkZWRfbm9kZSA9IGN5IyNhZGQgKEpzLlVuc2FmZS5jb2VyY2Ugbm9kZSkgaW5cclxuICAgIGxldCBlZGdlID0gb2JqZWN0JWpzXHJcbiAgICAgIHZhbCBkYXRhID0gb2JqZWN0JWpzXHJcbiAgICAgICAgdmFsIHNvdXJjZSA9IHJlcF9pZFxyXG4gICAgICAgIHZhbCB0YXJnZXQgPSBKcy5zdHJpbmcgaWRcclxuICAgICAgZW5kXHJcbiAgICBlbmRcclxuICAgIGluXHJcbiAgICBsZXQgYWRkZWRfZWRnZSA9IGN5IyNhZGQgKEpzLlVuc2FmZS5jb2VyY2UgZWRnZSkgaW5cclxuICAgIGxldCAoKSA9IChKcy5VbnNhZmUuY29lcmNlIGFkZGVkX2VkZ2UpIyNhZGRDbGFzcyAoSnMuc3RyaW5nIFwiY29tcG91bmRPdXRcIikgaW5cclxuICAgIGxldCAoKSA9IChKcy5VbnNhZmUuY29lcmNlIGFkZGVkX25vZGUpIyNhZGRDbGFzcyAoSnMuc3RyaW5nIFwiaW5Db21wb3VuZFwiKSBpblxyXG4gICAgcmVwX2lkKVxyXG4gIGluXHJcblxyXG4gIGxldCByZWMgZHJhd19pbm5lciBpbCA9XHJcbiAgICBtYXRjaCBpbCB3aXRoXHJcbiAgICB8IFtdIC0+ICgpXHJcbiAgICB8IFtfXSAtPiAoKVxyXG4gICAgfCBoMSA6OiBoMiA6OiB0IC0+XHJcbiAgICAgIGxldCBlZGdlID0gb2JqZWN0JWpzXHJcbiAgICAgICAgdmFsIGRhdGEgPSBvYmplY3QlanNcclxuICAgICAgICAgIHZhbCBzb3VyY2UgPSAgaDJcclxuICAgICAgICAgIHZhbCB0YXJnZXQgPSAgaDFcclxuICAgICAgICBlbmRcclxuICAgICAgZW5kXHJcbiAgICAgIGluXHJcbiAgICAgIGxldCBhZGRlZF9lZGdlID0gY3kjI2FkZCAoSnMuVW5zYWZlLmNvZXJjZSBlZGdlKSBpblxyXG4gICAgICBsZXQgKCkgPSAoSnMuVW5zYWZlLmNvZXJjZSBhZGRlZF9lZGdlKSMjYWRkQ2xhc3MgKEpzLnN0cmluZyBcImJlZm9yZVwiKSBpblxyXG4gICAgICBsZXQgKCkgPSBpZiBMaXN0LmlzX2VtcHR5IHQgdGhlbiAoY3kjI2dldEVsZW1lbnRCeUlkIGgyKSMjYWRkQ2xhc3MgKEpzLnN0cmluZyBcImJlZm9yZS1yb290XCIpIGluIFxyXG4gICAgICBkcmF3X2lubmVyIChoMiA6OiB0KVxyXG4gIGluXHJcbiAgZHJhd19pbm5lciByZXBfaWRfbGlzdFxyXG5cclxubGV0IHJlYyBkcmF3X3RyZWUgY3kgKHRyZWUgOiBUcmVlLnRyZWUpID1cclxuICBsZXQgaWQgPSBJbnQudG9fc3RyaW5nIHRyZWUuaWQgfD4gSnMuc3RyaW5nIGluXHJcbiAgbGV0IGdyb3VwID0gSnMuc3RyaW5nIFwibm9kZXNcIiBpblxyXG4gIGxldCBsYWJlbCwgcG9sYXJpc2F0aW9uLCBpZF9saXN0LCBjbGFzc18gPVxyXG4gICAgbWF0Y2ggdHJlZS5jb25uZWN0aXZlIHdpdGhcclxuICAgIHwgQXRvbSBhdG9tIC0+IEpzLnN0cmluZyBhdG9tLmxhYmVsLCBKcy5ib29sIGF0b20ucG9sLCBOb25lLCBcImF0b21cIlxyXG4gICAgfCBUZW5zb3IgdGwgLT5cclxuICAgICAgbGV0IGlkX2xpc3QgPSBMaXN0Lm1hcCB0bCB+ZjooZHJhd190cmVlIGN5KSBpblxyXG4gICAgICBKcy5zdHJpbmcgXCLiipdcIiwgSnMuYm9vbCB0cnVlLCBTb21lIGlkX2xpc3QsIFwidGVuc29yXCJcclxuICAgIHwgUGFyIHRsIC0+XHJcbiAgICAgIGxldCBpZF9saXN0ID0gTGlzdC5tYXAgdGwgfmY6KGRyYXdfdHJlZSBjeSkgaW5cclxuICAgICAgSnMuc3RyaW5nIFwi4oWLXCIsIEpzLmJvb2wgdHJ1ZSwgU29tZSBpZF9saXN0LCBcInBhclwiXHJcbiAgICB8IEJlZm9yZSB0bCAtPlxyXG4gICAgICBsZXQgaWRfbGlzdCA9IExpc3QubWFwIHRsIH5mOihkcmF3X3RyZWUgY3kpIGluXHJcbiAgICAgIEpzLnN0cmluZyBcIlwiLCBKcy5ib29sIHRydWUsIFNvbWUgaWRfbGlzdCwgXCJiZWZvcmVcIlxyXG4gICAgfCBQcmltZSAoXywgdGwpIC0+XHJcbiAgICAgIGxldCBpZF9saXN0ID0gTGlzdC5tYXAgdGwgfmY6KGRyYXdfdHJlZSBjeSkgaW5cclxuICAgICAgSnMuc3RyaW5nIFwiXCIsIEpzLmJvb2wgdHJ1ZSwgU29tZSBpZF9saXN0LCBcInByaW1lXCJcclxuICBpblxyXG4gIGxldCBub2RlID0gb2JqZWN0JWpzXHJcbiAgICB2YWwgZ3JvdXAgPSBncm91cFxyXG4gICAgdmFsIGRhdGEgPSBvYmplY3QlanNcclxuICAgICAgdmFsIGlkID0gaWRcclxuICAgICAgdmFsIGxhYmVsID0gbGFiZWxcclxuICAgICAgdmFsIHBvbGFyaXNhdGlvbiA9IHBvbGFyaXNhdGlvblxyXG4gICAgZW5kXHJcbiAgZW5kXHJcbiAgaW5cclxuICBsZXQgYWRkZWQgPSBjeSMjYWRkIChKcy5VbnNhZmUuY29lcmNlIG5vZGUpIGluXHJcbiAgbGV0ICgpID0gKEpzLlVuc2FmZS5jb2VyY2UgYWRkZWQpIyNhZGRDbGFzcyAoSnMuc3RyaW5nIGNsYXNzXykgaW5cclxuICBsZXQgKCkgPSBcclxuICAgIG1hdGNoIGlkX2xpc3Qgd2l0aFxyXG4gICAgfCBOb25lIC0+ICgpXHJcbiAgICB8IFNvbWUgaWRzIC0+XHJcbiAgICAgIG1hdGNoIHRyZWUuY29ubmVjdGl2ZSB3aXRoXHJcbiAgICAgIHwgUHJpbWUgKGlkX2dyYXBoLF8pIC0+IGRyYXdfcHJpbWVfZ3JhcGggKEpzLlVuc2FmZS5jb2VyY2UgY3kpIGlkIGlkX2dyYXBoIFxyXG4gICAgICB8IEJlZm9yZSB0bCAtPiBkcmF3X2JlZm9yZSAoSnMuVW5zYWZlLmNvZXJjZSBjeSkgaWQgdGxcclxuICAgICAgfCBfIC0+XHJcbiAgICAgICAgTGlzdC5pdGVyIGlkcyB+ZjooZnVuIHRhcmdldF9pZCAtPlxyXG4gICAgICAgICAgbGV0IGVkZ2UgPSBvYmplY3QlanMgXHJcbiAgICAgICAgICAgIHZhbCBkYXRhID0gb2JqZWN0JWpzXHJcbiAgICAgICAgICAgICAgdmFsIHNvdXJjZSA9IGlkXHJcbiAgICAgICAgICAgICAgdmFsIHRhcmdldCA9IHRhcmdldF9pZFxyXG4gICAgICAgICAgICBlbmRcclxuICAgICAgICAgIGVuZFxyXG4gICAgICAgICAgaW5cclxuICAgICAgICAgIGxldCBfID0gY3kjI2FkZCAoSnMuVW5zYWZlLmNvZXJjZSBlZGdlKSBpbiAoKSlcclxuICBpbiAgICBcclxuICAoSW50LnRvX3N0cmluZyB0cmVlLmlkKSB8PiBKcy5zdHJpbmdcclxuXHJcbmxldCBkcmF3X2dyYXBoID9kaXJlY3RlZCBjeSAoZ3JhcGggOiBHcmFwaC5ncmFwaCkgPVxyXG4gIFNldC5pdGVyIGdyYXBoLm5vZGVzIH5mOihmdW4gdiAtPlxyXG4gICAgbWF0Y2ggdi5jb25uZWN0aXZlIHdpdGhcclxuICAgIHwgQXRvbSBhdG9tIC0+IFxyXG4gICAgICBsZXQgbm9kZSA9IG9iamVjdCVqc1xyXG4gICAgICAgIHZhbCBncm91cCA9IEpzLnN0cmluZyBcIm5vZGVzXCJcclxuICAgICAgICB2YWwgZGF0YSA9IG9iamVjdCVqc1xyXG4gICAgICAgICAgdmFsIGlkID0gSW50LnRvX3N0cmluZyB2LmlkIHw+IEpzLnN0cmluZ1xyXG4gICAgICAgICAgdmFsIGxhYmVsID0gSnMuc3RyaW5nIGF0b20ubGFiZWxcclxuICAgICAgICAgIHZhbCBwb2xhcmlzYXRpb24gPSBKcy5ib29sIGF0b20ucG9sXHJcbiAgICAgICAgZW5kXHJcbiAgICAgIGVuZFxyXG4gICAgICBpblxyXG4gICAgICBjeSMjYWRkIG5vZGUgXHJcbiAgICB8IF8gLT4gKCkpO1xyXG4gIGxldCBlZGdlX2xpc3QgPSBHcmFwaC5lZGdlX3R1cGxlX2xpc3QgP2RpcmVjdGVkOmRpcmVjdGVkIGdyYXBoLmVkZ2VzIGluXHJcbiAgTGlzdC5pdGVyIGVkZ2VfbGlzdCB+ZjooZnVuIChzcmMsIHRyZ3QpIC0+XHJcbiAgICBsZXQgZWRnZSA9IG9iamVjdCVqc1xyXG4gICAgICB2YWwgZ3JvdXAgPSBKcy5zdHJpbmcgXCJlZGdlc1wiXHJcbiAgICAgIHZhbCBkYXRhID0gb2JqZWN0JWpzXHJcbiAgICAgICAgdmFsIHNvdXJjZSA9IEludC50b19zdHJpbmcgc3JjLmlkIHw+IEpzLnN0cmluZ1xyXG4gICAgICAgIHZhbCB0YXJnZXQgPSBJbnQudG9fc3RyaW5nIHRyZ3QuaWQgfD4gSnMuc3RyaW5nXHJcbiAgICAgIGVuZFxyXG4gICAgZW5kXHJcbiAgICBpblxyXG4gICAgKEpzLlVuc2FmZS5jb2VyY2UgY3kpIyNhZGQgZWRnZSkiXX0=
