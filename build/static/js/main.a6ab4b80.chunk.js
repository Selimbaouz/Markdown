(this["webpackJsonpmarkdown-app"]=this["webpackJsonpmarkdown-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=(n(11),n(1)),o=n.n(s),i=n(3),r=n.n(i),c=(n(15),n(4)),l=n(5),u=n(8),d=n(7),h=(n(16),n(6)),m=n.n(h),p='# Titre\n## Sous-Titre \n### Titre plus profond\n \nLes paragraphes sont s\xe9par\xe9s\npar une ligne vide.\n\nLaiss\xe9 deux espaces \xe0 la fin d\'une ligne pour  \naller \xe0 la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~ray\xe9~~.\n\nListe:\n\n  * pommes\n  * oranges\n  * poires\n\nListe num\xe9rot\xe9e:\n\n  1. jambon\n  2. cornichon\n  3. pain\n\n *[S\xe9lim Baouz](https://www.selimbaouz.com)* \n\n Lien automatique : https://www.linkedin.com/in/s%C3%A9lim-baouz-646a53203// \n\n```\n console.log("hello"); \n``` ',g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={text:p},e.handleChange=function(t){var n=t.target.value;e.setState({text:n})},e.renderText=function(e){return{__html:m()(e,{sanitize:!0})}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("text");e?this.setState({text:e}):this.setState({text:p})}},{key:"componentDidUpdate",value:function(){var e=this.state.text;localStorage.setItem("text",e)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("textarea",{onChange:this.handleChange,value:this.state.text,lassName:"form-control",rows:"35",cols:"35"})}),Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("div",{dangerouslySetInnerHTML:this.renderText(this.state.text)})})]})})}}]),n}(s.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),o(e),i(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.a6ab4b80.chunk.js.map