import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,e as r,a as t,t as i,D as _,J as h,K as m}from"./app.cf268325.js";const p={name:"welcome",data(){return{days:0,hours:0,minutes:0,seconds:0}},methods:{counter(){let e=new Date("Aug 10, 2022 12:00:00").getTime(),c=setInterval(()=>{let n=new Date().getTime(),s=e-n;this.days=Math.floor(s/(1e3*60*60*24)),this.hours=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),this.minutes=Math.floor(s%(1e3*60*60)/(1e3*60)),this.seconds=Math.floor(s%(1e3*60)/1e3),s<0&&(clearInterval(c),document.getElementById("demo").innerHTML="EXPIRED")},1e3)}},mounted(){this.counter()}},o=e=>(h("data-v-ef399368"),e=e(),m(),e),u={class:"banner-image"},f={class:"cover"},g=o(()=>t("h1",null,"Welcome",-1)),v=o(()=>t("p",null,"Coming soon!",-1)),w={class:"timer"},y={class:"timer-digit"},D=o(()=>t("p",null,"Days",-1)),I={class:"timer-digit"},k=o(()=>t("p",null,"Hours",-1)),M={class:"timer-digit"},S=o(()=>t("p",null,"Minutes",-1)),x={class:"timer-digit"},B=o(()=>t("p",null,"Seconds",-1)),E=_('<div class="social" data-v-ef399368><a class="social-icon" href="https://linkedin.com" data-v-ef399368><img src="/storage/icons/linked-in.png" alt="" data-v-ef399368></a><a class="social-icon" href="https://facebook.com" data-v-ef399368><img src="/storage/icons/facebook.png" alt="" data-v-ef399368></a><a class="social-icon" href="https://twitter.com" data-v-ef399368><img src="/storage/icons/twitter.png" alt="" data-v-ef399368></a><a class="social-icon" href="https://instagram.com" data-v-ef399368><img src="/storage/icons/ig.png" alt="" data-v-ef399368></a></div>',1);function b(e,c,n,s,a,T){return d(),r("div",u,[t("div",f,[g,v,t("div",w,[t("div",y,[t("p",null,i(a.days),1),D]),t("div",I,[t("p",null,i(a.hours),1),k]),t("div",M,[t("p",null,i(a.minutes),1),S]),t("div",x,[t("p",null,i(a.seconds),1),B])]),E])])}const N=l(p,[["render",b],["__scopeId","data-v-ef399368"]]);export{N as default};