<template>
    <div id="main_wrap">
      <div class="inner">
        <div class="main001" v-if="+$route.params.id === 9" v-for="(item,index) in manual" :key="index">
          <div class="inner001" v-for="(topic,index) in item.topics" :key="index">
            <div v-if="topic.type === 0" class="type_1">
              <div class="userWrap">
                <div class="user">
                  <img :src="topic.avatar" alt="">
                  <span class="name">{{topic.nickname}}</span>
                </div>
              </div>
              <div class="title">
                {{topic.title}}
              </div>
              <img :src="topic.picUrl" alt="">
              <span class="look">{{topic.readCount}}</span>
            </div>
            <div v-if="topic.type !== 0" class="type_2">
              <div class="content">
                <div class="userWrap">
                  <div class="user">
                    <img :src="topic.avatar" alt="">
                    <span class="name">{{topic.nickname}}</span>
                  </div>
                </div>
                <div class="title">
                  {{topic.title}}
                </div>
                <div class="des">{{topic.subTitle}}</div>
                <span class="look">{{topic.readCount}}</span>
              </div>
              <img :src="topic.picUrl" alt="">
            </div>
            <Splice />
          </div>
        </div>
        <div class="main001_user" v-if="+$route.params.id === 9">
          <div class="inner001_user" v-for="(item,index) in user" :key="index">
            <div class="user_manual" v-for="(topic,index) in item.topics" :key="index">
              <div v-if="topic.type === 0" class="type_1">
                <div class="userWrap">
                  <div class="user">
                    <img :src="topic.avatar" alt="">
                    <span class="name">{{topic.nickname}}</span>
                  </div>
                </div>
                <div class="title">
                  {{topic.title}}
                </div>
                <img :src="topic.picUrl" alt="">
                <span class="look">{{topic.readCount}}</span>
              </div>
              <div v-if="topic.type !== 0 && topic.type !== 7 " class="type_2">
                <div class="content">
                  <div class="userWrap">
                    <div class="user">
                      <img :src="topic.avatar" alt="">
                      <span class="name">{{topic.nickname}}</span>
                    </div>
                  </div>
                  <div class="title">
                    {{topic.title}}
                  </div>
                  <div class="des">{{topic.subTitle}}</div>
                  <span class="look">{{topic.readCount}}</span>
                </div>
                <img :src="topic.picUrl" alt="">
              </div>
              <Splice />
            </div>
            <div class="user">
              <div class="type_1">
                <div class="userWrap">
                  <div class="user">
                    <img :src="item.look.avatar" alt="">
                    <span class="name">{{item.look.nickname}}</span>
                  </div>
                </div>
                <div class="title">
                  {{item.look.content}}
                </div>
                <img :src="item.look.lookPics[0].picUrl" alt="">
                <span class="look">{{item.look.readCount}}</span>
              </div>
              <Splice />
            </div>
          </div>
        </div>
        <div class="main002" v-if="+$route.params.id === 10">
          002
        </div>
        <div class="main003" v-if="+$route.params.id === 12">
          003
        </div>
        <div class="main004" v-if="+$route.params.id === 7">
          004
        </div>
        <div class="main005" v-if="+$route.params.id === 4">
          005
        </div>
        <div class="main006" v-if="+$route.params.id === 6">
          006
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Splice from '../../components/Splice/Splice.vue'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      let pageNum = 1
      this.$store.dispatch('getManual')
      this.$nextTick(() => {
        const Scroll = new BScroll('#main_wrap',{       //初始化better-scroll
          probeType:1,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
          click: true,   //是否派发click事件
          pullUpLoad: {
            threshold: 1
          },
        })
        Scroll.on('pullingUp',() =>{
          this.$store.dispatch('getUser',pageNum++)
          Scroll.finishPullUp()
        })
        Scroll.refresh()
      })
    },
    computed:{
      ...mapState({
        manual:state => state.shiWu.manual,
        user:state => state.shiWu.user
      })
    },
    components:{
      Splice
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#main_wrap
  float left
  width 10rem
  height 100%
  .inner
    .main001
      .inner001
        .type_1
          width: 100%;
          background: #fff;
          margin: .2rem 0;
          box-sizing: border-box;
          padding: .36rem .3rem;
          .userWrap
            width 100%
            .user
              display flex
              align-items center
              img
                width: .56rem;
                height: .56rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .2rem;
              span
                font-size: .28rem;
                color: #333;
                line-height: .36rem;
                white-space: nowrap;
          .title
            font-size: .36rem;
            color: #333;
            line-height: .52rem;
            margin: -.08rem 0 .16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Regular;
          img
            width 100%
            height 100%
          .look
            font-size: .22rem;
            color: #999;
            line-height: .32rem;

        .type_2
          width: 100%;
          background: #fff;
          margin: .2rem 0;
          box-sizing: border-box;
          padding: .36rem .3rem;
          display flex
          justify-content space-between
          .content
            display: flex
            flex-direction column
            justify-content space-between
            width 6rem
            .userWrap
              width 100%
              .user
                display flex
                align-items center
                img
                  width: .56rem;
                  height: .56rem;
                  overflow: hidden;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .01rem solid #d9d9d9;
                  margin-right: .2rem;
                span
                  font-size: .28rem;
                  color: #333;
                  line-height: .36rem;
                  white-space: nowrap;
            .title
              font-size: .36rem;
              color: #333;
              line-height: .52rem;
              margin: -.08rem 0 .16rem 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-family: PingFangSC-Regular;
            .des
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: .28rem;
              line-height: .4rem;
              padding-top: .08rem;
              color: #7f7f7f;
            .look
              font-size: .22rem;
              color: #999;
              line-height: .32rem;

          img
            width: 2.72rem;
            height: 2.72rem;
            border-radius: .08rem;
    .main001_user
      .inner001_user
        .user_manual
          .type_1
            width: 100%;
            background: #fff;
            margin: .2rem 0;
            box-sizing: border-box;
            padding: .36rem .3rem;
            .userWrap
              width 100%
              .user
                display flex
                align-items center
                img
                  width: .56rem;
                  height: .56rem;
                  overflow: hidden;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .01rem solid #d9d9d9;
                  margin-right: .2rem;
                span
                  font-size: .28rem;
                  color: #333;
                  line-height: .36rem;
                  white-space: nowrap;
            .title
              font-size: .36rem;
              color: #333;
              line-height: .52rem;
              margin: -.08rem 0 .16rem 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-family: PingFangSC-Regular;
            img
              width 100%
              height 100%
            .look
              font-size: .22rem;
              color: #999;
              line-height: .32rem;

          .type_2
            width: 100%;
            background: #fff;
            margin: .2rem 0;
            box-sizing: border-box;
            padding: .36rem .3rem;
            display flex
            justify-content space-between
            .content
              display: flex
              flex-direction column
              justify-content space-between
              width 6rem
              .userWrap
                width 100%
                .user
                  display flex
                  align-items center
                  img
                    width: .56rem;
                    height: .56rem;
                    overflow: hidden;
                    border-radius: 50%;
                    box-sizing: border-box;
                    border: .01rem solid #d9d9d9;
                    margin-right: .2rem;
                  span
                    font-size: .28rem;
                    color: #333;
                    line-height: .36rem;
                    white-space: nowrap;
              .title
                font-size: .36rem;
                color: #333;
                line-height: .52rem;
                margin: -.08rem 0 .16rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
                font-family: PingFangSC-Regular;
              .des
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .28rem;
                line-height: .4rem;
                padding-top: .08rem;
                color: #7f7f7f;
              .look
                font-size: .22rem;
                color: #999;
                line-height: .32rem;

            img
              width: 2.72rem;
              height: 2.72rem;
              border-radius: .08rem;
        .user
          .type_1
            width: 100%;
            background: #fff;
            margin: .2rem 0;
            box-sizing: border-box;
            padding: .36rem .3rem;
            .userWrap
              width 100%
              .user
                display flex
                align-items center
                img
                  width: .56rem;
                  height: .56rem;
                  overflow: hidden;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .01rem solid #d9d9d9;
                  margin-right: .2rem;
                span
                  font-size: .28rem;
                  color: #333;
                  line-height: .36rem;
                  white-space: nowrap;
            .title
              font-size: .36rem;
              color: #333;
              line-height: .52rem;
              margin: -.08rem 0 .16rem 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-family: PingFangSC-Regular;
            img
              width 100%
              height 100%
            .look
              font-size: .22rem;
              color: #999;
              line-height: .32rem;

</style>
