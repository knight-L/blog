/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:27:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 15:45:29
 */
const WebpackBar = require('webpackbar');

module.exports = {
  publicPath: "./",
  outputDir: "blog-home",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new WebpackBar()
    ]
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
