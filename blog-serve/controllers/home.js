/*
 * @Description:首页
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 22:08:56
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-28 22:11:17
 */
const path = require("path");

class HomeCtl {
  index(ctx) {
    ctx.body = "Hello Ear!";
  }
}

module.exports = new HomeCtl();
