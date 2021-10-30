import{r as t,o as e,c as i,a,b as o,F as c,d,e as n}from"./app.0f4daed6.js";const s={},r={id:"git-钩子",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#git-钩子","aria-hidden":"true"},"#",-1),l=d(" Git 钩子 "),g=n('<p>虽然有 ESLint 和 stylelint 的加持，但它们也仅仅是对代码的写法规范进行格式化，例如缩进、空格、结尾的分号等。而在提交代码时，专业版提供的 Git 钩子会检查代码中是否有语法错误，这些错误是 IDE 无法自动修复的，例如出现未使用过的变量。如果有错误，则会取消此次提交，直到开发者修复完所有错误后才允许提交成功，确保仓库里的代码绝对正确。</p><p>如果 <code>git init</code> 仓库初始化是在依赖包安装之后执行的，则无法初始化 Git 钩子，建议在 <code>git init</code> 之后再执行一遍 <code>yarn</code> ，重新安装一遍依赖包。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过修改 <code>.eslintignore</code> 和 <code>.stylelintignore</code> 忽略无需做代码规范的文件，可以让 git 跳过这些文件的检查，例如在项目中引用了一些第三方的插件或组件，我们就可以将其忽略。</p></div>',3);s.render=function(d,n){const s=t("Badge");return e(),i(c,null,[a("h1",r,[p,l,o(s,{type:"tip",text:"专业版",vertical:"top"})]),g],64)};export{s as default};
