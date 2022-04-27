const innoTools = require('./开发属于自己的包/inno-tools')

const dtStr = innoTools.dtFormat(new Date())
console.log(dtStr)
console.log('---------------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = innoTools.htmlEscope(htmlStr)
console.log(str)
console.log('---------------')

const str2 = innoTools.htmlunEscope(str)
console.log(str2)