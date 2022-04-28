// express 路由
// 三部分组成：请求类型、请求的URL地址、处理函数
// 客户端的请求 与 服务器处理函数 的映射关系
// 路由匹配顺序：依次从上到下

const express = require('express')
const app = express()

// 挂载简单的路由
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.post('/', (req, res) => {
    res.send('post request')
})

app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1')
})