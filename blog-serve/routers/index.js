/*
 * @Description:路由入口文件
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-20 18:56:05
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-28 22:18:20
 */
const fs = require("fs");

module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    } else {
      const route = require(`./${file}`);
      //作用：启动路由
      // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
      app.use(route.routes()).use(route.allowedMethods());
    }
  });
};

// router.get("/", (ctx, next) => {
//   ctx.body = "Hello koa";
// });

// router.get("/news", (ctx, next) => {
//   ctx.body = "新闻page";
// });
