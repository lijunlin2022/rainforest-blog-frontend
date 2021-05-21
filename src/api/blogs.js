import { request } from "../utils/request";

export function getBlogList() {
  return request({
    url: "/blog/list",
    method: "get",
  });
}

export function getHotBlogList() {
  return request({
    url: "/blog/hot",
    method: "get",
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

export function getBlogDetail(id) {
  return request({
    url: "/blog/detail",
    method: "get",
    params: {
      id,
    },
  });
}

export function createNewBlog(blogData) {
  return request({
    url: "/blog/new",
    method: "post",
    data: blogData,
  });
}

export function updateBlog(id, blogData) {
  return request({
    url: `/blog/update?id=${id}`,
    method: "post",
    data: blogData,
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
