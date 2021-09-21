import request from '../utils/request.js'

function fileList (params) {
  return request({
    url: '/file/list',
    method: 'post',
    data: params,
    mock: false
  })
}

function fileAdd (params) {
  return request({
    url: '/file/add',
    method: 'post',
    data: params,
    mock: false
  })
}

export default {
  fileList,
  fileAdd
}
