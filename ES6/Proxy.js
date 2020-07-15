var proxy = new Proxy(target, handler);

`proxy 代理器，我理解为一层拦截网. 卡在请求和最终对象之间的一层网，用来做一些其他的操作`;

// Proxy作为其他对象的原型对象。

var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 1;
    },
  }
);

var obj = Object.create(proxy);
obj.time; // 1

//手写一个简单的 Proxy代理实例1.
let obj = {
  car: "保时捷",
};

let proxy = new Proxy(obj, {
  get: function (target, prop) {
    return prop in target ? target[prop] : new ReferenceError("error");
  },
});
console.log(proxy.car);

var person = {
  name: "XiaoLi",
};
var proxy = new Proxy(person, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("error");
    }
  },
});
proxy.name; // "XiaoLi"
proxy.age; // "error"

//get拦截，实现数组读取负数的索引
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    },
  };
  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}
let arr = createArray("a", "b", "c");
arr[-1];
