(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={item:"MyItem_item__3ated",grid:"MyItem_grid__2KYBE",add:"MyItem_add__1vgLv",ModalWrapper:"MyItem_ModalWrapper__2SyB7"}},16:function(e,t,a){e.exports={header:"MyHeader_header__31Dp-",img:"MyHeader_img__1B9TV",headerWrapp:"MyHeader_headerWrapp__1gGyC",links:"MyHeader_links__1FMMo"}},28:function(e,t,a){e.exports={Modal:"Modal_Modal__22198",active:"Modal_active__2AgYY",content:"Modal_content__2rhAZ"}},36:function(e,t,a){e.exports={loader:"loader_loader__2EtkN",moving:"loader_moving__3csP3"}},42:function(e,t,a){e.exports={button:"MyBtn_button__1oqtt",gradient:"MyBtn_gradient__3vqTS"}},45:function(e,t,a){e.exports=a(89)},58:function(e,t,a){},62:function(e,t,a){e.exports={gradient:"MyInput_gradient__3BCuL"}},8:function(e,t,a){e.exports={container:"MyGroup_container__17QwX",headers:"MyGroup_headers__1T69j",center:"MyGroup_center__3fv6B",table:"MyGroup_table__180uX",wrapper:"MyGroup_wrapper__2I_i4",autorise:"MyGroup_autorise__hV7hi",inputs:"MyGroup_inputs__3y5dF",title:"MyGroup_title__1YPPD",add_user_btn:"MyGroup_add_user_btn__mc3F6",btn2:"MyGroup_btn2__2tROa",th_name:"MyGroup_th_name__1ZlGA",refresh:"MyGroup_refresh__1glxQ",formbtn:"MyGroup_formbtn__34ouU",select:"MyGroup_select__1orfl"}},89:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(21),s=a.n(c),o=a(5),l=a(29),u=a(16),i=a.n(u),d=a(20),p=a(14),m=a(24),f=a(44),b=Object(f.a)("https://sdlibdtsuvgugutdjaxc.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbGliZHRzdXZndWd1dGRqYXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1Njg4MzgsImV4cCI6MTk2OTE0NDgzOH0.EE9VS6us2dUoUgzVSEscSQjG7462MWU659cOvxA0NZY");function h(e){var t=e.title,a=e.isAuth,n=e.setAuth;return r.a.createElement("header",{className:i.a.header},r.a.createElement("div",{className:i.a.headerWrapp},r.a.createElement("div",null),r.a.createElement("div",null,t),r.a.createElement("div",{className:i.a.links},r.a.createElement(p.b,{"data-tip":!0,"data-for":"home",className:i.a.img,to:"/react-e-mark"},r.a.createElement(m.b,{className:i.a.img})),a?r.a.createElement(p.b,{to:"/react-e-mark"},r.a.createElement(l.b,{className:i.a.img,onClick:function(){b.auth.signOut(),n(!1)},"data-tip":!0,"data-for":"signin"})):r.a.createElement(p.b,{className:i.a.img,to:"/login"},r.a.createElement(l.a,{className:i.a.img,"data-tip":!0,"data-for":"signin"})),r.a.createElement(d.a,{id:"home",place:"bottom",effect:"solid"},"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"),r.a.createElement(d.a,{id:"signin",place:"bottom",effect:"solid"},a?"\u0412\u0438\u0445\u0456\u0434 \u0437 \u0430\u043a\u0430\u0443\u043d\u0442\u0443":"\u0412\u0445\u0456\u0434 \u0434\u043e \u0430\u043a\u0430\u0443\u043d\u0442\u0443"))))}a(58);var v=a(2),g=a(3),_=a.n(g),j=a(9),E=a(8),x=a.n(E),y=a(12),O=a.n(y);a(62);function k(e){return r.a.createElement("input",{placeholder:e.placeholder,type:e.type,onInput:function(t){e.fun(t.target.value)}})}var w=a(36),N=a.n(w);function M(){return r.a.createElement("div",{className:N.a.loader})}var S,A=a(15),I=a(7),C=a(23),G=a(13),B=a.n(G),P=a(37),H=a(38),D=a(39).a.div(S||(S=Object(P.a)(["\n  padding: 1rem;\n  display:flex;\n  justify-content:center;\n  table {\n    width:100%;\n    border-spacing: 0;\n    border: 1px solid black;\n    border-radius:10px;\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n    th{\n      background-color:#3333;\n      \n    }\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid #444;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n      \n    }\n    \n    }\n"])));var T=function(e){var t=e.columns,a=e.data,n=Object(H.useTable)({columns:t,data:a}),c=n.getTableProps,s=n.getTableBodyProps,o=n.headerGroups,l=n.rows,u=n.prepareRow;return r.a.createElement(D,null,r.a.createElement("table",c(),r.a.createElement("thead",null,o.map(function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),r.a.createElement("tbody",s(),l.map(function(e,t){return u(e),r.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))))},V=a(10),q={option:function(){return{borderBottom:"1px solid #DCDCDC",textAlign:"center",padding:"5px",cursor:"pointer","&:hover":{backgroundImage:"linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",color:"white",borderRadius:"5px"}}},control:function(){return{border:"none",padding:"0px",height:"25px",cursor:"pointer"}},singleValue:function(){return{padding:"5px"}},valueContainer:function(){return{textAlign:"center"}},dropdownIndicator:function(){return{display:"none"}},indicatorSeparator:function(){return{display:"none"}},container:function(){return{}},placeholder:function(){return{padding:"5px"}},menu:function(){return{width:"100%",borderRadius:"6px",backgroundColor:"white",padding:"5px","&::-webkit-scrollbar":{display:"none"},"&::-ms-overflow-style":{display:"none"}}}},R=[{value:0,label:"\u041d\u0411"},{value:1,label:"\u0411"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"}],W=[{Header:"\u2116",Cell:function(e){return e.row.index+1}},{Header:"\u041f\u0406\u0411",columns:[{Header:"\u0406\u043c`\u044f",accessor:"first_name"},{Header:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",accessor:"last_name"}]}];function J(e){var t=e.isAuth,a=e.students;function n(){return(n=Object(j.a)(_.a.mark(function e(t){var a,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.grade,n=t.id,Object(A.a)(t,["grade","id"]),e.prev=1,e.next=4,b.from("marks").update({grade:a}).match({id:Number(n)});case 4:V.b.success("\u041e\u0446\u0456\u043d\u043a\u0443 \u0437\u043c\u0456\u043d\u0435\u043d\u043e"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),V.b.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430");case 10:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}var c=r.a.useMemo(function(){var e=Object(o.a)(a,1)[0],c=(void 0===e?{}:e).lessons,s=void 0===c?[]:c,l=[];return B.a.forEach(s,function(e,a){l.push({Header:function(e){var t=e.rowsById[0].original.lessons[a];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("span",null,t.title),r.a.createElement("span",null,new Date(t.update_at).toLocaleDateString()))},accessor:"lessons[".concat(a,"].mark"),Cell:function(e){var a=e.value;e.row;return r.a.createElement("div",{className:x.a.formbtn},t?r.a.createElement(C.a,{menuShouldBlockScroll:!0,options:R,styles:q,placeholder:a?0==a.grade?"\u041d\u0411":1===a.grade?" ":a.grade:null,isSearchable:!1,menuPortalTarget:document.querySelector("body"),onChange:function(e){return function(e){return n.apply(this,arguments)}(Object(I.a)({},a,{grade:e.value}))},className:x.a.select}):r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},a?0==a.grade?"\u041d\u0411":1===a.grade?" ":a.grade:null))}})}),W.concat({Header:"\u0423\u0440\u043e\u043a\u0438",columns:l})},[a]);return r.a.createElement(T,{data:a,columns:c})}J.defaultProps={students:[]};var Y=a(28),Z=a.n(Y);function z(e){var t=e.children,a=e.visible,n=e.setVisible,c=[Z.a.Modal];return a&&c.push(Z.a.active),r.a.createElement("div",{className:c.join(" "),onClick:function(){n(!1)}},r.a.createElement("div",{className:Z.a.content,onClick:function(e){e.stopPropagation()}},t))}var F=a(43),X=a(42),U=a.n(X);function L(e){return r.a.createElement("button",{className:U.a.button,onClick:function(){e.func()}},e.children)}function Q(){return K.apply(this,arguments)}function K(){return(K=Object(j.a)(_.a.mark(function e(){var t,a,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("groups").select("*");case 2:if(t=e.sent,a=t.data,t.status,!(n=t.error)){e.next=8;break}throw new Error(n);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e){var t=e.lessons,a=Object(A.a)(e,["lessons"]),n=Object(G.map)(t,"lesson").filter(Boolean);return Object(I.a)({},a,{lessons:Object(G.map)(n,function(t){return function(e,t){var a=t.marks,n=Object(A.a)(t,["marks"]),r=Object(G.filter)(a,["student_id",e]),c=Object(o.a)(r,1)[0];return Object(I.a)({},n,{mark:c})}(e.id,t)})})}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(j.a)(_.a.mark(function e(t,a){var n,r,c,s,o,l,u;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("students").select("*, lessons:lessons_students!inner( lesson:lessons(\n        *,\n        journal:journals!inner( subject:subjects(name,id)  ),\n        marks!inner(grade,id,student_id)    \n        )  )").eq("group_id",a).eq("lessons.lesson.journal.subject_id",t);case 2:return n=e.sent,r=n.data,n.error,e.next=7,b.from("groups").select("*").eq("id",a).limit(1).single();case 7:return c=e.sent,s=c.data,e.next=11,b.from("subjects").select("*").eq("id",t).limit(1).single();case 11:return o=e.sent,l=o.data,u={subject:l,group:s,students:Object(G.map)(r,$)},console.log(u),e.abrupt("return",u);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ae(){return(ae=Object(j.a)(_.a.mark(function e(t){var a,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("students").select("id").eq("group_id",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ne(){return(ne=Object(j.a)(_.a.mark(function e(t){var a,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("journals").select("lesson_id").eq("subject_id",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function re(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return ce(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ce(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){o=!0,c=e},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw c}}}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function se(e){var t=e.isAuth,a=(e.setAuth,Object(v.h)()),c=a.id,s=a.groupId,l=Object(n.useState)(void 0),u=Object(o.a)(l,2),i=u[0],p=u[1],f=Object(n.useState)([]),h=Object(o.a)(f,2),g=(h[0],h[1]),E=Object(n.useState)([]),y=Object(o.a)(E,2),w=(y[0],y[1]),N=Object(n.useState)(!1),S=Object(o.a)(N,2),A=S[0],I=S[1],C=Object(n.useState)(!1),G=Object(o.a)(C,2),B=G[0],P=G[1],H=Object(n.useState)(void 0),D=Object(o.a)(H,2),T=D[0],q=D[1],R=Object(n.useState)(void 0),W=Object(o.a)(R,2),Y=W[0],Z=W[1],X=Object(n.useState)(void 0),U=Object(o.a)(X,2),Q=U[0],K=U[1],$=Object(n.useState)(void 0),te=Object(o.a)($,2),ce=te[0],se=te[1],oe=Object(n.useState)("idle"),le=Object(o.a)(oe,2),ue=le[0],ie=le[1];function de(){return Math.floor(5e6*Math.random())}function pe(){return(pe=Object(j.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!T||!Y){e.next=12;break}return e.prev=1,I(!1),ie("pending"),t=de(),e.next=7,b.from("students").insert({group_id:s,first_name:T,last_name:Y,id:t});case 7:return e.next=9,b.from("lesson_group").select("lesson_id").eq("group_id",s).then(function(){var e=Object(j.a)(_.a.mark(function e(a){var n,r,s;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=re(a.data),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=16;break}return s=r.value,e.t0=Promise,e.next=8,b.from("lessons_students").insert({student_id:t,lesson_id:s.lesson_id});case 8:return e.t1=e.sent,e.next=11,b.from("marks").insert({student_id:t,lesson_id:s.lesson_id,subject_id:c});case 11:e.t2=e.sent,e.t3=[e.t1,e.t2],e.t0.all.call(e.t0,e.t3);case 14:e.next=3;break;case 16:e.next=21;break;case 18:e.prev=18,e.t4=e.catch(1),n.e(e.t4);case 21:return e.prev=21,n.f(),e.finish(21);case 24:case"end":return e.stop()}},e,null,[[1,18,21,24]])}));return function(t){return e.apply(this,arguments)}}());case 9:return e.prev=9,ee(c,s).then(function(e){p(e),ie("resolved"),V.b.success("\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0434\u043e\u0434\u0430\u043d\u043e")}),e.finish(9);case 12:T||(I(!1),V.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c\u02bc\u044f")),Y||(I(!1),V.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"));case 14:case"end":return e.stop()}},e,null,[[1,,9,12]])}))).apply(this,arguments)}function me(){return(me=Object(j.a)(_.a.mark(function e(){var t,a,n,r,o,l;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Q){e.next=51;break}return P(!1),ie("loading"),e.prev=3,t=de(),e.t0=Promise,e.next=8,b.from("lesson_group").insert({lesson_id:t,group_id:s});case 8:return e.t1=e.sent,e.next=11,b.from("lessons").insert({title:Q,description:ce,id:t});case 11:return e.t2=e.sent,e.next=14,b.from("journals").insert({lesson_id:t,subject_id:c});case 14:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.t0.all.call(e.t0,e.t4),e.next=19,b.from("students").select("id,group_id");case 19:a=e.sent,n=a.data,r=re(n),e.prev=22,r.s();case 24:if((o=r.n()).done){e.next=38;break}if((l=o.value).group_id!=s){e.next=36;break}return e.t5=Promise,e.next=30,b.from("lessons_students").insert({student_id:l.id,lesson_id:t});case 30:return e.t6=e.sent,e.next=33,b.from("marks").insert({student_id:l.id,lesson_id:t,subject_id:c});case 33:e.t7=e.sent,e.t8=[e.t6,e.t7],e.t5.all.call(e.t5,e.t8);case 36:e.next=24;break;case 38:e.next=43;break;case 40:e.prev=40,e.t9=e.catch(22),r.e(e.t9);case 43:return e.prev=43,r.f(),e.finish(43);case 46:return e.prev=46,ee(c,s).then(function(e){p(e),ie("resolved"),V.b.success("\u0423\u0440\u043e\u043a \u0434\u043e\u0434\u0430\u043d\u043e")}),e.finish(46);case 49:e.next=53;break;case 51:P(!1),V.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0443\u0440\u043e\u043a\u0443");case 53:case"end":return e.stop()}},e,null,[[3,,46,49],[22,40,43,46]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){ie("pending"),ee(c,s).then(function(e){ie("resolved"),p(e)}),function(e){return ae.apply(this,arguments)}(s).then(function(e){g(e)}),function(e){return ne.apply(this,arguments)}(c).then(function(e){w(e)})},[]),r.a.createElement("div",null,r.a.createElement(z,{visible:A,setVisible:I},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430",r.a.createElement("div",{className:O.a.ModalWrapper},r.a.createElement(k,{fun:q,placeholder:"\u0406\u043c\u02bc\u044f"}),r.a.createElement(k,{fun:Z,placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),r.a.createElement(L,{func:function(){return pe.apply(this,arguments)}},"\u0414\u043e\u0434\u0430\u0442\u0438"))),r.a.createElement(z,{visible:B,setVisible:P},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u0443\u0440\u043e\u043a",r.a.createElement("div",{className:O.a.ModalWrapper},r.a.createElement(k,{fun:K,placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0443\u0440\u043e\u043a\u0443"}),r.a.createElement(k,{fun:se,placeholder:"\u041e\u043f\u0438\u0441"})),r.a.createElement(L,{func:function(){return me.apply(this,arguments)}},"\u0414\u043e\u0434\u0430\u0442\u0438")),r.a.createElement("div",{className:x.a.container},"resolved"===ue?r.a.createElement("div",null,r.a.createElement("div",{className:x.a.title},i?"".concat(i.group.name," ").concat(i.subject.name):null,t?r.a.createElement("div",{className:x.a.title},r.a.createElement(F.a,{"data-tip":!0,"data-for":"studAdd",className:[x.a.add_user_btn].join(" "),onClick:function(){I(!0)}}),r.a.createElement(m.a,{"data-tip":!0,"data-for":"collAdd",className:[x.a.add_user_btn,x.a.btn2].join(" "),onClick:function(){P(!0)}})):null,r.a.createElement(d.a,{id:"studAdd",place:"top",effect:"solid"},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"),r.a.createElement(d.a,{id:"collAdd",place:"top",effect:"solid"},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u0443\u0440\u043e\u043a")),r.a.createElement("div",null,i?"\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447: ".concat(i.subject.teacher_name):null),r.a.createElement(J,Object.assign({isAuth:t},i))):r.a.createElement("div",{className:x.a.center},r.a.createElement(M,null))))}function oe(){return le.apply(this,arguments)}function le(){return(le=Object(j.a)(_.a.mark(function e(){var t,a,n,r;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("subjects").select("*");case 3:return t=e.sent,a=t.data,n=t.status,r=t.error,e.abrupt("return",{data:a,status:n,error:r});case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}function ue(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(j.a)(_.a.mark(function e(t){var a,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("enrollments").select("groups(*), subjects!inner(*)").eq("subjects.id",t);case 2:return a=e.sent,n=a.data,console.log("data",n),console.log("122",Object(G.get)(n)),e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function de(e){var t=e.subjects,a=e.isAuth,c=e.status,s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],i=l[1],d=Object(n.useState)(void 0),m=Object(o.a)(d,2),f=m[0],h=m[1],v=Object(n.useState)(void 0),g=Object(o.a)(v,2),E=g[0],x=g[1],y=Object(n.useState)(t),w=Object(o.a)(y,2),N=w[0],M=w[1];function S(){return(S=Object(j.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!f||!E){e.next=10;break}return i(!1),c("loading"),e.next=5,b.from("subjects").insert([{name:E,teacher_name:f}]);case 5:return t=e.sent,t.data,t.error,e.next=10,oe().then(function(e){M(e.data),c("resolved"),V.b.success("\u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u043e\u0434\u0430\u043d\u043e")});case 10:f||(i(!1),V.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u041f\u0406\u0411 \u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430")),E||(i(!1),V.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430"));case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:O.a.grid},r.a.createElement(z,{className:"modal",visible:u,setVisible:i},"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430",r.a.createElement("div",{className:O.a.ModalWrapper},r.a.createElement(k,{fun:x,placeholder:"\u041d\u0430\u0437\u0432\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430",type:"text"}),r.a.createElement(k,{fun:h,placeholder:"\u041f\u0406\u0411 \u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430",type:"text"})),r.a.createElement(L,{func:function(){return S.apply(this,arguments)}},"\u0414\u043e\u0434\u0430\u0442\u0438")),a?r.a.createElement("div",{className:[O.a.item,O.a.add].join(" "),onClick:function(){i(!0)}},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442"):null,N.map(function(e){return console.log(e),r.a.createElement("div",{key:e.id},r.a.createElement(p.b,{className:O.a.item,to:"/subjects/".concat(e.id,"/groups")},e.name,r.a.createElement("div",null,"\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447: ",e.teacher_name)))}))}function pe(e){var t=e.isAuth,a=e.setAuth,c=Object(n.useState)(),s=Object(o.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)("ide"),d=Object(o.a)(i,2),p=d[0],m=d[1];return Object(n.useEffect)(Object(j.a)(_.a.mark(function e(){var t,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m("loading"),e.next=3,oe();case 3:t=e.sent,a=t.data,u(a),m("resolved");case 7:case"end":return e.stop()}},e)})),[]),r.a.createElement("div",null,r.a.createElement("div",{className:x.a.container},"resolved"===p?r.a.createElement(de,{setAuth:a,isAuth:t,subjects:l,status:m}):r.a.createElement("div",{className:x.a.center},r.a.createElement(M,null))))}function me(e){var t=e.isAuth,a=e.setAuth,c=Object(n.useState)(!1),s=Object(o.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),p=d[0],m=d[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),g=h[0],E=h[1],y=function(){var e=Object(j.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,b.auth.signIn({email:p,password:g});case 4:b.auth.user()&&(a(!0),V.b.success("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043e")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),V.b.error("".concat(e.t0.error_description||"You must provide either an email, phone number, a third-party provider or OpenID Connect."==e.t0.message?"\u041d\u0435 \u0432\u0441\u0456 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0456":"\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u043f\u043e\u0448\u0442\u0430 \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c"));case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(v.a,{to:"/",replace:!0}):null,r.a.createElement("div",{className:x.a.container},l?r.a.createElement("div",{className:x.a.center}," ",r.a.createElement(M,null)):r.a.createElement("div",{className:x.a.wrapper},r.a.createElement("div",{className:x.a.autorise},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"),r.a.createElement("div",{className:x.a.inputs},r.a.createElement(k,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0442\u0443",type:"email",fun:m}),r.a.createElement(k,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",fun:E})),r.a.createElement("div",{className:x.a.autorisebtn},r.a.createElement(L,{func:y},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044f")))))}de.defaultProps={groups:[]};a(87);var fe={option:function(){return{borderBottom:"1px solid #DCDCDC",marginTop:"10px",padding:"0 5px",cursor:"pointer","&:hover":{backgroundImage:"linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",color:"white",borderRadius:"5px"}}},control:function(){return{border:"none",padding:"0px",height:"25px",cursor:"pointer"}},singleValue:function(){return{backgroundImage:"linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",borderRadius:"5px",padding:"5px",color:"white"}},valueContainer:function(){return{height:"20px"}},dropdownIndicator:function(){return{display:"none"}},indicatorSeparator:function(){return{display:"none"}},container:function(){return{}},placeholder:function(){return{padding:"5px",textAlign:"left",marginBottom:"10px"}},menu:function(){return{marginTop:"50px",width:"100%",borderRadius:"6px",backgroundColor:"white",padding:"05px","&::-webkit-scrollbar":{display:"none"},"&::-ms-overflow-style":{display:"none"}}}};function be(e){var t=e.isAuth,a=Object(v.h)().id,c=Object(n.useState)(),s=Object(o.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)([]),d=Object(o.a)(i,2),m=d[0],f=d[1],h=Object(n.useState)(!1),g=Object(o.a)(h,2),E=g[0],y=g[1],k=Object(n.useState)(),w=Object(o.a)(k,2),N=w[0],S=w[1];function A(){return(A=Object(j.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.from("enrollments").select("*");case 2:if(t=e.sent,t.data,!N){e.next=8;break}return e.next=7,b.from("enrollments").insert({group_id:N,subject_id:a});case 7:ue(a).then(u).then(function(){y(!1),V.b.success("\u0416\u0443\u0440\u043d\u0430\u043b \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e")});case 8:N||(y(!1),V.b.error("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0433\u0440\u0443\u043f\u0443"));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){Promise.all([ue(a),Q()]).then(function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];u(a),f(n)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.container},l?r.a.createElement("div",null,r.a.createElement("div",{className:O.a.grid},r.a.createElement(z,{className:"modal",visible:E,setVisible:y},"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0433\u0440\u0443\u043f\u0438 \u0434\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430",r.a.createElement("div",{className:O.a.ModalWrapper},r.a.createElement("div",{className:x.a.selectadd},r.a.createElement(C.a,{menuShouldBlockScroll:!0,options:Object(G.map)(m,function(e){return{value:e.id,label:e.name}}),styles:fe,placeholder:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0433\u0440\u0443\u043f\u0443...",onChange:function(e){S(e.value)},isSearchable:!1}))),r.a.createElement(L,{func:function(){return A.apply(this,arguments)}},"\u0414\u043e\u0434\u0430\u0442\u0438")),t?r.a.createElement("div",{className:[O.a.item,O.a.add].join(" "),onClick:function(){y(!0)}},"\u0414\u043e\u0434\u0430\u0442\u0438 \u0433\u0440\u0443\u043f\u0443"):null,Object(G.map)(l,function(e){return console.log(l),console.log(e),r.a.createElement("div",{key:e.id},r.a.createElement(p.b,{className:O.a.item,to:"".concat(e.group_id)},r.a.createElement("div",null,e.groups.name),r.a.createElement("div",null,e.subjects.name),r.a.createElement("div",null,"\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447: ",e.subjects.teacher_name)))}))):r.a.createElement("div",{className:x.a.center},r.a.createElement(M,null))))}function he(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){b.auth.user()&&c(!a)},[]),r.a.createElement("div",{className:"flex content-center"},r.a.createElement(p.a,null,r.a.createElement(h,{setAuth:c,isAuth:a,title:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0439 \u0436\u0443\u0440\u043d\u0430\u043b"}),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/react-e-mark",element:r.a.createElement(pe,{setAuth:c,isAuth:a})}),r.a.createElement(v.b,{path:"/subjects/:id/groups",element:r.a.createElement(be,{isAuth:a})}),r.a.createElement(v.b,{path:"/subjects/:id/groups/:groupId",element:r.a.createElement(se,{setAuth:c,isAuth:a})}),r.a.createElement(v.b,{path:"/login",element:r.a.createElement(me,{setAuth:c,isAuth:a})}))),r.a.createElement(V.a,{position:"bottom-right",autoClose:2e3}))}s.a.render(r.a.createElement(he,null),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.bb403061.chunk.js.map