import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as m,c as v,f as t,b as n,d as e,a as i,w as s,e as b}from"./app-e004c2b0.js";const g={},k=n("p",null,"The plugin provides you vue playground support.",-1),h={class:"hint-container tip"},y=n("p",{class:"hint-container-title"},"Tips",-1),f=n("p",null,[e("Since we are providing a runtime compiler, we are introducing the whole "),n("code",null,"@vue/compiler-sfc"),e(" package with typescript support, so the whole Vue Playground chunk is > 4MB. So you should only use this if you are heavily depending on interactive Vue Playground.")],-1),C=n("h2",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),e(" Settings")],-1),I=n("p",null,[e("Install "),n("code",null,"@vue/repl"),e(" in your project:")],-1),_=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` @vue/repl
`)])])],-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` @vue/repl
`)])])],-1),B=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` @vue/repl
`)])])],-1),X=n("p",null,"Then enabling via:",-1),Z=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhance "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// enable vue playground"),e(`
      vuePlayground`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhance "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// enable vue playground"),e(`
      `),n("span",{class:"token literal-property property"},"vuePlayground"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=b(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To use vue playground, you should use a container named <code>vue-playground</code>.</p><p>In it, you can use 3 directives:</p><ul><li><code>@file FileName</code> then a code block to add files</li><li><code>@import</code> then a json block to customize &quot;import map&quot;</li><li><code>@setting</code> then a json block to customize settings</li></ul><p>You can see the below demos to see more details.</p><p>You can import and call <code>defineVuePlaygroundConfig</code> in client config file to customize <code>@vue/repl</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineVuePlaygroundConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineVuePlaygroundConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \`@vue/repl\` options here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,8),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[e(`::: vue-playground Playground 1

@file App.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),e(`
`),n("span",{class:"token code-block language-vue language-vue"},`<script setup>
import { ref } from "vue";

const msg = ref("Hello Playground!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[e(`::: vue-playground Playground 2

@file App.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),e(`
`),n("span",{class:"token code-block language-vue language-vue"},`<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`

@file Comp.vue

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"vue"),e(`
`),n("span",{class:"token code-block language-vue language-vue"},`<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
<\/script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`

@import

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),e(`
`),n("span",{class:"token code-block language-json language-json"},`{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`

@setting

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),e(`
`),n("span",{class:"token code-block language-json language-json"},`{
  "showCompileOutput": true
}`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(j,H){const o=c("RouterLink"),u=c("CodeTabs"),d=c("VuePlayground"),p=c("MdDemo");return m(),v("div",null,[k,t(" more "),n("div",h,[y,f,n("p",null,[e("You can use "),i(o,{to:"/guide/demo/vue.html"},{default:s(()=>[e("Vue Demo")]),_:1}),e(" and "),i(o,{to:"/guide/playground.html"},{default:s(()=>[e("Playground Vue Preset")]),_:1}),e(" as an alternative.")])]),t(" #region settings "),C,I,i(u,{id:"19",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:l})=>[e("pnpm")]),title1:s(({value:a,isActive:l})=>[e("yarn")]),title2:s(({value:a,isActive:l})=>[e("npm")]),tab0:s(({value:a,isActive:l})=>[_]),tab1:s(({value:a,isActive:l})=>[w]),tab2:s(({value:a,isActive:l})=>[B]),_:1}),X,t(" #endregion settings "),i(u,{id:"34",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:s(({value:a,isActive:l})=>[e("TS")]),title1:s(({value:a,isActive:l})=>[e("JS")]),tab0:s(({value:a,isActive:l})=>[Z]),tab1:s(({value:a,isActive:l})=>[x]),_:1}),t(" #region after "),V,i(p,{title:"Simple Vue Playground",id:"md-demo-79"},{default:s(()=>[i(d,{title:"Playground%201",key:"13f32d90",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiJ9"})]),code:s(()=>[P]),_:1}),i(p,{title:"Vue Playground with customized settings and import",id:"md-demo-87"},{default:s(()=>[i(d,{title:"Playground%202",key:"22e17a89",settings:"%7B%22showCompileOutput%22%3Atrue%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBDb21wIGZyb20gXCIuL0NvbXAudnVlXCI7XG5cbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFBsYXlncm91bmQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6IjxzY3JpcHQgc2V0dXA%2BXG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSBcIkB2dWV1c2UvY29yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCB7IGNoYXJnaW5nLCBsZXZlbCB9ID0gdXNlQmF0dGVyeSgpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPkJhdHRlcnkgc3RhdHVzPC9oMT5cbiAgPHA%2BQ2hhcmdpbmc6IHt7IGNoYXJnaW5nIH19PC9wPlxuICA8cD5MZXZlbDoge3sgbGV2ZWwgKiAxMDAgfX0lPC9wPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWV1c2UvY29yZS9pbmRleC5tanNcIixcbiAgICBcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1kZW1pL2xpYi9pbmRleC5tanNcIlxuICB9XG59XG4ifQ%3D%3D"})]),code:s(()=>[G]),_:1}),t(" #endregion after ")])}const J=r(g,[["render",A],["__file","vue-playground.html.vue"]]);export{J as default};
