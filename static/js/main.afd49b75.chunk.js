(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t){},111:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(48),i=n.n(c),u=(n(61),n(17)),s=n(5),o=n(4),l=n.n(o),m=n(8),p=n(10),f=(n(63),n(49)),d=n.n(f).a.create({baseURL:"https://tindev-backend-gustavo-tp.herokuapp.com"}),v=n(16),E=n.n(v);function h(e){var t=e.history,n=Object(a.useState)(""),c=Object(p.a)(n,2),i=c[0],u=c[1];function s(){return(s=Object(m.a)(l.a.mark((function e(n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.post("/devs",{username:i});case 3:a=e.sent,r=a.data._id,t.push("/dev/".concat(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("img",{src:E.a,alt:"Tindev"}),r.a.createElement("input",{placeholder:"Digite seu usu\xe1rio no Github",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Enviar")))}var b=n(50),g=n.n(b),k=(n(111),n(51)),y=n.n(k),x=n(52),j=n.n(x),O=n(53),w=n.n(O);function N(e){var t=e.match,n=Object(a.useState)([]),c=Object(p.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(null),f=Object(p.a)(o,2),v=f[0],h=f[1];function b(){return(b=Object(m.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/devs/".concat(n,"/dislikes"),null,{headers:{user:t.params.id}});case 2:s(i.filter((function(e){return e._id!==n})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(m.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/devs/".concat(n,"/likes"),null,{headers:{user:t.params.id}});case 2:s(i.filter((function(e){return e._id!==n})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/devs",{headers:{user:t.params.id}});case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]),Object(a.useEffect)((function(){g()("https://tindev-backend-gustavo-tp.herokuapp.com",{query:{user:t.params.id}}).on("match",(function(e){h(e)}))}),[t.params.id]),r.a.createElement("div",{className:"main-container"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:E.a,alt:"Tindev"})),i.length>0?r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.avatar,alt:e.name}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name),r.a.createElement("p",null,e.bio)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return b.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:y.a,alt:"Dislike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return k.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:j.a,alt:"Like"}))))}))):r.a.createElement("div",{className:"empty"},"Acabou :("),v&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:w.a,alt:"It's a match"}),r.a.createElement("img",{className:"avatar",src:v.avatar,alt:""}),r.a.createElement("strong",null,v.name),r.a.createElement("p",null,v.bio),r.a.createElement("button",{type:"button",onClick:function(){return h(null)}},"FECHAR")))}function _(){return r.a.createElement(u.a,{basename:"tindev"},r.a.createElement(s.a,{path:"/",exact:!0,component:h}),r.a.createElement(s.a,{path:"/dev/:id",component:N}))}var C=function(){return r.a.createElement(_,null)};i.a.render(r.a.createElement(C,null),document.getElementById("root"))},16:function(e,t,n){e.exports=n.p+"static/media/logo.6a01ceef.svg"},51:function(e,t,n){e.exports=n.p+"static/media/dislike.d4ec34e8.svg"},52:function(e,t,n){e.exports=n.p+"static/media/like.542059a4.svg"},53:function(e,t,n){e.exports=n.p+"static/media/itsamatch.21c10b26.png"},56:function(e,t,n){e.exports=n(119)},61:function(e,t,n){},63:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.afd49b75.chunk.js.map