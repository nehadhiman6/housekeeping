import y from"./FormWrapper-5c0db3ce.js";import p from"./ButtonComp-7a3fe749.js";import m from"./InputLabel-69092e66.js";import f from"./TextInput-414aae93.js";import U from"./DepartmentSelect-20b0fcb3.js";import $ from"./AreaSelect-d5b0446d.js";import{_ as i}from"./InputError-fee228bf.js";import{g as k}from"./globalMixin-827f0fbc.js";import{i as w,q as A,j as F,o as d,e as _,b as t,w as c,a as s,f as g,g as h}from"./app-92be7c25.js";const N={class:"flex flex-wrap items-end -mx-3"},B={class:"w-full max-w-full px-3 lg:w-1/2 md:w-1/2"},M={class:"mb-4"},q={class:"w-full max-w-full px-3 lg:w-1/2 md:w-1/2"},S={key:0,class:"mb-4"},I={class:"w-full max-w-full px-3 lg:w-1/2 md:w-1/2"},P={class:"mb-4"},T={class:"w-full max-w-full px-3 lg:w-1/2 md:w-1/2"},j={key:0,class:"mb-4"},E={class:"flex flex-wrap items-end -mx-3"},Y={class:"w-full max-w-full px-3 lg:w-1/3 md:w-1/3"},z={class:"mb-4"},ee={__name:"DepartmentChange",props:["machine_id"],emits:["resetForm"],setup(v,{emit:u}){const o=v,{base_url:x,copyProperties:G,refreshComponent:H}=k(),e=w(new Form({machine_id:0,new_dept_id:0,department_name:"",area_name:"",new_area_id:0})),r=w({create_url:"change-department",showDepartment:!0,showArea:!0}),V=A(()=>o.machine_id>0?"Update Department Change":"Add Department Change");F(()=>{o.machine_id>0&&C()});const b=()=>{e.postForm(r.create_url).then(function(n){console.log(n),n.success&&(u("resetForm"),Utilities.showPopMessage("Your data has been saved successfully!"))}).catch(function(n){})},C=()=>{axios.get(x.value+"/machines/"+o.machine_id+"/edit").then(function(n){if(n.data.success){let a=n.data.machine;console.log(a),e.machine_id=a.id,a.department&&(e.department_name=a.department.name),a.area&&(e.area_name=a.area.name)}e.machine_id=o.machine_id}).catch(function(n){console.log(n)})},D=()=>{e.new_area_id=0,Utilities.refreshComponent(r,"showArea")};return(n,a)=>(d(),_("div",null,[t(y,{title:V.value},{default:c(()=>[s("div",N,[s("div",B,[s("div",M,[t(m,{for:"department_name",value:"Current Department"}),t(f,{modelValue:e.department_name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.department_name=l),disabled:"",type:"text",required:"",error:!!e.errors.get("department_name")},null,8,["modelValue","error"]),t(i,{class:"mt-2",message:e.errors.get("department_name")},null,8,["message"])])]),s("div",q,[r.showDepartment?(d(),_("div",S,[t(m,{for:"new_dept_id",value:"New Department"}),t(U,{modelValue:e.new_dept_id,"onUpdate:modelValue":a[1]||(a[1]=l=>e.new_dept_id=l),initials:r.departmentInitials,selected:r.departmentSelected,onUpdateDepartment:D},null,8,["modelValue","initials","selected"]),t(i,{class:"mt-2",message:e.errors.get("new_dept_id")},null,8,["message"])])):g("",!0)]),s("div",I,[s("div",P,[t(m,{for:"area_name",value:"Current Area"}),t(f,{modelValue:e.area_name,"onUpdate:modelValue":a[2]||(a[2]=l=>e.area_name=l),type:"text",disabled:"",required:"",autofocus:"",error:!!e.errors.get("area_name")},null,8,["modelValue","error"]),t(i,{class:"mt-2",message:e.errors.get("area_name")},null,8,["message"])])]),s("div",T,[r.showArea?(d(),_("div",j,[t(m,{for:"area_id",value:"New Area"}),t($,{modelValue:e.area_id,"onUpdate:modelValue":a[3]||(a[3]=l=>e.area_id=l),department_id:e.new_dept_id,initials:r.areaInitials,selected:r.areaSelected},null,8,["modelValue","department_id","initials","selected"]),t(i,{class:"mt-2",message:e.errors.get("area_id")},null,8,["message"])])):g("",!0)])]),s("div",E,[s("div",Y,[s("div",z,[t(p,{onButtonClicked:b,type:"save"},{default:c(()=>[h(" Save ")]),_:1}),t(p,{onButtonClicked:a[4]||(a[4]=l=>u("resetForm")),type:"cancel"},{default:c(()=>[h(" Cancel ")]),_:1})])])])]),_:1},8,["title"])]))}};export{ee as default};