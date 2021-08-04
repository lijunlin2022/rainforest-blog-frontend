import { request } from "./request";

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

/**
 * @param {Number} id
 * @returns
 */
export function getNotebookDetail(id) {
  return request({
    url: "/notebook/detail",
    method: "get",
    params: {
      id,
    },
  });
}

/**
 * @param {Object} notebookData
 * @returns
 */
export function newNotebook(notebookData) {
  return request({
    url: "/notebook/new",
    method: "post",
    data: notebookData,
  });
}

/**
 * @param {Number} id
 * @param {Object} notebookData
 * @returns
 */
export function updateNotebook(id, notebookData) {
  return request({
    url: `/notebook/update?id=${id}`,
    method: "post",
    data: notebookData,
  });
}
