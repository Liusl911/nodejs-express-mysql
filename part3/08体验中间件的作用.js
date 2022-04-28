const express = require('express')
const app = express()

// 中间件5个注意事项
// 1. 一定要在路由之前注册中间件
// 2. 客户端发送过来的请求，可以连续调用多个中间件进行处理
// 3. 执行完中间件的业务代码之后，不要忘记调用 next() 函数
// 4. 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码
// 5. 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象

// 多个中间件之间，共享一份 req 和 res，可为后面的路由的 req 或 res 对象添加自定义属性或方法
app.use((req, res, next) => {
    // 获取请求到达服务器的时间
    const time = Date.now()
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的路由
    req.startTime = time
    next()
})
app.use((req, res, next) => {
    console.log(req.startTime)
    next()
})

// 局部生效中间件 不使用app.use()
const mw1 = function(req, res, next){
    console.log('调用了局部生效的中间件1')
    next()
}
const mw2 = function(req, res, next){
    console.log('调用了局部生效的中间件2')
    next()
}

app.get('/', (req, res) => {
    res.send('Home page.' + req.startTime)
})
app.get('/user', mw1, (req, res) => {
    res.send('User page.' + req.startTime)
})
// 调用多个局部中间件
app.get('/more', mw1, mw2, (req, res) => {
    res.send('More page.' + req.startTime)
})
app.get('/about', [mw1, mw2], (req, res) => {
    res.send('About page.' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})