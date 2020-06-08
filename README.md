# quick-mpx-weapp-mall

基于 mpx 快速搭建的商城小程序。


mpx 升级到2.5

版本记录[]

## Dev

```bash
# install dep
npm i

# for dev
npm run watch

# for online
npm run build
```

npm script 规范 [build|watch]:[dev|prod]:[cross|web|none]

build 默认 prod，watch 默认 dev。另单独提供了 build:dev 和 watch:prod，用于单次构建分析看未压缩代码分析问题和持续压缩代码便于大体积项目真机调试。

建议自行调整 cross 的目标。npm-run-all 是为了兼容 windows 下无法同时执行两个 npm script，若不需要转 web 平台，可考虑去掉。
