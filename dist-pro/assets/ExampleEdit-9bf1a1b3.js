import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-732f57a4.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-417eb7c0.js";import{d as s,u as r,d7 as o,k as i,r as a,o as p,i as m,w as l,e as u,a as n,A as j,t as _}from"./index-c0be9370.js";import{E as d}from"./el-button-cb192b85.js";import{b as c,s as f}from"./index-aace7e01.js";import{u as x}from"./useEmitt-0382ea70.js";import"./Form-da70841d.js";/* empty css                     */import"./el-col-fa93a7e8.js";import"./el-input-672132e8.js";import"./use-form-item-6cc63f21.js";import"./constants-d9525e9a.js";import"./use-form-common-props-e7a4e719.js";import"./el-popper-61db0e70.js";/* empty css               */import"./el-checkbox-af437bef.js";import"./el-radio-de021e8d.js";import"./el-input-number-656458af.js";import"./tsxHelper-c950d99e.js";import"./index-4b589e26.js";import"./debounce-9f8549a2.js";import"./el-divider-c131d898.js";import"./InputPassword-734a89bd.js";import"./style.css_vue_type_style_index_0_src_true_lang-7d7888dc.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-1a2d8b9d.js";import"./validator-d5cbbe2d.js";import"./index-3346ec29.js";import"./index-e5ad0c28.js";import"./castArray-7359ec2a.js";import"./useForm-0f679786.js";import"./useValidator-38eaaa93.js";import"./el-card-d5e7fc52.js";import"./index-e11017c9.js";const v=s({__name:"ExampleEdit",setup(s){const{emitter:v}=x(),{push:y,go:g}=r(),{query:w}=o(),{t:b}=i(),k=a(null);(async()=>{const e=await c(w.id);e&&(k.value=e.data)})();const h=a(),E=a(!1),C=async()=>{const e=n(h),t=await(null==e?void 0:e.submit());if(t){E.value=!0;await f(t).catch((()=>{})).finally((()=>{E.value=!1}))&&(v.emit("getList","editor"),y("/example/example-page"))}};return(s,r)=>(p(),m(n(t),{title:n(b)("exampleDemo.edit"),onBack:r[1]||(r[1]=e=>n(y)("/example/example-page"))},{header:l((()=>[u(n(d),{onClick:r[0]||(r[0]=e=>n(g)(-1))},{default:l((()=>[j(_(n(b)("common.back")),1)])),_:1}),u(n(d),{type:"primary",loading:E.value,onClick:C},{default:l((()=>[j(_(n(b)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:l((()=>[u(e,{ref_key:"writeRef",ref:h,"current-row":k.value},null,8,["current-row"])])),_:1},8,["title"]))}});export{v as default};
