## 一.纯函数

```bash
1.函数的返回结果只依赖于它的参数
     ```bash
     例：
        #const add = (a, b) => x + b
        #add(1,2) //3
        add的返回结果只依赖于它的参数a和b，只要代码不变，pure(1, 2)的返回值永远是3,此为第一个条件。

2.函数执行过程中没有副作用
*[副作用是指：在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互](./sideEffect.md)

        var values = { a: 1 };
        function effect ( items ) {
                  var b = 1;
                 items.a = items.a * b + 2;
                  return items.a;  }
        var c = effect( values );
            values.a // 3

```