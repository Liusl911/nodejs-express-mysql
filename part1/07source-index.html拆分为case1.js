/*
    提取source中index.html
*/

const fs = require('fs')
const path = require('path')

// 正则匹配 <style></style> <script></script>
// \s表示任意空白字符 \S表示任意非空白字符 *表示匹配任意多个
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
// reg.exec() 提取符合正则的内容 匹配得到返回一个数组，数组第一项即为匹配到的内容；匹配不带返回null。

// 读取source文件夹中的index.html文件
fs.readFile(path.join(__dirname, './source/index.html'), 'utf8', function (err, dataStr) {
    if (err) return console.log('读取文件失败！' + err.message)
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 定义处理 css 样式方法
function resolveCSS(htmlStr) {
    // 使用正则提取所需内容
    var r1 = regStyle.exec(htmlStr)
    var newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // 将newCss写入case1文件夹中的index.css文件中
    fs.writeFile(path.join(__dirname, './case1/index.css'), newCss, function (err) {
        if (err) return console.log('写入样式文件失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}

// 定义处理 js 脚本方法
function resolveJS(htmlStr) {
    // 使用正则提取所需内容
    var r1 = regScript.exec(htmlStr)
    var newJs = r1[0].replace('<script>', '').replace('</script>', '')
    // 将newJs写入case1文件夹中的index.js文件中
    fs.writeFile(path.join(__dirname, './case1/index.js'), newJs, function (err) {
        if (err) return console.log('写入脚本文件失败！' + err.message)
        console.log('写入脚本文件成功!')
    })
}

// 定义处理 html 标签方法
function resolveHTML(htmlStr) {
    // 通过replace将 style 和 script 替换成link、script
    var newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
    // 将newHtml写入case1文件夹中的index.html文件中
    fs.writeFile(path.join(__dirname, './case1/index.html'), newHtml, function (err) {
        if (err) return console.log('写入html文件失败！' + err.message)
        console.log('写入html文件成功！')
    })
}