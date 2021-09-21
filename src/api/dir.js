import request from '../utils/request.js'

function repositoryList () {
  return request({
    url: '/dir/list',
    method: 'post',
    data: {
      dirType: 0,
      state: 0
    },
    mock: false
  })
}

function dirList (params) {
  return request({
    url: '/dir/list',
    method: 'post',
    data: params,
    mock: false
  })
}

function dirUpdate (params) {
  return request({
    url: '/dir/update',
    method: 'post',
    data: params,
    mock: false
  })
}

/**
 * 删除文件夹
 * 参数格式为 { ids: [] }
 * @param {Object} params
 * @returns
 */
function dirDelete (params) {
  return request({
    url: '/dir/delete',
    method: 'post',
    data: params,
    mock: false
  })
}

function dirAdd (params) {
  return request({
    url: '/dir/add',
    method: 'post',
    data: params,
    mock: false
  })
}
export default {
  repositoryList,
  dirList,
  dirUpdate,
  dirDelete,
  dirAdd
}
