const express = require('express')
const app = express()

const customBodyParser = require('./14custom-body-parser')
// 自定义解析表单数据中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})