import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-732f57a4.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-417eb7c0.js";import{d as s,u as r,k as o,r as i,o as a,i as p,w as m,e as l,a as u,A as n,t as j}from"./index-c0be9370.js";import{E as _}from"./el-button-cb192b85.js";import{s as d}from"./index-aace7e01.js";import{u as c}from"./useEmitt-0382ea70.js";import"./Form-da70841d.js";/* empty css                     */import"./el-col-fa93a7e8.js";import"./el-input-672132e8.js";import"./use-form-item-6cc63f21.js";import"./constants-d9525e9a.js";import"./use-form-common-props-e7a4e719.js";import"./el-popper-61db0e70.js";/* empty css               */import"./el-checkbox-af437bef.js";import"./el-radio-de021e8d.js";import"./el-input-number-656458af.js";import"./tsxHelper-c950d99e.js";import"./index-4b589e26.js";import"./debounce-9f8549a2.js";import"./el-divider-c131d898.js";import"./InputPassword-734a89bd.js";import"./style.css_vue_type_style_index_0_src_true_lang-7d7888dc.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-1a2d8b9d.js";import"./validator-d5cbbe2d.js";import"./index-3346ec29.js";import"./index-e5ad0c28.js";import"./castArray-7359ec2a.js";import"./useForm-0f679786.js";import"./useValidator-38eaaa93.js";import"./el-card-d5e7fc52.js";import"./index-e11017c9.js";const f=s({__name:"ExampleAdd",setup(s){const{emitter:f}=c(),{push:x,go:v}=r(),{t:g}=o(),y=i(),k=i(!1),b=async()=>{const e=u(y),t=await(null==e?void 0:e.submit());if(t){k.value=!0;await d(t).catch((()=>{})).finally((()=>{k.value=!1}))&&(f.emit("getList","add"),x("/example/example-page"))}};return(s,r)=>(a(),p(u(t),{title:u(g)("exampleDemo.add"),onBack:r[1]||(r[1]=e=>u(x)("/example/example-page"))},{header:m((()=>[l(u(_),{onClick:r[0]||(r[0]=e=>u(v)(-1))},{default:m((()=>[n(j(u(g)("common.back")),1)])),_:1}),l(u(_),{type:"primary",loading:k.value,onClick:b},{default:m((()=>[n(j(u(g)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:m((()=>[l(e,{ref_key:"writeRef",ref:y},null,512)])),_:1},8,["title"]))}});export{f as default};
