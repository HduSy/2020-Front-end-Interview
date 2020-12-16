## 为什么JavaScript设计成单线程
#### 大佬链接传送门:
- http://www.ruanyifeng.com/blog/2014/10/event-loop.html
#### 简看笔记:
- 跟用途有关,作为浏览器脚本语言,主要用作用户交互和操作DOM,单线程能避免多线程同步问题,降低复杂度,为了提高CPU并行度,H5引入WebWorker允许主线程创建子线程,子线程完全受主线程控制且不能操作DOM  