import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prodlist: []
  },
  mutations: {
    // 存储数据
    save(state, list) {
      state.prodlist = list;
    },
    // 商品数量+1
    add(state, { typeIndex, index }) {
      // console.log(obj)
      let prod = state.prodlist[typeIndex].content[index]
      if (prod.count) {
        // prod.count++;
        Vue.set(prod,'count',prod.count+1)
      }else{
        // prod.count = 1;
        Vue.set(prod,'count',1);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
