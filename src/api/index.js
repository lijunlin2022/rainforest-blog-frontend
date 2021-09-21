import request from '../utils/request.js'
import dirFunctions from './dir.js'
import fileFuncions from './file.js'

export default {
  ...dirFunctions,
  ...fileFuncions,
  login (params) {
    return request({
      url: '/user/login',
      method: 'post',
      data: params
    })
  },
  noticeCount () {
    return request({
      url: '/notice',
      method: 'get',
      mock: true
    })
  },
  menuList () {
    return request({
      url: '/menu',
      method: 'get',
      mock: true
    })
  },
  userList (params) {
    return request({
      url: '/user/list',
      method: 'post',
      data: params
    })
  },
  userDelete (params) {
    return request({
      url: '/user/delete',
      method: 'post',
      data: params
    })
  }
}
