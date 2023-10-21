import{g as f}from"./globalMixin-827f0fbc.js";import{d as m,q as g,j as x,a8 as v,o as y,e as b,n as w}from"./app-92be7c25.js";const h=["disabled","multiple","value"],B={__name:"DepartmentSelect",props:{modelValue:[String,Number],index:{default:-1,type:[String,Number]},initials:{default:()=>[],type:Array},selected:{default:()=>[],type:Array},url:{default:"departments/filtered",type:String},getIndex:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean},customClass:{default:"selectItem",type:String},focus:{default:!1,type:Boolean},enableNew:{default:!1,type:Boolean},placeholder:{default:"Select Department",type:String},type:{default:"all",type:String},multiple:{default:!1,type:Boolean},allowClear:{default:!0,type:Boolean},error:{default:!1}},emits:["updateDepartment","update:modelValue"],setup(n,{emit:r}){const e=n,{base_url:u}=f(),d=m(0),i=g(()=>e.error?"department_"+e.index+" border-red-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full":"department_"+e.index+" border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full");x(()=>{s()}),v(()=>{$(".department_"+e.index).select2("destroy")});const s=()=>{var a=$(".department_"+e.index);a.select2({dropdownAutoWidth:!0,placeholder:e.placeholder,allowClear:e.allowClear,width:"100%",data:e.initials,dropdownParent:$("body"),ajax:{method:"POST",url:function(){return u.value+"/"+e.url},delay:250,dataType:"json",cache:!0,data:function(t){var l={search:t.term,page:t.page||1,type:e.type};return l},processResults:function(t,l){return l.page=l.page||1,t.results.forEach(function(o){o.text=o.name}),t.pagination={more:l.page*30<t.count_filtered},t}},templateResult:c,templateSelection:p}).on("change",function(){console.log("select2 change ");var t=$(".department_"+e.index).val();e.multiple==!1?r("update:modelValue",t):e.multiple==!0&&r("updateDepartment",t,e.index)}).on("select2:select",function(t){console.log("select2 Select ");var l=$(".department_"+e.index).val();d.value=t.params.data,d.value!={}&&r("updateDepartment",l,e.index,d.value)}).on("select2:clear",function(t){var l=$(".department_"+e.index).val();if(e.multiple==!1){var o=l||0;r("input",o)}}),typeof e.index<"u"&&$(".department_"+e.index).val(e.selected).change()},c=a=>{if(!a.id)return a.text;var t=$('<div class="flex flex-wrap -mx-3"><div class="w-full md:w-1/1 px-3 md:mb-0">'+a.text+"</div></div>");return t},p=a=>{if(!a.id)return a.text;var t=$('<div class="flex flex-wrap -mx-3"><div class="w-full md:w-1/1 px-3 mb-6 md:mb-0">'+a.text+"</div></div>");return t};return(a,t)=>(y(),b("select",{disabled:n.disabled,multiple:n.multiple,class:w(i.value),value:n.modelValue,key:e.index,onInput:t[0]||(t[0]=l=>a.$emit("update:modelValue",l.target.value))},null,42,h))}};export{B as default};