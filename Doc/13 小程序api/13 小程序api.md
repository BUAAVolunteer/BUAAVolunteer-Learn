## 13 小程序API

### 1	简要介绍

API（Application Programming Interface， 应用程序接口），是一些预先定义的接口（如函数、HTTP/HTTPS接口），或指软件系统不同组成部分衔接的约定。用来提供应用程序与开发人员基于某软件或硬件得以访问的一组例程，而又无需访问源码，或理解内部工作机制的细节，即可以将背后的逻辑当做黑盒看待。

在小程序中存在很多腾讯自身的技术机密，有可能是微信的性能优化和前端的动画优化（当然其实大概率没做这些，老腾讯了），因此不想让我们直接接触数据库的http访问接口，并且为了编程方便考虑，将这些请求封装成了多个不同的API以供使用。

比较典型的API就是之前讲过的数据库的访问以及云函数的调用，另外接下来页面间的路由也是通过API进行的。

具体小程序的API以及使用方法可以从[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/api/)中查看

### 2	常用的API

#### 2.1	网络请求（数据库、云函数、http/https请求）

云数据库和云函数的API在之前已经讲解过了，主要是`wx.cloud.database().collection(数据库名).操作`以及`wx.cloud.callFunction()`，接下来主要说一下http/https请求：

```javascript
wx.request({
    url: "xxx",
    data: {
        
    },
    method: "xxx",
    success() {
        
    }
})
```

通过这个API我们可以访问一些没有封装好的网络接口，以后如果不使用微信的云数据库的话这个API非常重要。但是目前我们并不会用到，只需要了解就行。

#### 2.2	页面路由

页面路由，简单来说就是页面之间的跳转，由于小程序不存在网络地址，因此每个页面都只能通过页面间的路由进入。

小程序中的页面路由共有一下几种：

```javascript
wx.switchTab()	//跳转到tabbar中的页面
wx.reLaunch()	//清除所有已开启的页面（包括页面栈中的），加载目标页面
wx.redirectTo()	//关闭当前页面，加载目标页面
wx.navigateTo()	//不关闭当前页面，加载目标页面
wx.navigateBack()//跳转到页面栈中上一个页面
```

这些函数的参数的基本格式如下：

```javascript
{
    url: "...",	//跳转的页面相对路径
}
```

如果想在页面跳转的时候附加参数的话，需要对url添加一些额外的东西。举个例子，比如我现在要跳转到feedbackComment页面并且传入phone和name两个参数，那么url就要写成：

```javascript
url: "../feedbackComment/feedbackComment?phone=" + phone + "&name=" + name
```

其中字符串外的phone和name都是变量，需要注意这里用到了JavaScript弱类型的加法。

传参表现为跳转后页面onLoad中的option，例如在feedbackComment页面中取出phone和name：

```javascript
onLoad: function(option) {
    var phone = option.phone
    var name = option.name
}
```

#### 2.3	其它

登录接口：`wx.login`

订阅消息：`wx.requestSubscribeMessage`

文件相关：`wx.downloadFile -> wx.saveFile -> wx.openDocument`







