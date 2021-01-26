/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:27:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-25 12:12:33
 */
module.exports = {
  publicPath: "./",
  outputDir: "blog-home",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
