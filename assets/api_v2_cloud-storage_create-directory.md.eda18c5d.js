import{_ as s,c as a,o as e,a as n}from"./app.64996e31.js";const D=JSON.parse('{"title":"Cloud Storage Create Directory","description":"","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Method And Path","slug":"method-and-path"},{"level":2,"title":"Request","slug":"request"},{"level":3,"title":"Header","slug":"header"},{"level":3,"title":"Body","slug":"body"},{"level":2,"title":"Response","slug":"response"},{"level":3,"title":"Success","slug":"success"},{"level":3,"title":"Failed","slug":"failed"}],"relativePath":"api/v2/cloud-storage/create-directory.md"}'),l={name:"api/v2/cloud-storage/create-directory.md"},o=n(`<h1 id="cloud-storage-create-directory" tabindex="-1">Cloud Storage Create Directory <a class="header-anchor" href="#cloud-storage-create-directory" aria-hidden="true">#</a></h1><p>\u{1F511} Need JWT Authorization</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>Create directory in cloud storage</p><h2 id="method-and-path" tabindex="-1">Method And Path <a class="header-anchor" href="#method-and-path" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">POST </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">v2</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">create</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">directory</span></span>
<span class="line"></span></code></pre></div><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h2><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-request-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-session-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">parentDirectoryPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">directoryName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="parentdirectorypath" tabindex="-1">parentDirectoryPath <a class="header-anchor" href="#parentdirectorypath" aria-hidden="true">#</a></h4><p>Create a directory in this folder</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>298</code></li><li>format: <a href="/misc/ajv-formats/directory-path.html">directory-path</a></li></ul><h4 id="directoryname" tabindex="-1">directoryName <a class="header-anchor" href="#directoryname" aria-hidden="true">#</a></h4><p>Create directory name</p><ul><li>minLength: <code>1</code></li><li>maxLength: <code>50</code></li><li>format: <a href="/misc/ajv-formats/directory-name.html">directory-name</a></li></ul><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><h3 id="success" tabindex="-1">Success <a class="header-anchor" href="#success" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a></p><h3 id="failed" tabindex="-1">Failed <a class="header-anchor" href="#failed" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Failed</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ErrorCode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a>, <a href="/types/error-code.html">ErrorCode</a></p>`,26),t=[o];function p(r,c,i,d,h,y){return e(),a("div",null,t)}const u=s(l,[["render",p]]);export{D as __pageData,u as default};
