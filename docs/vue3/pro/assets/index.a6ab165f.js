
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as j}from"./index.d3d63a19.js";import w from"./index.3ac63955.js";import{_ as k}from"./plugin-vue_export-helper.5a098b48.js";import{a0 as z,o as D,r as d,an as I,K as N,l as B,I as C,s as t,n as l,J as L,T as s,Q as _,h as R}from"./vendor.1c754356.js";import"./index.895879d0.js";const F=s("\u6309\u4EF6\u6570"),S=s("\u6309\u91CD\u91CF"),T={class:"freight"},q=s("\u9ED8\u8BA4\u8FD0\u8D39"),E=s("\u9996\u8D39"),J=s("\u5143"),K=s("\u7EED\u8D39"),M=s("\u5143"),O=s("\u542F\u7528"),Q=s("\u505C\u7528"),A={props:{id:{type:[Number,String],default:""}},setup(c,{expose:g}){const V=c,{proxy:r}=R(),e=z({loading:!1,form:{id:V.id,title:"",address:[],type:1,status:!0,first_step:"",first_price:"",continued_step:"",continued_price:"",infos:[]},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}]}});D(()=>{e.value.form.id!=""&&b()});function b(){e.value.loading=!0,r.$api.get("pages_example/delivery/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(u=>{e.value.loading=!1,Object.assign(e.value.form,u.data)})}return g({submit(u){e.value.form.id==""?r.$refs.form.validate(o=>{o&&r.$api.post("pages_example/delivery/create",e.value.form,{baseURL:"/mock/"}).then(()=>{r.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),u&&u()})}):r.$refs.form.validate(o=>{o&&r.$api.post("pages_example/delivery/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{r.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),u&&u()})})}}),(u,o)=>{const n=d("el-input"),i=d("el-form-item"),y=j,p=d("el-radio-button"),f=d("el-radio-group"),m=d("el-col"),v=d("el-row"),x=d("el-card"),U=d("el-form"),h=I("loading");return N((B(),C("div",null,[t(U,{ref:(a,$)=>{$.form=a},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:l(()=>[t(i,{label:"\u540D\u79F0",prop:"title"},{default:l(()=>[t(n,{modelValue:e.value.form.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.form.title=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u53D1\u8D27\u5730\u5740",prop:"address"},{default:l(()=>[t(y,{modelValue:e.value.form.address,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value.form.address=a)},null,8,["modelValue"])]),_:1}),t(i,{label:"\u8BA1\u4EF7\u65B9\u5F0F"},{default:l(()=>[t(f,{modelValue:e.value.form.type,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value.form.type=a)},{default:l(()=>[t(p,{label:1},{default:l(()=>[F]),_:1}),t(p,{label:2},{default:l(()=>[S]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"\u8FD0\u8D39\u6A21\u7248"},{default:l(()=>[L("div",T,[t(x,{shadow:"never"},{header:l(()=>[q]),default:l(()=>[t(v,{gutter:20},{default:l(()=>[t(m,{md:6},{default:l(()=>[t(n,{modelValue:e.value.form.first_step,"onUpdate:modelValue":o[3]||(o[3]=a=>e.value.form.first_step=a),size:"small"},{prepend:l(()=>[s(_(e.value.form.type==1?"\u9996\u4EF6":"\u9996\u91CD"),1)]),append:l(()=>[s(_(e.value.form.type==1?"\u4EF6":"kg"),1)]),_:1},8,["modelValue"])]),_:1}),t(m,{md:6},{default:l(()=>[t(n,{modelValue:e.value.form.first_price,"onUpdate:modelValue":o[4]||(o[4]=a=>e.value.form.first_price=a),size:"small"},{prepend:l(()=>[E]),append:l(()=>[J]),_:1},8,["modelValue"])]),_:1}),t(m,{md:6},{default:l(()=>[t(n,{modelValue:e.value.form.continued_step,"onUpdate:modelValue":o[5]||(o[5]=a=>e.value.form.continued_step=a),size:"small"},{prepend:l(()=>[s(_(e.value.form.type==1?"\u7EED\u4EF6":"\u7EED\u91CD"),1)]),append:l(()=>[s(_(e.value.form.type==1?"\u4EF6":"kg"),1)]),_:1},8,["modelValue"])]),_:1}),t(m,{md:6},{default:l(()=>[t(n,{modelValue:e.value.form.continued_price,"onUpdate:modelValue":o[6]||(o[6]=a=>e.value.form.continued_price=a),size:"small"},{prepend:l(()=>[K]),append:l(()=>[M]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(v,null,{default:l(()=>[t(m,{span:24},{default:l(()=>[t(w,{data:e.value.form.infos,type:e.value.form.type},null,8,["data","type"])]),_:1})]),_:1})])]),_:1}),t(i,{label:"\u662F\u5426\u542F\u7528"},{default:l(()=>[t(f,{modelValue:e.value.form.status,"onUpdate:modelValue":o[7]||(o[7]=a=>e.value.form.status=a)},{default:l(()=>[t(p,{label:!0},{default:l(()=>[O]),_:1}),t(p,{label:!1},{default:l(()=>[Q]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[h,e.value.loading]])}}};var Y=k(A,[["__scopeId","data-v-7656f76e"]]);export{Y as default};
