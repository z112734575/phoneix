import{i as e,F as o}from"./Form-a065b4ea.js";import{d as s,R as a,k as t,o as n,c as i,i as l,w as r,A as d,t as c,a as h,I as u,F as m,r as p,x as f,a$ as g,N as w,e as b,K as v,S as x,W as y,cF as E,cG as S,s as F}from"./index-427d9318.js";import{u as k}from"./useForm-272d0a8f.js";import{E as L}from"./el-button-a89cf6e4.js";import{u as R}from"./useIcon-7b2e2f68.js";const j=s({__name:"ActionButton",props:{showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),visible:a.bool.def(!0),searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:o}){const{t:s}=t(),a=()=>{o("search")},p=()=>{o("reset")},f=()=>{o("expand")};return(o,t)=>(n(),i(m,null,[e.showSearch?(n(),l(h(L),{key:0,type:"primary",loading:e.searchLoading,icon:h(R)({icon:"ep:search"}),onClick:a},{default:r((()=>[d(c(h(s)("common.query")),1)])),_:1},8,["loading","icon"])):u("",!0),e.showReset?(n(),l(h(L),{key:1,loading:e.resetLoading,icon:h(R)({icon:"ep:refresh-right"}),onClick:p},{default:r((()=>[d(c(h(s)("common.reset")),1)])),_:1},8,["loading","icon"])):u("",!0),e.showExpand?(n(),l(h(L),{key:2,icon:h(R)({icon:e.visible?"ep:arrow-down":"ep:arrow-up"}),text:"",onClick:f},{default:r((()=>[d(c(h(s)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):u("",!0)],64))}}),_=s({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:a.bool.def(!1),labelWidth:a.oneOfType([String,Number]).def("auto"),layout:a.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:a.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),expandField:a.string.def(""),inline:a.bool.def(!0),removeNoValueItem:a.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","register","validate"],setup(s,{expose:a,emit:t}){const l=s,r=p(!0),d=p(l.model),c=f((()=>{const e=h(A);let o=g(e.schema);if(e.showExpand&&e.expandField&&!h(r)){const s=w(o,(o=>o.field===e.expandField));o.map(((e,o)=>(e.hidden=o>=s,e)))}return"inline"===e.layout&&(o=o.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>b("div",null,[b(j,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:r.value,onExpand:B,onReset:W,onSearch:P},null)])}}}])),o})),{formRegister:L,formMethods:R}=k(),{getElFormExpose:_,getFormData:O,getFormExpose:C}=R,I=p({}),V=p({}),A=f((()=>{const e={...l};return Object.assign(e,h(V)),e}));v((()=>h(c)),(async(o=[])=>{d.value=e(o,h(d))}),{immediate:!0,deep:!0});const N=async()=>{const e=await O();return h(A).removeNoValueItem?Object.keys(e).reduce(((o,s)=>{const a=e[s];return E(a)||(S(a)?Object.keys(a).length>0&&(o[s]=a):o[s]=a),o}),{}):e},P=async()=>{const e=await _();await(null==e?void 0:e.validate((async e=>{if(e){const e=await N();t("search",e)}})))},W=async()=>{const e=await _();null==e||e.resetFields();const o=await N();t("reset",o)},q=f((()=>({textAlign:h(A).buttonPosition}))),B=async()=>{r.value=!h(r)},D={getElFormExpose:_,setProps:(e={})=>{V.value=Object.assign(h(V),e),I.value=e},setSchema:e=>{const{schema:o}=h(A);for(const s of o)for(const o of e)s.field===o.field&&F(s,o.path,o.value)},setValues:async(e={})=>{d.value=Object.assign(l.model,h(d),e);const o=await C();null==o||o.setValues(e)},delSchema:e=>{const{schema:o}=h(A),s=w(o,(o=>o.field===e));s>-1&&o.splice(s,1)},addSchema:(e,o)=>{const{schema:s}=h(A);void 0===o?s.push(e):s.splice(o,0,e)}};x((()=>{t("register",D)})),a(D);const G=(e,o,s)=>{t("validate",e,o,s)};return(e,a)=>(n(),i(m,null,[b(h(o),{model:d.value,"is-custom":!1,"label-width":A.value.labelWidth,"hide-required-asterisk":"",inline:A.value.inline,"is-col":A.value.isCol,schema:c.value,onRegister:h(L),onValidate:G},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===s.layout?(n(),i("div",{key:0,style:y(q.value)},[b(j,{"show-reset":A.value.showReset,"show-search":A.value.showSearch,"show-expand":A.value.showExpand,"search-loading":A.value.searchLoading,"reset-loading":A.value.resetLoading,onExpand:B,onReset:W,onSearch:P},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):u("",!0)],64))}});export{_};
