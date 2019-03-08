import {reqHome} from '../../api'
const state = {
  homeInfo:{}
}
const actions = {
  async getHomeInfo({commit}){
    const result = await reqHome()
    if(result.code === 0){
      commit('reseive_homeInfo',result.data)
    }else {
      console.log('请求出错');
    }
  }
}
const mutations = {
  reseive_homeInfo(state,data){
    state.homeInfo = data
  }
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
