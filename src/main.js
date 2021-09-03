// 项目入口

import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

// 加载ElementPlus样式
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

//加载全局样式文件
import './styles/index.less'

// 创建兄弟组件通讯
// export const eventBus= new Vue()


createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
