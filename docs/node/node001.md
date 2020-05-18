<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px;"><h1 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 24px;"><span class="prefix" style="display: none;"></span><span class="content">仿vue-cli搭建属于自己的命令行工具</span><span class="suffix"></span></h1>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">前言</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">使用过@vue/cli的同学都知道，通过npm install -g @vue/cli全局安装之后，然后通过vue create my-project命令就可以安装项目了而且，在安装的过程中，命令行中有各种交互，比如选择什么预处理器，选择什么测试工具。这些强大的功能都令人羡慕，果然不愧是大佬开发的工具。但是随着前端知识的深入，我们越来越不满足于只是简单地使用这个工具，而是想要了解清楚为什么能够实现这么强大的命令行交互功能。这篇文章就是仿照vue-cli搭建一个属于自己的命令行工具。我们实现的是一个支持在命令行中增删改查的命令行工具。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">命令行工具必备包</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;"><strong style="font-weight: bold; color: black;">commander</strong>:编写指令和处理命令行参数的包。
我们在使用vue create project这个命令创建项目时，有没有想过为什么这个命令能够实现创建项目的功能，commander包就是用来定义这些命令的。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"># 定义查看版本的命令
<span/>program
<span/>  .version(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'1.0.0'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'自定义命令行工具'</span>)
<span/># 定义添加的命令
<span/>program
<span/>  .command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'add'</span>)
<span/>  .alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'a'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'添加新用户'</span>)
<span/>  .action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;"><span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">()</span> =&gt;</span> {
<span/>    inquirer.prompt(addQuery).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">answers</span>) =&gt;</span> {
<span/>      addCustomer(answers)
<span/>    })
<span/>  })
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">通过commander进行定义我们就可以使用类似于xx --version 来查看版本以及xxx add来实现类似于vue create project这样的功能。<br>
<strong style="font-weight: bold; color: black;">inquirer</strong>:命令行交互的工具。
在使用vue/cli创建项目的过程中，我们经常会看到类似于选择什么css预处理器，选择什么测试方法啊这种命令行中的询问，但是实际上我们平常使用命令行时都是直接输入命令，很少使用这种命令行交互的。而inquirer就是node环境下提供的一种命令行交互工具。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">inquirer
<span/>  .prompt([
<span/>    <span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// 命令行中交互式问题</span>
<span/>  ])
<span/>  .then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;"><span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">answers</span> =&gt;</span> {
<span/>    <span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// answers 命令行中用户输入的答案</span>
<span/>  });
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">其他还有一些用户命令行美化的工具，比如：<br>
<strong style="font-weight: bold; color: black;">chalk</strong>:给命令行文字添加颜色<br>
<strong style="font-weight: bold; color: black;">ora</strong>:命令行中添加进度条<br>
好了，到目前为止，我们了解了开发命令行工具常见的包，接下来进入正式的开发。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">实现数据库的增删改查</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">在本文中我们使用的mongodb数据库，Schema和Model的定义以及数据数据库的连接就不一一展示了，我们这里展示数据库的增删改查实现。因为这些实现实际上就是命令行命令对应的实现。</p>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">添加用户</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> addCustomer = <span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">customer</span>) =&gt;</span> {
<span/>  Customer.create(customer).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">data</span>) =&gt;</span> {
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'新用户已添加...'</span>);
<span/>    mongoose.connection.close();
<span/>  })
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">查找用户</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> findCustomer = <span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">name</span>) =&gt;</span> {
<span/>  <span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">//不区分大小写</span>
<span/>  <span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> search = <span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">new</span> <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">RegExp</span>(name,<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'i'</span>);
<span/>  Customer.find({
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">$or</span>:[{<span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">firstname</span>:search},{<span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">lastname</span>:search}]
<span/>  }).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">customer</span>) =&gt;</span> {
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(customer);
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">`<span class="hljs-subst" style="color: #DCDCDC; line-height: 26px;">${customer.length}</span>个匹配`</span>);
<span/>    mongoose.connection.close();
<span/>  })
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">更新用户</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> updateCustomer = <span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">_id,customer</span>) =&gt;</span> {
<span/>  Customer.update({_id},customer).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">customer</span>) =&gt;</span> {
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'用户信息已经更新'</span>);
<span/>    mongoose.connection.close();
<span/>  })
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">删除用户</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> removeCustomer = <span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">_id</span>) =&gt;</span> {
<span/>  Customer.remove({_id}).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">customer</span>) =&gt;</span> {
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'用户信息已经删除'</span>);
<span/>    mongoose.connection.close();
<span/>  })
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">用户列表</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> listCustomer = <span class="hljs-function" style="color: #DCDCDC; line-height: 26px;"><span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">()</span> =&gt;</span> {
<span/>  Customer.find().then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">customer</span>) =&gt;</span> {
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(customer);
<span/>    <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.info(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">`<span class="hljs-subst" style="color: #DCDCDC; line-height: 26px;">${customer.length}</span>个用户`</span>);
<span/>    mongoose.connection.close();
<span/>  })
<span/>}
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">上面我们定义了数据库的增删改查功能，接下来我们把这些功能通过命令行的指令来实现</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">编写具体指令</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">编写添加指令</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> program = <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'commander'</span>);
<span/><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> inquirer = <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'inquirer'</span>);
<span/><span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// 定义命令行询问的问题：</span>
<span/><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> addQuery = [
<span/>  {
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">type</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'input'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">name</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'firstname'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">message</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'请输入firstname'</span>
<span/>  },
<span/>  {
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">type</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'input'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">name</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'lastname'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">message</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'请输入lastname'</span>
<span/>  },
<span/>  {
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">type</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'input'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">name</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'phone'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">message</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'请输入phone'</span>
<span/>  },
<span/>  {
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">type</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'input'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">name</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'email'</span>,
<span/>    <span class="hljs-attr" style="color: #9CDCFE; line-height: 26px;">message</span>:<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'请输入email'</span>
<span/>  },
<span/>]
<span/><span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// 添加指令的实现</span>
<span/>program
<span/>  .command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'add'</span>)
<span/>  .alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'a'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'添加新用户'</span>)
<span/>  .action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;"><span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">()</span> =&gt;</span> {
<span/>    inquirer.prompt(addQuery).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">answers</span>) =&gt;</span> {
<span/>      addCustomer(answers)
<span/>    })
<span/>  })
<span/>  <span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// 解析命令行参数，必须有</span>
<span/>program.parse(process.argv);
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">从上面的代码中，我们可以看出我们主要使用了commander和inquirer这两个包，通过使用command定义具体指令，其中：
.command('add'):是定义add指令。这样的话可以在命令行中直接运行 node command.js add
.alias('a'):是定义add的简写，可以直接使用node command.js a来实现
.description:是描述指令的功能，在help()时提示用户
.action():是定义指令的具体执行内容。也是最关键的部分。<br></p>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">如果我们我们想在命令行中提供交互，就可以在action的回调函数中使用inquirer进行询问。具体的询问内容通过一个数组提供,数组元素的内容可以在<a href="https://www.npmjs.com/package/inquirer" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">inquirer</a>进行查看。这样的话，我们就可以通过使用node command.js add(备注：command.js是我编写命令的文件)来运行了。而且我们也可以在命令行中看到各种命令行交互。这样的话，我们初步实现了命令行工具的功能。接下来我们继续实现查找，修改，删除用户命令。</p>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">编写查找用户指令</span><span class="suffix" style="display: none;"></span></h3>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">查找用户的指令和添加用户指令的编写方式类似，只不过查找时不需要进行询问了。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">program
<span/>  .command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'find &lt;name&gt;'</span>)
<span/>  .alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'f'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'查找用户'</span>)
<span/>  .action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">name</span>) =&gt;</span> {
<span/>    findCustomer(name)
<span/>  })
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">编写删除用户指令</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">program
<span/>  .command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'remove &lt;_id&gt;'</span>)
<span/>  .alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'r'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'删除用户'</span>)
<span/>  .action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">_id</span>) =&gt;</span> {
<span/>    removeCustomer(_id);
<span/>  })
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">编写更新用户指令</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">program
<span/>  .command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'update &lt;_id&gt;'</span>)
<span/>  .alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'u'</span>)
<span/>  .description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'更新用户'</span>)
<span/>  .action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">_id</span>) =&gt;</span> {
<span/>    inquirer.prompt(addQuery).then(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;">(<span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">answers</span>) =&gt;</span> {
<span/>      <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">console</span>.log(_id);
<span/>      updateCustomer(_id,answers)
<span/>    })
<span/>  })
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content">编写获取所有用户列表指令</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">program
<span/>.command(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'list'</span>)
<span/>.alias(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'l'</span>)
<span/>.description(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'获取所有用户'</span>)
<span/>.action(<span class="hljs-function" style="color: #DCDCDC; line-height: 26px;"><span class="hljs-params" style="color: #DCDCDC; line-height: 26px;">()</span> =&gt;</span> {
<span/>  listCustomer();
<span/>})
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">bin和npm link简化命令执行</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">上面我们定义了增啥改查指令，通过node command + add(或者find,remove等)可以实现命令的执行。但是我们每次运行时还是需要指定通过node来运行，而且需要指定运行的文件地址，但是实际上，我们在是哟个vue/cli时，只是直接通过vue命令就能够运行的，不需要node。因此，这里我们肯定可以优化命令的执行，而通过在package.json中定义bin目录，可以帮助我们实现这个功能。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">  <span class="hljs-comment" style="color: #57A64A; font-style: italic; line-height: 26px;">// bin用来指定每个文件所对应的可执行文件路径</span>
<span/>  <span class="hljs-string" style="color: #D69D85; line-height: 26px;">"bin"</span>: {
<span/>    <span class="hljs-string" style="color: #D69D85; line-height: 26px;">"command"</span>: <span class="hljs-string" style="color: #D69D85; line-height: 26px;">"bin/command.js"</span>(假设command.js在bin目录下)
<span/>  },
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">上面代码指定：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">command</code>命令对应的可执行文件为<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">bin</code>子目录下的<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">command.js</code>。npm会寻找这个文件，在<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">node_modules/.bin</code>目录下建立链接。在上面的例子中，<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">command.js</code>会建立符号链接<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">npm_modules/.bin/command.js</code>。由于<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">node_modules/.bin/</code>目录会在运行时加入系统的<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">PATH</code>变量，因此运行npm命令时，就可以不带路径，直接通过命令来调用这些脚本。
然后，通过在根目录执行<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">npm link</code>(把命令挂载到全局)，这样我们每次只需要输入<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">command</code>，就相当于执行<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">node bin/command.js</code>。<br>
注意：</p>
<ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">使用npm link时可能出现报错，如果有报错先使用npm unlink解绑，解绑完成之后在运行npm link 进行绑定。</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">为了确保在不同环境中都能够通过node运行命令，我们需要在编写指令的开头添加以下语句。</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-meta" style="color: #9B9B9B; line-height: 26px;">#!/usr/bin/env node     // 必须添加这行代码</span>
<span/><span class="hljs-keyword" style="color: #569CD6; line-height: 26px;">const</span> program = <span class="hljs-built_in" style="color: #4EC9B0; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #D69D85; line-height: 26px;">'commander'</span>);
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">接下来我们就可以通过command add这样直接运行命令了。一个简易的命令行工具实现数据库的增删改查就实现了。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">总结</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">到目前为止，一个简易的命令行工具就实现了，它具体的实现如下：</p>
<ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">通过commander定义命令</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">通过inquirer提供命令行交互</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">使用mongoose实现数据库的增删改查</section></li></ol>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">具备了一个cli工具的初步功能。这些都是一些简单的功能，但是帮助我们理解了命令行工具的具体实现，加深了理解。以后我们再次使用vue/cli脚手架时，每一步我们都可以想象一下它内部可能是怎么实现的，而不是只知道使用，不知道具体原理。<br>
最后，完结撒花。</p>
<p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">mdnice</a> 排版</p></section>