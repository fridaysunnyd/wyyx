import {
  reqShiWuTap,
  reqManual,
  reqUserAuto
} from '../../api'

const state = {
  shiWuTap:[],
  manual:[],
  user:[]
}
const actions = {
  async getShiWuTap({commit},cb){
    const result = await reqShiWuTap()
    if(+result.code === 200){
      commit('reseive_shiWuTap',result.data)
      cb()
    }else {
      console.log('请求出错');
    }
  },
  async getManual({commit}){
    const result = await reqManual()
    if(+result.code === 200){
      commit('reseive_manual',result.data)
    }else {
      console.log('请求出错');
    }
  },
  async getUser({commit},pageNum){
    const result = await reqUserAuto(pageNum)
    if(+result.code === 200){
      commit('reseive_user',result.data.result)
    }else {
      console.log('请求出错');
    }
  },
}
const mutations = {
  reseive_shiWuTap(state,data){
    state.shiWuTap = data
  },
  reseive_manual(state,data){
    state.manual = data
  },
  reseive_user(state,data){
    state.user.push(...data)
  },
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
