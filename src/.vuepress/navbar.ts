import { navbar } from "vuepress-theme-hope";

//支持图标 https://icon-sets.iconify.design/fa6-solid/page-17.html?keyword=fa6-solid

export default navbar([
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
  {
      text: "测试",
      icon: "user-group",
      children:[
        "/demo/",
        "/demo2/",
        "/demo3/",
        "/demo4/",
        "/test-image-path-1.md",
        "/test-image-page-2/",
      ]
    },
]);
