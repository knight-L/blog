/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:31:54
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-05 20:57:33
 */
const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: {
      type: String,
      select: true,
      default: "",
    },
    author: { type: Schema.Types.ObjectId, ref: "user" },
    content: {
      type: String,
      select: true,
      default: "",
    },
    description: {
      type: String,
      select: true,
      default: "",
    }, //简介
    tags: {
      type: [{ type: Schema.Types.ObjectId, ref: "tag" }], //type为tag文档的id
    },
    cover: {
      type: String,
      select: true,
      default: "",
    }, //封面
    browse: {
      type: Number,
      select: true,
      default: 0,
    }, //文章浏览次数
  },
  {
    minimize: false, //Mongoose 将保存空对象
    timestamps: true, //默认制动生成创建时间和更新时间
    versionKey: false,
  }
);

module.exports = model("article", articleSchema);
