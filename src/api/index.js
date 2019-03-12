import ajax from './ajax.js'
const BASE = '/api'

//mock数据获取(首页、分类)
export const reqHome = () =>ajax('/home')
export const reqClassify = () =>ajax('/classify')
//网易接口获取识物数据
export const reqShiWuTap = () =>ajax(BASE +'topic/v1/find/getTabs.json')
export const reqManual = () =>ajax(BASE +'topic/v1/find/recManual.json')
export const reqUserAuto = (page) =>ajax(BASE +'topic/v1/find/recAuto.json',{page,size:5})
