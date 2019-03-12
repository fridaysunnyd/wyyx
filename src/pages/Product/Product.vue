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
                    {{title.tabName}}
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <Splice></Splice>
      <router-view></router-view>
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
      this.initListScroll (this.$refs.scrollItems)
      this.$store.dispatch('getShiWuTap',() =>{
        this.$nextTick(() =>{
          new BScroll('.nav_list',{
            scrollX: true,
            click: true
          })
        })
      })
    },
    methods:{
      initListScroll (ref) {
        const listWrapper = ref
        let width = 0
        let length = listWrapper.children.length
        while (length) {
          width += listWrapper.children[length-1].offsetWidth*1.5
          length--
        }
        console.log(width);
        ref.style.width = width + 50 + 'px'
      },

    },
    components:{
      Splice,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    position relative
    display flex
    flex-direction column
    .header_wrap
      height 75px
      width 10rem
      background-color: #fff;
      clearFix()
      header
        position fixed
        top 0
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
            height 30px
            padding-right 1.33333rem
            padding-left .5rem
            overflow hidden
            .nav_inner
              height: .8rem;
              color #666
              font-size: .37333rem;
              li
                float left
                height 100%
                line-height 28px
                text-align center
                padding: 0 .08rem;
                margin: 0 .2rem;



</style>
