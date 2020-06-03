// `回调函数就是把函数作为参数传递给另一个函数，当该函数在满足一定的条件时调用该参数函数`
// `常见的回调形式有：参数作为函数, Promise, es6的Generator生成器 async await语法糖(promise和协程) `
//实际应用: 比如要先下载文件再做处理.
//例子

const fun = function(callback, timeout){
    setTimeout(callback,timeout);
}

fun(() => {console.log('hello')},4000);
console.log("我没有被阻塞");