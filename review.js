//call

// Function.prototype.mycall = function (target = window) {
//   target.fn = this;
//   let args = [...arguments].slice(1);
//   let result = null;

//   result = args ? target.fn(...args) : target.fn();
//   delete target.fn;
//   return result;
// };
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


Function.prototype.mycall = function(target = window){
  target.fn = this;
  let args = [...arguments].slice(1);
  let result = args ? target.fn(...args) : target.fn();
  delete target.fn;
  return result;
}

Function.prototype.myapply = function(target = window){
  target.fn = this;
  let args = arguments[1];
  let result = args? target.fn(...args) : contxt.fn();
  return result;
}

person1.sayHi.mycall(person2, 1, 2);

// Function.prototype.myapply = function (target = window) {
//   target.fn = this;
//   let args = arguments[1];
//   let result = null;

//   result = args ? target.fn(...args) : target.fn();
//   delete target.fn;
//   return result;
// };

person1.sayHi.myapply(person2, [1, 2]);




function foo(){
  var a = 1
  var b = a
  a = 2
  console.log(a)
  console.log(b)
}
foo()