(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{10:function(e,n,t){e.exports=t(17)},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),i=(t(15),t(2)),s=t.n(i),l=t(1),u=t(3),d=t(9),f=t(4),v=t.n(f);function m(e){var n=e.name,t=e.recovered,r=e.confirmed,o=e.deaths,c=e.rank;return a.a.createElement("div",{className:v.a.country},a.a.createElement("h1",null,c+1),a.a.createElement("h1",null,n),a.a.createElement("div",{className:v.a.data},a.a.createElement("div",{className:v.a.col},a.a.createElement("strong",null,"Recovered:"),a.a.createElement("strong",null,"Confirmed:"),a.a.createElement("strong",null,"Deaths:")),a.a.createElement("div",{className:v.a.col},a.a.createElement("div",null,t),a.a.createElement("div",null,r),a.a.createElement("div",null,o))))}var h=t(8),p=t.n(h);function g(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://coronaapi.com/api");case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement((function(){var e=Object(d.a)("countryData",g,{revalidateOnFocus:!1}),n=e.data,t=e.error,r=e.isValidating;return t?(console.log(t),a.a.createElement("div",null,"Error")):r?a.a.createElement("div",null,"Loading..."):n?a.a.createElement("div",{className:p.a.countries},Object.entries(n).filter((function(e){var n=Object(l.a)(e,2);n[0];return n[1].confirmed>0})).sort((function(e,n){var t=Object(l.a)(e,2),r=(t[0],t[1]),a=Object(l.a)(n,2);a[0];return a[1].confirmed-r.confirmed})).map((function(e,n){var t=Object(l.a)(e,2),r=t[0],o=t[1];return a.a.createElement(m,Object.assign({key:r,name:r},o,{rank:n}))}))):a.a.createElement("div",null,"There is a catastrophic problem!")}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()},4:function(e,n,t){e.exports={data:"Country_data__t6RfA",col:"Country_col__3GbBw",country:"Country_country__218K_"}},8:function(e,n,t){e.exports={countries:"App_countries__1csOJ"}}},[[10,1,2]]]);
//# sourceMappingURL=main.e3c1ea62.chunk.js.map