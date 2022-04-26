// exports 和 module.exports 指向同一个对象
// 最终共享的结果，还是以 module.exports 指向的对象为准

const nickname = 'ls'
module.exports.nickname = nickname

const username = 'zs'
exports.username = username
exports.sayhello = function(){
    console.log('Hello')
}

// 注意：当 exports 指向的对象改变了，仍然以 module.exports 指向的对象为准

// exports = {
//     a: '1230',
//     b: '4560'
// }