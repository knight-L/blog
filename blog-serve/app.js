/*
 * @Description:入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-20 18:23:35
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-28 23:20:11
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
const mongoose = require("mongoose");
const routing = require("./routers");
const bodyParser = require("koa-bodyparser")();
const config = require("./config");

// 创建一个Koa对象
const app = new Koa();

mongoose.connect(
  !config.mongodb.username || !config.mongodb.password
    ? `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
    : `mongodb://${config.mongodb.username}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
); //数据库链接
mongoose.connection.on("error", () => console.log("数据库连接出错!"));
mongoose.connection.once("open", () => console.log("数据库连接成功！"));

routing(app); //路由
app.use(bodyParser); //post请求的参数转为json格式返回

// 在端口3000监听:
app.listen(config.app.port, config.app.host, () => {
  console.log("项目启动在127.0.0.1:3000");
});
