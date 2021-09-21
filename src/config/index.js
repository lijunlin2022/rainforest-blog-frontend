/**
 * 环境配置封装
 */
const env = process.env.NODE_ENV || 'production'
const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'http://rap2api.taobao.org/app/mock/290374/api'
  },
  test: {
    baseApi: '/api',
    mockApi: 'http://rap2api.taobao.org/app/mock/290374/api'
  },
  production: {
    baseApi: '/api',
    mockApi: ''
  }
}

export default {
  env,
  mock: true,
  namespace: 'rainforestBlog',
  ...EnvConfig[env]
}
