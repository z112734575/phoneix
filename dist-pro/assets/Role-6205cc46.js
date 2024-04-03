import{r as e}from"./index-e11017c9.js";import{u as t}from"./useTable-2fa0ed18.js";import{d as a,k as l,q as o,e as s,F as r,r as i,o as m,c as u,w as p,a as n,f as d,A as _,t as c,i as j,U as f,H as v}from"./index-c0be9370.js";import{_ as y}from"./Table.vue_vue_type_script_lang-f33ccd30.js";import{E as b}from"./el-button-cb192b85.js";/* empty css               */import{_ as g}from"./Search.vue_vue_type_script_setup_true_lang-2c8e7131.js";import{_ as x}from"./ContentWrap.vue_vue_type_script_setup_true_lang-c4be74e4.js";import{_ as D}from"./Write.vue_vue_type_script_setup_true_lang-cad55c47.js";import{_ as w}from"./Dialog.vue_vue_type_style_index_0_lang-aa3b98b7.js";import{E as k}from"./index-4b589e26.js";import"./el-message-box-c152139e.js";import"./el-input-672132e8.js";import"./use-form-item-6cc63f21.js";import"./constants-d9525e9a.js";import"./use-form-common-props-e7a4e719.js";import"./el-overlay-4d59f036.js";import"./tsxHelper-c950d99e.js";import"./el-popper-61db0e70.js";import"./el-checkbox-af437bef.js";import"./debounce-9f8549a2.js";import"./vnode-9cd702af.js";import"./validator-d5cbbe2d.js";import"./el-table-column-b2f06189.js";import"./el-image-viewer-88e8367e.js";import"./el-dropdown-item-f1d61664.js";import"./castArray-7359ec2a.js";import"./refs-a031490a.js";import"./Form-da70841d.js";/* empty css                     */import"./el-col-fa93a7e8.js";import"./el-radio-de021e8d.js";import"./el-input-number-656458af.js";import"./el-divider-c131d898.js";import"./InputPassword-734a89bd.js";import"./style.css_vue_type_style_index_0_src_true_lang-7d7888dc.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-1a2d8b9d.js";import"./index-3346ec29.js";import"./index-e5ad0c28.js";import"./useForm-0f679786.js";import"./useIcon-56c09653.js";import"./el-card-d5e7fc52.js";import"./useValidator-38eaaa93.js";import"./index-78463734.js";import"./tree-b59d36bb.js";const h={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!v(e)}const C=a({__name:"Role",setup(a){const{t:v}=l(),{tableRegister:C,tableState:T,tableMethods:S}=t({fetchDataApi:async()=>{const t=await e.get({url:"/role/table"});return{list:t.data.list||[],total:t.data.total}}}),{dataList:V,loading:E,total:F}=T,{getList:N}=S,A=o([{field:"index",label:v("userDemo.index"),type:"index"},{field:"roleName",label:v("role.roleName")},{field:"role",label:v("role.role")},{field:"status",label:v("menu.status"),slots:{default:e=>s(r,null,[s(k,{type:0===e.row.status?"danger":"success"},{default:()=>[1===e.row.status?v("userDemo.enable"):v("userDemo.disable")]})])}},{field:"createTime",label:v("tableDemo.displayTime")},{field:"remark",label:v("userDemo.remark")},{field:"action",label:v("userDemo.action"),width:240,slots:{default:e=>{let t,a;const l=e.row;return s(r,null,[s(b,{type:"primary",onClick:()=>B(l,"edit")},R(t=v("exampleDemo.edit"))?t:{default:()=>[t]}),s(b,{type:"danger"},R(a=v("exampleDemo.del"))?a:{default:()=>[a]})])}}}]),H=o([{field:"roleName",label:v("role.roleName"),component:"Input"}]),I=i({}),L=e=>{I.value=e,N()},q=i(!1),M=i(""),O=i(),U=i(""),W=i(),z=i(!1),B=(e,t)=>{M.value=v("edit"===t?"exampleDemo.edit":"exampleDemo.detail"),U.value=t,O.value=e,q.value=!0},J=()=>{M.value=v("exampleDemo.add"),O.value=void 0,q.value=!0,U.value=""},P=async()=>{const e=n(W);await(null==e?void 0:e.submit())&&(z.value=!0,setTimeout((()=>{z.value=!1,q.value=!1}),1e3))};return(e,t)=>(m(),u(r,null,[s(n(x),null,{default:p((()=>[s(n(g),{schema:H,onReset:L,onSearch:L},null,8,["schema"]),d("div",h,[s(n(b),{type:"primary",onClick:J},{default:p((()=>[_(c(n(v)("exampleDemo.add")),1)])),_:1})]),s(n(y),{columns:A,"default-expand-all":"","node-key":"id",data:n(V),loading:n(E),pagination:{total:n(F)},onRegister:n(C)},null,8,["columns","data","loading","pagination","onRegister"])])),_:1}),s(n(w),{modelValue:q.value,"onUpdate:modelValue":t[1]||(t[1]=e=>q.value=e),title:M.value},{footer:p((()=>["detail"!==U.value?(m(),j(n(b),{key:0,type:"primary",loading:z.value,onClick:P},{default:p((()=>[_(c(n(v)("exampleDemo.save")),1)])),_:1},8,["loading"])):f("",!0),s(n(b),{onClick:t[0]||(t[0]=e=>q.value=!1)},{default:p((()=>[_(c(n(v)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["detail"!==U.value?(m(),j(D,{key:0,ref_key:"writeRef",ref:W,"current-row":O.value},null,8,["current-row"])):f("",!0)])),_:1},8,["modelValue","title"])],64))}});export{C as default};