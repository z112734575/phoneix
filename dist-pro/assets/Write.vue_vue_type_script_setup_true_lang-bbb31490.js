import{F as e}from"./Form-874c0185.js";import{u as t}from"./useForm-69b88e83.js";import{u as a}from"./useValidator-4180682d.js";import{d as r,q as s,D as o,o as i,i as m,a as u}from"./index-9ba779aa.js";const n=r({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(r,{expose:n}){const l=r,{required:p}=a(),c=s({title:[p()],author:[p()],importance:[p()],pageviews:[p()],display_time:[p()],content:[p()]}),{formRegister:d,formMethods:f}=t(),{setValues:h,getFormData:g,getElFormExpose:w}=f;return o((()=>l.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await w();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await g()}}}),(t,a)=>(i(),m(u(e),{rules:c,onRegister:u(d),schema:r.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};
