import{q as o,o as n,e as u,a as c,n as t,r as i,c as d,w as p,u as f,p as b}from"./app-92be7c25.js";const g=["id"],h={__name:"TabLink",props:{href:String,active:Boolean,icon:String,id:String,type:{type:String,default:"button"},colorClass:String},setup(r){const e=r,a=o(()=>e.active?"inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"),s=o(()=>"relative top-0 leading-normal mr-2 "+e.colorClass+" "+e.icon+" text-sm");return(l,m)=>e.type=="button"?(n(),u("span",{key:0,id:e.id,class:t(a.value)},[c("i",{class:t(s.value)},null,2),i(l.$slots,"default")],10,g)):(n(),d(f(b),{key:1,href:r.href,class:t(a.value)},{default:p(()=>[c("i",{class:t(s.value)},null,2),i(l.$slots,"default")]),_:3},8,["href","class"]))}};export{h as default};
