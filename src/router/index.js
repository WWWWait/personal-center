import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// 引入登陆页面
// import Login from '@/views/login/index.vue'


// 路由配置表
const routes = [{

    path: '/login',

    name: 'login',

    component: () => import('@/views/login/index.vue')

  },

  { //外层组件路由

    path: '/',

    component: () => import('@/views/layout/index.vue'),

    children: [

      {
        //默认首页
        path: '',

        name: 'home',

        component: () => import('@/views/home/index.vue')

      },
      {
        //个人中心
        path: '/center',

        name: 'center',

        component: () => import('@/views/navaside/center/')
      },
      {
        //我的简历
        path: '/resume',

        name: 'resume',

        component: () => import('@/views/navaside/resume/')
      },
      {
        //投递记录
        path: '/deliver',

        name: 'deliver',

        component: () => import('@/views/navaside/deliver/')
      },
      {
        //面试邀请
        path: '/invite',

        name: 'invite',

        component: () => import('@/views/navaside/invite/')
      },
      {
        //收藏信息
        path: '/collect',

        name: 'collect',

        component: () => import('@/views/navaside/collect/')
      },
      {
        //浏览记录
        path: '/browse',

        name: 'browse',

        component: () => import('@/views/navaside/browse/')
      },
      {
        //我的订阅
        path: '/subscribe',

        name: 'subscribe',

        component: () => import('@/views/navaside/subscribe/')
      },
      {
        //账号设置
        path: '/setup',

        name: 'setup',

        component: () => import('@/views/navaside/setup/')
      },
      {
        //发布招聘
        path: '/release',

        name: 'release',

        component: () => import('@/views/navaside/release/')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router