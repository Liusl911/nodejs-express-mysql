// 在自定义模块中，可以使用 module.pexorts 对象，将模块内的成员共享出去，供外界使用
// 自定义模块，默认 module.exports 对象为 {}

module.exports.username = 'zs'

module.exports.sayHello = function(){
    console.log('Hello')
}

const age = 11
module.exports.age = age

// 让 module.exports 指向一个全新的对象
module.exports = {
    nickname: 'ls',
    sayHi: function(){
        console.log('Hi')
    }
}