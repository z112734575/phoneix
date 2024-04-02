import{aP as e,I as a,aE as t,J as l,a_ as n,d as r,aF as u,K as s,r as i,q as o,y as m,aN as d,M as c,z as p,bh as v,o as b,c as f,ac as N,a as y,n as V,av as I,O as h,e as g,w as x,i as E,aM as S,cs as w,X as F,U as A,aL as _,ct as k,aw as K,P as M,az as B,ap as O,aG as T,$}from"./index-4e0241ab.js";import{C as z,I as P,U as j,E as C}from"./el-input-5f5ba53b.js";import{u as L}from"./use-form-item-01cc8473.js";import{a as D,u as G}from"./use-form-common-props-e540a29c.js";const U=100,Y=600,q={beforeMount(a,t){const l=t.value,{interval:n=U,delay:r=Y}=e(l)?{}:l;let u,s;const i=()=>e(l)?l():l.handler(),o=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(o(),i(),document.addEventListener("mouseup",(()=>o()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{i()}),n)}),r))}))}},J=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),W={[z]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[P]:e=>l(e)||n(e),[j]:e=>l(e)||n(e)},X=["aria-label","onKeydown"],H=["aria-label","onKeydown"],Q=r({name:"ElInputNumber"});const R=$(M(r({...Q,props:J,emits:W,setup(e,{expose:a,emit:t}){const r=e,{t:M}=u(),$=s("input-number"),U=i(),Y=o({currentValue:r.modelValue,userInput:null}),{formItem:J}=L(),W=m((()=>l(r.modelValue)&&r.modelValue<=r.min)),Q=m((()=>l(r.modelValue)&&r.modelValue>=r.max)),R=m((()=>{const e=ne(r.step);return d(r.precision)?Math.max(ne(r.modelValue),e):(r.precision,r.precision)})),Z=m((()=>r.controls&&"right"===r.controlsPosition)),ee=D(),ae=G(),te=m((()=>{if(null!==Y.userInput)return Y.userInput;let e=Y.currentValue;if(n(e))return"";if(l(e)){if(Number.isNaN(e))return"";d(r.precision)||(e=e.toFixed(r.precision))}return e})),le=(e,a)=>{if(d(a)&&(a=R.value),0===a)return Math.round(e);let t=String(e);const l=t.indexOf(".");if(-1===l)return e;if(!t.replace(".","").split("")[l+a])return e;const n=t.length;return"5"===t.charAt(n-1)&&(t=`${t.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(t).toFixed(a))},ne=e=>{if(n(e))return 0;const a=e.toString(),t=a.indexOf(".");let l=0;return-1!==t&&(l=a.length-t-1),l},re=(e,a=1)=>l(e)?le(e+r.step*a):Y.currentValue,ue=()=>{if(r.readonly||ae.value||Q.value)return;const e=Number(te.value)||0,a=re(e);oe(a),t(P,Y.currentValue),ve()},se=()=>{if(r.readonly||ae.value||W.value)return;const e=Number(te.value)||0,a=re(e,-1);oe(a),t(P,Y.currentValue),ve()},ie=(e,a)=>{const{max:l,min:u,step:s,precision:i,stepStrictly:o,valueOnClear:m}=r;l<u&&B("InputNumber","min should not be greater than max.");let c=Number(e);if(n(e)||Number.isNaN(c))return null;if(""===e){if(null===m)return null;c=O(m)?{min:u,max:l}[m]:m}return o&&(c=le(Math.round(c/s)*s,i)),d(i)||(c=le(c,i)),(c>l||c<u)&&(c=c>l?l:u,a&&t(j,c)),c},oe=(e,a=!0)=>{var l;const n=Y.currentValue,u=ie(e);a?n===u&&e||(Y.userInput=null,t(j,u),n!==u&&t(z,u,n),r.validateEvent&&(null==(l=null==J?void 0:J.validate)||l.call(J,"change").catch((e=>T()))),Y.currentValue=u):t(j,u)},me=e=>{Y.userInput=e;const a=""===e?null:Number(e);t(P,a),oe(a,!1)},de=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&oe(a),ve(),Y.userInput=null},ce=e=>{t("focus",e)},pe=e=>{var a;Y.userInput=null,t("blur",e),r.validateEvent&&(null==(a=null==J?void 0:J.validate)||a.call(J,"blur").catch((e=>T())))},ve=()=>{Y.currentValue!==r.modelValue&&(Y.currentValue=r.modelValue)},be=e=>{document.activeElement===e.target&&e.preventDefault()};return c((()=>r.modelValue),((e,a)=>{const t=ie(e,!0);null===Y.userInput&&t!==a&&(Y.currentValue=t)}),{immediate:!0}),p((()=>{var e;const{min:a,max:n,modelValue:u}=r,s=null==(e=U.value)?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(n)?s.setAttribute("aria-valuemax",String(n)):s.removeAttribute("aria-valuemax"),Number.isFinite(a)?s.setAttribute("aria-valuemin",String(a)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",Y.currentValue||0===Y.currentValue?String(Y.currentValue):""),s.setAttribute("aria-disabled",String(ae.value)),!l(u)&&null!=u){let e=Number(u);Number.isNaN(e)&&(e=null),t(j,e)}})),v((()=>{var e,a;const t=null==(e=U.value)?void 0:e.input;null==t||t.setAttribute("aria-valuenow",`${null!=(a=Y.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=U.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(b(),f("div",{class:V([y($).b(),y($).m(y(ee)),y($).is("disabled",y(ae)),y($).is("without-controls",!e.controls),y($).is("controls-right",y(Z))]),onDragstart:a[0]||(a[0]=K((()=>{}),["prevent"]))},[e.controls?N((b(),f("span",{key:0,role:"button","aria-label":y(M)("el.inputNumber.decrease"),class:V([y($).e("decrease"),y($).is("disabled",y(W))]),onKeydown:I(se,["enter"])},[h(e.$slots,"decrease-icon",{},(()=>[g(y(F),null,{default:x((()=>[y(Z)?(b(),E(y(S),{key:0})):(b(),E(y(w),{key:1}))])),_:1})]))],42,X)),[[y(q),se]]):A("v-if",!0),e.controls?N((b(),f("span",{key:1,role:"button","aria-label":y(M)("el.inputNumber.increase"),class:V([y($).e("increase"),y($).is("disabled",y(Q))]),onKeydown:I(ue,["enter"])},[h(e.$slots,"increase-icon",{},(()=>[g(y(F),null,{default:x((()=>[y(Z)?(b(),E(y(_),{key:0})):(b(),E(y(k),{key:1}))])),_:1})]))],42,H)),[[y(q),ue]]):A("v-if",!0),g(y(C),{id:e.id,ref_key:"input",ref:U,type:"number",step:e.step,"model-value":y(te),placeholder:e.placeholder,readonly:e.readonly,disabled:y(ae),size:y(ee),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:be,onKeydown:[I(K(ue,["prevent"]),["up"]),I(K(se,["prevent"]),["down"])],onBlur:pe,onFocus:ce,onInput:me,onChange:de},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","input-number.vue"]]));export{R as E,q as v};
