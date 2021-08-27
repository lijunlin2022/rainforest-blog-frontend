import { htmlDecode, htmlDecodeObject } from '../utils/htmlUtils'
import { getYearMonthDay, getMonthDay } from '../utils/timeUtils'
import router from '../router/index'

function changeRoute (path) {
  router.push({
    path: path
  })
}

export default {
  htmlDecode,
  htmlDecodeObject,
  getYearMonthDay,
  getMonthDay,
  changeRoute
}
