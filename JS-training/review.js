let obj = {
  car: "保时捷",
};

let proxy = new Proxy(obj, {
  get: function (target, prop) {
    return prop in target ? target[prop] : new ReferenceError("error");
  },
});
console.log(proxy.car);
