<template>
  <div id="app">
    <router-view/>
    <FoodGuide />
  </div>
</template>

<script>
  import FoodGuide from './components/FoodGuide/FoodGuide.vue'
  import {
    reqHome,
    reqClassify,
    reqGoods
  } from './api'
  export default {
    components:{
      FoodGuide
    },
    mounted(){
      this.$store.dispatch('getHomeInfo')
      this.$store.dispatch('getGoodsInfo')
      this.$store.dispatch('getClassifyInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
