import{e as n}from"./app.5a054397.js";const s={},a=n('<h1 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h1><p>当项目开发完毕，只需运行以下命令就可以打包整个项目：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 打包测试环境</span>\n<span class="token function">npm</span> run build:test\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> run build:test\n\n<span class="token comment"># 打包正式环境</span>\n<span class="token function">npm</span> run build\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>构建打包成功之后，会在根目录生成 <code>dist</code> 文件夹（测试环境打包出的文件夹为 <code>dist-test</code> ），里面就是构建打包好的文件。</p>',4);s.render=function(n,s){return a};export{s as default};
