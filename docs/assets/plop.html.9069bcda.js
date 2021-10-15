import{r as e,o as l,c as a,a as n,b as r,w as o,F as t,e as s}from"./app.5e6084d6.js";const d={},p={id:"快速生成文件",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#快速生成文件","aria-hidden":"true"},"#",-1),c=s(" 快速生成文件 "),i=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),h=n("p",null,"开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。",-1),m=n("p",null,[s("框架默认提供了 page（页面）、component（组件）、store（全局状态）、module（模块）共 4 种模式，通过 "),n("code",null,"yarn new"),s(" 指令可以自行选择。")],-1),g=n("h2",{id:"page",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#page","aria-hidden":"true"},"#"),s(" page")],-1),f=["src"],w=n("p",null,[s("page 模式下，只能在 "),n("code",null,"./src/views/"),s(" 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 "),n("code",null,"<page-header />"),s(" 中的 "),n("code",null,"title"),s(" 会按照你输入的中文名称替换，页面的 "),n("code",null,"name"),s(" 会根据当前文件目录和文件名自动生成，确保唯一。")],-1),b=n("h2",{id:"component",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),s(" component")],-1),v=["src"],x=n("p",null,[s("component 模式可以选择生成的是全局组件还是局部组件，全局组件生成目录为 "),n("code",null,"./src/components/"),s(" ，局部组件则在 "),n("code",null,"./src/views/"),s(" 目录下选择指定的文件夹进行生成。")],-1),B=n("h2",{id:"store",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#store","aria-hidden":"true"},"#"),s(" store")],-1),k=["src"],$=n("p",null,[s("store 模式则会在 "),n("code",null,"./src/store/modules/"),s(" 目录下生成一个空模板")],-1),j=n("h2",{id:"module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#module","aria-hidden":"true"},"#"),s(" module")],-1),y=["src"],L=n("p",null,"module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。",-1),_=s("这块部分详细介绍建议移步《"),F=s("标准模块"),O=s("》"),R=n("h2",{id:"扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩展","aria-hidden":"true"},"#"),s(" 扩展")],-1),q={class:"custom-container tip"},z=n("p",{class:"custom-container-title"},"说明",-1),A=s("该功能基于 "),C={href:"https://www.npmjs.com/package/plop",target:"_blank",rel:"noopener noreferrer"},D=s("plop"),E=s(" 实现，在扩展新的模式前，请先详细阅读 plop 文档。"),G=n("p",null,"除了框架提供的 4 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。",-1),H=n("p",null,[s("预设模板文件存放在 "),n("code",null,"./plop-templates/"),s(" 目录下，并在 "),n("code",null,"./plopfile.js"),s(" 文件里进行引用，你可以参考现有 4 种模式的目录结构进行创建新的模板。")],-1);d.render=function(s,d){const I=e("Badge"),J=e("RouterLink"),K=e("OutboundLink");return l(),a(t,null,[n("h1",p,[u,c,r(I,{type:"tip",text:"专业版",vertical:"top"})]),i,h,m,g,n("p",null,[n("img",{src:s.$withBase("/vue2/plop-page.gif")},null,8,f)]),w,b,n("p",null,[n("img",{src:s.$withBase("/vue2/plop-component.gif")},null,8,v)]),x,B,n("p",null,[n("img",{src:s.$withBase("/vue2/plop-store.gif")},null,8,k)]),$,j,n("p",null,[n("img",{src:s.$withBase("/vue2/plop-module.gif")},null,8,y)]),L,n("p",null,[_,r(J,{to:"/guide-vue2/module.html"},{default:o((()=>[F])),_:1}),O]),R,n("div",q,[z,n("p",null,[A,n("a",C,[D,r(K)]),E])]),G,H],64)};export{d as default};
