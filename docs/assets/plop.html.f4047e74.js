import{r as l,c as e,a as n,b as o,w as a,F as r,d as p,o as c}from"./app.11a7de6c.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const t={},s=n("h1",{id:"代码文件自动生成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码文件自动生成","aria-hidden":"true"},"#"),p(" 代码文件自动生成")],-1),d=n("p",null,"开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。",-1),i={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"说明",-1),h=p("该功能基于 "),g={href:"https://www.npmjs.com/package/plop",target:"_blank",rel:"noopener noreferrer"},f=p("plop"),k=p(" 实现，在扩展新的模式前，请先详细阅读 plop 文档。"),w=n("p",null,[p("框架默认提供了 5 种模式，通过 "),n("code",null,"pnpm run new"),p(" 指令可以自行选择。")],-1),x=n("li",null,[n("code",null,"page"),p(" 页面文件")],-1),b=n("li",null,[n("code",null,"component"),p(" 组件文件")],-1),v=n("li",null,[n("code",null,"store"),p(" Vuex 全局状态文件")],-1),B=n("li",null,[n("code",null,"mock"),p(" mock 文件")],-1),$=n("code",null,"module",-1),j=p(" 页面模块文件 "),_=n("p",null,"除了框架提供的 5 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。",-1),y=n("p",null,[p("预设模板文件存放在 "),n("code",null,"./plop-templates/"),p(" 目录下，并在 "),n("code",null,"./plopfile.js"),p(" 文件里进行引用，你可以参考现有 5 种模式的目录结构进行创建新的模板。")],-1),L=n("h2",{id:"page",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#page","aria-hidden":"true"},"#"),p(" page")],-1),R=["src"],C=n("p",null,[p("page 模式下，只能在 "),n("code",null,"/src/views/"),p(" 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 "),n("code",null,"<page-header />"),p(" 中的 "),n("code",null,"title"),p(" 会按照你输入的中文名称替换，页面的 "),n("code",null,"name"),p(" 会根据当前文件目录和文件名自动生成，确保唯一。")],-1),D=n("h2",{id:"component",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),p(" component")],-1),F=["src"],O=n("p",null,[p("component 模式可以选择生成的是全局组件还是局部组件，全局组件生成目录为 "),n("code",null,"/src/components/"),p(" ，局部组件则在 "),n("code",null,"/src/views/"),p(" 目录下选择指定的文件夹进行生成。")],-1),U=n("h2",{id:"store",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#store","aria-hidden":"true"},"#"),p(" store")],-1),V=["src"],q=n("p",null,[p("store 模式则会在 "),n("code",null,"/src/store/modules/"),p(" 目录下生成一个空模板")],-1),z=n("h2",{id:"mock",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mock","aria-hidden":"true"},"#"),p(" mock")],-1),A=["src"],E=n("p",null,[p("mock 模式则会在 "),n("code",null,"/src/mock/"),p(" 目录下生成一个标准 CURD 的 mock 数据")],-1),G={id:"module",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#module","aria-hidden":"true"},"#",-1),I=p(" module "),J=["src"],K=n("p",null,"module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。",-1),M=p("这块部分详细介绍请阅读《"),N=p("标准模块"),P=p("》。");var Q=u(t,[["render",function(p,u){const t=l("OutboundLink"),Q=l("Badge"),S=l("RouterLink");return c(),e(r,null,[s,d,n("div",i,[m,n("p",null,[h,n("a",g,[f,o(t)]),k])]),w,n("ul",null,[x,b,v,B,n("li",null,[$,j,o(Q,{type:"tip",text:"专业版",vertical:"top"})])]),_,y,L,n("p",null,[n("img",{src:p.$withBase("/plop-page.gif")},null,8,R)]),C,D,n("p",null,[n("img",{src:p.$withBase("/plop-component.gif")},null,8,F)]),O,U,n("p",null,[n("img",{src:p.$withBase("/plop-store.gif")},null,8,V)]),q,z,n("p",null,[n("img",{src:p.$withBase("/plop-mock.gif")},null,8,A)]),E,n("h2",G,[H,I,o(Q,{type:"tip",text:"专业版",vertical:"top"})]),n("p",null,[n("img",{src:p.$withBase("/plop-module.gif")},null,8,J)]),K,n("p",null,[M,o(S,{to:"/guide/plop-module.html"},{default:a((()=>[N])),_:1}),P])],64)}]]);export{Q as default};
