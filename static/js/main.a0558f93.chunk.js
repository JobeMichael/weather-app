(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,n,t){e.exports=t.p+"static/media/bg.f1ddd84e.png"},28:function(e,n,t){e.exports=t(56)},33:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(20),i=t.n(l),c=(t(33),t(4)),o=t(7),u=t.n(o),d=t(21),s=t(22),p=t.n(s),f=function(e){var n=Object(a.useState)(null),t=Object(c.a)(n,2),r=t[0],l=t[1],i=Object(a.useState)(null),o=Object(c.a)(i,2),s=o[0],f=o[1],m=Object(a.useState)(!1),x=Object(c.a)(m,2),h=x[0],g=x[1];return Object(a.useEffect)((function(){(function(){var n=Object(d.a)(u.a.mark((function n(){var t,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,p.a.get(e);case 4:t=n.sent,a=t.data,l(a),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),f(n.t0);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}})()()}),[e]),{data:r,error:s,loading:h}},m=t(5),x=t.n(m),h=function(e,n){var t=Object.keys(n).map((function(e){return e+"="+n[e]})).join("&");return"".concat("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5","/").concat(e,"/?appid=").concat("3163660e55591e48bebbd91b01176891","&units=metric&").concat(t)},g=t(1),b=t(2);function v(){var e=Object(g.a)(["\n  font-size: 16px;\n  color: #1377d0;\n  font-weight: bold;\n"]);return v=function(){return e},e}function E(){var e=Object(g.a)(["\n  font-size: 16px;\n  color: #1377d0;\n  font-weight: bold;\n  margin-bottom: 15px;\n"]);return E=function(){return e},e}function w(){var e=Object(g.a)(["\n  margin: 30px 0;\n  background: #7dd1e3;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 5px 10px 18px #0d5475;\n"]);return w=function(){return e},e}var j=b.a.div(w()),y=b.a.span(E()),O=b.a.span(v()),k=function(e){var n,t=e.isRaining,a=e.windSpeed,l=a.speed,i=a.date;return r.a.createElement(j,null,r.a.createElement(y,null,t?"\ud83c\udf27\ufe0f It will rain today. Carry an umbrella for goodness sake! \ud83c\udf27\ufe0f":"\u2600\ufe0f No rain today. Great day for a run \u2600\ufe0f"),r.a.createElement(O,null,"\ud83d\udca8 Wind forecast : ".concat((n=l,[{text:"Calm",speed:.5},{text:"Light Air",speed:1.5},{text:"Light Breeze",speed:3.3},{text:"Gentle Breeze",speed:5.5},{text:"Moderate Breeze",speed:7.9},{text:"Fresh breeze",speed:10.7},{text:"Strong Breeze",speed:13.8},{text:"Gale",speed:17.1},{text:"Storm",speed:24.4},{text:"Violent storm",speed:32.6},{text:"Hurricaine force",speed:32.7}].find((function(e){return e.speed>=n})).text)," on ").concat(x()(i).format("dddd")," \ud83d\udca8")))};function M(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return M=function(){return e},e}function z(){var e=Object(g.a)(["\n  h3 {\n    font-size: 26px;\n  }\n  h4 {\n    margin-bottom: 20px;\n  }\n"]);return z=function(){return e},e}var S=b.a.div(z()),F=b.a.div(M()),_=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"4x";return"http://openweathermap.org/img/wn/".concat(e,"@").concat(n,".png")};function L(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  h4 {\n    font-size: 40px;\n  }\n"]);return L=function(){return e},e}function B(){var e=Object(g.a)(["\n  flex-shrink: 0;\n  flex-basis: 25%;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n  text-align: center;\n  p {\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    flex-basis: 100%;\n    padding: 30px 0;\n    margin-bottom: 20px;\n  }\n"]);return B=function(){return e},e}var D=b.a.div(B()),W=b.a.div(L()),H=function(e){var n=e.data,t=Object(c.a)(n.weather,1)[0],a=t.description,l=t.icon,i=n.main,o=i.temp,u=i.feels_like,d=i.temp_min,s=i.temp_max,p=n.dt_txt;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement("p",null,x()(p).format("dddd")),r.a.createElement("p",null,x()(p).format("MMMM D, h:mm")),r.a.createElement(W,null,r.a.createElement("img",{src:_(l,"2x"),alt:"weather-icon"}),r.a.createElement("h4",null,Math.floor(o),"\xb0"),r.a.createElement("span",null,"".concat(Math.floor(s),"\xb0 / ").concat(Math.floor(d),"\xb0"))),r.a.createElement("h4",null,"Feels like ",Math.floor(u),"\xb0"),r.a.createElement("p",null,a)))},Y=!1,A={speed:0},C=function(e){var n=e.position,t=Object(a.useState)(),l=Object(c.a)(t,2),i=l[0],o=l[1],u=h("forecast",n),d=f(u),s=d.data,p=d.loading,m=d.error,g=Object(a.useCallback)((function(){if(s){console.log(s);var e=x()().add(3,"days");return Y="Rain"===s.list[0].weather[0].main,s.list.reduce((function(n,t){var a=t.dt_txt,r=x()(a),l=t.wind.speed;return r.diff(e,"days",!0)<0&&(l>A.speed&&(A.speed=l,A.date=a),a.includes("12:00:00")&&n.push(t)),n}),[])}}),[s]);return Object(a.useEffect)((function(){o(g())}),[s,g]),m?r.a.createElement("h1",null,"Error..."):p||!s?r.a.createElement("h1",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement("h3",null,"Forecast"),r.a.createElement(k,{isRaining:Y,windSpeed:A}),r.a.createElement("h4",null,"Next 3 days"),r.a.createElement(F,null,i.map((function(e){return r.a.createElement(H,{key:e.dt,data:e})})))))},G=t(26),R=t.n(G);function T(){var e=Object(g.a)(["\n  margin: 0 auto;\n  max-width: 1020px;\n  width: 100%;\n"]);return T=function(){return e},e}function I(){var e=Object(g.a)(["\n  background-image: url(",");\n  background-position: center;\n  display: flex;\n  min-height: 100vh;\n  color: #fff;\n  padding: 30px;\n  flex-direction: column;\n"]);return I=function(){return e},e}var J=b.a.div(I(),R.a),N=b.a.div(T()),V=function(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,r.a.createElement(N,null,n)))},$=function(e){return new Date(1e3*e).toLocaleTimeString().slice(0,5)};function q(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  h3 {\n    font-size: 70px;\n  }\n  h4 {\n    font-size: 30px;\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n"]);return q=function(){return e},e}function K(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  background-color: rgba(255, 255, 255, 0.2);\n  align-self: flex-start;\n  padding: 10px 0px;\n  margin: 20px 0px;\n  border-radius: 10px;\n  @media (max-width: 768px) {\n    flex-basis: 100%;\n  }\n"]);return K=function(){return e},e}function P(){var e=Object(g.a)(["\n  flex-basis: 100%;\n  margin-bottom: 30px;\n  h2 {\n    color: rgb(255, 255, 255);\n    display: block;\n    font-weight: 600;\n    font-size: 30px;\n    text-align: center;\n    padding: 5px 0px;\n  }\n  h4 {\n    color: rgb(255, 255, 255);\n    display: block;\n    font-weight: 400;\n    font-size: 15px;\n    text-align: center;\n    padding: 5px 0px;\n  }\n"]);return P=function(){return e},e}function Q(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 30px 0;\n"]);return Q=function(){return e},e}var U=b.a.div(Q()),X=b.a.div(P()),Z=b.a.div(K()),ee=b.a.div(q());function ne(){var e=Object(g.a)(["\n  flex-basis: calc(100% / 3);\n  padding: 20px 0;\n\n  h4 {\n    font-size: 23px;\n    font-weight: bold;\n    color: rgb(255, 255, 255);\n    display: block;\n    font-weight: 400;\n    text-align: center;\n    padding: 5px 0px;\n  }\n  span {\n    color: rgb(255, 255, 255);\n    display: block;\n    font-weight: bold;\n    font-size: 17px;\n    text-align: center;\n  }\n"]);return ne=function(){return e},e}var te=b.a.div(ne()),ae=function(e){var n=e.value,t=e.title;return r.a.createElement(te,null,r.a.createElement("h4",null,n),r.a.createElement("span",null,t))},re=function(e){var n=e.position,t=h("weather",n),a=f(t),l=a.data,i=a.loading;if(a.error)return r.a.createElement("h1",null,"Error...");if(i||!l)return r.a.createElement("h3",null,"Loading");var o=Object(c.a)(l.weather,1)[0],u=o.description,d=o.icon,s=l.main,p=s.temp,m=s.feels_like,g=s.temp_min,b=s.temp_max,v=s.humidity,E=l.wind.speed,w=l.sys,j=w.country,y=w.sunrise,O=w.sunset,k=l.name;return r.a.createElement(U,null,r.a.createElement(X,null,r.a.createElement("h2",null,k,", ",j),r.a.createElement("h4",null,x()(new Date).format("dddd D, MMMM YYYY"))),r.a.createElement(ee,null,r.a.createElement("div",null,r.a.createElement("img",{src:_(d),alt:"weather-icon"})),r.a.createElement("div",null,r.a.createElement("h3",null,Math.floor(p),"\xb0"),r.a.createElement("p",null,"Feels like ",Math.floor(m),"\xb0"),r.a.createElement("h4",null,u))),r.a.createElement(Z,null,r.a.createElement(ae,{value:"".concat(Math.floor(b),"\xb0"),title:"Hight"}),r.a.createElement(ae,{value:"".concat(E,"mph"),title:"Wind"}),r.a.createElement(ae,{value:$(y),title:"Sunrise"}),r.a.createElement(ae,{value:"".concat(Math.floor(g),"\xb0"),title:"Low"}),r.a.createElement(ae,{value:"".concat(v,"%"),title:"Humidity"}),r.a.createElement(ae,{value:$(O),title:"Sunset"})))},le=t(27),ie=Object(le.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})((function(e){var n=e.coords,t=Object(a.useState)({lat:0,lon:0}),l=Object(c.a)(t,2),i=l[0],o=l[1];return Object(a.useEffect)((function(){n&&o({lat:n.latitude,lon:n.longitude})}),[n]),r.a.createElement(V,null,i.lat>0||i.lon>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{position:i}),r.a.createElement(C,{position:i})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Wait for a second, let me process it..."),r.a.createElement("h3",null,"\ud83d\udc81Turn On Location Services to Allow, if you haven't done yet!")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a0558f93.chunk.js.map