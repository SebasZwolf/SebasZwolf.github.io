(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({calculator:"calculator",cartera:"cartera",comparator:"comparator",landing:"landing"}[t]||t)+"."+{calculator:"90517866",cartera:"c0e47e69",comparator:"4fd95c65",landing:"9aef696a"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={calculator:1,cartera:1,comparator:1,landing:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({calculator:"calculator",cartera:"cartera",comparator:"comparator",landing:"landing"}[t]||t)+"."+{calculator:"87337cf8",cartera:"f661ffb7",comparator:"25633dd7",landing:"7a660da5"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[t],p.parentNode.removeChild(p),a(s)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2b29":function(t,e,a){"use strict";a("a06a")},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"auth",(function(){return D}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("UserTab"),a("div",{staticStyle:{padding:"15px",background:"linear-gradient(0deg, #8da 50%, #7b9 )"}},[a("router-link",{staticClass:"homebranding",attrs:{to:"/",onclick:"console.log(this);"}},[t._v("Bono Calculadora")])],1),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/bonos"}},[t._v("Bonos")]),t._v(" | "),a("router-link",{attrs:{to:"/calculator"}},[t._v("Calculadora")]),t._v(" | "),a("router-link",{attrs:{to:"/cartera"}},[t._v("Cartera")])],1),a("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("h6",[t._v("para dudas o asistencia puede comunicarse con el siguiente correo:")]),a("a",{attrs:{href:"mailto:u201816964@upc.edu.pe"}},[t._v("u201816964@upc.edu.pe")])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.loading,expression:"$store.state.loading"}],staticClass:"loading",staticStyle:{float:"left"}},[t._v(" loading ")]),t.$store.state.current_user.logged?a("div",[t._v(t._s(t.$store.state.current_user.email))]):a("div",[a("form",{on:{submit:[function(t){t.preventDefault()},t.login]}},[t._m(0),t._m(1),a("button",{attrs:{type:"submit"}},[t._v("Enlazar")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",[t._v("Correo: ")]),a("input",{attrs:{name:"uname",type:"email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",[t._v("Contraseña: ")]),a("input",{attrs:{name:"passw",type:"password"}})])}],c=a("b85c"),u=(a("d3b7"),a("ddb0"),{name:"UserTab",data:function(){return{}},computed:{},mounted:function(){},methods:{login:function(t){var e,a=this,n=new FormData(t.target),o={},r=Object(c["a"])(n.entries());try{for(r.s();!(e=r.n()).done;){var s=e.value;o[s[0]]=s[1]}}catch(u){r.e(u)}finally{r.f()}var i="https://upc-finance-app-backend.herokuapp.com/user?uname="+o.uname;this.$store.state.loading=!0,fetch(i).then((function(t){return t.json()})).then((function(t){t?D.signInWithEmailAndPassword(o.uname,o.passw).then((function(t){a.$store.state.current_user=t.user,a.$store.state.current_user.logged=!0,a.$store.state.loading=!1,a.$store.dispatch("get_bonos")})).catch((function(t){alert("login error: "+t.message),a.$store.state.loading=!1})):D.createUserWithEmailAndPassword(o.uname,o.passw).then((function(t){a.$store.state.current_user=t.user,a.$store.state.current_user.logged=!0,i="https://upc-finance-app-backend.herokuapp.com/users/"+a.current_user.uid,fetch(i,{method:"POST",body:JSON.stringify({bonos:[],cartera:[]}),headers:{"Content-Type":"application/json"}}),a.$store.dispatch("get_bonos"),a.$store.state.loading=!1})).catch((function(t){alert("register error: "+t.message),a.$store.state.loading=!1}))}))}}}),l=u,d=(a("2b29"),a("2877")),p=Object(d["a"])(l,s,i,!1,null,null,null),f=p.exports,h={data:function(){return{}},components:{UserTab:f},computed:{},mounted:function(){}},m=h,v=(a("034f"),Object(d["a"])(m,o,r,!1,null,null,null)),b=v.exports,g=(a("3ca3"),a("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("div",[n("BondList",{attrs:{forsafe:!0,bonos:t.$store.state.lista_bonos},on:{compare:function(e){return t.bondlistAction(0,e)},delete:function(e){return t.bondlistAction(1,e)},save:function(e){return t.saveBonoCarteraModal(e)}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.bono,expression:"bono"}],staticStyle:{"background-color":"#0004",position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}}),t.bono?n("div",{staticClass:"popup"},[n("h4",[t._v("Guardar Bono")]),n("h6",[t._v("Por favor, ingrese la fecha de adquisición del bono:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bono.date,expression:"bono.date"}],staticStyle:{display:"block",width:"80%",margin:"auto","margin-bottom":"4px"},attrs:{type:"date"},domProps:{value:t.bono.date},on:{input:function(e){e.target.composing||t.$set(t.bono,"date",e.target.value)}}}),n("button",{on:{click:t.saveBonoCartera}},[t._v("Guardar")])]):t._e()])},y=[],w=(a("159b"),a("ac1f"),a("5319"),a("a434"),a("ce24")),x={name:"Home",data:function(){return{bono:null,index:null}},components:{BondList:w["a"]},methods:{bondlistAction:function(t,e){var a=this,n=[];switch(t){case 0:this.$store.dispatch("pre_load"),e.forEach((function(t,e){t&&n.push(a.$store.state.lista_bonos[e])})),this.$store.state.aux_bonos=n,this.$router.replace("/comparator");break;case 1:this.$store.dispatch("pre_load"),e.forEach((function(t,e){t||n.push(a.$store.state.lista_bonos[e])})),this.$store.state.aux_bonos=n,this.$store.dispatch("post_bonos");break}},saveBonoCarteraModal:function(t){console.log(t),this.bono=this.$store.state.lista_bonos[t],this.bono.date=(new Date).toDateString(),this.index=t},saveBonoCartera:function(t){this.$store.dispatch("pre_load"),this.$store.state.aux_cartera.push(this.bono),this.$store.state.aux_bonos.splice(this.index,1),this.$store.dispatch("post_bonos"),this.bono=null,this.index=null}},mounted:function(){}},$=x,k=Object(d["a"])($,_,y,!1,null,"7fbe17ba",null),C=k.exports;n["a"].use(g["a"]);var j=[{path:"/bonos",name:"Home",component:C},{path:"/calculator",name:"Calculator",component:function(){return a.e("calculator").then(a.bind(null,"8e22"))}},{path:"/comparator",name:"Comparator",component:function(){return a.e("comparator").then(a.bind(null,"ea59"))}},{path:"/cartera",name:"Cartera",component:function(){return a.e("cartera").then(a.bind(null,"0962"))}},{path:"/",name:"Home Page",component:function(){return a.e("landing").then(a.bind(null,"bede"))}}],S=new g["a"]({mode:"history",base:"/",routes:j}),E=S,O=a("2909"),B=a("2f62");n["a"].use(B["a"]);var P=new B["a"].Store({state:{current_user:{logged:!1},lista_bonos:[],cartera_bonos:[],aux_bonos:[],aux_cartera:[],loading:!1},mutations:{},actions:{pre_load:function(t){t.state.aux_bonos=Object(O["a"])(t.state.lista_bonos),t.state.aux_cartera=Object(O["a"])(t.state.cartera_bonos)},post_bonos:function(t){t.state.loading=!0;var e="https://upc-finance-app-backend.herokuapp.com/users/"+t.state.current_user.uid;fetch(e,{method:"POST",body:JSON.stringify({bonos:t.state.aux_bonos,cartera:t.state.aux_cartera}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t.state.lista_bonos=e.bonos,t.state.cartera_bonos=e.cartera,t.state.loading=!1}))},get_bonos:function(t){t.state.loading=!0;var e="https://upc-finance-app-backend.herokuapp.com/users/"+t.state.current_user.uid;fetch(e).then((function(t){return t.json()})).then((function(e){t.state.lista_bonos=e.bonos,t.state.cartera_bonos=e.cartera,t.state.loading=!1}))}},modules:{}}),A=a("260b");a("1247");n["a"].config.productionTip=!1;var T={apiKey:"AIzaSyBEXy9stFGjbYBIVT0tyvDFm1QhzKRzepo",authDomain:"financeapp-upc.firebaseapp.com",projectId:"financeapp-upc",storageBucket:"financeapp-upc.appspot.com",messagingSenderId:"972573156456",appId:"1:972573156456:web:5a24911bf8396bde7487dd"},N=A["a"].initializeApp(T),D=N.auth();new n["a"]({router:E,store:P,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,a){},"894e":function(t,e,a){"use strict";a("924b")},"924b":function(t,e,a){},a06a:function(t,e,a){},ce24:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"bono-list"},t._l(t.bonos,(function(e,n){return a("div",{key:n,staticClass:"bono-item"},[a("div",{staticStyle:{display:"flex",padding:"0 12px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected[n],expression:"selected[index]"}],staticStyle:{margin:"auto"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected[n])?t._i(t.selected[n],null)>-1:t.selected[n]},on:{change:[function(e){var a=t.selected[n],o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=null,i=t._i(a,s);o.checked?i<0&&t.$set(t.selected,n,a.concat([s])):i>-1&&t.$set(t.selected,n,a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.selected,n,r)},function(e){return t.check(n,e)}]}})]),a("div",{staticStyle:{display:"flex","flex-direction":"column","text-align":"left"}},[a("h4",{staticStyle:{"margin-bottom":"8px"}},[t._v(t._s(e.nombre))]),a("h6",[t._v("valor del cupón: "+t._s(e.valor_actual))]),a("h6",[t._v("precio del cupón: "+t._s(e.precio_actual))])]),a("div",{staticStyle:{display:"flex","text-align":"right","justify-content":"flex-end"}},[a("span",{staticClass:"vna"},[t._v(t._s(e.vna))]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.forsafe,expression:"forsafe"}],staticClass:"sbtn",attrs:{href:"#"},on:{click:function(e){return t.$emit("save",n)}}},[a("i",{staticClass:"fas fa-save"})]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.forview,expression:"forview"}],staticClass:"sbtn",attrs:{href:"#"},on:{click:function(e){return t.$emit("view",n)}}},[a("i",{staticClass:"far fa-calendar-alt"})])])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.active>4,expression:"active > 4"}],staticClass:"danger"},[t._v("no es recomendable compara más de 4 Bonos a la vez, esta app no garantiza que la app pueda mostrar la información correctamente")]),a("div",{staticStyle:{padding:".5rem","justify-content":"space-between"}},[a("button",{attrs:{disabled:t.active<1},domProps:{textContent:t._s(t.active>1?"Comparar":"Examinar")},on:{click:function(e){return t.$emit("compare",t.selected)}}}),a("button",{attrs:{disabled:t.active<1},on:{click:function(e){return t.$emit("delete",t.selected)}}},[t._v("Eliminar")])])])},o=[],r=(a("d81d"),{name:"BondList",data:function(){return{selected:[],active:0,msg:""}},props:{bonos:Array,forsafe:{type:Boolean,default:!1},forview:{type:Boolean,default:!1}},methods:{check:function(t,e){var a=this.selected.reduce((function(t,e){return t+e}));this.active=a}},mounted:function(){this.selected=this.bonos.map((function(){return!1}))},watch:{bonos:function(){this.selected=this.bonos.map((function(){return!1})),this.active=0}}}),s=r,i=(a("894e"),a("2877")),c=Object(i["a"])(s,n,o,!1,null,null,null);e["a"]=c.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6fe1aaf7.js.map