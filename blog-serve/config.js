/*
 * @Description:配置信息
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 22:41:22
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-30 15:44:28
 */
// module.exports = {
//   connectionStr: "mongodb://localhost:27017/ear-blog", //数据库连接字符串
//   baseURL: "127.0.0.1", //项目启动地址
//   host: 3000, //项目启动端口
// };

const config = {
  admin: {
    username: "admin",
    password: "admin",
    name: "EAR",
  },
  jwt: {
    secret: "knight_ear",
    expiresIn: "7d", //以秒为单位60，"2 days"，"10h"，"7d"
  },
  mongodb: {
    host: "127.0.0.1",
    database: "ear-blog",
    port: 27017,
    username: "", //非必填
    password: "", //非必填
  },
  app: {
    host: "127.0.0.1",
    port: 3000,
    routerBaseApi: "/api/1.0",
  },
};

module.exports = config;
