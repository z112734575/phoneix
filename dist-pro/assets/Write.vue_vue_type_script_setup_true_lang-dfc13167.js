import{F as e}from"./Form-a065b4ea.js";import{u as t}from"./useForm-272d0a8f.js";import{u as a}from"./useValidator-1a25617a.js";import{d as r,q as s,K as o,o as i,i as m,a as u}from"./index-427d9318.js";const n=r({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(r,{expose:n}){const p=r,{required:l}=a(),c=s({title:[l()],author:[l()],importance:[l()],pageviews:[l()],display_time:[l()],content:[l()]}),{formRegister:d,formMethods:f}=t(),{setValues:h,getFormData:g,getElFormExpose:w}=f;return o((()=>p.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await w();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await g()}}}),(t,a)=>(i(),m(u(e),{rules:c,onRegister:u(d),schema:r.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};
