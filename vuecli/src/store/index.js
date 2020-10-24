import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    count:0
  },
  mutations: {
    // count增加方法 第一个参数是state 第二个参数是传进来的参数
    add(state,num){
      state.count += num;
    }
  },
  actions: {
  },
  modules: {
  }
})
