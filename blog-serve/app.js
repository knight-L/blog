/*
 * @Description:入口文件
 * @Version: 1.0
 * @Autor: Knight
 * @Date: 2020-12-20 18:23:35
 * @LastEditors: Knight
 * @LastEditTime: 2020-12-20 19:14:01
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
const fn_router = require("koa-router");

// 创建一个Koa对象表示web app本身:
const app = new Koa();
const router = fn_router();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, koa2!</h1>";
});

// 在端口3000监听:
app.listen(3000, "192.168.0.6", () => {
  console.log("项目启动在192.168.0.6:3000");
});
