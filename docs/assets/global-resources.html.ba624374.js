import{r as n,c as s,a,b as t,w as e,F as p,d as o,e as c,o as l}from"./app.e7b6d6dd.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const i={},r=o('<h1 id="全局资源" tabindex="-1"><a class="header-anchor" href="#全局资源" aria-hidden="true">#</a> 全局资源</h1><h2 id="svg-图标" tabindex="-1"><a class="header-anchor" href="#svg-图标" aria-hidden="true">#</a> SVG 图标</h2><p>越来越多项目开始使用 SVG 图标来代替精灵图或者字体图标，本框架也提供了 SVG 图标支持，你有三种使用方式。</p><h3 id="element-plus-图标" tabindex="-1"><a class="header-anchor" href="#element-plus-图标" aria-hidden="true">#</a> Element Plus 图标</h3><div class="custom-container warning"><p class="custom-container-title">警告</p><p>由于 Element Plus 团队正在将原有组件内的 Font Icon 向 SVG Icon 迁移，并且 Font Icon 将会在第一个正式版发布后被废弃，所以不建议继续使用。</p></div><p>框架已默认将 Element Plus 图标注册到全局，并且增加了 <code>el-</code> 前缀避免组件名冲突。你可以通过以下方式直接在页面中使用。</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-search</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>全局注册会影响项目构建体积和加载速度，如果你希望图标是按需引入并使用，你可以删除 <code>./src/main.js</code> 里这段代码：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementIcons <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons&#39;</span>\n<span class="token comment">// 将 element-plus 的图标库注册到全局</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> ElementIcons<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">El</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ElementIcons<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> ElementIcons<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>然后在需要使用到的地方手动引入：</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> search <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标" aria-hidden="true">#</a> 自定义图标</h3>',12),k=c("你可以在框架中使用自定义的 SVG 图标文件，推荐去"),d={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},g=c("阿里巴巴矢量图标库"),h=c("下载高质量 SVG 图标文件。"),m=o('<p>使用 SVG 图标文件也很简单，首先将 svg 文件放到 <code>./src/assets/icons/</code> 目录下，然后在页面中就可以通过 <code>&lt;svg-icon /&gt;</code> 组件使用了，name 就是 svg 文件名，如下：</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- &lt;svg-icon&gt; 组件无需手动注册即可使用 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div>',2),v={id:"iconify-图标",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#iconify-图标","aria-hidden":"true"},"#",-1),x=c(" Iconify 图标 "),f={class:"custom-container tip"},y=a("p",{class:"custom-container-title"},"介绍",-1),w={href:"https://github.com/iconify/iconify",target:"_blank",rel:"noopener noreferrer"},S=c("Iconify"),I=c(" 提供 100+ 套图标集，100,000+ 个图标可以免费使用。借助 "),_={href:"https://github.com/antfu/unplugin-icons",target:"_blank",rel:"noopener noreferrer"},G=c("unplugin-icons"),V=c(" 提供的能力，你可以在框架中轻松使用这些图标，而无需担心构建体积和加载速度，因为它们都是按需构建、按需加载的。"),j=c("你可以在 "),E={href:"https://icones.js.org/",target:"_blank",rel:"noopener noreferrer"},P=c("Icônes"),T=c(" 上查找你想要的图标（这是一个基于 Iconify 的在线图标搜索网站），或者也可以在 vscode 里安装 "),q={href:"https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones",target:"_blank",rel:"noopener noreferrer"},z=c("Icônes"),C=c(" 扩展。"),$=["src"],B=["src"],F=o('<p>当你需要用到某个图标的时候，你可以通过 <code>&lt;i-{集合名}-{图标名} /&gt;</code> 的方式去使用它。</p><p>以上图为例，其中红框部分的格式为 <code>{集合名}:{图标名}</code> ，所以在框架中使用就是下面这样。</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i-mdi-account-box</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>unplugin-icons 会在你使用到某个图标集的时候，判断是否安装相关依赖，如果没有则自动安装并刷新程序，整个过程全自动，无需手动干预。你可以在框架中使用任意图标集里的任意图标，构建的时候只会构建使用到的图标，而不会对整个图标集进行构建，你无需担心。</p></blockquote><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p>框架用到的图片资源都放在 <code>./src/assets/images/</code> 目录下，可自行新建文件夹分类管理。</p><h2 id="精灵图" tabindex="-1"><a class="header-anchor" href="#精灵图" aria-hidden="true">#</a> 精灵图</h2><p>精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>在 HTTP/1.1 下，因<strong>队头阻塞</strong>的问题，如果在一个页面里需要展示多张小图，建议使用精灵图</p><p>但 HTTP/2 的<strong>多路复用</strong>特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图</p></div><p>精灵图原始图片的存放位置位于 <code>./src/assets/sprites/</code> 目录下，注意按文件夹区分。</p><p>项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 <code>.scss</code> 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。</p><p>可通过 <code>@include</code> 直接使用精灵图，无需手动引入 <code>.scss</code> 文件，使用方法如下：</p>',12),H=a("div",{class:"language-scss ext-scss"},[a("pre",{class:"language-scss"},[a("code",null,[a("span",{class:"token comment"},"// @include [文件夹名称]-sprite([文件名称]);"),c("\n"),a("span",{class:"token selector"},".icon "),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token keyword"},"@include"),c(),a("span",{class:"token function"},"example-sprite"),a("span",{class:"token punctuation"},"("),c("address"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n\n"),a("span",{class:"token comment"},"// 输出"),c("\n"),a("span",{class:"token selector"},".icon "),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token property"},"background-image"),a("span",{class:"token punctuation"},":"),c(),a("span",{class:"token url"},"url"),a("span",{class:"token punctuation"},"("),c("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-position"),a("span",{class:"token punctuation"},":"),c(" 0px 0px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-size"),a("span",{class:"token punctuation"},":"),c(" 210px 210px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])])],-1),L=a("div",{class:"language-scss ext-scss"},[a("pre",{class:"language-scss"},[a("code",null,[a("span",{class:"token comment"},"// @include all-[文件夹名称]-sprites;"),c("\n"),a("span",{class:"token keyword"},"@include"),c(" all-example-sprites"),a("span",{class:"token punctuation"},";"),c("\n\n"),a("span",{class:"token comment"},"// 输出"),c("\n"),a("span",{class:"token selector"},".example-address-sprites "),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token property"},"background-image"),a("span",{class:"token punctuation"},":"),c(),a("span",{class:"token url"},"url"),a("span",{class:"token punctuation"},"("),c("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-position"),a("span",{class:"token punctuation"},":"),c(" 0 0"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-size"),a("span",{class:"token punctuation"},":"),c(" 210px 210px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n"),a("span",{class:"token selector"},".example-feedback-sprites "),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token property"},"background-image"),a("span",{class:"token punctuation"},":"),c(),a("span",{class:"token url"},"url"),a("span",{class:"token punctuation"},"("),c("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-position"),a("span",{class:"token punctuation"},":"),c(" -110px 0"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-size"),a("span",{class:"token punctuation"},":"),c(" 210px 210px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n"),a("span",{class:"token selector"},".example-payment-sprites "),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token property"},"background-image"),a("span",{class:"token punctuation"},":"),c(),a("span",{class:"token url"},"url"),a("span",{class:"token punctuation"},"("),c("img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-position"),a("span",{class:"token punctuation"},":"),c(" 0 -110px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"background-size"),a("span",{class:"token punctuation"},":"),c(" 210px 210px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),c(" 100px"),a("span",{class:"token punctuation"},";"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])])],-1),N=o('<p>如果是小型项目，静态图片不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>文件命名仅支持字母与数字，所有特殊符号均会被转化为 <code>-</code> ，如：</p><ul><li><code>test_123</code> =&gt; <code>test-123</code></li><li><code>test@2x</code> =&gt; <code>test-2x</code></li><li><code>test - 123</code> =&gt; <code>test-123</code></li><li><code>test$%123</code> =&gt; <code>test-123</code></li></ul><p>使用过程中如果发现无法正常展示图片，可检查生成的 <code>.scss</code> 文件，确定在代码中使用的文件名。</p></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>样式存放目录为 <code>./src/assets/styles/</code> ，因为 Vue 的文件特性，页面样式建议写在 <code>.vue</code> 文件里，所以该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>./src/assets/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><p>同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西</p></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件" aria-hidden="true">#</a> 全局组件</h3>',9),O={class:"custom-container tip"},R=a("p",{class:"custom-container-title"},"并非全局引用",-1),A=c("与 Vue2 版本不同，这里所谓的“全局组件”并不会注册到全局，而是在使用的时候自动引入，该特性由 "),D={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},J=c("unplugin-vue-components"),K=c(" 提供支持。"),M=a("p",null,[c("全局组件存放在 "),a("code",null,"./src/components/"),c(" 目录下，需要注意各个组件按文件夹进行区分。")],-1),Q=a("p",null,[c("每个组件的文件夹内至少保留一个文件名为 "),a("code",null,"index.vue"),c(" 的组件入口（可参考 "),a("code",null,"SvgIcon"),c(" 组件），文件夹名称即为组件名。")],-1),U=c("推荐使用 "),W=a("code",null,"pnpm new",-1),X=c(" 指令进行组件生成，详细可查看《"),Y=c("代码文件自动生成"),Z=c("》。"),nn=a("h3",{id:"局部组件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#局部组件","aria-hidden":"true"},"#"),c(" 局部组件")],-1),sn=a("p",null,[c("局部组件没有提供专门的存放目录，我们建议采用就近原则，即局部组件与使用页面离得越近越好。你可以在每个模块的文件夹下，建立一个 "),a("code",null,"components"),c(" 文件夹用于存放局部组件。")],-1);var an=u(i,[["render",function(o,c){const u=n("OutboundLink"),i=n("Badge"),an=n("CodeGroupItem"),tn=n("CodeGroup"),en=n("RouterLink");return l(),s(p,null,[r,a("p",null,[k,a("a",d,[g,t(u)]),h]),m,a("h3",v,[b,x,t(i,{type:"tip",text:"专业版",vertical:"top"})]),a("div",f,[y,a("p",null,[a("a",w,[S,t(u)]),I,a("a",_,[G,t(u)]),V])]),a("p",null,[j,a("a",E,[P,t(u)]),T,a("a",q,[z,t(u)]),C]),a("p",null,[a("img",{src:o.$withBase("/icones1.png")},null,8,$)]),a("p",null,[a("img",{src:o.$withBase("/icones2.png")},null,8,B)]),F,t(tn,null,{default:e((()=>[t(an,{title:"方法 1"},{default:e((()=>[H])),_:1}),t(an,{title:"方法 2"},{default:e((()=>[L])),_:1})])),_:1}),N,a("div",O,[R,a("p",null,[A,a("a",D,[J,t(u)]),K])]),M,Q,a("p",null,[U,W,X,t(en,{to:"/guide/plop.html"},{default:e((()=>[Y])),_:1}),Z]),nn,sn],64)}]]);export{an as default};
