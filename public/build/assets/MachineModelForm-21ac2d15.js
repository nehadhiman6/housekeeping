import $ from"./FormWrapper-5c0db3ce.js";import d from"./ButtonComp-7a3fe749.js";import c from"./InputLabel-69092e66.js";import k from"./TextInput-414aae93.js";import T from"./MachineTypeSelect-12373e3f.js";import U from"./BrandSelect-79e0fe45.js";import B from"./AttachmentUploadModal-e0f1d3c3.js";import{_ as u}from"./InputError-fee228bf.js";import{g as S}from"./globalMixin-827f0fbc.js";import{i as w,q as A,j as C,o as n,e as _,b as s,w as m,c as F,f,a as i,g as p}from"./app-92be7c25.js";import"./SelectInput-e436eb1f.js";import"./TextAreaInput-5805d6a7.js";import"./Pond-92ab9999.js";import"./Modal-6df8922c.js";import"./IconButton-924cc06d.js";import"./lg-thumbnail.es5-23dc7a40.js";/* empty css                                                     */const I={class:"flex flex-wrap items-end -mx-3"},N={class:"w-full max-w-full px-3 lg:w-1/3 md:w-1/3"},q={class:"mb-4"},R={class:"w-full max-w-full px-3 lg:w-1/3 md:w-1/3"},j={key:0,class:"mb-4"},E={class:"w-full max-w-full px-3 lg:w-1/3 md:w-1/3"},P={key:0,class:"mb-4"},Y={class:"w-full max-w-full px-3 lg:w-full md:w-full"},z={class:"mb-4"},ie={__name:"MachineModelForm",props:["form_id"],emits:["resetForm"],setup(b,{emit:h}){const r=b,{base_url:y,refreshComponent:g}=S(),t=w(new Form({form_id:0,model_no:"",machine_type_id:0,brand_id:0,resources:[]})),o=w({create_url:"machine-models",show:!0,showAttachment:!1,machineTypeInitials:[],machineTypeSelected:[],brandInitials:[],brandSelected:[]}),v=A(()=>r.form_id>0?"Update Machine Model":"Add Machine Model");C(()=>{r.form_id>0&&M()});const x=()=>{t.postForm(o.create_url).then(function(l){console.log(l),l.success&&(h("resetForm"),Utilities.showPopMessage("Your data has been saved successfully!"))}).catch(function(l){})},M=()=>{axios.get(y.value+"/machine-models/"+r.form_id+"/edit").then(function(l){if(l.data.success){let e=l.data.machine_model;t.model_no=e.model_no,e.machine_type&&(o.machineTypeInitials=[{id:e.machine_type.id,text:e.machine_type.name}],o.machineTypeSelected=[e.machine_type.id]),e.brand&&(o.brandInitials=[{id:e.brand.id,text:e.brand.name}],o.brandSelected=[e.brand.id]),t.resources=e.resources,g(o,"show")}t.form_id=r.form_id}).catch(function(l){})},V=(l=!1,e)=>{try{t.resources=e,o.showAttachment=!1}catch(a){console.log("error",a)}};return(l,e)=>(n(),_("div",null,[s($,{title:v.value},{default:m(()=>[o.showAttachment?(n(),F(B,{key:0,title:"Upload Image",onUpdateStatus:e[0]||(e[0]=a=>o.showAttachment=!1),onUpdateResources:V,"initial-resources":t.resources,"show-description":!1,"number-attachments":1,errors:t.errors},null,8,["initial-resources","errors"])):f("",!0),i("div",I,[i("div",N,[i("div",q,[s(c,{for:"model_no",value:"Model No."}),s(k,{modelValue:t.model_no,"onUpdate:modelValue":e[1]||(e[1]=a=>t.model_no=a),type:"text",required:"",autofocus:"",error:!!t.errors.get("model_no")},null,8,["modelValue","error"]),s(u,{class:"mt-2",message:t.errors.get("model_no")},null,8,["message"])])]),i("div",R,[o.show?(n(),_("div",j,[s(c,{for:"machine_type_id",value:"Machine Type"}),s(T,{modelValue:t.machine_type_id,"onUpdate:modelValue":e[2]||(e[2]=a=>t.machine_type_id=a),initials:o.machineTypeInitials,selected:o.machineTypeSelected},null,8,["modelValue","initials","selected"]),s(u,{class:"mt-2",message:t.errors.get("machine_type_id")},null,8,["message"])])):f("",!0)]),i("div",E,[o.show?(n(),_("div",P,[s(c,{for:"brand_id",value:"Brand"}),s(U,{modelValue:t.brand_id,"onUpdate:modelValue":e[3]||(e[3]=a=>t.brand_id=a),initials:o.brandInitials,selected:o.brandSelected},null,8,["modelValue","initials","selected"]),s(u,{class:"mt-2",message:t.errors.get("brand_id")},null,8,["message"])])):f("",!0)]),i("div",Y,[i("div",z,[s(d,{onButtonClicked:x,type:"save",class:"mr-2"},{default:m(()=>[p(" Save ")]),_:1}),s(d,{onButtonClicked:e[4]||(e[4]=a=>o.showAttachment=!0),class:"mr-2",type:"save"},{default:m(()=>[p("Upload Attachment")]),_:1}),s(d,{onButtonClicked:e[5]||(e[5]=a=>h("resetForm")),type:"cancel"},{default:m(()=>[p(" Cancel ")]),_:1})])])])]),_:1},8,["title"])]))}};export{ie as default};
