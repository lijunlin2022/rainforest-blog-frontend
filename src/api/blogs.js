import { request } from "../utils/request";

export function getBlogList() {
  return request({
    url: "/blog/list",
    method: "get",
  });
}

/**
 * @param {Number} id
 */
export function getBlogDetail(id) {
  return request({
    url: "/blog/detail",
    method: "get",
    params: {
      id,
    },
  });
}

/**
 * @param {Object} blogData
 */
export function createNewBlog(blogData) {
  return request({
    url: "/blog/new",
    method: "post",
    data: blogData,
  });
}

/**
 * @param {Number} id
 * @param {Object} blogData
 */
export function updateBlog(id, blogData) {
  return request({
    url: `/blog/update?id=${id}`,
    method: "post",
    data: blogData,
  });
}

/**
 * @param {Number} id
 * @param {String} author
 */
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
