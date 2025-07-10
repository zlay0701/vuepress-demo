# vuepress2 + hope demo 教程
>一个vuepress2 demo 下载之后改改配置达到可以快速搭建一个博客的目的

1. 源码地址 https://github.com/zlay0701/vuepress-demo 请fork这个使用

2. 演示地址 https://vuepress-demo-zlay.pages.dev

3. 其他教程见 https://zlay0701.github.io/

# 使用步骤
1. fork或者点击 use this Template 到自己仓库
2. 使用Github desktop(其他客户端也行)下载代码到本地
3. 安装nodejs 要求版本v20.19.3或者以上 https://nodejs.org/download/release/latest-v20.x/node-v20.19.3-x64.msi
4. 安装git https://git-scm.com/downloads
5. 在代码根目录下 鼠标右键->open git base here打开命令行
```
npm install
npm run docs:clean-dev
```
6. 访问浏览器 http://127.0.0.1:8080/ 测试即可
7. 导航栏和侧边栏的图标 见 https://icon-sets.iconify.design/fa6-solid/page-17.html?keyword=fa6-solid 无需前缀

# 如何更新

```
npm run docs:update-package
```



# 版本依赖

```
@vuepress/plugin-feed 版本冲突：
项目直接依赖的版本是 2.0.0-rc.110
但 vuepress-theme-hope@2.0.0-rc.93 要求的是 2.0.0-rc.109

@vuepress/plugin-search 版本冲突：
项目直接依赖的版本是 2.0.0-rc.110
但 vuepress-theme-hope@2.0.0-rc.93 要求的是 2.0.0-rc.109

@vuepress/plugin-feed@2.0.0-rc.110 这个插件要求的是 vuepress@2.0.0-rc.23
```

目前版本, 后续更新 需要等hope主题先更新 见
https://www.npmjs.com/package/vuepress-theme-hope?activeTab=code
```
@vuepress/bundler-vite": "2.0.0-rc.24
vuepress": "2.0.0-rc.24
vuepress-theme-hope": "2.0.0-rc.94


@vuepress/plugin-feed": "2.0.0-rc.112
@vuepress/plugin-search": "2.0.0-rc.112
```