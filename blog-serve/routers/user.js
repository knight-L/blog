/*
 * @Description:用户相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-29 13:57:31
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 23:17:04
 */
const router = require("koa-router")({ prefix: "/api/v1.0/user" });
const { find, create, login } = require("../controllers/user");
const config = require("../config");
const auth = require("koa-jwt")({ secret: config.jwt.secret });

router.get("/", auth, find);

router.post("/", auth, create);

router.post("/login", login);

module.exports = router;
