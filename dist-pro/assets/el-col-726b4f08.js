import{a4 as e,d as t,aa as s,O as a,ac as u,o as l,i as r,w as n,ae as p,n as o,a as c,ar as f,aq as d,af as m,as as g,a5 as i,bd as b,ah as y,aQ as h,av as $}from"./index-ee51fdf7.js";const j=Symbol("rowContextKey"),v=e({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=t({name:"ElRow"});const w=g(m(t({...N,props:v,setup(e){const t=e,m=s("row"),g=a((()=>t.gutter));u(j,{gutter:g});const i=a((()=>{const e={};return t.gutter?(e.marginRight=e.marginLeft=`-${t.gutter/2}px`,e):e})),b=a((()=>[m.b(),m.is(`justify-${t.justify}`,"start"!==t.justify),m.is(`align-${t.align}`,!!t.align)]));return(e,t)=>(l(),r(d(e.tag),{class:o(c(b)),style:f(c(i))},{default:n((()=>[p(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]])),x=e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:i([Number,Object]),default:()=>b({})},sm:{type:i([Number,Object]),default:()=>b({})},md:{type:i([Number,Object]),default:()=>b({})},lg:{type:i([Number,Object]),default:()=>b({})},xl:{type:i([Number,Object]),default:()=>b({})}}),O=t({name:"ElCol"});const E=g(m(t({...O,props:x,setup(e){const t=e,{gutter:u}=y(j,{gutter:a((()=>0))}),m=s("col"),g=a((()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=u.value/2+"px"),e})),i=a((()=>{const e=[];["span","offset","pull","push"].forEach((s=>{const a=t[s];h(a)&&("span"===s?e.push(m.b(`${t[s]}`)):a>0&&e.push(m.b(`${s}-${t[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{h(t[s])?e.push(m.b(`${s}-${t[s]}`)):$(t[s])&&Object.entries(t[s]).forEach((([t,a])=>{e.push("span"!==t?m.b(`${s}-${t}-${a}`):m.b(`${s}-${a}`))}))})),u.value&&e.push(m.is("guttered")),[m.b(),e]}));return(e,t)=>(l(),r(d(e.tag),{class:o(c(i)),style:f(c(g))},{default:n((()=>[p(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));export{E,w as a};
