// path 路径处理模块
const path = require('path')
const fs = require('fs')

// path.join() 拼接路径
console.log(path.join('a', './b/c', '../', 'd', 'e'))
// ../过滤上一级
// /a/b/d/e
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr){
    if(err){
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})