(this.webpackJsonpassignment1=this.webpackJsonpassignment1||[]).push([[0],{22:function(t,e,a){t.exports=a(52)},52:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(16),c=a.n(s),r=(a(6),a(17)),l=a(18),u=a(21),o=a(20),m=a(4),d=a.n(m),p=a(19),h=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).onClickOk=function(){var t=document.getElementById("CityName").value;n.GetWeather(t,n.state.units)},n.state={temp:t.temp||null,description:t.description||null,feels_like:t.feels_like||null,city:t.city||"London",country:t.country||null,units:t.units||"metric",image:t.image},n}return Object(l.a)(a,[{key:"GetWeather",value:function(t,e){var a=this;d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=").concat(e,"&appid=").concat("0aaae74896b719e82dd8d6ff4fbd9cf5")).then((function(t){200===t.status&&(a.setState({temp:t.data.main.temp,city:t.data.name,description:t.data.weather[0].description,feels_like:t.data.main.feels_like,country:p.countries[t.data.sys.country].name}),a.updateBackground())}))}},{key:"componentDidMount",value:function(){this.GetWeather(this.state.city,this.state.units)}},{key:"updateBackground",value:function(){var t=this;d.a.get("https://api.unsplash.com/search/photos?query=".concat(this.state.city,"&client_id=").concat("c1kJX1fiQkVdCMLfBsmg5Jniqe06Xltsn__Zrmfz6VM","&per_page=1")).then((function(e){200===e.status&&e.data.total>0&&t.setState({image:e.data.results[0].urls.regular})}))}},{key:"getUnitText",value:function(){return"metric"===this.state.units?"\xb0C":"\xb0F"}},{key:"render",value:function(){var t=this;document.body.style.backgroundImage="linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("+this.state.image+")";var e="".concat(this.state.city,", ").concat(this.state.country),a="".concat(this.state.temp," ").concat(this.getUnitText()),n=this.state.feels_like?"feels like: ".concat(this.state.feels_like," ").concat(this.getUnitText()):null,s=this.state.description?"".concat(this.state.description," "):null;return i.a.createElement("div",{className:"Weather"},i.a.createElement("div",{className:"weatherForm"},i.a.createElement("input",{id:"CityName",autoFocus:!0,placeholder:"Enter city name",onKeyPress:function(e){13===e.which&&t.onClickOk()}}),i.a.createElement("input",{id:"myBtn",className:"submit",type:"submit",value:"Send",onClick:this.onClickOk})),i.a.createElement("div",{className:"weatherResults"},i.a.createElement("p",null,e),i.a.createElement("p",{className:"tempText"},a),i.a.createElement("p",{className:"descreptionText"},s),i.a.createElement("p",null,n)))}}]),a}(i.a.Component);var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null))};c.a.render(i.a.createElement(f,null),document.getElementById("root"))},6:function(t,e,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.f4886da0.chunk.js.map