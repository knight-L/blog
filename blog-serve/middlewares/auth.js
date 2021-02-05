/*
 * @Description:jwt验证中间件
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-30 15:42:10
 * @LastEditors: Knight
 * @LastEditTime: 2021-01-30 15:45:38
 */
const jwt = require("jsonwebtoken");
const config = require("../config");

const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");
  try {
    const user = jwt.verify(token, config.jwt.secret);
    ctx.state.user = user;
  } catch (error) {
    ctx.throw(401, error.message);
  }
  await next();
};

module.exports = auth;
