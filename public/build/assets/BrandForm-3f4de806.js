import v from"./FormWrapper-5c0db3ce.js";import i from"./ButtonComp-7a3fe749.js";import w from"./InputLabel-69092e66.js";import b from"./TextInput-414aae93.js";import{_ as h}from"./InputError-fee228bf.js";import{g as B}from"./globalMixin-827f0fbc.js";import{i as d,q as F,j as k,o as V,e as $,b as o,w as n,a as s,g as c}from"./app-92be7c25.js";const y={class:"flex flex-wrap items-end -mx-3"},C={class:"w-full max-w-full px-3 shrink-0 lg:w-1/2 md:w-1/2 md:flex-0"},N={class:"mb-4"},M={class:"w-full max-w-full px-3 shrink-0 lg:w-1/4 md:w-1/3 md:flex-0"},U={class:"mb-4"},Y={__name:"BrandForm",props:["form_id"],emits:["resetForm"],setup(f,{emit:m}){const r=f,{base_url:u}=B(),t=d(new Form({form_id:0,name:""})),_=d({create_url:"brands"}),p=F(()=>r.form_id>0?"Update Brand":"Add Brand");k(()=>{r.form_id>0&&g()});const x=()=>{t.postForm(_.create_url).then(function(e){console.log(e),e.success&&(m("resetForm"),Utilities.showPopMessage("Your data has been saved successfully!"))}).catch(function(e){})},g=()=>{axios.get(u.value+"/brands/"+r.form_id+"/edit").then(function(e){if(e.data.success){let a=e.data.brand;t.name=a.name}t.form_id=r.form_id}).catch(function(e){})};return(e,a)=>(V(),$("div",null,[o(v,{title:p.value},{default:n(()=>[s("div",y,[s("div",C,[s("div",N,[o(w,{for:"name",value:"Name"}),o(b,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=l=>t.name=l),type:"text",required:"",autofocus:"",error:!!t.errors.get("name")},null,8,["modelValue","error"]),o(h,{class:"mt-2",message:t.errors.get("name")},null,8,["message"])])]),s("div",M,[s("div",U,[o(i,{onButtonClicked:x,type:"save"},{default:n(()=>[c(" Save ")]),_:1}),o(i,{onButtonClicked:a[1]||(a[1]=l=>m("resetForm")),type:"cancel"},{default:n(()=>[c(" Cancel ")]),_:1})])])])]),_:1},8,["title"])]))}};export{Y as default};
