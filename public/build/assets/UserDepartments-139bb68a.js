import"./index-4bb81809.js";import{_ as x}from"./AppLayout-44e5a529.js";import v from"./ListWrapper-0c2f9604.js";import k from"./ButtonComp-7a3fe749.js";import{g as y}from"./globalMixin-827f0fbc.js";import D from"./UserNav-1c365146.js";import S from"./InputLabel-69092e66.js";import C from"./FormWrapper-5c0db3ce.js";import B from"./DepartmentSelect-20b0fcb3.js";import{i as p,j as I,o as u,c as N,w as o,b as n,a,e as T,f as U,g as V}from"./app-92be7c25.js";import"./SideNavLink-7f5d99b7.js";import"./SideNavDropDown-3a860ee4.js";import"./SideDropDownItemLink-cd206ce4.js";import"./ProjectLogo-ab93dec1.js";import"./BreadCrumbs-ba3968f1.js";import"./UpperNavLink-2b7e1e80.js";const F={class:"flex flex-wrap items-end -mx-3"},M={class:"w-full max-w-full px-3 shrink-0 md:w-1/2 md:flex-0"},Y={key:0,class:"mb-4"},E={class:"w-full max-w-full px-3 shrink-0 lg:w-1/2 md:w-1/3 md:flex-0"},j={class:"mb-4"},A={class:"flex flex-wrap -mx-3"},L={class:"shrink-0 md:w-full md:flex-0"},P=a("table",{id:"departments_list",width:"100%",class:"row-border stripe"},null,-1),re={__name:"UserDepartments",props:["user","user_departments"],setup(_){const r=_,{base_url:d,refreshComponent:f}=y(),l=p(new Form({user_id:r.user.id,department_ids:[]})),e=p({active:"Y",table:null,user_id:"0",user_departments:[],create_url:"user-departments",showSelect:!0,departmentInitials:[],departmentSelected:[]});I(()=>{e.user_id=r.user.id,e.user_departments=r.user_departments,m(),h()});const h=()=>{e.table=$("#departments_list").DataTable({processing:!0,searchDelay:700,ordering:!0,scrollY:"350px",scrollCollapse:!1,pageLength:10,createdRow:function(t,s,i){$(t).addClass("bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600")},data:[],columns:[{title:"#",data:"id",render:function(t,s,i,c){return c.row+1}},{title:"Department",data:"id",render:function(t,s,i,c){return i.name}}]})},w=()=>{e.table.clear(),e.table.rows.add(e.departments).draw()},m=()=>{axios.get(d.value+"/get-departments/",{params:{user_id:e.user_id}}).then(function(t){t.data.success&&(e.departments=t.data.departments,e.departmentInitials=[],e.departmentSelected=[],e.departments.forEach(s=>{e.departmentInitials.push({id:s.id,text:s.name}),e.departmentSelected.push(s.id)}),f(e,"showSelect"),w())}).catch(function(t){console.log(t)})},b=()=>{l.postForm(d.value+"/"+e.create_url).then(function(t){t.success&&(Utilities.showPopMessage("Your data has been saved successfully!"),m())}).catch(function(t){})},g=t=>{l.department_ids=t};return(t,s)=>(u(),N(x,{title:r.user.name+"'s Departments"},{default:o(()=>[n(D),a("div",null,[n(C,{title:r.user.name},{default:o(()=>[a("div",F,[a("div",M,[e.showSelect?(u(),T("div",Y,[n(S,{for:"department",value:"Departments"}),n(B,{onUpdateDepartment:g,multiple:!0,initials:e.departmentInitials,selected:e.departmentSelected},null,8,["initials","selected"])])):U("",!0)]),a("div",E,[a("div",j,[n(k,{onButtonClicked:b,type:"save"},{default:o(()=>[V("Update")]),_:1})])])])]),_:1},8,["title"]),a("div",A,[a("div",L,[n(v,{title:r.user.name+":Departments Assigned"},{table:o(()=>[P]),_:1},8,["title"])])])])]),_:1},8,["title"]))}};export{re as default};