## Promise.race实现超时机制
#### 大佬链接传送门:
- url
#### 简看笔记:
```javascript
// 通过Promise.race实现超时机制
let timeoutPromise = timeout => new Promise((resolve, reject) => {
      setTimeout(() =>
              reject(new Error('Request Timeout!'))
          , timeout)
  })
  let fetchPromise = url => new Promise((resolve, reject) => {
      resolve(fetch(url))
  })
  Promise.race([timeoutPromise(1000), fetchPromise('/post/body')]).then(data => console.log(data)).catch(err => console.log(err))
```
  