const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// cors 第三方中间件 安装： npm install cors
// 使用 cors 中间件解决跨域问题
const cors = require('cors')
// 注册 cors 中间件，注意：必须在所有路由注册
app.use(cors())

const apiRouter = require('./16apiRouter')
app.use('/api', apiRouter)

app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1')
})