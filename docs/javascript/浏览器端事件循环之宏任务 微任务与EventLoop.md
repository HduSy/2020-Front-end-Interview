## 浏览器端事件循环之宏任务 微任务与EventLoop
#### 大佬链接传送门:
- https://juejin.im/post/5b498d245188251b193d4059
- https://juejin.im/post/5b73d7a6518825610072b42b
#### 简看笔记:
- **事件循环**:js是单线程语言,一次只能执行一个任务,如果前一个任务很耗时,下一个任务必须等待,如果网页中图片 音乐等资源的加载都是同步任务,就会有很大的问题,浏览器假死,因此出现了异步任务  
- **同步和异步**:两者进入不同执行场所,同步任务会进入主线程,异步任务会现在eventtable中注册回调函数,异步任务执行结束 (异步操作结束)后会将回调函数推入eventqueue,主线程执行结束后会去eventqueue中查看是否有未执行函数,如果有将其加入主线程执行  
- 异步任务中又分宏任务和微任务,事件循环是js的执行机制,决定什么时候执行宏任务什么时候执行微任务的一套判断逻辑,每执行完一个任务都会判断一次  
- **宏任务与微任务**:每执行完宏任务会检查是否有微任务,微任务没有执行完是不会执行下一个宏任务的,如果有就执行所有微任务,然后再执行宏任务,否则执行宏任务  
- 注意:所有会进入异步的都是事件回调那部分的代码,new promise的时候还是同步代码,then中的回调才是异步代码  
- 哪些是宏任务:IO setTimeout setInterval requestAnimationRequest setImmediate script  
- 哪些是微任务:promise.then.catch.finally 基于promise实现的async/ await (之前同步,之后微任务异步),process.nextTick MutationObserver  