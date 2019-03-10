<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
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
      this.$store.dispatch('getClassifyInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
