/*
 * @Description:用户控制器
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:28:20
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-06 22:49:00
 */
const User = require("../schemas/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const dayjs = require("dayjs");

dayjs.locale("zh-cn");

class UsersCtr {
  async find(ctx) {
    const { page = 1, pageSize = 10 } = ctx.query;
    const _page = Math.max(page * 1, 1);
    const _pageSize = Math.max(pageSize * 1, 1);
    const result = await User.find({ username: new RegExp(ctx.query.q) })
      .limit(_pageSize)
      .skip((_page - 1) * _pageSize)
      .sort({ createdAt: -1 }); //1：正序，-1：倒序
    const total = await User.countDocuments();
    const totalPage = Math.ceil(total / _pageSize);

    ctx.body = {
      data: result,
      page: _page,
      pageSize: _pageSize,
      total,
      totalPage,
    };
  }

  async create(ctx) {
    ctx.verifyParams({
      username: { type: "string", required: true },
      password: { type: "string", required: true },
    });
    const { username } = ctx.request.body;
    const repeatedUser = await User.findOne({ username });
    if (repeatedUser) ctx.throw(409, "用户已存在");
    await new User(ctx.request.body).save();
    ctx.body = {
      message: "创建成功！",
      status: 200,
    };
  }

  // 登录
  async login(ctx) {
    const { username, password } = ctx.request.body;
    const { user, isValid } = await User.findUser(username, password);

    if (!isValid) {
      ctx.throw(422, "用户名或用户密码错误！");
    }

    const token = jwt.sign({ _id: user._id, username }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    ctx.body = { token };
  }

  // 检查权限，只允许修改本人信息
  //   async checkOwner(ctx, next) {
  //     if (ctx.params.id !== ctx.state.user._id) {
  //       ctx.throw(403, "没有权限");
  //     }
  //     await next();
  //   }
}

module.exports = new UsersCtr();
