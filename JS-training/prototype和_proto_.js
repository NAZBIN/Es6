`每个函数都有prototype属性,prototype上面存放着一些公用的方法和属性`
`对象拥有_proto_属性， obj._proto_ = Function.prototype (指向该对象构造函数的原型属性)`
`Function.prototype._proto_ = Object.prototype`
`obj._proto_ = Function.prototype 而 Function.prototype._proto_ = Object.prototype 这样就形成了一条原型链`
`这也是为什么被创建的对象能使用toSring的原因，因为存在原型链`