import { request } from "./request";

// 增加
export function newNote(noteData) {
  return request({
    url: "/note/new",
    method: "post",
    data: noteData,
  });
}

// 删除
export function deleteBlog(id, author) {
  return request({
    url: "/blog/del",
    method: "post",
    data: {
      id,
      author,
    },
  });
}

// 修改
export function updateNote(id, noteData) {
  return request({
    url: `/note/${id}`,
    method: "patch",
    data: noteData,
  });
}

// 查询单个
export function getNoteDetail(queryData) {
  return request({
    url: `/note/`,
    method: "post",
    data: queryData,
  });
}

// 查询多个
export function getNoteList(queryData) {
  return request({
    url: "/note/list",
    method: "post",
    data: queryData,
  });
}
