import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home/Home'
// import city from '@/components/city/City'
// import detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/',  
      name: 'home',
      component: () =>import('@/components/home/Home')
    },
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/city',  
      name: 'city',
      component: () =>import('@/components/city/City')
    },
    {
      // 当访问根路径，直接跳转至定义的组件中去
      path: '/detail/:id',  
      name: 'detail',
      component: () =>import('@/components/detail/Detail')
    },
  ],
  // 滚动行为 至（0,0）位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes
  })