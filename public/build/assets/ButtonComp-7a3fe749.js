import{q as r,o as s,e as l,r as d,n as p,m as c}from"./app-92be7c25.js";const g={__name:"ButtonComp",props:{type:{type:String,default:"button"},size:{type:String,default:"md"}},setup(n){const e=n,t=r(()=>e.size=="md"?"px-8 py-2":e.size=="sm"?"px-6 py-1":e.size=="lg"?"px-10 py-2":""),i=r(()=>e.type=="new"?"inline-block "+t.value+" ml-auto  font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-secondary border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85":e.type=="save"?"inline-block "+t.value+"  ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-primary border border-indigo-500 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85":e.type=="cancel"?"inline-block "+t.value+" ml-2 font-bold leading-normal text-center text-gray-400 align-middle transition-all ease-in border border-gray-400 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85":"");return(o,a)=>(s(),l("button",{class:p(i.value),onClick:a[0]||(a[0]=c(m=>o.$emit("buttonClicked"),["prevent"]))},[d(o.$slots,"default")],2))}};export{g as default};