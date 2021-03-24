/*
 * @Description:文件控制器
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-10 22:12:24
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-24 17:07:34
 */
const File = require("../schemas/file");
const {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdir,
} = require("fs");
const { join } = require("path");
const { resolve: urlResolve } = require("url");
const images = require("images");
const dayjs = require("dayjs");

dayjs.locale("zh-cn");

class FilesCtr {
  async find(ctx) {
    const { page = 1, pageSize = 10 } = ctx.query;
    const _page = Math.max(page * 1, 1);
    const _pageSize = Math.max(pageSize * 1, 1);
    const result = await File.find()
      .limit(_pageSize)
      .skip((_page - 1) * _pageSize)
      .sort({ createdAt: -1 }); //1：正序，-1：倒序
    const total = await File.countDocuments();
    const totalPage = Math.ceil(total / _pageSize);

    ctx.body = {
      data: result,
      page: _page,
      pageSize: _pageSize,
      total,
      totalPage,
    };
  }

  /**
   * @description: 上传文件
   * @param {*} ctx
   * @return {*}
   * @author: Knight
   */
  async create(ctx) {
    try {
      //   ctx.verifyParams({
      //     file: { type: "object", required: true },
      //   });
      // 获取上传文件
      const {
        file: { path: fileURI, name: fileName },
      } = ctx.request.files;
      const repeatedFile = await File.findOne({ fileName });
      if (repeatedFile) ctx.throw(409, "文件已存在！");

      //当前日期
      const currentDate = dayjs().format("YYYY-MM-DD");
      //文件存储路径
      const filePath = join("./public/uploads", currentDate);

      //判断是否存在文件夹,不存在则创建文件夹
      if (!existsSync(filePath)) {
        await new Promise((resolve, reject) => {
          mkdir(filePath, (err) => {
            err ? reject(err) : resolve();
          });
        });
      }

      //使用 createWriteStream 写入数据
      const writeStream = createWriteStream(join(filePath, fileName));
      // 读取文件流，然后使用管道流pipe拼接
      createReadStream(fileURI).pipe(writeStream);

      images(fileURI) //加载图像文件
        .size(400) //等比缩放图像到400像素宽
        //.draw(images("logo.png"), 10, 10) //在(10,10)处绘制Logo
        .save(join(filePath, `thumbnail_${fileName}`), {
          quality: 100, //保存图片到文件,图片质量为50
        });

      const data = await new File({
        fileName,
        fileURI: join(filePath, fileName),
        thumbnailURI: join(filePath, `thumbnail_${fileName}`),
      }).save();

      ctx.body = {
        data: {
          _id: data._id,
          fileName: data.fileName,
          fileURI: urlResolve(
            ctx.origin,
            join("uploads", currentDate, fileName)
          ),
          thumbnailURI: "",
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
        message: "创建成功！",
        status: 200,
      };
    } catch (error) {
      ctx.throw(error);
    }
  }
}

module.exports = new FilesCtr();
