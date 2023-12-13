## WebSocket
#### 大佬链接传送门:
- https://www.liaoxuefeng.com/wiki/1022910821149312/1103303693824096
- https://www.ruanyifeng.com/blog/2017/05/websocket.html
- https://www.runoob.com/html/html5-websocket.html
#### 简看笔记:
- HTTP很大的缺陷就是它的请求应答机制只能由客户端发起请求,然后服务器处理完后将响应发送回去,单向请求,服务器不会主动向客户端发起请求.HTTP基于TCP协议,TCP已实现全双工通信,但HTTP的请求应答机制限制了全双工通信方式.WebSocket是H5协议,建立完全对等的双方,非常适合于聊天及股票预测场景下.请求头相关字段:Upgrade:websocket Connection:Upgrade,响应头字段:101 Switching Protocol Upgrade Connection  
- 特点:建立在TCP之上;握手阶段采用HTTP协议;不受同源策略限制;协议标识是ws;既可以发送文本数据也可以发送二进制数据  
- Ajax的长轮询解决方案会浪费服务器资源带宽,WebSocket协议只需通信双方一次握手,就能建立持久连接,并进行双向数据传输    