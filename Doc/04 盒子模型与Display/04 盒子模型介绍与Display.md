## 04 盒子模型介绍与Display

盒子模型（box model) ：所有元素都可以看作矩形的盒子，由 **wxss **决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸等）

每个盒子由四个部分组成，如下图所示，效用由各自的边界（Edge）所定义。

![1](image\1.gif)



### 一、内容区域（content area）

- 功能：存放盒子的内容，例如文本、图像，或是视频播放器。
- 尺寸是内容宽度（*content-box* 宽度）和内容高度（*content-box* 高度）。
- 通常含有一个背景颜色（默认颜色为透明）或背景图像。
- box-sizing 为默认（即为content-box）时，内容区域的大小可以通过 *width* 和 *height* 控制。

```css
.view {
    background-color: lightgrey;
    width: 300px;
    height: 200px;
}
```



### 二、内边距区域（padding area）

- 功能：由内容区域扩展出来，负责延伸内容区域（content area）的背景，填充内容与边框（border）的间距。
- 尺寸是 *padding-box* 宽度 和 *padding-box* 高度。
- 内边距是透明的。
- 内边距的粗细可以由 *padding - top*、*padding - right* 、*padding - bottom*、*padding - left* 和 简写属性 *padding* 控制。

```css
.view {
    background-color: lightgrey;
    width: 300px;
	height: 200px;
    padding: 25px;
}
```



### 三、边框区域（border area）

- 功能：扩展自内边距区域，在内边距和内容之外，是容纳边框的区域。
- 尺寸是 *border-box* 宽度 和 *border-box* 高度。
- 边框的粗细由 *border - width* 和简写的  *border* 属性控制。如果 *box - sizing* 属性被设为 *border - box* ，那么边框区域的大小可通过 *width* 和 *height* 等属性控制。
- 假如框盒上设有背景（*background - color* 或 *background - image* ），背景将会一直延伸至边框的外沿（默认为在边框下层延伸，边框会盖在背景上）。此默认表现可通过修改属性 *background - clip* 来改变。

```css
.view {
    background-color: lightgrey;
    width: 300px;
	height: 200px;
    padding: 25px;
    border: 25px solid black;
}
```



### 四、外边距区域（margin area）

- 功能：用空白区域扩展边框区域，以分开相邻的元素。
- 尺寸为 *margin-box* 宽度 和 *margin-box* 高度。
- 外边距区域的大小由 *margin - top*、 *margin - right* 、*margin - bottom*、*margin - left* 和简写属性 *margin* 控制。

```css
.view {
    background-color: lightgrey;
    width: 300px;
	height: 200px;
    padding: 25px;
    border: 25px solid black;
	margin: 25px;
}
```

演示结果如下图：

<img src="image\3.png" alt="3" style="zoom:67%;" />

### 五、box-sizing 属性

- 功能：用于调整元素的总宽度和总高度。

- 属性：

  ① *content - box*：默认值，*width* 和 *height* 指包括内容的宽和高，盒子的总宽度和总高度要在此基础上加上内边距、边框和外边距。

  ② *border - box*： *width* 和 *height* 属性包括 **内容、内边距和边框** ，但不包括外边距。此时内容框不能为负，并且被分配到0。 

  *width* = border + padding + 内容的宽度

  *height* = border + padding + 内容的高度

- 实例：

  ##### **wxml 部分**

  ```html
  <view class="content-box">Content box</view>
  <view class="border-box">Border box</view>
  ```

  ##### wxss 部分

  ```css
  view {
    width: 160px;
    height: 80px;
    padding: 20px;
    border: 8px solid red;
    background-color: yellow;
  }
  
  .content-box {
    box-sizing: content-box;
  }
  
  .border-box {
    box-sizing: border-box;
  }
  ```

  ##### 运行结果：

  ![2](image\2.png)

### 六、Display属性

> The **`display`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline element](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

#### 1. 块状元素还是行内元素？

> 行内元素：text，image
>
> 块状元素：view，input，textarea

#### 2. 什么元素不能设置宽度？

> 不可替换的行内元素，不能设置宽度

- 什么叫可替换？

> image就属于可替换元素，其展示已经交给外部图片来决定了，因此image可以设置宽高
>
> 但text不行

#### 3. display的可选值

> inline：行内元素，不可替换，不可设置宽高
>
> inline-block：行内元素，但具备block块状元素的特性，可以设置宽高
>
> block：块状元素，可以设置宽高
>
> flex、grid...：布局元素，表示子标签的某种布局特点