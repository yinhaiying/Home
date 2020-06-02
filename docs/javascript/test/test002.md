### 单元测试之断言（chai.js）

> 作为前端开发，很少去自己写单元测试。对于单元测试的了解也很少，自学了一点关于单元测试断言的知识，有了一些自己的个人理解，记录下来，方便下次使用时查阅。

### 什么是断言

当你对类，模块或者方法的可以接受的输入和输出有着很明确的定义和认识，当程序的输出结果和输入不匹配时，
你想让程序有一个明确的返回。比如：我明确地知道`1+1=2`,我现在就想知道我输入`1+1`会不会得到2。如果不是程序返回一个错误。这时候我们通常会使用到**断言**。

`断言`就是专门用来验证输出和期望是否一致的一个工具。在内容的实现上，它是通过比较一个实际值`actual`和一个期望值`expected`来实现的。下面介绍一个使用较为广泛的断言库`chai.js`

### chai.js断言库
1. 安装和导入
```javascript
npm i chai
import chai from 'chai'
let expect = chai.expect;
```
2. 使用
```javascript
let foo = 'bar';
expect(foo).to.equal('bar');
```
chai的使用是类似于链式调用的形式。以`expect(foo).to.be.a('string');`为例，
通过`.`我么你可以把这个链式分为几个部分：
- `expect(foo)`
- `to`
- `be`
- `a('string')`
我们逐步来理解这几个部分：
`expect(foo)`：是你要断言的对象，翻译过来就是**我希望某某某**
`to`：虚词，单纯作为语言链提供以期提高断言的可读性，它本身并不具有断言功能。
`be`:同`to`一样，是语言链调用提高可读性。
`a(string)`：`a(type)`是一个断言，用来判断测试纸的类型。type是被测试值的类型，也就是断言的期望值。

那么根据上面的分析，我们可以知道实现一个断言需要这几个部分：
1. 要断言的对象
2. 不具备断言功能的断言词
3. 具备断言功能的断言词
4. 以及期望结果
要断言的对象和期望结果都是需要根据实际输入和输出进行设置的。因此我们主要是讲解断言词。

#### 不具备断言功能的断言词
- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does
- still
这些断言词其实没有意义，你把它去掉也不受到影响。比如：
```javascript
expect(foo).to.equal('bar');
expect(foo).equal('bar');
```
上面两个断言能够实现相同的功能。也就是说这些词语使不使用没什么影响。
接下来说一下具备断言功能的断言词。

#### 具备断言功能的断言词
- `equal`
`equal`是一个基本上万能的断言词，绝大多数的断言都可以转换成使用`equal`来实现。

**比如判断变量长度是否为3，我们可以使用`lengthOf`,同样可以使用`equal`实现**
```javascript
expect(foo).have.lengthOf(3);
expect(foo.length).equal(3)；
```
**比如判断数据类型：我们既可以使用`a`，同样可以使用`equal`实现**
```javascript
expect(foo).to.be.a('string');
expect(typeof foo).to.equal('string');
```

- `.deep`
`deep`主要是用来递归比较对象的键值对，而不是比较对象本身。通常配合`equal`和`property`进行使用。
比如：
```javascript
expect([1,2]).equal([1,2]) // 断言不通过
```
上面的断言无法通过，因为引用类型的比较的是对象。接下来我们看使用`deep`
```javascript
expect([1,2]).deep.equal([1,2]) // 断言通过
```
也就是说如果是数组，对象等引用类型时，要比较里面的值需要使用`deep`。

通过使用`equal`和`deep`我们基本上能够实现绝大多数的断言。更多的关于断言
可以参考[官网](https://www.chaijs.com/api/)

### 说明
目前只是介绍了`expect`的使用，其实`chai.js`还有`assert`和`should`两种断言方式。
其中`expect`主要适用于行为驱动测试(Behavior Driven Development.BDD)。其他两种断言方式，以后用到了再进行介绍。
