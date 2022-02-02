import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import HYRequest from '@/service/index'

createApp(App).use(router).use(store).mount('#app')

interface resType {
  data: Record<string, unknown>
  returnCode: string
  success: boolean
}

HYRequest.get<resType>({
  url: 'home/multidata',
  method: 'get',
  interceptors: {
    requestInterceptors: (config) => {
      console.log('单独的')
      return config
    }
  }
}).then((res) => {
  console.log(res)
})
