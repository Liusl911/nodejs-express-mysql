// node.js 内置模块
const qs = require('querystring')

const bodyparser = (req, res, next) => {
    let str = ''

    // 监听 req 的 data 事件，有可能被多次调用，分批次接收客户端请求的数据
    req.on('data', (chunk) => {
        str += chunk
    })

    // 监听 req 的 end 事件，客户端请求的数据都接收完毕
    req.on('end', () => {
        console.log(str)
        const body = qs.parse(str)
        console.log(body)
        req.body = body
        next()
    })
    
}

module.exports = bodyparser