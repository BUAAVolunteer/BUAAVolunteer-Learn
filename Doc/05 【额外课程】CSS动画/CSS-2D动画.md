## CSS-2D动画

### 1. 动画

- 什么是动画？

> 动画是将静止的画面变为动态的艺术．实现由静止到动态，主要是靠人眼的视觉残留效应。

- 什么是关键帧？

> 计算机动画术语，指角色或者物体运动变化中*关键*动作所处的那一帧，相当于二维动画中的原画。

- 我个人理解的动画：动画 = 变换 + 过渡

### 2. 变换：Transform

> transform：The **`transform`** attribute defines a list of transform definitions that are applied to an element and the element's children.

- translate：平移

```css
/* Single values */
transform : translate(100px);
transform : translateX(100px);
transform : translateY(100px);

/* Two values  == x,y */
transform : translate(100px, 200px);
```

- rotate：旋转

- > The `rotate()` CSS 函数 定义一个旋转属性，将元素在不变形的情况下，以**角度deg**为单位旋转到不动点周围

  - transf-origin：旋转的基点位置设定

```css
transform: rotate(360deg); // 旋转360°
```

- scale：缩放

> The `scale()` CSS 函数可改变元素的大小。 它可以增大或减小元素的大小，并且缩放量由矢量定义，并且它可以使在一个方向上比另一个方向更多。

```css
transform: scale(2); // 放大2倍
transform: scale(0.2); // 缩小至0.2倍
```

- skew：倾斜变化

> 这种转换是一种剪切映射(横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。

### 3. 过渡

#### 1. transition

> The **`transition`** [CSS ](https://developer.mozilla.org/en-US/docs/CSS)property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property), [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay).

- transition-property

> 过渡作用的对象，如：transform，width，background，all.....

- transition-duration

> 过渡作用的时间，即整个动画的时间，

- transition-timing-function

> 如何计算过渡效果，可能取值如下：
>
> ease：默认值，在过渡的中间速度增加，在过渡结束时速度减慢
>
> linear：均匀过渡
>
> ease-in：开始缓慢，过程中过渡速度增加直到完成
>
> ease-out：开始快速过渡，过程中过渡速度减慢直到完成
>
> ...

- transition-delay

> 过渡延迟的时间，默认为0s，即立即开始

```css
transition: transform 1s linear 1s;
```

### 4. 动画：animation

> animation: name duration timing-function delay iteration-count direction fill-mode;
>
> 动画：[名字] [时间长度] [持续情况]

- animation-name

> 动画名，使用keyframs定义的动画结构

```css
// 一个名为loading1的动画的定义示例，包含若干个关键帧
@keyframes loading1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

- animation-duration

> 动画时间长度

- animation-timing-function

> 同transition-timing-function

- animation-delay

> 同transition-delay

- animation-iteration-count

> 定义动画播放次数的数值，可选值为n（数值）或infinite（无限次）

- animation-direction

> 是否反向播放动画

- animation-fill-mode

> 动画执行前后对目标的样式设置
>
> 在某些动画中会设置为**forwards**，以保证动画结束后目标保持在最后的位置