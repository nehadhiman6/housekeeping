import{y as x,j as w,z as y,q as f,o as v,c as h,b as o,w as l,C as n,G as p,s as c,B as i,a,n as b,r as g,f as k}from"./app-92be7c25.js";const B={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},C=a("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),_=[C],N={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:d}){const s=e;x(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&d("close")},r=t=>{t.key==="Escape"&&s.show&&m()};w(()=>document.addEventListener("keydown",r)),y(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const u=f(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl"})[s.maxWidth]);return(t,E)=>(v(),h(p,{to:"body"},[o(n,{"leave-active-class":"duration-200"},{default:l(()=>[c(a("div",B,[o(n,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[c(a("div",{class:"fixed inset-0 transform transition-all",onClick:m},_,512),[[i,e.show]])]),_:1}),o(n,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[c(a("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",u.value])},[e.show?g(t.$slots,"default",{key:0}):k("",!0)],2),[[i,e.show]])]),_:3})],512),[[i,e.show]])]),_:3})]))}};export{N as default};