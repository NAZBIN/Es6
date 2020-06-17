//call

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

Function.prototype.mycall = function (context = window) {
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = null;

  result = args ? context.fn(...args) : context.fn();
  delete context.fn;
  return result;
};

person1.sayHi.mycall(person2, 1, 2);

Function.prototype.myapply = function (context = window) {
  context.fn = this;
  let args = arguments[1];
  let result = null;

  result = args ? context.fn(...args) : context.fn();
  delete context.fn;
  return result;
};

person1.sayHi.myapply(person2, [1, 2]);
