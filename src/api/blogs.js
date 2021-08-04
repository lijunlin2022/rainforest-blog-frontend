import { request } from "./request";

/**
 * @param {Number} pid
 * @param {Number} current
 * @param {Number} size
 * @param {String} author
 * @param {String} keyword
 * @returns
 */
export function getBlogsList(pid, current, size, author, keyword) {
  return request({
    url: "/blog/list",
    method: "get",
    params: {
      pid,
      current,
      size,
      author,
      keyword,
    },
  });
}

/**
 * @param {Number} id
 * @param {Number} pid
 * @param {String} title
 * @returns
 */
export function getBlogDetail(id, pid, title) {
  return request({
    url: "/blog/detail",
    method: "get",
    params: {
      id,
      pid,
      title,
    },
  });
}

/**
 * @param {Object} blogData
 * @returns
 */
export function newBlog(blogData) {
  return request({
    url: "/blog/new",
    method: "post",
    data: blogData,
  });
}

/**
 * @param {Number} id
 * @param {Object} blogData
 * @returns
 */
export function updateBlog(id, blogData) {
  return request({
    url: `/blog/update?id=${id}`,
    method: "post",
    data: blogData,
  });
}

export function getIdSetOfInterfaces() {
  return request({
    url: "/blog/interfaces",
    method: "get",
  });
}

export function getBlogListByPage(current, size) {
  return request({
    url: "/blog/listByPage",
    method: "get",
    params: {
      current,
      size,
    },
  });
}

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
