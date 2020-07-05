function defineReactive(data,key,val){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            return  val
        },
        set:function(newVal){
            if(val === newVal) return
            val = newVal
        }
    })
}
//getter中收集依赖，setter中触发依赖

//数据发生变化时，会通知组件，组件再通过虚拟DOM重新渲染.

//这里,解耦。把依赖收集的代码封装成一个类
class Dep{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub);
    }
    depend(){
        if(window.target){
            this.addSub(window.target) //假设依赖是个函数保存在window.target上
        }
    }
    //...
}

function defineReactive(data,key,val){
    let dep = new Dep();
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            dep.depend()
            return  val
        },
        set:function(newVal){
            if(val === newVal) return
            val = newVal
        }
    })
}