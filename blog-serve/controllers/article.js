/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2021-01-28 23:33:45
 * @LastEditors: Knight
 * @LastEditTime: 2021-03-23 23:09:09
 */
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
      "http://browser9.qhimg.com/bdm/426_263_0/t0183def7a3a7924215.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t0149fb2cfbb567962b.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t016f9ec65aabb7aeca.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t01376952f5589c328d.jpg",
      "http://browser9.qhimg.com/bdm/853_527_0/t01452e27e87a43d166.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t0183def7a3a7924215.jpg",
      "http://browser9.qhimg.com/bdm/853_527_0/t01f520c778bde1acb7.jpg",
      "http://browser9.qhimg.com/bdm/853_527_0/t0139aeec46caeb52a5.jpg",
      "http://browser9.qhimg.com/bdm/853_527_0/t01a12cdf3dcbe3fddc.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t01e90f7287eb888682.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t017dbe738a0840f999.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t01d9e669c8fb501aad.jpg",
      "http://browser9.qhimg.com/bdm/426_263_0/t0124f00e0f24ab1fe3.jpg",
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
      {
        bg: "bg-green-100",
        text: "text-green-500",
      },
      {
        bg: "bg-blue-100",
        text: "text-blue-500",
      },
      {
        bg: "bg-red-100",
        text: "text-red-500",
      },
      {
        bg: "bg-purple-100",
        text: "text-purple-500",
      },
      {
        bg: "bg-violet-100",
        text: "text-violet-500",
      },
      {
        bg: "bg-indigo-100",
        text: "text-indigo-500",
      },
      {
        bg: "bg-emerald-100",
        text: "text-emerald-500",
      },
      {
        bg: "bg-yellow-100",
        text: "text-yellow-500",
      },
      {
        bg: "bg-orange-100",
        text: "text-orange-500",
      },
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
