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
在上面的代码中，我们改变了参数对象中的一个属性。由于我们定义的函数改变的对象在我们的函数作用域之外，导致这个函数成为“不纯”的函数，切有副作用。
### 另外
 除了