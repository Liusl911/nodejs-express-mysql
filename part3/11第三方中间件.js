const express = require('express')
const app = express()

// 安装 npm install body-parser
// 导入第三方中间件
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: false }))
// 内置的 express.urlencoded 中间件其实就是基于 body-parser 封装的

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})