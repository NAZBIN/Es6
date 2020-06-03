//`这三个方法都是用来重定义this这个对象的`

let obj = {
    name:"Tom"
}

function test(){
    console.log(this.name)
}
test.apply(obj);

function newTest(fun,args){
    const o = Object.create(fun.protot)
}
