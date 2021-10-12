const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  // 开发环境时启动 source-map
  configureWebpack: config => {
    return {
      plugins: [ // 配置 gzip 压缩
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240, // 超过 10kb 则打包为 gzip
          deleteOriginalAssets: false // 是否删除源文件
        })
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://layfolk.ltd:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '计算机专业资料分享'
        return args
      })
  }
}
