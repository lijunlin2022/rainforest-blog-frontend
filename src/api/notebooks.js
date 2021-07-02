import { request } from "../utils/request";

/**
 * @param {Number} current
 * @param {Number} size
 * @param {String} keyword
 * @returns
 */
export function getNotebooksList(current, size, keyword) {
  return request({
    url: "/notebook/list",
    method: "get",
    params: {
      current,
      size,
      keyword,
    },
  });
}

export function getNotebookDetail(id) {
  return request({
    url: "/notebook/detail",
    method: "get",
    params: {
      id,
    },
  });
}
