import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import yaml from '@rollup/plugin-yaml'
import { viteBundler } from '@vuepress/bundler-vite'
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "zlay - 素喂’Blog",
  description: "Java技术博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!friends/index.md', '!portfolio/index.md']

  // permalinkPattern: ":raw/"
  // 自定义主题插件
  plugins: [
{
  name: 'custom-routes',
  extendsPage: (page) => {
    // 跳过 404 页面的处理
    if (page.path === '/404.html') return;
    if (page.path === '/404/') return;
    if (page.path === '/404') return;
    
    // 修改其他页面的路径，去掉 .html
    page.path = page.path.replace(/\.html$/, '/');
  },
},
  ],
   bundler: viteBundler({
    viteOptions: {
      plugins: [yaml()]
    },
    vuePluginOptions: {
    },
  }),
});
