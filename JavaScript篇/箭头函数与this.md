## 箭头函数与this
#### 大佬链接传送门:
- https://kiwenlau.com/2019/06/18/arrow-function-this
- https://github.com/ljianshu/Blog/issues/7
- https://juejin.im/post/5aa1eb056fb9a028b77a66fd
#### 简看笔记:
- 箭头函数中的this来自于函数作用域链，并没有自己的this  
- 箭头函数简洁写法规则,与普通函数相比只能是赋值式写法;另外需要注意的是,setTimeout/setInterval中的普通函数this指向window  
- 立即调用函数表达式IIFE:一 不必为函数命名,避免全局污染;二 内部形成单独作用域;三 模块jQuery