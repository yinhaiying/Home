#### 前言

> 到目前为止(2019年10月22日)，webpack5已经发布了，而个人对webpack的了解仍然停留在只会简单的配置，需要使用相关配置时，直接进行google，缺少对webpack的了解。为什么要这么配置？为什么要引入这个loader？这个loader是在所有项目中都需要引入吗？它解决了什么问题？对于这些问题，都没有深入的去了解。对于webpack的原理更是望而生畏，但是在前端开发过程中始终无法避开webpack，学好webpack也是前端进阶的必要技能，而学好一个东西最好的方法就是去实践。因此，本文会从零开始搭建一个webpack，在搭建的过程中，不仅会实现功能，更加重要的是明白为什么要这么做，每做一步的目的是什么，解决了哪些问题或者痛点，从而做到不仅知其然而且知其所以然。
#### 为什么要使用webpack
#### 核心知识

#### webpack的安装和简单配置

- 安装

```javascript
npm i webpack webpack-cli -D
```

* 配置webpack.config.js

```javascript
const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}
```
* webpack的执行

我们安装完成webpack之后，如果直接在终端输入*webpack*运行，会发现**提示**：“webpack不是内部或者外部命令，也不是可执行的程序或者批处理文件”。这说明简单直接使用`webpack`不能实现打包。这是因为webpack的运行是依赖于`node_modules/.bin`目录下的可执行文件。想要运行`node_modules/.bin`下的可执行文件有两种方法：

**第一种方法**是：通过在`package.json`的`scripts`字段下，添加命令。如下所示：
```javascript
  "scripts": {
    "build":"webpack"
  },
```
这是因为，`package.json`下的`script`命令会自动去`node_modules/.bin`目录下查找可执行文件。这样的话就能够执行webpack了。

**第二种方法**是：使用`npx webpack`执行命令。如下所示：
```javascript
npx webpack
```
`npx webpack`命令也会自动帮助我们查找`node_modules/.bin`目录下的可执行文件，然后运行。

两种方法运行的过程如下图所示：

![webpack运行图.png](https://i.loli.net/2019/10/22/Lw5vkhiYmI8s6C1.png)

到目前为止，我们实现了将`src/index.js`文件打包到`build/dist/bundle.js`，然后我们通过在`build/dist`目录下创建一个`index.html`文件，并且引入打包后的js，这样的话就可以在浏览器中进行查看了。当前的目录结构如下如所示：

![目录结构.png](https://i.loli.net/2019/10/22/zUOAJKE1aLF4PyR.png)

#### 打包css文件

正如我们前面所说，webpack把每一个文件当做模块来处理，其中css文件也是被当做模块来处理的。但是css不同于js本身无法直接作为模块被加载，需要借助一些`loader`先打包成模块(`css-loader`)。然后再将css插入到head的style标签中(style-loader)。注意：必须先打包成模块，才能够被加载。

* 安装

```javascript
npm i css-loader style-loader -D
```

* 配置

```javascript
module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
    ]
}
```

如上所示：所有的loader都配置在`webpack.config.json`中的`module`中。

#### 引入webpack-dev-server

在开发的过程中，我们发现经常会使用`webpack-dev-server`启动应用。但是为什么我们需要使用`webpack-dev-server`?首先我们看一下之前是如何启动应用的：通过`dist/index.html`然后使用浏览器打开，得到的路径是本地路径。当我们使用`webpack-dev-server`时，相当于开启了一个服务器，就可以使用类似于`http://localhost:8080/`这种地址来进行访问。而且，我们可以访问指定目录下的所有文件。

* 安装

```javascript
npm i webpack-dev-server -D
```

* webpack-dev-server常见配置

```javascript
devServer:{
    contentBase:'./dist', // 指定开启服务器的目录。该目录下的所有文件可以通过http://xxx/yyy进行访文
    compress:true,//进行压缩
    port:9999, //端口号
    inline:true, //url模式
    hot:true,  //用于热更新 不需要舒心页面就能够实现内容的更新
    open:true  //默认打开浏览器
}
```
`webpack-dev-server`的运行跟`webpack`一样，同样依赖于`node_modules/.bin`目录下的可执行文件。因此同样有两种方法进行运行。

方法一：通过在scripts字段中添加命令

```javascript
  "scripts": {
    "build": "webpack",
    "dev":"webpack-dev-server"
  }
```

方法二：通过`npx webpack-dev-server`运行

```javascript
npx webpack-dev-server
```

更多的配置信息参考：[webpack-dev-server](https://www.webpackjs.com/configuration/dev-server/)
#### 自动生成html模板
为什么需要使用这个plugin了？到目前为止，我们打开运行项目，都是通过在`dist`目录下创建`index.html`然后将打包后的`bundle.js`进行引入。但是，这里有两个问题：

第一：有时候dist目录下打包文件过多，我们可能进行删除，如果不小心删除了`index.html`，那么就无法打开页面了。

第二：我们将`bundle.js`在`index.html`中进行引入，这里的打包后的文件名是固定死的，但是很多情况下我们的文件名是hash等值组成的。比如：

```javascript
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:8].js'
    }
}
```

这里的`[name]`是entry的名字，如果是单文件组件，那么默认名字是`main`，但是如果是多文件组件，则有对应的名字。这样的话，我们每次进行修改时，都会生成新的名字，也就是说我们每次都需要手动去修改`index.html`中的引用。这样的话无疑是非常麻烦的。

因此，基于以上两个问题，我们最好每次打包时能够自动生成一个`html`文件(解决第一个问题)，同时能够自动嵌入打包后的文件(解决第二个问题)。这时候就需要使用`html-webpack-plugin`插件了。

* 安装

```javascript
npm i html-webpack-plugin -D
```

* 配置

```javascript
    plugins:[
        //自动生成html模板
        new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:'index.html'
        })
    ]
```

#### 清理生成的dist/文件夹

每次打包后都会默认生成一个`index.html`和打包后的js文件，这样的话dist目录下文件变得越来越多，最好能够在每次打包前直接删除之前的文件，使得`dist`目录下始终只有新生成的文件。这时候我们就需要用到`clean-webpack-plugin`

```javascript
// 安装
npm i clean-webpack-plugin -D
// 使用
new CleanWebpackPlugin()

```

#### 多入口文件

如果我们希望实现多个入口进行打包，比如如下所示：

`index.html`

```html
    <div id="base"></div>
    <div id="app"></div>
```

`webpack.config.js`

```javascript
entry:{
    index:'./src/index.js',
    base:'./src/base.js'
},
```

多入口文件会先找到每个入口，然后从各个入口分别出发找到依赖的模块，然后生成一个Chunk(代码块)。最后会把Chunk写到文件系统中(Assets)。也就是说，多入口最后都会生成多个打包后的文件(每一个入口对应一个Chunk)。打包过程如下所示：

![多入口文件生成asset.png](https://i.loli.net/2019/10/24/9PNtSA4FkoJp3aO.png)

最后生成打包后的文件如下所示：

![多入口打包.png](https://i.loli.net/2019/10/22/7UdR6YxlEhv4PrT.png)

从上图中我们可以看出，每一个入口文件都生成了一个打包文件，而且这两个打包后的文件都被引入到`index.html`中了。但是实际上有时候我们是希望打包到不同的文件中，比如`index.js`打包到`index.html`中，

`base.js`打包到`base.html`中，这时候我们就又需要使用到`html-webpack-plugin`插件了。

```javascript
        // 一个entry对应一个代码块(chunk),生成一个assets。
		new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:'index.html',
            chunks:['index']
        })
        //
        new HtmlWebpackPlugin({
            template:'./src/base.html',  // 指定的html模板
            filename:'base.html',
            chunks:['base'],//在产出的html文件中引入哪些代码块,通过entry名字进行设置
        }),
```

如上所示：我们使用了两次`html-webpack-plugin`，通过指定不同的模板，同时指定插入到模板中的文件(通过chunks设置)，这样就可以实现多文件入口打包到多文件中。

**chunks:**表示插入指定入口文件打包后的代码块，可以是多个入口得到后的代码块。

**多入口文件的应用**：

* 可以用来抽离公共代码

  比如说我们有一些公共的库，比如`jquery`，`vue`等，这些库或者框架不应该在每个文件中都进行打包。而是抽离出来作为公共文件进行引入，这样可以压缩打包文件的大小。接下来，我们以在项目中引入`jquery`为例，我们将它作为一个入口分别打包到`index.html`和`base.html`中。

需要进行的配置如下：

```javascript
    entry:{
        index:'./src/index.js',
        base:'./src/base.js',
        vendor:'jquery'
    },
    plugins:[
        //自动生成html模板
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['vendor','index']  // 这里需要把jquery打包后的asset注入index.html中
        }),
        new HtmlWebpackPlugin({
            template:'./src/base.html',
            filename:'base.html',
            chunks:['vendor','base'],// 这里需要把jquery打包后的asset注入base.html中
        }),
        // 每次打包前清除dist目录下文件
        new CleanWebpackPlugin()
    ]
```

这样的话，就会打包成三个文件，公共模块`jquery`也会打包成一个文件。但是我们仍然不能直接在`index.js`等中使用`jquery`，因为每一个模块都是独立的，如果没有引入无法直接使用，但是我们又不想直接引入，webpack提供了一个插件`webpack.ProvidePlugin`，可以自动向每个文件注入指定的变量。

```javascript
new webpack.ProvidePlugin({
	$:'jquery'
}),
```

这样的话，我们就可以直接在每个文件中使用`jquery`了。

#### 打包图片

在前端开发过程中，不可避免的需要用到图片，首先我们思考一下，我们经常使用图片的方式。是不是如下所示：

```css
    <div id="app">
        <img src="../assets/images/1.jpg" alt="">
    </div>
```

我们通常都会直接在`img`标签中，写一个图片的相对地址，这样的话，本地打开肯定没有问题，但是如果我们使用`webpack-dev-server`开启一个服务，就会发现有问题了,我们就会看大如下的报错：

```javascript
http://localhost:8888/assets/images/1.jpg 404 (Not Found)
```

事实上，使用`webpack-dev-server`启动一个服务，就是把`dist`作为服务的根文件，我们可以使用连接直接访问这个目录下的任何文件，哪怕不是通过打包后生成的。但是，当前我们的dist目录下是没有assets文件的，它下面也没有图片，也就是说服务器找不到这个图片，因此返回404。事实上，服务器下面之所以找不到这个图片，是因为`index.html`这个文件没有经过打包，`webpack`不会对这个模板文件进行打包，因此我们必须把图片放入到可以被打包的文件中，比如`index.js`或者`index.css`。这些文件都会经过打包，里面的图片也都会经过打包处理。

`file-loader`或者`url-loader`就是可以帮助我们处理图片打包:实际上就是把你使用你相对路径设置的图片，搬运到服务器下面。

```javascript
// 安装
npm i file-laoder url-loader -D
// 简单配置
{
    //解析图片地址，把图片从原来的位置打包到目标位置
    //file-loader可以处理任意的二进制数据
    test:/\.(png|jpg|gif|svg|bmp)$/,
    loader:'file-loader',
    options: {
        name: '[path][name].[ext]',
    },
}
```

刚刚我们说了，我们可以使用`css`和`js`两种方法来引用图片：

方法一：使用`css`，作为背景图片引入。

```css
#app {
    background:url('../assets/images/1.jpg');
    width:100px;
    height:100px;
}
```

我们查看打包后的文件:

![图片打包.png](https://i.loli.net/2019/10/25/l4gcweVxKP7u6qf.png)

我们可以发现，文件中多出来了一个`assets`目录，下面是我们引入的图片。也就是说`file-loader`帮助我们把图片从原来的位置，搬运到了服务器`dist`目录下，这样的话我们就可以在启动服务后访问到了。

方法二：通过`js`引入图片。

```javascript
import src from '../assets/images/1.jpg';
let image = new Image();
image.src = src;
document.appendChild(image);
```

#### 引入less和scss

`Scss`和`less`是动态样式语言，比`css`多出许多功能(如变量、嵌套、运算,混入(Mixin)、继承、颜色处理，函数等)，更容易阅读。因此，在项目开发过程中，通常会引入scss和less来简化样式的处理。但是，对于浏览器是不识别less和scss语法的，也就是说我们实际上还是需要将`.scss`或者`.less`文件转化成`css`。因此，我们需要特定的`loader`来帮助我们处理。

* 安装

```javascript
npm i less less-loader node-sass sass-loader
```

* 简单配置

```javascript
    {
        test:/\.less$/,
        loader:['style-loader','css-loader','less-loader']

    },
    {
        test:/\.s[ac]ss$/i,
        loader:['style-loader','css-loader','sass-loader']
    },
```

* 引用

```javascript
require('./index.less');
require('./index.scss');
```

我们可以看到，在配置`less`和`scss`的loader时，我们不仅需要使用`less-loader`而且还需要使用`css-loader`和`style-loader`，而且还有确定的顺序。这是因为每一种loader实现不同的功能，其中`less-loader`用于将`less`文件转化成`css`文件；`css-loader`用于将css文件转化成模块，`style-loader`用于将打包后的样式插入到head中的style标签中。这样下来，整个样式才能够生效。

#### 抽离公共的css代码

到目前为止，我们已经实现了对`css`、`less`和`scss`的处理，通过合适的loader能够把样式通过style标签嵌入到html中，但是有时候我们不希望把所有样式都在html中引用。比如我们使用了一些非常大的UI框架，比如bootstrap，element-ui等UI框架。如果把这些都打包到head中，会导致整个html体积非常大，使得整个页面加载变慢。因此，我们会考虑将这些比较大的样式文件抽离出来，这样的话一方面可以减少html的体积，减少首次加载的时间，另一方面如果页面较多可以使用缓存，避免二次加载。在webpack4版本中，提供了专门提供了`mini-css-extract-plugin`插件用来实现对`css`代码的抽离。

```javascript
// 安装
npm i mini-css-extract-plugin -D
// 配置
    {
        test:/\.css$/,
            // use:['style-loader','css-loader']  这里是原来的cssloader的配置
            use:[
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: "../"
                    }
                },
                'css-loader'
            ]
    }
```

从上面的配置代码中，我们可以看出原来的style-loader被MiniCssExtractPlugin.loader取代了。这是因为style-loader的功能是向html的head中插入style标签。而实际上我们并不希望通过style标签来引入样式，而是通过抽离css代码使用link来进行引入，因此需要将style-loader给替换掉。

相对应的plugin配置如下：

```javascript
    // 抽离css文件
    new MiniCssExtractPlugin({
        filename:'[name].css',  // 抽离后的文件名
        chunkFilename:'[name].css',
        ignoreOrder:false
    })
```

最终实现的效果如下：

![mini-css-extract.png](https://i.loli.net/2019/10/28/T25EGI1A3g8S6fr.png)

同理，我们可以用来实现对scss和less文件的抽离，配置时只需要替换掉style-loader即可。

```javascript
    {
        test:/\.s[ac]ss$/i,
            use:[
                // 'style-loader',使用MiniCssExtractPlugin.loader替换掉style-loader
                {
                    loader:MiniCssExtractPlugin.loader

                },
                'css-loader',
                'sass-loader'
            ]
    },
```

#### 自动添加浏览器前缀

在很多情况下，我们为了处理兼容性问题，通常需要加一些浏览器的前缀，这些前缀不容易记住，而且写起来比较麻烦。因此，我们希望实现自动添加浏览器前缀。

* 安装

```javascript
npm i postcss-loader autoprefixer -D
```

* loader的配置

```javascript
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: "../"
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
```

除了需要在`webpack.config.js`中配置loader，我们还需要配置一个postcss.config.js文件，这里只写了简单的配置，更多的配置可以查看[postcss-loader](https://webpack.js.org/loaders/postcss-loader/)。

```javascript
module.exports = {
    plugins:[require('autoprefixer')]
}
```

打包后就会实现自动添加`webkit`等浏览器前缀。

#### 使用babel处理js文件

随着ES6，ES7的发布，在项目开发过程中，使用到新的ES6和ES7越来越多。因此，我们需要使用babel来处理这些。

* 安装

```
npm install -D babel-loader @babel/core @babel/preset-env
```

* 配置

```javascript
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
```

#### 复制文件或者文件夹到指定目录

有些时候，我们并不需要所有的文件都进行打包，只是需要经文件从一个目录下复制到另一个目录比如dist目录下。这时候，我们可以使用`copy-webpack-plugin`。

```javascript
// 安装
npm i copy-webpack-plugin -D
// 配置
new CopyPlugin([
    {
        from:path.join(__dirname,'src/common'),
        to:path.join(__dirname,'dist','common')
    }
])
```




