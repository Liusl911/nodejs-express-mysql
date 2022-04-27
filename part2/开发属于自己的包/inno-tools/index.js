// 这是包的入口文件

const date = require('./src/dtFormat')
const escope = require('./src/htmlEscope')

module.exports = {
    ...date,
    ...escope
}