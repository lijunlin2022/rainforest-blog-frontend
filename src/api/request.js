import axios from "axios";
// import router from "@/router";
// import store from "@/store";

export function request(config) {
  const instance = axios.create({
    baseURL: "/api",
  });

  // instance.interceptors.response.use((res) => {
  //   // 拦截响应，做统一处理
  //   if (res.data.code === 401) {
  //     router.replace("/login");
  //     store.commit("logout");
  //   }
  //   return res;
  // });

  return instance(config);
}
