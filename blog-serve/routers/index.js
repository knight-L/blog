/*
 * @Description:路由入口文件
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-20 18:56:05
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:15:49
 */
const fs = require("fs");

module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    } else {
      const route = require(`./${file}`);
      //route.prefix("/api");
      //作用：启动路由
      // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
      app.use(route.routes()).use(route.allowedMethods());
    }
  });
};
