import{_ as l}from"./nuxt-link.3333497d.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{p as o,$ as d,a0 as p,o as n,X as s,V as u,m as _,Y as a,Z as f}from"./entry.da67d678.js";const h={layout:"list",async asyncData({$content:t}){return{memos:await t("memos").sortBy("position","desc").fetch()}},head(){return{title:"Memoliste",meta:[{hid:"description",name:"description",content:"Eine Kollektion von Memoranden."}]}}};function x(t,r,y,k,$,B){const i=l;return n(),o("div",null,[(n(!0),o(d,null,p(t.memos,(e,c)=>(n(),o("div",{key:c,class:"short-article one-third column"},[s("h3",null,[u(i,{to:e.path},{default:_(()=>[f(a(e.title),1)]),_:2},1032,["to"])]),s("p",null,a(e.description),1)]))),128))])}const g=m(h,[["render",x]]);export{g as default};
