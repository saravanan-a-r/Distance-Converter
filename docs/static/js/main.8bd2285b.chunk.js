(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(5),u=n.n(c),o=(n(12),n.p,n(13),n(2)),s=n(3),r=n(7),l=n(6),d=(n(14),function(){function e(){Object(o.a)(this,e),this.distanceRank={mm:1,cm:10,m:100,km:1e3},this.distanceFractor=[1,10,100,1e3]}return Object(s.a)(e,[{key:"convert",value:function(e,t,n,a){var i=this.distanceRank,c=!1;if(!t){c=!0;var u=e;t=a,e=n,a=void 0,n=u}var o=i[e],s=i[n],r=this.calculateConvertionFactor(o,s);return a=o<s?t/r:t*r,c?(c=!1,{source_value:a,destination_value:t}):{source_value:t,destination_value:a}}},{key:"calculateConvertionFactor",value:function(e,t){var n=this.distanceFractor,a=1,i=n.indexOf(e),c=n.indexOf(t);if(i<0||c<0)return a;if(i>c){var u=i;i=c,c=u}for(var o=i+1;o<=c;o++)a*=n[o];return a}}]),e}()),v=n(0),h=new d,j=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={source:"m",source_value:0,destination:"km",destination_value:0},e}return Object(s.a)(n,[{key:"handleSourceSelection",value:function(e){var t=this;this.setState({source:e.target.value}),setTimeout((function(){t.handleSourceInput({target:document.getElementById("source-input")})}),0)}},{key:"handleDestSelection",value:function(e){this.setState({destination:e.target.value}),this.handleDestInput({target:document.getElementById("destination-input")})}},{key:"handleSourceInput",value:function(e){var t=h.convert(this.state.source,e.target.value,this.state.destination,void 0);this.setState({source_value:t.source_value,destination_value:t.destination_value})}},{key:"handleDestInput",value:function(e){var t=h.convert(this.state.source,void 0,this.state.destination,e.target.value);this.setState({source_value:t.source_value,destination_value:t.destination_value})}},{key:"handleFocus",value:function(e){e.target.value&&"0"!==e.target.value||(e.target.value=void 0)}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(i.a.Fragment,{children:[Object(v.jsxs)("div",{id:"source",children:[Object(v.jsxs)("select",{name:"distance",className:"distance",value:this.state.source,onChange:function(t){return e.handleSourceSelection(t)},children:[Object(v.jsx)("option",{value:"mm",children:"Millimeter"}),Object(v.jsx)("option",{value:"cm",children:"Centimeter"}),Object(v.jsx)("option",{value:"m",children:"Meter"}),Object(v.jsx)("option",{value:"km",children:"Kilometer"})]}),Object(v.jsx)("input",{id:"source-input",type:"number",placeholder:"Enter value",onChange:function(t){return e.handleSourceInput(t)},value:this.state.source_value,onFocus:function(t){e.handleFocus(t)}})]}),Object(v.jsxs)("div",{id:"destination",children:[Object(v.jsxs)("select",{name:"distance",className:"distance",value:this.state.destination,onChange:function(t){e.handleDestSelection(t)},children:[Object(v.jsx)("option",{value:"mm",children:"Millimeter"}),Object(v.jsx)("option",{value:"cm",children:"Centimeter"}),Object(v.jsx)("option",{value:"m",children:"Meter"}),Object(v.jsx)("option",{value:"km",children:"Kilometer"})]}),Object(v.jsx)("input",{id:"destination-input",type:"number",placeholder:"Enter value",onChange:function(t){return e.handleDestInput(t)},value:this.state.destination_value,onFocus:function(t){e.handleFocus(t)}})]})]})}}]),n}(i.a.Component);var m=function(){return Object(v.jsx)(j,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),i(e),c(e),u(e)}))};u.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.8bd2285b.chunk.js.map