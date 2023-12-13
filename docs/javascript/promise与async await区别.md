## promise与async\await区别
#### 大佬链接传送门:
- https://cloud.tencent.com/developer/article/1498667
#### 简看笔记:
  1. 语法上 then链式调用处理异步结果;async代码书写顺序上像同步代码,await等待异步完成返回结果
  2. 错误处理上 promise内部错误代码必须通过.catch捕获而不能通过try catch捕获;async\await可以同时捕获同步和异步代码异常
  3. 代码书写简洁性,promise并不能真正避免回调地狱.根据中间结果写条件语句和处理中间值进一步发起异步请求使用promise处理仍会出现回调地狱问题,async能避免层层嵌套
  4. 方便代码调试定位错误
  6. Promise缺点:1一旦开始不可终止2无法知道进行到哪一步3必须设置.catch回调才能捕获内部错误
  