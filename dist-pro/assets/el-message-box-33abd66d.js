import{M as e,aQ as n,am as o,d as t,Y as a,d3 as s,d4 as l,x as r,r as i,q as c,d5 as u,K as d,S as p,U as f,ak as m,z as v,o as g,i as y,w as h,Q as b,e as C,f as E,n as x,W as w,aF as B,c as k,aw as M,I,t as T,aE as S,al as z,A,b3 as R,h as _,b0 as L,ae as P,J as j,a0 as V,b6 as $,aA as O,aU as H,an as K,c9 as q}from"./index-427d9318.js";import{E as D}from"./el-button-a89cf6e4.js";import{E as U}from"./el-input-7081a2de.js";import{E as F,u as Q,a as W,b as J}from"./el-overlay-e8185139.js";import{o as N}from"./aria-ecee1d93.js";import{d as Y}from"./el-popper-d0dab626.js";import{o as Z}from"./tsxHelper-157e5a3a.js";import{u as G}from"./constants-13b63d0e.js";const X="_trap-focus-children",ee=[],ne=e=>{if(0===ee.length)return;const o=ee[ee.length-1][X];if(o.length>0&&e.code===n.tab){if(1===o.length)return e.preventDefault(),void(document.activeElement!==o[0]&&o[0].focus());const n=e.shiftKey,t=e.target===o[0],a=e.target===o[o.length-1];t&&n&&(e.preventDefault(),o[o.length-1].focus()),a&&!n&&(e.preventDefault(),o[0].focus())}},oe=t({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e[X]=N(e),ee.push(e),ee.length<=1&&document.addEventListener("keydown",ne)},updated(n){e((()=>{n[X]=N(n)}))},unmounted(){ee.shift(),0===ee.length&&document.removeEventListener("keydown",ne)}}},components:{ElButton:D,ElFocusTrap:Y,ElInput:U,ElOverlay:F,ElIcon:a,...s},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Z},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(n,{emit:o}){const{locale:t,zIndex:a,ns:s,size:v}=l("message-box",r((()=>n.buttonSize))),{t:g}=t,{nextZIndex:y}=a,h=i(!1),b=c({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:y()}),C=r((()=>{const e=b.type;return{[s.bm("icon",e)]:e&&u[e]}})),E=G(),x=G(),w=r((()=>b.icon||u[b.type]||"")),B=r((()=>!!b.message)),k=i(),M=i(),I=i(),T=i(),S=i(),z=r((()=>b.confirmButtonClass));d((()=>b.inputValue),(async o=>{await e(),"prompt"===n.boxType&&null!==o&&j()}),{immediate:!0}),d((()=>h.value),(o=>{var t,a;o&&("prompt"!==n.boxType&&(b.autofocus?I.value=null!=(a=null==(t=S.value)?void 0:t.$el)?a:k.value:I.value=k.value),b.zIndex=y()),"prompt"===n.boxType&&(o?e().then((()=>{var e;T.value&&T.value.$el&&(b.autofocus?I.value=null!=(e=V())?e:k.value:I.value=k.value)})):(b.editorErrorMessage="",b.validateError=!1))}));const A=r((()=>n.draggable));function R(){h.value&&(h.value=!1,e((()=>{b.action&&o("action",b.action)})))}Q(k,M,A),p((async()=>{await e(),n.closeOnHashChange&&window.addEventListener("hashchange",R)})),f((()=>{n.closeOnHashChange&&window.removeEventListener("hashchange",R)}));const _=()=>{n.closeOnClickModal&&P(b.distinguishCancelAndClose?"close":"cancel")},L=J(_),P=e=>{var o;("prompt"!==n.boxType||"confirm"!==e||j())&&(b.action=e,b.beforeClose?null==(o=b.beforeClose)||o.call(b,e,b,R):R())},j=()=>{if("prompt"===n.boxType){const e=b.inputPattern;if(e&&!e.test(b.inputValue||""))return b.editorErrorMessage=b.inputErrorMessage||g("el.messagebox.error"),b.validateError=!0,!1;const n=b.inputValidator;if("function"==typeof n){const e=n(b.inputValue);if(!1===e)return b.editorErrorMessage=b.inputErrorMessage||g("el.messagebox.error"),b.validateError=!0,!1;if("string"==typeof e)return b.editorErrorMessage=e,b.validateError=!0,!1}}return b.editorErrorMessage="",b.validateError=!1,!0},V=()=>{const e=T.value.$refs;return e.input||e.textarea},$=()=>{P("close")};return n.lockScroll&&W(h),{...m(b),ns:s,overlayEvent:L,visible:h,hasMessage:B,typeClass:C,contentId:E,inputId:x,btnSize:v,iconComponent:w,confirmButtonClasses:z,rootRef:k,focusStartRef:I,headerRef:M,inputRef:T,confirmRef:S,doClose:R,handleClose:$,onCloseRequested:()=>{n.closeOnPressEscape&&$()},handleWrapperClick:_,handleInputEnter:e=>{if("textarea"!==b.inputType)return e.preventDefault(),P("confirm")},handleAction:P,t:g}}}),te=["aria-label","aria-describedby"],ae=["aria-label"],se=["id"];var le=o(oe,[["render",function(e,n,o,t,a,s){const l=v("el-icon"),r=v("close"),i=v("el-input"),c=v("el-button"),u=v("el-focus-trap"),d=v("el-overlay");return g(),y(_,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=n=>e.$emit("vanish")),persisted:""},{default:h((()=>[b(C(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h((()=>[E("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:x(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...n)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...n)),onMousedown:n[9]||(n[9]=(...n)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...n)),onMouseup:n[10]||(n[10]=(...n)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...n))},[C(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h((()=>[E("div",{ref:"rootRef",class:x([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:w(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=B((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(g(),k("div",{key:0,ref:"headerRef",class:x(e.ns.e("header"))},[E("div",{class:x(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),y(l,{key:0,class:x([e.ns.e("status"),e.typeClass])},{default:h((()=>[(g(),y(M(e.iconComponent)))])),_:1},8,["class"])):I("v-if",!0),E("span",null,T(e.title),1)],2),e.showClose?(g(),k("button",{key:0,type:"button",class:x(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=S(B((n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[C(l,{class:x(e.ns.e("close"))},{default:h((()=>[C(r)])),_:1},8,["class"])],42,ae)):I("v-if",!0)],2)):I("v-if",!0),E("div",{id:e.contentId,class:x(e.ns.e("content"))},[E("div",{class:x(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),y(l,{key:0,class:x([e.ns.e("status"),e.typeClass])},{default:h((()=>[(g(),y(M(e.iconComponent)))])),_:1},8,["class"])):I("v-if",!0),e.hasMessage?(g(),k("div",{key:1,class:x(e.ns.e("message"))},[z(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(g(),y(M(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),y(M(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h((()=>[A(T(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):I("v-if",!0)],2),b(E("div",{class:x(e.ns.e("input"))},[C(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=n=>e.inputValue=n),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:x({invalid:e.validateError}),onKeydown:S(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),E("div",{class:x(e.ns.e("errormsg")),style:w({visibility:e.editorErrorMessage?"visible":"hidden"})},T(e.editorErrorMessage),7)],2),[[R,e.showInput]])],10,se),E("div",{class:x(e.ns.e("btns"))},[e.showCancelButton?(g(),y(c,{key:0,loading:e.cancelButtonLoading,class:x([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=n=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=S(B((n=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:h((()=>[A(T(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):I("v-if",!0),b(C(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:x([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=n=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=S(B((n=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:h((()=>[A(T(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[R,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,te)])),_:3},8,["z-index","overlay-class","mask"]),[[R,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const re=new Map,ie=(e,n,o=null)=>{const t=C(le,e,K(e.message)||j(e.message)?{default:K(e.message)?e.message:()=>e.message}:null);return t.appContext=o,V(t,n),(e=>{let n=document.body;return e.appendTo&&(P(e.appendTo)&&(n=document.querySelector(e.appendTo)),q(e.appendTo)&&(n=e.appendTo),q(n)||(n=document.body)),n})(e).appendChild(n.firstElementChild),t.component},ce=(e,n)=>{const o=document.createElement("div");e.onVanish=()=>{V(null,o),re.delete(a)},e.onAction=n=>{const o=re.get(a);let s;s=e.showInput?{value:a.inputValue,action:n}:n,e.callback?e.callback(s,t.proxy):"cancel"===n||"close"===n?e.distinguishCancelAndClose&&"cancel"!==n?o.reject("close"):o.reject("cancel"):o.resolve(s)};const t=ie(e,o,n),a=t.proxy;for(const s in e)$(e,s)&&!$(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function ue(e,n=null){if(!L)return Promise.reject();let o;return P(e)||j(e)?e={message:e}:o=e.callback,new Promise(((t,a)=>{const s=ce(e,null!=n?n:ue._context);re.set(s,{options:e,callback:o,resolve:t,reject:a})}))}const de={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{ue[e]=function(e){return(n,o,t,a)=>{let s="";return O(o)?(t=o,s=""):s=H(o)?"":o,ue(Object.assign({title:s,message:n,type:"",...de[e]},t,{boxType:e}),a)}}(e)})),ue.close=()=>{re.forEach(((e,n)=>{n.doClose()})),re.clear()},ue._context=null;const pe=ue;pe.install=e=>{pe._context=e._context,e.config.globalProperties.$msgbox=pe,e.config.globalProperties.$messageBox=pe,e.config.globalProperties.$alert=pe.alert,e.config.globalProperties.$confirm=pe.confirm,e.config.globalProperties.$prompt=pe.prompt};const fe=pe;export{fe as E};
