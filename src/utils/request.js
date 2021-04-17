import axios from "axios";
export function request(config) {
  const instance = axios.create({
    baseURL: "/api",
  });
  return instance(config);
}
