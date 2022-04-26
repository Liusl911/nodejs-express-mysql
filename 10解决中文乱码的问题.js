const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const str = `您请求的 URL 地址是 ${req.url}，您请求的 method 类型是 ${req.method}`
    // 为了防止中文显示乱码的问题，需设置响应头 Content-Type 的值为 text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})

server.listen(80, () => {
    console.log('Server in runing at http://127.0.0.1')
})