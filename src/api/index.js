import ajax from './ajax.js'

//mock数据获取(首页、分类)
export const reqHome = () =>ajax('/home')
export const reqClassify = () =>ajax('/classify')
export const reqGoods = () =>ajax('/goods')
