/**
 * 环境配置封装
 */
const env = process.env.NODE_ENV || 'production'
const EnvConfig = {
  development: {
    baseApi: '/',
    mockApi: 'http://rap2api.taobao.org/app/mock/290374/example'
  },
  test: {
    baseApi: '/',
    mockApi: 'http://rap2api.taobao.org/app/mock/290374/api'
  },
  production: {
    baseApi: '/',
    mockApi: ''
  }
}

export default {
  env,
  mock: true,
  namespace: 'rainforestBlog',
  ...EnvConfig[env]
}
