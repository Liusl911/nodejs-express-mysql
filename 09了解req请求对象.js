const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    // req.url 是客户端请求的 url 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
server.listen(80, () => {
    console.log('Server is runing at http://127.0.0.1')
})