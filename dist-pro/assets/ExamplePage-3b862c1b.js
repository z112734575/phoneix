import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-397bc57a.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-826af5e7.js";import{d as a,u as o,r as l,k as i,q as s,e as r,F as n,a as m,o as p,i as d,w as c,f as u,A as f,t as g,N as j,P as b}from"./index-9ba779aa.js";import{E as h}from"./el-button-30bd890c.js";/* empty css               */import{_}from"./Table.vue_vue_type_script_lang-0ff648be.js";import{g as v,d as x}from"./index-42a9a885.js";import{u as y}from"./useTable-1c5ecbf1.js";import{u as D}from"./useEmitt-ce4717fd.js";import{u as w}from"./useCrudSchemas-006e137c.js";import{E as P}from"./index-50488b30.js";import"./el-card-2843f4b5.js";import"./el-popper-f373e513.js";import"./constants-6c1edf05.js";import"./Form-874c0185.js";/* empty css                     */import"./el-col-756f5033.js";import"./el-input-b6290eb4.js";import"./use-form-item-56e55b92.js";import"./use-form-common-props-a39ae220.js";import"./el-checkbox-2d13a70c.js";import"./el-input-number-efc9382b.js";import"./tsxHelper-3c8a9ef7.js";import"./debounce-f3112897.js";import"./el-divider-15029e63.js";import"./InputPassword-8845e125.js";import"./style.css_vue_type_style_index_0_src_true_lang-2793828e.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-55079833.js";import"./aria-ecee1d93.js";import"./index-e3f2653f.js";import"./index-1b5c328e.js";import"./castArray-74f47bea.js";import"./useForm-69b88e83.js";import"./useIcon-4aca3e09.js";import"./el-table-column-eec988c8.js";import"./el-image-viewer-afb990b6.js";import"./el-dropdown-item-f54efffd.js";import"./refs-a42d17d5.js";import"./index-df9b2e4d.js";import"./el-message-box-c195dc53.js";import"./el-overlay-c338c3c3.js";import"./vnode-f2d1554b.js";import"./tree-b59d36bb.js";const S={class:"mb-10px"};function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}const C=a({name:"ExamplePage",__name:"ExamplePage",setup(a){const{push:b}=o(),C=l([]),E=l({}),z=e=>{E.value=e,M()},{tableRegister:I,tableState:R,tableMethods:F}=y({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=R,a=await v({pageIndex:m(e),pageSize:m(t),...m(E)});return{list:a.data.list,total:a.data.total}},fetchDelApi:async()=>!!(await x(m(C)))}),{loading:L,dataList:T,total:Y,currentPage:A,pageSize:H}=R,{getList:M,getElTableExpose:N,delList:U}=F;M(),D({name:"getList",callback:e=>{"add"===e&&(A.value=1),M()}});const{t:q}=i(),J=s([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:q("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:q("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:q("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:q("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:q("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>r(P,{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:()=>[1===e.importance?q("tableDemo.important"):2===e.importance?q("tableDemo.good"):q("tableDemo.commonly")]})}}},{field:"pageviews",label:q("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:q("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>r("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:q("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let t,a,o;return r(n,null,[r(h,{type:"primary",onClick:()=>K(e.row,"edit")},k(t=q("exampleDemo.edit"))?t:{default:()=>[t]}),r(h,{type:"success",onClick:()=>K(e.row,"detail")},k(a=q("exampleDemo.detail"))?a:{default:()=>[a]}),r(h,{type:"danger",onClick:()=>B(e.row)},k(o=q("exampleDemo.del"))?o:{default:()=>[o]})])}}}}]),{allSchemas:O}=w(J),W=()=>{b("/example/example-add")},$=l(!1),B=async e=>{const t=await N();C.value=e?[e.id]:(null==t?void 0:t.getSelectionRows().map((e=>e.id)))||[],$.value=!0,await U(m(C).length).finally((()=>{$.value=!1}))},K=(e,t)=>{b(`/example/example-${t}?id=${e.id}`)};return(a,o)=>(p(),d(m(e),null,{default:c((()=>[r(m(t),{schema:m(O).searchSchema,onSearch:z,onReset:z},null,8,["schema"]),u("div",S,[r(m(h),{type:"primary",onClick:W},{default:c((()=>[f(g(m(q)("exampleDemo.add")),1)])),_:1}),r(m(h),{loading:$.value,type:"danger",onClick:o[0]||(o[0]=e=>B(null))},{default:c((()=>[f(g(m(q)("exampleDemo.del")),1)])),_:1},8,["loading"])]),r(m(_),{pageSize:m(H),"onUpdate:pageSize":o[1]||(o[1]=e=>j(H)?H.value=e:null),currentPage:m(A),"onUpdate:currentPage":o[2]||(o[2]=e=>j(A)?A.value=e:null),columns:m(O).tableColumns,data:m(T),loading:m(L),pagination:{total:m(Y)},onRegister:m(I)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{C as default};
