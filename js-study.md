一、作用域，作用域链；原型，原型链；this,闭包
1.变量的作用域无非就是两种：全局变量和局部变量。
var 变量提升。
作用：访问、操作、调用……
域：区域、范围、空间……
2.作用链:用链式查找决定哪些数据能被内部函数访问。
3.执行环境:js为每一个执行环境关联了一个变量对象。环境中定义的所有变量和函数都保存在这个对象中。
标识符解析是沿着作用域链一级一级地搜索标识符地过程
闭包:内部函数的作用域链仍然保持着对父函数活动对象的引用。
闭包作用:
第一个就是可以读取自身函数外部的变量（沿着作用域链寻找）
第二个就是让这些外部变量始终保存在内存中(防止垃圾回收机制销毁)
js函数内的变量值不是在编译的时候就确定的，而是等在运行时期再去寻找的。
this:
this对象是在运行时基于函数的执行环境绑定的：在全局函数中，this等于window，而当函数被作为某个对象调用时，this等于那个对象。不过，匿名函数具有全局性，因此this对象同常指向window

不再用到的内存，没有及时释放，就叫做内存泄漏

js单线程体现在于:用来执行任务（函数），但一次只能执行一个任务，这些任务形成一个任务队列排队等候执行