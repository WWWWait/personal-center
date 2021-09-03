import {
  createStore
} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // 所有的任务列表
    list: []
  },
  mutations: {
    // 初始化list
    initList(state, list) {
      state.list = list
    }
  },
  actions: {
    getList(context) {
      axios.get('/list.json').then(({
        data
      }) => {
        console.log(data);
      })
    }
  },
  modules: {}
})