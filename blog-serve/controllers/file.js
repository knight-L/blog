/*
 * @Description:文件控制器
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-03-10 22:12:24
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-11 00:20:51
 */
const File = require("../schemas/file");
const { createWriteStream, existsSync, mkdir } = require("fs");
const { join } = require("path");

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

  async create(ctx) {
    try {
      // 获取上传文件
      const file = ctx.request.files.file;

      const filePath = join("./public/upload");

      if (!existsSync(filePath)) await mkdir(filePath);

      createWriteStream(join(filePath, file.name), {
        encoding: "utf8",
      }).write(file.buffer);
    } catch (error) {
      throw new Error(err);
    }

    // const basename = path.basename(file.path);
    // console.log("AAAAAAAAAAAA", basename, file.path);
    // console.log("BBBBBBBBBBBB", `${ctx.origin}/uploads/${basename}`);
    // // 读取文件流
    // const fileReader = fs.createReadStream(file.path);
    // console.log(fileReader);
    // // 设置文件保存路径
    // const filePath = path.join(__dirname, "/public/upload/");
    // // 组装成绝对路径
    // const fileResource = `${filePath}${file.name}`;

    // /**
    //  * 使用 createWriteStream 写入数据，然后使用管道流pipe拼接
    //  */
    // const writeStream = fs.createWriteStream(fileResource);

    // // 判断 /public/upload 文件夹是否存在，如果不在的话就创建一个
    // if (!fs.existsSync(filePath)) {
    //   fs.mkdir(filePath, (err) => {
    //     if (err) {
    //       throw new Error(err);
    //     } else {
    //       fileReader.pipe(writeStream);
    //       ctx.body = {
    //         url: uploadUrl + `/${file.name}`,
    //         code: 0,
    //         message: "上传成功",
    //       };
    //     }
    //   });
    // } else {
    //   fileReader.pipe(writeStream);
    //   ctx.body = {
    //     url: uploadUrl + `/${file.name}`,
    //     code: 0,
    //     message: "上传成功",
    //   };
    // }
  }
}

module.exports = new FilesCtr();
