import { htmlDecode } from "./utils/htmlUtils";
import { getYearMonthDay, getMonthDay } from "./utils/timeUtils";
import router from "./router/index";

function changeRoute(path, id) {
  router.push({
    path: path,
    query: {
      id,
    },
  });
}

export default {
  htmlDecode,
  getYearMonthDay,
  getMonthDay,
  changeRoute,
};
