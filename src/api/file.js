import request from '../utils/request.js'

export default {
  fileList (params) {
    return request({
      url: '/file/list',
      method: 'post',
      data: params,
      mock: false
    })
  },
  fileAdd (params) {
    return request({
      url: '/file/add',
      method: 'post',
      data: params,
      mock: false
    })
  },
  fileItem (params) {
    return request({
      url: '/file/item',
      method: 'post',
      data: params,
      mock: false
    })
  },
  fileUpdate (params) {
    return request({
      url: '/file/update',
      method: 'post',
      data: params,
      mock: false
    })
  },
  fileDelete (params) {
    return request({
      url: '/file/update',
      method: 'post',
      data: params,
      mock: false
    })
  },
  fileCompletelyDelete (params) {
    return request({
      url: '/file/delete',
      method: 'post',
      data: params,
      mock: false
    })
  }
}
