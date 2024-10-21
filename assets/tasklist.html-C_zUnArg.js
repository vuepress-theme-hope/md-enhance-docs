import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as i,h as t,f as l,e as a,b as p,d as e,r,o as d}from"./app-i3mrYDhd.js";const o={};function c(g,s){const n=r("MdDemo");return d(),k("div",null,[s[2]||(s[2]=i("p",null,"让你的 VuePress 站点中的 Markdown 文件支持任务列表。",-1)),t(" more "),s[3]||(s[3]=l(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mdEnhancePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 启用任务列表</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      tasklist</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div>`,2)),t(" #region after "),s[4]||(s[4]=i("h2",{id:"语法",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#语法"},[i("span",null,"语法")])],-1)),s[5]||(s[5]=i("ul",null,[i("li",null,[a("使用 "),i("code",null,"- [ ] 一些文字"),a(" 渲染一个未勾选的任务项")]),i("li",null,[a("使用 "),i("code",null,"- [x] 一些文字"),a(" 渲染一个勾选了的任务项 (我们也支持大写的 "),i("code",null,"X"),a(")")])],-1)),p(n,{title:"案例",id:"md-demo-24"},{default:e(()=>s[0]||(s[0]=[i("ul",{class:"task-list-container"},[i("li",{class:"task-list-item"},[i("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",disabled:"disabled"}),i("label",{class:"task-list-item-label",for:"task-item-0"}," 计划 A")]),i("li",{class:"task-list-item"},[i("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"}),i("label",{class:"task-list-item-label",for:"task-item-1"}," 计划 B")])],-1)])),code:e(()=>s[1]||(s[1]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," [ ] 计划 A")]),a(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}}," ["),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"x"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 计划 B")])])])],-1)])),_:1}),s[6]||(s[6]=l(`<h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级"><span>高级</span></a></h2><p>除了在插件选项中设置 <code>tasklist: true</code> 之外，你还可以将对象作为选项传递给它。可用选项如下:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> TaskListOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 是否禁用 checkbox</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  disabled</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 是否使用 \`&lt;label&gt;\` 来包裹文字</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">default</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  label</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),t(" #endregion after ")])}const m=h(o,[["render",c],["__file","tasklist.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/grammar/tasklist.html","title":"任务列表","lang":"zh-CN","frontmatter":{"title":"任务列表","icon":"square-check","description":"让你的 VuePress 站点中的 Markdown 文件支持任务列表。 配置 语法 使用 - [ ] 一些文字 渲染一个未勾选的任务项 使用 - [x] 一些文字 渲染一个勾选了的任务项 (我们也支持大写的 X) 高级 除了在插件选项中设置 tasklist: true 之外，你还可以将对象作为选项传递给它。可用选项如下:","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://plugin-md-enhance.vuejs.press/guide/grammar/tasklist.html"}],["meta",{"property":"og:url","content":"https://plugin-md-enhance.vuejs.press/zh/guide/grammar/tasklist.html"}],["meta",{"property":"og:site_name","content":"Markdown 增强"}],["meta",{"property":"og:title","content":"任务列表"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持任务列表。 配置 语法 使用 - [ ] 一些文字 渲染一个未勾选的任务项 使用 - [x] 一些文字 渲染一个勾选了的任务项 (我们也支持大写的 X) 高级 除了在插件选项中设置 tasklist: true 之外，你还可以将对象作为选项传递给它。可用选项如下:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-28T16:56:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T16:56:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"任务列表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T16:56:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"高级","slug":"高级","link":"#高级","children":[]}],"git":{"createdTime":1643270355000,"updatedTime":1711644994000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"zh/guide/grammar/tasklist.md","localizedDate":"2022年1月27日","autoDesc":true}');export{m as comp,u as data};
