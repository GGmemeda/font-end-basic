## 一.纯函数

* 1.函数的返回结果只依赖于它的参数  例：
```bash
    const add = (a, b) => x + b;
    add(1, 2); //3
```
 add的返回结果只依赖于它的参数a和b，只要代码不变，pure(1, 2)的返回值永远是3,此为第一个条件。

* 2.函数执行过程中没有副作用

[副作用](./sideEffect.md)是指：在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互
```bash
    var values = { a: 1 };
    function effect (items) {
      var b = 1;
      items.a = items.a * b + 2;
      return items.a;
    }
    var c = effect(values);
    values.a; // 3
```
在上面的代码中，我们改变了参数对象中的一个属性。由于我们定义的函数改变的对象在我们的函数作用域之外，导致这个函数成为“不纯”的函数。
### 另外
 除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。