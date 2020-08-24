// function sqrt(arg){
//     return Math.sqrt(arg);
// }

// console.log(sqrt(4));

//使用记忆函数, 结果会缓存在cache里
const sqrtOfM = (arg) => {
  sqrtOfM.cache = sqrtOfM.cache || {};
  if (!sqrtOfM.cache[arg]) sqrtOfM.cache[arg] = Math.sqrt(arg);

  return sqrtOfM.cache[arg];
};

//进阶：使用独立的一个函数来记忆任何函数。
function memorize(fn) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args]
      ? fn.cache[args]
      : (fn.cache[args] = fn.apply(this, args));
  };
}

//如何使用 ❓

memorizeSqrt = memorize(sqrtOfM);
console.log(memorizeSqrt(4));

//将memorize添加到原型链中,让每个方法都得以继承。

Function.prototype.memorize = function () {
  let self = this;
  return function () {
    let args = Array.prototype.slice.call(arguments);
    self.cache = self.cache || {};
    return self.cache[args]
      ? self.cache[args]
      : (self.cache[args] = self(args));
  };
};

const memorizedSqrt = sqrtOfM.memorize();
console.log(memorizeSqrt(9));
