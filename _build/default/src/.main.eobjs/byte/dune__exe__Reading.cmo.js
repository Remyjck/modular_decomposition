(function(globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_js_to_array=runtime.caml_js_to_array,
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
     cst_prime=caml_string_of_jsbytes("prime"),
     cst_before=caml_string_of_jsbytes("before"),
     cst=caml_string_of_jsbytes("\xe2\x8a\x97"),
     cst$0=caml_string_of_jsbytes("\xe2\x85\x8b"),
     cst_error=caml_string_of_jsbytes("error"),
     Quartic_Util=global_data.Quartic__Util,
     Base_Array=global_data.Base__Array,
     Base_List=global_data.Base__List,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Base_String=global_data.Base__String,
     Base=global_data.Base;
    function read_prime(root,id)
     {var
       _e_=caml_js_to_array(root.children()),
       children=caml_call1(Base_Array[20],_e_);
      function _f_(c)
       {var node_id_s=caml_string_of_jsstring(c.id());
        return caml_call1(Quartic_Util[4],node_id_s)}
      var
       nodes=caml_call2(Base_List[74],children,_f_),
       t4=root.children(),
       _g_=caml_js_to_array(t4.connectedEdges(".compoundIn")),
       edge_objs=caml_call1(Base_Array[20],_g_);
      function _h_(edge)
       {var
         t6=edge.source(),
         _j_=caml_string_of_jsstring(t6.id()),
         source=caml_call1(Quartic_Util[4],_j_),
         t8=edge.target(),
         _k_=caml_string_of_jsstring(t8.id()),
         target=caml_call1(Quartic_Util[4],_k_);
        return [0,source,target]}
      var
       edges=caml_call2(Base_List[74],edge_objs,_h_),
       t11=root.children(),
       t12=t11.outgoers("node"),
       _i_=caml_js_to_array(t12.orphans()),
       successors_objs=caml_call1(Base_Array[20],_i_),
       successors=caml_call2(Base_List[74],successors_objs,read_tree),
       id_graph=[0,nodes,edges],
       connective=[4,id_graph,successors];
      return [0,connective,id]}
    function read_atom(node,id,label)
     {var pol=node.data("polarisation") | 0,connective=[0,[0,label,pol]];
      return [0,connective,id]}
    function read_tree(root)
     {var
       label_string=caml_string_of_jsstring(root.data("label")),
       _b_=root.data("id"),
       id=caml_call1(Js_of_ocaml_Js[42],_b_),
       classes_js=caml_js_to_array(root.classes()),
       classes=caml_call2(Base_Array[39],classes_js,caml_string_of_jsstring);
      if(caml_call3(Base_Array[7],classes,cst_prime,Base_String[108]))
       return read_prime(root,id);
      if(caml_call3(Base_Array[7],classes,cst_before,Base_String[108]))
       return read_before(root,id);
      var
       t35=root.connectedEdges(),
       t34=t35.edges(".before"),
       t36=t35.not(t34),
       t38=t36.targets(),
       _c_=caml_js_to_array(t38.not(root)),
       successors=caml_call1(Base_Array[20],_c_);
      if(caml_call1(Base_List[8],successors))
       return read_atom(root,id,label_string);
      var tl=caml_call2(Base_List[74],successors,read_tree);
      if(caml_call2(Base_String[108],label_string,cst))
       var connective=[1,tl];
      else
       if(caml_call2(Base_String[108],label_string,cst$0))
        var connective=[2,tl];
       else
        var
         _d_=caml_call2(Base[84][8],cst_error,0),
         connective=caml_call1(Base[222],_d_);
      return [0,connective,id]}
    function read_before(root,id)
     {var
       root$0=root.children(".before-root"),
       acc$1=[0,root$0,0],
       root$1=root$0,
       acc=acc$1;
      for(;;)
       {var
         t17=root$1.connectedEdges(".before"),
         t19=t17.targets(),
         t20=t19.not(root$1);
        if(t20.empty())
         {var
           _a_=
            function(cr)
             {var t23=cr.connectedEdges(".compoundOut"),c=t23.target();
              return read_tree(c)},
           successors=caml_call2(Base_List[74],acc,_a_);
          return [0,[3,successors],id]}
        var acc$0=[0,t20,acc],root$1=t20,acc=acc$0;
        continue}}
    var Dune_exe_Reading=[0,read_prime,read_before,read_atom,read_tree];
    runtime.caml_register_global(47,Dune_exe_Reading,"Dune__exe__Reading");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fUmVhZGluZy5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsicmVhZF9wcmltZSIsInJvb3QiLCJpZCIsImNoaWxkcmVuIiwiYyIsIm5vZGVfaWRfcyIsIm5vZGVzIiwiZWRnZV9vYmpzIiwiZWRnZSIsInNvdXJjZSIsInRhcmdldCIsImVkZ2VzIiwic3VjY2Vzc29yc19vYmpzIiwic3VjY2Vzc29ycyIsInJlYWRfdHJlZSIsImlkX2dyYXBoIiwiY29ubmVjdGl2ZSIsInJlYWRfYXRvbSIsIm5vZGUiLCJsYWJlbCIsInBvbCIsImxhYmVsX3N0cmluZyIsImNsYXNzZXNfanMiLCJjbGFzc2VzIiwicmVhZF9iZWZvcmUiLCJ0bCIsInJvb3QkMCIsImFjYyQxIiwicm9vdCQxIiwiYWNjIiwiY3IiLCJhY2MkMCJdLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9tb2R1bGFyX2RlY29tcG9zaXRpb24vX2J1aWxkL2RlZmF1bHQvc3JjL3JlYWRpbmcubWwiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUlRQSxXQUFXQyxLQUFLQztNQUNPOzRCQURaRDtPQUNGO21CQUN1Qkc7UUFDZixJQUFqQkMsVUFBaUIsd0JBRGVEO1FBQ2Ysa0NBQWpCQyxVQUNxQjtNQUZmO3NDQURSRjtVQURhRjtPQU9VO09BRFg7bUJBR3VCTztRQUNSO1lBRFFBO1NBQ1I7U0FBaEI7WUFEd0JBO1NBRVI7U0FBaEI7a0JBRFRDLE9BQ0FDLE9BQ1k7TUFITjtzQ0FIUkg7V0FOYU47O09BYzhFO09BQXpFO09BR0wsb0NBSGJXLGdCQTZCRkU7T0ExQmUsWUFmYlIsTUFPQUs7T0FRYSxjQUNiSSxTQURBRjtNQUFhLFVBRWJHLFdBbkJrQmQsR0FvQmlCO2FBa0JyQ2UsVUFBVUMsS0FBS2hCLEdBQUdpQjtNQUMyQixRQURuQ0QsOEJBQ21DLGlCQUQzQkMsTUFDaEJDO01BQTJDLFVBQzNDSixXQUZhZCxHQUdzQjthQUVyQ1ksVUFBVWI7TUFDcUM7NENBRHJDQTs7T0FFSDtPQUNxQiw0QkFIbEJBO09BSUUsa0NBRFZxQjtNQUVELDRCQURDQztPQUNrRCxrQkFMMUN0QixLQUVSQztNQUlELDRCQUZDcUI7T0FFbUQsbUJBTjNDdEIsS0FFUkM7TUFENkM7V0FEckNEOzs7O09BU2dDLDZCQVRoQ0E7T0FTSztNQUNkLDJCQURDWTtPQUM2QixpQkFWckJaLEtBRVJDLEdBREFtQjtNQUE2QyxJQVU3Q0ksR0FBSyx5QkFGTFosV0FURkM7TUFhRywrQkFaRE87V0FXQUwsY0FEQVM7O09BS0csK0JBZkhKO1lBV0FMLGNBREFTOztRQVFVOztTQVBWVCxXQU9FO01BQWlDLFVBUG5DQSxXQVZBZCxHQW1CbUM7YUExQ3JDc0IsWUFBWXZCLEtBQUtDOztPQUdNd0IsT0FIWHpCO09BR2dCMEIsU0FBTEQ7O09BQUtHO01BQzFCOzthQURxQkQ7Ozs7VUFNUjs7cUJBQThCRTt3REFFekMxQjtxQkFVSlUsVUFWSVYsRUFDTztXQUhJLG9DQU5heUI7VUFNYixhQUFiaEIsWUFUZVg7UUFLYyxpQkFGSDJCLEtBQUxELFdBQUtDO2lCQVdxQjs0QkFwQzdDN0IsV0FzQkp3QixZQWdCQVAsVUFLQUg7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIFF1YXJ0aWNcclxub3BlbiBCYXNlXHJcbm9wZW4gSnNfb2Zfb2NhbWxcclxuXHJcbmxldCByZWMgcmVhZF9wcmltZSByb290IGlkID1cclxuICBsZXQgY2hpbGRyZW4gPSByb290IyNjaGlsZHJlbiB8PiBKcy50b19hcnJheSB8PiBBcnJheS50b19saXN0IGluXHJcbiAgbGV0IG5vZGVzID0gTGlzdC5tYXAgY2hpbGRyZW4gfmY6KGZ1biBjIC0+IFxyXG4gICAgbGV0IG5vZGVfaWRfcyA9IGMjI2lkIHw+IEpzLnRvX3N0cmluZyBpblxyXG4gICAgVXRpbC5yZW1vdmVfcmVwIG5vZGVfaWRfcylcclxuICBpblxyXG4gIGxldCBlZGdlX29ianMgPSAoSnMuVW5zYWZlLmNvZXJjZSByb290IyNjaGlsZHJlbikjI2Nvbm5lY3RlZEVkZ2VzXHJcbiAgICAoSnMuc3RyaW5nIFwiLmNvbXBvdW5kSW5cIikgfD4gSnMudG9fYXJyYXkgfD4gQXJyYXkudG9fbGlzdFxyXG4gIGluXHJcbiAgbGV0IGVkZ2VzID0gTGlzdC5tYXAgZWRnZV9vYmpzIH5mOihmdW4gZWRnZSAtPlxyXG4gICAgbGV0IHNvdXJjZSA9IGVkZ2UjI3NvdXJjZSMjaWQgfD4gSnMudG9fc3RyaW5nIHw+IFV0aWwucmVtb3ZlX3JlcCBpblxyXG4gICAgbGV0IHRhcmdldCA9IGVkZ2UjI3RhcmdldCMjaWQgfD4gSnMudG9fc3RyaW5nIHw+IFV0aWwucmVtb3ZlX3JlcCBpblxyXG4gICAgKHNvdXJjZSwgdGFyZ2V0KSlcclxuICBpblxyXG4gIGxldCBzdWNjZXNzb3JzX29ianMgPSAoKEpzLlVuc2FmZS5jb2VyY2Ugcm9vdCMjY2hpbGRyZW4pIyNvdXRnb2VycyAoSnMuc3RyaW5nIFwibm9kZVwiKSkjI29ycGhhbnNcclxuICAgIHw+IEpzLnRvX2FycmF5IHw+IEFycmF5LnRvX2xpc3RcclxuICBpblxyXG4gIGxldCBzdWNjZXNzb3JzID0gTGlzdC5tYXAgc3VjY2Vzc29yc19vYmpzIH5mOnJlYWRfdHJlZSBpblxyXG4gIGxldCBpZF9ncmFwaCA9IHtUcmVlLm5vZGVzID0gbm9kZXM7IGVkZ2VzID0gZWRnZXN9IGluXHJcbiAgbGV0IGNvbm5lY3RpdmUgPSBUcmVlLlByaW1lIChpZF9ncmFwaCwgc3VjY2Vzc29ycykgaW5cclxuICB7VHJlZS5jb25uZWN0aXZlID0gY29ubmVjdGl2ZTsgaWQgPSBpZH1cclxuXHJcbmFuZCByZWFkX2JlZm9yZSByb290IGlkID1cclxuICBsZXQgY2hpbGRfcm9vdCA9IHJvb3QjI2NoaWxkcmVuIChKcy5zdHJpbmcgXCIuYmVmb3JlLXJvb3RcIikgaW5cclxuICBsZXQgY2hpbGRyZW5fcmVwID1cclxuICAgIGxldCByZWMgcGFyc2VfY2hpbGRyZW4gcm9vdCBhY2MgPVxyXG4gICAgICBsZXQgbmV4dCA9IChyb290IyNjb25uZWN0ZWRFZGdlcyAoSnMuc3RyaW5nIFwiLmJlZm9yZVwiKSkjI3RhcmdldHMjI25vdCAocm9vdCkgaW5cclxuICAgICAgaWYgbmV4dCMjZW1wdHkgdGhlbiBhY2MgZWxzZSBwYXJzZV9jaGlsZHJlbiBuZXh0IChuZXh0IDo6IGFjYylcclxuICAgIGluXHJcbiAgICBwYXJzZV9jaGlsZHJlbiBjaGlsZF9yb290IFtjaGlsZF9yb290XVxyXG4gIGluXHJcbiAgbGV0IHN1Y2Nlc3NvcnMgPSBMaXN0Lm1hcCBjaGlsZHJlbl9yZXAgfmY6KGZ1biBjciAtPlxyXG4gICAgbGV0IG91dEVkZ2UgPSBjciMjY29ubmVjdGVkRWRnZXMgKEpzLnN0cmluZyBcIi5jb21wb3VuZE91dFwiKSBpblxyXG4gICAgbGV0IGMgPSBvdXRFZGdlIyN0YXJnZXQgaW5cclxuICAgIHJlYWRfdHJlZSBjKVxyXG4gIGluXHJcbiAge1RyZWUuY29ubmVjdGl2ZSA9IFRyZWUuQmVmb3JlIHN1Y2Nlc3NvcnM7IGlkID0gaWR9XHJcblxyXG5hbmQgcmVhZF9hdG9tIG5vZGUgaWQgbGFiZWwgPVxyXG4gIGxldCBwb2wgPSBub2RlIyNkYXRhIChKcy5zdHJpbmcgXCJwb2xhcmlzYXRpb25cIikgfD4gSnMudG9fYm9vbCBpblxyXG4gIGxldCBjb25uZWN0aXZlID0gVHJlZS5BdG9tIHtHcmFwaC5sYWJlbCA9IGxhYmVsOyBwb2wgPSBwb2x9IGluXHJcbiAge1RyZWUuY29ubmVjdGl2ZSA9IGNvbm5lY3RpdmU7IGlkID0gaWR9XHJcblxyXG5hbmQgcmVhZF90cmVlIHJvb3QgPVxyXG4gIGxldCBsYWJlbF9zdHJpbmcgPSByb290IyNkYXRhIChKcy5zdHJpbmcgXCJsYWJlbFwiKSB8PiBKcy50b19zdHJpbmcgaW5cclxuICBsZXQgaWQgPSByb290IyNkYXRhIChKcy5zdHJpbmcgXCJpZFwiKSB8PiBKcy5wYXJzZUludCBpblxyXG4gIGxldCBjbGFzc2VzX2pzID0gcm9vdCMjY2xhc3NlcyB8PiBKcy50b19hcnJheSBpblxyXG4gIGxldCBjbGFzc2VzID0gQXJyYXkubWFwIGNsYXNzZXNfanMgfmY6KEpzLnRvX3N0cmluZykgaW5cclxuICBpZiBBcnJheS5tZW0gY2xhc3NlcyBcInByaW1lXCIgfmVxdWFsOlN0cmluZy5lcXVhbCB0aGVuIHJlYWRfcHJpbWUgcm9vdCBpZCBlbHNlXHJcbiAgaWYgQXJyYXkubWVtIGNsYXNzZXMgXCJiZWZvcmVcIiB+ZXF1YWw6U3RyaW5nLmVxdWFsIHRoZW4gcmVhZF9iZWZvcmUgKEpzLlVuc2FmZS5jb2VyY2Ugcm9vdCkgaWQgZWxzZVxyXG4gIGxldCBhbGxfZWRnZXMgPSAoSnMuVW5zYWZlLmNvZXJjZSByb290KSMjY29ubmVjdGVkRWRnZXMgaW5cclxuICBsZXQgZWRnZXNfdG8gPSBhbGxfZWRnZXMjI25vdCAoYWxsX2VkZ2VzIyNlZGdlcyAoSnMuc3RyaW5nIFwiLmJlZm9yZVwiKSkgaW5cclxuICBsZXQgc3VjY2Vzc29ycyA9IGVkZ2VzX3RvIyN0YXJnZXRzIyNub3Qgcm9vdCB8PiBKcy50b19hcnJheSB8PiBBcnJheS50b19saXN0IGluXHJcbiAgaWYgTGlzdC5pc19lbXB0eSBzdWNjZXNzb3JzIHRoZW4gcmVhZF9hdG9tIChKcy5VbnNhZmUuY29lcmNlIHJvb3QpIGlkIGxhYmVsX3N0cmluZyBlbHNlXHJcbiAgbGV0IHRsID0gTGlzdC5tYXAgc3VjY2Vzc29ycyB+ZjpyZWFkX3RyZWUgaW5cclxuICBsZXQgY29ubmVjdGl2ZSA9XHJcbiAgICBpZiBTdHJpbmcuZXF1YWwgbGFiZWxfc3RyaW5nIFwi4oqXXCIgdGhlbiBcclxuICAgICAgVHJlZS5UZW5zb3IgdGxcclxuICAgIGVsc2UgXHJcbiAgICAgIGlmIFN0cmluZy5lcXVhbCBsYWJlbF9zdHJpbmcgXCLihYtcIiB0aGVuXHJcbiAgICAgICAgVHJlZS5QYXIgdGxcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHJhaXNlX3MgKFNleHAubWVzc2FnZSBcImVycm9yXCIgW10pXHJcbiAgaW5cclxuICB7VHJlZS5jb25uZWN0aXZlID0gY29ubmVjdGl2ZTsgaWQgPSBpZH0iXX0=
