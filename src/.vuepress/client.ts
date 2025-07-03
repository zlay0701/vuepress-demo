import { defineClientConfig } from 'vuepress/client'
import friends from './layouts/friends.vue'
import navigation from './layouts/navigation.vue'
import portfolio from './layouts/portfolio.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {
    friends,
    navigation,
    portfolio,
  },
  rootComponents: [],
})