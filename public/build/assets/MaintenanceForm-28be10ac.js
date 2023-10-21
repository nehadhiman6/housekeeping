import h from"./FormWrapper-5c0db3ce.js";import m from"./ButtonComp-7a3fe749.js";import c from"./InputLabel-69092e66.js";import V from"./TextInput-414aae93.js";import b from"./TextAreaInput-5805d6a7.js";import{_ as d}from"./InputError-fee228bf.js";import{g as F}from"./globalMixin-827f0fbc.js";import{i as u,q as M,j as k,o as y,e as $,b as s,w as i,a,g as f}from"./app-92be7c25.js";const B={class:"flex flex-wrap items-end -mx-3"},C={class:"w-full max-w-full px-3 shrink-0 lg:w-1/2 md:w-1/2 md:flex-0"},N={class:"mb-4"},U={class:"w-full max-w-full px-3 shrink-0 lg:w-1/2 md:w-1/2 md:flex-0"},q={class:"mb-4"},T={class:"w-full max-w-full px-3 shrink-0 lg:w-1/4 md:w-1/3 md:flex-0"},j={class:"mb-4"},H={__name:"MaintenanceForm",props:["form_id"],emits:["resetForm"],setup(_,{emit:l}){const n=_,{base_url:p}=F(),e=u(new Form({form_id:0,name:"",description:""})),x=u({create_url:"maintenances"}),g=M(()=>n.form_id>0?"Update Maintenance":"Add Maintenance");k(()=>{n.form_id>0&&w()});const v=()=>{e.postForm(x.create_url).then(function(o){console.log(o),o.success&&(l("resetForm"),Utilities.showPopMessage("Your data has been saved successfully!"))}).catch(function(o){})},w=()=>{axios.get(p.value+"/maintenances/"+n.form_id+"/edit").then(function(o){if(o.data.success){let t=o.data.maintenance;e.name=t.name,e.description=t.description}e.form_id=n.form_id}).catch(function(o){})};return(o,t)=>(y(),$("div",null,[s(h,{title:g.value},{default:i(()=>[a("div",B,[a("div",C,[a("div",N,[s(c,{for:"name",value:"Name"}),s(V,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.name=r),type:"text",required:"",autofocus:"",error:!!e.errors.get("name")},null,8,["modelValue","error"]),s(d,{class:"mt-2",message:e.errors.get("name")},null,8,["message"])])]),a("div",U,[a("div",q,[s(c,{for:"description",value:"Description"}),s(b,{modelValue:e.description,"onUpdate:modelValue":t[1]||(t[1]=r=>e.description=r),type:"text",required:"",error:!!e.errors.get("description")},null,8,["modelValue","error"]),s(d,{class:"mt-2",message:e.errors.get("description")},null,8,["message"])])]),a("div",T,[a("div",j,[s(m,{onButtonClicked:v,type:"save"},{default:i(()=>[f("Save")]),_:1}),s(m,{onButtonClicked:t[2]||(t[2]=r=>l("resetForm")),type:"cancel"},{default:i(()=>[f("Cancel")]),_:1})])])])]),_:1},8,["title"])]))}};export{H as default};