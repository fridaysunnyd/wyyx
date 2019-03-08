<template>
    <nav id="wrap" v-if="$route.meta.isFoodGuide">
      <router-link to="/home" class="router">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/cate" class="router">
        <i class="iconfont icon-chouti"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/product" class="router">
        <i class="iconfont icon-tuxiangshibie"></i>
        <span>识物</span>
      </router-link>
      <router-link to="/shopcard" class="router">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/personal" class="router">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </router-link>
    </nav>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    position fixed
    width 100%
    height: 1.30667rem;
    background: #fff;
    bottom 0
    left 0
    display flex
    justify-content space-around
    border-top: 1px solid #d9d9d9;
    .router
      display flex
      flex-direction column
      align-content center
      justify-content center
      span
        display block
        margin-top: .09333rem;
        font-size .32rem
      i
        display block
        margin 0 auto
        text-align center
        width: .53333rem;
        height: .53333rem;
        font-size: .53333rem;

</style>
