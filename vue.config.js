module.exports = {
  // 开发环境时启动 source-map
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined
  }
}
