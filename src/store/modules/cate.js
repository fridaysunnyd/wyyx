import {reqClassify} from '../../api'
const state = {
  classifyInfo:{}
}
const actions = {
  async getClassifyInfo({commit}){
    const result = await reqClassify()
    if(result.code === 0){
      commit('reseive_classifyInfo',result.data)
    }else {
      console.log('请求出错');
    }
  }
}
const mutations = {
  reseive_classifyInfo(state,data){
    state.classifyInfo = data
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
