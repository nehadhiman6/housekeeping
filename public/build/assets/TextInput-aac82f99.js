import{d as n,j as l,o as r,e as d}from"./app-92be7c25.js";const i=["value"],m={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(u,{expose:t}){const e=n(null);return l(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(a,o)=>(r(),d("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=s=>a.$emit("update:modelValue",s.target.value))},null,40,i))}};export{m as _};
