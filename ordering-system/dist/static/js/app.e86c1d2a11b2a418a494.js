webpackJsonp([1],{"+80T":function(t,e){},"7cqe":function(t,e){},"8h6u":function(t,e){},BKhw:function(t,e){},DSCh:function(t,e){},Inzo:function(t,e){},"JL/8":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-header"}},[s("header",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"py-2",attrs:{to:"/"}},[s("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),t._v(" "),s("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),t._v(" "),s("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),t._v(" "),s("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),t._v(" "),s("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),t._v(" "),s("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),t._v(" "),s("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])]),t._v(" "),s("a",{staticClass:"navbar-brand ",attrs:{href:"/"}},[t._v("Pizza点餐系统")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav"},[s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"homeLink"}}},[t._v("主页")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"menuLink"}}},[t._v("菜单")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"adminLink"}}},[t._v("管理")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"aboutLink"}}},[t._v("关于我们")])],1)]),t._v(" "),s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",[s("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:{name:"loginLink"}}},[t._v("登录")])],1),t._v(" "),s("li",{staticClass:"nav-link"},[t._v("\n                        "+t._s(t.currentUser)+"\n                    ")]),t._v(" "),s("li",[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"nav-link",attrs:{to:{name:"loginLink"}}},[t._v("\n                          [退出]\n                        ")])],1),t._v(" "),s("li",[s("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:{name:"registerLink"}}},[t._v("注册")])],1)])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var i={name:"App",components:{"app-header":s("VU/8")({name:"app-header",data:function(){return{}},computed:{currentUser:function(){return this.$store.getters.currentUser},isLogin:function(){return this.$store.getters.isLogin}}},n,!1,function(t){s("8h6u")},"data-v-b123c484",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("app-header")],1),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"guide"}})],1),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"delivery"}})],1),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"history"}})],1)])])])},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("+80T")},null,null).exports,c=s("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[e("div",{staticClass:"background"},[e("h1",[this._v("欢迎大家品尝pizza!")]),this._v(" "),e("h2",[this._v("这里有你喜爱的pizza")]),this._v(" "),e("button",{staticClass:"btn btn-success",on:{click:this.goToMenu}},[this._v("Let's order!")])])])])},staticRenderFns:[]};var u=s("VU/8")({name:"home",methods:{goToMenu:function(){this.$router.push({name:"menuLink"})}}},l,!1,function(t){s("Inzo")},"data-v-2bf5d285",null).exports,v=s("mtWM"),m=s.n(v),d={name:"Menu",data:function(){return{baskets:[],basketText:"购物车中没有任何商品"}},computed:{getMenuItems:function(){return this.$store.getters.getMenuItems},total:function(){var t=0;for(var e in this.baskets){var s=this.baskets[e];t+=s.quantity*s.price}return t}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("menu.json").then(function(e){t.$store.commit("setMenuItems",e.data)})},addToBasket:function(t,e){var s={name:t.name,size:e.size,price:e.price,quantity:1};if(this.baskets.length>0){var a=this.baskets.filter(function(s){return s.name===t.name&&s.price===e.price});null!=a&&a.length>0?a[0].quantity++:this.baskets.push(s)}else this.baskets.push(s)},decreaseQuantity:function(t){t.quantity--,t.quantity<=0&&this.removeBasket(t)},increaseQuantity:function(t){t.quantity++},removeBasket:function(t){this.baskets.splice(this.baskets.indexOf(t),1)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-8"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMenuItems,function(e){return s("tbody",{key:e.name},[s("tr",[s("td",[s("strong",[t._v(t._s(e.name))])])]),t._v(" "),t._l(e.options,function(a){return s("tr",{key:a.size},[s("td",[t._v(t._s(a.size))]),t._v(" "),s("td",[t._v(t._s(a.price))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(s){t.addToBasket(e,a)}}},[t._v("+")])])])})],2)})],2)]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[t.baskets.length>0?s("div",[s("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.baskets,function(e){return s("tbody",{key:e.name},[s("tr",[s("td",[s("button",{staticClass:"btn  btn-sm",on:{click:function(s){t.decreaseQuantity(e)}}},[t._v("-")]),t._v(" "),s("span",[t._v(t._s(e.quantity))]),t._v(" "),s("button",{staticClass:"btn  btn-sm",on:{click:function(s){t.increaseQuantity(e)}}},[t._v("+")])]),t._v(" "),s("td",[t._v(t._s(e.name)+t._s(e.size))]),t._v(" "),s("td",[t._v(t._s(e.price*e.quantity))])])])})],2),t._v(" "),s("p",[t._v("总价："+t._s(t.total+"RMB"))]),t._v(" "),s("button",{staticClass:"btn btn-success btn-block"},[t._v("提交")])]):s("div",{staticClass:"text-center mt-5"},[t._v("\n            "+t._s(t.basketText)+"\n        ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-default"},[e("tr",[e("th",[this._v("尺寸 (寸)")]),this._v(" "),e("th",[this._v("价格 (￥)")]),this._v(" "),e("th",[this._v("加入")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-default"},[e("tr",[e("th",[this._v("数量")]),this._v(" "),e("th",[this._v("品种")]),this._v(" "),e("th",[this._v("价格")])])])}]};var h=s("VU/8")(d,p,!1,function(t){s("Us/M")},"data-v-508d9ae0",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("h3",{staticClass:"text-muted my-5"},[t._v("添加新的Pizza")]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("品种")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.name,expression:"newPizza.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.name},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("描述")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.description,expression:"newPizza.description"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.newPizza.description},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"description",e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size1,expression:"newPizza.size1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size1},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"size1",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("价格")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price1,expression:"newPizza.price1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price1},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"price1",e.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size2,expression:"newPizza.size2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size2},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"size2",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-1"},[t._v("价格")]),t._v(" "),s("div",{staticClass:"col-sm-11"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price2,expression:"newPizza.price2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price2},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"price2",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button"},on:{click:t.addMenuItem}},[t._v("添加")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("选项1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("选项2")])])}]};var _={name:"Admin",components:{newpizza:s("VU/8")({data:function(){return{newPizza:{}}},methods:{addMenuItem:function(){var t=this,e={name:this.newPizza.name,description:this.newPizza.description,options:[{size:this.newPizza.size1,price:this.newPizza.price1},{size:this.newPizza.size2,price:this.newPizza.price2}]};this.http.post("menu.json",e).then(function(s){t.$store.commit("addToMenuItems",e)}),this.newPizza={}}}},f,!1,function(t){s("jyb+")},"data-v-eaff9b08",null).exports},computed:{getMenuItems:{get:function(){return this.$store.getters.getMenuItems},set:function(){}}},created:function(){var t=this;fetch("https://wd3441785329pgyufa.wilddogio.com/menu.json").then(function(t){return t.json()}).then(function(e){var s=[];for(var a in e)e[a].id=a,s.push(e[a]);t.$store.commit("setMenuItems",s)})},methods:{deleteData:function(t){var e=this;fetch("https://wd3441785329pgyufa.wilddogio.com/menu/"+t.id+"/.json",{method:"DELETE",headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(s){e.$store.commit("removeMenuItems",t)}).then(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-8"},[s("newpizza")],1),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("h3",{staticClass:"text-muted my-5"},[t._v("Menu")]),t._v(" "),s("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMenuItems,function(e){return s("tbody",{key:e.name},[s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(s){t.deleteData(e)}}},[t._v("×")])])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"table table-default"},[e("tr",[e("th",[this._v("品种")]),this._v(" "),e("th",[this._v("删除")])])])}]};var b=s("VU/8")(_,g,!1,function(t){s("tUAw")},"data-v-5770d05c",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-4"},[s("ul",{staticClass:"list-group mb-5"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"historyLink"}}},[s("a",{staticClass:"list-group-item list-group-item-action"},[t._v("历史订单")])]),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"guideLink"}}},[s("a",{staticClass:"list-group-item list-group-item-action"},[t._v("点餐文档")])]),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"deliveryLink"}}},[s("a",{staticClass:"list-group-item list-group-item-action"},[t._v("快递信息")])]),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"contactLink"}}},[s("a",{staticClass:"list-group-item list-group-item-action"},[t._v("联系我们")])])],1)]),t._v(" "),s("div",{staticClass:"col-8"},[s("router-view")],1)])])},staticRenderFns:[]};var w=s("VU/8")({name:"about"},C,!1,function(t){s("cUeD")},"data-v-47e6d5a8",null).exports,z={name:"login",data:function(){return{email:"",password:""}},beforeRouteEnter:function(t,e,s){s(function(t){t.$store.dispatch("setUser",null)})},methods:{onSubmit:function(){var t=this;m.a.get("/users.json").then(function(e){var s=e.data,a=[];for(var n in s){var i=s[n];a.push(i)}var r=a.filter(function(e){return e.email===t.email&&e.password===t.password});null!=r&&r.length>0?(t.$store.dispatch("setUser",r[0].email),t.$router.push({name:"homeLink"})):(alert("账号或密码错误!"),t.$store.dispatch("setUser",null))})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12 col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"mx-auto d-block",attrs:{src:s("fqxG"),alt:""}}),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("登录")])])])])])])},staticRenderFns:[]};var x=s("VU/8")(z,k,!1,function(t){s("7cqe")},"data-v-5bddc7ca",null).exports,y={name:"Register",data:function(){return{email:"",password:"",confirmPassword:""}},methods:{onSubmit:function(){var t=this;if(this.password===this.confirmPassword){var e={email:this.email,password:this.password,confirmPassword:this.confirmPassword};m.a.post("/users.json",e).then(function(e){t.$router.push({name:"loginLink"})})}else alert("两次密码不一致")}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12 col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"mx-auto d-block",attrs:{src:s("fqxG"),alt:""}}),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"confirmPassword"}},[t._v("确认密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("注册")])])])])])])},staticRenderFns:[]};var L=s("VU/8")(y,P,!1,function(t){s("r5RV")},"data-v-715473fc",null).exports,$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-header"},[t._v("联系我们")]),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("联系我们")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("123456789@qq.com")]),t._v(" "),s("router-link",{attrs:{to:{name:"personOne"}}},[t._v("联系人1 ")]),t._v(" "),s("router-link",{attrs:{to:{name:"personTwo"}}},[t._v(" 联系人2")]),t._v(" "),s("router-view")],1)])},staticRenderFns:[]};var U=s("VU/8")({name:"Contact"},$,!1,function(t){s("uvdM")},"data-v-50fb9fc8",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("快递信息")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("联系我们")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("123456789@qq.com")])])])}]};var M=s("VU/8")({name:"Delivery"},E,!1,function(t){s("ixjg")},"data-v-114bf4e0",null).exports,I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("点餐文档")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("联系我们")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("123456789@qq.com")])])])}]};var q=s("VU/8")({name:"Guide"},I,!1,function(t){s("DSCh")},"data-v-b9868260",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("历史订单")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("联系我们")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("123456789@qq.com")])])])}]};var N=s("VU/8")({name:"History"},R,!1,function(t){s("h5uL")},"data-v-a8e84b88",null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("联系人1")])},staticRenderFns:[]};var j={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("联系人2")])},staticRenderFns:[]};var D=[{path:"/",name:"homeLink",components:{default:u,guide:q,delivery:M,history:N}},{path:"/menu",component:h,name:"menuLink"},{path:"/admin",component:b,name:"adminLink"},{path:"/about",component:w,name:"aboutLink",redirect:"/about/contact",children:[{path:"/about/contact",component:U,name:"contactLink",redirect:"/about/contact/personone",children:[{path:"/about/contact/personone",component:s("VU/8")({name:"Phone"},V,!1,function(t){s("JL/8")},"data-v-57362b92",null).exports,name:"personOne"},{path:"/about/contact/persontwo",component:s("VU/8")({name:"Person"},j,!1,function(t){s("BKhw")},"data-v-6b942f44",null).exports,name:"personTwo"}]},{path:"/about/delivery",component:M,name:"deliveryLink"},{path:"/about/history",component:N,name:"historyLink"},{path:"/about/guide",component:q,name:"guideLink"}]},{path:"/login",component:x,name:"loginLink"},{path:"/register",component:L,name:"registerLink"},{path:"*",redirect:"/"}],F=s("NYxO");a.a.use(F.a);var T=new F.a.Store({state:{menuItems:{},currentUser:null,isLogin:!1},getters:{getMenuItems:function(t){return t.menuItems},currentUser:function(t){return t.currentUser},isLogin:function(t){return t.isLogin}},mutations:{setMenuItems:function(t,e){t.menuItems=e},removeMenuItems:function(t,e){t.menuItems.forEach(function(s,a){s===e&&t.menuItems.splice(a,1)})},addToMenuItems:function(t,e){t.menuItems.push(e)},userStatus:function(t,e){e?(t.currentUser=e,t.isLogin=!0):(t.currentUser=null,t.isLogin=!1)}},actions:{setUser:function(t,e){(0,t.commit)("userStatus",e)}}});a.a.config.productionTip=!1,a.a.use(c.a),m.a.defaults.baseURL="https://wd3441785329pgyufa.wilddogio.com/",a.a.prototype.http=m.a;var B=new c.a({routes:D,mode:"history",scrollBehavior:function(t,e,s){return s||{x:0,y:100}}});B.beforeEach(function(t,e,s){!1===T.getters.isLogin?"/login"===t.path||"/register"===t.path?s():(alert("请先登录"),s("/login")):s()}),new a.a({el:"#app",router:B,store:T,components:{App:o},template:"<App/>"})},"Us/M":function(t,e){},cUeD:function(t,e){},fqxG:function(t,e,s){t.exports=s.p+"static/img/icon.c43f32c.png"},h5uL:function(t,e){},ixjg:function(t,e){},"jyb+":function(t,e){},r5RV:function(t,e){},tUAw:function(t,e){},uvdM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e86c1d2a11b2a418a494.js.map