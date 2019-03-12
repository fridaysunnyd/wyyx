<template>
    <div id="wrap">
      <header>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共21894款好物</span>
        </div>
      </header>
      <div class="main">
        <aside class="cate_wrap">
          <div class="inner">
            <div v-for="(item,index) in cateName" :key="index" class="nav" >
              <router-link :to="`/cate/subMenu/${item.id}`">
                <span :class="{active:`/cate/subMenu/${item.id}` === $route.path}">
                  {{item.name}}
                </span>
              </router-link>
            </div>
          </div>
        </aside>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapGetters(['cateName']),
    },
    watch:{
      cateName(){
        this.$nextTick(() =>{
          new BScroll('.cate_wrap',{
            click:true
          })
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    header
      align-items: center;
      height: 1.17333rem;
      padding: 0 .4rem;
      background-color: #fff;
      display flex
      align-content center
      .search
        width 100%
        height: .74667rem;
        line-height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        text-align center
        color #666
    .main
      height 100%
      clearFix()
      aside
        float: left;
        width: 2.16rem;
        height: 15rem
        background-color: #fff;
        overflow hidden
        .inner
          height 15rem
          padding: .53333rem 0
          display flex
          flex-direction column
          justify-content space-around
          .nav
            text-align center
            span
              color: #333;
              line-height: .66667rem;
              font-size: .37333rem;
            .active
              color $red
</style>
