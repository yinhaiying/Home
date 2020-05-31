<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px;"><h1 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 24px;"><span class="prefix" style="display: none;"></span><span class="content">MySQL 的使用注意事项</span><span class="suffix"></span></h1>
<blockquote data-tool="mdnice编辑器" style="display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; border-left: 3px solid rgba(0, 0, 0, 0.4); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; border-left-color: rgb(239, 112, 96); background: #fff9f9;">
<p style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0px; color: black; line-height: 26px;">学习 MySQL 的过程中，在命令行窗口中编写 MySQL 语句时，有一些常见的事项需要注意。本文是小白入门知识，大神请绕路。</p>
</blockquote>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">MySQL 连接注意事项：<br></span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">MySQL 在连接服务器，运行可执行文件时，需要这几个参数：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -h主机名 -u用户名 -p密码;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">几个参数的意义，分别如下：<br></p>
<table data-tool="mdnice编辑器" style="display: table; text-align: left;">
<thead>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<th style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left; font-weight: bold; background-color: #f0f0f0;">参数</th>
<th style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left; font-weight: bold; background-color: #f0f0f0;">说明</th>
</tr>
</thead>
<tbody style="border: 0;">
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">-h</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">表示启动服务器程序的计算机的域名或者 IP 地址，如果服务器程序就运行在本机的话，可以省略这个参数，也可以填 localhost 或者 127.0.0.1。也可以写作 --host=主机的形式。</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">-u</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">用户名，表示连接数据库的用户名,如果是安装在自己电脑上的，一般默认为超级管理员，用户名为 root。</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">-p</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;">密码，连接数据库的密码。输入时为了避免明文展示，可以先不输入</td>
</tr>
</tbody>
</table>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">因此，一个完整的连接数据库的语句为：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -hlocalhost -uroot -p;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">这里，我们需要说一下连接注意事项：</p>
<ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">不要在一行命令中输入密码。
我们在连接mysql服务器的时候，可以不显示地输入密码，比如：</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -uroot -p   -- 本地连接可以不输入-h
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">注意：-p后面不要输入分号，这时候它会提示你输入密码：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">Enter password:
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">此时，我们就可以隐式地输入密码了。</p>
<ol start="2" data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">如果你非要显示地输入密码，那-p和密码之间不能有空白字符，其他参数名之间可以有空白字符，比如：</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -uroot -proot
<span/></code></pre>
<ol start="3" data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">mysql连接的每个参数没有顺序区别，你可以把-u写前面 -h 和 -p写后面，像这样：</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -uroot -hlocalhost -p
<span/></code></pre>
<ol start="4" data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">mysql 的参数和值之间可以有空格，除了显示输入密码时不能有空格，像这样：</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">mysql -h localhost -u root -p
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">MySQL的断开注意事项</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">如果我们想要断开客户端和服务端的连接，并且关闭客户端的话，我们可以输入一下几个命令：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-number" style="color: #008080; line-height: 26px;">1.</span> quit;
<span/><span class="hljs-number" style="color: #008080; line-height: 26px;">2.</span> exit;
<span/><span class="hljs-number" style="color: #008080; line-height: 26px;">3.</span> \q;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">任意输入以上三个命令，那么命令行会提示：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">Bye
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">如果看到Bye，表示断开连接成功。注意，这三个命令是关闭服务器，如果我们只是想放弃这次的编写，那么我们需要使用<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">\c</code>的命令：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">show databases \c
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">\c</code>命令是放弃这次的命令，注意\c本身就是表示命令结束符号，因此不需要分号作为结束。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">MySQL的编写注意事项</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">在命令行窗口中执行MySQL的命令时，不同于在编辑器等编写语句，需要遵守一定的规则，在书写命令时，需要注意以下几点：</p>
<ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><strong style="font-weight: bold; color: black;">命令结束符号</strong><br>
在我们使用命令行窗口连接MySQL之后,界面上会显示</section></li></ol>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">MariaDB [(none)]&gt;
<span/></code></pre>
<blockquote data-tool="mdnice编辑器" style="display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; border-left: 3px solid rgba(0, 0, 0, 0.4); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; border-left-color: rgb(239, 112, 96); background: #fff9f9;">
<p style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0px; color: black; line-height: 26px;">是一个提示符，后面就是我们用来输入命令，然后如果我们直接输入命令，按下回车键，会发现命令行下一行继续出现提示符：</p>
</blockquote>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">-&gt;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">这表示我们的命令还没有输入完毕，事实上，我们在书写完成一个语句后，需要使用命令结束符，告诉命令行，这样命令行才会把命令从客户端程序发送到服务器端程序，常见的命令结束符，包括以下几种：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-number" style="color: #008080; line-height: 26px;">1.</span> ;
<span/><span class="hljs-number" style="color: #008080; line-height: 26px;">2.</span> \g
<span/><span class="hljs-number" style="color: #008080; line-height: 26px;">3.</span> \G
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">比如说我们执行一条简单的查询数据库的命令,可以使用<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: rgb(239, 112, 96);">;</code>结尾：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">show databases;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">使用\g可以起到同样的效果，如果使用\G则会把数据垂直排列，通常在查询数据库的创建等时，使用\G以方便我们查看。注意，这三个都是命令行结束符，我们使用一个即可。<br>
2. <strong style="font-weight: bold; color: black;">命令可以随意换行</strong><br>
我们在上面说过，命令的执行必须以命令结束符结束，也就是说，如果没有这三个命令结束符，表示命令没有结束，命令行会在下一行提示你继续输入，这表明命令可以换行输入。就像这样：
<img src="https://imgkr.cn-bj.ufileos.com/9b7546e2-a42b-4a9c-a23d-59baf169f587.png" alt="换行" style="display: block; margin: 0 auto; max-width: 100%;">
3. <strong style="font-weight: bold; color: black;">可以一次提交多个命令</strong><br>
我们可以在一条语句里面写多个命令，各个命令之间用结束符分隔。就像这样：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">show databases;show databases;show databases;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">这样的话，就会连续执行查询三次数据库。<br>
4. <strong style="font-weight: bold; color: black;">大小写问题</strong><br>
MySQL中，一个库会对应一个文件夹，库里的表则会以文件的形式存放在文件夹内，所以操作系统对大小写的敏感性决定了数库和数据表的大小写敏感。因此，在Windows下MySQL的数据库和表名是大小写不敏感的。比如，我们写以下两条语句是等价的：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">select * <span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">from</span> student;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">和全都使用大写：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #333; background: #f8f8f8; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">SELECT</span> * <span class="hljs-keyword" style="color: #333; font-weight: bold; line-height: 26px;">FROM</span> student;
<span/></code></pre>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">不过，按照编写习惯，一些命令关键字，函数之类的最好大写，而一些名词类的东西，比如数据库名，表名，列名之类的建议小写。</p>
</section>