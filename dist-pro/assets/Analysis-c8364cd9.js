import{P as a,g as t,a as s,b as e}from"./PanelGroup-45f34671.js";import{d as n,r as i,q as o,o as l,c as m,e as d,w as u,a as p,F as r,k as c,s as _}from"./index-c0be9370.js";import{E as f,a as g}from"./el-col-fa93a7e8.js";import{E as h}from"./el-card-d5e7fc52.js";import{E as y}from"./el-skeleton-item-8e204e9a.js";import{p as v,b as x,l as j,_ as w}from"./Echart.vue_vue_type_script_setup_true_lang-eb2c2493.js";import"./CountTo.vue_vue_type_script_setup_true_lang-f83708fa.js";import"./index-e11017c9.js";import"./debounce-9f8549a2.js";const b=n({__name:"Analysis",setup(n){const{t:b}=c(),E=i(!0),A=o(v),P=async()=>{const a=await t().catch((()=>{}));a&&(_(A,"legend.data",a.data.map((a=>b(a.name)))),A.series[0].data=a.data.map((a=>({name:b(a.name),value:a.value}))))},k=o(x),q=async()=>{const a=await s().catch((()=>{}));a&&(_(k,"xAxis.data",a.data.map((a=>b(a.name)))),_(k,"series",[{name:b("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},D=o(j),I=async()=>{const a=await e().catch((()=>{}));a&&(_(D,"xAxis.data",a.data.map((a=>b(a.name)))),_(D,"series",[{name:b("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:b("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),q(),I()]),E.value=!1})(),(t,s)=>(l(),m(r,null,[d(a),d(p(g),{gutter:20,justify:"space-between"},{default:u((()=>[d(p(f),{xl:10,lg:10,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:""},{default:u((()=>[d(p(w),{options:A,height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{xl:14,lg:14,md:24,sm:24,xs:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:""},{default:u((()=>[d(p(w),{options:k,height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(p(f),{span:24},{default:u((()=>[d(p(h),{shadow:"hover",class:"mb-20px"},{default:u((()=>[d(p(y),{loading:E.value,animated:"",rows:4},{default:u((()=>[d(p(w),{options:D,height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{b as default};