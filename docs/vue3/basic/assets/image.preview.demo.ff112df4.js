
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.cbde5cae.js";import{_ as v}from"./index.16852527.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{I as l,r as f,a as u,c as w,y as r,s,x as t,K as x,L as m,q as y}from"./vendor.df72e7c7.js";import{_ as $}from"./index.dd964e5a.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=v,o=f("el-image");return u(),w(o,{src:n.src,fit:"cover",style:x(`width:${m(a)};height:${m(_)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=d(j,[["__scopeId","data-v-318badd8"]]);const I={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,_,g,c){const i=h,o=B,p=$;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(I,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{V as default};
