(function(e){function t(t){for(var i,o,c=t[0],s=t[1],u=t[2],d=0,m=[];d<c.length;d++)o=c[d],r[o]&&m.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("c21b"),r=n.n(i);r.a},"1e00":function(e,t,n){},5117:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"app",created:function(){}},c=o,s=(n("034f"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,d=(n("8615"),n("456d"),n("ac6a"),n("f751"),n("6b54"),n("2f62")),m=n("bc3a"),f=n.n(m),p=n("a7fe"),v=n.n(p);i["a"].use(v.a,f.a);var b={getJson:function(){return i["a"].axios.get("http://localhost:8080/test.json")}},h=n("8aa5"),y=n.n(h),_={apiKey:"AIzaSyB8_VNP4J66aklDKM40iEiyuV0K7nLRGRY",databaseURL:"https://gns-test-946e9.firebaseio.com/",projectId:"gns-test-946e9"},E=y.a.initializeApp(_),I=E.database();function g(){function e(){return Math.random().toString(16).slice(-4)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}i["a"].use(d["a"]);var T=new d["a"].Store({state:{query:"",list:[],singleItem:null},mutations:{SET_LIST:function(e,t){e.list=t},UPDATE_ITEM:function(e,t){I.ref("items").child(t.key).set(t.item)},DELETE_ITEM:function(e,t){I.ref("items").child(t).remove()},SET_SINGLE_ITEM:function(e,t){I.ref("items").child(t).once("value").then(function(t){e.singleItem=t.val()})},REMOVE_SINGLE_ITEM:function(e){e.singleItem=null},CREATE_ITEM:function(e,t){var n=Object.assign({},t);n.id=g(),I.ref("items").push(n)}},getters:{items:function(e){return e.list},singleItem:function(e){return e.singleItem}},actions:{GET_JSON:function(e){var t=e.commit;b.getJson().then(function(e){e.data.forEach(function(e){I.ref("items").push(e)}),I.ref("items").once("value").then(function(e){var n=Object.keys(e.val()),i=Object.values(e.val());i.map(function(e,t){return e.key=n[t]}),t("SET_LIST",i)})})},SET_LIST:function(e){var t=e.commit;I.ref("items").once("value").then(function(e){var n=Object.keys(e.val()),i=Object.values(e.val());i.map(function(e,t){return e.key=n[t]}),t("SET_LIST",i)})},UPDATE_ITEM:function(e,t){var n=e.commit;n("UPDATE_ITEM",t)},DELETE_ITEM:function(e,t){var n=e.commit;n("DELETE_ITEM",t)},SET_SINGLE_ITEM:function(e,t){var n=e.commit;n("SET_SINGLE_ITEM",t)},REMOVE_SINGLE_ITEM:function(e){var t=e.commit;t("REMOVE_SINGLE_ITEM")},CREATE_ITEM:function(e,t){var n=e.commit;n("CREATE_ITEM",t)}}}),k=T,L=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e.selected?n("b-form-group",{attrs:{label:"Sort by..."}},[n("b-form-radio-group",{attrs:{id:"btnradios1",buttons:"",options:e.options,name:"radiosBtnDefault"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):e._e(),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/create"}},[e._v(" Create")])],1),n("div",{staticClass:"text-right sum-block"},[e._v("\n        Summary: "+e._s(e.currencySum)+"\n    ")]),n("table",{staticClass:"table"},[e._m(0),e.isLoadingList?n("tbody",[e._v("\n            LOADING....\n        ")]):n("tbody",e._l(e.orderBy(e.items,e.selected),function(e,t){return n("list-item",{key:t,attrs:{item:e}})}))])])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("id")]),n("th",{attrs:{scope:"col"}},[e._v("name")]),n("th",{attrs:{scope:"col"}},[e._v("location")]),n("th",{attrs:{scope:"col"}},[e._v("currency")]),n("th",{attrs:{scope:"col"}},[e._v("actions")])])])}],x=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return"read"==e.mode?n("tr",[n("td",[e._v(e._s(e.item.id))]),n("td",[e._v(e._s(e.item.name))]),n("td",[e._v(e._s(e.item.location))]),n("td",[e._v(e._s(e.item.currency))]),n("td",[n("b-button-group",[n("b-button",{attrs:{variant:"info"},on:{click:function(t){e.goMore()}}},[e._v("more")]),n("b-button",{attrs:{variant:"success"},on:{click:function(t){e.editItem()}}},[e._v("edit")]),n("b-button",{attrs:{variant:"danger"},on:{click:function(t){e.deleteItem()}}},[e._v("delete")])],1)],1)]):n("tr",[n("td",[e._v("\n        "+e._s(e.editedItem.id)+"\n    ")]),n("td",[n("b-form-input",{attrs:{id:"name",type:"text",state:e.nameState,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name","string"===typeof t?t.trim():t)},expression:"editedItem.name"}}),n("b-form-invalid-feedback",{attrs:{id:"inputNameFeedback"}},[e._v("\n            Enter at least 3 letters\n        ")])],1),n("td",[n("b-form-input",{attrs:{id:"location",type:"text",state:e.locationState,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your location"},model:{value:e.editedItem.location,callback:function(t){e.$set(e.editedItem,"location","string"===typeof t?t.trim():t)},expression:"editedItem.location"}}),n("b-form-invalid-feedback",{attrs:{id:"inputLocationFeedback"}},[e._v("\n            Enter at least 2 letters\n        ")])],1),n("td",[n("b-form-input",{attrs:{id:"currency",type:"number",state:e.currencyState,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your currency"},model:{value:e.editedItem.currency,callback:function(t){e.$set(e.editedItem,"currency",t)},expression:"editedItem.currency"}}),n("b-form-invalid-feedback",{attrs:{id:"inputCurrencyFeedback"}},[e._v("\n            Must be more 0\n        ")])],1),n("td",[n("b-button-group",[n("b-button",{attrs:{variant:"success"},on:{click:function(t){e.saveItem()}}},[e._v("save")]),n("b-button",{attrs:{variant:"danger"},on:{click:function(t){e.cancel()}}},[e._v("cancel")])],1)],1)])}),$=[],O={name:"list-item",props:{item:{type:Object},onSave:{type:Function}},computed:{nameState:function(){return this.editedItem.name.length>3},locationState:function(){return this.editedItem.location.length>2},currencyState:function(){return+this.editedItem.currency>0}},methods:{editItem:function(){this.editedItem=Object.assign({},this.item),this.mode="edit"},saveItem:function(){this.nameState&&this.locationState&&this.currencyState&&(delete this.editedItem.key,this.editedItem.currency=+this.editedItem.currency,this.$store.dispatch("UPDATE_ITEM",{key:this.item.key,item:this.editedItem}),this.$store.dispatch("SET_LIST"),this.resetMode())},cancel:function(){this.resetMode()},deleteItem:function(){this.$store.dispatch("DELETE_ITEM",this.item.key),this.$store.dispatch("SET_LIST"),this.resetMode()},goMore:function(){this.$router.push({name:"item-info",params:{key:this.item.key}})},resetMode:function(){this.editedItem=null,this.mode="read"}},data:function(){return{mode:"read",editedItem:null}}},j=O,C=(n("66f4"),Object(s["a"])(j,x,$,!1,null,"583c01fc",null));C.options.__file="list-item.vue";var w=C.exports,q={name:"list",components:{ListItem:w},computed:{items:function(){var e=this;return this.$store.getters.items.filter(function(t){if(t.name&&t.location&&t.currency||console.log(t.id),-1!==t.name.toLowerCase().indexOf(e.query.toLowerCase())||-1!==t.location.toLowerCase().indexOf(e.query.toLowerCase())||-1!==t.currency.toString().toLowerCase().indexOf(e.query.toLowerCase()))return t})},currencySum:function(){return this.items.reduce(function(e,t){return e+t.currency},0)},isLoadingList:function(){return!this.items.length}},created:function(){this.$store.dispatch("SET_LIST")},methods:{},data:function(){return{query:"",selected:"name",options:[{text:"name",value:"name"},{text:"location",value:"location"},{text:"currency",value:"currency"}]}}},N=q,G=(n("f0ad"),Object(s["a"])(N,S,M,!1,null,"609eab2a",null));G.options.__file="list.vue";var F=G.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.singleItem?n("div",[n("b-card",{attrs:{header:e.singleItem.id,title:e.singleItem.name,"sub-title":"location: "+e.singleItem.location}},[n("p",{staticClass:"card-text"},[e._v("\n                currency: "+e._s(e.singleItem.currency)+"\n            ")]),n("router-link",{staticClass:"card-link",attrs:{to:"/list"}},[e._v(" < Back")])],1)],1):e._e(),e.singleItem?e._e():n("p",[e._v("Loading...")])])},P=[],D={name:"item-info",computed:{singleItem:function(){return this.$store.getters.singleItem}},created:function(){this.$store.dispatch("SET_SINGLE_ITEM",this.$route.params.key)},destroyed:function(){this.$store.dispatch("REMOVE_SINGLE_ITEM")}},R=D,V=(n("8036"),Object(s["a"])(R,A,P,!1,null,"c99a7002",null));V.options.__file="item-info.vue";var H=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"nameGroup",label:"Name:","label-for":"name"}},[n("b-form-input",{attrs:{id:"name",type:"text",state:!e.$v.form.name.$invalid,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}}),n("b-form-invalid-feedback",{attrs:{id:"inputNameFeedback"}},[e._v("\n                This is a required field and must be at least 3 characters\n            ")])],1),n("b-form-group",{attrs:{id:"locationGroup",label:"Location:","label-for":"location"}},[n("b-form-input",{attrs:{id:"location",type:"text",state:!e.$v.form.location.$invalid,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your location"},model:{value:e.form.location,callback:function(t){e.$set(e.form,"location","string"===typeof t?t.trim():t)},expression:"form.location"}}),n("b-form-invalid-feedback",{attrs:{id:"inputLocationFeedback"}},[e._v("\n                This is a required field and must be at least 3 characters\n            ")])],1),n("b-form-group",{attrs:{id:"currencyGroup",label:"Currency:","label-for":"currency"}},[n("b-form-input",{attrs:{id:"currency",type:"number",state:!e.$v.form.currency.$invalid,"aria-describedby":"inputLiveHelp inputLiveFeedback",placeholder:"Enter your currency"},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}}),n("b-form-invalid-feedback",{attrs:{id:"inputLocationFeedback"}},[e._v("\n                This is a required field and must be more 0\n            ")])],1),n("b-button",{attrs:{type:"submit",variant:"primary",disabled:e.$v.form.$invalid}},[e._v("Submit")]),n("router-link",{staticClass:"btn btn-danger",attrs:{to:"/list"}},[e._v(" Cancel")])],1)],1)},U=[],B=n("1dce"),K=n.n(B),z=n("b5ae"),Y={name:"item-create",methods:{onSubmit:function(){this.$store.dispatch("CREATE_ITEM",this.form),this.$router.push({name:"list"})}},mixins:[B["validationMixin"]],validations:{form:{name:{required:z["required"],minLength:Object(z["minLength"])(3)},location:{required:z["required"],minLength:Object(z["minLength"])(3)},currency:{required:z["required"],minValue:Object(z["minValue"])(1)}}},data:function(){return{form:{}}}},Q=Y,W=(n("dcda"),Object(s["a"])(Q,J,U,!1,null,"3ade9a59",null));W.options.__file="item-create.vue";var X=W.exports;i["a"].use(L["a"]);var Z=[{path:"",redirect:"/list"},{path:"/list",component:F,name:"list"},{path:"/list/:key",component:H,name:"item-info"},{path:"/create",component:X,name:"item-create"}],ee=new L["a"]({routes:Z}),te=ee,ne=n("9f7b"),ie=(n("f9e3"),n("2dd8"),n("a7c6")),re=n.n(ie),ae=n("0ff2");i["a"].use(K.a),i["a"].use(re.a),i["a"].use(ne["a"]),i["a"].use(ae["a"]),i["a"].config.productionTip=!1,new i["a"]({router:te,store:k,render:function(e){return e(l)}}).$mount("#app")},"66f4":function(e,t,n){"use strict";var i=n("bdce"),r=n.n(i);r.a},8036:function(e,t,n){"use strict";var i=n("dd35"),r=n.n(i);r.a},bdce:function(e,t,n){},c21b:function(e,t,n){},dcda:function(e,t,n){"use strict";var i=n("5117"),r=n.n(i);r.a},dd35:function(e,t,n){},f0ad:function(e,t,n){"use strict";var i=n("1e00"),r=n.n(i);r.a}});
//# sourceMappingURL=app.1b345016.js.map