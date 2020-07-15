`async内部的return返回的值会成为.then方法回调的参数`

`async内部抛出的错误，会导致返回的Promise为Reject状态< 抛出的错误对象会被catch
回调函数接收`

`async中任何一个await语句后面的Promise变为reject，那么整个async函数就会中断执行`

使用async时候的注意点

`await后面的Promise对象的运行结果可能是reject，所以最好把await命令放在try...catch代码块中  或者直接在await后面的Promise接上一个catch方法用来处理错误`

Demo按顺序完成异步操作
`实际开发中，经常遇到一组异步操作，现需要按照顺序完成。比如依次远程读取一组URL，然后按照读取的顺序输出结果`

async写法
`1.顺序继发`
function logInOrder(urls) {
    for(const url of urls) {
        const response = await fetch(url);
        console.log(await response.text());
    }
}
`2.顺序并发`
function logInOrder(urls) {
    const textPromises = urls.map(async (url) => {
        const response = await fetch(url);
        return response.text();
    })
    //顺序依次输出
    for(const result of textPromises) {
        console.log(await result);
    }
}

//异步按顺序完成一组操作-> 顺序继发 和 顺序并发(更优)

function logInOrder(urls){
    for(const url of urls){
        const response = await fetch(url);
        console.log(await response.text());
    }
}

function logInorder(urls){
    const resWrapper = urls.map(async(url) => {
        const response = await fetch(url);
        return response.text();
    })
    //顺序以此输出
    for(const result of textPromises){
        console.log(await result);
    }
}