/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-10 19:45:24
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-10 21:16:13
 */
/*
 * @Description:用户
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:25:06
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-10 19:34:26
 */
const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

dayjs.locale("zh-cn");

const fileSchema = new Schema(
  {
    // __v: {
    //   type: Number,
    //   select: false,//select 为 false 时查询时默认隐藏
    // },
    fileName: {
      type: String,
      required: true,
      select: true,
    },
    fileURI: {
      type: String,
      required: true,
      select: true,
    },
    thumbnailURI: {
      type: String,
      required: true,
      select: true,
    },
  },
  {
    minimize: false, //Mongoose 将保存空对象
    timestamps: true, //默认自动生成创建时间和更新时间
    versionKey: false,
    toJSON: {
      transform: function (doc, ret, options) {
        ret.createdAt = dayjs(doc.createdAt).format("YYYY-MM-DD HH:mm");
        ret.updatedAt = dayjs(doc.updatedAt).format("YYYY-MM-DD HH:mm");
        return ret;
      },
    },
  }
); //如果设置了 timestamps 选项, mongoose 会在你的 schema 自动添加 createdAt 和 updatedAt 字段， 其类型为 Date。

module.exports = model("file", fileSchema);
