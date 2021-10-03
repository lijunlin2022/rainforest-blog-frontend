import request from '../utils/request.js'
import dirFunctions from './dir.js'
import fileFunctions from './file.js'
import userFunctions from './user.js'

export default {
  ...dirFunctions,
  ...fileFunctions,
  ...userFunctions,
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
  }
}
