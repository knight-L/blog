/*
 * @Description:用户相关路由
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-29 13:57:31
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 11:24:58
 */
const router = require("koa-router")({ prefix: "/user" });
const { find, create, login } = require("../controllers/user");

router.get("/", find);

router.post("/", create);

router.post("/login", login);

module.exports = router;
