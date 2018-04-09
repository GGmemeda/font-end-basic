function animal() {
this.name='aa';
this.sex='女';
}
animal.prototype.name='bb';
animal.prototype.showName=function () {
    console.log(this.name);
    console.log(this);
    return '调用成功';
};
var newAnimal=new animal();
console.log(newAnimal);
console.log(newAnimal.name);
console.log(newAnimal.yourName);
console.log(newAnimal.prototype);
console.log(newAnimal.showName());
console.log("====================分割线======================");
console.log(animal.prototype);
console.log(animal.prototype===animal);
console.log(animal.constructor===animal);
console.log(animal.prototype.constructor===animal);
console.log(newAnimal.__proto__===animal.prototype);
function newOnly(innerObj) {
    const useObj={};
    useObj.__proto__=innerObj.prototype;
    innerObj.call(useObj);
    return typeof innerObj === 'object'? innerObj : useObj;;
}
console.log("====================分割线======================");
console.log(animal.prototype.__proto__===Object.prototype);//构造函数创建一个对象包装器
console.log("====================分割线======================");
console.log(newOnly(animal));
/**
 * 总结：
 * 1.属性查找是首先由自身属性开始查找，属性值找到就会终止，再通过__proto__进行查找,层层往上，如未找到者返回undefined
 * 2.new 的过程中，首先会赋予新对象自身属性，其次会根据显时prototype赋予隐式__proto__;
 * 3.实例对象没有prototype属性，只有函数对象才有prototype属性
 * 4.Fn.prototype.constructor===Fn
 * 5.实例.__proto__===Fn.prototype
 * 6.最后总结为newOnly方法
 */
