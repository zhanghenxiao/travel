import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/Home'
import city from '@/components/city/City'



Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/',  
      name: 'home',
      component: home
    },
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/city',  
      name: 'city',
      component: city
    },
  ],
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes
  })