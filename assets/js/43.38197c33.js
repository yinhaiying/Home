(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{278:function(t,o,a){"use strict";a.r(o);var i=a(28),l=Object(i.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("section",{staticStyle:{"font-size":"16px",color:"black",padding:"0 10px","line-height":"1.6","word-spacing":"0px","letter-spacing":"0px","word-break":"break-word","word-wrap":"break-word","text-align":"left","font-family":"Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif","margin-top":"-10px"},attrs:{id:"nice","data-tool":"mdnice编辑器","data-website":"https://www.mdnice.com"}},[a("h1",{staticStyle:{"margin-top":"30px","margin-bottom":"15px",padding:"0px","font-weight":"bold",color:"black","font-size":"24px"},attrs:{"data-tool":"mdnice编辑器"}},[a("span",{staticClass:"prefix",staticStyle:{display:"none"}}),a("span",{staticClass:"content"},[t._v("MySQL 的使用注意事项")]),a("span",{staticClass:"suffix"})]),t._v(" "),a("blockquote",{staticStyle:{display:"block","font-size":"0.9em",overflow:"auto","overflow-scrolling":"touch","border-left":"3px solid rgba(0, 0, 0, 0.4)",color:"#6a737d","padding-top":"10px","padding-bottom":"10px","padding-left":"20px","padding-right":"10px","margin-bottom":"20px","margin-top":"20px","border-left-color":"rgb(239, 112, 96)",background:"#fff9f9"},attrs:{"data-tool":"mdnice编辑器"}},[a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0px",color:"black","line-height":"26px"}},[t._v("学习 MySQL 的过程中，在命令行窗口中编写 MySQL 语句时，有一些常见的事项需要注意。本文是小白入门知识，大神请绕路。")])]),t._v(" "),a("h2",{staticStyle:{"margin-top":"30px","margin-bottom":"15px",padding:"0px","font-weight":"bold",color:"black","border-bottom":"2px solid rgb(239, 112, 96)","font-size":"1.3em"},attrs:{"data-tool":"mdnice编辑器"}},[a("span",{staticClass:"prefix",staticStyle:{display:"none"}}),a("span",{staticClass:"content",staticStyle:{display:"inline-block","font-weight":"bold",background:"rgb(239, 112, 96)",color:"#ffffff",padding:"3px 10px 1px","border-top-right-radius":"3px","border-top-left-radius":"3px","margin-right":"3px"}},[t._v("MySQL 连接注意事项："),a("br")]),a("span",{staticClass:"suffix"}),a("span",{staticStyle:{display:"inline-block","vertical-align":"bottom","border-bottom":"36px solid #efebe9","border-right":"20px solid transparent"}})]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("MySQL 在连接服务器，运行可执行文件时，需要这几个参数：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -h主机名 -u用户名 -p密码;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("几个参数的意义，分别如下："),a("br")]),t._v(" "),a("table",{staticStyle:{display:"table","text-align":"left"},attrs:{"data-tool":"mdnice编辑器"}},[a("thead",[a("tr",{staticStyle:{border:"0","border-top":"1px solid #ccc","background-color":"white"}},[a("th",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left","font-weight":"bold","background-color":"#f0f0f0"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left","font-weight":"bold","background-color":"#f0f0f0"}},[t._v("说明")])])]),t._v(" "),a("tbody",{staticStyle:{border:"0"}},[a("tr",{staticStyle:{border:"0","border-top":"1px solid #ccc","background-color":"white"}},[a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("-h")]),t._v(" "),a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("表示启动服务器程序的计算机的域名或者 IP 地址，如果服务器程序就运行在本机的话，可以省略这个参数，也可以填 localhost 或者 127.0.0.1。也可以写作 --host=主机的形式。")])]),t._v(" "),a("tr",{staticStyle:{border:"0","border-top":"1px solid #ccc","background-color":"#F8F8F8"}},[a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("-u")]),t._v(" "),a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("用户名，表示连接数据库的用户名,如果是安装在自己电脑上的，一般默认为超级管理员，用户名为 root。")])]),t._v(" "),a("tr",{staticStyle:{border:"0","border-top":"1px solid #ccc","background-color":"white"}},[a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"font-size":"16px",border:"1px solid #ccc",padding:"5px 10px","text-align":"left"}},[t._v("密码，连接数据库的密码。输入时为了避免明文展示，可以先不输入")])])])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("因此，一个完整的连接数据库的语句为：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -hlocalhost -uroot -p;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("这里，我们需要说一下连接注意事项：")]),t._v(" "),a("ol",{staticStyle:{"margin-top":"8px","margin-bottom":"8px","padding-left":"25px",color:"black","list-style-type":"decimal"},attrs:{"data-tool":"mdnice编辑器"}},[a("li",[a("section",{staticStyle:{"margin-top":"5px","margin-bottom":"5px","line-height":"26px","text-align":"left",color:"rgb(1,1,1)","font-weight":"500"}},[t._v("不要在一行命令中输入密码。\n我们在连接mysql服务器的时候，可以不显示地输入密码，比如：")])])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -uroot -p   -- 本地连接可以不输入-h\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("注意：-p后面不要输入分号，这时候它会提示你输入密码：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("Enter password:\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("此时，我们就可以隐式地输入密码了。")]),t._v(" "),a("ol",{staticStyle:{"margin-top":"8px","margin-bottom":"8px","padding-left":"25px",color:"black","list-style-type":"decimal"},attrs:{start:"2","data-tool":"mdnice编辑器"}},[a("li",[a("section",{staticStyle:{"margin-top":"5px","margin-bottom":"5px","line-height":"26px","text-align":"left",color:"rgb(1,1,1)","font-weight":"500"}},[t._v("如果你非要显示地输入密码，那-p和密码之间不能有空白字符，其他参数名之间可以有空白字符，比如：")])])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -uroot -proot\n"),a("span")])]),t._v(" "),a("ol",{staticStyle:{"margin-top":"8px","margin-bottom":"8px","padding-left":"25px",color:"black","list-style-type":"decimal"},attrs:{start:"3","data-tool":"mdnice编辑器"}},[a("li",[a("section",{staticStyle:{"margin-top":"5px","margin-bottom":"5px","line-height":"26px","text-align":"left",color:"rgb(1,1,1)","font-weight":"500"}},[t._v("mysql连接的每个参数没有顺序区别，你可以把-u写前面 -h 和 -p写后面，像这样：")])])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -uroot -hlocalhost -p\n"),a("span")])]),t._v(" "),a("ol",{staticStyle:{"margin-top":"8px","margin-bottom":"8px","padding-left":"25px",color:"black","list-style-type":"decimal"},attrs:{start:"4","data-tool":"mdnice编辑器"}},[a("li",[a("section",{staticStyle:{"margin-top":"5px","margin-bottom":"5px","line-height":"26px","text-align":"left",color:"rgb(1,1,1)","font-weight":"500"}},[t._v("mysql 的参数和值之间可以有空格，除了显示输入密码时不能有空格，像这样：")])])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("mysql -h localhost -u root -p\n"),a("span")])]),t._v(" "),a("h2",{staticStyle:{"margin-top":"30px","margin-bottom":"15px",padding:"0px","font-weight":"bold",color:"black","border-bottom":"2px solid rgb(239, 112, 96)","font-size":"1.3em"},attrs:{"data-tool":"mdnice编辑器"}},[a("span",{staticClass:"prefix",staticStyle:{display:"none"}}),a("span",{staticClass:"content",staticStyle:{display:"inline-block","font-weight":"bold",background:"rgb(239, 112, 96)",color:"#ffffff",padding:"3px 10px 1px","border-top-right-radius":"3px","border-top-left-radius":"3px","margin-right":"3px"}},[t._v("MySQL的断开注意事项")]),a("span",{staticClass:"suffix"}),a("span",{staticStyle:{display:"inline-block","vertical-align":"bottom","border-bottom":"36px solid #efebe9","border-right":"20px solid transparent"}})]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("如果我们想要断开客户端和服务端的连接，并且关闭客户端的话，我们可以输入一下几个命令：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("1.")]),t._v(" quit;\n"),a("span"),a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("2.")]),t._v(" exit;\n"),a("span"),a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("3.")]),t._v(" \\q;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("任意输入以上三个命令，那么命令行会提示：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("Bye\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("如果看到Bye，表示断开连接成功。注意，这三个命令是关闭服务器，如果我们只是想放弃这次的编写，那么我们需要使用"),a("code",{staticStyle:{"font-size":"14px","word-wrap":"break-word",padding:"2px 4px","border-radius":"4px",margin:"0 2px","background-color":"rgba(27,31,35,.05)","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","word-break":"break-all",color:"rgb(239, 112, 96)"}},[t._v("\\c")]),t._v("的命令：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("show databases \\c\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticStyle:{"font-size":"14px","word-wrap":"break-word",padding:"2px 4px","border-radius":"4px",margin:"0 2px","background-color":"rgba(27,31,35,.05)","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","word-break":"break-all",color:"rgb(239, 112, 96)"}},[t._v("\\c")]),t._v("命令是放弃这次的命令，注意\\c本身就是表示命令结束符号，因此不需要分号作为结束。")]),t._v(" "),a("h2",{staticStyle:{"margin-top":"30px","margin-bottom":"15px",padding:"0px","font-weight":"bold",color:"black","border-bottom":"2px solid rgb(239, 112, 96)","font-size":"1.3em"},attrs:{"data-tool":"mdnice编辑器"}},[a("span",{staticClass:"prefix",staticStyle:{display:"none"}}),a("span",{staticClass:"content",staticStyle:{display:"inline-block","font-weight":"bold",background:"rgb(239, 112, 96)",color:"#ffffff",padding:"3px 10px 1px","border-top-right-radius":"3px","border-top-left-radius":"3px","margin-right":"3px"}},[t._v("MySQL的编写注意事项")]),a("span",{staticClass:"suffix"}),a("span",{staticStyle:{display:"inline-block","vertical-align":"bottom","border-bottom":"36px solid #efebe9","border-right":"20px solid transparent"}})]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("在命令行窗口中执行MySQL的命令时，不同于在编辑器等编写语句，需要遵守一定的规则，在书写命令时，需要注意以下几点：")]),t._v(" "),a("ol",{staticStyle:{"margin-top":"8px","margin-bottom":"8px","padding-left":"25px",color:"black","list-style-type":"decimal"},attrs:{"data-tool":"mdnice编辑器"}},[a("li",[a("section",{staticStyle:{"margin-top":"5px","margin-bottom":"5px","line-height":"26px","text-align":"left",color:"rgb(1,1,1)","font-weight":"500"}},[a("strong",{staticStyle:{"font-weight":"bold",color:"black"}},[t._v("命令结束符号")]),a("br"),t._v("\n在我们使用命令行窗口连接MySQL之后,界面上会显示")])])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("MariaDB [(none)]>\n"),a("span")])]),t._v(" "),a("blockquote",{staticStyle:{display:"block","font-size":"0.9em",overflow:"auto","overflow-scrolling":"touch","border-left":"3px solid rgba(0, 0, 0, 0.4)",color:"#6a737d","padding-top":"10px","padding-bottom":"10px","padding-left":"20px","padding-right":"10px","margin-bottom":"20px","margin-top":"20px","border-left-color":"rgb(239, 112, 96)",background:"#fff9f9"},attrs:{"data-tool":"mdnice编辑器"}},[a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0px",color:"black","line-height":"26px"}},[t._v("是一个提示符，后面就是我们用来输入命令，然后如果我们直接输入命令，按下回车键，会发现命令行下一行继续出现提示符：")])]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("->\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("这表示我们的命令还没有输入完毕，事实上，我们在书写完成一个语句后，需要使用命令结束符，告诉命令行，这样命令行才会把命令从客户端程序发送到服务器端程序，常见的命令结束符，包括以下几种：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("1.")]),t._v(" ;\n"),a("span"),a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("2.")]),t._v(" \\g\n"),a("span"),a("span",{staticClass:"hljs-number",staticStyle:{color:"#008080","line-height":"26px"}},[t._v("3.")]),t._v(" \\G\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("比如说我们执行一条简单的查询数据库的命令,可以使用"),a("code",{staticStyle:{"font-size":"14px","word-wrap":"break-word",padding:"2px 4px","border-radius":"4px",margin:"0 2px","background-color":"rgba(27,31,35,.05)","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","word-break":"break-all",color:"rgb(239, 112, 96)"}},[t._v(";")]),t._v("结尾：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("show databases;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("使用\\g可以起到同样的效果，如果使用\\G则会把数据垂直排列，通常在查询数据库的创建等时，使用\\G以方便我们查看。注意，这三个都是命令行结束符，我们使用一个即可。"),a("br"),t._v("\n2. "),a("strong",{staticStyle:{"font-weight":"bold",color:"black"}},[t._v("命令可以随意换行")]),a("br"),t._v("\n我们在上面说过，命令的执行必须以命令结束符结束，也就是说，如果没有这三个命令结束符，表示命令没有结束，命令行会在下一行提示你继续输入，这表明命令可以换行输入。就像这样：\n"),a("img",{staticStyle:{display:"block",margin:"0 auto","max-width":"100%"},attrs:{src:"https://imgkr.cn-bj.ufileos.com/9b7546e2-a42b-4a9c-a23d-59baf169f587.png",alt:"换行"}}),t._v("\n3. "),a("strong",{staticStyle:{"font-weight":"bold",color:"black"}},[t._v("可以一次提交多个命令")]),a("br"),t._v("\n我们可以在一条语句里面写多个命令，各个命令之间用结束符分隔。就像这样：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("show databases;show databases;show databases;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("这样的话，就会连续执行查询三次数据库。"),a("br"),t._v("\n4. "),a("strong",{staticStyle:{"font-weight":"bold",color:"black"}},[t._v("大小写问题")]),a("br"),t._v("\nMySQL中，一个库会对应一个文件夹，库里的表则会以文件的形式存放在文件夹内，所以操作系统对大小写的敏感性决定了数库和数据表的大小写敏感。因此，在Windows下MySQL的数据库和表名是大小写不敏感的。比如，我们写以下两条语句是等价的：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[t._v("select * "),a("span",{staticClass:"hljs-keyword",staticStyle:{color:"#333","font-weight":"bold","line-height":"26px"}},[t._v("from")]),t._v(" student;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("和全都使用大写：")]),t._v(" "),a("pre",{staticClass:"custom",staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"data-tool":"mdnice编辑器"}},[a("code",{staticClass:"hljs",staticStyle:{"overflow-x":"auto",padding:"16px",color:"#333",background:"#f8f8f8",display:"block","font-family":"Operator Mono, Consolas, Monaco, Menlo, monospace","border-radius":"0px","font-size":"12px","-webkit-overflow-scrolling":"touch"}},[a("span",{staticClass:"hljs-keyword",staticStyle:{color:"#333","font-weight":"bold","line-height":"26px"}},[t._v("SELECT")]),t._v(" * "),a("span",{staticClass:"hljs-keyword",staticStyle:{color:"#333","font-weight":"bold","line-height":"26px"}},[t._v("FROM")]),t._v(" student;\n"),a("span")])]),t._v(" "),a("p",{staticStyle:{"font-size":"16px","padding-top":"8px","padding-bottom":"8px",margin:"0","line-height":"26px",color:"black"},attrs:{"data-tool":"mdnice编辑器"}},[t._v("不过，按照编写习惯，一些命令关键字，函数之类的最好大写，而一些名词类的东西，比如数据库名，表名，列名之类的建议小写。")])])])}),[],!1,null,null,null);o.default=l.exports}}]);