import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,e as r,a as t,t as a,D as _,J as h,K as m}from"./app.7ad506cb.js";const p={name:"welcome",data(){return{days:0,hours:0,minutes:0,seconds:0}},methods:{counter(){let s=new Date("Aug 10, 2022 12:00:00").getTime(),i=setInterval(()=>{let n=new Date().getTime(),e=s-n;this.days=Math.floor(e/(1e3*60*60*24)),this.hours=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),this.minutes=Math.floor(e%(1e3*60*60)/(1e3*60)),this.seconds=Math.floor(e%(1e3*60)/1e3),e<0&&(clearInterval(i),document.getElementById("demo").innerHTML="EXPIRED")},1e3)}},mounted(){this.counter()}},o=s=>(h("data-v-6c4ca37f"),s=s(),m(),s),u={class:"banner-image"},f={class:"cover"},v=o(()=>t("h1",null,"Welcome",-1)),g=o(()=>t("p",null,"This is the development server",-1)),w={class:"timer"},y={class:"timer-digit"},D=o(()=>t("p",null,"Days",-1)),I={class:"timer-digit"},k=o(()=>t("p",null,"Hours",-1)),M={class:"timer-digit"},S=o(()=>t("p",null,"Minutes",-1)),x={class:"timer-digit"},B=o(()=>t("p",null,"Seconds",-1)),E=_('<div class="social" data-v-6c4ca37f><a class="social-icon" href="https://linkedin.com" data-v-6c4ca37f><img src="/storage/icons/linked-in.png" alt="" data-v-6c4ca37f></a><a class="social-icon" href="https://facebook.com" data-v-6c4ca37f><img src="/storage/icons/facebook.png" alt="" data-v-6c4ca37f></a><a class="social-icon" href="https://twitter.com" data-v-6c4ca37f><img src="/storage/icons/twitter.png" alt="" data-v-6c4ca37f></a><a class="social-icon" href="https://instagram.com" data-v-6c4ca37f><img src="/storage/icons/ig.png" alt="" data-v-6c4ca37f></a></div>',1);function T(s,i,n,e,c,b){return d(),r("div",u,[t("div",f,[v,g,t("div",w,[t("div",y,[t("p",null,a(c.days),1),D]),t("div",I,[t("p",null,a(c.hours),1),k]),t("div",M,[t("p",null,a(c.minutes),1),S]),t("div",x,[t("p",null,a(c.seconds),1),B])]),E])])}const N=l(p,[["render",T],["__scopeId","data-v-6c4ca37f"]]);export{N as default};
