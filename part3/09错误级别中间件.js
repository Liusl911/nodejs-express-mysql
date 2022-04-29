const express = require('express')
const app = express()

app.get('/', (req, res) => {
    throw new Error('不好意思，发生了错误！')
    res.send('Home page.')
})

// 错误中间件
app.use((err, req, res, next) => {
    console.log(err.message)
    res.send('Error: ' + err.message)
})
// 注意：错误级别中间件，必须注册在所有路由之后

app.listen(80, () => {
    console.log('http://127.0.0.1')
})