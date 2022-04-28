const express = require('express')
const app = express()

// 调用 express.static 方法，对外提供静态资源
// 直接访问 http://127.0.0.1/index.html ，存放静态资源的目录名 case1 不需要出现在 URL 中
// app.use(express.static('./case1'))
app.use(express.static('./files'))
// 对外提供多个静态资源，只要多次调用 express.static 方法即可，当路径下的资源名称一致时，顺序为第一个对外提供静态资源为先
// 挂载路径前缀 http://127.0.0.1/case1/index.html
app.use('/case1', express.static('./case1'))

app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1')
})