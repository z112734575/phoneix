import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5ff0ae9d.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang-bf807779.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang-c0cd27d6.js";import{d as l,r as o,k as i,q as s,e as r,F as n,a as m,o as p,c as d,w as u,f as c,z as _,t as f,A as v,i as g,B as h,C as j}from"./index-ee51fdf7.js";import{E as b}from"./el-button-06eb4394.js";import{E as y}from"./el-tag-baa5a7dc.js";import{_ as D}from"./Table.vue_vue_type_script_lang-f5bc5855.js";import{g as x,d as w,s as S}from"./index-120023a2.js";import{u as k}from"./useTable-b0a93c90.js";import{_ as C}from"./Write.vue_vue_type_script_setup_true_lang-b1e344c4.js";import{_ as P}from"./Detail.vue_vue_type_script_setup_true_lang-88d039ad.js";import{u as z}from"./useCrudSchemas-3512e328.js";import"./el-card-a83abc8b.js";import"./el-popper-837ccc76.js";import"./constants-ec445203.js";import"./Form-dc5921c5.js";import"./el-col-726b4f08.js";import"./el-input-96358815.js";import"./use-form-item-c2c437a3.js";import"./use-form-common-props-032278eb.js";import"./tsxHelper-748d007d.js";import"./debounce-ac164549.js";import"./el-input-number-f09e36c4.js";import"./el-divider-0843554d.js";import"./InputPassword-fdf61572.js";import"./style.css_vue_type_style_index_0_src_true_lang-139f3107.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-2ddc8f42.js";import"./aria-ecee1d93.js";import"./index-2ecf0d69.js";import"./useForm-6f238107.js";import"./useIcon-770c3d66.js";import"./el-overlay-78999900.js";import"./vnode-6fc01a8f.js";import"./refs-98ef65d5.js";import"./el-image-viewer-3ff0c10f.js";import"./el-dropdown-item-528c47a0.js";import"./index-27835318.js";import"./el-message-box-04855fae.js";import"./useValidator-b7979131.js";import"./Descriptions-5ec1faa7.js";import"./tree-b59d36bb.js";const E={class:"mb-10px"};function R(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const I=l({__name:"ExampleDialog",setup(l){const j=o([]),{tableRegister:I,tableState:F,tableMethods:H}=k({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=F,t=await x({pageIndex:m(e),pageSize:m(a),...m(q)});return{list:t.data.list,total:t.data.total}},fetchDelApi:async()=>!!(await w(m(j)))}),{loading:M,dataList:T,total:L,currentPage:V,pageSize:Y}=F,{getList:A,getElTableExpose:O,delList:U}=H,q=o({}),J=e=>{q.value=e,A()},{t:N}=i(),W=s([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:N("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:N("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:N("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:N("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:N("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>r(y,{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:()=>[1===e.importance?N("tableDemo.important"):2===e.importance?N("tableDemo.good"):N("tableDemo.commonly")]})}}},{field:"pageviews",label:N("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:N("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>r("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:N("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let a,t,l;return r(n,null,[r(b,{type:"primary",onClick:()=>ae(e.row,"edit")},R(a=N("exampleDemo.edit"))?a:{default:()=>[a]}),r(b,{type:"success",onClick:()=>ae(e.row,"detail")},R(t=N("exampleDemo.detail"))?t:{default:()=>[t]}),r(b,{type:"danger",onClick:()=>ee(e.row)},R(l=N("exampleDemo.del"))?l:{default:()=>[l]})])}}}}]),{allSchemas:B}=z(W),G=o(!1),Q=o(""),Z=o(null),$=o(""),K=()=>{Q.value=N("exampleDemo.add"),Z.value=null,G.value=!0,$.value=""},X=o(!1),ee=async e=>{const a=await O();j.value=e?[e.id]:(null==a?void 0:a.getSelectionRows().map((e=>e.id)))||[],X.value=!0,await U(m(j).length).finally((()=>{X.value=!1}))},ae=(e,a)=>{Q.value=N("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),$.value=a,Z.value=e,G.value=!0},te=o(),le=o(!1),oe=async()=>{const e=m(te),a=await(null==e?void 0:e.submit());if(a){le.value=!0;await S(a).catch((()=>{})).finally((()=>{le.value=!1}))&&(G.value=!1,V.value=1,A())}};return(l,o)=>(p(),d(n,null,[r(m(e),null,{default:u((()=>[r(m(a),{schema:m(B).searchSchema,onSearch:J,onReset:J},null,8,["schema"]),c("div",E,[r(m(b),{type:"primary",onClick:K},{default:u((()=>[_(f(m(N)("exampleDemo.add")),1)])),_:1}),r(m(b),{loading:X.value,type:"danger",onClick:o[0]||(o[0]=e=>ee(null))},{default:u((()=>[_(f(m(N)("exampleDemo.del")),1)])),_:1},8,["loading"])]),r(m(D),{pageSize:m(Y),"onUpdate:pageSize":o[1]||(o[1]=e=>v(Y)?Y.value=e:null),currentPage:m(V),"onUpdate:currentPage":o[2]||(o[2]=e=>v(V)?V.value=e:null),columns:m(B).tableColumns,data:m(T),loading:m(M),pagination:{total:m(L)},onRegister:m(I)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),r(m(t),{modelValue:G.value,"onUpdate:modelValue":o[4]||(o[4]=e=>G.value=e),title:Q.value},{footer:u((()=>["detail"!==$.value?(p(),g(m(b),{key:0,type:"primary",loading:le.value,onClick:oe},{default:u((()=>[_(f(m(N)("exampleDemo.save")),1)])),_:1},8,["loading"])):h("",!0),r(m(b),{onClick:o[3]||(o[3]=e=>G.value=!1)},{default:u((()=>[_(f(m(N)("dialogDemo.close")),1)])),_:1})])),default:u((()=>["detail"!==$.value?(p(),g(C,{key:0,ref_key:"writeRef",ref:te,"form-schema":m(B).formSchema,"current-row":Z.value},null,8,["form-schema","current-row"])):h("",!0),"detail"===$.value?(p(),g(P,{key:1,"detail-schema":m(B).detailSchema,"current-row":Z.value},null,8,["detail-schema","current-row"])):h("",!0)])),_:1},8,["modelValue","title"])],64))}});export{I as default};
