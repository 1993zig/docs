import{_ as r,r as e,o as i,c as y,a as s,b as a,w as o,d as n,e as p}from"./app.05ca21a1.js";const h={},u=s("h1",{id:"docs-reference",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docs-reference","aria-hidden":"true"},"#"),n(" DOCs reference")],-1),g={href:"https://v2.vuepress.vuejs.org/guide/markdown.html#markdown",target:"_blank",rel:"noopener noreferrer"},m=n("markdown reference"),_=p(`<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> emoji</h2><p>use</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">VuePress 2 is out :tada: !</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><p>to get</p><p>VuePress 2 is out \u{1F389} !</p><h2 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> containers</h2>`,6),v={href:"https://v2.vuepress.vuejs.org/reference/default-theme/markdown.html#custom-containers",target:"_blank",rel:"noopener noreferrer"},b=n("see"),x=p(`<p>use</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">::: &lt;type&gt; [title]</span></span>
<span class="line"><span style="color:#c9d1d9;">[content]</span></span>
<span class="line"><span style="color:#c9d1d9;">:::</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><p>like</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">::: tip</span></span>
<span class="line"><span style="color:#c9d1d9;">This is a tip</span></span>
<span class="line"><span style="color:#c9d1d9;">:::</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><p>to get</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><p>types</p><ul><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><p>optinally add a title</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">::: tip myTitle</span></span>
<span class="line"><span style="color:#c9d1d9;">This is a tip</span></span>
<span class="line"><span style="color:#c9d1d9;">:::</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h2><p>use backticks to enclose code</p><h2 id="codegroups" tabindex="-1"><a class="header-anchor" href="#codegroups" aria-hidden="true">#</a> codegroups</h2><p>to show code for ie different languages use code blocks</p>`,14),f={href:"https://v2.vuepress.vuejs.org/reference/default-theme/components.html#codegroup",target:"_blank",rel:"noopener noreferrer"},k=n("see"),D=p(`<p>use</p><div class="language-markdown ext-md"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">&lt;CodeGroup&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;CodeGroupItem title=&quot;YARN&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#C9D1D9;">yarn</span></span>
<span class="line"><span style="color:#C9D1D9;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;CodeGroupItem title=&quot;NPM&quot; active&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#C9D1D9;">npm install</span></span>
<span class="line"><span style="color:#C9D1D9;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/CodeGroup&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>to get</p>`,3),q=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"yarn")]),n(`
`),s("span",{class:"line"})])])],-1),C=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"npm install")]),n(`
`),s("span",{class:"line"})])])],-1),j=s("h2",{id:"badges",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#badges","aria-hidden":"true"},"#"),n(" badges")],-1),w={href:"https://v2.vuepress.vuejs.org/reference/default-theme/components.html#badge",target:"_blank",rel:"noopener noreferrer"},V=n("see"),P=p(`<p>use</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">- VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">- VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">- VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div><p>to get</p>`,3),G=n("VuePress - "),I=n("VuePress - "),B=n("VuePress - "),N=s("h2",{id:"syntax-highlighting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#syntax-highlighting","aria-hidden":"true"},"#"),n(" syntax highlighting")],-1),T=s("h3",{id:"language-list",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#language-list","aria-hidden":"true"},"#"),n(" language list")],-1),z={href:"https://github.com/shikijs/shiki/blob/main/docs/languages.md",target:"_blank",rel:"noopener noreferrer"},E=n("see"),A=p(`<div class="language-text ext-text"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">&#39;abap&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;actionscript-3&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ada&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;apache&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;apex&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;apl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;applescript&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;asm&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;astro&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;awk&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ballerina&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;bat&#39; | &#39;batch&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;berry&#39; | &#39;be&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;bibtex&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;bicep&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;c&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;clojure&#39; | &#39;clj&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;cobol&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;codeql&#39; | &#39;ql&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;coffee&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;cpp&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;crystal&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;csharp&#39; | &#39;c#&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;css&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;cue&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;d&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;dart&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;diff&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;docker&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;dream-maker&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;elixir&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;elm&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;erb&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;erlang&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;fish&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;fsharp&#39; | &#39;f#&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;gherkin&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;git-commit&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;git-rebase&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;gnuplot&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;go&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;graphql&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;groovy&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;hack&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;haml&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;handlebars&#39; | &#39;hbs&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;haskell&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;hcl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;hlsl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;html&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ini&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;java&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;javascript&#39; | &#39;js&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;jinja-html&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;jsonc&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;jsonnet&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;jssm&#39; | &#39;fsl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;jsx&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;julia&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;kotlin&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;latex&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;less&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;lisp&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;logo&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;lua&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;make&#39; | &#39;makefile&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;markdown&#39; | &#39;md&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;marko&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;matlab&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;mdx&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;mermaid&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;nginx&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;nim&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;nix&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;objective-c&#39; | &#39;objc&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;objective-cpp&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ocaml&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;pascal&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;perl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;php&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;plsql&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;postcss&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;powershell&#39; | &#39;ps&#39; | &#39;ps1&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;prisma&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;prolog&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;pug&#39; | &#39;jade&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;puppet&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;purescript&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;python&#39; | &#39;py&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;r&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;raku&#39; | &#39;perl6&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;razor&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;rel&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;riscv&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ruby&#39; | &#39;rb&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;rust&#39; | &#39;rs&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;sas&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;sass&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;scala&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;scheme&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;scss&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;shaderlab&#39; | &#39;shader&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;shellscript&#39; | &#39;shell&#39; | &#39;bash&#39; | &#39;sh&#39; | &#39;zsh&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;smalltalk&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;solidity&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;sparql&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;sql&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;ssh-config&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;stata&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;stylus&#39; | &#39;styl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;svelte&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;swift&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;system-verilog&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;tasl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;tcl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;tex&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;toml&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;tsx&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;turtle&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;twig&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;typescript&#39; | &#39;ts&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;vb&#39; | &#39;cmd&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;verilog&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;vhdl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;viml&#39; | &#39;vim&#39; | &#39;vimscript&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;vue-html&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;wasm&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;wenyan&#39; | &#39;\u6587\u8A00&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;xml&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;xsl&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;yaml&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;">&#39;zenscript&#39;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre></div>`,1);function L(M,R){const l=e("ExternalLinkIcon"),t=e("CodeGroupItem"),d=e("CodeGroup"),c=e("Badge");return i(),y("div",null,[u,s("p",null,[s("a",g,[m,a(l)])]),_,s("p",null,[s("a",v,[b,a(l)])]),x,s("p",null,[s("a",f,[k,a(l)])]),D,a(d,null,{default:o(()=>[a(t,{title:"YARN"},{default:o(()=>[q]),_:1}),a(t,{title:"NPM",active:""},{default:o(()=>[C]),_:1})]),_:1}),j,s("p",null,[s("a",w,[V,a(l)])]),P,s("ul",null,[s("li",null,[G,a(c,{type:"tip",text:"v2",vertical:"top"})]),s("li",null,[I,a(c,{type:"warning",text:"v2",vertical:"middle"})]),s("li",null,[B,a(c,{type:"danger",text:"v2",vertical:"bottom"})])]),N,T,s("p",null,[s("a",z,[E,a(l)])]),A])}var O=r(h,[["render",L],["__file","docs.html.vue"]]);export{O as default};
