import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as k,c as b,f as a,a as t,w as e,b as n,d as s,e as i}from"./app-e004c2b0.js";const g={},v=n("p",null,"Let you insert code demos in your Markdown file.",-1),h=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"What's Code Demo"),n("p",null,"Code demo is a feature that let you insert code snippets in your Markdown file, and the plugin will render the source code and run the code on the browser for you. If users like to try it, they can click CodePen or JSFiddle button to open the demo in CodePen or JSFiddle and edit them online."),n("p",null,"So, this means you do not have access to internal components in your project. Neither can we read your local file system in users' browser, nor can Codepen and JSFiddle access Vue components in your project.")],-1),y=n("h2",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),s(" Settings")],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Code Demo"),s(`
      demo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Enable Code Demo"),s(`
      `),n("span",{class:"token literal-property property"},"demo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=i(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>You should use the following syntax:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: [type]-demo Optional title text

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html language-html"><span class="token comment">&lt;!-- ↑ use available ones --&gt;</span>
<span class="token comment">&lt;!-- your code here --&gt;</span>
<span class="token comment">&lt;!-- you can have multiple code block, but each language must appear only once. --&gt;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json">// json block is for config
{
  // your config here (optional)
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={class:"hint-container tip"},x=n("p",{class:"hint-container-title"},"Tips",-1),S=n("p",null,"The plugin support three types:",-1),C=n("ul",null,[n("li",null,"normal"),n("li",null,"vue"),n("li",null,"react")],-1),j=i('<h2 id="available-languages" tabindex="-1"><a class="header-anchor" href="#available-languages" aria-hidden="true">#</a> Available Languages</h2><p>You can use different language in your demo block.</p><p>When you set language which can not run on browsers, since the plugin is not able to resolve them, so demo display will be disabled. The plugin will only show the code and provide you a button to open it in CodePen.</p><p>Available HTML languages:</p><ul><li><code>&quot;html&quot;</code> (default)</li><li><code>&quot;slim&quot;</code></li><li><code>&quot;haml&quot;</code></li><li><code>&quot;markdown&quot;</code></li></ul><blockquote><p>You can also use <code>md</code> in code block.</p></blockquote><p>Available JS languages:</p><ul><li><code>&quot;javascript&quot;</code> (default)</li><li><code>&quot;coffeescript&quot;</code></li><li><code>&quot;babel&quot;</code></li><li><code>&quot;livescript&quot;</code></li><li><code>&quot;typescript&quot;</code></li></ul><blockquote><p>You can also use <code>js</code>, <code>ts</code>, <code>coffee</code> and <code>ls</code> in code block.</p></blockquote><p>Available CSS languages:</p><ul><li><code>&quot;css&quot;</code> (default)</li><li><code>&quot;less&quot;</code></li><li><code>&quot;scss&quot;</code></li><li><code>&quot;sass&quot;</code></li><li><code>&quot;stylus&quot;</code></li></ul><blockquote><p>You can also use <code>styl</code> in code block.</p></blockquote>',12),T=n("h3",{id:"not-supported-language-demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#not-supported-language-demo","aria-hidden":"true"},"#"),s(" Not Supported Language Demo")],-1),V=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"#"),s(" Title")]),s(`

is very powerful!
`)])])],-1),A=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"VuePress Theme Hope"'),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),E=n("div",{class:"language-scss","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"+ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),L=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: normal-demo Normal demo

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"md"),s(`
`),n("span",{class:"token code-block language-md language-md"},[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"#"),s(" Title")]),s(`

is very powerful!`)]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"ts"),s(`
`),n("span",{class:"token code-block language-ts language-ts"},[n("span",{class:"token keyword"},"const"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"VuePress Theme Hope"'),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"h1"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"scss"),s(`
`),n("span",{class:"token code-block language-scss language-scss"},[n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),s(" italic"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"+ p "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function J(M,N){const u=o("CodeTabs"),p=o("RouterLink"),d=o("CodeDemo"),r=o("MdDemo");return k(),b("div",null,[v,a(" more "),h,y,t(u,{id:"15",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:l,isActive:c})=>[s("TS")]),title1:e(({value:l,isActive:c})=>[s("JS")]),tab0:e(({value:l,isActive:c})=>[f]),tab1:e(({value:l,isActive:c})=>[_]),_:1}),a(" #region syntax "),q,a(" #endregion syntax "),n("div",w,[x,n("p",null,[s("The json block is optional, for config please see "),t(p,{to:"/config.html#demo"},{default:e(()=>[s("config")]),_:1}),s(".")])]),S,C,a(" #region language "),j,a(" #endregion language "),T,a(" #region demo "),t(r,{title:"A demo using language not supported by browsers",id:"md-demo-172"},{default:e(()=>[t(d,{id:"code-demo-173",type:"normal",title:"Normal%20demo",code:"eJwtjc1KA0EQhF+lbC+KGsh1xXsOCoKLp76E2U52YLZnne5VQsi72/mBPnVVfd+RpoE6ukefvQgrazb8Sjtgrn/Sdku5Y6VncotWqmqOScy2e+lg3rLu8Qam70U+W/zRjzIJNnUWptczbqhpmUR99bME9UuKJK/tgWlcMz2usqq0Tf/xHpgbOGYhtGRn5bjGkRXYVfUX80MJb/ZtyelCB54wXxtAqqW2Dk2GyIATaxyd/gGW+0yv"},{default:e(()=>[V,A,E]),_:1})]),code:e(()=>[L]),_:1}),a(" #endregion demo ")])}const Y=m(g,[["render",J],["__file","index.html.vue"]]);export{Y as default};
