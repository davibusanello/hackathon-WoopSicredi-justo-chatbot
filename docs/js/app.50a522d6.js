(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],a[i]&&m.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},i={app:0},a={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d688836","chunk-0be4":"d3aaea24"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0be4":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0be4":"d48bc90d"}[t]+".css",i=c.p+s,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=a[o],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===s||l===i))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],l=r.getAttribute("data-href");if(l===s||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");a.request=s,n(a)},m.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){i[t]=0}));var s=a[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,n){s=a[t]=[e,n]});e.push(s[2]=o);var l,u=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=r(t),l=function(e){m.onerror=m.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");o.type=s,o.request=i,n[1](o)}a[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:m})},12e4);m.onerror=m.onload=l,u.appendChild(m)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/hackathon-WoopSicredi-justo-chatbot/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4bd6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=n("0a63"),a=n.n(i),o=n("43f9"),r=n.n(o),c=(n("51de"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("Sobre")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/v01"}},[t._v("Justo v0.1 MVP")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/justo"}},[t._v("Justo, fale comigo - Dev")])],1),n("router-view")],1)}),l=[],u=n("3461"),m=n("db49"),d=new u["a"]({accessToken:m["a"].app.token}),f={name:"app",data:function(){return{answers:[],query:"",speech:m["a"].locale.strings.voiceTitle,micro:!1,muted:m["a"].app.muted,online:navigator.onLine,config:m["a"]}},watch:{answers:function(t){setTimeout(function(){document.querySelector("#bottom").scrollIntoView({behavior:"smooth"})},2)}},methods:{submit:function(){var t=this;d.textRequest(this.query).then(function(e){"input.unknown"===e.result.action&&!0===t.config.app.googleIt&&(e.result.fulfillment.messages[0].unknown=!0,e.result.fulfillment.messages[0].text=e.result.resolvedQuery),t.answers.push(e),t.handle(e),t.query="",t.speech=m["a"].locale.strings.voiceTitle})},handle:function(t){if(t.result.fulfillment.speech||"simple_response"===t.result.fulfillment.messages[0].type){var e=t.result.fulfillment.speech;null!==e&&""!==e||(e=t.result.fulfillment.messages[0].textToSpeech);var n=new SpeechSynthesisUtterance(e);n.voiceURI="native",n.lang=m["a"].locale.settings.speechLang,!1===this.muted&&window.speechSynthesis.speak(n)}},autosubmit:function(t){this.query=t,this.submit()},mute:function(t){this.muted=t},microphone:function(t){this.micro=t;var e=this;if(!0===t){var n=new webkitSpeechRecognition;n.interimResults=!0,n.lang=m["a"].locale.settings.recognitionLang,n.start(),n.onresult=function(t){for(var n=t.resultIndex;n<t.results.length;n+=1)e.speech=t.results[n][0].transcript},n.onend=function(){n.stop(),e.micro=!1,e.autosubmit(e.speech)}}}}},p=f,h=(n("cf25"),n("2877")),v=Object(h["a"])(p,c,l,!1,null,null,null);v.options.__file="App.vue";var g=v.exports,_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},y=[],w={name:"home",components:{}},k=w,C=Object(h["a"])(k,b,y,!1,null,null,null);C.options.__file="Home.vue";var x=C.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Justo v0.1")]),n("section",{attrs:{id:"app"}},[n("div",{staticClass:"query"},[0==t.micro?n("div",{staticClass:"wrapper"},[n("i",{staticClass:"material-icons iicon",on:{click:function(e){t.microphone(!0)}}},[t._v("mic")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"queryform",attrs:{"aria-label":t.config.locale.strings.queryTitle,autocomplete:"off",placeholder:t.config.locale.strings.queryTitle,autofocus:"",type:"text"},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submit()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),0==t.muted?n("i",{staticClass:"material-icons iicon t2s",on:{click:function(e){t.mute(!0)}}},[t._v("volume_up")]):n("i",{staticClass:"material-icons iicon t2s",on:{click:function(e){t.mute(!1)}}},[t._v("volume_off")])]):n("div",{staticClass:"wrapper"},[n("i",{staticClass:"material-icons iicon recording",on:{click:function(e){t.microphone(!1)}}},[t._v("mic")]),n("input",{staticClass:"queryform",attrs:{placeholder:t.speech,readonly:""}})])]),n("main",{staticClass:"wrapper ai-window"},[n("br"),n("br"),0==t.answers.length&&1==t.online?n("div",[n("h1",{staticClass:"title mdc-typography--headline"},[n("div",{staticClass:"material-icons up"},[t._v("arrow_upward")]),n("br"),n("br"),t._v("\n                  "+t._s(t.config.locale.strings.welcomeTitle)+"\n                  "),n("p",{staticClass:"mdc-typography--body2"},[t._v("\n                    "+t._s(t.config.locale.strings.welcomeDescription)+"\n                  ")])])]):t._e(),0==t.answers.length&&0==t.online?n("div",[n("h1",{staticClass:"title mdc-typography--headline"},[n("div",{staticClass:"material-icons up"},[t._v("cloud_off")]),n("br"),n("br"),t._v("\n                    "+t._s(t.config.locale.strings.offlineTitle)+"\n                    "),n("p",{staticClass:"mdc-typography--body2"},[t._v("\n                      "+t._s(t.config.locale.strings.offlineDescription)+"\n                    ")])])]):t._e(),t._l(t.answers,function(e){return n("table",{staticClass:"chat-window"},[n("tr",[n("td",{staticClass:"bubble"},[t._v(t._s(e.result.resolvedQuery))])]),n("tr",[n("td",[e.result.fulfillment.speech?n("div",{staticClass:"bubble bot"},[t._v("\n                        "+t._s(e.result.fulfillment.speech)+"\n                    ")]):t._e(),t._l(e.result.fulfillment.messages,function(e){return n("div",["basic_card"==e.type?n("div",{staticClass:"mdc-card"},[e.image?n("img",{staticClass:"mdc-card__media-item",attrs:{title:e.image.accessibilityText,alt:e.image.accessibilityText,src:e.image.url}}):t._e(),n("section",{staticClass:"mdc-card__primary"},[n("h1",{staticClass:"mdc-card__title"},[t._v(t._s(e.title))]),n("br"),n("h2",{staticClass:"mdc-card__subtitle"},[t._v(t._s(e.subtitle))])]),n("section",{staticClass:"mdc-card__supporting-text"},[t._v("\n                                "+t._s(e.formattedText)+"\n                            ")]),t._l(e.buttons,function(e){return n("section",{staticClass:"mdc-card__actions"},[n("a",{staticClass:"mdc-button mdc-button--compact themed mdc-card__action",attrs:{target:"_blank",href:e.openUrlAction.url}},[t._v("\n                                    "+t._s(e.title)+"\n                                    "),n("i",{staticClass:"material-icons openlink"},[t._v("open_in_new")])])])})],2):t._e(),"carousel_card"==e.type?n("div",{staticClass:"slider"},[n("carousel",{attrs:{perPage:1,navigationEnabled:!0,paginationEnabled:!1,navigationNextLabel:"<button class='mdc-fab mdc-fab--mini material-icons rightnav'><span class='mdc-fab__icon'>keyboard_arrow_right</span></button>",navigationPrevLabel:"<button class='mdc-fab mdc-fab--mini material-icons leftnav'><span class='mdc-fab__icon'>keyboard_arrow_left</span></button>",navigationClickTargetSize:0,loop:!0}},t._l(e.items,function(e){return n("slide",{key:e.id},[n("div",{staticClass:"mdc-card slide"},[e.image?n("img",{staticClass:"mdc-card__media-item",attrs:{src:e.image.url}}):t._e(),n("section",{staticClass:"mdc-card__primary"},[n("h1",{staticClass:"mdc-card__title themed",on:{click:function(n){t.autosubmit(e.optionInfo.key)}}},[t._v("\n                                              "+t._s(e.title)+"\n                                            ")])]),n("section",{staticClass:"mdc-card__supporting-text"},[t._v("\n                                            "+t._s(e.description)+"\n                                        ")])])])}))],1):t._e(),"list_card"==e.type?n("div",{staticClass:"mdc-list-group mdc-card"},[n("h3",{staticClass:"mdc-list-group__subheader"},[t._v(t._s(e.title))]),t._l(e.items,function(e){return n("ul",{staticClass:"mdc-list mdc-list--two-line mdc-list--avatar-list",on:{click:function(n){t.autosubmit(e.optionInfo.key)}}},[n("li",{staticClass:"mdc-list-item"},[e.image?n("img",{staticClass:"mdc-list-item__start-detail",attrs:{title:e.image.accessibilityText,alt:e.image.accessibilityText,width:"56",height:"56",src:e.image.url}}):t._e(),n("span",{staticClass:"mdc-list-item__text"},[t._v("\n                                      "+t._s(e.title)+"\n                                      "),n("span",{staticClass:"mdc-list-item__text__secondary"},[t._v("\n                                        "+t._s(e.description)+"\n                                      ")])])])])})],2):t._e(),"link_out_chip"==e.type?n("div",{staticClass:"chips"},[n("a",{staticClass:"suggestion link",attrs:{href:e.url,target:"_blank"}},[t._v("\n                                "+t._s(e.destinationName)+"\n                                "),n("i",{staticClass:"material-icons openlink"},[t._v("open_in_new")])])]):t._e(),"suggestion_chips"==e.type?n("div",{staticClass:"chips"},t._l(e.suggestions,function(e){return n("div",{staticClass:"suggestion",on:{click:function(n){t.autosubmit(e.title)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})):t._e()])})],2)])])}),n("br"),n("a",{attrs:{id:"bottom"}})],2)])])},S=[],q=new u["a"]({accessToken:m["a"].app.token}),j={name:"v01",data:function(){return{answers:[],query:"",speech:m["a"].locale.strings.voiceTitle,micro:!1,muted:m["a"].app.muted,online:navigator.onLine,config:m["a"]}},watch:{answers:function(t){setTimeout(function(){document.querySelector("#bottom").scrollIntoView({behavior:"smooth"})},2)}},methods:{submit:function(){var t=this;q.textRequest(this.query).then(function(e){"input.unknown"===e.result.action&&!0===t.config.app.googleIt&&(e.result.fulfillment.messages[0].unknown=!0,e.result.fulfillment.messages[0].text=e.result.resolvedQuery),t.answers.push(e),t.handle(e),t.query="",t.speech=m["a"].locale.strings.voiceTitle})},handle:function(t){if(t.result.fulfillment.speech||"simple_response"===t.result.fulfillment.messages[0].type){var e=t.result.fulfillment.speech;null!==e&&""!==e||(e=t.result.fulfillment.messages[0].textToSpeech);var n=new SpeechSynthesisUtterance(e);n.voiceURI="native",n.lang=m["a"].locale.settings.speechLang,!1===this.muted&&window.speechSynthesis.speak(n)}},autosubmit:function(t){this.query=t,this.submit()},mute:function(t){this.muted=t},microphone:function(t){this.micro=t;var e=this;if(!0===t){var n=new webkitSpeechRecognition;n.interimResults=!0,n.lang=m["a"].locale.settings.recognitionLang,n.start(),n.onresult=function(t){for(var n=t.resultIndex;n<t.results.length;n+=1)e.speech=t.results[n][0].transcript},n.onend=function(){n.stop(),e.micro=!1,e.autosubmit(e.speech)}}}}},E=j,O=(n("9fd6"),Object(h["a"])(E,T,S,!1,null,null,null));O.options.__file="v01.vue";var P=O.exports;s["default"].use(_["a"]);var L=new _["a"]({mode:"history",base:"/hackathon-WoopSicredi-justo-chatbot/",routes:[{path:"/",name:"v0.1",component:P},{path:"/home",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/v01",name:"v0.1",component:P},{path:"/justo",name:"justo",component:function(){return n.e("chunk-0be4").then(n.bind(null,"0f1a"))}}]}),I=n("2f62");s["default"].use(I["a"]);var R=new I["a"].Store({state:{},mutations:{},actions:{}}),A=n("9483");Object(A["a"])("".concat("/hackathon-WoopSicredi-justo-chatbot/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["default"].config.productionTip=!1,s["default"].use(a.a),s["default"].use(r.a),new s["default"]({router:L,store:R,render:function(t){return t(g)}}).$mount("#app")},7386:function(t,e,n){},"9fd6":function(t,e,n){"use strict";var s=n("4bd6"),i=n.n(s);i.a},cf25:function(t,e,n){"use strict";var s=n("7386"),i=n.n(s);i.a},db49:function(t,e,n){"use strict";e["a"]={app:{token:"fc56b98488ba46eaafc893fc969e374f",muted:!1,googleIt:!0},locale:{strings:{},settings:{speechLang:"pt-BR",recognitionLang:"pt-BR"}}}}});
//# sourceMappingURL=app.50a522d6.js.map