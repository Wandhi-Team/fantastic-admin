import{r as s,o as n,c as a,a as e,b as t,F as l,e as r,d as o}from"./app.7cd044aa.js";const c={},p={id:"自定义字体",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#自定义字体","aria-hidden":"true"},"#",-1),d=r(" 自定义字体 "),u=e("p",null,"用户访问使用了自定义字体的页面时，会自动下载字体文件，字体文件有大有小，所以不建议在非英文环境中使用。",-1),h=e("p",null,"框架预设了 Digital 7 的两套字体，除此之外，你也可以通过以下方法引入你需要的自定义字体。",-1),f=e("h2",{id:"找字体",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#找字体","aria-hidden":"true"},"#"),r(" 找字体")],-1),g=r("访问 "),b={href:"https://www.dafont.com/",target:"_blank",rel:"noopener noreferrer"},m=r("DaFont"),k=r("，如果有其它字体站也可以，主要是下载 "),w=e("code",null,".ttf",-1),y=r(" 格式的字体文件。"),x=["src"],v=e("h2",{id:"生成字体",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#生成字体","aria-hidden":"true"},"#"),r(" 生成字体")],-1),B=e("p",null,[r("因为 "),e("code",null,".ttf"),r(" 格式的字体文件不是浏览器支持的字体格式，所以需要通过 "),e("code",null,".ttf"),r(" 生成其它格式的字体文件。")],-1),D=r("访问 "),F={href:"https://www.fontsquirrel.com/tools/webfont-generator",target:"_blank",rel:"noopener noreferrer"},q=r("Font Squirrel"),$=r("，上传 "),_=e("code",null,".ttf",-1),j=r(" 文件，并按照下面设置后，点击下载。"),L=["src"],O=o('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>将上一步下载的压缩包解压并放入 <code>./src/assets/fonts/</code> 目录下，注意按文件夹区分，随后引入文件夹中的 <code>stylesheet.css</code> 即可使用，以 Digital 7 字体为例：</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&#39;../../assets/fonts/digital-7/stylesheet.css&#39;</span><span class="token punctuation">;</span>\n<span class="token selector">.digital-7 </span><span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;digital-7regular&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>字体的 <code>font-family</code> 名称在 <code>stylesheet.css</code> 里查看。</p><p>另外你也可以将 <code>@import &#39;../../assets/fonts/digital-7/stylesheet.css&#39;;</code> 这句代码放到全局引入，这样所有页面就都可以通过设置 <code>font-family: &#39;digital-7regular&#39;;</code> 直接使用了。</p>',5);c.render=function(r,o){const c=s("Badge"),S=s("OutboundLink");return n(),a(l,null,[e("h1",p,[i,d,t(c,{type:"tip",text:"专业版",vertical:"top"})]),u,h,f,e("p",null,[g,e("a",b,[m,t(S)]),k,w,y]),e("p",null,[e("img",{src:r.$withBase("/font1.png")},null,8,x)]),v,B,e("p",null,[D,e("a",F,[q,t(S)]),$,_,j]),e("p",null,[e("img",{src:r.$withBase("/font2.png")},null,8,L)]),O],64)};export{c as default};
