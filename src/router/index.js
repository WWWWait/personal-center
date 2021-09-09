import {
  createRouter,
  createWebHashHistory
} from 'vue-router'


// 路由配置表
const routes = [{

    path: '/home',

    redirect: '/center',

    component: () => import('@/views/center/')

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

        component: () => import('@/views/center/')
      },
      {
        //我的简历
        path: '/resume',

        name: 'resume',

        component: () => import('@/views/resume/')
      },
      {
        //投递记录
        path: '/deliver',

        name: 'deliver',

        component: () => import('@/views/deliver/')
      },
      {
        //面试邀请
        path: '/invite',

        name: 'invite',

        component: () => import('@/views/invite/')
      },
      {
        //收藏信息
        path: '/collect',

        name: 'collect',

        component: () => import('@/views/collect/')
      },
      {
        //浏览记录
        path: '/browse',

        name: 'browse',

        component: () => import('@/views/browse/')
      },
      {
        //我的订阅
        path: '/subscribe',

        name: 'subscribe',

        component: () => import('@/views/subscribe/')
      },
      {
        //账号设置
        path: '/setup',

        name: 'setup',

        component: () => import('@/views/setup/')
      },
      {
        //发布招聘
        path: '/release',

        name: 'release',

        component: () => import('@/views/release/')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router