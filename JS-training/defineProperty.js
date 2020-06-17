//Object.defineProperty(); //方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

const object = {};

Object.defineProperty(object, "property1", {
  value: 21,
  writable: true,
});

console.log(object.property1);

object.property1 = 2421;

console.log(object.property1);
