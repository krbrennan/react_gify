(this.webpackJsonpgiphy=this.webpackJsonpgiphy||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=(n(16),n(2),n(3)),s=n(4),l=n(1),u=n(7),h=n(6),d=n(5),f=n.n(d),m=(n(22),function(e){var t=e;return r.a.createElement("div",{className:"gifDiv tc dib br2 pa2 ma2 grow bw2 shadow-5"},r.a.createElement("iframe",{className:"iframeEle",src:t.embed_url,key:t.id}))}),g=function(e){return r.a.createElement("div",{className:"tc"},e.cards.map((function(e,t){return r.a.createElement(m,{key:e.id,embed_url:e.embed_url})})))},p=(n(23),function(){return r.a.createElement("div",{className:"headerBar"},r.a.createElement("h1",{className:"headerTitle tc"},"GifExplorer"))}),v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"75vh"}},e.children,";")},b=(n(24),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(l.a)(a)),a.submitHandler=a.submitHandler.bind(Object(l.a)(a)),a.state={input:""},a}return Object(s.a)(n,[{key:"submitHandler",value:function(e){e.preventDefault(),this.props.handlerFromParent(this.state.input)}},{key:"handleChange",value:function(e){this.setState({input:e.target.value}),e.preventDefault(),e.persist()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler,className:"tc center pv3"},r.a.createElement("input",{type:"text",id:"theInput",placeholder:"Search Gifs!",className:"center tc input-reset ba b--black-20 pa3 mb2 db w-80",onChange:this.handleChange}))}}]),n}(a.Component)),w=function(e){var t=null;return t=""===e.current?"Trending":e.current,r.a.createElement("div",null,r.a.createElement("p",{className:"f1 fw9 ph3 pv3"},t.toUpperCase()))},y=(n(25),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handler=a.handler.bind(Object(l.a)(a)),a.state={gifs:[],searchField:"",searched:!1},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!1===this.state.searched){f.a.get("https://api.giphy.com/v1/gifs/trending?api_key=21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF&limit=12&rating=R",(function(t,n){e.setState({gifs:n.body.data})})).withCredentials()}}},{key:"handler",value:function(e){var t=this;this.setState({searchField:e,searched:!0});var n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF&limit=69&rating=R");f.a.get(n,(function(e,n){t.setState({gifs:n.body.data})})).withCredentials(),this.setState({searched:!1})}},{key:"render",value:function(){return 0===this.state.gifs.length?null:r.a.createElement("div",{className:"view"},r.a.createElement(p,null),r.a.createElement(b,{handlerFromParent:this.handler}),r.a.createElement(w,{current:this.state.searchField}),r.a.createElement(v,null,r.a.createElement(g,{cards:this.state.gifs})))}}]),n}(a.Component)),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react_gify",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react_gify","/service-worker.js");k?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):E(e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.869107b4.chunk.js.map