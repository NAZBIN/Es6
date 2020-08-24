var Observer = (function () {
  var __message = {};
  return {
    //注册信息接口
    regist: function (type, fn) {
      typeof __message[type] === "undefined"
        ? (__message[type] = [fn])
        : __message[type].push(fn);
    },
    //发布信息接口
    fire: function (type, args) {
      if (!__message[type]) return;
      var events = {
          type: type, //消息类型
          args: args || {}, //数据
        },
        i = 0;
      len = __message[type].length;
      for (; i < len; i++) {
        //依次执行注册消息的fns.
        __message[type][i].call(this, events);
      }
    },
    //移除信息接口
    remove: function (type, fn) {
      if (Array.isArray(__message[type])) {
        var i = __message[type].length - 1;
        for (; i < len; i++) {
          //依次执行注册消息的fns.
          __message[type][i] === fn && __message[type].splice(i, 1);
        }
      }
    },
  };
})();

var Student = function (result) {
  var self = this;
  self.result = result;
  self.say = function () {
    console.log(self.result);
  };
};
Student.prototype.answer = function (question) {
  Observer.regist(question, this.say);
};

var Teacher = function () {};

Teacher.prototype.ask = function (question) {
  console.log(`the question is: ${question}`);
  Observer.fire(question);
};

var Tom = new Student("Tom answer the question");
var John = new Student("John answer the question");
var Cherry = new Student("Cherry answer the question");

//学生订阅
Tom.answer("什么是设计模式");
Tom.answer("写一下观察者模式");
John.answer("什么是设计模式");
Cherry.answer("什么是设计模式");

//老师发布
var teacher = new Teacher();
teacher.ask("什么是设计模式");
teacher.ask("写一下观察者模式");
