CommonJS 模块规范:
>>CommonJS主要用于服务端

(1)概述要点：
```
   * 1.每个文件就是一个模块，有自己的作用域;
   * 2.在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见;
   * 3.在服务器端，模块的加载是运行时同步加载的;
   * 4.在浏览器端，模块需要提前编译打包处理。
```
(2)特点
```
所有代码都运行在模块作用域，不会污染全局作用域。
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。
要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序。
```
(3)基本语法
```
暴露模块：module.exports = value或exports.xxx = value
引入模块：require(xxx),如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径
```

(4)模块的加载机制
```
CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
```

>>CMD加载模块是同步的

[浏览器模块化规范](./browser.md)
