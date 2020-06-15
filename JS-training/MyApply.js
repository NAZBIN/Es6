Function.prototype.myapply = function (context = window) {
  context.fn = this;
  var result = null;
  if (arguments[1]) {
      console.log("1");
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

function basicMessage(...args) {
  this.name = args[0];
  this.age = args[1];
}

function entity(...args) {
  basicMessage.myapply(this, [...args]);
  this.type = "animal";
}
console.log(new entity("tom", 16).name);
