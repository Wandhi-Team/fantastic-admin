import{d as a}from"./app.e7b6d6dd.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const e={},i=a('<h1 id="版本升级" tabindex="-1"><a class="header-anchor" href="#版本升级" aria-hidden="true">#</a> 版本升级</h1><p>首先明确一点，Fantastic-admin 无法像 npm 的插件一样升级，不仅我们的框架如此，其实大部分管理系统框架都是如此。</p><p>因为本质上这类框架其实是一个初始模板，开发者会根据自身需求去修改，然后基于业务开展业务代码编写，所以一旦下载开始使用，基本是无法更新的，你在哪个时间点开始使用，项目就固定在什么版本了。</p><blockquote><p>虽然有小部分框架选择将部分核心源码封装成 npm 依赖包，由作者全权维护，这样的处理在一定程度上有解决版本更新的问题，但弊端也很明显，开发者在二次开发上会有明显的局限，个人认为是得不偿失的。</p></blockquote><p>那有没有解决办法么？其实也有，参考如下：</p><ol><li>在基于 Fantastic-admin 做项目开发时尽量避免框架自带模块或组件的改动，或者改动地方做一个文档记录，可以清楚知道改动了哪些，这样当你需要进行新版本更新时，按照之前记录的文档可以有个大致的迁移方案，而业务代码则可以直接拷贝过去。</li><li>我们尽量在提交代码时标明每次提交改动的变更记录说明，这样你可以选择性的更新部分新代码到项目中，也就是局部更新。这种方案也是作者在公司内部项目经常使用的，因为大部分项目是无需全局更新到新版的，只需将必要的一些新特性或 bug 修复同步到原有项目中即可。（由于专业版源码不开放，如果需要完整带 git 提交记录源码的，请与作者联系；基础版可直接在线上代码仓库查看 git 提交记录）</li></ol><p>当然个人建议是，做为一个中后台系统框架，稳定是第一诉求，不到万不得已不建议频繁更新，因为更新的成本挺高的，每一次大更新，都需要一次完整的回归测试，以确保功能正常运行。</p>',7);var t=p(e,[["render",function(a,p){return i}]]);export{t as default};
