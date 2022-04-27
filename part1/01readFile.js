// fs 文件系统模块
const fs = require('fs')
fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    console.log(err)
    console.log('----')
    console.log(dataStr)
})