(function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=t[2],i=0,d=[];i<o.length;i++)r=o[i],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},s={app:0},c=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-251a6420":"53363773","chunk-2d0baa90":"afa32dfb","chunk-67ef5cf2":"76cda618","chunk-6e27911b":"7c7ac24b"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-67ef5cf2":1,"chunk-6e27911b":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-251a6420":"31d6cfe0","chunk-2d0baa90":"31d6cfe0","chunk-67ef5cf2":"46b9e30a","chunk-6e27911b":"accd65ab"}[e]+".css",s=l.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===n||i===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],i=u.getAttribute("data-href");if(i===n||i===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],f.parentNode.removeChild(f),a(c)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=c);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=o(e);var d=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"22de":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-table"},[a("b-table",{staticClass:"cs-content-table",attrs:{dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.settings.header||e.header,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([e._l(e.settings.columns||e.columns,(function(t,n){return{key:t.key,fn:function(r){return[t.actions?a("div",{key:n,staticClass:"btn-group"},e._l(t.actions,(function(t,n){return a("button",{key:n,class:t.class,domProps:{innerHTML:e._s(t.content)},on:{click:function(e){return t.onClick(r.item)}}})})),0):a("div",{key:n,domProps:{innerHTML:e._s(t.render?t.render(r.item):r.item[t.key])},on:{click:function(e){t.onClick&&t.onClick(r.item)}}},[e._v(e._s(r.item.render))])]}}}))],null,!0)}),a("div",{staticClass:"cs-pagination"},[a("b-pagination",{attrs:{"total-rows":e.totalRows,"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","ide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},r=[],s=(a("c5f6"),{data:function(){return{currentPage:1}},name:"magic-table",props:{columns:{type:[Array,Object],default:function(){return[]}},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},tableData:{type:[Array,Function],default:function(){return[]}},fields:{type:[Array,Object],default:function(){return[]}},perPage:{type:Number,default:10},dark:{type:Boolean,default:!1},settings:{type:[Array,Object],default:function(){return[]}}},computed:{items:function(){var e=this.tableData;return Array.isArray(e)?e:e()},totalRows:function(){return this.getRowCount()},captions:function(){return this.fields}},methods:{getRowCount:function(){return this.items.length}}}),c=s,o=a("2877"),l=Object(o["a"])(c,n,r,!1,null,null,null);t["a"]=l.exports},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("7514"),a("1c4c"),a("8a81"),a("f466"),a("579f"),a("587a");var n=a("a026"),r=a("5f5b"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},c=[],o={name:"app"},l=o,u=(a("5c0b"),a("2877")),i=Object(u["a"])(l,s,c,!1,null,null,null),d=i.exports,f=a("8c4f"),b=function(){return a.e("chunk-251a6420").then(a.bind(null,"e8c5"))},p=function(){return a.e("chunk-6e27911b").then(a.bind(null,"1837"))},m=function(){return a.e("chunk-67ef5cf2").then(a.bind(null,"9190"))},j=function(){return a.e("chunk-2d0baa90").then(a.bind(null,"37c9"))};n["default"].use(f["a"]);var h=new f["a"]({mode:"history",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/apartment/table",name:"Home",component:b,children:[{path:"/apartment/table",name:"table-apartment",component:p},{path:"/apartment/create",name:"create-apartment",component:j},{path:"/apartment/:id",name:"detail-apartment",component:m}]}]}),v=a("1f0b"),g=a("7f45"),y=a.n(g),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"10"}},[a("b-card",{staticClass:"card-accent-success",attrs:{"header-tag":"header","footer-tag":"footer",header:"header",footer:"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"icons cui-pencil mr-2"}),a("b",[e._v(e._s(e.caption))])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"btn btn-primary mr-2"},[a("i",{staticClass:"icon-check"}),e._v("\n          OK\n        ")]),a("button",{staticClass:"btn btn-danger"},[a("i",{staticClass:"icon-ban"}),e._v("\n          Hủy bỏ\n        ")])]),a("div",e._l(e.itemSource,(function(t,n){return a("div",{key:n,staticClass:"form-group row"},[a("div",{staticClass:"cs-label col-md-3 control-label text-right"},[e._v(e._s(t.lable)+" :")]),a("div",{staticClass:"col-md-9"},["textarea"==t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}},[e._v(e._s(t.value))]):"select"==t.type?a("select",[a("option",{attrs:{value:"1"}},[e._v("1")])]):"checkbox"==t.type?a("div",[a("c-switch",{staticClass:"mx-1",attrs:{color:"success",checked:"",variant:"pill"}})],1):"date"==t.type?a("date-picker",{attrs:{placeholder:t.placeholder,name:t.name,"input-class":"form-control",format:"dd/MM/yyyy",readonly:!1,"calendar-class":"cs-date-picker",value:e.current,"use-utc":!0},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}):"number"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"number",placeholder:t.placeholder,name:t.name,value:"item.value"},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"",placeholder:t.placeholder,name:t.name,value:"item.value"},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}})],1)])})),0)])],1)],1)},w=[],x=a("fa33"),C=a("f1fb"),P={props:["itemSource","caption"],name:"Csform",components:{DatePicker:x["a"],cSwitch:C["n"]},data:function(){return{current:new Date}}},O=P,z=Object(u["a"])(O,k,w,!1,null,null,null),S=z.exports,A=a("22de");window.moment=y.a,window.Swal=a("3d20"),window._=a("2ef0"),window.utils=_.merge(a("7134").default,a("971b").default),n["default"].use(v["a"]),n["default"].use(r["a"]),n["default"].component("DataForm",S),n["default"].component("DataTable",A["a"]),new n["default"]({el:"#app",router:h,template:"<App/>",components:{App:d}})},"5c0b":function(e,t,a){"use strict";var n=a("e332"),r=a.n(n);r.a},7134:function(e,t,a){"use strict";a.r(t),t["default"]={dateYYYYMMDD:function(e){return _.isUndefined(e)||_.isNull(e)||_.isEmpty(e)?"":moment(e).format("DD/MM/YYYY")}}},"971b":function(e,t,a){"use strict";a.r(t);var n=[{class:"",text:"Chưa thanh toán"},{class:"success",text:"Đã thanh toán"}];t["default"]={generateStatues:function(e){return'<span style="height: 25px; line-height: 25px; padding: 0 10px" class="badge  badge-'+n[e].class+'">'+n[e].text+"</span>"}}},e332:function(e,t,a){}});
//# sourceMappingURL=app.379bf14c.js.map