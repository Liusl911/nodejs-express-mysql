const path = require('path')

const fpath = './a/b/c/d/index.html'

// 获取路径文件扩展名 .html
var extName = path.extname(fpath)
console.log(extName)