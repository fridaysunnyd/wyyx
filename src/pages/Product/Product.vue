<template>
    <div id="wrap">
      <div class="header_wrap">
        <header>
          <div class="top">
            <div class="left">
              <i class="iconfont icon-shouye"></i>
            </div>
            <div class="center">
              <span class="center_left">发现</span>
              <span class="center_right">甄选家</span>
            </div>
            <div class="right" >
              <div>
                <i class="iconfont icon-gouwuche"></i>
              </div>
              <div>
                <i class="iconfont icon-sousuo"></i>
              </div>
            </div>
          </div>
          <nav class="bottom">
            <div class="nav_list">
              <ul ref="scrollItems" class="nav_inner">
                <li v-for="(title,index) in shiWuTap" :key="title.tabId">
                  <router-link  :to="`/product/${title.tabId}`">
                    <span :class="{active:`/product/${title.tabId}` === $route.path}">
                      {{title.tabName}}
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <Splice></Splice>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Splice from '../../components/Splice/Splice.vue'
  export default {
    computed:{
      ...mapState({
        shiWuTap:state => state.shiWu.shiWuTap
      })
    },
    mounted(){
      this.$store.dispatch('getShiWuTap',() =>{
        this.$nextTick(() =>{
          new BScroll('.nav_list',{
            scrollX: true,
            click: true
          })
        })
      })
    },
    components:{
      Splice,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    position relative
    display flex
    flex-direction column
    .header_wrap
      height 82px
      width 10rem
      background-color: #fff;
      clearFix()
      header
        position fixed
        top 0
        left 0
        z-index 5
        width 100%
        .top
          display flex
          justify-content space-between
          align-items center
          padding: .21333rem .4rem;
          background-color: #fafafa;
          box-sizing: border-box;
          border-bottom: .01rem solid #d9d9d9;
          .left
            .icon-font
              font-size 22px
          .center
            height:100%
            margin 0 auto
            font-size: .4rem;
            color: #7F7F7F;
            line-height: 1rem;
            text-align: center;
            margin-right: 1.3rem;
            .center_left
              font-size: 21px;
              color: #b4282d;
              font-weight: bold;
            .center_right
              padding: 0 .16rem;
          .right
              div
                float right
                i
                  margin-right: .3rem;
        nav
          position relative
          background-color: #fff;
          .nav_list
            display flex
            height 30px
            padding-right 1.33333rem
            padding-left .5rem
            overflow hidden
            background-color: #fff;
            .nav_inner
              display flex
              white-space nowrap
              height: .8rem;
              color #666
              font-size: .37333rem;
              li
                flex 1 0
                float left
                height 100%
                line-height 28px
                text-align center
                padding: 0 .08rem;
                margin: 0 .2rem;
                .active
                  color $red
    .main
      float left
</style>
