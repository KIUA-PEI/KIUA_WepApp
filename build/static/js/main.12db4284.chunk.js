(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),i=n(32),o=n.n(i),r=(n(38),n(10)),s=n.p+"static/media/logo.6ce24c58.svg",u=(n(39),n(33)),d=n.n(u),j=n(0);function l(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),s=o[0],u=o[1];return Object(c.useEffect)((function(){var e=d()("https://peiwebapp.azurewebsites.net/:4001");return e.on("Hello",(function(e){console.log("Hello from server"+e)})),e.on("Parking",(function(e){a({Nome:e.PARK[1].Nome,Capacidade:e.PARK[1].Capacidade,Ocupado:e.PARK[1].Ocupado,Livre:e.PARK[1].Livre})})),e.on("Router",(function(e){u({deti:e.WIFIUSR[1].deti,it:e.WIFIUSR[1].it,dmat:e.WIFIUSR[1].dmat})})),function(){return e.close()}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{children:["Estacionamento: ",n.Nome," Capacidade: ",n.Capacidade," Ocupados: ",n.Ocupado," Livres: ",n.Livre]}),Object(j.jsxs)("h4",{children:["Deti: ",s.deti," It: ",s.it," Dmat: ",s.dmat]})]})}var p=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:function(){return a((function(e){return!e}))},children:"STOP CLIENT"}),n?Object(j.jsx)(l,{}):null]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}},[[72,1,2]]]);
//# sourceMappingURL=main.12db4284.chunk.js.map