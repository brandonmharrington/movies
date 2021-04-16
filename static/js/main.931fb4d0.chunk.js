(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),n=c.n(s),a=c(17),r=c.n(a),o=(c(24),c(7)),j=c(2),l=(c(25),c(8)),b=c(11),d="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",m="b41008e2526f895c94e3f59374123262",h="https://image.tmdb.org/t/p/w1280",u="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80",v="https://api.themoviedb.org/3/movie/",O=function(e){var t,c=e.title,s=e.vote_average,n=e.overview,a=e.poster_path,r=e.id;return Object(i.jsx)("div",{className:"movie",children:Object(i.jsxs)(o.b,{to:"movie/".concat(r),className:"link",children:[Object(i.jsx)("img",{src:a?"".concat(h).concat(a):"".concat(u),alt:c}),Object(i.jsxs)("div",{className:"movie-info",children:[Object(i.jsx)("h3",{children:c}),Object(i.jsx)("span",{className:"tag ".concat((t=s,t>=8?"green":t>=6?"orange":"red")),children:s})]}),Object(i.jsxs)("div",{className:"movie-over",children:[Object(i.jsx)("h2",{children:"Overview:"}),Object(i.jsx)("p",{children:n})]})]})})},x=function(e){var t=e.movies,c=Object(s.useState)([]),n=Object(l.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("".concat(d,"&api_key=").concat(m)).then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[]),Object(i.jsx)(i.Fragment,{children:t?Object(i.jsx)("div",{className:"movie-container",children:t.map((function(e){return Object(i.jsx)(O,Object(b.a)({},e),e.id)}))}):Object(i.jsx)("div",{className:"movie-container",children:a.map((function(e){return Object(i.jsx)(O,Object(b.a)({},e),e.id)}))})})},f=function(e){var t=e.searchchange,c=e.searchsubmit,s=e.searchinput;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{children:Object(i.jsx)("form",{onSubmit:c,children:Object(i.jsx)("input",{className:"search",value:s,type:"search",placeholder:"Search...",onChange:t})})})})},p=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(l.a)(a,2),o=r[0],j=r[1];Object(s.useEffect)((function(){b("".concat(d,"&api_key=").concat(m))}),[]);var b=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e.results)}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{searchchange:function(e){j(e.target.value)},searchsubmit:function(e){e.preventDefault(),b("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(m,"&query=").concat(o)),j("")},searchinput:o}),Object(i.jsx)(x,{movies:c})]})};var g=function(){return Object(i.jsx)("div",{className:"back",children:Object(i.jsx)(o.b,{to:"/",className:"link",children:Object(i.jsxs)("button",{children:[Object(i.jsx)("i",{className:"fas fa-arrow-circle-left"}),"Back"]})})})},N=function(e){var t=e.title,c=e.release_date,s=e.poster_path,n=e.id;return Object(i.jsx)("div",{className:"similar-movie",children:Object(i.jsxs)(o.b,{to:"".concat(n),className:"link",children:[Object(i.jsx)("img",{src:s?"".concat(h).concat(s):"".concat(u),alt:t}),Object(i.jsxs)("div",{className:"similar-movie-info",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("h6",{children:null===c||void 0===c?void 0:c.slice(0,4)})]})]})})},_=function(e){var t=e.movieId,c=Object(s.useState)([]),n=Object(l.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("".concat(v).concat(t,"/similar?api_key=").concat(m)).then((function(e){return e.json()})).then((function(e){return r(e.results.slice(0,8))}))}),[t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"similar-movie-title",children:"Similar Movies"}),Object(i.jsx)("div",{className:"similar-movies",children:null===a||void 0===a?void 0:a.map((function(e){return Object(i.jsx)(N,Object(b.a)({},e),e.id)}))})]})},k=function(){var e,t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(j.f)().movieId,o="https://imdb.com/title/".concat(n.imdb_id);return Object(s.useEffect)((function(){fetch("".concat(v).concat(r,"?api_key=").concat(m)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[r]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{}),Object(i.jsxs)("div",{className:"movie-details",children:[Object(i.jsx)("img",{src:n.poster_path?"".concat(h).concat(n.poster_path):"".concat(u),alt:n.title}),Object(i.jsxs)("div",{className:"movie-text",children:[Object(i.jsx)("h1",{className:"movie-text-title",children:n.title}),Object(i.jsx)("p",{className:"movie-text-release",children:null===(e=n.release_date)||void 0===e?void 0:e.slice(0,4)}),Object(i.jsxs)("p",{className:"movie-text-runtime",children:["Runtime: ",n.runtime," minutes"]}),Object(i.jsxs)("p",{className:"movie-text-rating",children:["Average Rating: ",n.vote_average,"/10"]}),Object(i.jsx)("a",{className:"movie-text-imdb",href:o,target:"_blank",rel:"noreferrer",children:"IMDb"}),Object(i.jsxs)("div",{className:"movie-text-description",children:[Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:"Description"})}),Object(i.jsx)("p",{children:n.overview})]}),Object(i.jsx)("a",{href:n.homepage,target:"_blank",rel:"noreferrer",children:"More details..."})]})]}),Object(i.jsx)("div",{className:"similar-movies",children:Object(i.jsx)(_,{movieId:r})})]})},w=c.p+"static/media/tmdb_logo.de1a664e.svg",y=function(){return Object(i.jsxs)(o.a,{children:[Object(i.jsx)("div",{className:"movie-container",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(i.jsx)(j.a,{exact:!0,path:"/movie/:movieId",component:k})]})}),Object(i.jsxs)("footer",{children:["This product uses the TMDb API but is not endorsed or certified by TMDb.",Object(i.jsx)("img",{src:w,className:"logo",alt:"tmdb logo"})]})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.931fb4d0.chunk.js.map