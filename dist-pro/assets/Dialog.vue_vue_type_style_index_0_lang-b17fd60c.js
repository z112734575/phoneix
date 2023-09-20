import{ab as e,bj as o,d as l,aN as a,ao as s,x as t,o as n,c as r,f as c,al as i,n as u,a as d,t as f,e as p,w as m,i as v,aw as y,Y as g,I as b,W as h,am as C,cH as x,ac as k,af as A,aZ as $,cp as w,r as I,bH as F,au as B,K as R,M as S,S as _,cI as D,cJ as j,b0 as L,as as E,ah as H,aj as M,Q as O,Z as z,aG as N,b3 as T,h as P,cq as q,ax as V,R as U,aB as Z,cz as K,z as G,A as J,E as Q}from"./index-427d9318.js";import{u as W,a as Y,E as X,b as ee}from"./el-overlay-e8185139.js";import{F as oe,d as le}from"./el-popper-d0dab626.js";import{c as ae}from"./refs-1e11eaf7.js";import{U as se}from"./el-input-7081a2de.js";import{u as te}from"./constants-13b63d0e.js";import{u as ne}from"./el-button-a89cf6e4.js";const re=Symbol("dialogInjectionKey"),ce=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ie=["aria-level"],ue=["aria-label"],de=["id"],fe=l({name:"ElDialogContent"});var pe=C(l({...fe,props:ce,emits:{close:()=>!0},setup(e){const o=e,{t:l}=a(),{Close:C}=x,{dialogRef:k,headerRef:A,bodyId:$,ns:w,style:I}=s(re),{focusTrapRef:F}=s(oe),B=t((()=>[w.b(),w.is("fullscreen",o.fullscreen),w.is("draggable",o.draggable),w.is("align-center",o.alignCenter),{[w.m("center")]:o.center},o.customClass])),R=ae(F,k),S=t((()=>o.draggable));return W(k,A,S),(e,o)=>(n(),r("div",{ref:d(R),class:u(d(B)),style:h(d(I)),tabindex:"-1"},[c("header",{ref_key:"headerRef",ref:A,class:u(d(w).e("header"))},[i(e.$slots,"header",{},(()=>[c("span",{role:"heading","aria-level":e.ariaLevel,class:u(d(w).e("title"))},f(e.title),11,ie)])),e.showClose?(n(),r("button",{key:0,"aria-label":d(l)("el.dialog.close"),class:u(d(w).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[p(d(g),{class:u(d(w).e("close"))},{default:m((()=>[(n(),v(y(e.closeIcon||d(C))))])),_:1},8,["class"])],10,ue)):b("v-if",!0)],2),c("div",{id:d($),class:u(d(w).e("body"))},[i(e.$slots,"default")],10,de),e.$slots.footer?(n(),r("footer",{key:0,class:u(d(w).e("footer"))},[i(e.$slots,"footer")],2)):b("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const me=e({...ce,appendToBody:Boolean,beforeClose:{type:k(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ve={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[se]:e=>A(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ye=(e,o)=>{const l=$().emit,{nextZIndex:a}=w();let s="";const n=te(),r=te(),c=I(!1),i=I(!1),u=I(!1),d=I(e.zIndex||a());let f,p;const m=F("namespace",D),v=t((()=>{const o={},l=`--${m.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=B(e.width))),o})),y=t((()=>e.alignCenter?{display:"flex"}:{}));function g(){null==p||p(),null==f||f(),e.openDelay&&e.openDelay>0?({stop:f}=j((()=>C()),e.openDelay)):C()}function b(){null==f||f(),null==p||p(),e.closeDelay&&e.closeDelay>0?({stop:p}=j((()=>x()),e.closeDelay)):x()}function h(){e.beforeClose?e.beforeClose((function(e){e||(i.value=!0,c.value=!1)})):b()}function C(){L&&(c.value=!0)}function x(){c.value=!1}return e.lockScroll&&Y(c),R((()=>e.modelValue),(s=>{s?(i.value=!1,g(),u.value=!0,d.value=e.zIndex?d.value++:a(),S((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&b()})),R((()=>e.fullscreen),(e=>{o.value&&(e?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)})),_((()=>{e.modelValue&&(c.value=!0,u.value=!0,g())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(se,!1),e.destroyOnClose&&(u.value=!1)},beforeLeave:function(){l("close")},handleClose:h,onModalClick:function(){e.closeOnClickModal&&h()},close:b,doClose:x,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&h()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:n,bodyId:r,closed:i,style:v,overlayDialogStyle:y,rendered:u,visible:c,zIndex:d}},ge=["aria-label","aria-labelledby","aria-describedby"],be=l({name:"ElDialog",inheritAttrs:!1});const he=V(C(l({...be,props:me,emits:ve,setup(e,{expose:o}){const l=e,a=E();ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},t((()=>!!a.title))),ne({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},t((()=>!!l.customClass)));const s=H("dialog"),r=I(),f=I(),y=I(),{visible:g,titleId:C,bodyId:x,style:k,overlayDialogStyle:A,rendered:$,zIndex:w,afterEnter:F,afterLeave:B,beforeLeave:R,handleClose:S,onModalClick:_,onOpenAutoFocus:D,onCloseAutoFocus:j,onCloseRequested:L,onFocusoutPrevented:V}=ye(l,r);M(re,{dialogRef:r,headerRef:f,bodyId:x,ns:s,rendered:$,style:k});const U=ee(_),Z=t((()=>l.draggable&&!l.fullscreen));return o({visible:g,dialogContentRef:y}),(e,o)=>(n(),v(q,{to:"body",disabled:!e.appendToBody},[p(P,{name:"dialog-fade",onAfterEnter:d(F),onAfterLeave:d(B),onBeforeLeave:d(R),persisted:""},{default:m((()=>[O(p(d(X),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":d(w)},{default:m((()=>[c("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:d(C),"aria-describedby":d(x),class:u(`${d(s).namespace.value}-overlay-dialog`),style:h(d(A)),onClick:o[0]||(o[0]=(...e)=>d(U).onClick&&d(U).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>d(U).onMousedown&&d(U).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>d(U).onMouseup&&d(U).onMouseup(...e))},[p(d(le),{loop:"",trapped:d(g),"focus-start-el":"container",onFocusAfterTrapped:d(D),onFocusAfterReleased:d(j),onFocusoutPrevented:d(V),onReleaseRequested:d(L)},{default:m((()=>[d($)?(n(),v(pe,z({key:0,ref_key:"dialogContentRef",ref:y},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:d(Z),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:d(S)}),N({header:m((()=>[e.$slots.title?i(e.$slots,"title",{key:1}):i(e.$slots,"header",{key:0,close:d(S),titleId:d(C),titleClass:d(s).e("title")})])),default:m((()=>[i(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:m((()=>[i(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):b("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ge)])),_:3},8,["mask","overlay-class","z-index"]),[[T,d(g)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])),Ce={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},xe={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},ke=l({__name:"Dialog",props:{modelValue:U.bool.def(!1),title:U.string.def("Dialog"),fullscreen:U.bool.def(!0),maxHeight:U.oneOfType([String,Number]).def("400px")},setup(e){const o=e,l=E(),a=t((()=>{const e=["fullscreen","title","maxHeight"],l={...Z(),...o};for(const o in l)-1!==e.indexOf(o)&&delete l[o];return l})),s=I(!1),r=()=>{s.value=!d(s)},u=I(K(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight);R((()=>s.value),(async e=>{if(await S(),e){const e=document.documentElement.offsetHeight;u.value=e-55-60-(l.footer?63:0)+"px"}else u.value=K(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight}),{immediate:!0});const y=t((()=>({height:d(u)})));return(o,t)=>{const u=G("Icon");return n(),v(d(he),z(a.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),N({header:m((({close:l})=>[c("div",Ce,[i(o.$slots,"title",{},(()=>[J(f(e.title),1)])),c("div",xe,[e.fullscreen?(n(),v(u,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:r},null,8,["icon"])):b("",!0),p(u,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:l},null,8,["onClick"])])])])),default:m((()=>[p(d(Q),{style:h(y.value)},{default:m((()=>[i(o.$slots,"default")])),_:3},8,["style"])])),_:2},[d(l).footer?{name:"footer",fn:m((()=>[i(o.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{ke as _,ve as a,me as d,ye as u};
