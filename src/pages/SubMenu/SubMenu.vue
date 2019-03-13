<template>
    <div id="wrap">
      <div class="sub" v-if="subMenu">
        <div>
          <div class="banner">
            <img v-lazy="subMenu.bannerUrl" :key="subMenu.bannerUrl" alt="">
          </div>
          <div class="menu">
            <div class="item" v-for="(item,index) in subMenu.subCateList" :key="index">
              <img v-lazy="item.wapBannerUrl" :key="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        classifyInfo:state => state.cate.classifyInfo
      }),
      subMenu(){
        return this.classifyInfo.find(item => item.id === +this.$route.params.id)
      }
    },
    mounted(){
      this.$store.dispatch('getClassifyInfo')
    },
    watch:{
      subMenu(){
        if(!this.scroll){
          this.$nextTick(() =>{
            this.scroll = new BScroll('.sub',{
              click:true
            })
          })
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
#wrap
  width 7.84rem
  height 15rem
  float right
  box-sizing border-box
  display flex
  overflow hidden
  .sub
    height: 15rem
    div
      .banner
        img
          width: auto
          height: 2.56rem;
          margin-bottom: .42667rem;
      .menu
        clearFix()
        .item
          float left
          margin-right: .45333rem;
          width: 1.92rem;
          text-align: center;
          img
            width: 1.92rem;
            height: 1.92rem;
          span
            height: .96rem;
            font-size: .32rem;
            color: #333;
            text-align: center;
            line-height: .48rem;
            white-space nowrap
          &:nth-child(3n)
            margin-right 0

</style>
