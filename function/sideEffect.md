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

###实例二：

```bash
  var array1 = [0, 1, 2, 3, 4, 5, 6];
  var array2 = [0, 1, 2, 3, 4, 5, 6];
  var spliceArray = array1.splice(0, 2);
  var sliceArray = array2.slice(0, 2);
  console.log('array1: ' + array1);
  console.log('spliceArray: ' + spliceArray);
  console.log('array2: ' + array2);
  console.log('sliceArray: ' + sliceArray);
```
#### 运行结果：
```bash
array1: 2,3,4,5,6
spliceArray: 0,1
array2: 0,1,2,3,4,5,6
sliceArray: 0,1
```
可以看到，slice和splice的作用是大致相同的，但是splice改变了原数组，而slice却没有，实际开发中，slice这种不改变原数组的方式更安全一些，改变原始数组，是一种副作用。

### 另外
 修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。
