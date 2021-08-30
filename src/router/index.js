import { createRouter, createWebHashHistory } from 'vue-router'

// 引入登陆页面
// import Login from '@/views/login/index.vue'


// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component:  ()=> import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
