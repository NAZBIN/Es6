function test(a, b, c, d) {
  let arg = Array.prototype.slice.call(arguments, 1);
  //arguments是类数组的方法，不能使用slice
  console.log(arg);
}

test("a", "b", "c", "d");

