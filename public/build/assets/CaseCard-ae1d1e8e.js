import{o as c,e as d,a as t,n as l,t as s,u as a,f as m,b as x,w as _,p as h}from"./app-92be7c25.js";import{g as b}from"./globalMixin-827f0fbc.js";const p={class:"relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-800"},u=["textContent"],f=["textContent"],g=["src"],C={class:"flex items-end my-6 space-x-2"},y=["textContent"],w=["textContent"],v={class:"dark:text-white"},k={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},j=t("p",null," Department",-1),B=["textContent"],M={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},N=t("p",null," Area",-1),S=["textContent"],V={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},D=t("p",null," Work Type ",-1),F=["textContent"],q={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},z=t("p",null," Serial no. ",-1),A=["textContent"],E={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},R=t("p",null," Machine Code ",-1),T=["textContent"],U={class:"flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24"},W=t("p",null," Model ",-1),G=["textContent"],L={__name:"CaseCard",props:["case","machine"],setup(r){const e=r,{base_url:o,refreshComponent:H}=b(),i=(n=!1)=>{if(e.case.status=="F")return n?"bg-red-100 text-red-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400":"Follow-Up Required";if(e.case.status=="C")return n?"bg-green-100 text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400":"Completed & Closed"};return(n,I)=>(c(),d("div",p,[t("span",{class:l(i(!0)),textContent:s(i())},null,10,u),t("p",{class:"text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white mt-5",textContent:s(e.machine?e.machine.machine_type:"")},null,8,f),e.case&&e.case.machine&&e.case.machine.machine_model&&e.case.machine.machine_model.machine_image?(c(),d("img",{key:0,width:"100",height:"100",class:"mt-2 ml-4",src:a(o)+"/shared-attachments/"+e.case.machine.machine_model.machine_image.attachment_id},null,8,g)):m("",!0),t("div",C,[x(a(h),{href:a(o)+"/services-details/"+e.case.id,class:"text-2xl semibold text-black dark:text-white"},{default:_(()=>[t("span",{textContent:s(e.case?e.case.case_no:"")},null,8,y)]),_:1},8,["href"]),t("span",{class:"flex items-center text-xl semibold text-green-500",textContent:s(e.case?e.case.open_date:"")},null,8,w)]),t("div",v,[t("div",k,[j,t("div",{class:"flex items-end text-sm text-fuchsia-600",textContent:s(e.machine?e.machine.department_name:"")},null,8,B)]),t("div",M,[N,t("div",{class:"flex items-end text-sm text-fuchsia-600",textContent:s(e.machine?e.machine.area_name:"")},null,8,S)]),t("div",V,[D,t("div",{class:"flex items-end text-sm text-indigo-500",textContent:s(e.case?e.case.work_types:"")},null,8,F)]),t("div",q,[z,t("div",{class:"flex items-end text-sm text-indigo-500",textContent:s(e.machine?e.machine.serial_no:"")},null,8,A)]),t("div",E,[R,t("div",{class:"flex items-end text-sm text-indigo-500",textContent:s(e.machine?e.machine.name_code_no:"")},null,8,T)]),t("div",U,[W,t("div",{class:"flex items-end text-sm text-indigo-500",textContent:s(e.machine?e.machine.machine_model:"")},null,8,G)])])]))}};export{L as default};