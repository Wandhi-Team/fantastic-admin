
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.afb4da48.js";import{_ as f}from"./index.a9199c72.js";import{_ as x}from"./index.4b1af9fd.js";import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{r as n,m as v,Q as b,t as e,q as r,Y as F}from"./vendor.2da94371.js";import"./index.d65e8440.js";const V={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(l=>{l&&alert("\u63D0\u4EA4\u6210\u529F")})}}},j=F("\u63D0\u4EA4");function y(l,t,C,h,o,u){const p=x,_=f,m=c,s=n("el-form-item"),d=n("el-button"),i=n("el-form");return v(),b("div",null,[e(p,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(m,null,{default:r(()=>[e(_,{modelValue:o.area,"onUpdate:modelValue":t[0]||(t[0]=a=>o.area=a)},null,8,["modelValue"])]),_:1}),e(m,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(i,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(s,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(_,{modelValue:o.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.area=a)},null,8,["modelValue"])]),_:1}),e(s,null,{default:r(()=>[e(d,{type:"primary",onClick:u.submitForm},{default:r(()=>[j]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var U=g(V,[["render",y],["__scopeId","data-v-9bde5082"]]);export{U as default};
