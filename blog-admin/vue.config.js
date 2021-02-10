/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:27:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:41:28
 */
module.exports = {
  publicPath: "./",
  outputDir: "blog-admin",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
