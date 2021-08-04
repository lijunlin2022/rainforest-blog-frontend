import { request } from "./request";

export function login(userData) {
  return request({
    url: "/user/login",
    method: "post",
    data: userData,
  });
}
