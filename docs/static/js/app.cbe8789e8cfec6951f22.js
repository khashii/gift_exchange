webpackJsonp([1],{Hyl7:function(e,t){},M7OV:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:n("aqN9")}}),this._v(" "),t("h1",[this._v("Gift Exchange App")]),this._v(" "),t("hr"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("M7OV")},null,null).exports,c=n("/ocq"),a={name:"exchange_gift",data:()=>({msg:"Welcome to Gift Exchange App🎉",members:[{text:"hoge",select:!1,editting:!1,presentTo:null},{text:"fuga",select:!1,editting:!1,presentTo:null},{text:"piyo",select:!1,editting:!1,presentTo:null}],newMember:""}),methods:{addMember:function(){const e=this.newMember&&this.newMember.trim();e&&(this.members.push({text:e,select:!1}),this.newMember="")},removeMembers:function(){for(let e=this.members.length-1;e>=0;e--)this.members[e].select&&this.members.splice(e,1)},present:function(){const e=function(e){const t=e.slice();for(let e=t.length;e-- >1;){const n=~~(Math.random()*e);[t[n],t[e]]=[t[e],t[n]]}return e.reduce((e,n)=>(e[n]=t.shift(),e),{})}(this.members.map(e=>e.text));this.members=this.members.map(t=>(t.presentTo=e[t.text],t))}}};var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  "+e._s(e.msg)+"\n  "),n("form",[n("button",{on:{click:function(t){return e.addMember()}}},[e._v("ADD MEMBER")]),e._v(" "),n("button",{on:{click:function(t){return e.removeMembers()}}},[e._v("DELETE CHECKED MEMBERS")]),e._v(" "),n("p",[n("button",{on:{click:function(t){return e.present()}}},[e._v("🎁EXCHANGE GIFT🎁")])]),e._v(" "),n("p",[e._v("name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember,expression:"newMember"}],attrs:{type:"text"},domProps:{value:e.newMember},on:{input:function(t){t.target.composing||(e.newMember=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"member-list"},e._l(e.members,function(t){return n("label",{key:t.text,staticClass:"member-list__item",class:{"member-list__item-checked":t.select}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"member.select"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.select)?e._i(t.select,null)>-1:t.select},on:{change:function(n){var r=t.select,i=n.target,s=!!i.checked;if(Array.isArray(r)){var c=e._i(r,null);i.checked?c<0&&e.$set(t,"select",r.concat([null])):c>-1&&e.$set(t,"select",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(t,"select",s)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editting,expression:"member.editting"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.editting)?e._i(t.editting,null)>-1:t.editting},on:{change:function(n){var r=t.editting,i=n.target,s=!!i.checked;if(Array.isArray(r)){var c=e._i(r,null);i.checked?c<0&&e.$set(t,"editting",r.concat([null])):c>-1&&e.$set(t,"editting",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(t,"editting",s)}}}),e._v(" "),t.editting?n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"member.text"}],domProps:{value:t.text},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.editting=!t.editting},input:function(n){n.target.composing||e.$set(t,"text",n.target.value)}}}):n("span",[e._v(e._s(t.text))]),e._v(" "),t.presentTo?n("span",[e._v("  -> "+e._s(t.presentTo))]):e._e()])}),0)])},staticRenderFns:[]};var l=n("VU/8")(a,o,!1,function(e){n("Hyl7")},"data-v-395a6bee",null).exports;r.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"ExchangeGift",component:l}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:m,components:{App:s},template:"<App/>"})},aqN9:function(e,t,n){e.exports=n.p+"static/img/present_kuma.ea6e7b3.png"}},["NHnr"]);
//# sourceMappingURL=app.cbe8789e8cfec6951f22.js.map