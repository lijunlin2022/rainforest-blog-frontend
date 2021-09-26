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

function fileItem (params) {
  return request({
    url: '/file/item',
    method: 'post',
    data: params,
    mock: false
  })
}

function fileUpdate (params) {
  return request({
    url: '/file/update',
    method: 'post',
    data: params,
    mock: false
  })
}

function fileDelete (params) {
  return request({
    url: '/file/delete',
    method: 'post',
    data: params,
    mock: false
  })
}

export default {
  fileList,
  fileAdd,
  fileItem,
  fileUpdate,
  fileDelete
}
