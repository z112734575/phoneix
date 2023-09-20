import{r as e}from"./index-1d9eda3c.js";import{u as t}from"./useTable-c4d92dac.js";import{d as a,k as l,q as o,e as s,F as r,r as i,o as m,c as u,w as p,a as n,f as d,A as _,t as c,i as f,I as j,J as v}from"./index-427d9318.js";import{_ as y}from"./Table.vue_vue_type_script_lang-471ec74a.js";import{E as g}from"./el-button-a89cf6e4.js";import{E as b}from"./el-tag-da1a6221.js";import{_ as x}from"./Search.vue_vue_type_script_setup_true_lang-20cd3775.js";import{_ as D}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0c276bdf.js";import{_ as w}from"./Write.vue_vue_type_script_setup_true_lang-b20833d2.js";import{_ as k}from"./Dialog.vue_vue_type_style_index_0_lang-b17fd60c.js";import"./el-message-box-33abd66d.js";import"./el-input-7081a2de.js";import"./use-form-item-504f223f.js";import"./constants-13b63d0e.js";import"./use-form-common-props-61accfc6.js";import"./el-popper-d0dab626.js";import"./el-overlay-e8185139.js";import"./tsxHelper-157e5a3a.js";import"./debounce-f0d44d82.js";import"./vnode-5adb3a1c.js";import"./aria-ecee1d93.js";import"./el-image-viewer-75cd8402.js";import"./el-dropdown-item-4906f984.js";import"./refs-1e11eaf7.js";import"./Form-a065b4ea.js";import"./el-col-e3ce423d.js";import"./el-input-number-2158a2b3.js";import"./el-divider-099c5fb5.js";import"./InputPassword-1189e03b.js";import"./style.css_vue_type_style_index_0_src_true_lang-ffe29c3b.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-db5a1d6e.js";import"./index-70328ce4.js";import"./useForm-272d0a8f.js";import"./useIcon-7b2e2f68.js";import"./el-card-0fbcf589.js";import"./useValidator-1a25617a.js";import"./index-f976c824.js";import"./tree-b59d36bb.js";const h={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!v(e)}const T=a({__name:"Role",setup(a){const{t:v}=l(),{tableRegister:T,tableState:C,tableMethods:N}=t({fetchDataApi:async()=>{const t=await e.get({url:"/role/table"});return{list:t.data.list||[],total:t.data.total}}}),{dataList:S,loading:V,total:F}=C,{getList:I}=N,E=o([{field:"index",label:v("userDemo.index"),type:"index"},{field:"roleName",label:v("role.roleName")},{field:"role",label:v("role.role")},{field:"status",label:v("menu.status"),slots:{default:e=>s(r,null,[s(b,{type:0===e.row.status?"danger":"success"},{default:()=>[1===e.row.status?v("userDemo.enable"):v("userDemo.disable")]})])}},{field:"createTime",label:v("tableDemo.displayTime")},{field:"remark",label:v("userDemo.remark")},{field:"action",label:v("userDemo.action"),width:240,slots:{default:e=>{let t,a;const l=e.row;return s(r,null,[s(g,{type:"primary",onClick:()=>M(l,"edit")},R(t=v("exampleDemo.edit"))?t:{default:()=>[t]}),s(g,{type:"danger"},R(a=v("exampleDemo.del"))?a:{default:()=>[a]})])}}}]),J=o([{field:"roleName",label:v("role.roleName"),component:"Input"}]),O=i({}),A=e=>{O.value=e,I()},H=i(!1),L=i(""),P=i(),W=i(""),q=i(),G=i(!1),M=(e,t)=>{L.value=v("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),W.value=t,P.value=e,H.value=!0},Q=()=>{L.value=v("exampleDemo.add"),P.value=void 0,H.value=!0,W.value=""},U=async()=>{const e=n(q);await(null==e?void 0:e.submit())&&(G.value=!0,setTimeout((()=>{G.value=!1,H.value=!1}),1e3))};return(e,t)=>(m(),u(r,null,[s(n(D),null,{default:p((()=>[s(n(x),{schema:J,onReset:A,onSearch:A},null,8,["schema"]),d("div",h,[s(n(g),{type:"primary",onClick:Q},{default:p((()=>[_(c(n(v)("exampleDemo.add")),1)])),_:1})]),s(n(y),{columns:E,"default-expand-all":"","node-key":"id",data:n(S),loading:n(V),pagination:{total:n(F)},onRegister:n(T)},null,8,["columns","data","loading","pagination","onRegister"])])),_:1}),s(n(k),{modelValue:H.value,"onUpdate:modelValue":t[1]||(t[1]=e=>H.value=e),title:L.value},{footer:p((()=>["detail"!==W.value?(m(),f(n(g),{key:0,type:"primary",loading:G.value,onClick:U},{default:p((()=>[_(c(n(v)("exampleDemo.save")),1)])),_:1},8,["loading"])):j("",!0),s(n(g),{onClick:t[0]||(t[0]=e=>H.value=!1)},{default:p((()=>[_(c(n(v)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["detail"!==W.value?(m(),f(w,{key:0,ref_key:"writeRef",ref:q,"current-row":P.value},null,8,["current-row"])):j("",!0)])),_:1},8,["modelValue","title"])],64))}});export{T as default};
