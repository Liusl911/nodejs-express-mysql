const express = require('express')
const router = express.Router()

// 定义 GET 接口
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET 请求成功！',
        data: query
    })
})

// 定义 POST 接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体包含 url-encoded 格式的数据
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功！'
    })
})

// 简单请求：GET、POST、HEAD为简单请求，只发生一次请求
// 预检请求：GET、POST、HEAD以外的为预检请求
// 预检请求会发生两次请求，在真正请求之前，会先发起OPTION请求，预检成功之后才会发起真正的请求


module.exports = router