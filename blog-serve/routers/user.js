/*
 * @Description:用户相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-29 13:57:31
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 22:31:47
 */
const router = require("koa-router")({ prefix: "/user" });
const { find, create, login } = require("../controllers/user");
const config = require("../config");
const auth = require("koa-jwt")({ secret: config.jwt.secret });

router.get("/", auth, find);

router.post("/", auth, create);

router.post("/login", login);

module.exports = router;
