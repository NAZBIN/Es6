//第一种 //Parent.vue
<child @hook:mount="dosomething"></child>

dosomething(){ console.log("父组件监听到子组件mounted函数") } //child.vue
mounted(){ consol.log("子组件触发mounted钩子函数") }
