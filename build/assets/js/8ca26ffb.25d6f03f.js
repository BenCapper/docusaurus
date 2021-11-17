"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1006],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Text",u={unversionedId:"topic-01-create/videos-&-labs/book-c-labs/Text",id:"topic-01-create/videos-&-labs/book-c-labs/Text",isDocsHomePage:!1,title:"Text",description:"It's very easy to make some words bold and other words italic with Markdown. You can even insert a link to Google",source:"@site/docs/topic-01-create/videos-&-labs/book-c-labs/01.Text.md",sourceDirName:"topic-01-create/videos-&-labs/book-c-labs",slug:"/topic-01-create/videos-&-labs/book-c-labs/Text",permalink:"/docs/topic-01-create/videos-&-labs/book-c-labs/Text",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/topic-01-create/videos-&-labs/book-c-labs/01.Text.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Labs I",permalink:"/docs/topic-01-create/videos-&-labs/book-c-labs/Labs I"},next:{title:"Images and Archives",permalink:"/docs/topic-01-create/videos-&-labs/book-c-labs/Images"}},c=[{value:"Lists",id:"lists",children:[],level:2},{value:"This is a second-tier heading",id:"this-is-a-second-tier-heading",children:[{value:"This is a third-tier heading",id:"this-is-a-third-tier-heading",children:[{value:"You get the picture..",id:"you-get-the-picture",children:[],level:4}],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"Text"),(0,a.kt)("p",null,"It's very easy to make some words ",(0,a.kt)("strong",{parentName:"p"},"bold")," and other words ",(0,a.kt)("em",{parentName:"p"},"italic")," with Markdown. You can even ",(0,a.kt)("a",{parentName:"p",href:"http://google.com"},"insert a link to Google")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [insert a link to Google](http://google.com)\n")),(0,a.kt)("p",null,"HTML works in markdown, allowing the use of tags like span and ",(0,a.kt)("u",null,"underline"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"HTML works in markdown, allowing the use of tags like span and <u>underline</u>.\n")),(0,a.kt)("h2",{id:"lists"},"Lists"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"numbered lists"),", just number your list:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"One"),(0,a.kt)("li",{parentName:"ol"},"Two"),(0,a.kt)("li",{parentName:"ol"},"Three")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. One\n2. Two\n3. Three\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"bullet points"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a Line With a Star")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Or a Dash!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"* Start a Line With a Star\n- Or a Dash!\n")),(0,a.kt)("h1",{id:"structure-documents"},"Structure Documents"),(0,a.kt)("p",null," Start lines with ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," to create headings. Multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"##")," in a row denote smaller heading sizes."),(0,a.kt)("h2",{id:"this-is-a-second-tier-heading"},"This is a second-tier heading"),(0,a.kt)("h3",{id:"this-is-a-third-tier-heading"},"This is a third-tier heading"),(0,a.kt)("h4",{id:"you-get-the-picture"},"You get the picture.."),(0,a.kt)("p",null,"You can use one ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," all the way up to ",(0,a.kt)("inlineCode",{parentName:"p"},"######")," six for different heading sizes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## This is a second-tier heading\n### This is a thrid-tier heading\n#### You get the picture..\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"quote formatting"),", enter the ",(0,a.kt)("inlineCode",{parentName:"p"},">")," character before the line:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Coffee. The finest organic suspension ever devised... I beat the Borg with it."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Captain Janeway"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> Coffee. The finest organic suspension ever devised... I beat the Borg with it.\n> - Captain Janeway\n")),(0,a.kt)("h1",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"Inline code blocks can be wrapped in backticks: ",(0,a.kt)("inlineCode",{parentName:"p"},"var example = true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`var example = true`\n")),(0,a.kt)("p",null,"For code that spans more than one line, you can indent with four spaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (isAwesome){\n  return true\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    if (isAwesome){\n      return true\n    }\n")),(0,a.kt)("p",null,"Code fencing is supported, which are the code blocks used throughout this guide. To do this, use ",(0,a.kt)("inlineCode",{parentName:"p"},"~~~")," above and below the block of code. (The following example uses ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," to be able to show the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"~~~"),", do NOT include ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," in your site):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (isAwesome){\n  return true\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|~~~\n|if (isAwesome){\n|  return true\n|}\n|~~~\n")))}d.isMDXComponent=!0}}]);