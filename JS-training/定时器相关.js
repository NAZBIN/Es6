// 试实现注释部分的Javascript代码，可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）：

var Obj = function (msg) {
  this.msg = msg;
  this.shout = function () {
    console.log(this.msg);
  };
  this.waitAndShout = function () {
    //隔五秒钟后执行上面的shout方法
    let self = this;
    setTimeout(()=>{
        self.shout()
    },500)
  };
  return this;
};

var obj = Obj('wenbin');
obj.waitAndShout();

