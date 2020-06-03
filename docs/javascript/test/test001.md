### Vue Test Utils

#### Wrapper
Vue Test Utils 是一个基于包裹器的 API。

一个 Wrapper 是一个包括了一个挂载组件或 vnode，以及测试该组件或 vnode 的方法
通过mount、shallow等方法进行挂载返回一个包裹器对象，包裹器会暴露很多封装、遍历和查询其内部的Vue组件实例的便捷的方法。
```javascript
// 通过mount挂载返回包含所有子组件的包裹器
const wrapper =  mount(Button,{
  propsData: {
    type: 'primary'
  }
});
// 使用shallowMount进行挂载不返回包含子组件的包裹器
const wrapper =  shallowMount(Button,{
  propsData: {
    type: 'primary'
  }
});
```
#### Wrapper具有的属性
**vm**：这是该组件的实例。你可以通过 wrapper.vm 访问一个实例所有的方法和属性。
```javascript
const vm =  shallowMount(Button,{
  propsData: {
    type: 'primary'
  }
}).vm;
console.log(vm.$el);  // 获取这个实例的节点结构
```
**element**：包裹器的根 DOM 节点，他的值与vm.$el相同。
```javascript
const element =  shallowMount(Button,{
  propsData: {
    type: 'primary'
  }
}).element;
console.log(element);  // 获取这个实例的节点结构
```
**options**:options.attachedToDocument,如果组件在渲染之后被添加到了文档上则为真。
```javascript
const options =  shallowMount(Button,{
    propsData: {
      type: 'primary'
    }
  }).options;
console.log(options);  // Object{attachedToDocument: false}
```
#### Wrapper具有的方法
**attributes**:返回 Wrapper DOM节点的特性对象。如果提供了 key，则返回这个 key 对应的值。
```javascript
const wrapper =  shallowMount(Button,{
    propsData: {
      type: 'primary'
    }
  });
console.log(wrapper.attribute());
// Object{data-v-03ab08b4: '', class: 'y-button y-button-primary y-button-left'}
```
**classes**：返回 class 名称的数组。
```javascript
const wrapper =  shallowMount(Button,{
    propsData: {
      type: 'primary'
    }
});
console.log(wrapper.classes());// ['y-button', 'y-button-primary', 'y-button-left']
```
**contains**：是否包含匹配的选择器或者组件
```javascript
import Icon from './icon.vue;
console.log(wrapper.contains('button.y-button-primary'));// 是否包含类名为y-button-primary的button组件
console.log(wrapper.contains(Icon));// 是否包含Icon组件
```
这里需要注意，我们这里引入的Icon与我们实际在Button组件中使用的Icon名字可能不一样。比如我们实际中使用的Icon名字是`y-icon`,如下所示：
```html
<button data-v-03ab08b4="" class="y-button y-button-primary y-button-left">
  <y-icon data-v-03ab08b4="" name="settings"></y-icon>
</button>
```
那么这时候我们需要使用替换功能,将y-icon替换为Icon，通过设置stubs值即可。
```javascript
const wrapper =  shallowMount(Button,{
  propsData: {
    type: 'primary',
    icon:'settings'
  },
  stubs:{  //替换功能
    'y-icon':Icon
  },
});
```
**html**:返回DOM节点的HTML字符串。我们可以用来判断是否与我们写的结构相同。
```javascript
console.log(wrapper.html());
'<button data-v-03ab08b4="" class="y-button y-button-primary y-button-left"><svg data-v-03ab08b4="" aria-hidden="true" class="icon"><use xlink:href="#i-settings"></use></svg></button>'
expect(wrapper.html()).toBe('<button><p>Foo</p></button>')
```

**props**:返回 Wrapper vm 的 props 对象。如果提供了 key，则返回这个 key 对应的值。
```javascript
const wrapper =  shallowMount(Button,{
  propsData: {
    type: 'primary',
    icon:'settings'
  },
  stubs:{  //替换功能
    'y-icon':Icon
  },
});
console.log(wrapper.props());
// Object{type: 'primary', disabled: false, round: false, icon: 'settings', iconPosition: 'left'}
```
注意：我们这里获得的是实例vm的所有的props对象，而不仅仅只是我们自己写的{type,icon}这两个对象。我们写的这两个
对象会覆盖原来的实例props的默认值而已。
**setData**：设置vm的data值。
```javascript
const wrapper = shallowMount(Button)
wrapper.setData({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar')
```

**setProps**：设置vm的props值，并强制更新。
```javascript
const wrapper = moshallowMountunt(Button)
wrapper.setProps({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar');
```
我们同样可以使用传入一个propsData对象来实现初始化设置props值：
```javascript
const wrapper =  shallowMount(Button,{
  propsData: {
    type: 'primary',
    icon:'settings'
  }
});
```

**trigger**：在节点上触发一个事件：
```javascript
import sinon from 'sinon'
test('trigger demo', async () => {
  const clickHandler = sinon.stub()
  const wrapper = mount(Foo, {
    propsData: { clickHandler }
  })
  wrapper.trigger('click')
  wrapper.trigger('click', {
    button: 0
  })
  wrapper.trigger('click', {
    ctrlKey: true // 用于测试 @click.ctrl 处理函数
  })
  await wrapper.vm.$nextTick() // 等待事件处理完成
  expect(clickHandler.called).toBe(true)
})
```
事实上，我们很难直接判断一个点击的回调函数是否执行了。这里需要使用sinon来帮助我们判断
函数是否执行了。对于点击事件这种异步事件，需要等待事件处理完成，下一个nextTick更新后才能够判断。
```javascript
await wrapper.vm.$nextTick() // 等待事件处理完成
expect(clickHandler.called).toBe(true)
```
