import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-778a907f.js";import{d as t,k as a,q as o,e as l,o as i,i as r,w as s,a as p,L as n,N as m,_ as d}from"./index-9d549fd9.js";import{_ as c}from"./Table.vue_vue_type_script_lang-0134bb43.js";import{a as u}from"./index-a0409e46.js";import{E as b}from"./el-tag-5b007703.js";import{E as g}from"./el-button-24608b2a.js";import{u as f}from"./useTable-0ed3f5b4.js";import"./el-card-43fcd2a1.js";import"./el-popper-586d91b2.js";import"./constants-7fae2e2d.js";import"./tsxHelper-2c6371d0.js";import"./el-input-c0ee25c4.js";import"./use-form-item-684e4427.js";import"./use-form-common-props-fb387485.js";import"./debounce-add20b17.js";import"./el-image-viewer-526b0ed6.js";import"./el-dropdown-item-29f89f9f.js";import"./castArray-e849f4d4.js";import"./refs-3ffd1a61.js";import"./index-4f9a15b9.js";import"./el-message-box-057ce1c7.js";import"./el-overlay-edda02cc.js";import"./vnode-3f658d6a.js";import"./aria-ecee1d93.js";const j=d(t({__name:"TreeTable",setup(t){const{tableRegister:d,tableState:j}=f({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=j,a=await u({pageIndex:p(e),pageSize:p(t)});return{list:a.data.list,total:a.data.total}}}),{loading:_,dataList:y,total:v,currentPage:D,pageSize:x}=j,{t:S}=a(),w=o([{field:"selection",type:"selection"},{field:"index",label:S("tableDemo.index"),type:"index"},{field:"content",label:S("tableDemo.header"),children:[{field:"title",label:S("tableDemo.title")},{field:"author",label:S("tableDemo.author")},{field:"display_time",label:S("tableDemo.displayTime")},{field:"importance",label:S("tableDemo.importance"),formatter:(e,t,a)=>l(b,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[S(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:S("tableDemo.pageviews")}]},{field:"action",label:S("tableDemo.action"),slots:{default:e=>{let t;return l(g,{type:"primary",onClick:()=>z(e)},"function"==typeof(a=t=S("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!m(a)?t:{default:()=>[t]});var a}}}]),z=e=>{};return(t,a)=>(i(),r(p(e),{title:`${p(S)("router.treeTable")} ${p(S)("tableDemo.example")}`},{default:s((()=>[l(p(c),{pageSize:p(x),"onUpdate:pageSize":a[0]||(a[0]=e=>n(x)?x.value=e:null),currentPage:p(D),"onUpdate:currentPage":a[1]||(a[1]=e=>n(D)?D.value=e:null),columns:w,data:p(y),"row-key":"id",loading:p(_),sortable:"",pagination:{total:p(v)},onRegister:p(d)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"]))}}),[["__scopeId","data-v-052ba654"]]);export{j as default};
