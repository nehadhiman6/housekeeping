import k from"./FormWrapper-5c0db3ce.js";import f from"./ButtonComp-7a3fe749.js";import i from"./InputLabel-69092e66.js";import d from"./TextInput-414aae93.js";import q from"./SelectInput-e436eb1f.js";import{_ as m}from"./InputError-fee228bf.js";import{g as U}from"./globalMixin-827f0fbc.js";import{i as c,q as _,j as y,o as F,e as $,b as o,w as n,a as r,g as p}from"./app-92be7c25.js";const N={class:"flex flex-wrap items-end -mx-3"},B={class:"w-full max-w-full px-3 shrink-0 md:w-1/4 md:flex-0"},C={class:"mb-4"},S={class:"w-full max-w-full px-3 shrink-0 md:w-1/4 md:flex-0"},E={class:"mb-4"},M={class:"w-full max-w-full px-3 shrink-0 md:w-1/4 md:flex-0"},P={class:"mb-4"},J={class:"w-full max-w-full px-3 shrink-0 md:w-1/4 md:flex-0"},O={class:"mb-4"},T={class:"w-full max-w-full px-3 shrink-0 md:w-1/4 md:flex-0"},j={class:"mb-4"},A={class:"w-full max-w-full px-3 shrink-0 lg:w-1/4 md:w-1/3 md:flex-0"},R={class:"mb-4"},Q={__name:"UserForm",props:["form_id","roles"],emits:["resetForm"],setup(w,{emit:u}){const t=w,{base_url:g}=U(),e=c(new Form({form_id:0,name:"",email:"",role_id:0,password_confirmation:"",password:""})),x=c({create_url:"users"}),v=_(()=>t.form_id>0?"Update  User":"Add User"),V=_(()=>{let l=JSON.parse(JSON.stringify(t.roles));return l.forEach(s=>{s.text=s.name}),l});y(()=>{t.form_id>0&&b()});const h=()=>{e.postForm(x.create_url).then(function(l){console.log(l),l.success&&(u("resetForm"),Utilities.showPopMessage("Your data has been saved successfully!"))}).catch(function(l){})},b=()=>{axios.get(g.value+"/users/"+t.form_id+"/edit").then(function(l){if(l.data.success){let s=l.data.user;e.name=s.name,e.email=s.email,s.roles.length>0&&(e.role_id=s.roles[0].role_id)}e.form_id=t.form_id}).catch(function(l){})};return(l,s)=>(F(),$("div",null,[o(k,{title:v.value},{default:n(()=>[r("div",N,[r("div",B,[r("div",C,[o(i,{for:"name",value:"Name",required:""}),o(d,{modelValue:e.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.name=a),type:"text",required:"",autofocus:"",error:!!e.errors.get("name")},null,8,["modelValue","error"]),o(m,{class:"mt-2",message:e.errors.get("name")},null,8,["message"])])]),r("div",S,[r("div",E,[o(i,{for:"email",value:"Email",required:""}),o(d,{modelValue:e.email,"onUpdate:modelValue":s[1]||(s[1]=a=>e.email=a),type:"email",required:"",autofocus:"",error:!!e.errors.get("email")},null,8,["modelValue","error"]),o(m,{class:"mt-2",message:e.errors.get("email")},null,8,["message"])])]),r("div",M,[r("div",P,[o(i,{for:"password",value:"Password",required:""}),o(d,{modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=a=>e.password=a),type:"password",required:"",autofocus:"",error:!!e.errors.get("password")},null,8,["modelValue","error"]),o(m,{class:"mt-2",message:e.errors.get("password")},null,8,["message"])])]),r("div",J,[r("div",O,[o(i,{for:"password_confirmation",value:"Confirm Password",required:""}),o(d,{modelValue:e.password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=a=>e.password_confirmation=a),type:"password",required:"",autofocus:"",error:!!e.errors.get("password_confirmation")},null,8,["modelValue","error"]),o(m,{class:"mt-2",message:e.errors.get("password_confirmation")},null,8,["message"])])]),r("div",T,[r("div",j,[o(i,{for:"role_id",value:"Role",required:""}),o(q,{modelValue:e.role_id,"onUpdate:modelValue":s[4]||(s[4]=a=>e.role_id=a),options:V.value,autofocus:"",error:!!e.errors.get("role_id")},null,8,["modelValue","options","error"]),o(m,{class:"mt-2",message:e.errors.get("role_id")},null,8,["message"])])]),r("div",A,[r("div",R,[o(f,{onButtonClicked:h,type:"save"},{default:n(()=>[p("Save")]),_:1}),o(f,{onButtonClicked:s[5]||(s[5]=a=>u("resetForm")),type:"cancel"},{default:n(()=>[p("Cancel")]),_:1})])])])]),_:1},8,["title"])]))}};export{Q as default};