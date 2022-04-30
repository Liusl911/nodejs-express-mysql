const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现步骤
    // 1. 得到函数的名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = {name: 'zs', age: 18}
    // 3. 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

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