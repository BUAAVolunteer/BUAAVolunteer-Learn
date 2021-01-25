## 08	小程序中的JavaScript

### 1	.js文件

小程序中的.js文件就是JavaScript代码所在，不同于普通的html需要<script></script>标签，小程序系统内会自动将同名的.js文件在编译的时候附加到wxml编译完的html内，因此不需要多添加其他代码就可以运行到页面上。

在小程序中，每一个页面都附带有一个js文件，而整个小程序又有一个app.js全局文件，app.js如何使用我们会在下节课详细叙述。

![小程序js](小程序js文件所在.jpg)

### 2	将数据同步到页面

在小程序中，页面的数据是和data中的数据对应的，可以尝试如下的方式：

feedback.wxml:

```html
<text>{{text}}</text>
```

feedback.js:

```javascript
data: {
    text: "Hello World!"
}
```

通过调试器的wxml可以看到在写入text标签的地方，内容已经变成了Hello World!，这就说明初始的对页面的同步数据成功了。

之前也说过，通过this可以访问页面的数据，那么如果我改变this.data中的数据，能不能同步地将wxml中的数据改变呢？

我们可以更改feedback.js试试：

feedback.js：

```javascript
onShow: function() {
    this.data.text = "Goodbye!"
}
```

再次运行，发现text标签处的内容还是Hello World!，说明直接修改data是没办法达到同步数据到页面的目的的。这是因为虽然通过这样改变了数据，但是并没有触发内部引擎通过数据计算像素点的过程，因此展示到页面上还是原来的页面，而这个**改变数据触发内部引擎重新计算像素点以此达到改变页面显示**的过程，就叫做“渲染”。

所以说怎么对这个数据进行渲染？这就需要用到小程序自己的页面方法setData，使用方式参照下面的例子：

feedback.js

```javascript
onShow: function() {
    this.setData({
        text: "Goodbye!"
    })
}
```

再次运行，发现内容已经转换为了Goodbye!，就说明渲染成功了。

**再次提醒：这里的setData是页面的方法，也就是说this必须要指向页面才能生效**

### 3	对页面操作的响应

之前我们讲过了“回调函数”这一概念，对页面操作的响应正是由回调函数来实现的。

首先实现一个简单的响应：

feedback.wxml:

```html
<input ... bindinput="input">
```

feedback.js:

```javascript
Page({
    data: {
        ...
    },
    onShow:function(){
        
    },
    input: function(event){
        console.log(event.target.value)
    }
})
```

运行之后，发现每次向input标签的输入框输入内容，都会在控制台打印出**已输入的完整内容**。

分析这个例子：bindinput就是绑定与这个input标签在用户输入时触发的回调函数（这个回调函数是页面的方法），event就是触发的事件（有兴趣的同学可以将event打印出来看一下它的内容是什么，基本包含了事件的所有信息）。

**但是请注意：虽然bindinput会返回输入的数据，但是this.data并不会因此而改变，因此如果采用这种方法对输入进行处理的话，请务必第一时间通过setData向this.data同步数据**

### 4	数据绑定

通过上面两小节的方法，其实就已经可以进行交互的所有流程了，但是这么做不免有些繁琐，因为如果按照之前的方法，对于每一个input都需要绑定bindinput进行数据同步。如果对于某个数据只需要原封不动地放到data里面，微信提供了一种特殊写法“modal:value”，以对数据进行双向绑定，其写法为

```html
<input ... modal:value="{{text}}">
```

这样就不需要回调函数，在需要input的输入值的时候，直接取this.data.text就可以，这极大地方便了使用。

### 5	示例

参考feedback.js



