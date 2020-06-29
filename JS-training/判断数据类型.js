let arr = [];
console.log(typeof arr); //object   `typeof 不能判断数组和对象`
console.log(arr instanceof Array); //可
console.log(Array.isArray(arr)); //可
console.log(arr.constructor.name == "Array"); //可 但constructor可被改写
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
