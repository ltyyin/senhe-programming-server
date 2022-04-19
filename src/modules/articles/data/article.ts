export default [
  `
    <div data-v-3fbea7fe="" class="article-content" itemprop="articleBody"><div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>TypeScript 这些年越来越火，可以说是前端工程师的必备技能了，各大框架都基于它实现。</p>
    <p>那么，TypeScript 的出现和爆火是偶然发生的吗？其实不是，类似 TypeScript 这种静态类型语言成为主流是必然会发生的。为什么这么说呢？</p>
    <p><strong>让我们先思考一个问题：类型是什么？</strong></p>
    <p>类型具体点来说就是指 number、boolean、string 等基础类型和 Object、Function 等复合类型，它们是编程语言提供的对不同内容的抽象：</p>
    <ul>
    <li>
    <p><strong>不同类型变量占据的内存大小不同</strong>：boolean 类型的变量只会分配 1 个字节的内存，而 number 类型的变量则会分配 8 个字节的内存，给变量声明了不同的类型就代表了会占据不同的内存空间。</p>
    </li>
    <li>
    <p><strong>不同类型变量可做的操作不同</strong>：number 类型可以做加减乘除等运算，boolean 就不可以，复合类型中不同类型的对象可用的方法不同，比如 Date 和 RegExp，变量的类型不同代表可以对该变量做的操作就不同。</p>
    </li>
    </ul>
    <p>我们知道了什么是类型，那自然可以想到类型和所做的操作要匹配才行，这就是为什么要做类型检查。</p>
    <p><strong>如果能保证对某种类型只做该类型允许的操作，这就叫做<code>类型安全</code></strong>。比如你对 boolean 做加减乘除，这就是类型不安全，你对 Date 对象调用 exec 方法，这就是类型不安全。反之，就是类型安全。</p>
    <p>所以，<strong>类型检查是为了保证类型安全的</strong>。</p>
    <p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0381315149ec43408473efe6683bd4a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="" loading="lazy" class="medium-zoom-image"></p>
    <p>类型检查可以在运行时做，也可以运行之前的编译期做。这是两种不同的类型，前者叫做动态类型检查，后者叫做静态类型检查。</p>
    <p>两种类型检查各有优缺点。<code>动态类型检查</code> 在源码中不保留类型信息，对某个变量赋什么值、做什么操作都是允许的，写代码很灵活。但这也埋下了类型不安全的隐患，比如对 string 做了乘除，对 Date 对象调用了 exec 方法，这些都是运行时才能检查出来的错误。</p>
    <p>其中，最常见的错误应该是 “null is not an object”、“undefined is not a function” 之类的了，写代码时没发现类型不匹配，到了运行的时候才发现，就会有很多这种报错。</p>
    <p>所以，动态类型虽然代码写起来简单，但代码中很容易藏着一些类型不匹配的隐患。</p>
    <p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a77b4d5b8a04f8a808b14dc34057123~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="" loading="lazy" class="medium-zoom-image"></p>
    <p><code>静态类型检查</code>则是在源码中保留类型信息，声明变量要指定类型，对变量做的操作要和类型匹配，会有专门的编译器在编译期间做检查。</p>
    <p>静态类型给写代码增加了一些难度，因为你除了要考虑代码要表达的逻辑之外，还要考虑类型逻辑：变量是什么类型的、是不是匹配、要不要做类型转换等。</p>
    <p>不过，静态类型也消除了类型不安全的隐患，因为在编译期间就做了类型检查，就不会出现对 string 做了乘除，调用了 Date 的 exec 方法这类问题。</p>
    <p>所以，静态类型虽然代码写起来要考虑的问题多一些，会复杂一些，但是却消除了代码中潜藏类型不安全问题的可能。</p>
    <p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01906c6c616f4c6c8cd2a3fb05ee00df~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="" loading="lazy" class="medium-zoom-image"></p>
    <p>知道了动态类型检查和静态类型检查的区别，我们自然可以得出这样的结论：</p>
    <p><strong>动态类型只适合简单的场景，对于大项目却不太合适，因为代码中可能藏着的隐患太多了，万一线上报一个类型不匹配的错误，那可能就是大问题。</strong></p>
    <p><strong>而静态类型虽然会增加写代码的成本，但是却能更好的保证代码的健壮性，减少 Bug 率。</strong></p>
    <p>所以，<strong>大型项目注定会用静态类型语言开发。</strong></p>
    <p>JavaScript 本来是为了浏览器的表单验证而设计的，所以就设计成了动态类型的，写代码比较简单。</p>
    <p>但 JavaScript 也没想到它后来会被用来开发各种项目，比如 PC 和移动端的网页、React Native 跨端 App、小程序、Electron 桌面端、Node.js 服务端、Node.js 工具链等。</p>
    <p>开发各种大型项目的时候，JavaScript 的动态类型语言的缺点就暴露出来了，bug 率太高了，健壮性很难保证。那自然就有了对静态类型的强烈需求，于是 TypeScript 应运而生。</p>
    <p>TypeScript 给 JavaScript 添加了一套静态类型系统，从动态类型语言变成了静态类型语言，可以在编译期间做类型检查，提前发现一些类型安全问题。</p>
    <p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/055d32fce2ee40bda9b0c617b9d4a645~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="" loading="lazy" class="medium-zoom-image"></p>
    <p>而且，因为代码中添加了静态类型，也就可以配合编辑器来实现更好的提示、重构等，这是额外的好处。</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b306ef3bd374bc285a5189edf9c502b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="" loading="lazy" class="medium-zoom-image"></p>
    <p>所以，TypeScript 的火爆是一个偶然么？不，我觉得是必然，因为大型项目注定会用静态类型语言来开发。</p>
    <h2 data-id="heading-0">总结</h2>
    <p>类型决定了变量的内存大小和可以对它进行的操作，保证对什么类型只做什么操作就叫做类型安全，而保证类型安全的方式就是类型检查。</p>
    <p>类型检查可以在运行时做，叫做动态类型检查，也可以在编译时做，叫做静态类型检查。</p>
    <p>动态类型可能藏在代码里的隐患太多了，bug 率比较高，所以大型项目注定会用静态类型语言来开发。</p>
    <p>JavaScript 本身是一门动态类型语言，因为被越来越多的用来开发各种大型项目，所以就有了对静态类型的需求。TypeScript 就满足了这个需求。而且还有额外的更好的提示、更易于重构的好处。</p>
    <p>所以，TypeScript 的出现和现在的火爆是必然会发生的。</p>
  `,
  `
    <div class="markdown-body"><style>@charset "UTF-8";.markdown-body{word-break:break-word;font-weight:400;line-height:2;font-size:17px;overflow-x:hidden;color:#000}.markdown-body strong{padding:1px;color:#ee3f4d}.markdown-body em{padding:0 2px;color:#f33b1f}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{position:relative;margin-top:30px;margin-bottom:20px;line-height:1.5;font-weight:700}.markdown-body h1{text-align:center;padding-bottom:5px;font-size:32px;color:#ac1f18}.markdown-body h1:after{content:"";display:block;margin:4px auto 0;width:100px;height:2px;border-bottom:2px solid #f33b1f}.markdown-body h2{font-size:28px;border-bottom:1px solid #f33b1f}.markdown-body h2:before{content:"# "!important;color:#f33b1f}.markdown-body h3{font-size:24px;padding-left:9px;border-left:6px solid #f33b1f}.markdown-body h4{font-size:20px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #bbb;margin:16px 0}.markdown-body code{word-break:break-word;overflow-x:auto;background-color:#f9f1db;color:#ee2746;border-radius:2px;font-size:16px;padding:1px 2px}.markdown-body code,.markdown-body pre{font-family:-apple-system,-apple-system-body,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,PingFang SC,思源黑体 CN,思源黑体,JetBrains Mono,Fira Code,Menlo,Ubuntu Mono,Consolas,sans-serif}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{margin:12px 0!important;border-radius:3px;font-size:15px;padding:16px 12px;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f7f7f7}.markdown-body a{text-decoration:none;color:#1781b5;padding:0 2px;border-bottom:1px solid #1781b5}.markdown-body a:active,.markdown-body a:hover{border-bottom:2px solid #f33b1f;color:#ac1f18}.markdown-body blockquote{color:#3d3d3d;background-color:#fff9f9;padding:6px 16px;margin:16px 0;border-left:3px solid #f07c82}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:6px 0}.markdown-body ol,.markdown-body ul{padding-left:30px}.markdown-body ol li,.markdown-body ul li{margin-bottom:6px}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:6px}.markdown-body ol li{padding-left:6px}.markdown-body ::marker{color:#f33b1f}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}.markdown-body .task-list-item input[type=checkbox]{position:relative}.markdown-body .task-list-item input[type=checkbox]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;border:1px solid #f07c82;border-radius:3px;box-sizing:border-box;z-index:1}.markdown-body .task-list-item input[type=checkbox]:checked:after{content:"✓";position:absolute;top:-5px;left:0;right:0;bottom:0;width:0;height:0;color:#f33b1f;font-size:16px;font-weight:700;z-index:2}.markdown-body table{display:inline-block!important;font-size:14px;width:auto;max-width:100%;overflow:auto;border-spacing:0;border-collapse:collapse}.markdown-body table thead{background:#fff9f9;color:#000;text-align:left;font-size:15px}.markdown-body table tr:nth-child(2n){background-color:#fcfcfc}.markdown-body table tr:hover{background-color:#fff9f9}.markdown-body table td,.markdown-body table th{padding:12px 7px;line-height:24px;border:1px solid #f9f1db}.markdown-body table td{min-width:120px}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>「<strong>2022 年什么会火？什么该学？本文正在参与<a href="https://juejin.cn/post/7049621519219195918" title="https://juejin.cn/post/7049621519219195918" target="_blank">“聊聊 2022 技术趋势”</a>征文活动</strong>&nbsp;」</p>
    <h2 data-id="heading-0">📖阅读本文，你将:</h2>
    <ol>
    <li>
    <p>初步了解 <code>Hooks</code> 在 <code>vue</code> 与 <code>react</code> 的现状</p>
    </li>
    <li>
    <p>听一听本文作者关于 <code>Hooks</code> 的定义和总结</p>
    </li>
    <li>
    <p>弄懂“为什么我们需要 <code>Hooks</code>”</p>
    </li>
    <li>
    <p>进行一些简单的 <code>Hooks</code> 实践</p>
    </li>
    </ol>
    <h2 data-id="heading-1">一、hooks: 什么叫大势所趋？</h2>
    <p>2019年年初，<code>react</code> 在 <code>16.8.x</code> 版本正式具备了 <code>hooks</code> 能力。</p>
    <p>2019年6月，尤雨溪在 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fpull%2F42" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/vuejs/rfcs/pull/42" ref="nofollow noopener noreferrer">vue/github-issues</a> 里提出了关于 <code>vue3 Component API</code> 的提案。（vue hooks的基础）</p>
    <p>在后续的 <code>react</code> 和 <code>vue3</code> 相关版本中，相关 <code>hooks</code> 能力都开始被更多人所接受。</p>
    <p>除此之外，<code>solid.js</code>、 <code>preact</code> 等框架，也是开始选择加入 <code>hooks</code> 大家庭。</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b3514ceea4546929ee96b0f21832738~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="libs" loading="lazy" class="medium-zoom-image"></p>
    <p>可以预见，虽然目前仍然是 <code>class Component</code> 和 <code>hooks api</code> 并驾齐驱的场面，但未来几年里，<code>hooks</code> 极有可能取代 <code>class Component</code> 成为业内真正的主流。</p>
    <h2 data-id="heading-2">二、什么是 <code>hooks</code>？</h2>
    <blockquote>
    <p>年轻时你不懂我，就像后来我不懂 <code>hooks</code>😭。</p>
    </blockquote>
    <h3 data-id="heading-3">2.1 <code>hooks</code> 的定义</h3>
    <p>"hooks" 直译是 “钩子”，它并不仅是 <code>react</code>，甚至不仅是前端界的专用术语，而是整个行业所熟知的用语。通常指：</p>
    <blockquote>
    <p>系统运行到某一时期时，会调用被注册到该时机的回调函数。</p>
    </blockquote>
    <p>比较常见的钩子有：<code>windows</code> 系统的钩子能监听到系统的各种事件，浏览器提供的 <code>onload</code> 或 <code>addEventListener</code> 能注册在浏览器各种时机被调用的方法。</p>
    <p>以上这些，都可以被称一声 "hook"。</p>
    <p>但是很显然，在特定领域的特定话题下，<code>hooks</code> 这个词被赋予了一些特殊的含义。</p>
    <p>在 <code>react@16.x</code> 之前，当我们谈论 <code>hooks</code> 时，我们可能谈论的是“组件的生命周期”。</p>
    <p>但是现在，<code>hooks</code> 则有了全新的含义。</p>
    <p>以 <code>react</code> 为例，<code>hooks</code> 是：</p>
    <blockquote>
    <p>一系列以 <code>“use”</code> 作为开头的方法，它们提供了让你可以完全避开 <code>class式写法</code>，在函数式组件中完成生命周期、状态管理、逻辑复用等几乎全部组件开发工作的能力。</p>
    </blockquote>
    <p>简化一下：</p>
    <blockquote>
    <p>一系列方法，提供了在函数式组件中完成开发工作的能力。</p>
    </blockquote>
    <p>（记住这个关键词: <strong>函数式组件</strong>）</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">import</span> { useState, useEffect, useCallback } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
    <span class="hljs-comment">// 比如以上这几个方法，就是最为典型的 Hooks</span>
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>而在 <code>vue</code> 中， <code>hooks</code> 的定义可能更模糊，姑且总结一下：</p>
    <blockquote>
    <p>在 <code>vue</code> 组合式API里，以 <code>“use”</code> 作为开头的，一系列提供了组件复用、状态管理等开发能力的方法。</p>
    </blockquote>
    <p>（关键词：<strong>组合式API</strong>）</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">import</span> { useSlots, useAttrs } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
    <span class="hljs-keyword">import</span> { useRouter } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-router'</span>;
    <span class="hljs-comment">// 以上这些方法，也是 vue3 中相关的 Hook！</span>
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>如：<code>useSlots</code>、 <code>useAttrs</code>、 <code>useRouter</code> 等。</p>
    <p>但主观来说，我认为<code>vue</code> 组合式API其本身就是“vue hooks”的关键一环，起到了 <code>react hooks</code>里对生命周期、状态管理的核心作用。（如 <code>onMounted</code>、 <code>ref</code> 等等）。</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3919caf747174395b5b285065d9df8fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="hooks 环境" loading="lazy" class="medium-zoom-image"></p>
    <p>如果按这个标准来看的话，<code>vue</code> 和 <code>react</code> 中 <code>hooks</code> 的定义，似乎都差不多。</p>
    <p>那么为什么要提到是以 <code>“use”</code> 作为开头的方法呢？</p>
    <h3 data-id="heading-4">2.2 命名规范 和 指导思想</h3>
    <p>通常来说，<code>hooks</code> 的命名都是以 <code>use</code> 作为开头，这个规范也包括了那么我们自定义的 <code>hooks</code>。</p>
    <p>为什么？</p>
    <p>因为 <del>（爱情 误）</del> 约定。</p>
    <p>在 <code>react</code> 官方文档里，对 <code>hooks</code> 的定义和使用提出了 <strong>“一个假设、两个只在”</strong> 核心指导思想。<del>（播音腔）</del></p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f77099ca11334313bdb616d6389b1750~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="一个假设，两个只在" loading="lazy" class="medium-zoom-image"></p>
    <p><strong>一个假设：</strong> 假设任何以 「<code>use</code>」 开头并紧跟着一个大写字母的函数就是一个 <code>Hook</code>。</p>
    <p><strong>第一个只在：</strong> 只在 <code>React</code> 函数组件中调用 <code>Hook</code>，而不在普通函数中调用 <code>Hook</code>。（<code>Eslint</code> 通过判断一个方法是不是大坨峰命名来判断它是否是 <code>React</code> 函数）</p>
    <p><strong>第二个只在：</strong> 只在最顶层使用 <code>Hook</code>，而不要在循环，条件或嵌套函数中调用 Hook。</p>
    <p>因为是约定，因而 <code>useXxx</code> 的命名并非强制，你依然可以将你自定义的 <code>hook</code> 命名为 <code>byXxx</code> 或其他方式，但不推荐。</p>
    <p>因为约定的力量在于：我们不用细看实现，也能通过命名来了解一个它是什么。</p>
    <p>以上 <strong>“一个假设、两个只在”</strong> 总结自 <code>react</code> 官网：</p>
    <ol>
    <li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fhooks-rules.html" target="_blank" rel="nofollow noopener noreferrer" title="https://zh-hans.reactjs.org/docs/hooks-rules.html" ref="nofollow noopener noreferrer">zh-hans.reactjs.org/docs/hooks-…</a></li>
    <li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fhooks-faq.html%23what-exactly-do-the-lint-rules-enforce" target="_blank" rel="nofollow noopener noreferrer" title="https://zh-hans.reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce" ref="nofollow noopener noreferrer">zh-hans.reactjs.org/docs/hooks-…</a></li>
    </ol>
    <h2 data-id="heading-5">三、为什么我们需要 <code>hooks</code> ?</h2>
    <h3 data-id="heading-6">3.1 更好的状态复用</h3>
    <blockquote>
    <p>怼的就是你，<code>mixin</code> ！</p>
    </blockquote>
    <p>在 <code>class</code> 组件模式下，状态逻辑的复用是一件困难的事情。</p>
    <p>假设有如下需求：</p>
    <blockquote>
    <p>当组件实例创建时，需要创建一个 <code>state</code> 属性：<code>name</code>，并随机给此 <code>name</code> 属性附一个初始值。除此之外，还得提供一个 <code>setName</code> 方法。你可以在组件其他地方开销和修改此状态属性。</p>
    </blockquote>
    <blockquote>
    <p>更重要的是: 这个逻辑要可以复用，在各种业务组件里复用这个逻辑。</p>
    </blockquote>
    <p>在拥有 <code>Hooks</code> 之前，我首先会想到的解决方案一定是 <code>mixin</code>。</p>
    <p>代码如下：（此示例采用 <code>vue2 mixin</code> 写法 ）</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-comment">// 混入文件：name-mixin.js</span>
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">name</span>: genRandomName() <span class="hljs-comment">// 假装它能生成随机的名字</span>
        }
      },
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">setName</span>(<span class="hljs-params">name</span>)</span> {
          <span class="hljs-built_in">this</span>.name = name
        }
      }
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <pre><code class="hljs language-jsx copyable" lang="jsx"><span class="hljs-comment">// 组件：my-component.vue</span>
    &lt;template&gt;
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;template&gt;
    &lt;script&gt;
    <span class="hljs-keyword">import</span> nameMixin <span class="hljs-keyword">from</span> <span class="hljs-string">'./name-mixin'</span>;
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-attr">mixins</span>: [nameMixin],
      <span class="hljs-comment">// 通过mixins, 你可以直接获得 nameMixin 中所定义的状态、方法、生命周期中的事件等</span>
      <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-built_in">this</span>.setName(<span class="hljs-string">'Tom'</span>)
        }, <span class="hljs-number">3000</span>)
      }
    }
    &lt;script&gt;
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>粗略看来，<code>mixins</code> 似乎提供了非常不错的复用能力，但是，react官方文档直接表明：</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e181e3c923341b08b5a4398bf5ada71~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="react-mixins" loading="lazy" class="medium-zoom-image"></p>
    <p>为什么呢？</p>
    <p>因为 <code>mixins</code> 虽然提供了这种状态复用的能力，但它的<strong>弊端实在太多了</strong>。</p>
    <p><strong>弊端一：难以追溯的方法与属性！</strong></p>
    <p>试想一下，如果出现这种代码，你是否会怀疑人生：</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-attr">mixins</span>: [ a, b, c, d, e, f, g ], <span class="hljs-comment">// 当然，这只是表示它混入了很多能力</span>
      <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name)
        <span class="hljs-comment">// mmp!这个 this.name 来自于谁？我难道要一个个混入看实现？</span>
      }
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>又或者：</p>
    <pre><code class="hljs language-js copyable" lang="js">a.js mixins: [b.js]

    b.js mixins: [c.js]

    c.js mixins: [d.js]

    <span class="hljs-comment">// 你猜猜看, this.name 来自于谁？</span>
    <span class="hljs-comment">// 求求你别再说了，我血压已经上来了</span>
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p><strong>弊端二：覆盖、同名？贵圈真乱！</strong></p>
    <p>当我同时想混入 <code>mixin-a.js</code> 和 <code>mixin-b.js</code> 以同时获得它们能力的时候，不幸的事情发生了：</p>
    <p>由于这两个 <code>mixin</code> 功能的开发者惺惺相惜，它们都定义了 this.name 作为属性。</p>
    <p>这种时候，你会深深怀疑，<code>mixins</code> 究竟是不是一种科学的复用方式。</p>
    <p><strong>弊端三：梅开二度？代价很大！</strong></p>
    <p>仍然说上面的例子，如果我的需求发生了改变，我需要的不再是一个简单的状态 <code>name</code>，而是分别需要 <code>firstName</code> 和 <code>lastName</code>。<br>
    此时 <code>name-mixin.js</code> 混入的能力就会非常尴尬，因为我无法两次 <code>mixins</code> 同一个文件。</p>
    <p>当然，也是有解决方案的，如：</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-comment">// 动态生成mixin</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">genNameMixin</span>(<span class="hljs-params">key, funcKey</span>) </span>{
      <span class="hljs-keyword">return</span> {
        <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
          <span class="hljs-keyword">return</span> {
            [key]: genRandomName()
          }
        },
        <span class="hljs-attr">methods</span>: {
          [funcKey]: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">v</span>) </span>{
            <span class="hljs-built_in">this</span>.[key] = v
          } 
        }
      }
    }

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-attr">mixins</span>: [
        genNameMixin(<span class="hljs-string">'firstName'</span>, <span class="hljs-string">'setFirstName'</span>),
        genNameMixin(<span class="hljs-string">'lastName'</span>, <span class="hljs-string">'setLastName'</span>),
      ]
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>确实通过动态生成 <code>mixin</code> 完成了能力的复用，但这样一来，无疑更加地增大了程序的复杂性，降低了可读性。</p>
    <p>因此，一种新的 “状态逻辑复用” 就变得极为迫切了——它就是 <code>Hooks</code>!</p>
    <p><strong>Hook 的状态复用写法：</strong></p>
    <pre><code class="hljs language-js copyable" lang="js">
    <span class="hljs-comment">// 单个name的写法</span>
    <span class="hljs-keyword">const</span> { name, setName } = useName();

    <span class="hljs-comment">// 梅开二度的写法</span>
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">name</span> : firstName, <span class="hljs-attr">setName</span> : setFirstName } = useName();

    <span class="hljs-keyword">const</span> { <span class="hljs-attr">name</span> : secondName, <span class="hljs-attr">setName</span> : setSecondName } = useName();

    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>相比于 <code>mixins</code>，它们简直太棒了！</p>
    <ol>
    <li>方法和属性好追溯吗？这可太好了，谁产生的，哪儿来的一目了然。</li>
    <li>会有重名、覆盖问题吗？完全没有！内部的变量在闭包内，返回的变量支持定义别名。</li>
    <li>多次使用，没开N度？你看上面的代码块内不就“梅开三度” 了吗？</li>
    </ol>
    <p>就冲 <strong>“状态逻辑复用”</strong> 这个理由，<code>Hooks</code> 就已经香得我口水直流了。</p>
    <h3 data-id="heading-7">3.2 代码组织</h3>
    <blockquote>
    <p>熵减，宇宙哲学到编码哲学。</p>
    </blockquote>
    <p>项目、模块、页面、功能，如何高效而清晰地组织代码，这一个看似简单的命题就算写几本书也无法完全说清楚。</p>
    <p>但一个页面中，N件事情的代码在一个组件内互相纠缠确实是在 <code>Hooks</code> 出现之前非常常见的一种状态。</p>
    <p>那么 <code>Hooks</code> 写法在代码组织上究竟能带来怎样的提升呢？</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3680785b61c4af8befdbe2b9ca18c90~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="vue hooks" loading="lazy" class="medium-zoom-image">
    （假设上图中每一种颜色就代码一种高度相关的业务逻辑）</p>
    <p>无论是 <code>vue</code> 还是 <code>react</code>, 通过 <code>Hooks</code> 写法都能做到，将“分散在各种声明周期里的代码块”，通过 <code>Hooks</code> 的方式将相关的内容聚合到一起。</p>
    <p>这样带来的好处是显而易见的：<strong>“高度聚合，可阅读性提升”</strong>。伴随而来的便是 <strong>“效率提升，bug变少”</strong>。</p>
    <p>按照“物理学”里的理论来说，这种代码组织方式，就算是“熵减”了。</p>
    <h3 data-id="heading-8">3.3 比 <code>class</code> 组件更容易理解</h3>
    <blockquote>
    <p>尤其是 <code>this</code> 。</p>
    </blockquote>
    <p>在 <code>react</code> 的 <code>class</code> 写法中，随处可见各种各样的 <code>.bind(this)</code>。（甚至官方文档里也有专门的章节描述了“为什么绑定是必要的？”这一问题）</p>
    <p><code>vue</code> 玩家别笑，<code>computed: { a: () =&gt; { this } }</code> 里的 <code>this</code> 也是 <code>undefined</code>。</p>
    <p>很显然，绑定虽然“必要”，但并不是“优点”，反而是“故障高发”地段。</p>
    <p>但在<code>Hooks</code> 写法中，你就完全不必担心 <code>this</code> 的问题了。</p>
    <p>因为：</p>
    <blockquote>
    <p>本来无一物，何处惹尘埃。</p>
    </blockquote>
    <p><code>Hooks</code> 写法直接告别了 <code>this</code>，从“函数”来，到“函数”去。</p>
    <p>妈妈再也不用担心我忘记写 <code>bind</code> 了。</p>
    <h3 data-id="heading-9">3.4 友好的渐进式</h3>
    <blockquote>
    <p>随风潜入夜，润物细无声。</p>
    </blockquote>
    <p>渐进式的含义是：你可以一点点深入使用。</p>
    <p>无论是 <code>vue</code> 还是 <code>react</code>，都只是提供了 <code>Hooks</code> API，并将它们的优劣利弊摆在了那里。并没有通过无法接受的 <code>break change</code> 来强迫你必须使用 <code>Hooks</code> 去改写之前的 <code>class</code> 组件。</p>
    <p>你依然可以在项目里一边写 <code>class</code> 组件，一边写 <code>Hooks</code> 组件，在项目的演进和开发过程中，这是一件没有痛感，却悄无声息改变着一切的事情。</p>
    <p>但是事情发展的趋势却很明显，越来越多的人加入了 <code>Hooks</code> 和 <code>组合式API</code> 的大军。</p>
    <h2 data-id="heading-10">四、如何开始玩 <code>hooks</code> ？</h2>
    <h3 data-id="heading-11">4.1 环境和版本</h3>
    <p>在 <code>react</code> 项目中， <code>react</code> 的版本需要高于 <code>16.8.0</code>。</p>
    <p>而在 <code>vue</code> 项目中， <code>vue3.x</code> 是最好的选择，但 <code>vue2.6+</code> 配合 <code>@vue/composition-api</code>，也可以开始享受“组合式API”的快乐。</p>
    <h3 data-id="heading-12">4.2 react 的 <code>Hooks</code> 写法</h3>
    <p>因为 react Hooks 仅支持“函数式”组件，因此需要创建一个函数式组件 <code>my-component.js</code>。</p>
    <pre><code class="hljs language-jsx copyable" lang="jsx"><span class="hljs-comment">// my-component.js</span>
    <span class="hljs-keyword">import</span> { useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">'React'</span>

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
      <span class="hljs-comment">// 通过 useState 可以创建一个 状态属性 和一个赋值方法</span>
      <span class="hljs-keyword">const</span> [ name, setName ] = useState(<span class="hljs-string">''</span>)

      <span class="hljs-comment">// 通过 useEffect 可以对副作用进行处理</span>
      useEffect(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(name)
      }, [ name ])

      <span class="hljs-comment">// 通过 useMemo 能生成一个依赖 name 的变量 message</span>

      <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{ message }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>细节可参考 <code>react</code> 官方网站：<a href="https://link.juejin.cn?target=https%3A%2F%2Freact.docschina.org%2Fdocs%2Fhooks-intro.html" target="_blank" rel="nofollow noopener noreferrer" title="https://react.docschina.org/docs/hooks-intro.html" ref="nofollow noopener noreferrer">react.docschina.org/docs/hooks-…</a></p>
    <h3 data-id="heading-13">4.3 vue 的 <code>Hooks</code> 写法</h3>
    <p>vue 的 <code>Hooks</code> 写法依赖于 <code>组合式API</code>，因此本例采用 <code>&lt;script setup&gt;</code> 来写：</p>
    <pre><code class="hljs language-jsx copyable" lang="jsx">&lt;template&gt;
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        {{ message }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;/template&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">import</span> { computed, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
    <span class="hljs-comment">// 定义了一个 ref 对象</span>
    <span class="hljs-keyword">const</span> name = ref(<span class="hljs-string">''</span>)
    <span class="hljs-comment">// 定义了一个依赖 name.value 的计算属性</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>很明显，<code>vue</code> 组合式API里完成 <code>useState</code> 和 <code>useMemo</code> 相关工作的 <code>API</code> 并没有通过 <code>useXxx</code> 来命名，而是遵从了 <code>Vue</code> 一脉相承而来的 <code>ref</code> 和 <code>computed</code>。</p>
    <p>虽然不符合 <code>react Hook</code> 定义的 <code>Hook</code> 约定，但 <code>vue</code> 的 <code>api</code> 不按照 <code>react</code> 的约定好像也并没有什么不妥。</p>
    <p>参考网址：<a href="https://link.juejin.cn?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Fcomposition-api.html" target="_blank" rel="nofollow noopener noreferrer" title="https://v3.cn.vuejs.org/api/composition-api.html" ref="nofollow noopener noreferrer">v3.cn.vuejs.org/api/composi…</a></p>
    <h2 data-id="heading-14">五、开始第一个自定义 <code>hook</code></h2>
    <p>除了官方提供的 <code>Hooks Api</code>, <code>Hooks</code> 的另外一个重要特质，就是可以自己进行“自定义 Hooks” 的定义，从而完成状态逻辑的复用。</p>
    <p>开源社区也都有很多不错的基于 <code>Hooks</code> 的封装，比如 <code>ahooks</code> (<a href="https://link.juejin.cn?target=https%3A%2F%2Fahooks.js.org%2Fzh-CN%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://ahooks.js.org/zh-CN/" ref="nofollow noopener noreferrer">ahooks.js.org/zh-CN/</a>)，又比如 <code>vueuse</code>（<a href="https://link.juejin.cn?target=https%3A%2F%2Fvueuse.org%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://vueuse.org/" ref="nofollow noopener noreferrer">vueuse.org/</a>）</p>
    <p>我还专门写过一篇小文章介绍 <code>vuehook</code>:<a href="https://juejin.cn/post/7030395303433863205" target="_blank" title="https://juejin.cn/post/7030395303433863205">【一库】vueuse:我不许身为vuer,你的工具集只有lodash!</a>。</p>
    <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bfbcc5dd4514cb6b5b0d2c4a1bd28e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="开源hooks" loading="lazy" class="medium-zoom-image"></p>
    <p>那么，我们应该怎么开始撰写 “自定义Hooks” 呢？往下看吧！</p>
    <h3 data-id="heading-15">5.1 react 玩家看这里👈</h3>
    <p><code>react</code> 官方网站就专门有一个章节讲述“自定义Hook”。（<a href="https://link.juejin.cn?target=https%3A%2F%2Freact.docschina.org%2Fdocs%2Fhooks-custom.html" target="_blank" rel="nofollow noopener noreferrer" title="https://react.docschina.org/docs/hooks-custom.html" ref="nofollow noopener noreferrer">react.docschina.org/docs/hooks-…</a>）</p>
    <p>这里，我们扔用文章开头那个 <code>useName</code> 的需求为例，希望达到效果：</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">const</span> { name, setName } = useName();
    <span class="hljs-comment">// 随机生成一个状态属性 name，它有一个随机名作为初始值</span>
    <span class="hljs-comment">// 并且提供了一个可随时更新该值的方法 setName</span>
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>如果我们要实现上面效果，我们该怎么写代码呢？</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> useName = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// 这个 useMemo 很关键</span>
      <span class="hljs-keyword">const</span> randomName = React.useMemo(<span class="hljs-function">() =&gt;</span> genRandomName(), []);
      <span class="hljs-keyword">const</span> [ name, setName ] = React.useState(randomName)

      <span class="hljs-keyword">return</span> {
        name,
        setName
      }
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>忍不住要再次感叹一次，和 <code>mixins</code> 相比，它不仅使用起来更棒，就连定义起来也那么简单。</p>
    <p>可能有朋友会好奇，为什么不直接这样写：</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">const</span> [ name, setName ] = React.useState(genRandomName())
    <span class="copy-code-btn">复制代码</span></code></pre>
    <p>因为这样写是不对的，每次使用该 <code>Hook</code> 的函数组件被渲染一次时，<code>genRandom()</code> 方法就会被执行一次，虽然不影响 <code>name</code> 的值，但存在性能消耗，甚至产生其他 <code>bug</code>。</p>
    <p>为此，我写了一个能复现错误的demo，有兴趣的朋友可以点开验证：<a href="https://link.juejin.cn?target=https%3A%2F%2Fcodesandbox.io%2Fs%2Flong-cherry-kzcbqr" target="_blank" rel="nofollow noopener noreferrer" title="https://codesandbox.io/s/long-cherry-kzcbqr" ref="nofollow noopener noreferrer">codesandbox.io/s/long-cher…</a></p>
    <blockquote>
    <p>2022-02-03日补充更正：经掘友提醒，可以通过 React.useState(() =&gt; randomName()) 传参来避免重复执行，这样就不需要 useMemo 了，感谢！</p>
    </blockquote>
    <h3 data-id="heading-16">5.2 vue 玩家看这里👈</h3>
    <p><code>vue3</code> 官网没有关于 <code>自定义Hook</code> 的玩法介绍，但实践起来也并不困难。</p>
    <p>目标也定位实现一个 <code>useName</code> 方法：</p>
    <pre><code class="hljs language-js copyable" lang="js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> useName = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> name = ref(genRandomName())
      <span class="hljs-keyword">const</span> setName = <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
        name.value = v
      }
      <span class="hljs-keyword">return</span> {
        name,
        setName
      }
    }
    <span class="copy-code-btn">复制代码</span></code></pre>
    <h3 data-id="heading-17">5.3 <code>vue</code> 和 <code>react</code> 自定义 <code>Hook</code> 的异同</h3>
    <ul>
    <li>
    <p>相似点： 总体思路是一致的
    都遵照着 "定义状态数据"，"操作状态数据"，"隐藏细节" 作为核心思路。</p>
    </li>
    <li>
    <p>差异点： <code>组合式API</code> 和 <code>React函数组件</code> 有着本质差异<br>
    <code>vue3</code> 的组件里， <code>setup</code> 是作为一个早于 “created” 的生命周期存在的，无论如何，在一个组件的渲染过程中只会进入一次。<br>
    <code>React函数组件</code> 则完全不同，如果没有被 <code>memorized</code>，它们可能会被不停地触发，不停地进入并执行方法，因此需要开销的心智相比于<code>vue</code>其实是更多的。</p>
    </li>
    </ul>
    <h2 data-id="heading-18">六、结束语</h2>
    <p>我是<code>春哥</code>。<br>
    大龄前端打工仔，依然在努力学习。<br>
    我的目标是给大家分享最实用、最有用的知识点，希望大家都可以早早下班，并可以飞速完成工作，淡定摸鱼🐟。</p>
  `,
];
