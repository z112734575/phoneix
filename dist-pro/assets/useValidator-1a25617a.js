import{k as e}from"./index-427d9318.js";const{t:n}=e(),r=()=>({required:e=>({required:!0,message:e||n("common.required")}),lengthRange:e=>{const{min:r,max:a,message:o}=e;return{min:r,max:a,message:o||n("common.lengthRange",{min:r,max:a})}},notSpace:e=>({validator:(r,a,o)=>{-1!==(null==a?void 0:a.indexOf(" "))?o(new Error(e||n("common.notSpace"))):o()}}),notSpecialCharacters:e=>({validator:(r,a,o)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(a)?o(new Error(e||n("common.notSpecialCharacters"))):o()}})});export{r as u};
