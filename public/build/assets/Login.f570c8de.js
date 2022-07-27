import{u as b,o as n,e as d,b as s,g as t,w as m,F as w,H as g,t as h,f as c,a as o,c as k,L as x,n as y,m as V,i as _}from"./app.cf268325.js";import{J as v}from"./AuthenticationCard.1a535323.js";import{_ as $}from"./AuthenticationCardLogo.efb772e7.js";import{_ as B}from"./Button.d6081f48.js";import{_ as u}from"./Input.7ec550ba.js";import{_ as F}from"./Checkbox.93c550a3.js";import{_ as f}from"./Label.01a53f96.js";import{_ as L}from"./ValidationErrors.bf60dcc2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},P={class:"flex items-center"},R=o("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},E=_(" Forgot your password? "),H=_(" Log in "),K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),p=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,a)=>(n(),d(w,null,[s(t(g),{title:"Log in"}),s(v,null,{logo:m(()=>[s($)]),default:m(()=>[s(L,{class:"mb-4"}),l.status?(n(),d("div",C,h(l.status),1)):c("",!0),o("form",{onSubmit:V(p,["prevent"])},[o("div",null,[s(f,{for:"email",value:"Email"}),s(u,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>t(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),o("div",S,[s(f,{for:"password",value:"Password"}),s(u,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>t(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),o("div",q,[o("label",P,[s(F,{checked:t(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>t(e).remember=r),name:"remember"},null,8,["checked"]),R])]),o("div",U,[l.canResetPassword?(n(),k(t(x),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[E]),_:1},8,["href"])):c("",!0),s(B,{class:y(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[H]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{K as default};