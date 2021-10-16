
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{a1 as M,k as b,o as C,ai as S,r as w,l as v,J as y,s as _,n as k,K as d,R as m,a0 as V,q as $,O as B}from"./vendor.66600095.js";import{_ as N}from"./index.85eeb4f0.js";const T={class:"map"},j={class:"search-name"},E=["title"],U={props:{v:{type:String,default:"1.4.15"},appkey:{type:String,default:""},height:{type:[Number,String],default:500},lnglat:{type:Array,default:()=>[]}},emits:["update:lnglat"],setup(g,{emit:s}){const t=g,p=M("");let a="",l="",r="";const i=b(()=>typeof t.height=="string"?t.height:`${t.height}px`);C(()=>{if(typeof AMap=="undefined"){let e=document.createElement("script");e.charset="UTF-8",e.src=`https://webapi.amap.com/maps?v=${t.v}&key=${t.appkey}&plugin=AMap.Autocomplete`,document.head.appendChild(e),e.onload=()=>{c()}}else S(()=>{c()})});function c(){a=new AMap.Map("amap",{zoom:12}),AMap.plugin("AMap.ToolBar",()=>{let e=new AMap.ToolBar;a.addControl(e)}),l=new AMap.Marker({draggable:!0,cursor:"move"}),l.on("dragend",e=>{s("update:lnglat",[e.lnglat.lng,e.lnglat.lat])}),r=new AMap.Autocomplete,a.on("click",e=>{u(e.lnglat.getLng(),e.lnglat.getLat())}),t.lnglat.length==2&&u(t.lnglat[0],t.lnglat[1])}function u(e,o){a.remove(l),l.setPosition([e,o]),a.add(l),a.setFitView(),s("update:lnglat",[e,o])}function x(e,o){r.search(e,(f,n)=>{o(n.tips)})}function A(e){p.value=e.name,e.location?u(e.location.lng,e.location.lat):a.setCity(e.adcode)}return(e,o)=>{const f=w("el-autocomplete");return v(),y("div",T,[_(f,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=n=>p.value=n),class:"search","fetch-suggestions":x,"trigger-on-focus":!1,clearable:"","prefix-icon":"el-icon-location-information",placeholder:"\u8BF7\u8F93\u5165\u5730\u5740\u5173\u952E\u5B57",onSelect:A},{default:k(({item:n})=>[d("div",j,m(n.name),1),d("span",{class:"search-address",title:n.district+n.address},m(n.district+n.address),9,E)]),_:1},8,["modelValue"]),d("div",{id:"amap",style:V(`height:${$(i)};`)},null,4)])}}};var z=h(U,[["__scopeId","data-v-6ebfa04b"]]);const F={name:"ComponentExampleAmap",props:{},data(){return{lnglat:[120.068384,30.290939]}},created(){},mounted(){},methods:{}};function I(g,s,t,p,a,l){const r=z,i=N;return v(),y("div",null,[_(i,null,{default:k(()=>[d("div",null,"\u7ECF\u7EAC\u5EA6\uFF1A"+m(a.lnglat),1),B(" \u6CE8\u610F\u8FD9\u91CC\u66FF\u6362\u9AD8\u5FB7\u5730\u56FE\u7684appkey "),_(r,{lnglat:a.lnglat,"onUpdate:lnglat":s[0]||(s[0]=c=>a.lnglat=c),appkey:"8f7844cc502e17bb549c04c9aaadaf94",height:600},null,8,["lnglat"])]),_:1})])}var H=h(F,[["render",I],["__scopeId","data-v-3c373116"]]);export{H as default};
