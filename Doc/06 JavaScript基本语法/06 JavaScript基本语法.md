## 06	JavaScript基本语法

教程推荐：[廖雪峰的JavaScript教程]()

**注意**：对于小程序目前用到的语法只需要看到面向对象之前即可，另外闭包和生成器也没有用到。

### 1	JavaScript的简要介绍以及先来一段Hello World

> **JavaScript**（通常缩写为**JS**）是一种[高级](https://zh.wikipedia.org/wiki/高级语言)的、[解释型](https://zh.wikipedia.org/wiki/直譯語言)的[编程语言](https://zh.wikipedia.org/wiki/编程语言)[[8\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-:0-8)。JavaScript是一门基于原型、函数先行的语言[[9\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-:1-9)，是一门多范式的语言，它支持[面向对象](https://zh.wikipedia.org/wiki/面向对象程序设计)程序设计，[命令式编程](https://zh.wikipedia.org/wiki/命令式编程语言)，以及[函数式编程](https://zh.wikipedia.org/wiki/函数式编程语言)。它提供语法来操控文本、[数组](https://zh.wikipedia.org/wiki/数组)、日期以及[正则表达式](https://zh.wikipedia.org/wiki/正则表达式)等，不支持[I/O](https://zh.wikipedia.org/wiki/I/O)，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过[ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)实现语言的标准化[[8\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-:0-8)。它被世界上的绝大多数网站所使用，也被世界主流[浏览器](https://zh.wikipedia.org/wiki/浏览器)（[Chrome](https://zh.wikipedia.org/wiki/Google_Chrome)、[IE](https://zh.wikipedia.org/wiki/Internet_Explorer)、[Firefox](https://zh.wikipedia.org/wiki/Firefox)、[Safari](https://zh.wikipedia.org/wiki/Safari)、[Opera](https://zh.wikipedia.org/wiki/Opera電腦瀏覽器)）支持。
>
> JavaScript与[Java](https://zh.wikipedia.org/wiki/Java)在名字或语法上都有很多相似性，但这两门编程语言从设计之初就有很大的不同，JavaScript的语言设计主要受到了[Self](https://zh.wikipedia.org/wiki/Self)（一种基于原型的编程语言）和[Scheme](https://zh.wikipedia.org/wiki/Scheme)（一门函数式编程语言）的影响[[9\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-:1-9)。在语法结构上它又与[C语言](https://zh.wikipedia.org/wiki/C语言)有很多相似（例如if条件语句、switch语句、while循环、do-while循环等）[[10\]](https://zh.wikipedia.org/wiki/JavaScript#cite_note-10)。
>
> 在客户端，JavaScript在传统意义上被实现为一种解释语言，但在最近，它已经可以被[即时编译](https://zh.wikipedia.org/wiki/即時編譯)（JIT）执行。随着最新的[HTML5](https://zh.wikipedia.org/wiki/HTML5)和[CSS3](https://zh.wikipedia.org/wiki/CSS3)语言标准的推行它还可用于游戏、桌面和移动应用程序的开发和在服务器端网络环境运行，如[Node.js](https://zh.wikipedia.org/wiki/Node.js)。
>
> --------摘自Wikipedia

看不懂就对了，之后还会慢慢理解的。现在还是先从Hello World走起吧~

在feedback.js的相应位置加入语句：

```javascript
onShow: function(){
    console.log("Hello World!")		//打印出Hello World!
}
```

保存.js文件，微信开发工具会自动重新运行，并在控制台打印"Hello World!"

**console.log()相当于C语言中的printf（语法有所不同），是开发中重要的调试工具**（毕竟微信的开发工具真的难用orz）

**JavaScript中的注释和C语言的注释方式一致，单行为"//"，多行为"/\* ... \*/"**

**JavaScript的代码末尾不必加分号，但也因此某些情况和C语言有区别，具体在后面会讲。**

### 2	JavaScript的变量

#### 2.1	变量类型

JavaScript中主要无种变量类型：String, Number, Boolean, Object, Undefined。其中Object类型又会衍生出以下类型：Null, Object（姑且这么叫）, Array, Set, Map。同时在ES6中增加了一种类型：iterable（不常用）。以下将对这些类型进行解释。

##### 2.1.1	String、Number、Boolean

这三种类型顾名思义，分别为字符串、数字（包括整形和浮点数）、布尔类型

##### 2.1.2	Null、Undefined

这两个类型都代表没有，但是有一定的区别：Null代表变量声明后没有赋任何值（也就是说可以将一个变量赋值为Null）；Undefined代表变量没有被声明。

##### 2.1.3	Object及其衍生型

在日常用的最多的是Object和Array类型。

其中Object相当于C语言中的结构体，可以拥有不同的键值对，并通过键来索引，Object的键只能为字符串，而值可以为任何类型。

Array相当于数组，但是由于是通过Object实现的，因此每个数组的元素可以是不同类型的变量，同时Array也可以通过下标索引，即array[i]，并且最开始的元素下标为0。**JavaScript中的数组是变长的，不需要声明数组长度**

Set和Map在日常中并不常用，因为Object就可以代替（除了某些特定的需求）。Set是“集合”，集合中不会有重复的数据；Map是“字典”，同样是键值对的组合，但是字典的键的数据类型相对于Object来说可以更多样（Object的键只能是字符串类型）。

#### 2.2	变量声明

JavaScript中的变量声明有两种方式：

```javascript
var name = value
let name = value
```

这两种方式的区别在后面会详细讲解。

#### 2.3	变量初始化

不同的变量类型有不同的初始化方式，和C语言一样，以下为经典变量类型的初始化。

```javascript
var a = "Hello"		//String初始化
var a = 1			//Number初始化
var a = true		//Boolean初始化
var a = {
    a: 1,
    b: "1",
    c: true
}					//Object初始化
var a = [1, "1"]	//Array初始化
```



### 3	变量运算

JavaScript是一种**弱类型**的语言，与C语言不同的是，JavaScript的加法（+）有着很特殊的作用。

#### 3.1	+运算

在feedback.js中的onShow中放入如下代码：

```javascript
var a = "Hello"
var b = "World"
var c = 1
var d = true
var e = {a:1}
var f = [1, "1"]
console.log(a + " " + b + "!")
console.log(a + c)
console.log(a + d)
console.log(a + e)
console.log(a + f)
console.log(c + c)
console.log(c + d)
console.log(e + f)
```

运行后观察控制台打印的结果，可以发现除了c+c（两个Number类型相加）以外，都是先将变量转换为String类型然后进行拼接，如果有兴趣可以通过typeof()函数检查运算后的数据类型，并尝试更多的不同类型间的运算。

#### 3.2	代数运算与布尔运算

JavaScript中的代数运算（- * /）和C语言中的一致，但是仅限于Number类型之间。

JavaScript中的布尔运算（! && ||）和C语言中的一致，但是仅限于Boolean类型之间（包括逻辑判断运算的结果）。

#### 3.3	变量的方法

除了运算符之外，不同类型的变量还有一些方法可以使用。其使用方式为：变量.方法名()。一些典型的方法如下所示：

```javascript
String.split()		//分割字符串
String.replace()	//代替子串
String.indexOf()	//查找子串位置
String.slice()		//取出字符串子串

Number.toFixed()	//四舍五入到小数点后某一位数
Number.ceil()		//向上取整
Number.floor()		//向下取整
Number.toString()	//转换为String类型

Array.join()		//将数组中所有元素合并
Array.indexOf()		//查找元素
Array.sort()		//数组元素排序
Array.push()		//将一个元素加入到末尾
Array.pop()			//将一个元素加入到开头

Object.keys()		//返回Object的所有键组成的数组
Object.values()		//返回Object的所有值组成的数组
```

这里展示的只是方法的名称，具体的使用方式还请自行查找资料。

### 4	循环与判断

JavaScript中的循环与判断与C语言类似：

```javascript
if (逻辑判断){
   	...
}

for (let i = 0; i < lenght; i++){
    ...
}
    
while(逻辑判断){
    ...
}
    
do{
    ...
}while(逻辑判断)

switch(){
       case n:
       		...
       		break
       case m:
       		...
       		break
       default:
       		...
}
```

这里应该注意到，由于JavaScript中并不强制在语句末尾加分号，因此在写这些带有{}的语句时，**习惯性将“{”放在上一行的结尾**，避免造成误解。

### 5	函数的声明与使用

#### 5.1	通常函数的声明和使用

JavaScript中函数的声明不需要说明返回值的类型，并不需要提前声明（总之是怎么方便怎么来啦）

```javascript
example()		//输出aaa
function example(){
    console.log("aaa")
}
example()		//输出aaa
```

#### 5.2	匿名函数

JavaScript中匿名函数的声明有两种方式：通常方式和箭头函数，两者之间有一些细微的区别，在下一节课会讲解。

```javascript
function(){		//普通匿名函数
    ...
}

(x,y) => x*y	//箭头函数，通常情况下相当于function(x,y){return x*y}，如果传入参数只有一个的话可以不加"()"
```

JavaScript的函数声明并不会立即执行，但是匿名函数有另外的作用。之前说到Object的值可以是任何类型，并且需要知道的是**JavaScript中的函数类型为Object**。由此可以有以下操作：

```javascript
var a = {
    func: function(){
        console.log("aaa")
    },
    arrow: a => {
        console.log(a)
    }
}
a.func()		//输出aaa
a.arrow("aaa")	//输出aaa
```

### 6	var和let的区别

说了这么多，终于能讲这件事情了orz真不容易。

其实var和let作用域的区别很简单，那就是作用域的区别。

var的作用域为声明语句所在的函数，如果在声明之前使用会返回undefined。

let的作用域为声明语句所在的函数块（"{}"包裹的部分），如果在声明之前使用此变量会报错，并且无法重复声明。

此外let很有一些优秀的特性，因此我们在只需要块内使用某一变量的时候（主要是for循环）通常使用let。

### 7	作业

1. 利用今天学的变量的方法的使用，尝试不使用循环，并在一行代码内将一个字符串中的所有空格去除。

2. 编写一个函数能以JSON字符串格式（自行查询）在控制台打印输入的Object类型变量（不要用toString()方法）。

3. 用JavaScript实现一个链表，实现插入、删除、查找、更新的功能，并进行测试。操作函数样例：

   ```javascript
   function insert(a, data, pos){		//a为被操作的链表数据，data为插入链表的数据，pos为插入的位置
       
   }
   ```