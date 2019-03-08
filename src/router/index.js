import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Cate from '../pages/Cate/Cate.vue'
import Product from '../pages/Product/Product.vue'
import ShopCard from '../pages/ShopCard/ShopCard.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        isFoodGuide:true
      }
    },
    {
      path: '/cate',
      component: Cate,
      meta:{
        isFoodGuide:true
      }
    },
    {
      path: '/product',
      component: Product,
      meta:{
        isFoodGuide:true
      }
    },
    {
      path: '/shopcard',
      component: ShopCard,
      meta:{
        isFoodGuide:true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        isFoodGuide:false
      }
    },
    {
      path: '/',
      component: Home
    },
  ]
})
