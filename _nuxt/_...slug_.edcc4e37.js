import u from"./ContentRenderer.a72c5825.js";import d from"./ContentDoc.5c58779d.js";import{a as c,X as _,D as h,p as i,t as f,o as A,j as N,V as r,w as $,Y as t,Z as a,$ as l,u as s,a0 as o}from"./entry.2710d754.js";import"./ContentRendererMarkdown.1ef2209d.js";import"./index.a6ef77ff.js";import"./head.80b85542.js";import"./ContentQuery.53e90181.js";import"./asyncData.e55cc54f.js";const b={id:"article-timestamp"},g=["datetime","title"],w=t("br",{class:"bigScreen"},null,-1),C=t("span",{class:"mobileScreen"},", ",-1),V=["datetime","title"],H=c({__name:"[...slug]",setup(k){return _(),h(),i(),i(),f({meta:[{hid:"description",name:"description",content:""}]}),(n,B)=>{const p=u,m=d;return A(),N("main",null,[r(m,{path:n.$route.path},{default:$(({doc:e})=>[t("article",null,[t("header",null,[t("h1",null,a(e.title),1),t("section",b,[t("i",null,[t("b",null,a(n.$t("created")),1)]),l(),t("time",{datetime:e.createdAt,title:e.createdAt},a(s(o)(e.createdAt).fromNow()),9,g),w,C,t("i",null,[t("b",null,a(n.$t("updated")),1)]),l(),t("time",{datetime:e.updatedAt,title:e.updatedAt},a(typeof e.updatedAt=="string"?s(o)(e.updatedAt).fromNow():s(o)(e.updatedAt[e.updatedAt.length-1]).fromNow()),9,V)])]),r(p,{value:e},null,8,["value"])])]),_:1},8,["path"])])}}});export{H as default};
