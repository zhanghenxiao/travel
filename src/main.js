// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 移动端开发的一些小问题，重置样式（达到不同手机基本样式相同）,1px boder 像素的问题，
// 点击事件300毫秒延迟问题（fastclick--save）dep不管是线上还是开发环境都需要,
// build-webpack.base.conf.js 中配置styles路径
import 'styles/reset.css'
// 1pxboder 多备屏 2倍3倍会显示2px 3px
import 'styles/border.css'
// click 300ms 延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
// 移动端流行的iconfont
import 'styles/iconfont.css'
// 2.6.7稳定版
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper,)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
