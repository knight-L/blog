module.exports = {
  outputDir: "blog-home",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
