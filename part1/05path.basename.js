const path = require('path')

const fpath = './a/b/c/d/index.html'

// 获取路径中的文件名称包含扩展名 index.html
var fullName = path.basename(fpath)
console.log(fullName)
// index.html

// 获取路径中的文件名称不包含扩展名 index
var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
// index