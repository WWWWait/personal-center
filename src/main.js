// 项目入口

import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//加载全局样式文件
import './styles/index.less'


createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
