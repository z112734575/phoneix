import{f as e,a,u as t}from"./constants-69e1005b.js";import{R as n,r as o,y as d,z as l,M as s,b4 as u,cp as i}from"./index-4e0241ab.js";const r=()=>({form:n(e,void 0),formItem:n(a,void 0)}),v=(e,{formItemContext:a,disableIdGeneration:n,disableIdManagement:r})=>{n||(n=o(!1)),r||(r=o(!1));const v=o();let m;const I=d((()=>{var t;return!!(!e.label&&a&&a.inputIds&&(null==(t=a.inputIds)?void 0:t.length)<=1)}));return l((()=>{m=s([u(e,"id"),n],(([e,n])=>{const o=null!=e?e:n?void 0:t().value;o!==v.value&&((null==a?void 0:a.removeInputId)&&(v.value&&a.removeInputId(v.value),(null==r?void 0:r.value)||n||!o||a.addInputId(o)),v.value=o)}),{immediate:!0})})),i((()=>{m&&m(),(null==a?void 0:a.removeInputId)&&v.value&&a.removeInputId(v.value)})),{isLabeledByFormItem:I,inputId:v}};export{v as a,r as u};
