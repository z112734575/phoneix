import{ab as s,ag as a,d as e,ah as o,x as l,o as n,c as t,f as c,al as i,n as r,a as u,i as p,w as f,e as m,b8 as d,aF as k,Y as g,I as b,W as y,h as v,am as h,ax as C}from"./index-427d9318.js";import{u as _}from"./use-form-common-props-61accfc6.js";const x=s({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:a,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),B={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},E=e({name:"ElTag"});const S=C(h(e({...E,props:x,emits:B,setup(s,{emit:a}){const e=s,h=_(),C=o("tag"),x=l((()=>{const{type:s,hit:a,effect:o,closable:l,round:n}=e;return[C.b(),C.is("closable",l),C.m(s),C.m(h.value),C.m(o),C.is("hit",a),C.is("round",n)]})),B=s=>{a("close",s)},E=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(n(),t("span",{key:0,class:r(u(x)),style:y({backgroundColor:s.color}),onClick:E},[c("span",{class:r(u(C).e("content"))},[i(s.$slots,"default")],2),s.closable?(n(),p(u(g),{key:0,class:r(u(C).e("close")),onClick:k(B,["stop"])},{default:f((()=>[m(u(d))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(n(),p(v,{key:1,name:`${u(C).namespace.value}-zoom-in-center`,appear:""},{default:f((()=>[c("span",{class:r(u(x)),style:y({backgroundColor:s.color}),onClick:E},[c("span",{class:r(u(C).e("content"))},[i(s.$slots,"default")],2),s.closable?(n(),p(u(g),{key:0,class:r(u(C).e("close")),onClick:k(B,["stop"])},{default:f((()=>[m(u(d))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{S as E,x as t};
