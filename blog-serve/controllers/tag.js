/*
 * @Description:标签控制器
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:33:12
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-10 22:15:23
 */
const Tag = require("../schemas/tag");

const config = require("../config");

class TagsCtr {
  async find(ctx) {
    const { page = 1, pageSize = 10 } = ctx.query;
    const _page = Math.max(page * 1, 1);
    const _pageSize = Math.max(pageSize * 1, 1);
    const result = await Tag.find()
      .limit(_pageSize)
      .skip((_page - 1) * _pageSize)
      .sort({ createdAt: -1 }); //1：正序，-1：倒序
    const total = await Tag.countDocuments();
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
      name: { type: "string", required: true },
    });
    const { name } = ctx.request.body;
    const repeatedUser = await Tag.findOne({ name });
    if (repeatedUser) ctx.throw(409, "标签已存在！");
    await new Tag(ctx.request.body).save();
    ctx.body = {
      message: "创建成功！",
      status: 200,
    };
  }
}

module.exports = new TagsCtr();
