// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 文件系统模块
const fs = require('fs')
// 1.3 导入 path 路径处理模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()
// 2.2 监听 web 服务去的 request 事件
server.on('request', (req, res) => {
    // 3.1 获取客户端请求的 url 地址
    //     /case1/index.html
    //     /case1/index.css
    //     /case1/index.js
    const url = req.url
    // 3.2 把请求的 url 地址"映射"为具体文件的存储路径
    // const fpath = path.join(__dirname, url)
    // 5.1 预定义一个空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '/case1/index.html')
    } else {
        // 在后端补全 /case1
        // /index.html
        // /index.css
        // /index.js
        fpath = path.join(__dirname, '/case1', url)
    }
    // 4.1 根据"映射"过来的文件路径读取文件
    fs.readFile(fpath, (err, dataStr) => {
        // 4.2 读取文件失败后，向客户端响应固定的“错误消息”
        if (err) return res.end('404 Not found.')
        // 4.3 读取文件成功后，将“读取到的内容”响应给客户端
        res.end(dataStr)
    })
})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server is running at http://127.0.0.1')
})