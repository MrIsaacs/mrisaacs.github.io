import c from"./ContentRenderer.a72c5825.js";import d from"./ContentDoc.5c58779d.js";import{a as _,X as f,D as h,p as A,t as N,o as b,j as w,V as r,w as $,Y as t,Z as a,$ as l,u as n,a0 as o}from"./entry.2710d754.js";import"./ContentRendererMarkdown.1ef2209d.js";import"./index.a6ef77ff.js";import"./head.80b85542.js";import"./ContentQuery.53e90181.js";import"./asyncData.e55cc54f.js";const g={id:"article-timestamp"},j=["datetime","title"],k=t("br",{class:"bigScreen"},null,-1),x=t("span",{class:"mobileScreen"},", ",-1),C=["datetime","title"],X=_({__name:"index",setup(D){const{locale:V,t:s}=f();h();const{name:p}=A();return N({title:s(p),meta:[{hid:"description",name:"description",content:s("projectDescription")}]}),(i,B)=>{const m=c,u=d;return b(),w("main",null,[r(u,{path:"/projects/projekte"},{default:$(({doc:e})=>[t("article",null,[t("header",null,[t("h1",null,a(e.title),1),t("section",g,[t("i",null,[t("b",null,a(i.$t("created")),1)]),l(),t("time",{datetime:e.createdAt,title:e.createdAt},a(n(o)(e.createdAt).fromNow()),9,j),k,x,t("i",null,[t("b",null,a(i.$t("updated")),1)]),l(),t("time",{datetime:e.updatedAt,title:e.updatedAt},a(typeof e.updatedAt=="string"?n(o)(e.updatedAt).fromNow():n(o)(e.updatedAt[e.updatedAt.length-1]).fromNow()),9,C)])]),r(m,{value:e},null,8,["value"])])]),_:1})])}}});export{X as default};
