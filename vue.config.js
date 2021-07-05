module.exports = {
  lintOnSave: false, // 关闭eslint语法检查
  devServer: {
    // 代理
    proxy: {
      "/api": {
        target: "https://www.ximalaya.com", // 目标地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "", // rewrite path
        },
      },
    },
  },
};
