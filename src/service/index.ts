import HYRequest from './request'
import { BASE_URL } from './request/config'
import cache from '@/utils/cache'
/*
  1.可以创建多个实例
  2.每个实例都有自己的拦截器
  3.每个请求都可以有自己的拦截器
*/
export default new HYRequest({
  baseURL: BASE_URL,
  timeout: 1000 * 60 * 3,
  interceptors: {
    requestInterceptors: (config) => {
      const token = cache.getCache('token')
      if (token) {
        config!.headers!.Authorization = 'Bearer ' + token
      }
      return config
    },
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (config) => {
      return config
    },
    responseInterceptorsCatch: (err) => err
  }
})
