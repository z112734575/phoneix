import{F as e}from"./Form-da70841d.js";import{u as a}from"./useForm-0f679786.js";import{u as r}from"./useValidator-38eaaa93.js";import{d as t,q as s,M as o,o as m,i,a as u}from"./index-c0be9370.js";const n=t({__name:"Write",props:{currentRow:{type:Object,default:()=>{}},formSchema:{type:Array,default:()=>[]}},setup(t,{expose:n}){const c=t,{required:l}=r(),p=s({username:[l()],account:[l()],"department.id":[l()],role:[l()],email:[l()],createTime:[l()]}),{formRegister:d,formMethods:f}=a(),{setValues:h,getFormData:g,getElFormExpose:j}=f;return o((()=>c.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await j();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await g()}}}),(a,r)=>(m(),i(u(e),{rules:p,onRegister:u(d),schema:t.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};