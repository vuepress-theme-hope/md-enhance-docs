import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c,b as n,d as e,a as i,e as s}from"./app-e004c2b0.js";const t={},r=n("h2",{id:"legacy-mode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#legacy-mode","aria-hidden":"true"},"#"),e(" Legacy Mode")],-1),p=n("p",null,[e("You can pass the second argument "),n("code",null,"true"),e(" to enable legacy mode when calling "),n("code",null,"mdEnhancePlugin"),e(", and the plugin will try to run with V1 behavior.")],-1),u=n("h2",{id:"new-features",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#new-features","aria-hidden":"true"},"#"),e(" New Features")],-1),v=s(`<li><p>Markdown link check</p><p>The plugin now check your Markdown links and warn you when broken links are detected.</p><p>You can control this behavior with <code>checkLinks</code> option</p></li><li><p>image mark support</p><p>Use <code>#light</code> and <code>#dark</code> suffix to mark images to display them in light mode or dark mode via <code>imgMark</code> option.</p></li><li><p><code>v-pre</code> support</p><p>The following container support is removed from <code>@vuepress/core</code>, so <code>vPre</code> option is added</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

Some {{vue syntax}}.

:::
</code></pre></div></li>`,3),m=n("p",null,"Chart.js support",-1),b={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"chart",-1),h=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // chart.js config
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js config</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=n("p",null,"ECharts support",-1),f={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"echarts",-1),w=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // chart.js config
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js config</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=s("<li><p>content include support</p><p>Use <code>&lt;!-- @include: --&gt;</code> to include other file content in Markdown via <code>include</code> options.</p><p>Use <code>&lt;!-- @include: filename --&gt;</code> to include a file.</p><p>To partially import the file, you can specify the range of lines to be included:</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end} --&gt;</code></li></ul><p>Also, you can include file region:</p><ul><li><code>&lt;!-- @include: filename#region --&gt;</code></li></ul></li><li><p>tabs support</p><p>Use <code>tabs</code> container to create tabs via <code>tabs</code> option.</p></li>",2),y=s(`<h2 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h2><ul><li><p>renamed <code>codegroup</code> to <code>codetabs</code></p></li><li><p>Now all options are disabled by default</p></li><li><p>Code demo syntax changed</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Code Group changed to code tab</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group

::: code-group-item pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item npm:active

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="removed-options" tabindex="-1"><a class="header-anchor" href="#removed-options" aria-hidden="true">#</a> Removed Options</h2><ul><li><p><code>enableAll</code> removed</p><p>There are too many noob users who don&#39;t know what they are doing, and they just enable this option without using all the feature provided, yet they complain about load speed.</p></li><li><p><code>lineNumbers</code> removed</p><p>VuePress 2 supports line number config per code block now.</p></li><li><p><code>imageFix</code> removed</p><p>Mr.Hope already made a PR to fix broken image links in Markdown, so it&#39;s no longer needed</p></li></ul>`,4);function j(T,C){const a=d("ExternalLinkIcon");return o(),c("div",null,[r,p,u,n("ul",null,[v,n("li",null,[m,n("p",null,[e("Adds "),n("a",b,[e("chart.js"),i(a)]),e(" support via "),k,e(" option")]),h]),n("li",null,[g,n("p",null,[e("Adds "),n("a",f,[e("ECharts"),i(a)]),e(" support via "),_,e(" option")]),w]),x]),y])}const A=l(t,[["render",j],["__file","migration.html.vue"]]);export{A as default};
