
let person1 = {
  name: "first",
  sayHi(val1, val2) {
    console.log(val1 + val2);
    console.log(this.name);
  },
};

let person2 = {
  name: "second",
};

// Function.prototype.mybind = function (target) {
//   if (typeof this !== "function") {
//     throw new TypeError("Error");
//   }
//   target.fn = this;
//   let args = [...arguments].slice(1);
//   return function F() {
//     if(this instanceof F){
//         return new target.fn(...args,...arguments)
//     }
//     return target.fn.apply(target,args.concat(...arguments))
//   };
// };
// person1.sayHi.mybind(person2, 1, 2)();


Function.prototype.mybind = function(target = window){
  if(typeof this !== 'function'){
    throw new TypeError("not function");
  }
  target.fn = this;
  let args = [...arguments].slice(1);
  return function F(){
    if(this instanceof F) return new target.fn(...args,...arguments); //先判断是不是构造函数
    return target.fn.apply(target,[...args,...arguments]);
  }
}
person1.sayHi.mybind(person2, 1, 2)();