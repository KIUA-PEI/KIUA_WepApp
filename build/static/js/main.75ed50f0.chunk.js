(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},34:function(e,t,n){e.exports=n(72)},39:function(e,t,n){},40:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(31),r=n.n(o),i=(n(39),n(9)),u=n(32),l=n.n(u),s=(n(40),n(33)),d=n.n(s);function m(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),l=u[0],s=u[1];return Object(a.useEffect)((function(){var e=d()("http://127.0.0.1:4001");return e.on("Parking",(function(e){o({Nome:e[1].Nome,Capacidade:e[1].Capacidade,Ocupado:e[1].Ocupado,Livre:e[1].Livre}),console.log("PARKING")})),e.on("Router",(function(e){s({deti:e[0].deti,it:e[0].it,dmat:e[0].dmat}),console.log("ROUTERS")})),function(){return e.close()}}),[]),c.a.createElement("div",null,c.a.createElement("h4",null,"Estacionamento: ",n.Nome," Capacidade: ",n.Capacidade," Ocupados: ",n.Ocupado," Livres: ",n.Livre),c.a.createElement("h4",null,"Deti: ",l.deti," It: ",l.it," Dmat: ",l.dmat))}var p=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return o((function(e){return!e}))}},"STOP CLIENT"),n?c.a.createElement(m,null):null)))},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.75ed50f0.chunk.js.map