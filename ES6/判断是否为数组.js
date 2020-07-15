//method 1 : instanceof (优)
`instanceof运算符可以用来判断某个构造函数的proptotype属性所指向的对象
是否存在于另外一个要检测的对象上的原型链上`;
使用语法;
object instanceof constructor;

const a = [];
console.log(a instanceof Array); //true

//method 2 : constructor (劣)
`实例化的数组拥有一个constructor属性，这个属性指向生成这个数组的方法``该方法不靠谱：cause->constructor可被改写`;
const arr = [];
console.log(arr.constructor.name === "Array");

//method 3 : Array.isArray() (最佳)
补充`增强健壮性 增强兼容性, 对isArray重新封装`;

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
