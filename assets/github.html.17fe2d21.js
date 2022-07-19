import{_ as s,o as a,c as n,e as l}from"./app.05ca21a1.js";const e={},o=l(`<h1 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h1><h2 id="branches" tabindex="-1"><a class="header-anchor" href="#branches" aria-hidden="true">#</a> Branches</h2><h3 id="clear-commits" tabindex="-1"><a class="header-anchor" href="#clear-commits" aria-hidden="true">#</a> Clear commits</h3><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">git checkout --orphan latest_branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">git commit -am </span><span style="color:#A5D6FF;">&quot;commit message&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">git branch -D </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">branch</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">git branch -m </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">branch</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">git push -f </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">branch</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="worklow-actions" tabindex="-1"><a class="header-anchor" href="#worklow-actions" aria-hidden="true">#</a> Worklow/Actions</h2><h3 id="delete-history" tabindex="-1"><a class="header-anchor" href="#delete-history" aria-hidden="true">#</a> Delete History</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Needed packages <code>xargs</code>, <code>gh</code> and <code>jq</code></p></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">OWNER=</span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">your user/org name</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">REPO=</span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">repo name</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># list workflows</span></span>
<span class="line"><span style="color:#C9D1D9;">gh api -X GET /repos/$OWNER/$REPO/actions/workflows </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> jq </span><span style="color:#A5D6FF;">&#39;.workflows[] | .name,.id&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># copy the ID of the workflow you want to clear and set it</span></span>
<span class="line"><span style="color:#C9D1D9;">WORKFLOW_ID=</span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">workflow id</span><span style="color:#FF7B72;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># list runs</span></span>
<span class="line"><span style="color:#C9D1D9;">gh api -X GET /repos/$OWNER/$REPO/actions/workflows/$WORKFLOW_ID/runs </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> jq </span><span style="color:#A5D6FF;">&#39;.workflow_runs[] | .id&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;"># delete runs (you&#39;ll have to run this multiple times if there&#39;s many because of pagination)</span></span>
<span class="line"><span style="color:#C9D1D9;">gh api -X GET /repos/$OWNER/$REPO/actions/workflows/$WORKFLOW_ID/runs </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> jq </span><span style="color:#A5D6FF;">&#39;.workflow_runs[] | .id&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> xargs -I{} gh api -X DELETE /repos/$OWNER/$REPO/actions/runs/{}</span></span>
<span class="line"></span></code></pre></div>`,8),p=[o];function c(t,r){return a(),n("div",null,p)}var h=s(e,[["render",c],["__file","github.html.vue"]]);export{h as default};
