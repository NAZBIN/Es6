全局常量和线程安全
`从编程风格来考虑，在let和const之间优先选用const 原因如下：`
`1.js引擎会对const进行优化,提高效率`
`2.const比较符合函数式编程思想,运算不改变值`

字符串
`静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。`

解构赋值
`使用数组成员对变量赋值时，优先使用解构赋值`
function getFullName(user){
    const {username, userage} = user;
}
function getFullName({username,userage}){

}

对象
`单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。`
给对象添加属性
`对象尽量静态化，如果添加属性不可避免，要使用Object.assign()`
const a = {};
Object.assign(a,{ x: 3});
`对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写`

数组
`使用Array.from将类似数组的对象转为数组`
const foos = document.querySelectorAll(".foo");
const nodes = Array.from(foos);

函数
`箭头函数写立即执行函数`
(() => {
    console.log("...")
})();
const boundMethod = (...parms) => method.apply(this,parms); //箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。

`使用默认值语法设置函数参数的默认值`
function divide(opt = {}) {
    
}