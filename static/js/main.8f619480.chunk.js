(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(5),r=n.n(c),l=(n(12),n(3)),i=n(6);n(13);function u(e){var t=e.todo,n=e.toggleTodo;return a.a.createElement("div",null,a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){n(t.id)}}),t.name))}function s(e){var t=e.todos,n=e.toggleTodo;return t.map((function(e){return a.a.createElement(u,{key:e.id,todo:e,toggleTodo:n})}))}var d=n(16);var m=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useRef)();return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(n))}),[n]),a.a.createElement("div",{className:"App-header"},a.a.createElement("div",{class:"Div-spacing"},a.a.createElement(s,{todos:n,toggleTodo:function(e){var t=Object(l.a)(n),o=t.find((function(t){return t.id===e}));o.completed=!o.completed,c(t)}})),a.a.createElement("input",{className:"Input-box",ref:r,type:"text",placeholder:" Add a New Task here !!.."}),a.a.createElement("div",{class:"Div-spacing"},a.a.createElement("button",{className:"Button",onClick:function(e){var t=r.current.value;""!==t&&(c((function(e){return[].concat(Object(l.a)(e),[{id:Object(d.a)(),name:t,completed:!1}])})),r.current.value=null)}},"Add To do"),a.a.createElement("button",{className:"Button",onClick:function(){var e=n.filter((function(e){return!e.completed}));c(e)}},"Clear Completed"),a.a.createElement("button",{className:"Button",onClick:function(){c([])}},"Delete all")),a.a.createElement("div",{class:"Div-spacing"},n.filter((function(e){return!e.completed})).length," Pending Task"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8f619480.chunk.js.map