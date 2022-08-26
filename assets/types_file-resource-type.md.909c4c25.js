import{_ as e,c as s,o,a}from"./app.e5bca581.js";const u=JSON.parse('{"title":"Type FileResourceType","description":"","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Definition","slug":"definition"},{"level":3,"title":"WhiteboardConvert","slug":"whiteboardconvert"},{"level":3,"title":"WhiteboardProjector","slug":"whiteboardprojector"},{"level":3,"title":"NormalResources","slug":"normalresources"},{"level":3,"title":"Directory","slug":"directory"}],"relativePath":"types/file-resource-type.md"}'),r={name:"types/file-resource-type.md"},t=a(`<h1 id="type-fileresourcetype" tabindex="-1">Type FileResourceType <a class="header-anchor" href="#type-fileresourcetype" aria-hidden="true">#</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>Type of document</p><h2 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FileResourceType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    WhiteboardConvert </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WhiteboardConvert</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    WhiteboardProjector </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WhiteboardProjector</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    NormalResources </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NormalResources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Directory </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Directory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="whiteboardconvert" tabindex="-1">WhiteboardConvert <a class="header-anchor" href="#whiteboardconvert" aria-hidden="true">#</a></h3><p>The old whiteboard convert service.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For convert of static documents, e.g. <code>pdf</code></p></div><h3 id="whiteboardprojector" tabindex="-1">WhiteboardProjector <a class="header-anchor" href="#whiteboardprojector" aria-hidden="true">#</a></h3><p>New whiteboard convert service</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Currently only dynamic file convert is supported, e.g. <code>pptx</code></p></div><h3 id="normalresources" tabindex="-1">NormalResources <a class="header-anchor" href="#normalresources" aria-hidden="true">#</a></h3><p>Common files such as: <code>mp3</code>, <code>mp4</code>, <code>jpg</code>, etc.</p><h3 id="directory" tabindex="-1">Directory <a class="header-anchor" href="#directory" aria-hidden="true">#</a></h3><p>means the current file is a directory</p>`,15),n=[t];function l(c,p,i,d,h,y){return o(),s("div",null,n)}const F=e(r,[["render",l]]);export{u as __pageData,F as default};