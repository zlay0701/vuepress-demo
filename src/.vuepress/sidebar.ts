import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": "structure",
  "/": [
  {
    text: "导航",
    icon: "rocket",
    link: "/navigation/",
  },
  "/",
  {
    text: "博客",
    icon: "book",
    children:[
        {
          text: "所有",
          icon: "laptop-code",
          link: "article/",
        },
        {
          text: "博文",
          icon: "book-tanakh",
          link: "post/",
        },
      ]
  },
    {
      text: "归档",
      icon: "box-archive",
      children:[
        {
          text: "分类",
          icon: "table-cells",
          link: "category/",
        },
        {
          text: "标签",
          icon: "tags",
          link: "tag/",
        },
        {
          text: "时间线",
          icon: "clock",
          link: "timeline/",
        },
      ]
    },
      {
      text: "关于",
      icon: "user-group",
      children:[
        {
          text: "关于作者",
          icon: "user",
          link: "about/",
        },
        {
          text: "作品集",
          icon: "file-code",
          link: "portfolio/",
        },
      ]
    },
  {
    text: "友链",
    icon: "feather-pointed",
    link: "friends/",
  },

  ],
});
