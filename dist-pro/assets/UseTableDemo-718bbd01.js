import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0c276bdf.js";import{d as t,k as a,q as l,e as o,A as i,r as n,o as s,c as r,w as d,a as m,t as p,H as u,F as c,J as b,_ as f}from"./index-427d9318.js";import{_ as g}from"./Table.vue_vue_type_script_lang-471ec74a.js";import{g as D}from"./index-5c6e7210.js";import{E as _}from"./el-tag-da1a6221.js";import{E as v}from"./el-button-a89cf6e4.js";import{u as h}from"./useTable-c4d92dac.js";import"./el-card-0fbcf589.js";import"./el-popper-d0dab626.js";import"./constants-13b63d0e.js";import"./tsxHelper-157e5a3a.js";import"./el-input-7081a2de.js";import"./use-form-item-504f223f.js";import"./use-form-common-props-61accfc6.js";import"./debounce-f0d44d82.js";import"./el-image-viewer-75cd8402.js";import"./el-dropdown-item-4906f984.js";import"./refs-1e11eaf7.js";import"./index-1d9eda3c.js";import"./el-message-box-33abd66d.js";import"./el-overlay-e8185139.js";import"./vnode-5adb3a1c.js";import"./aria-ecee1d93.js";function j(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}const x=f(t({__name:"UseTableDemo",setup(t){const{tableRegister:b,tableMethods:f,tableState:x}=h({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=x,a=await D({pageIndex:m(e),pageSize:m(t)});return{list:a.data.list,total:a.data.total}}}),{loading:y,dataList:C,total:w,currentPage:k,pageSize:S}=x,{setProps:T,setColumn:A,getElTableExpose:R,addColumn:P,delColumn:z,refresh:E}=f,{t:O}=a(),H=l([{field:"expand",type:"expand",slots:{default:e=>{const{row:t}=e;return o("div",{class:"ml-30px"},[o("div",null,[O("tableDemo.title"),i("："),t.title]),o("div",null,[O("tableDemo.author"),i("："),t.author]),o("div",null,[O("tableDemo.displayTime"),i("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:O("tableDemo.index"),type:"index"},{field:"content",label:O("tableDemo.header"),children:[{field:"title",label:O("tableDemo.title")},{field:"author",label:O("tableDemo.author")},{field:"display_time",label:O("tableDemo.displayTime")},{field:"importance",label:O("tableDemo.importance"),formatter:(e,t,a)=>o(_,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[O(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:O("tableDemo.pageviews")}]},{field:"action",label:O("tableDemo.action"),slots:{default:e=>{let t;return o(v,{type:"primary",onClick:()=>I(e)},j(t=O("tableDemo.action"))?t:{default:()=>[t]})}}}]),I=e=>{},U=n(!0),$=e=>{U.value=e},J=e=>{T({reserveIndex:e})},N=e=>{A([{field:"selection",path:"hidden",value:!e}])},q=n(1),F=()=>{A([{field:"title",path:"label",value:`${O("tableDemo.title")}${m(q)}`}]),q.value++},L=e=>{A([{field:"expand",path:"hidden",value:!e}])},M=async()=>{const e=await R();null==e||e.toggleAllSelection()},Q=n(!0),W=()=>{m(Q)?(z("action"),Q.value=!1):(P({field:"action",label:O("tableDemo.action"),slots:{default:e=>{let t;return o(v,{type:"primary",onClick:()=>I(e)},j(t=O("tableDemo.action"))?t:{default:()=>[t]})}}}),Q.value=!0)},Z=n(!1),B=()=>{T({stripe:!m(Z)}),Z.value=!m(Z)},G=n("auto"),K=()=>{"auto"===m(G)?(T({height:300}),G.value=300):(T({height:"auto"}),G.value="auto")},V=async()=>{const e=await R();null==e||e.getSelectionRows()};return(t,a)=>(s(),r(c,null,[o(m(e),{title:`UseTable ${m(O)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:d((()=>[o(m(v),{onClick:a[0]||(a[0]=e=>$(!0))},{default:d((()=>[i(p(m(O)("tableDemo.show"))+" "+p(m(O)("tableDemo.pagination")),1)])),_:1}),o(m(v),{onClick:a[1]||(a[1]=e=>$(!1))},{default:d((()=>[i(p(m(O)("tableDemo.hidden"))+" "+p(m(O)("tableDemo.pagination")),1)])),_:1}),o(m(v),{onClick:a[2]||(a[2]=e=>J(!0))},{default:d((()=>[i(p(m(O)("tableDemo.reserveIndex")),1)])),_:1}),o(m(v),{onClick:a[3]||(a[3]=e=>J(!1))},{default:d((()=>[i(p(m(O)("tableDemo.restoreIndex")),1)])),_:1}),o(m(v),{onClick:a[4]||(a[4]=e=>N(!0))},{default:d((()=>[i(p(m(O)("tableDemo.showSelections")),1)])),_:1}),o(m(v),{onClick:a[5]||(a[5]=e=>N(!1))},{default:d((()=>[i(p(m(O)("tableDemo.hiddenSelections")),1)])),_:1}),o(m(v),{onClick:F},{default:d((()=>[i(p(m(O)("tableDemo.changeTitle")),1)])),_:1}),o(m(v),{onClick:a[6]||(a[6]=e=>L(!0))},{default:d((()=>[i(p(m(O)("tableDemo.showExpandedRows")),1)])),_:1}),o(m(v),{onClick:a[7]||(a[7]=e=>L(!1))},{default:d((()=>[i(p(m(O)("tableDemo.hiddenExpandedRows")),1)])),_:1}),o(m(v),{onClick:M},{default:d((()=>[i(p(m(O)("tableDemo.selectAllNone")),1)])),_:1}),o(m(v),{onClick:W},{default:d((()=>[i(p(m(O)("tableDemo.delOrAddAction")),1)])),_:1}),o(m(v),{onClick:B},{default:d((()=>[i(p(m(O)("tableDemo.showOrHiddenStripe")),1)])),_:1}),o(m(v),{onClick:K},{default:d((()=>[i(p(m(O)("tableDemo.fixedHeaderOrAuto")),1)])),_:1}),o(m(v),{onClick:V},{default:d((()=>[i(p(m(O)("tableDemo.getSelections")),1)])),_:1})])),_:1},8,["title"]),o(m(e),{title:`UseTable ${m(O)("tableDemo.example")}`},{default:d((()=>[o(m(g),{pageSize:m(S),"onUpdate:pageSize":a[8]||(a[8]=e=>u(S)?S.value=e:null),currentPage:m(k),"onUpdate:currentPage":a[9]||(a[9]=e=>u(k)?k.value=e:null),showAction:"",columns:H,data:m(C),loading:m(y),pagination:U.value?{total:m(w)}:void 0,onRegister:m(b),onRefresh:m(E)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-65cdb33f"]]);export{x as default};
