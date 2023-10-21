import{K as u,i as l,j as h,l as b,o as i,c as s,w as m,s as g,B as y,a as p,f as x,b as v}from"./app-92be7c25.js";import"./index-4bb81809.js";import{_ as w}from"./AppLayout-44e5a529.js";import M from"./ListWrapper-0c2f9604.js";import k from"./CaseFilter-afb10de9.js";import{g as D}from"./globalMixin-827f0fbc.js";import"./SideNavLink-7f5d99b7.js";import"./SideNavDropDown-3a860ee4.js";import"./SideDropDownItemLink-cd206ce4.js";import"./ProjectLogo-ab93dec1.js";import"./BreadCrumbs-ba3968f1.js";import"./FilterWrapper-3eb81350.js";import"./ButtonComp-7a3fe749.js";import"./InputLabel-69092e66.js";import"./InputError-fee228bf.js";import"./MachineTypeSelect-12373e3f.js";import"./MachineModelSelect-8f2a2e9e.js";import"./DepartmentSelect-20b0fcb3.js";import"./DatePicker-3e693273.js";const R=p("table",{id:"service_list",width:"100%",class:"row-border stripe"},null,-1),J={__name:"MachineReport",props:[],setup(C){u();const{base_url:c,canAny:S}=D(),o=l({formOpen:!1,table:null,form_id:0,random:Utilities.getRandomNumber()}),t=l(new Form({machine_type_id:0,model_id:0,department_id:0,from_date:CMS.from_date,to_date:CMS.today})),d=()=>{o.form_id=0,o.table.ajax.reload(null,!1),o.formOpen=!1};h(()=>{_()});const _=()=>{o.table=$("#service_list").DataTable({dom:"Bfrtip",lengthMenu:[[10,25,50,-1],["10 rows","25 rows","50 rows","Show all"]],buttons:["pageLength",{extend:"excelHtml5",header:!0,footer:!0,exportOptions:{orthogonal:"export"},filename:function(){return"Housekeeping Machines Report (From Date :"+t.from_date+" To Date :"+t.to_date+") "},title:function(){var e="Housekeeping Machines Report (From Date :"+t.from_date+" To Date :"+t.to_date+") ";return e}},{extend:"pdfHtml5",orientation:"landscape",exportOptions:{orthogonal:"export"},customize:function(e){e.content[1].table.body.forEach(r=>{r.forEach(a=>{a.alignment="center"})}),e.content[1].table.widths=Array(e.content[1].table.body[0].length+1).join("*").split("")}}],processing:!0,serverSide:!0,searchDelay:700,ordering:!0,scrollY:"350px",scrollCollapse:!1,pageLength:10,ajax:{url:c.value+"/machines-report",type:"GET",data:function(e){e.report=!0,e.machine_type_id=t.machine_type_id,e.model_id=t.model_id,e.department_id=t.department_id,e.from_date=t.from_date,e.to_date=t.to_date}},createdRow:function(e,r,a){$(e).addClass("bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600")},columns:[{title:"Sr no.",data:"id",render:function(e,r,a,n){var f=n.row+parseInt(n.settings.json.start)+1;return f}},{title:"Machine Serial No",data:"serial_no"},{title:"Machine Code",data:"name_code_no"},{title:"Brand",data:"brand_name"},{title:"Machine Type",data:"machine_type"},{title:"Model",data:"model_no"},{title:"Department",data:"department_name"},{title:"Installation Date",data:"installation_date"},{title:"Warranty Upto Date",data:"warranty_upto_date"},{title:"No. of cases generated",data:"no_cases",render:function(e,r,a,n){return"<a   data-item-id="+a.id+" class='font-bold cursor-pointer text-sky-600 text-base services' >"+e+"</a>"}},{title:"No. of Services",data:"no_services",render:function(e,r,a,n){return"<a   data-item-id="+a.id+" class='font-bold cursor-pointer text-sky-600 text-base services' >"+e+"</a>"}}]})};return(e,r)=>{const a=b("case-form");return i(),s(w,{title:"Machine Report "},{default:m(()=>[g((i(),s(k,{key:o.random,form:t,onReloadTable:d},null,8,["form"])),[[y,o.formOpen==!1]]),p("div",null,[o.formOpen?(i(),s(a,{key:0,onReloadTable:d,form_id:o.form_id},null,8,["form_id"])):x("",!0),v(M,{title:"Machines  Report ( "+t.from_date+" - "+t.to_date+" )"},{table:m(()=>[R]),_:1},8,["title"])])]),_:1})}}};export{J as default};