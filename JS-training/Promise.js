function myPromise(constructor) {
  const self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;

  function reslove(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  try {
    constructor(reslove, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function (fulfilled, rejected) {
  let self = this;
  switch (self.status) {
    case "resolved":
      fulfilled(self.value);
      break;
    case "rejected":
      fulfilled(self.reason);
      break;
    default:
  }
};

var p = new myPromise(function (resolve, reject) {
  resolve(1);
});

p.then((res) => console.log(res));
