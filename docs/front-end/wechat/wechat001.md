### redirect_uri参数错误

### 前言
在微信网页开发中，访问第三方网页，通过微信网页授权机制可以获取用户的信息，从而实现更多的业务逻辑。但是在开发过程过程中一直出现`redirect_uri参数错误`，无法正确地进行授权，折腾了好久，最终才找到解决方法。这里记录一下这个大坑。

![wechat](/assets/wechat/wechat01.jpg)


### 配置域名出错

在微信公众号中进行网页授权时，根据文档需要进行
回调域名的设置。设置的步骤为：`开发` -> `接口权限` -> `网页服务` -> `网页帐号` -> `网页授权获取用户基本信息`，如下图所示：

![wechat](/assets/wechat/wechat02.jpg)

但是，请注意文档中着重强调了这里授权的是域名，不是完整的url。因此，不需要加http://等协议头，对于经常习惯性地复制一大串url，这时候非常容易出错，一旦这里设置错误，就会导致`redirect_uri参数错误`。如下图所示：

![wechat](/assets/wechat/wechat03.jpg)

也就是说，如果在域名前面添加了`https`等，或者在域名后面多添加了一个`/`都会造成redirect_uri参数错误。

### 总结：
`redirect_uri参数错误`基本上是配置域名出错，所以说开发时一定要注意仔细看文档，虽然文档有时候不清楚，至少可以很快帮助我们定位问题，从而寻找解决方法。