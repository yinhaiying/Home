### 强大的Fiddler

### 前言
Fiddler是一款强大的http抓包工具，在远程调试，模拟请求等方面都提供了非常强大的功能支持，是前端开发过程中必备的开发利器。接下来将会介绍Fiddler的一些常见的配置和功能使用。


### 下载和安装
进入[Fiddler](https://www.telerik.com/fiddler)官网，下载最新版本的Fiddler(为什么要下载最新版本的Fiddler，因为越是最新的版本，功能越全，越强大。一些低版本中需要配置的东西在最新的版本中直接存在了，减少了初学者的配置)。其下载界面如下：

![Fiddler](/Home/assets/tools/Fiddler1.png)
然后照着提示，正常地点击下一步即可。安装完成后打开的界面应该如下图所示：

![Fiddler](/Home/assets/tools/Fiddler2.png)
整个页面主要分为3个部分：
1. **菜单栏**：主要是Fiddler的一些常见的设置
2. **工具条**：工具条主要用于对抓取的http请求进行操作,比如常见的一些过滤请求，重新请求等。
3. **监控面板**：监控面板主要分为左右两个部分，左侧是对所有抓取内容的展示，右侧是对抓取内容的一些请求和响应内容的展示。

Fiddler的全部功能就是通过这三部分来实现的。接下来我们将介绍一些Fiddler的常见使用。

### HTTPS抓取设置
**证书的设置**

Https正常情况下是无法抓取的，需要导入安装的证书，设置步骤如下：

菜单栏中的`Tools`->`Options` -> `HTTPS`，点击`Actions`导出证书到桌面，然后在个人使用的浏览器中导入证书。同时勾选途中的一些选项：比如，`Decrypt HTTPS traffic`等。

![Fiddler](/Home/assets/tools/Fiddler3.png)

**IP端口等设置**

同时，我们在进行代理时，常常需要设置对应的ip地址或者端口，其设置步骤如下：
菜单栏中的`Tools`->`Options` -> `Connections`
![Fiddler](/Home/assets/tools/Fiddler4.png)'

这里的端口根据自己的需要设置，当前设置了多少，在访问时就需要使用这个端口，默认为8888,；同时勾选`Allow remote computers to connect`允许远程连接。

### 手机客户端请求抓取
前端在进行移动端页面开发时，经常需要抓取客户端的一些请求进行bug调试等。比如：
1. 移动端项目在开发环境时，需要通过Fiddler代理一些Host进行测试。
2. 移动端项目在线上出现bug时,经常需要通过Fiddler来代理处理线上bug。
因此，学会使用手机配合Fiddler进行调试，是非常重要的。

**手机设置**
**步骤一**：获取将要代理的远程电脑ip地址
在`windows`中`cmd`窗口输入`ipconfig`，可以获取到对应的ip地址，如下图所示,获取的ip假设为`10.252.16.153`

![Fiddler](/Home/assets/tools/Fiddler5.png)'

**步骤二**：在手机浏览器中下载Fiddler证书。
在手机浏览器中访问ip地址+Fiddler中设置的端口号，比如我们的ip地址为`10.252.16.153`，设置的端口号默认为`8888`，那么我们就在浏览器中访问：`10.252.16.153:8888`,然后在手机上下载证书，如下图所示：

![Fiddler](/Home/assets/tools/Fiddler6.jpg)'

**步骤三**：手机设置请求。
首先确保电脑和手机处于同一局域网下(可以连接同一个WIFI),然后选择当前网络->`修改网络`-> `高级选项` -> `代理选择手动`->`设置对应的主机名和端口号`，如下图所示：

![Fiddler](/Home/assets/tools/Fiddler7.jpg)'
这样的话，我们就可以使用Fiddler来抓取手机客户端上的各种请求了。

### Google浏览器Inspect调试手机移动端网页
在移动端开发过程中，我们无法像PC端一样通过`console.log`在手机上展示一些信息进行调试(好像有一些插件比如vconsole可以进行简单调试)，但是在开发过程中，我们经常需要修改进行调试，查看效果等，这时候如果能够直接查看到调试效果则更好了。Google浏览器提供了inspect可以方便我们进行调试。

**步骤一**： 确保手机处于USB调试模式
设置步骤如下：在`手机设置` -> `开发者选项` -> `开启` -> `打开USB调试`，然后使用USB数据线连接电脑。

**步骤二**： 打开Google浏览器inspect页面
在Google浏览器中输入`chrome://inspect/#devices`,进入`inspect`页面。然后打开`Discover USB devices`查看连接的USB设备(如果没有看到连接的设备，请确保USB模式打开成功以及控制台允许发现设备设置成功)。如下图所示：

![Fiddler](/Home/assets/tools/Fiddler8.png)'

然后，找到我们需要监听的网页，点击`inspect`就能够实现将一些信息展示到控制台上，方便我们的调试。

### HOSTS设置
在开发过程中，我们经常需要连接一些线下环境，这时候常常需要动态地修改HOST,从而实现把网站的所有文件映射到指定的服务器。这时候我们通常需要动态地去修改window下的host。Fiddler提供了强大的Host切换设置。其设置步骤如下：
菜单栏中的`Tools`->`Hosts` -> `Enable`，勾选`Enable`使得Host设置生效。

![Fiddler](/Home/assets/tools/Fiddler9.png)'

### 文件代理(数据伪造)
在项目开发过程中我们经常会遇到这些情况：
1. 线上出现bug，这时候我们需要迅速定位bug，这时候我们可以迅速代理线上报错的文件，代理成本地文件，然后在本地调试。
2. 前端开发已经完成了，但是后端还没有开发完成，这时候前端不能傻傻地等后端啊，我们可以使用Fiddler代理来伪造数据。

使用方法如下：
如果是线上的文件，直接将其拖入到右侧的监控视图中(如果需要自己设置url则点击`Add Rules`)，然后找到`AutoResponder`工具栏，勾选下面的`Enable rules`和`Unmatched requests passthrough`。然后这时候可以点击下面的`Rule Editor`中的设置，将其代理成自己想要的类型。比如你是代理文件，可以选择`Find file`，然后选择本地文件。如果你是伪造数据，可以使用本地的数据(定义一个json数据即可)。

![Fiddler](/Home/assets/tools/Fiddler10.png)'

### 总结
到目前为止，我们介绍了Fiddler的一些常用设置和功能，熟练地使用这些功能可以帮助我们更好地开发，给个人开发带来极大的便利。
但是Fiddler的功能非常强大，需要等待更多的探讨和发现，这里就不一一赘述了。最后，希望这篇文章能够给你带来帮助。