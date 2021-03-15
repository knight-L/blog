/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:27:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-15 13:48:16
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
