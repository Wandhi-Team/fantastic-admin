import{r as a,c as s,a as n,b as t,F as e,d as p,e as o,o as c}from"./app.e7b6d6dd.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const u={},r=p('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="替换真实的后端接口后-登录成功依旧在登录页" tabindex="-1"><a class="header-anchor" href="#替换真实的后端接口后-登录成功依旧在登录页" aria-hidden="true">#</a> 替换真实的后端接口后，登录成功依旧在登录页</h2><p>你需要对几处代码分别检查是否都有根据实际情况进行修改：</p><ol><li>在 <code>.env.development</code> 里修改真实接口请求地址</li><li>因为真实接口返回的数据格式与框架演示提供的返回格式一定存在差异，所以需要在 <code>./src/api/index.js</code> 里修改响应拦截器里的代码，按照实际情况进行调整。例如什么状态下是请求成功，什么状态下是请求异常，并进行错误提示。</li><li>在 <code>./src/store/modules/user.js</code> 里分别修改 <code>action</code> 下的 <code>login</code> 和 <code>mutations</code> 下的 <code>setUserData</code> ，确保接口可以请求成功，并将返回的用户信息存储到 vuex 中进行全局管理。最后还需要修改 <code>getters</code> 下的 <code>isLogin</code> ，这部分需要根据实际存储的用户信息去判断是否登录。例如框架演示登录是会返回 token 和失效时间，则验证是否登录也是通过这两个信息进行逻辑校验。</li></ol><h2 id="使用-script-setup-语法糖如何设置组件-name" tabindex="-1"><a class="header-anchor" href="#使用-script-setup-语法糖如何设置组件-name" aria-hidden="true">#</a> 使用 <code>&lt;script setup&gt;</code> 语法糖如何设置组件 name</h2><p><code>&lt;script setup&gt;</code> 可以和普通的 <code>&lt;script&gt;</code> 一起使用，所以可以这样：</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;componentName&#39;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token operator">...</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',7),i=o("另外框架引用了 "),d={href:"https://github.com/anncwb/vite-plugin-vue-setup-extend",target:"_blank",rel:"noopener noreferrer"},k=o("vite-plugin-vue-setup-extend"),g=o(" 依赖，所以可以更方便的设置。"),v=p('<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>componentName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token operator">...</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);var h=l(u,[["render",function(p,o){const l=a("OutboundLink");return c(),s(e,null,[r,n("p",null,[i,n("a",d,[k,t(l)]),g]),v],64)}]]);export{h as default};
