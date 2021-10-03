import storage from '../utils/storage.js'

export default {
  saveUserInfo (state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  },
  reomveUserInfo (state) {
    state.userInfo = {}
    storage.clearItem('userInfo')
  }
}
