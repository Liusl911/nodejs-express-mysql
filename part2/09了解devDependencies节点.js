// 核心依赖包：dependencies 节点记录 项目开发阶段 和 项目上线后 都会用到的包
// 开发依赖包：devDependencies 节点记录只在 项目开发阶段 会用到的包 例如：
// npm i webpack --save-dev 或者如下简写
// npm i webpack -D

// 全局包安装
// npm i xxx -g
// 全局包卸载
// npm uninstall xxx -g
// 注意：
// 1. 只有 工具性质的包 才有全局安装的必要性。因为它们提供了好用的终端命令。
// 2. 判断某个包是否需要全局安装后才能使用，可以 参考官方提供的使用说明（例如：'https://www.npmjs.com/'） 即可