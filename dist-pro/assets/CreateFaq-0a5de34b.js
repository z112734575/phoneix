import{x as e,r as a,q as l,o as s,i as t,w as o,a as r,e as i,A as n,c as p,B as u,D as m,F as d,C as f}from"./index-4e0241ab.js";import{E as c}from"./el-button-f12da934.js";/* empty css                     */import{E as _}from"./el-input-5f5ba53b.js";import{_ as q}from"./ContentWrap.vue_vue_type_script_setup_true_lang-db38c2c3.js";import{E as j}from"./Editor-22f3be14.js";import{E as k,a as y}from"./index-b3b3abbe.js";import"./use-form-item-01cc8473.js";import"./constants-69e1005b.js";import"./use-form-common-props-e540a29c.js";import"./el-card-32393834.js";import"./el-popper-5a8a2dfc.js";import"./castArray-e506ed2d.js";const b={__name:"CreateFaq",setup(b){const{copy:g}=e();a("<p>Hello, world!</p>"),a(null);const w=l({faqs:[{question:"",answer:""}],title:""}),h=()=>{w.faqs.push({question:"",answer:""})},V=()=>{g(JSON.stringify(w)),f({message:"复制成功！",type:"success"})};return(e,a)=>(s(),t(r(q),{title:"生成faq"},{default:o((()=>[i(r(c),{type:"success",onClick:V},{default:o((()=>[n("复制代码")])),_:1}),i(r(y),null,{default:o((()=>[i(r(k),{label:"faq标题"},{default:o((()=>[i(r(_),{modelValue:w.title,"onUpdate:modelValue":a[0]||(a[0]=e=>w.title=e)},null,8,["modelValue"])])),_:1}),(s(!0),p(d,null,u(w.faqs,((e,a)=>(s(),p("div",{key:a,class:"flex gap-10"},[i(r(k),{label:"faq问题_"+(a+1),class:"items-start"},{default:o((()=>[i(r(_),{modelValue:e.question,"onUpdate:modelValue":a=>e.question=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]),i(r(k),{label:"faq回答_"+(a+1)},{default:o((()=>[i(r(j),{"api-key":"5f47p1wt54p8ckewvz94czfhydfr04yfofzpngf56pgkdxgc",init:{height:200,width:400,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | bold | help | link"},modelValue:e.answer,"onUpdate:modelValue":a=>e.answer=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]),i(r(c),{type:"danger",icon:r(m),round:"",onClick:e=>(e=>{w.faqs.splice(e,1)})(a)},null,8,["icon","onClick"])])))),128))])),_:1}),i(r(c),{type:"primary",onClick:h},{default:o((()=>[n("新增faq")])),_:1})])),_:1}))}};export{b as default};
