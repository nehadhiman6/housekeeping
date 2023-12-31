import{K as u,i as s,j as b,o as d,c as l,w as m,s as h,B as g,a as p,b as y}from"./app-92be7c25.js";import"./index-4bb81809.js";import{_ as x}from"./AppLayout-44e5a529.js";import w from"./ListWrapper-0c2f9604.js";import v from"./CaseFilter-afb10de9.js";import{g as C}from"./globalMixin-827f0fbc.js";import"./SideNavLink-7f5d99b7.js";import"./SideNavDropDown-3a860ee4.js";import"./SideDropDownItemLink-cd206ce4.js";import"./ProjectLogo-ab93dec1.js";import"./BreadCrumbs-ba3968f1.js";import"./FilterWrapper-3eb81350.js";import"./ButtonComp-7a3fe749.js";import"./InputLabel-69092e66.js";import"./InputError-fee228bf.js";import"./MachineTypeSelect-12373e3f.js";import"./MachineModelSelect-8f2a2e9e.js";import"./DepartmentSelect-20b0fcb3.js";import"./DatePicker-3e693273.js";const k=p("table",{id:"service_list",width:"100%",class:"row-border stripe"},null,-1),K={__name:"CaseReport",props:[],setup(M){u();const{base_url:c,canAny:R}=C(),o=s({formOpen:!1,table:null,form_id:0,random:Utilities.getRandomNumber()}),t=s(new Form({machine_type_id:0,model_id:0,department_id:0,from_date:CMS.from_date,to_date:CMS.today})),_=()=>{o.form_id=0,o.table.ajax.reload(null,!1),o.formOpen=!1};b(()=>{f()});const f=()=>{o.table=$("#service_list").DataTable({dom:"Bfrtip",lengthMenu:[[10,25,50,-1],["10 rows","25 rows","50 rows","Show all"]],buttons:["pageLength",{extend:"excelHtml5",header:!0,footer:!0,exportOptions:{orthogonal:"export"},filename:function(){return"Housekeeping Machines Cases Report (From Date :"+t.from_date+" To Date :"+t.to_date+") "},title:function(){var e="Housekeeping Machines Cases Report (From Date :"+t.from_date+" To Date :"+t.to_date+") ";return e}},{extend:"pdfHtml5",orientation:"landscape",exportOptions:{orthogonal:"export"},customize:function(e){e.content[1].table.body.forEach(r=>{r.forEach(a=>{a.alignment="center"})}),e.content[1].table.widths=Array(e.content[1].table.body[0].length+1).join("*").split("")}}],processing:!0,serverSide:!0,searchDelay:700,ordering:!0,scrollY:"350px",scrollCollapse:!1,pageLength:10,ajax:{url:c.value+"/cases-report",type:"GET",data:function(e){e.report=!0,e.machine_type_id=t.machine_type_id,e.model_id=t.model_id,e.department_id=t.department_id,e.from_date=t.from_date,e.to_date=t.to_date}},createdRow:function(e,r,a){$(e).addClass("bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600")},columns:[{title:"Sr no.",data:"id",render:function(e,r,a,i){var n=i.row+parseInt(i.settings.json.start)+1;return n}},{title:"Case No.",data:"case_no",render:function(e,r,a,i){return"<a   data-item-id="+a.id+" class='font-bold cursor-pointer text-sky-600 text-base services' >"+e+"</a>"}},{title:"Work Type",data:"work_types"},{title:"Open Date",data:"open_date"},{title:"Machine Serial No.",data:"serial_no"},{title:"Machine Type",data:"machine_type"},{title:"Model",data:"model_no"},{title:"Department",data:"department_name"},{title:"Area",data:"area"},{title:"Remarks",data:"description"},{title:"Services",data:"no_services",render:function(e,r,a,i){return"<a   data-item-id="+a.id+" class='font-bold cursor-pointer text-sky-600 text-base services' >"+e+"</a>"}},{title:"Current_Status",data:"status",render:function(e,r,a,i){return e=="P"?"Pending":e=="C"?a.closed_date?"Closed <br> ("+a.closed_date+")":"Closed":e=="F"?"Follow-Up Required":""}}]})};return(e,r)=>(d(),l(x,{title:"Machine Cases Report "},{default:m(()=>[h((d(),l(v,{key:o.random,form:t,onReloadTable:_},null,8,["form"])),[[g,o.formOpen==!1]]),p("div",null,[y(w,{title:"Machine Cases Report ( "+t.from_date+" - "+t.to_date+" )"},{table:m(()=>[k]),_:1},8,["title"])])]),_:1}))}};export{K as default};
