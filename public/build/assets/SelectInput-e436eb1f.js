import{d,j as c,q as f,o as s,e as t,F as m,h as p,n as g,t as v}from"./app-92be7c25.js";const b=["value"],y=["value"],h={__name:"SelectInput",props:{modelValue:[String,Number],options:Array,error:Boolean},emits:["update:modelValue"],setup(r,{expose:a}){const n=r,o=d(null);c(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()});const l=f(()=>n.error?"border-red-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full":"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full");return a({focus:()=>o.value.focus()}),(i,u)=>(s(),t("select",{ref_key:"input",ref:o,class:g(l.value),value:r.modelValue,onInput:u[0]||(u[0]=e=>i.$emit("update:modelValue",e.target.value))},[(s(!0),t(m,null,p(r.options,e=>(s(),t("option",{key:e.id,value:e.id},v(e.text),9,y))),128))],42,b))}};export{h as default};
