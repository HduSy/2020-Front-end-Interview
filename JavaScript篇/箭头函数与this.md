## 箭头函数与this
#### 大佬链接传送门:
- https://kiwenlau.com/2019/06/18/arrow-function-this
- https://github.com/ljianshu/Blog/issues/7
- https://juejin.im/post/5aa1eb056fb9a028b77a66fd
- https://juejin.im/post/6844903805960585224
#### 简看笔记:
- 箭头函数中的this来自于函数作用域链，并没有自己的this  
- 箭头函数简洁写法规则,与普通函数相比只能是赋值式写法;另外需要注意的是,setTimeout/setInterval中的普通函数this指向window  
- 立即调用函数表达式IIFE:一 不必为函数命名,避免全局污染;二 内部形成单独作用域;三 模块jQuery
---
1. 箭头函数更加简洁:关于箭头函数参数,没有(),一个a,多个(a,b,c);关于箭头函数函数体,如果只有一句代码返回一个值或js表达式,可省略大括号 
2. 箭头函数不能创建this,没有自己的this,需要沿着作用域链寻找,在定义时就确定了指向;
3. 箭头函数不能通过bind apply call修改箭头函数中this的绑定;
4. 箭头函数不能用作构造函数;
5. 箭头函数没有自己的arguments对象,是外层函数的arguments对象;
6. 箭头函数没有原型;
7. 箭头函数不能作为对象属性
