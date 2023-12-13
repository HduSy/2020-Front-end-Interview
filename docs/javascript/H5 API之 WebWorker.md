## H5 API之 WebWorker
#### 大佬链接传送门:
- https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
#### 简看笔记:
- 允许创建后台线程运行脚本,执行任务而不干扰用户界面,在不同于window的上下文中运行,不可操作DOM,不可使用window默认方法和属性
- new Worker()
- w.postMessage() w.onmessage = function(event){}
- 跨域window.postMessage
 