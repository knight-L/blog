/*
 * @Description:入口文件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2020-12-20 18:23:35
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-06 18:13:37
 */
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
const mongoose = require("mongoose");
const routing = require("./routers");
const koaBody = require("koa-body");
const parameter = require("koa-parameter");
const error = require("koa-json-error");
const cors = require("koa2-cors");
const RateLimit = require("koa2-ratelimit").RateLimit;
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

// 前后端分离，设置跨域
app.use(cors());
//请求频率限制
const limiter = RateLimit.middleware({
  interval: { min: 15 }, // 15 minutes = 15*60*1000
  max: 100, // limit each IP to 100 requests per interval
});

app.use(limiter);
app.use(koaBody()); //post请求的参数转为json格式返回
app.use(
  error({
    postFormat: (err, { stack, ...rest }) => {
      return process.env.NODE_ENV === "production" ? rest : { stack, ...rest };
    },
  })
); //异常和参数的处理

parameter(app); //参数校验
routing(app); //路由

// 在端口3000监听:
app.listen(config.app.port, config.app.host, () => {
  console.log(
    `${process.env.NODE_ENV}--项目启动在${config.app.host}:${config.app.port}`
  );
});
