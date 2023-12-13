## prototype与__proto__
#### 大佬链接传送门:
- https://es6.ruanyifeng.com/#docs/class-extends#%E7%B1%BB%E7%9A%84-prototype-%E5%B1%9E%E6%80%A7%E5%92%8C__proto__%E5%B1%9E%E6%80%A7
- https://juejin.im/post/6844903860008386574
- https://github.com/mqyqingfeng/Blog/issues/2
- https://www.lagou.com/lgeduarticle/81891.html
- https://juejin.im/post/6844903782229213197
#### 简看笔记:
- 函数的prototype属性指向一个对象,该对象正是调用构造函数而创建的实例的原型对象  
- __proto__向上层寻找原型 prototype函数特有属性指向函数原型对象
---
- js是通过原型实现继承的,每个对象都有__proto__属性指向其原型,只有函数对象才有prototype属性指向其原型对象,注意Test.__proto__===Function.prototype (空函数call apply等函数公用方法)与Test.prototype===Test.prototype (原型对象)区别
- Test.prototype.__proto__ === Object.prototype 原型对象的原型当然是对象Object原型了
---
- 原型:每个对象在创建的时候JavaScript会与之关联另一个对象,该对象就是原型;__proto__属性访问原型
- 原型链:访问实例属性时先在对象自身寻找,如果没有找到则在对象原型中寻找,如果仍找不到就到原型的原型中寻找一直到最顶层为止
- 原型对象:prototype是函数的一个属性,指向原型对象,该对象是所有调用该构造函数创建的实例的原型,原型对象有个constructor属性,指向构造函数.由于原型对象也是对象,因此也拥有__proto__属性,指向Object.prototype

