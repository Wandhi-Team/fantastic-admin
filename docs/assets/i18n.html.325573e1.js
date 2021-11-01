import{r as n,c as s,a,b as e,F as p,d as l,e as r,o as t}from"./app.11a7de6c.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";const c={},i={id:"国际化",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#国际化","aria-hidden":"true"},"#",-1),b=l(" 国际化 "),k=l("框架使用 "),d={href:"http://kazupon.github.io/vue-i18n/zh/",target:"_blank",rel:"noopener noreferrer"},m=l("vue-i18n"),g=l(" 实现国际化支持。"),h=r('<p>专业版默认提供了<strong>简体中文</strong>、<strong>繁体中文</strong>和<strong>英语</strong>三种语言包，在配置里设置 <code>enableI18n: true</code> 可开启语言切换按钮。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你用不到国际化，无需删除任何文件，按照常规开发进行即可，框架已经做好兼容支持。</p></div><h2 id="语言包" tabindex="-1"><a class="header-anchor" href="#语言包" aria-hidden="true">#</a> 语言包</h2>',3),v=l("语言包存放在 "),f=a("code",null,"/src/lang/packages/",-1),w=l(" 目录下，因为 Element 本身也有自己的语言包，所以在做国际化支持的时候，框架的语言包文件命名需要和 Element 保持一致，可"),y={href:"https://github.com/ElemeFE/element/tree/dev/src/locale/lang",target:"_blank",rel:"noopener noreferrer"},j=l("点击这里"),x=l("查看 Element 的语言包文件。"),z=r('<p>新增语言包后需要到 <code>/src/lang/index.js</code> 文件里引用并按照原有配置进行修改，以新增一个日文语言包为例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>\n<span class="token keyword">import</span> elementLocaleZhCN <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/zh-CN&#39;</span>\n<span class="token keyword">import</span> elementLocaleZhTW <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/zh-TW&#39;</span>\n<span class="token keyword">import</span> elementLocaleEn <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/en&#39;</span>\n<span class="token keyword">import</span> elementLocaleJa <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/ja&#39;</span>\n\n<span class="token keyword">import</span> localeZhCN <span class="token keyword">from</span> <span class="token string">&#39;./packages/zh-CN&#39;</span>\n<span class="token keyword">import</span> localeZhTW <span class="token keyword">from</span> <span class="token string">&#39;./packages/zh-TW&#39;</span>\n<span class="token keyword">import</span> localeEn <span class="token keyword">from</span> <span class="token string">&#39;./packages/en&#39;</span>\n<span class="token keyword">import</span> localeJa <span class="token keyword">from</span> <span class="token string">&#39;./packages/ja&#39;</span>\n\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;zh-CN&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>elementLocaleZhCN<span class="token punctuation">,</span>\n        <span class="token operator">...</span>localeZhCN\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;zh-TW&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>elementLocaleZhTW<span class="token punctuation">,</span>\n        <span class="token operator">...</span>localeZhTW\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;en&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>elementLocaleEn<span class="token punctuation">,</span>\n        <span class="token operator">...</span>localeEn\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;ja&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>elementLocaleJa<span class="token punctuation">,</span>\n        <span class="token operator">...</span>localeJa\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token operator">...</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="默认语言" tabindex="-1"><a class="header-anchor" href="#默认语言" aria-hidden="true">#</a> 默认语言</h2><p>在配置里 <code>defaultLang</code> 可设置默认语言，留空则跟随系统语言。如果设置的默认语言或者系统语言缺少对应的语言包，则以简体中文显示。</p><h2 id="路由部分" tabindex="-1"><a class="header-anchor" href="#路由部分" aria-hidden="true">#</a> 路由部分</h2><p>以简体中文为例，打开 <code>/src/lang/packages/zh-CN.js</code> 文件可以看到路由相关的配置，在 <code>route</code> 对象里可以扩展需要开启国际化支持的路由。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    route<span class="token operator">:</span> <span class="token punctuation">{</span>\n        login<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>\n        dashboard<span class="token operator">:</span> <span class="token string">&#39;控制台&#39;</span><span class="token punctuation">,</span>\n        personal<span class="token operator">:</span> <span class="token punctuation">{</span>\n            setting<span class="token operator">:</span> <span class="token string">&#39;个人设置&#39;</span><span class="token punctuation">,</span>\n            editpassword<span class="token operator">:</span> <span class="token string">&#39;修改密码&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        i18n<span class="token operator">:</span> <span class="token string">&#39;国际化&#39;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>光配置好简体中文的还不行，其它语言包文件里也要同步添加。</p><p>当都配置好后，可在路由配置的 <code>meta</code> 对象里设置 <code>i18n</code> 参数，例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;国际化&#39;</span><span class="token punctuation">,</span>\n    i18n<span class="token operator">:</span> <span class="token string">&#39;route.i18n&#39;</span><span class="token punctuation">,</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;ri-earth-line&#39;</span><span class="token punctuation">,</span>\n    badge<span class="token operator">:</span> <span class="token string">&#39;NEW&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>强烈建议开启国际化的时候，<code>title</code> 也还是设置，框架的处理逻辑是：</p><p>先调用当前设置的语言，如果没有再调用默认简体中文的语言，如果还没有，则以显示 <code>title</code> 设置的内容，所以 <code>title</code> 算是个缺省项。</p><h2 id="单页组件部分" tabindex="-1"><a class="header-anchor" href="#单页组件部分" aria-hidden="true">#</a> 单页组件部分</h2><p>如果每个路由对应的页面组件都要做国际化支持，那语言包文件就会变得无比庞大且难以维护，推荐在每个页面组件里使用 <code>&lt;i18n&gt;</code> 自定义块进行语言维护，可打开 <code>/src/views/i18n_example/index.vue</code> 查看示例。</p><h2 id="框架部分" tabindex="-1"><a class="header-anchor" href="#框架部分" aria-hidden="true">#</a> 框架部分</h2><p>框架自带的部分功能已经支持国际化，以简体中文为例，打开 <code>/src/lang/packages/zh-CN.js</code> 文件可看到 <code>app</code> 对象里的就是框架部分的语言信息，如果需要对框架进行二次开发，请在这里扩展。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token punctuation">{</span>\n        profile<span class="token operator">:</span> <span class="token string">&#39;个人设置&#39;</span><span class="token punctuation">,</span>\n        login<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>\n        logout<span class="token operator">:</span> <span class="token string">&#39;退出登录&#39;</span><span class="token punctuation">,</span>\n        account<span class="token operator">:</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>\n        password<span class="token operator">:</span> <span class="token string">&#39;密码&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>框架二次开发请详细阅读 vue-i18n 文档。</p>',18);var E=o(c,[["render",function(l,r){const o=n("Badge"),c=n("OutboundLink");return t(),s(p,null,[a("h1",i,[u,b,e(o,{type:"tip",text:"专业版",vertical:"top"})]),a("p",null,[k,a("a",d,[m,e(c)]),g]),h,a("p",null,[v,f,w,a("a",y,[j,e(c)]),x]),z],64)}]]);export{E as default};
