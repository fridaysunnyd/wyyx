import {reqGoods} from '../../api'
const state = {
  goodsInfo:{}
}
const actions = {
  async getGoodsInfo({commit}){
    const result = await reqGoods()
    if(result.code === 0){
      commit('reseive_goodsInfo',result.data)
    }else {
      console.log('请求出错');
    }
  }
}
const mutations = {
  reseive_goodsInfo(state,data){
    state.goodsInfo = data
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
