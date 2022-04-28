const express = require('express')
const app = express()

// 1. 导入自定义路由模块
const router = require('./06router')
// 2. 注册路由模块
// app.use(router)

// 为路由模块添加前缀
app.use('/api', router)

// app.use(express.static('./case1'))
// 注意：app.use() 函数的作用，就是用来注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1')
})