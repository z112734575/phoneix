import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-c4be74e4.js";import{d as t,u as a,o as s,i as r,w as o,e as i,a as p,A as l}from"./index-c0be9370.js";import{E as m}from"./el-button-cb192b85.js";import{u as n}from"./useTagsView-fdcdba87.js";import"./el-card-d5e7fc52.js";import"./el-popper-61db0e70.js";import"./constants-d9525e9a.js";import"./use-form-item-6cc63f21.js";import"./use-form-common-props-e7a4e719.js";const u=t({__name:"useTagsView",setup(t){const{push:u}=a(),{closeAll:d,closeLeft:y,closeRight:c,closeOther:f,closeCurrent:_,refreshPage:g,setTitle:C}=n(),j=()=>{d((()=>{u("/dashboard/analysis")}))},k=()=>{y()},h=()=>{c()},w=()=>{f()},T=()=>{g()},b=()=>{_(void 0,(()=>{u("/dashboard/analysis")}))},v=()=>{C((new Date).getTime().toString())},V=()=>{C(`分析页-${(new Date).getTime().toString()}`,"/dashboard/analysis")};return(t,a)=>(s(),r(p(e),{title:"useTagsView"},{default:o((()=>[i(p(m),{type:"primary",onClick:j},{default:o((()=>[l(" 关闭所有标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:k},{default:o((()=>[l(" 关闭左侧标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:h},{default:o((()=>[l(" 关闭右侧标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:w},{default:o((()=>[l(" 关闭其他标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:b},{default:o((()=>[l(" 关闭当前标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:T},{default:o((()=>[l(" 刷新当前标签页 ")])),_:1}),i(p(m),{type:"primary",onClick:v},{default:o((()=>[l(" 修改当前标题 ")])),_:1}),i(p(m),{type:"primary",onClick:V},{default:o((()=>[l(" 修改分析页标题 ")])),_:1})])),_:1}))}});export{u as default};