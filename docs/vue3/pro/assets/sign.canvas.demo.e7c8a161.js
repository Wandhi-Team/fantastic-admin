
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as A}from"./index.fb8049a8.js";import{a3 as C,w as O,o as Q,l as k,L as R,V as d,h as G,r as K,s as h,n as u,M,Q as Z,X as b}from"./vendor.cb7139c2.js";import{_ as ee}from"./index.573d49c9.js";import"./plugin-vue_export-helper.5a098b48.js";const te=["id","onMousedown","onMousemove","onMouseup","onMouseleave","onTouchstart","onTouchmove","onTouchend"],ne={props:{image:{required:!1,type:[String],default:null},options:{required:!1,type:[Object],default:()=>null}},emits:["confirm"],setup(P,{expose:w,emit:f}){const g=P,p=C(`sign-canvas-${Math.random().toString(36).substr(2)}`),T=C(null);let o=null,i=null,l=1,t={isFullScreen:!1,isFullCover:!1,isDpr:!1,lastWriteSpeed:1,lastWriteWidth:2,lineCap:"round",lineJoin:"round",canvasWidth:600,canvasHeight:600,isShowBorder:!0,bgColor:"#fcc",borderWidth:1,borderColor:"#ff787f",writeWidth:5,maxWriteWidth:30,minWriteWidth:5,writeColor:"#101010",isSign:!1,imgType:"png"},r=null;O(()=>g.options,()=>W(),{deep:!0}),Q(()=>{W(),window.addEventListener("resize",()=>{r&&clearTimeout(r),r=setTimeout(()=>{W()},100)})});function W(){const e=g.options;if(e)for(const n in e)t[n]=e[n];l=typeof window!="undefined"&&t.isDpr&&(window.devicePixelRatio||window.webkitDevicePixelRatio||window.mozDevicePixelRatio)||1,o=document.getElementById(p.value),i=o.getContext("2d"),o.style.background=t.bgColor,t.isFullScreen&&(t.canvasWidth=window.innerWidth||document.body.clientWidth,t.canvasHeight=window.innerHeight||document.body.clientHeight,t.isFullCover&&(o.style.position="fixed",o.style.top=0,o.style.left=0,o.style.margin=0,o.style.zIndex=20001)),o.height=t.canvasWidth,o.width=t.canvasHeight,Y(),I()}function S(){const e=new Date().getTime(),n=e-t.lastWriteTime;t.lastWriteTime=e;let s=t.minWriteWidth+(t.maxWriteWidth-t.minWriteWidth)*n/30;if(s<t.minWriteWidth?s=t.minWriteWidth:s>t.maxWriteWidth&&(s=t.maxWriteWidth),s=s.toFixed(2),t.isSign)i.lineWidth=t.writeWidth*l;else{const a=t.lastWriteWidth=t.lastWriteWidth/4*3+s/4;i.lineWidth=a*l}}function y(e){t.isWrite=!0,t.lastWriteTime=new Date().getTime(),t.lastPoint=e,X()}function _(e){i.beginPath(),i.moveTo(t.lastPoint.x*l,t.lastPoint.y*l),i.lineTo(e.x*l,e.y*l),S(),i.stroke(),t.lastPoint=e,i.closePath()}function x(e){t.isWrite=!1,t.lastPoint=e,$()}function X(){i.beginPath(),i.strokeStyle=t.writeColor,i.lineCap=t.lineCap,i.lineJoin=t.lineJoin}function I(){i.save(),i.strokeStyle=t.writeColor,i.clearRect(0,0,o.width,o.height),i.beginPath(),i.lineWidth=t.borderWidth*l,i.strokeStyle=t.borderColor;let e=t.borderWidth/2*l;t.isShowBorder&&(i.moveTo(e,e),i.lineTo(o.width-e,e),i.lineTo(o.width-e,o.height-e),i.lineTo(e,o.height-e),i.closePath(),i.stroke()),t.isShowBorder&&!t.isSign&&(i.moveTo(0,0),i.lineTo(o.width,o.height),i.lineTo(o.width,o.height/2),i.lineTo(0,o.height/2),i.lineTo(0,o.height),i.lineTo(o.width,0),i.lineTo(o.width/2,0),i.lineTo(o.width/2,o.height),i.stroke()),f("confirm",null),i.restore()}function $(){const e=new Image;return e.src=o.toDataURL(`image/${t.imgType}`),f("confirm",e.src),e.src}function Y(){o.width=t.canvasWidth*l,o.height=t.canvasHeight*l,o.style.width=`${t.canvasWidth}px`,o.style.height=`${t.canvasHeight}px`,t.emptyCanvas=o.toDataURL(`image/${t.imgType}`)}function B(e){y({x:e.offsetX||e.clientX,y:e.offsetY||e.clientY})}function E(e){t.isWrite&&_({x:e.offsetX,y:e.offsetY})}function L(e){x({x:e.offsetX,y:e.offsetY})}function H(e){t.isWrite=!1,t.lastPoint={x:e.offsetX,y:e.offsetY}}function U(e){const n=e.targetTouches[0],s=n.clientX?n.clientX-m().left:n.pageX-v(n.target,"left"),a=n.clientY?n.clientY-m().top:n.pageY-v(n.target,"top");y({x:s,y:a})}function N(e){const n=e.targetTouches[0],s=n.clientX?n.clientX-m().left:n.pageX-v(n.target,"left"),a=n.clientY?n.clientY-m().top:n.pageY-v(n.target,"top");t.isWrite&&_({x:s,y:a})}function F(e){const n=e.targetTouches,s=e.changedTouches,a=n&&n.length&&n[0]||s&&s.length&&s[0],c=a.clientX?a.clientX-m().left:a.pageX-v(a.target,"left"),D=a.clientY?a.clientY-m().top:a.pageY-v(a.target,"top");x({x:c,y:D})}function j(e){const s=document.getElementById(p.value).toDataURL("image/png");z(s,e?`${e}.${t.imgType}`:`${Date.parse(new Date)}.${t.imgType}`)}function z(e,n){const s=document.createElementNS("http://www.w3.org/1999/xhtml","a");s.href=e,s.download=n;const a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(a)}function m(){return T.value.getBoundingClientRect()}function v(e,n){const s="offset"+n[0].toUpperCase()+n.substring(1);let a=e[s],c=e.offsetParent;for(;c!=null;)a+=c[s],c=c.offsetParent;return a}function V(){var e=.6,n=document.createElement("canvas"),s=n.getContext("2d"),a=300,c=200;n.width=a,n.width=c;const J=document.getElementById(p.value).toDataURL("image/png");s.clearRect(0,0,n.width,n.height),s.drawImage(J,0,0,n.width,n.height);var q=n.toDataURL("image/jpeg",e);console.log(q)}return w({canvasClear:I,saveAsImg:$,downloadSignImg:j,dealImage:V}),(e,n)=>(k(),R("canvas",{id:p.value,ref:T.value,class:"app-sign-canvas",onMousedown:d(B,["prevent","stop"]),onMousemove:d(E,["prevent","stop"]),onMouseup:d(L,["prevent","stop"]),onMouseleave:d(H,["prevent","stop"]),onTouchstart:d(U,["prevent","stop"]),onTouchmove:d(N,["prevent","stop"]),onTouchend:d(F,["prevent","stop"])}," \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\u6280\u672F,\u8BF7\u5347\u7EA7\u6D4F\u89C8\u5668! ",40,te))}},ie=M("p",null,"SignCanvas \u4E09\u65B9\u7EC4\u4EF6",-1),oe=M("p",{style:{"margin-bottom":"0"}},"\u8BE5\u7EC4\u4EF6\u53EF\u7528\u4E8E\u7535\u5B50\u5408\u540C\u7B7E\u8BA2\u7B49\u5728\u7EBF\u7B7E\u540D\u4F7F\u7528\u573A\u666F",-1),se=b("\u7EC4\u4EF6\u4ED3\u5E93\u5730\u5740"),ae=b("\u6E05\u9664\u753B\u677F"),le=b("\u751F\u6210\u56FE\u7247"),re=b("\u4E0B\u8F7D\u56FE\u7247"),ce=["src","width","height"],ge={setup(P){const{proxy:w}=G(),f=C(""),g=C({isDpr:!0,lastWriteSpeed:1,lastWriteWidth:2,lineCap:"round",lineJoin:"bevel",canvasWidth:500,canvasHeight:250,isShowBorder:!1,bgColor:"#fee",borderWidth:1,borderColor:"#ff787f",writeWidth:5,maxWriteWidth:30,minWriteWidth:5,writeColor:"#101010",isSign:!0,imgType:"png"});function p(){w.$refs.signCanvasRef.canvasClear()}function T(){f.value=w.$refs.signCanvasRef.saveAsImg()}function o(){w.$refs.signCanvasRef.downloadSignImg()}function i(l){window.open(l,"top")}return(l,t)=>{const r=K("el-button"),W=ee,S=ne,y=A;return k(),R("div",null,[h(W,{title:"\u7535\u5B50\u7B7E\u540D"},{content:u(()=>[ie,oe]),default:u(()=>[h(r,{icon:"el-icon-link",onClick:t[0]||(t[0]=_=>i("https://github.com/langyuxiansheng/vue-sign-canvas"))},{default:u(()=>[se]),_:1})]),_:1}),h(y,null,{default:u(()=>[h(S,{ref:(_,x)=>{x.signCanvasRef=_},options:g.value},null,8,["options"]),M("div",null,[h(r,{onClick:p},{default:u(()=>[ae]),_:1}),h(r,{onClick:T},{default:u(()=>[le]),_:1}),h(r,{onClick:o},{default:u(()=>[re]),_:1})]),f.value?(k(),R("img",{key:0,src:f.value,width:g.value.canvasWidth,height:g.value.canvasHeight},null,8,ce)):Z("v-if",!0)]),_:1})])}}};export{ge as default};
