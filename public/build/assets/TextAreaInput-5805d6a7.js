import{q as s,d,j as i,o as p,e as c,n as f}from"./app-92be7c25.js";const m=["value"],g={__name:"TextAreaInput",props:{modelValue:String,error:Boolean},emits:["update:modelValue"],setup(o,{expose:r}){const t=o,l=s(()=>t.error?"focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-red-400 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none":"focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"),e=d(null);return i(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),r({focus:()=>e.value.focus()}),(n,a)=>(p(),c("textarea",{ref_key:"input",ref:e,class:f(l.value),value:o.modelValue,onInput:a[0]||(a[0]=u=>n.$emit("update:modelValue",u.target.value))},null,42,m))}};export{g as default};
