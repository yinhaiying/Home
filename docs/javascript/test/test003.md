### 前端单元测试框架(Karma/Mocha + Vue-Test-Utils + Chai)

### 简介
#### Karma:
Karma官方的说法是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。换句话说他就是一个能够让我们的测试能够在浏览器中运行的工具。为什么需要这个工具了，我们的测试代码不能直接都是用Node运行吗？事实上，测试中有很多地方都需要浏览器的环境，比如我们如果想要测试DOM相关的，或者想要测试一些样式啊，都需要运行在浏览器。另外，如果我们需要测试不同浏览器环境的情况，那么Karma提供了不同的浏览器可以供我们测试。想要使用Karma,需要配置一个karma.config.js文件。

karma的配置文件karma.config.js
```javascript
// Karma configuration
// Generated on Fri Apr 17 2020 14:58:57 GMT+0800 (GMT+08:00)
const webpackConfig = require('@vue/cli-service/webpack.config');
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['mocha'],  // 单元测试使用的框架
    files:['tests/**/*.spec.js'], //需要加载到浏览器的文件列表
    exclude: [],
    // 预处理器,在浏览器使用之前处理匹配的文件
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],  // 测试报告
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    webpack: webpackConfig,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
```
这里有几个需要注意的地方：
1. 在加载到浏览器之前一定要用webpack进行打包，否则会出现import导入报错。
```javascript
# 引入
const webpackConfig = require('@vue/cli-service/webpack.config');
# 配置项
preprocessors: { //在浏览器使用之前处理匹配的文件
  '**/*.spec.js': ['webpack', 'sourcemap']
},
webpack: webpackConfig,
```

#### Mocha
  Mocha是一个测试框架，也就是我们编写测试代码的框架，通过它，可以为JavaScript应用添加测试，从而保证代码的质量。
  Mocha编写的测试脚本里面会包括一个或多个describe块，每个describe块应该包括一个或多个it块。</br>
  `describe`块成为测试套件(test suite)，表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称，通常设置程要测试的对象，比如：`Button.vue`;第二个参数是一个实际执行的函数。
  `it`块是一个单独的测试用例，是测试的最小单元。它是一个函数，第一个参数是描述测试的内容，比如：测试button能否正常显示slot中的内容;第二个参数是一个实际执行的函数。
  ```javascript
describe('Button.vue', () => {  //划分作用域
  it('存在.', () => {
      expect(Button).to.be.ok // 不是null,undefined
  });
  it('测试button能否正常显示slot中的内容', () => {
   const wrapper =  shallowMount(Button,{
      slots:{
        default:'y-ui'
      }
    })
    expect(wrapper.text()).to.equal('y-ui');
  });
})
  ```

#### chai
chai是一个断言库，通常配合Mocha使用。在it描述的测试用例中，必然使用到**断言**。
当你对类，模块或者方法的可以接受的输入和输出有着很明确的定义和认识，当程序的输出结果和输入不匹配时，
你想让程序有一个明确的返回。比如：我明确地知道1+1=2，我现在就想知道我输入1+1会不会得到2。如果不是程序返回一个错误。这时候我们通常会使用到断言。

断言就是专门用来验证输出和期望是否一致的一个工具。在内容的实现上，它是通过比较一个实际值actual和一个期望值expected来实现的。
```javascript
it('存在.', () => {
    expect(Button).to.be.ok // 不是null,undefined
});
```
`expect(Button).to.be.ok`就是一个断言。

### 编写测试

#### DOM测试
```javascript
it('测试button能否正常设置icon属性', () => {
  const wrapper =  shallowMount(Button,{
    propsData: {
      icon: 'settings',
    },
    stubs:{
      'y-icon':Icon
    }
  });
  const useElement = wrapper.vm.$el.querySelector('use');
  const href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-settings');
});
```
DOM的测试通过使用`wrapper.vm.$el.querySelector('use')`可以获取到对应的dom元素，
然后通过getAttribute可以获取到元素的属性。然后直接使用断言进行判断即可。

#### class 测试
```javascript
it('测试button能否正常设置disabled属性', () => {
  const wrapper =  shallowMount(Button,{
    propsData: {
      disabled: true,
    },
  });
  expect(wrapper.classes()).to.be.an('array').that.include('is-disabled');
});
```
通过`vue-test-utils`的wrapper对象下的classes可以获取到所有的class组成的数组，然后进行判断即可。

#### Css样式测试
```javascript
it('测试button能否正常设置iconPosition属性', () => {
  const wrapper =  shallowMount(Button,{
    attachToDocument:true, // 确保组件渲染完成可以获取到样式。
    propsData: {
      icon: 'settings',
      iconPosition:'right'
    },
    stubs:{
      'y-icon':Icon
    }
  });
  expect(wrapper.classes()).include('y-button-right');
  const icon = wrapper.vm.$el.querySelector('svg');
  expect(getComputedStyle(icon).order).to.eq('2');
});
```
样式的测试，我们首先必须保证浏览器已经加载完，确保样式全部渲染完成，因此，我们必须先设置`attachToDocument:true`；然后我们获取到指定元素`wrapper.vm.$el.querySelector('svg')`，再通过
getComputedStyle获取到元素的样式，这个样式就是我们设置的样式值，从而进行判断。

#### 事件的测试
```javascript
it('测试button能否正常触发点击事件', () => {
  const wrapper =  shallowMount(Button);
  wrapper.find('button').trigger('click');
  console.log(wrapper.emitted())
  expect(wrapper.emitted('click').length).to.eq(1);
});
```
事件的测试，我们需要先通过wrapper.find()方法获取到一个wrapper对象，这个对象上的trigger可以触发一个事件。
然后通过wrapper.emitted()方法取回所有的事件记录。然后我们可以基于这些数据来设置断言。

