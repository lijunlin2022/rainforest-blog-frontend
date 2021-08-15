const compressionPlugin = require("compression-webpack-plugin");

module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 你请求的第三方接口
        changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          // 路径重写，
          "^/api": "", // 替换target中的请求地址，也就是说 /api=/target，请求 /target 这个地址的时候直接写成 /api即可。
        },
      },
    },
  },
  // 修改  index.html 里面的 html-webpack-plugin 的值
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "rainforest 的资料分享";
      return args;
    });
  },
  // 配置 gzip 压缩
  configureWebpack: () => {
    return {
      plugins: [
        new compressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false,
        }),
      ],
    };
  },
  productionSourceMap: true,
};
