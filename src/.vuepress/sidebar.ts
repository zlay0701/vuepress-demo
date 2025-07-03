import { sidebar } from "vuepress-theme-hope";
//你可以省略 .md 扩展名，以 / 结尾的路径会被推断为 /README.md。

export default sidebar({
  "/demo/": "structure",//自动生成侧边栏
  "/demo2/":[//没父级直接是子级别
        {
          text: "test-image-path-6",
          icon: "laptop-code",
          link: "/demo2/test-image-path-6.md",
        },
        {
          text: "test-image-page-9",
          icon: "laptop-code",
          link: "/demo2/test-image-page-9/",
        }
      ],
  "/demo3/":[{//有父级
    text: "demo3",
    collapsible: true,//可折叠
    expanded: true,//false则折叠 true则默认展开
    children:[
        {
          text: "test-image-page-7",
          icon: "laptop-code",
          link: "/demo3/test-image-page-7/",
        }
      ]
  }],
  "/demo4/": [
     '/demo4/test-image-page-8/',
  ],
//总的侧边栏
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
    collapsible: true,//可折叠
    expanded: false,//false则折叠 true则默认展开
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
