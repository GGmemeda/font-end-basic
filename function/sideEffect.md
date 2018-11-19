###实例一：
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
在上面的代码中，我们改变了参数对象中的一个属性。由于我们定义的函数改变的对象在我们的函数作用域之外，产生有副作用。
### 另外
 修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。
