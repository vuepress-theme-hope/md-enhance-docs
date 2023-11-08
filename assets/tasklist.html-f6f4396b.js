import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as u,f as l,a as c,w as a,b as s,d as n,e as k}from"./app-e004c2b0.js";const m={},b=s("p",null,"Let the Markdown file in your VuePress site support task list.",-1),v=s("h2",{id:"settings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),n(" Settings")],-1),h=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  plugins`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token function"},"mdEnhancePlugin"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token comment"},"// Enable Task List"),n(`
      tasklist`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{js:"",class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token function"},"mdEnhancePlugin"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token comment"},"// Enable Task List"),n(`
      `),s("span",{class:"token literal-property property"},"tasklist"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("h2",{id:"syntax",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),n(" Syntax")],-1),f=s("ul",null,[s("li",null,[n("Use "),s("code",null,"- [ ] some text"),n(" to render an unchecked task item.")]),s("li",null,[n("Use "),s("code",null,"- [x] some text"),n(" to render a checked task item. (Capital "),s("code",null,"X"),n(" is also supported)")])],-1),x=s("ul",{class:"task-list-container"},[s("li",{class:"task-list-item"},[s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",disabled:"disabled"}),s("label",{class:"task-list-item-label",for:"task-item-0"}," Plan A")]),s("li",{class:"task-list-item"},[s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"}),s("label",{class:"task-list-item-label",for:"task-item-1"}," Plan B")])],-1),y=s("div",{class:"language-markdown","data-ext":"md"},[s("pre",{class:"language-markdown"},[s("code",null,[s("span",{class:"token list punctuation"},"-"),n(` [ ] Plan A
`),s("span",{class:"token list punctuation"},"-"),n(` [x] Plan B
`)])])],-1),w=k(`<h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>Besides setting <code>tasklist: true</code> in the plugin options, you can also pass objects to it as options. The available options are as follows:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function P(T,A){const o=i("CodeTabs"),p=i("MdDemo");return d(),u("div",null,[b,l(" more "),v,c(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[n("TS")]),title1:a(({value:e,isActive:t})=>[n("JS")]),tab0:a(({value:e,isActive:t})=>[h]),tab1:a(({value:e,isActive:t})=>[g]),_:1}),l(" #region after "),_,f,c(p,{title:"Demo",id:"md-demo-31"},{default:a(()=>[x]),code:a(()=>[y]),_:1}),w,l(" #endregion after ")])}const j=r(m,[["render",P],["__file","tasklist.html.vue"]]);export{j as default};
