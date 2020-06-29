var mySymbol = Symbol("my symbol");

var o = new Object();
//使用symbol.iterator来定义for of 在对象上的行为

o[Symbol.iterator] = function () {
  var v = 0;
  return {
    next: function () {
      return { value: v++, done: v > 10 };
    },
  };
};

for (let v of o) {
  console.log(v);
}
