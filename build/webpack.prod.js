// webpack.prod.js
const {merge} = require('webpack-merge')
const basicConfig = require('./webpack.base')
module.exports = merge(basicConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
})