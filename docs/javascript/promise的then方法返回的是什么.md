## promise的then方法返回的是什么
#### 大佬链接传送门:
- https://es6.ruanyifeng.com/#docs/promise
#### 简看笔记:
- 为promise添加状态改变时的回调函数,返回新promise实例
- Promise.resolve()将现有对象转为promise对象
- 参数是Promise对象则直接返回
- 参数是thenable对象,转为promise对象并立即调用then方法
- 参数非thenable对象甚至非对象,转为promise状态变更为resolved,接着调用then方法
- 不带参数直接返回resolved状态promise对象,接着调用then方法
---
- Promise构造函数接收一个函数作为参数,该函数有两个参数,分别是两个函数,resolve函数将promise状态由pending=>resolved,并将异步结果传递出去;reject函数将promise状态由pending转为rejected,并将错误传递出去.
- then方法接收两个回调函数作为参数,分别接收异步操作成功与失败的结果,promise状态改变时会执行相应的回调函数
- Promise.resolve 参数是promise对象,直接返回;参数是thenable对象,返回promise实例并调用其then方法;参数是原始值,返回一个resolved的promise实例;无参数,直接返回promise实例
- Promise.reject 参数原封不动作为reject理由,reason.这点跟Promise.resolve不同
  