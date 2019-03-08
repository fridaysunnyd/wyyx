import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer.js'

Vue.config.productionTip = false
Vue.store = store

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

