import { request } from "./request";

// 增加
export function newNotebook(notebookData) {
  return request({
    url: "/notebook/new",
    method: "post",
    data: notebookData,
  });
}

// 删除

// 修改
export function updateNotebook(id, notebookData) {
  return request({
    url: `/notebook/update?id=${id}`,
    method: "post",
    data: notebookData,
  });
}

// 查询单个
export function getNotebookDetail(id) {
  return request({
    url: `/notebook/${id}`,
    method: "get",
  });
}

// 查询多个
export function getNotebookList(queryData) {
  return request({
    url: "/notebook/list",
    method: "post",
    data: queryData,
  });
}
