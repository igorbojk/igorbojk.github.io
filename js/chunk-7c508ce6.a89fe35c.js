(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c508ce6"],{"0db2":function(t,s,i){t.exports=i.p+"img/instagram.2beb6884.png"},5018:function(t,s,i){"use strict";var a=i("8f34"),c=i.n(a);c.a},8113:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"form-workshop"},[i("div",{staticClass:"form-workshop-left"},[t._m(0),t._m(1),i("div",{staticClass:"form-workshop-left-foot"},[i("div",[i("div",{staticClass:"btn-box"},[i("div",{staticClass:"btn btn-1",on:{click:function(s){return t.openModal()}}},[t._v(" Записатися на цей воркшоп ")])])]),t._m(2)])]),i("div",{staticClass:"form-workshop-right"})])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"form-workshop-left-head"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8 col-md-8 col-sm-7 col-xs-7"},[i("div",{staticClass:"h3"},[t._v("Марафон WinGrammar")])]),i("div",{staticClass:"col-lg-4 col-md-4 col-sm-5 col-xs-5 text-right"},[i("div",{staticClass:"workshop-time"},[i("div",{staticClass:"--date"},[t._v("25 Лютого")]),i("div",{staticClass:"--titme"},[t._v("19:00")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("div",{staticClass:"h4"},[t._v("Що будемо робити?")]),a("div",{staticClass:"workshop-list"},[a("ul",[a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Твої знання стануть структурованими і в них не буде прогалин")])]),a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Граматика стане сильною стороною твоєї англійськоїн")])]),a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Ти перестанеш боятися говорити і будеш робити це без помилок")])])])])]),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[a("div",{staticClass:"h4"},[t._v("Для кого?")]),a("div",{staticClass:"workshop-list"},[a("ul",[a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Для тих, хто вже трохи знає англійську, але так і не зміг остаточно зрозуміти граматику")])])])])]),a("div",{staticClass:"col-lg-6 col-md-6 col-xs-6 col-sm-6"},[a("div",{staticClass:"workshop-icon-group"},[a("i",[a("img",{attrs:{src:i("c2ce")+"#clock",alt:"#"}})]),a("p",[t._v("90 хвилин")])])]),a("div",{staticClass:"col-lg-6 col-md-6 col-xs-6 col-sm-6"},[a("div",{staticClass:"workshop-icon-group"},[a("i",[a("img",{attrs:{src:i("c2ce")+"#clock",alt:"#"}})]),a("p",[t._v("Київ, "),a("br"),t._v("Антоновича 157")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"price-block"},[a("div",{staticClass:"price old-price"},[t._v(" 123"),a("span",[t._v("грн.")]),a("i",{},[a("img",{attrs:{src:i("d8d5")+"#layer-23",alt:"#"}})])]),a("div",{staticClass:"discount-price"},[t._v("123"),a("span",[t._v("грн.")])])])}],e=(i("4de4"),i("fb6a"),i("5530")),l=i("d722"),o=i("2f62"),r={components:{},props:["propItems"],data:function(){return{data:{selected:"underwater",full_title:"",group:null},groups:null}},methods:Object(e["a"])({},Object(o["b"])("modals",["openBaseModal"]),{openModal:function(t){this.data.data=t,this.data.data.full_title=t.level_title,this.openBaseModal(this.data)},filterData:function(t){return t.filter((function(t){return new Date(t["start_date"]).getTime()>(new Date).getTime()}))}}),created:function(){var t=this;Object(l["b"])({type:"adults"}).then((function(s){t.groups=t.filterData(s).slice(0,t.propItems)}),(function(t){console.warn(t)}))},mounted:function(){}},n=r,d=(i("5018"),i("2877")),u=Object(d["a"])(n,a,c,!1,null,null,null);s["a"]=u.exports},"8f34":function(t,s,i){},a3a7:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("hooper",{ref:"form-workshop-schedule",staticClass:"form-workshop-schedule",attrs:{"mouse-drag":!0,"touch-drag":!0,"short-drag":!1,"wheel-control":!1},on:{afterSlide:t.sliderUpdated,updated:t.sliderUpdated}},t._l(3,(function(s,c){return a("slide",{key:c,staticClass:"form-workshop-schedule-item"},[t._v(" "+t._s(s)+" "),a("div",{staticClass:"form-workshop-left-head"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-md-8 col-sm-7 col-xs-7"},[a("div",{staticClass:"workshop-schedule-item-title"},[t._v("Марафон WinGrammar")])]),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-5 col-xs-5 text-right"},[a("div",{staticClass:"workshop-time"},[a("div",{staticClass:"--date"},[t._v("25 Лютого")]),a("div",{staticClass:"--titme"},[t._v("19:00")])])])])]),a("div",{staticClass:"form-workshop-image",style:{backgroundImage:"url(https://www.microsoft.com/ru-ru/microsoft-365/blog/wp-content/uploads/sites/54/2019/01/OfficeNews_365Mac-440x268.png)"}}),a("div",{staticClass:"h4"},[t._v("Що будемо робити?")]),a("div",{staticClass:"workshop-list"},[a("ul",[a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Твої знання стануть структурованими і в них не буде прогалин")])]),a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Граматика стане сильною стороною твоєї англійськоїн")])]),a("li",[a("i",[a("img",{attrs:{src:i("c2ce")+"#ul-i",alt:"#"}})]),a("p",[t._v("Ти перестанеш боятися говорити і будеш робити це без помилок")])])])]),a("div",{staticClass:"workshop-icon-groups"},[a("div",{staticClass:"workshop-icon-group"},[a("i",[a("img",{attrs:{src:i("c2ce")+"#clock",alt:"#"}})]),a("p",[t._v("90 хвилин")])]),a("div",{staticClass:"workshop-icon-group"},[a("i",[a("img",{attrs:{src:i("c2ce")+"#chat",alt:"#"}})]),a("p",[t._v("Онлайн")])])]),a("div",{staticClass:"form-workshop-left-foot"},[a("div",{staticClass:"btn-box"},[a("div",{staticClass:"btn btn-1",on:{click:function(s){return t.openModal()}}},[t._v(" Записатися на цей воркшоп ")])]),a("p",[a("a",{attrs:{href:"#"}},[t._v("Дізнатись більше")])])])])})),1)],1)},c=[],e=(i("4de4"),i("fb6a"),i("5530")),l=i("7e04"),o=(i("955f"),i("d722")),r=i("2f62"),n={components:{Hooper:l["a"],Slide:l["c"]},props:["propItems"],data:function(){return{data:{selected:"underwater",full_title:"",group:null},groups:null}},methods:Object(e["a"])({},Object(r["b"])("modals",["openBaseModal"]),{openModal:function(t){console.log(t),this.openBaseModal(this.data)},filterData:function(t){return t.filter((function(t){return new Date(t["start_date"]).getTime()>(new Date).getTime()}))},slidePrev:function(){this.$refs["form-workshop-schedule"].slidePrev()},slideNext:function(){this.$refs["form-workshop-schedule"].slideNext()},sliderUpdated:function(){}}),created:function(){var t=this,s={course:"lifestyle",type:"adults"};Object(o["a"])(s).then((function(s){t.groups=t.filterData(s).slice(0,t.propItems)}),(function(t){console.warn(t)}))},mounted:function(){}},d=n,u=(i("cf65"),i("2877")),p=Object(u["a"])(d,a,c,!1,null,null,null);s["a"]=p.exports},a3d7:function(t,s){t.exports="data:image/png;base64,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"},b7fe:function(t,s,i){},cf65:function(t,s,i){"use strict";var a=i("b7fe"),c=i.n(a);c.a}}]);
//# sourceMappingURL=chunk-7c508ce6.a89fe35c.js.map