// 1. express.static()
// 2. express.json()
// 3. express.urlencoded()

const express = require('express')
const app = express()

// 通过 express.json() 中间件，解析表单中的 JSON 格式数据
app.use(express.json())

// 通过 express.urlencoded() 中间件，解析表单中的 url-encoded 格式数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.body 属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器端，可以通过 req.body 属性，来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})