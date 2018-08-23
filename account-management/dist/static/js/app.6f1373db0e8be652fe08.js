webpackJsonp([1],{"7YTX":function(t,e){},I26S:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-default"},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[s("ul",{staticClass:"nav navbar-nav"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("主页")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1)]),t._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("router-link",{attrs:{to:"/add"}},[t._v("添加用户")])],1)])])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})]),this._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[this._v("用户管理系统")])])}]};var r=s("VU/8")({name:"App",components:{}},o,!1,function(t){s("7YTX")},null,null).exports,n=s("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert"},[e("div",{staticClass:"alert alert-warning alert-dismissible",attrs:{role:"alert"}},[this._m(0),this._v("\n       "+this._s(this.message)+"\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var c=s("VU/8")({name:"alert",props:["message"],data:function(){return{}}},i,!1,function(t){s("nQqf")},"data-v-4cc63e54",null).exports,l={name:"customers",data:function(){return{customers:[],alert:"",search:""}},methods:{fetchCustomers:function(){var t=this;this.$http.get("/userList.json").then(function(t){return t.data}).then(function(e){var s=[];for(var a in e)e[a].id=a,s.push(e[a]);t.customers=s})}},computed:{filterBy:function(){var t=this;return this.customers.filter(function(e){return e.name.match(t.search)||e.phone.match(t.search)||e.email.match(t.search)})}},created:function(){this.$route.query.alert&&(this.alert=this.$route.query.alert),this.fetchCustomers()},updated:function(){this.fetchCustomers()},components:{Alert:c}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container"},[t.alert?s("alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("用户管理系统")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.filterBy,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/customer/"+e.id}},[t._v("详情")])],1)])}))])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("姓名")]),this._v(" "),e("th",[this._v("电话")]),this._v(" "),e("th",[this._v("邮箱")]),this._v(" "),e("th")])])}]};var m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about container"},[e("h1",{staticClass:"page-header"},[this._v("关于我们")])])}]};var p={name:"add",data:function(){return{customer:{},alert:""}},methods:{addCustomers:function(t){var e=this;if(this.customer.name&&this.customer.phone&&this.customer.email){var s={name:this.customer.name,phone:this.customer.phone,email:this.customer.email,education:this.customer.education,college:this.customer.college,occupation:this.customer.occupation,resume:this.customer.resume};this.$http.post("/userList.json",s).then(function(t){e.$router.push({path:"/",query:{alert:"用户信息添加成功"}})})}else this.alert="请输入对应的内容!";t.preventDefault()}},components:{Alert:c}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container"},[t.alert?s("alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("\n        添加用户\n    ")]),t._v(" "),s("form",{on:{submit:t.addCustomers}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("学历")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.education,expression:"customer.education"}],staticClass:"form-control",attrs:{type:"text",placeholder:"education"},domProps:{value:t.customer.education},on:{input:function(e){e.target.composing||t.$set(t.customer,"education",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("毕业学校")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.college,expression:"customer.college"}],staticClass:"form-control",attrs:{type:"text",placeholder:"college"},domProps:{value:t.customer.college},on:{input:function(e){e.target.composing||t.$set(t.customer,"college",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("职业")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.occupation,expression:"customer.occupation"}],staticClass:"form-control",attrs:{type:"text",placeholder:"occupation"},domProps:{value:t.customer.occupation},on:{input:function(e){e.target.composing||t.$set(t.customer,"occupation",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("个人简介")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.resume,expression:"customer.resume"}],staticClass:"form-control",attrs:{rows:"10",placeholder:"resume"},domProps:{value:t.customer.resume},on:{input:function(e){e.target.composing||t.$set(t.customer,"resume",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("添加")])])])],1)},staticRenderFns:[]};var d={name:"vdetails",data:function(){return{customer:{},id:this.$route.params.id}},methods:{deleteCustomer:function(){var t=this;this.$http.delete("/userList/"+this.id+".json").then(function(e){t.$router.push({path:"/",query:{alert:"用户删除成功"}})})}},created:function(){var t=this;this.$http.get("/userList/"+this.id+".json").then(function(e){console.log(e),t.customer=e.data})}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vdetails container"},[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/"}},[t._v("返回")]),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("\n        "+t._s(t.customer.name)+"\n        "),s("span",{staticClass:"pull-right"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/edit/"+t.id}},[t._v("\n            编辑\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteCustomer(t.customer.id)}}},[t._v("删除")])],1)]),t._v(" "),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-phone"},[t._v("\n                "+t._s(t.customer.phone)+"\n            ")])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-envelope"},[t._v("\n                "+t._s(t.customer.email)+"\n            ")])])]),t._v(" "),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-asterisk"},[t._v("\n                "+t._s(t.customer.education)+"\n            ")])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-home"},[t._v("\n                "+t._s(t.customer.college)+"\n            ")])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-lock"},[t._v("\n                "+t._s(t.customer.occupation)+"\n            ")])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-book"},[t._v("\n                "+t._s(t.customer.resume)+"\n            ")])])])],1)},staticRenderFns:[]};var _={name:"edit",data:function(){return{customer:{},id:this.$route.params.id,alert:""}},methods:{updateCustomers:function(t){var e=this;if(this.customer.name&&this.customer.phone&&this.customer.email){var s={name:this.customer.name,phone:this.customer.phone,email:this.customer.email,education:this.customer.education,college:this.customer.college,occupation:this.customer.occupation,resume:this.customer.resume};this.$http.put("/userList/"+this.id+".json",s).then(function(t){e.$router.push({path:"/",query:{alert:"用户信息修改成功"}})})}else this.alert="请输入修改的内容";t.preventDefault()}},created:function(){var t=this;this.$http.get("/userList/"+this.id+".json").then(function(e){t.customer=e.data})},components:{Alert:c}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit container"},[t.alert?s("alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("\n        编辑用户\n    ")]),t._v(" "),s("form",{on:{submit:t.updateCustomers}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("学历")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.education,expression:"customer.education"}],staticClass:"form-control",attrs:{type:"text",placeholder:"education"},domProps:{value:t.customer.education},on:{input:function(e){e.target.composing||t.$set(t.customer,"education",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("毕业学校")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.college,expression:"customer.college"}],staticClass:"form-control",attrs:{type:"text",placeholder:"college"},domProps:{value:t.customer.college},on:{input:function(e){e.target.composing||t.$set(t.customer,"college",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("职业")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.occupation,expression:"customer.occupation"}],staticClass:"form-control",attrs:{type:"text",placeholder:"occupation"},domProps:{value:t.customer.occupation},on:{input:function(e){e.target.composing||t.$set(t.customer,"occupation",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("个人简介")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.resume,expression:"customer.resume"}],staticClass:"form-control",attrs:{rows:"10",placeholder:"resume"},domProps:{value:t.customer.resume},on:{input:function(e){e.target.composing||t.$set(t.customer,"resume",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("修改")])])])],1)},staticRenderFns:[]};var g=[{path:"/",component:s("VU/8")(l,u,!1,function(t){s("i/kZ")},"data-v-8a5b4846",null).exports},{path:"/about",component:s("VU/8")({name:"about",data:function(){return{}}},m,!1,function(t){s("zCW6")},"data-v-a0c252f4",null).exports},{path:"/add",component:s("VU/8")(p,v,!1,function(t){s("kchS")},"data-v-f0b27f4c",null).exports},{path:"/customer/:id",component:s("VU/8")(d,h,!1,function(t){s("pFlY")},"data-v-5f7a08f4",null).exports},{path:"/edit/:id",component:s("VU/8")(_,f,!1,function(t){s("I26S")},"data-v-eb0f1722",null).exports},{path:"*",redirect:"/"}],C=s("mtWM"),b=s.n(C);a.a.config.productionTip=!1,a.a.use(n.a),b.a.defaults.baseURL="https://wd4305455737gmebse.wilddogio.com/",a.a.prototype.$http=b.a;var y=new n.a({routes:g,mode:"history"});new a.a({router:y,el:"#app",components:{App:r},template:"<App/>"})},"i/kZ":function(t,e){},kchS:function(t,e){},nQqf:function(t,e){},pFlY:function(t,e){},zCW6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6f1373db0e8be652fe08.js.map