/*
 * @Description:用户
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:25:06
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-09 22:09:52
 */
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dayjs = require("dayjs");

dayjs.locale("zh-cn");

const userSchema = new Schema(
  {
    // __v: {
    //   type: Number,
    //   select: false,
    // },
    name: {
      type: String,
      select: true,
    },
    username: {
      type: String,
      required: true,
      select: true,
    },
    password: {
      type: String,
      required: true,
      select: false, //select 为 false 时查询时默认隐藏
      //   set: (val) => hashSync.hash(val, 10), //同步会占用大量CPU资源
    },
    avatar: {
      type: String,
      required: false,
      select: true,
      default: "",
    },
    introduction: {
      type: String,
      required: false,
      select: true,
      default: "",
    },
    roles: {
      type: Array,
      required: false,
      select: true,
    },
  },
  {
    minimize: false, //Mongoose 将保存空对象
    timestamps: true, //默认制动生成创建时间和更新时间
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

//必须先set后get
// userSchema.set("toJSON", { getters: true, virtuals: true });
// userSchema.set("toObject", { getters: true, virtuals: true });
// userSchema.path("createdAt").get(function (v) {
//   return dayjs(v).format("YYYY-MM-DD HH:mm");
// });
// userSchema.path("updatedAt").get(function (v) {
//   return dayjs(v).format("YYYY-MM-DD HH:mm");
// });

// 每次存储时都要执行，加盐加密
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

// 为模式添加静态方法，不会与数据库进行交互，只有在模型实例化编译后产生作用，通过模型调取
userSchema.statics = {
  findUser: async function (username, password) {
    const user = await this.findOne({
      username,
    }).select("+password");
    const isValid = await bcrypt.compare(password, user.password);
    return { user, isValid };
  },
};

module.exports = model("user", userSchema);
