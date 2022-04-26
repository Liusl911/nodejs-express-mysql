
// 使用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象
const m = require('./15module.exports对象')

// 使用 require() 方法导入自定义模块时，导入的结果，永远以 module.exports 指向的对象为准
console.log(m)