// 1. 优先从缓存中加载（require多次，只会执行一次，第一次已存缓存中）

// 2. 内置模块的加载优先级最高

// 3. 自定义模块的加载机制，必须以 ./ 或 ../ 开头的路径标识符，若无指定，则会当做 内置模块 或 第三方模块 进行加载
// 如果省略了后缀名，其加载顺序：
// ·按照确切的文件名进行加载
// ·补全 .js 扩展名进行加载
// ·补全 .json 扩展名进行加载
// ·补全 .node 扩展名进行加载
// ·加载失败，终端报错

// 4. 第三方模块加载机制，若当前目录找不到，则会一直往父级目录去找，若一直找不到，直到根目录为止
// 例如：C/User/Project/test.js
// C/User/Project/module/
// C/User/module/
// C/module/

// 5. 目录作为模块
// 当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
// ·在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
// ·如果目录没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件
// ·如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error:Cannot find module 'xxx'