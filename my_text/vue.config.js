'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: 'Cindy/',
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './src/style/index.scss'
          ]
        })
        .end()
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    }
  }
}