import request from '../utils/request.js'
export default {
  repositoryList () {
    return request({
      url: '/dir/list',
      method: 'post',
      data: {
        dirType: 0,
        state: 0
      },
      mock: false
    })
  },
  dirList (params) {
    return request({
      url: '/dir/list',
      method: 'post',
      data: params,
      mock: false
    })
  },
  dirUpdate (params) {
    return request({
      url: '/dir/update',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
   * 删除文件夹, 此时只是将文件夹的 state 变为 1
   * @param {Object} params
   * @returns
   */
  dirDelete (params) {
    return request({
      url: '/dir/update',
      method: 'post',
      data: params,
      mock: false
    })
  },
  dirCompletelyDelete (params) {
    return request({
      url: '/dir/delete',
      method: 'post',
      data: params,
      mock: false
    })
  },
  dirAdd (params) {
    return request({
      url: '/dir/add',
      method: 'post',
      data: params,
      mock: false
    })
  }
}
