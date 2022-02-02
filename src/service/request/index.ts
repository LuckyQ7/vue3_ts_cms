import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
// 定义拦截器类型
interface HYRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: any) => any
  responseInterceptorsCatch?: (error: any) => any
}
// 自己的接口继承axios的接口 ：扩展axios的AxiosRequestConfig类型
interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  isShowLoding?: boolean
}

class HYRequest {
  // axios实例类型
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loading?: any
  isShowLoading: boolean

  constructor(config: HYRequestConfig) {
    // 赋值axios的实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isShowLoading = config.isShowLoding ?? true
    // 添加对应的实例的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    // 添加对应的实例的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    // 添加所有实例都有的请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    // 添加所有实例都有的响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        console.log(err)
        switch (err.response.status) {
          case '404':
            return console.log('404')
        }
        return err
      }
    )
  }
  // 类的request属性
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((reslove, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      if (config.isShowLoding === false) {
        this.isShowLoading = config.isShowLoding
      }
      this.isShowLoading = true
      // request 实例的 request 方法
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.isShowLoading = true
          reslove(res)
        })
        .catch((err) => {
          this.isShowLoading = true
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export default HYRequest
