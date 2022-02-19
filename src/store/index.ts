import { createStore, useStore as VuexUseStore } from 'vuex'
import type { Store } from 'vuex'
import { StateType, IStore } from './types'
import LoginModule from './login/login'
// 这里传入的泛型决定了根state的类型
const store = createStore<StateType>({
  state: {
    name: 'vue3'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    LoginModule
  }
})

export function initLoadLoginState() {
  store.dispatch('LoginModule/initStateAction')
}

export function useStore(): Store<IStore> {
  return VuexUseStore()
}

export default store
