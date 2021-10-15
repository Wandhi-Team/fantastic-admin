import{r as n,o as s,c as a,a as t,b as e,F as p,e as o,d as c}from"./app.5e6084d6.js";const l={},u={id:"私有-storage-数据",tabindex:"-1"},i=t("a",{class:"header-anchor",href:"#私有-storage-数据","aria-hidden":"true"},"#",-1),r=o(" 私有 Storage 数据 "),k=c('<p>由于 localStorage 和 sessionStorage 的同源策略，同一域名下的 storage 数据会共享。如果你恰好需要在同一域名下部署两套(及以上)系统，不可避免会出现 storage 数据冲突，框架提供了一个 storage 类来解决这个问题。</p><p>解决同源 storage 数据冲突的方式就是增加前缀区分，首先需要在 <code>./settings.js</code> 里配置 <code>storagePrefix</code> 参数，然后在需要使用到 storage 的地方引入：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;@/util/storage&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这个类封装了 <code>setItem()</code> ，<code>getItem()</code> ，<code>removeItem()</code> ，<code>clear()</code> 方法，同时还增加了一个 <code>has()</code> 方法用来判断对象是否存在：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// localStorage</span>\nstorage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// sessionStorage</span>\nstorage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\nstorage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p>由于 localStorage 有容量上限，一般为 5M ，如果一同域名下部署两套系统，意味着两套系统共享 5M 容量，所以不建议在同一域名部署太多套系统，避免出现 localStorage 不够用的情况。</p></div>',6);l.render=function(o,c){const l=n("Badge");return s(),a(p,null,[t("h1",u,[i,r,e(l,{type:"tip",text:"专业版",vertical:"top"})]),k],64)};export{l as default};
