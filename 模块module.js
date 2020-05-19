`在ES6之前，最主要的模块化方案有Common JS 和 AMD两种`
`Common JS 可用解构赋值的方式获取模块中需要的方法，并在运行时加载。`
let {start, exists, readfile } = require('fs');  //对象的方式.运行时加载
`ES6的模块不是对象，而是通过export命令显示指定输出的代码，再通过import输入`
import {start, exists, readfile} from 'fs';  //属于编译时加载，效率更高
这种方式同时也使得静态分析成为可能,比如类型检查
而且,ES6这种模块方式支持值的动态更新,CommonJS输出的只是缓存
简而言之,ES6输出的是值的引用,CommonJS输出的是值的拷贝



//import export 这种方式。导出对象时可以通过as重命名
function v1() {  }
function v2() {  }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

