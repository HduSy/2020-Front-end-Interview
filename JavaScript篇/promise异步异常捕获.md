## promise异步异常捕获
#### 大佬链接传送门:
- https://juejin.im/post/6844903830409183239#heading-7
#### 简看笔记:
  1. 构造函数中的异常需要.catch捕获
  2. then回调中的异常需要try catch捕获并返回到then回调中
  3. 错误通过reject返回,.catch捕获
  