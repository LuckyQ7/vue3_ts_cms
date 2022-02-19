import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import { initLoadLoginState } from './store/index'
// 取出本地存贮的数据初始化loginState
initLoadLoginState()
createApp(App).use(router).use(store).mount('#app')
