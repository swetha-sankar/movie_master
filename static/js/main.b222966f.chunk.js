(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{132:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(21),r=c.n(a),i=c(94),o=c(39),l=(c(116),c(136)),j=c(140),h=c(65),b=c(141),d=c(139),u=c(47),O=c(135),x=c(35),m=c(138),p=c(7),f=function(e){var t=e.Title,c=e.Poster,n=e.ShowDetail,s=e.DetailRequest,a=e.ActivateModal,r=e.imdbID,i=O.a.Meta,o=Object(p.jsx)("img",{src:"N/A"===c?"http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png":c,alt:t,width:250,height:250});return Object(p.jsx)(x.a,{style:{margin:"5px 0"},className:"gutter-row",span:5,children:Object(p.jsx)("div",{className:"site-card-wrapper",style:{margin:"5px"},children:Object(p.jsx)(O.a,{style:{width:"85%",textAlign:"center",textOverflow:"ellipsis"},bordered:!1,cover:o,onClick:function(){return a(!0),s(!0),void fetch("https://www.omdbapi.com/?i=".concat(r,"&apikey=").concat("ec772db4")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){s(!1),n(e)})).catch((function(e){e.message,s(!1)}))},children:Object(p.jsx)(i,{avatar:Object(p.jsx)(m.a,{size:9}),title:t})})})})},g=c(137).a.Search,v=function(e){var t=e.searchHandler;return Object(p.jsx)(h.a,{children:Object(p.jsx)(x.a,{span:12,offset:6,children:Object(p.jsx)(g,{placeholder:"Enter movie title",enterButton:"Search!",size:"large",allowClear:!0,onSearch:function(e){return t(e)}})})})},w=c(142),S=function(e){var t=e.Title,c=e.Poster,n=e.Language,s=e.imdbRating,a=e.Runtime,r=e.Genre,i=e.Plot,o=e.Released,l=e.Director,j="error",b="#f50";return parseInt(s)>=7?(j="success",b="#87d068"):parseInt(s)>=5&&(j="warning",b="gold-inverse"),Object(p.jsxs)(h.a,{children:[Object(p.jsxs)(x.a,{span:13,children:[Object(p.jsx)(h.a,{children:Object(p.jsx)(x.a,{span:25,children:Object(p.jsx)("div",{className:"title is-3",children:Object(p.jsx)("div",{className:"content is-centered",children:t})})})}),Object(p.jsx)(h.a,{style:{marginTop:"25px",marginBottom:"10px"},children:Object(p.jsxs)(x.a,{children:[Object(p.jsxs)(w.a,{color:j,children:["  ","IMDb Rating: "+s]}),Object(p.jsxs)(w.a,{color:b,children:[" ","Release Date: "+o]}),Object(p.jsxs)(w.a,{color:b,children:["Runtime: "+a," "]}),Object(p.jsx)(w.a,{color:b,children:"Genre(s): "+r}),Object(p.jsxs)(w.a,{color:b,children:[" ","Director(s): "+l]}),Object(p.jsxs)(w.a,{color:b,children:[" ","Language(s): "+n]})]})}),Object(p.jsx)(h.a,{children:Object(p.jsx)(x.a,{children:Object(p.jsxs)("div",{className:"subtitle is-6",children:[" ",i," "]})})})]}),Object(p.jsx)(x.a,{children:Object(p.jsx)("div",{className:"content is-centered",children:Object(p.jsx)("img",{src:"N/A"===c?"http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png":c,alt:t,width:250,height:250})})})]})},y=c(134),N=function(){return Object(p.jsx)("div",{style:{margin:"20px 0",textAlign:"center"},children:Object(p.jsx)(y.a,{size:"large"})})},k="ec772db4";var D=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(o.a)(a,2),O=r[0],x=r[1],m=Object(n.useState)(!1),g=Object(o.a)(m,2),w=g[0],y=g[1],D=Object(n.useState)("good"),I=Object(o.a)(D,2),R=I[0],C=I[1],M=Object(n.useState)(!1),A=Object(o.a)(M,2),E=A[0],F=A[1],T=Object(n.useState)(!1),P=Object(o.a)(T,2),z=P[0],B=P[1],L=Object(n.useState)(0),G=Object(o.a)(L,2),H=G[0],J=G[1],q=Object(n.useState)(!1),Q=Object(o.a)(q,2),_=Q[0],K=Q[1],U=Object(n.useState)(1),V=Object(o.a)(U,2),W=V[0],X=V[1];return Object(n.useEffect)((function(){y(!0),x(null),s(null),J(0),X(1),fetch("https://www.omdbapi.com/?s=".concat(R,"&page=").concat(W,'&type="movie"&apikey=').concat(k)).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){"False"===e.Response?"Incorrect IMDb ID."!==e.Error&&(x(e.Error),y(!1)):(J(e.totalResults),s(e.Search)),y(!1)})).catch((function(e){var t=e.message;x(t),y(!1)}))}),[R]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(j.a,{className:"layout",children:[Object(p.jsx)("div",{className:"title is-1 has-text-black-bis is-spaced is-focused",children:Object(p.jsx)("div",{className:"content has-text-centered",children:Object(p.jsx)("p",{children:"Movie Searcher"})})}),Object(p.jsx)("div",{className:"subtitle is-5 has-text-black-bis",children:Object(p.jsx)("div",{className:"content has-text-centered",children:Object(p.jsx)("p",{children:"Search for a title, and click on the movie posters below for more details!"})})}),Object(p.jsx)(v,{searchHandler:C}),Object(p.jsx)("br",{}),Object(p.jsx)("section",{className:"content has-text-centered",children:Object(p.jsx)(l.a,{defaultCurrent:1,onChange:function(e){l.a,fetch("https://www.omdbapi.com/?s=".concat(R,"&page=").concat(e,'&type="movie"&apikey=').concat(k)).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){"False"===e.Response?"Incorrect IMDb ID."!==e.Error&&(x(e.Error),y(!1)):s(e.Search),y(!1)})).catch((function(e){var t=e.message;x(t),y(!1)}))},showSizeChanger:!1,showQuickJumper:!0,total:H,showTotal:function(e,t){return t[0]<0&&(t[0]=0),0!==e&&0===t[1]&&(e<10?(t[0]=1,t[1]=e):(t[0]=1,t[1]=10)),"".concat(t[0],"-").concat(t[1]," of ").concat(e)}})}),Object(p.jsxs)(h.a,{gutter:25,type:"flex",justify:"center",children:[null!==O&&Object(p.jsx)("div",{style:{margin:"20px 0"},children:Object(p.jsx)(b.a,{message:O,type:"error"})}),!0===w&&Object(p.jsx)(N,{}),null!==c&&c.length>0&&c.map((function(e,t){return Object(p.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{ShowDetail:B,DetailRequest:K,ActivateModal:F}),t)}))]}),Object(p.jsx)(d.a,{centered:!0,footer:[Object(p.jsx)(u.a,{onClick:function(){return F(!1)},children:"Return"},"back")],onCancel:function(){return F(!1)},width:600,visible:E,children:!1===_?Object(p.jsx)(S,Object(i.a)({},z)):Object(p.jsx)(N,{})}),Object(p.jsx)("div",{className:"footer",children:Object(p.jsxs)("div",{className:"content has-text-centered",children:[Object(p.jsx)("strong",{children:"Movie Searcher "})," by Swetha Sankar (",Object(p.jsx)("a",{href:"https://github.com/swetha-sankar/movie_master",children:"GitHub"}),") 2021"]})})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,143)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(131);r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),I()}},[[132,1,2]]]);
//# sourceMappingURL=main.b222966f.chunk.js.map