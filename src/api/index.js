import request from '../utils/request.js'

export default {
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
      method: 'get'
    })
  },
  menuList () {
    return request({
      url: '/menu',
      method: 'get'
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
