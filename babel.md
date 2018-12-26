一. babel7.2.0类中 # 表示为私有方法
```
class man{
   #count=1;
   #add(){this.#count++}
}
类中#代表为类的私有方法
```

二.管道操作符

  语法：expression |> function

 ```bash
 const double = (n) => n * 2;
 const increment = (n) => n + 1;

 // 没有用管道操作符
 double(increment(double(5))); // 22

 // 用上管道操作符之后
 5 |> double |> increment |> double; // 22

 ```

