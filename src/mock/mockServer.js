import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import cateList from './cateList.json'

Mock.mock('/home', {
  code: 0,
  data: shouye_data
});
Mock.mock( '/classify', {
  code: 0,
  data: cateList
});

