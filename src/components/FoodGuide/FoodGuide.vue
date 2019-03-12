<template>
    <nav id="wrap" v-if="$route.meta.isFoodGuide">
      <router-link to="/home" class="router">
        <i :class="{active:$route.path === '/home'}" class="iconfont icon-shouye"></i>
        <span :class="{active:$route.path === '/home'}">首页</span>
      </router-link>
      <router-link to="/cate/subMenu/1008000" class="router">
        <i :class="{active:$route.path.split('/')[1] === 'cate'}" class="iconfont icon-chouti"></i>
        <span :class="{active:$route.path.split('/')[1] === 'cate'}">分类</span>
      </router-link>
      <router-link to="/product" class="router">
        <i :class="{active:$route.path.split('/')[1] === 'product'}" class="iconfont icon-tuxiangshibie"></i>
        <span :class="{active:$route.path.split('/')[1] === 'product'}">识物</span>
      </router-link>
      <router-link to="/shopcard" class="router">
        <i :class="{active:$route.path === '/shopcard'}" class="iconfont icon-gouwuche"></i>
        <span :class="{active:$route.path === '/shopcard'}">购物车</span>
      </router-link>
      <router-link to="/personal" class="router">
        <i :class="{active:$route.path === '/personal'}" class="iconfont icon-geren"></i>
        <span :class="{active:$route.path === '/personal'}">个人</span>
      </router-link>
    </nav>
</template>

<script>

  export default {

  }
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
      .active
        color $red
</style>
