<!-- .vuepress/templates/Layout.vue 
{{ usePageData().value.frontmatter.layout }} 
<footer>
  <p>© {{ new Date().getFullYear() }} 版权所有</p>
</footer>
 {{ friendList[0].FLinksTitle }} 
-->
<template>
  <Layout>
    <!-- 通过 contentBefore 插槽在 Markdown 内容前添加广告 -->
    <template #contentBefore>
      <!-- more -->
      <div class="flinks-block">
            <div class="flinks-body">
                <div class="flinks-lists">
                <!-- list start -->
                <div v-for="(friend, index) in friendList" >
                <div class="flinks-list" v-if="friend.visible">
                    <div class="flinks-list-title">{{ friend.FLinksTitle }} </div>
                    <div class="flinks-list-desc">{{ friend.FLinksDesc }}</div>
                    <div class="flinks-list-items">
                        <!-- item start -->
                         <div v-for="(list, index) in friend.FLinksList" >
                         <div class="flinks-list-item"  v-if="list.visible">
                            <a :href="list.link" rel="external nofollow noreferrer" :title="list.name" target="_blank">
                                <div class="flinks-item-icon"><img class="no-lightbox entered loaded" :src="list.avatar" :alt="list.name"></div>
                                <div class="flinks-item-name">{{list.name}}</div>
                                <div class="flinks-item-desc" :title="list.desc">{{list.desc}}</div>
                            </a>
                        </div>
                        </div>
                        <!-- item end -->
                    </div>
                </div>
                </div>
                <!-- list end -->
                </div>
                <div class="flinks-list-footer">
                    <hr/>
                </div>
            </div>
        </div>
    </template>
  </Layout>
</template>

<script setup>
import { Layout } from "vuepress-theme-hope/client";
import { ref, onMounted } from 'vue'
import { usePageData } from 'vuepress/client'
import friends from '/.vuepress/data/friends.yml'
import navigation from '/.vuepress/data/navigation.yml'
const friendList = ref([])
onMounted(async () => {
  try {
    // 注意：路径需根据实际情况调整
    // const  path = '/.vuepress/data/'+usePageData().value.frontmatter.layout+'.yml'
    // const module = await import(path)
    if(usePageData().value.frontmatter.layout=='navigation'){
      friendList.value = navigation;
    }else if(usePageData().value.frontmatter.layout=='friends'){
      friendList.value = friends;
    }else{
      console.error('加载 YAML 失败, layout: ', usePageData().value.frontmatter.layout);
      friendList.value = [
        { FLinksTitle: '错误', FLinksDesc: '数据加载失败' }
      ]
    }
    // console.info('加载 YAML成功:', friendList.value)
  } catch (error) {
    console.error('加载 YAML 失败:', error)
    friendList.value = [
      { FLinksTitle: '错误', FLinksDesc: '数据加载失败' }
    ]
  }
})
</script>

<style scoped>
    .flinks-block .flinks-list-title {
      font-size: 1.25em;
      font-weight: 700
    }

    .flinks-block .flinks-lists>div:not(:first-child) {
      margin-top: 40px
    }

    .flinks-block .flinks-list-desc {
      font-style: italic
    }

    .flinks-block .flinks-list-items {
      overflow: auto;
      padding: 10px 10px 0;
      text-align: left
    }

    @media(max-width:767px) {
      .flinks-block .flinks-list-items .flinks-list-item {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    .flinks-block .flinks-list-items .flinks-list-item:hover:before,
    .flinks-block .flinks-list-items .flinks-list-item:focus:before,
    .flinks-block .flinks-list-items .flinks-list-item:active:before {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1)
    }

    .flinks-block .flinks-list-items .flinks-list-item:hover .flinks-item-icon {
      margin-left: -10px;
      width: 0
    }

    .flinks-block .flinks-list-items .flinks-list-item:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: #eee;
      content: ' ';
      transition: transform .3s ease-out;
      transform: scale(0)
    }

    .flinks-block .flinks-list-items .flinks-list-item a {
      text-decoration: none
    }

    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-icon {
      float: left;
      overflow: hidden;
      margin: 15px 10px;
      width: 60px;
      height: 60px;
      border-radius: 35px;
      border: solid 1px #eee;
      -webkit-transition: width .3s ease-out;
      -moz-transition: width .3s ease-out;
      -o-transition: width .3s ease-out;
      -ms-transition: width .3s ease-out;
      transition: width .3s ease-out
    }

    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-icon img {
      width: 100%;
      height: 100%;
      -webkit-transition: filter 375ms ease-in .2s, -webkit-transform .3s;
      -moz-transition: filter 375ms ease-in .2s, -moz-transform .3s;
      -o-transition: filter 375ms ease-in .2s, -o-transform .3s;
      -ms-transition: filter 375ms ease-in .2s, -ms-transform .3s;
      transition: filter 375ms ease-in .2s, transform .3s;
      object-fit: cover
    }

    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-name,
    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-desc {
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap
    }

    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-name {
      padding: 20px 0 0;
      height: 20px;
      font-weight: 700;
      font-size: 1em;
      font-weight: 700
    }

    @media(max-width:767px) {
      .flinks-block .flinks-list-items .flinks-list-item .flinks-item-name {
        display: none
      }
    }

    .flinks-block .flinks-list-items .flinks-list-item .flinks-item-desc {
      padding: 10px 0;
      font-size: .92em
    }

    @media(max-width:767px) {
      .flinks-block .flinks-list-items .flinks-list-item .flinks-item-desc {
        display: none
      }
    }

    .flinks-block .flinks-page-desc {
      margin-top: 20px
    }

    .main-inner>.flinks-block {
      background: var(--vp-c-bg, #fff);
      border-radius: initial;
      box-shadow: 0 2px 2px rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, 6%), 0 1px 5px rgba(0, 0, 0, .12)
    }

    .main-inner>.flinks-block:not(:first-child):not(.sub-menu){
      border-radius: initial;
      box-shadow: 0 2px 2px rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, 6%), 0 1px 5px rgba(0, 0, 0, .12), 0 -1px .5px rgba(0, 0, 0, 9%);
      margin-top: 12px
    }

    @media(min-width:768px) and (max-width:991px) {
      .main-inner>.flinks-block:not(:first-child):not(.sub-menu){
        margin-top: 10px
      }
    }

    @media(max-width:767px) {
      .main-inner>.flinks-block:not(:first-child):not(.sub-menu){
        margin-top: 8px
      }
    }

    .flinks-block {
      padding: 0px
    }

    @media(min-width:768px) and (max-width:991px) {
      .flinks-block {
        padding: 20px
      }
    }

    .post-footer,
    .flinks-list-footer {
      display: flex;
      flex-direction: column;
      justify-content: center
    }

    .post-footer hr,
    .flinks-list-footer hr {
      text-align: center;
      line-height: 0;
      height: 0;
      background-image: none;
      border-bottom: .125em dashed #999;
      margin: 24px 0 12px
    }

    .post-footer hr:after,
    .flinks-list-footer hr:after {
      font-size: .9em;
      font-weight: 700;
      background: var(--vp-c-bg, #fff);
      padding: 0 5px;
      z-index: 2
    }

    .flinks-list-footer hr:after {
      content: "~ 我可是有底线的哟 ~"
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible
    }

    hr {
      background-image: repeating-linear-gradient(-45deg, #ddd, #ddd 4px, transparent 4px, transparent 8px);
      border: 0;
      height: 3px;
      margin: 40px 0
    }

    /* 后加 */
    .flinks-list-items {
      display: grid;
      grid-template-columns: repeat(2, minmax(294px, 1fr));
    }

    .flinks-block .flinks-list-items .flinks-list-item {
      position: relative;
      float: left;
      overflow: hidden;
      margin: 10px 7px;
      /* width: calc(100%/3 - 18px); */
      width: 94%;
      height: 90px;
      border-radius: 8px;
      line-height: 17px;
      -webkit-transform: translateZ(0);
      border: groove 1px #fff;
      box-shadow: .6rem .5rem .3rem #eee
    }

    @media (max-width: 767px) {
      .flinks-list-items {
        display: grid;
        grid-template-columns: repeat(1, minmax(302px, 1fr));
      }

      .flinks-block {
        padding: 5px
      }

      .flinks-block .flinks-list-items .flinks-list-item {
        width: 95%;
        display: block;
        justify-content: center;
        align-items: center;
        margin: 10px 0px 10px 5px;
      }

      .flinks-block .flinks-list-items .flinks-list-item .flinks-item-name {
        display: block;
      }

      .flinks-block .flinks-list-items .flinks-list-item .flinks-item-desc {
        display: block;
      }

      .flinks-block .flinks-list-items {
        overflow: auto;
        padding: 10px 0px 0;
        text-align: left;
      }

      .flinks-block .flinks-list-items .flinks-list-item:hover .flinks-item-name {
        text-align: center;
      }

      .flinks-block .flinks-list-items .flinks-list-item:hover .flinks-item-desc {
        text-align: center;
      }
    }
    .flinks-block .flinks-list-items .flinks-list-item:hover .flinks-item-name {
        text-align: center;
    }

    .flinks-block .flinks-list-items .flinks-list-item:hover .flinks-item-desc {
        text-align: center;
    }


    .external-link-icon [vp-content] a[href*="://"]:not(.no-external-link-icon)::after, .external-link-icon [vp-content] a[target=_blank]:not(.no-external-link-icon)::after {
        display: none;
    }
</style>