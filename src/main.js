import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "@babel/polyfill";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/reset.css'
import './assets/css/common.css'

import Dialog from './components/dialog'
import Loading from './components/loading'
import toast from './components/toast'

import './utils/plugin'
import './utils/FastClick'
import utils from './utils/utils'
import VueScroller from 'vue-scroller'

import {
  Grid,
  GridItem,
  Image as VanImage
} from 'vant'

Vue.use(utils)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VueScroller)

Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$toast = toast

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
