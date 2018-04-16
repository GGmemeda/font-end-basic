var name='windowName';
// function test () {
//   var name='lili';
//   console.log(this.name);
//   console.log('inner'+'====='+this);
// }
// test();
// console.log('outer'+this);
var test={
  name:'lily',
  fn:function (a,b) {
    console.log(this.name);
    console.log(this);
    console.log(a+b);
  }
};
test.fn();
console.log(window.test);
var useFn=test.fn;
var otherFn=useFn.bind(test);
console.log(otherFn);
useFn.bind(test,1,2)();
useFn(1,2);
//this永远指向最后调用它的那个对象
//创建一个新的函数，需要手动调用，将其this关键字设置为提供的值
/**
 * 函数调用的方法:
 * 1.函数调用
 * 2.函数作为方法调用
 * 3.构造函数调用
 * 4.作为函数方法调用函数（apply、call）
 */
