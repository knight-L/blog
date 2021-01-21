/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-25 21:27:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-19 21:26:11
 */
module.exports = {
  outputDir: "blog-home",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
