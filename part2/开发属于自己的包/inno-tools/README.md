## 安装
```
npm install inno-tools
```

## 导入
```js
const innoTools = require('inno-tools')
```

## 格式化时间
```js
// 调用 dtFormat 对时间进行格式化
const dtStr = innoTools.dtFormat(new Date())
// 结果 2022-04-27 15:15:15
console.log(dtStr)
```

## 转义 HTML 中的特殊字符
```js
// 待转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscope 方法进行转换
const str = innoTools.htmlEscope(htmlStr)
// 结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML 中的特殊字符
```js
// 调用 htmlunEscope 方法进行还原
const str2 = innoTools.htmlunEscope(str)
// 结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC