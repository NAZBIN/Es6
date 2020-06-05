//mixins.js
export function mixins(...lists) {
  return function (target) {
    Object.assign(target.prototype, ...lists);
  };
}

//main.js
import { mixins } from "./mixins";

const Foo = {
  foo() {
    console.log("foo");
  },
};
//@mixins(Foo)
//class Myclass {}
//let obj = new Myclass();
//obj.foo();


`装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。`