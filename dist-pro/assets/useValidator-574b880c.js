import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-af55f5d3.js";import{F as t}from"./Form-d67bf331.js";import{u as o}from"./useValidator-5dc672b5.js";import{u as s}from"./useForm-533c54a5.js";import{d as r,q as i,o as l,i as p,w as a,e as n,a as m}from"./index-a5c6c354.js";import"./el-card-bc2705e2.js";import"./el-popper-66c99356.js";import"./constants-270b7a01.js";import"./el-col-aad47a86.js";import"./el-input-955b73fd.js";import"./use-form-item-2c46319a.js";import"./use-form-common-props-124a61d2.js";import"./el-tag-98204c67.js";import"./tsxHelper-1a8a1f9b.js";import"./el-button-97a90dda.js";import"./debounce-31c7ef15.js";import"./el-input-number-3b00934b.js";import"./el-divider-69adef82.js";import"./InputPassword-431388ff.js";import"./style.css_vue_type_style_index_0_src_true_lang-54367dcc.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-ec0906b5.js";import"./aria-ecee1d93.js";import"./index-333b6805.js";const u=r({__name:"useValidator",setup(r){const{formRegister:u,formMethods:d}=s(),{getFormData:f}=d,{required:c,lengthRange:j,notSpace:_,notSpecialCharacters:g}=o(),b=i([{field:"field1",label:"必填",component:"Input"},{field:"field2",label:"长度范围",component:"Input"},{field:"field3",label:"不能有空格",component:"Input"},{field:"field4",label:"不能有特殊字符",component:"Input"},{field:"field5",label:"是否相等-值1",component:"Input"},{field:"field6",label:"是否相等-值2",component:"Input"}]),y=i({field1:[c()],field2:[j({min:2,max:5})],field3:[_()],field4:[g()],field5:[{asyncValidator:async(e,t,o)=>{const s=await f(),{field6:r}=s;t!==r?o(new Error("两个值不相等")):o()}}]});return(o,s)=>(l(),p(m(e),{title:"useValidator"},{default:a((()=>[n(m(t),{schema:b,rules:y,onRegister:m(u)},null,8,["schema","rules","onRegister"])])),_:1}))}});export{u as default};
