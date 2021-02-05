/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:32:55
 * @LastEditors: Knight
 * @LastEditTime: 2021-02-04 22:30:06
 */
const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
  },
  {
    minimize: false, //Mongoose 将保存空对象
    timestamps: true, //默认制动生成创建时间和更新时间
    versionKey: false,
  }
);

module.exports = model("tag", tagSchema);
