import { request } from "../utils/request";

export function getNotebooksList() {
  return request({
    url: "/notebook/list",
    method: "get",
  });
}

export function getLatestUpdatedNotebooksList(current, size) {
  return request({
    url: "/notebook/page",
    method: "get",
    params: {
      current,
      size,
    },
  });
}
