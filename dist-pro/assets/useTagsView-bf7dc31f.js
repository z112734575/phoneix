import{d8 as e,d9 as i,da as t,J as s,H as a,V as d,db as l,u as h,O as r,a as V,G as n}from"./index-ee51fdf7.js";const w=e(),{getStorage:o}=d(),c=i("tagsView",{state:()=>({visitedViews:[],cachedViews:new Set,selectedTag:void 0}),getters:{getVisitedViews(){return this.visitedViews},getCachedViews(){return Array.from(this.cachedViews)},getSelectedTag(){return this.selectedTag}},actions:{addView(e){this.addVisitedView(e),this.addCachedView()},addVisitedView(e){var i,t;this.visitedViews.some((i=>i.path===e.path))||(null==(i=e.meta)?void 0:i.noTagsView)||this.visitedViews.push(Object.assign({},e,{title:(null==(t=e.meta)?void 0:t.title)||"no-name"}))},addCachedView(){var e;const i=new Set;for(const s of this.visitedViews){const a=t(s);if(!!(null==(e=null==a?void 0:a.meta)?void 0:e.noCache))continue;const d=a.name;i.add(d)}Array.from(this.cachedViews).sort().toString()!==Array.from(i).sort().toString()&&(this.cachedViews=i)},delView(e){this.delVisitedView(e),this.addCachedView()},delVisitedView(e){for(const[i,t]of this.visitedViews.entries())if(t.path===e.path){this.visitedViews.splice(i,1);break}},delCachedView(){const e=s.currentRoute.value,i=a(this.getCachedViews,(i=>i===e.name));i>-1&&this.cachedViews.delete(this.getCachedViews[i])},delAllViews(){this.delAllVisitedViews(),this.addCachedView()},delAllVisitedViews(){this.visitedViews=o(w.getUserInfo)?this.visitedViews.filter((e=>{var i;return null==(i=null==e?void 0:e.meta)?void 0:i.affix})):[]},delOthersViews(e){this.delOthersVisitedViews(e),this.addCachedView()},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter((i=>{var t;return(null==(t=null==i?void 0:i.meta)?void 0:t.affix)||i.path===e.path}))},delLeftViews(e){const i=a(this.visitedViews,(i=>i.path===e.path));i>-1&&(this.visitedViews=this.visitedViews.filter(((t,s)=>{var a;return(null==(a=null==t?void 0:t.meta)?void 0:a.affix)||t.path===e.path||s>i})),this.addCachedView())},delRightViews(e){const i=a(this.visitedViews,(i=>i.path===e.path));i>-1&&(this.visitedViews=this.visitedViews.filter(((t,s)=>{var a;return(null==(a=null==t?void 0:t.meta)?void 0:a.affix)||t.path===e.path||s<i})),this.addCachedView())},updateVisitedView(e){for(let i of this.visitedViews)if(i.path===e.path){i=Object.assign(i,e);break}},setSelectedTag(e){this.selectedTag=e},setTitle(e,i){var t;for(const s of this.visitedViews)if(s.path===(i??(null==(t=this.selectedTag)?void 0:t.path))){s.meta.title=e;break}}}}),v=()=>{const e=c(l),{replace:i,currentRoute:t}=h(),s=r((()=>e.getSelectedTag));return{closeAll:i=>{e.delAllViews(),null==i||i()},closeLeft:i=>{e.delLeftViews(V(s)),null==i||i()},closeRight:i=>{e.delRightViews(V(s)),null==i||i()},closeOther:i=>{e.delOthersViews(V(s)),null==i||i()},closeCurrent:(i,s)=>{var a;(null==(a=null==i?void 0:i.meta)?void 0:a.affix)||(e.delView(i||V(t)),null==s||s())},refreshPage:async(s,a)=>{e.delCachedView();const{path:d,query:l}=s||V(t);await n(),i({path:"/redirect"+d,query:l}),null==a||a()},setTitle:(i,t)=>{e.setTitle(i,t)}}};export{c as a,v as u};
