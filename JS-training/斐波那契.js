function fibonacci(num) {
  if (num == 1 || num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(4));

//高级进阶记忆函数版本的斐波那契数列.
//对速度进行极致优化.

const fibonaqie = (num) => {
  if (num == 1 || num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

Function.prototype.memorize = function () {
  const self = this;
  return function () {
    let args = Array.prototype.slice.call(arguments);
    self.cache = self.cache || {};
    return self.cache[args]
      ? self.cache[args]
      : (self.cache[args] = self(args));
  };
};

const fibonacciMe = fibonaqie.memorize();
console.log(fibonacciMe(4));
