(this["webpackJsonpmeteo-app"]=this["webpackJsonpmeteo-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(4),i=a.n(n),s=(a(15),a(16),a(2)),o=a(10),d=a(3),l={currentWeather:null,forecast:null,city:null};var _=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"api/putWeatherInState":return Object(d.a)(Object(d.a)({},e),{},{currentWeather:t.payload});case"api/putForeCastInState":return Object(d.a)(Object(d.a)({},e),{},{forecast:t.payload});case"api/putCityInState":return Object(d.a)(Object(d.a)({},e),{},{city:t.payload});default:return e}}));console.log("Initial state: ",_.getState());var u=_,f=(a(8),[{label:"Clouds",icon:"fas fa-cloud",color:"grey"},{label:"Rain",icon:"fas fa-cloud-rain",color:"blue"},{label:"Clear",icon:"fas fa-sun",color:"yellow"}]),j="fas fa-thermometer-three-quarters",m="fas fa-wind",h=a(0),b=function(){var e=Object(s.c)((function(e){return e.currentWeather}));if(null!=e){console.log(e.weather[0].main),console.log(f.filter((function(t){return t.label===e.weather[0].main}))[0].icon);var t=f.filter((function(t){return t.label===e.weather[0].main}))[0].icon,a=f.filter((function(t){return t.label===e.weather[0].main}))[0].label;return Object(h.jsxs)("div",{className:"forecast__card forecast__card--current",children:[Object(h.jsxs)("div",{className:"forecast__card__time-weather",children:[Object(h.jsx)("div",{className:"forecast__card__time-weather__time",children:"Actuellement..."}),Object(h.jsx)("i",{className:t+" forecast__card__time-weather__icon forecast__card__time-weather__icon--"+a+" forecast__card__time-weather__icon--big"})]}),Object(h.jsx)("div",{className:"forecast__card__city",children:e.name}),Object(h.jsxs)("div",{className:"forecast__card__parameters-container",children:[Object(h.jsxs)("div",{className:"forecast__card__temp",children:[Object(h.jsx)("i",{className:j+" forecast__card__temp__icon"}),Object(h.jsx)("div",{className:"forecast__card__temp__value",children:Math.round(e.main.temp)})]}),Object(h.jsxs)("div",{className:"forecast__card__wind",children:[Object(h.jsx)("i",{className:m+" forecast__card__wind__icon"}),Object(h.jsx)("div",{className:"forecast__card__wind__value",children:Math.round(e.wind.speed)+" - "+Math.round(e.wind.gust)})]}),Object(h.jsxs)("div",{className:"forecast__card__wind-direction",children:[Object(h.jsx)("i",{className:"far fa-compass forecast__card__wind-direction__icon"}),Object(h.jsx)("div",{className:"forecast__card__wind-direction__value",children:e.wind.deg})]})]})]})}return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:e})})},p=function(e){var t=new Date(1e3*e.forecast.dt).toLocaleTimeString("fr-FR").substring(0,5),a=f.filter((function(t){return t.label===e.forecast.weather[0].main}))[0].icon,c=f.filter((function(t){return t.label===e.forecast.weather[0].main}))[0].label;return Object(h.jsxs)("div",{className:"forecast__card",children:[Object(h.jsxs)("div",{className:"forecast__card__time-weather",children:[Object(h.jsx)("div",{className:"forecast__card__time-weather__time",children:t}),Object(h.jsx)("i",{className:a+" forecast__card__time-weather__icon forecast__card__time-weather__icon--"+c})]}),Object(h.jsxs)("div",{className:"forecast__card__temp",children:[Object(h.jsx)("i",{className:j+" forecast__card__temp__icon"}),Object(h.jsx)("div",{className:"forecast__card__temp__value",children:Math.round(e.forecast.main.temp)})]}),Object(h.jsxs)("div",{className:"forecast__card__wind",children:[Object(h.jsx)("i",{className:m+" forecast__card__wind__icon"}),Object(h.jsx)("div",{className:"forecast__card__wind__value",children:Math.round(e.forecast.wind.speed)+" - "+Math.round(e.forecast.wind.gust)})]}),Object(h.jsxs)("div",{className:"forecast__card__wind-direction",children:[Object(h.jsx)("i",{className:"far fa-compass forecast__card__wind-direction__icon"}),Object(h.jsx)("div",{className:"forecast__card__wind-direction__value",children:e.forecast.wind.deg})]})]})},v=function(e){var t=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"][new Date(e).getDay()-1],a=new Date(e).getDate(),c=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Aout","septembre","octobre","novembre","d\xe9cembre"][new Date(e).getMonth()];return console.log(t+a+c),t+" "+a+" "+c},O=function(){var e=Object(s.c)((function(e){return e.forecast}));if(null!==e){var t=function(e){var t=e.list.map((function(e){return new Date(1e3*e.dt).toLocaleDateString("en-US")})).filter((function(e,t,a){return a.indexOf(e)===t})),a=[];return t.map((function(t){var c=[];e.list.map((function(e){new Date(1e3*e.dt).toLocaleDateString("en-US")===t&&c.push(e)})),a.push({date:t,data:c})})),a}(e),a=t.map((function(e){var t=e.data.map((function(e){return Object(h.jsx)(p,{forecast:e})}));return console.log(e.date),Object(h.jsxs)("div",{className:"forecast__day-container",children:[Object(h.jsx)("div",{className:"forecast__day-container__date",children:v(new Date(e.date))}),Object(h.jsx)("div",{className:"forecast__day-forecasts",children:t})]})}));return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"forecast__cards-container",children:a})})}return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:e})})},x=a(9),w=(a(22),function(){var e=Object(s.b)(),t=r.a.useState(""),a=Object(x.a)(t,2),c=a[0],n=a[1];return Object(h.jsxs)("form",{className:"city-search-form",onSubmit:function(t){t.preventDefault(),c&&e({type:"api/putCityInState",payload:c})},children:[Object(h.jsx)("input",{placeholder:"Rechercher une ville",name:"city",value:c,type:"text",onChange:function(e){n(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Go!"})]})}),N=(a(23),function(e,t){var a=Object(s.b)();fetch("https://api.openweathermap.org/data/2.5/"+t+"?q="+e+"&units=metric&appid=c246844ea31d730273416243a59e9e2e").then((function(e){return e.json()})).then((function(e){console.log(e);var c=e;"404"!=c.cod?"weather"==t?a({type:"api/putWeatherInState",payload:c}):"forecast"==t&&a({type:"api/putForeCastInState",payload:c}):"weather"==t?a({type:"api/putWeatherInState",payload:null}):"forecast"==t&&a({type:"api/putForeCastInState",payload:null})}))});var g=function(){var e=Object(s.c)((function(e){return e.city}));return N(e,"weather"),N(e,"forecast"),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"search-and-result",children:[Object(h.jsx)(w,{}),Object(h.jsx)(b,{})]}),Object(h.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),r(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:u,children:Object(h.jsx)(g,{})})}),document.getElementById("root")),y()},8:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.cc5cc6ff.chunk.js.map