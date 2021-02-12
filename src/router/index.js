import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/',  
      name: 'home',
      component: home
    }
  ],
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes
  })