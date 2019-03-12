import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.jpg'
import './mock/mockServer.js'

Vue.config.productionTip = false
Vue.store = store
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

