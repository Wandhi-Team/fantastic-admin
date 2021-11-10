import{r as a,o as t,c as s,a as n,b as e,F as o,d,e as c}from"./app.56d16476.js";const p={},i={id:"高级-position-fixed",tabindex:"-1"},l=n("a",{class:"header-anchor",href:"#高级-position-fixed","aria-hidden":"true"},"#",-1),r=d(" 高级 position:fixed "),u=c('<p>我们都知道 <code>position:fixed</code> 是相对于浏览器窗口进行定位的，那在本框架中，要如何实现 <code>&lt;FixedActionBar /&gt;</code> 组件这种不管在任何布局场景下，始终固定在右侧内容区域内底部呢？</p><p>专业版已将这块处理封装成一个 HTML 的 data 属性了，就是 <code>data-fixed-calc-width</code> 。如果你有同样的需求，只需在最外层原本要设置 <code>position:fixed</code> 的 DOM 上增加 <code>data-fixed-calc-width</code> 即可。</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-fixed-calc-width</span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',3);p.render=function(d,c){const p=a("Badge");return t(),s(o,null,[n("h1",i,[l,r,e(p,{type:"tip",text:"专业版",vertical:"top"})]),u],64)};export{p as default};
