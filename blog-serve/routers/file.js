/*
 * @Description:文件路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-10 22:48:36
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-10 22:52:04
 */
const router = require("koa-router")({ prefix: "/api/v1.0/file" });
const { find, create } = require("../controllers/file");
const config = require("../config");
const auth = require("koa-jwt")({ secret: config.jwt.secret });

router.get("/", auth, find);

router.post("/", auth, create);

module.exports = router;
