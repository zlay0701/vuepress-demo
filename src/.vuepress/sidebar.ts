import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": "structure",
  "/doc/": "structure",
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
        {
          text: "文档",
          icon: "swatchbook",
          link: "doc/",
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
        {
          text: "备忘",
          icon: "bookmark",
          link: "faqs/",
        },
        {
          text: "随笔",
          icon: "leaf",
          link: "/category/随笔/",
        },
        {
          text: "网址发布页",
          icon: "link",
          link: "https://www.cnblogs.com/zlay0701/p/18912013",
        }
      ]
    },
  {
    text: "友链",
    icon: "feather-pointed",
    link: "friends/",
  },
  {
    text: "留言",
    icon: "message",
    link: "contact/",
  },

  ],
});
