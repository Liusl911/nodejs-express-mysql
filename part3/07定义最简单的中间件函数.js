const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = function(req, res, next){
    console.log('这是一个最简单的中间件函数')
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 全局生效中间件：客户端发起任何请求，到达服务器之后，都会触发的中间件
// 将 mw 注册为全局生效的中间件
app.use(mw)

// 简化中间件函数
// app.use((req, res, next) => {
//     console.log('这是一个最简单的中间件函数')
//     next()
// })

app.get('/', (req, res) => {
    console.log('调用了 / 这个路由')
    res.send('Home page.')
})
app.get('/user', (req, res) => {
    console.log('调用了 /user 这个路由')
    res.send('User page.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})