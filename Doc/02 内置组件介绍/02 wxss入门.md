## 02 wxss入门

**这一部分介绍的是小程序前端开发中的【样式】部分，主要由wxss负责**

> wxss对应前端开发中的css，其全称为Cascading Style Sheets，意思是层叠样式表

- 参考文档：https://developer.mozilla.org/zh-CN/
- 官方文档：https://www.w3.org/TR/?tag=css
- CSS可用性问题：

### 一、CSS样式的书写格式

- 通用样式：

```
属性名：属性值;
```

> 冒号左边是样式名，冒号右边是样式值

- 示例

```css
color:red;
```

### 二、css引入

- 思考一个问题，如何将样式与页面中的元素绑定在一起呢？

#### 1. 内联样式

- 写在wxml内，直接在行内添加样式

```html
<view style="font-size:200px">*</view>
```

#### 2. 文档样式表、内嵌样式表

- 内联样式很方便，但为什么强烈不推荐？

> 答：会产生重复代码，维护不便。

- 通用样式：

```
选择器 {
	属性名：属性值;
}
```

#### 3. 外部样式表

### 三、css选择器

#### 1. 元素选择器

- 选择器名为【标签名】
- 示例，为input标签设置border

```css
input {
	border : 1px solid #000;
}
```

#### 2. class选择器

- 为制定class的标签设置样式，选择器名为【class名】

```html
<!-- class名为view1 -->
<view class="view1">233</view>
```

```css
.view1 {
    color : red;
}
```

*注意这里加了.*

#### 3. 组合选择器

- 并集选择器

```html
<!-- class名为view1 -->
<view class="view1">233</view>
<!-- class名为view2 -->
<view class="view2">233</view>
```

```css
// 同时为这两个标签设置样式名
.view1,
.view2 {
	color : red;
}
```

- 递进选择器

```html
<view class="father">
  **
  <text class="son">*</text>
</view>
```

```css
// 为.father下的.son添加样式
.father .son {
  color: red;
}
```

- 兄弟选择器

```html
<view class="father">**</view>
<view class="father2">***</view>
```

```css
// 为.father紧邻的.father2添加样式
.father + .father2 {
  color: red;
}
```

### 四、常见css属性

![image-20210125223439334](image\image-20210125223439334.png)

### 五、作业

- 在wxml基础上，做出如下的样式
- 对text文本进行加粗
- 将input和textarea的背景颜色调整为#fff
- 注意：请使用文档样式表实现，至少请使用**并集选择器**，为规范考虑，还应该使用**递进选择器**

![image-20210125225714302](image\image-20210125225714302.png)