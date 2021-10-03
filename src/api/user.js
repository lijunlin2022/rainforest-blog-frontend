import request from '../utils/request.js'

export default {
  login (params) {
    return request({
      url: '/user/login',
      method: 'post',
      data: params,
      mock: false
    })
  }
}
