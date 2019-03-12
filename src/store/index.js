import Vue from 'vue'
import VueX from 'vuex'

import home from './modules/home.js'
import cate from './modules/cate.js'
import shiWu from './modules/shiWu.js'

Vue.use(VueX)
export default new VueX.Store ({
  modules:{
    home,
    cate,
    shiWu
  }
})
