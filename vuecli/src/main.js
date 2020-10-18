//node_modules中的包
import Vue from 'vue'
// .当前路径 
import App from './App.vue' //主组件
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
