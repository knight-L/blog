/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:33:45
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-24 16:56:39
 */
const { join } = require("path");
const { resolve: urlResolve } = require("url");
const dayjs = require("dayjs");

dayjs.locale("zh-cn");

class ArticleCtr {
  async find(ctx) {
    // const { page = 1, pageSize = 10 } = ctx.query;
    // const _page = Math.max(page * 1, 1);
    // const _pageSize = Math.max(pageSize * 1, 1);
    // const result = await User.find({ username: new RegExp(ctx.query.q) })
    //   .limit(_pageSize)
    //   .skip((_page - 1) * _pageSize)
    //   .sort({ createdAt: -1 }); //1：正序，-1：倒序
    // const total = await User.countDocuments();
    // const totalPage = Math.ceil(total / _pageSize);

    const imageData = [
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0011.JPG")
      ),
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0012.JPG")
      ),
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0013.JPG")
      ),
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0015.JPG")
      ),
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0025.JPG")
      ),
      urlResolve(
        ctx.origin,
        join("uploads", "/2021-03-24/thumbnail_IMG_0031.JPG")
      ),
    ];

    const tags = [
      "Vue",
      "Angular",
      "React",
      "CSS",
      "JS",
      "TypeScript",
      "Webpack",
      "VsCode",
      "HTML",
    ];

    const colors = [
      "green",
      "blue",
      "red",
      "purple",
      "violet",
      "indigo",
      "emerald",
      "yellow",
      "orange",
    ];

    const _date = `knight · ${dayjs().format("YYYY-MM-DD HH:mm")}`;
    const _list = [];
    const _num = Math.ceil(Math.random() * 30) || 30;
    for (let i = 0; i < _num; i++) {
      _list.push({
        id: i,
        img: imageData[Math.floor(Math.random() * imageData.length)],
        title: `Rapidly build modern websites without ever leaving your HTML.${++i}`,
        time: _date,
        tags: Array.from(
          { length: Math.ceil(Math.random() * tags.length) },
          () => {
            return {
              id: i,
              name: tags[Math.floor(Math.random() * tags.length)],
              color: colors[Math.floor(Math.random() * colors.length)],
            };
          }
        ),
      });
    }

    ctx.body = {
      data: _list,
      //   page: _page,
      //   pageSize: _pageSize,
      //   total,
      //   totalPage,
    };
  }
}

module.exports = new ArticleCtr();
