import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-397bc57a.js";import{d as t,k as a,e as i,r as o,o as l,i as r,w as s,a as m}from"./index-9ba779aa.js";import{_ as p}from"./Table.vue_vue_type_script_lang-0ff648be.js";import{g as n}from"./index-42a9a885.js";/* empty css               */import{E as d}from"./index-50488b30.js";import"./el-card-2843f4b5.js";import"./el-popper-f373e513.js";import"./constants-6c1edf05.js";import"./el-table-column-eec988c8.js";import"./el-checkbox-2d13a70c.js";import"./el-input-b6290eb4.js";import"./use-form-item-56e55b92.js";import"./use-form-common-props-a39ae220.js";import"./debounce-f3112897.js";import"./tsxHelper-3c8a9ef7.js";import"./el-button-30bd890c.js";import"./el-image-viewer-afb990b6.js";import"./el-dropdown-item-f54efffd.js";import"./castArray-74f47bea.js";import"./refs-a42d17d5.js";import"./index-df9b2e4d.js";const u=t({__name:"TableImagePreview",setup(t){const{t:u}=a(),c=[{field:"title",label:u("tableDemo.title")},{field:"image_uri",label:u("tableDemo.preview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"importance",label:u("tableDemo.importance"),formatter:(e,t,a)=>i(d,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[u(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:u("tableDemo.pageviews")}],j=o(!0);let b=o([]);return(async e=>{const t=await n(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(b.value=t.data.list)})(),(t,a)=>(l(),r(m(e),{title:m(u)("router.PicturePreview")},{default:s((()=>[i(m(p),{columns:c,data:m(b),loading:j.value,preview:["image_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};
