import{_ as s,c as a,o as e,a as n}from"./app.526c152f.js";const F=JSON.parse('{"title":"Cloud Storage Rename","description":"","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Method And Path","slug":"method-and-path"},{"level":2,"title":"Request","slug":"request"},{"level":3,"title":"Header","slug":"header"},{"level":3,"title":"Body","slug":"body"},{"level":2,"title":"Response","slug":"response"},{"level":3,"title":"Success","slug":"success"},{"level":3,"title":"Failed","slug":"failed"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"directory","slug":"directory"},{"level":3,"title":"file","slug":"file"}],"relativePath":"api/v2/cloud-storage/rename.md"}'),l={name:"api/v2/cloud-storage/rename.md"},o=n(`<h1 id="cloud-storage-rename" tabindex="-1">Cloud Storage Rename <a class="header-anchor" href="#cloud-storage-rename" aria-hidden="true">#</a></h1><p>\u{1F511} Need JWT Authorization</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>Rename cloud storage file or directory</p><h2 id="method-and-path" tabindex="-1">Method And Path <a class="header-anchor" href="#method-and-path" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">POST </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">v2</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">rename</span></span>
<span class="line"></span></code></pre></div><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h2><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-request-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-session-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fileUUID</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">newName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="fileuuid" tabindex="-1">fileUUID <a class="header-anchor" href="#fileuuid" aria-hidden="true">#</a></h4><p>File or directory uuid</p><ul><li>format: <a href="/misc/ajv-formats/uuid-v4.html">uuid-v4</a></li></ul><h4 id="newname" tabindex="-1">newName <a class="header-anchor" href="#newname" aria-hidden="true">#</a></h4><p>File or directory new name</p><p>If target is directory, format is: <a href="/misc/ajv-formats/directory-name.html">directory-name</a></p><ul><li>maxLength: <code>50</code></li><li>minLength: <code>1</code></li></ul><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><h3 id="success" tabindex="-1">Success <a class="header-anchor" href="#success" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a></p><h3 id="failed" tabindex="-1">Failed <a class="header-anchor" href="#failed" aria-hidden="true">#</a></h3><p>HTTP Status Code: <code>200</code></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Failed</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ErrorCode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Extends Type: <a href="/types/status.html">Status</a>, <a href="/types/error-code.html">ErrorCode</a></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="directory" tabindex="-1">directory <a class="header-anchor" href="#directory" aria-hidden="true">#</a></h3><ul><li>oldNew: <code>a</code></li><li>newName: <code>b</code></li><li>result: <code>b</code></li></ul><h3 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-hidden="true">#</a></h3><ul><li>oldNew: <code>a.png</code></li><li>newName: <code>b.jpg</code></li><li>result: <code>b.jpg.png</code></li></ul>`,32),t=[o];function p(r,c,i,d,h,u){return e(),a("div",null,t)}const D=s(l,[["render",p]]);export{F as __pageData,D as default};