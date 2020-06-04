# 由浅及深认识JSX
> 在学习React的过程中，可能大家最不能适应的就是它的JSX语法，尤其是对于习惯了使用Vue的新手来说，一直被洗脑表现和逻辑层分离，习惯了HTML结构和JS语法进行分离。但是，在React中，JSX语法就是在JS中使用HTML，大家写起来一直懵懵懂懂，到底是写的是HTML了，还是JS了;有些地方明明在HTML中可以这样使用的，为什么报错了；JSX到底是一种模板语言，还是只是JS的语法糖了。这些问题都一直困扰着我们，因此，作为一个初学者，在学习React的过程中希望能够更好地帮助大家了解JSX，解决这些困扰。作为初学者，可能存在不少理解错误的地方，欢迎大家指正。

## 从一个小的需求出发
假设在不使用任何框架的情况下(不适用Vue和Jquery等)，我们需要实现一个这样的需求：
写一个原生的组件，这个组件很简单就是一个div，里面是一个p标签，p标签中是一个span标签，span标签的内容为：'hello,react'。功能就是封装一个这样很简单的组件，我们用原生的代码实现应该如下：
```javascript
const oDiv = document.createElement('div');
const oP = document.createElement('p');
const oSpan = document.createElement('span');
oSpan.innerText = "Hello,React";
oP.appendChild(oSpan);
oDiv.appendChild(oP);
document.body.appendChild(oDiv);
```
从上面的代码中，我们可以看到：我们连续使用createElement创建了div,p和span标签。然后，又使用appendChild连续插入了三次。代码的实现很简单，但是我们感觉是不是有很多重复的动作，我们是不是可以使用一个函数来进行封装一下，将创建和添加封装起来，具体的实现如下：
```javascript
function createElement(tagName,children){
  let element = document.createElement(tagName);
  if(children){
    // 判断是不是文本 appendChild不支持直接添加文本
    if(typeof children === 'string'){
        const childElement = document.createTextNode(children);
        element.appendChild(childElement);
    }else{
        element.appendChild(children);
    }
  }
  return element;
}
```
我们封装了一个createElement方法，接收两个参数tagName和children。那么上面的代码就可以简化成:
```javascript
const oDiv = createElement('div',
                createElement('p',
                  createElement('span','hello,react')));  
document.body.appendChild(oDiv);
```
上面代码的逻辑就是：通过createElement方法创建一个div元素，他的子元素是p元素,p元素又可需要通过createElement创建，p元素的子元素是span,span元素也可以通过createElement创建，直到没有子元素。从上面我们可以看出，通过封装一个简单的createElement方法，我们就极大地简化了多个元素的创建过程。在前端开发过程中，不就是在不断地组合各种元素来实现整个页面的拼装吗?也就是说，我们可以在开发的过程中，在任何地方，通过createElement来创建一个个的HTML元素，然后拼接成一个页面。
## JSX的引入
从上面的分析知道，我们可以通过使用createElement来创建一个个的HTML元素，然后拼接成一个页面。但是一个页面通常是很复杂的，一个页面中各种元素的嵌套，我们需要不断地嵌套createElement方法，这肯定是会导致代码的可读性下降。因此，我们希望能够使用一种简单的方法来实现这个过程。我们再次观察上面代码的结构：
```javascript
const oDiv = createElement('div',
                createElement('p',
                  createElement('span','hello,react'))); 
```
我们再类比一下HTML中的结构：
```html
<div>
  <p>
    <span>hello,react</span>  
  </p>
</div> 
```
大家有没有发现他们的结构非常类似啊。那么我们可不可以直接用下面的方法，来简化上面的写法了，比如写成这样：
```javascript
const Div = (
  <div>
    <p>
      <span>hello,react</span>  
    </p>
  </div> 
)
```
这样的话，既简化了代码，又增加了可读性，所有人看到这个Div，就知道它内部是什么样了。这就是所谓的JSX写法了。在JS中写HTML，你觉得自己是在写标签，实际上你是在写createElement这些JS方法。而React使用JSX语法就是内置了createElement方法，而且JS很明显也不支持这种语法的，因此React内部也内置了babel进行语法转义。

## React.createElement实现
接下来我们就使用React来实现上述功能：
```javascript
import React from 'react';
const Div = (
  React.createElement('div',null,
    React.createElement('p',null,
      React.createElement('span',null,'hello,react')))
); 
console.log(div);
document.appendChild(Div); // TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
```
我们使用React.createElement方法来实现相同的功能，会发现在添加到body时出现报错了。提示Div不是一个节点类型。嗯？我们明明创建的是一个div元素啊，为什么不是节点了，我们打印一下，创建后的div。
```javascript
{$$typeof: Symbol(react.element), type: "div", key: null, ref: null, props: {…}, …}
props: {children: {…}}
ref: null
type: "div"
```
我们发现得到的是一个JS对象，它里面提到了type:div。然后子元素中又是type:p。然后还有type:span。我们发现这个对象好像是在描述我们的DOM结构。这就是React的另外一个核心功能：虚拟DOM。我们都知道如果大面积地通过createElement去创建DOM，操作DOM，性能会是一个很大的问题，所以React实现了一个Virtual DOM，组件DOM结构就是映射到这个 Virtual DOM 上，React 在这个 Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以实际上不是真的渲染整个 DOM 树。这个 Virtual DOM 是一个纯粹的 JS 数据结构，所以性能会比原生 DOM 快很多。**总而言之，React.createElement为了节省性能，通过createElement创建的是一个虚拟DOM，无法通过appendChild添加到真实的DOM身上。**，那么应该如何将虚拟DOM添加到真实的DOM结构了。这就需要用到ReactDom了。
## ReactDOM
为了让虚拟dom渲染到真实的DOM结构，react提供了react-dom。通过调用它的render方法可以实现将虚拟DOM渲染到DOM身上。因此，最终的代码如下：
```javascript
import React from 'react';
import ReactDom from 'react-dom';

// React创建元素
const Div = (
  React.createElement('div',null,
    React.createElement('p',null,
      React.createElement('span',null,'hello,react')))
); 
// ReactDom渲染元素
ReactDom.render(div,document.getElementById('root'));
```
上面，我们进一步使用JSX语法来优化上述代码：
```javascript
import React from 'react';
import ReactDom from 'react-dom';
const Div = (
  <div>
    <p>
      <span>hello,react</span>  
    </p>
  </div> 
)
ReactDom.render(div,document.getElementById('root'));
```
最终实现的效果一样。

## 进一步证明
到目前为止，我们可以知道我们写的JSX语法实际上就是在写createElement方法。为了进一步证明这点，我们使用babel查看一下我们上面写的JSX语法，我们将下面这段代码放入babel中进行查看；<br/>
babel转化前：
```javascript
import React from 'react'
const Div = (
  <div>
    <p>
      <span>hello,react</span>  
    </p>
  </div> 
)
```
<br/>
babel转化后：

```javascript
var _react = _interopRequireDefault(require("react"));
var Div = _react.default.createElement("div", null, _react.default.createElement("p", null,_react.default.createElement("span", null, "hello,react")));
```
我们发现实际上就是在调用react.default.createElement方法来创建元素。这进一步证明我们的结论：JSX不是新的语法，它只是createElement的语法糖。
## 总结
在本文中，我们从一个简单的创建div元素出发，引入了JSX语法。通过本文的叙述，我们可以知道：
1. jxs语法不是新的模板语言，它只是createElement的语法糖。
2. React提供了createElement方法，因此使用了JSX的地方必须引入React。
3. React创建的是一个虚拟DOM，需要通过ReactDom将其渲染到页面中。




