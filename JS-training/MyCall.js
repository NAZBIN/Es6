//都是改变this指向。作用相同，传参不同，bind返回的是一个函数需要再执行一次。

Function.prototype.MyBind = function (context = window) {
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

let person1 = {
  name: "Tom",
  sayHi: function () {
    console.log(this.name);
  },
};

let person2 = {
  name: "Daming",
};
const name = "window";

person1.sayHi.call(person2); //Daming.
console.log(person2.name)

//  ---------------手动实现 call 方法(无参)----------------
// Function.prototype.MyCall = function (context = window) {
//   context.fn = this;
//   let result = context.fn();
//   delete context.fn;
//   return result;
// };

// person1.sayHi.MyCall(person2);

//  ---------------手动实现 call 方法(有参)----------------

Function.prototype.mycall = function (context = window) {
  context.fn = this;
  console.log(arguments);
  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  delete context.fn;
  return result;
};


function basicMessage(name, age) {
  this.name = name;
  this.age = age;
}

function entity(name, age) {
  basicMessage.mycall(this, name, age);
  this.type = "animal";
}
console.log(new entity("tom", 16).name);


