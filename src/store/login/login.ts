import { Module } from 'vuex'
import { LoginStateType } from './types'
import { StateType } from '../types'
import {
  AccountLoginRequest,
  GetUserInfoByAccountLogin,
  GetUserMenusByRoleId
} from '@/service/login/login'
import cache from '@/utils/cache'
import { userInfo, userMenus } from '@/service/login/type'
import router from '@/router'
import mapUserMenusToRoutes from '@/utils/map-menu'
/*
  S 模块state的类型
  R 根模块state的类型
*/
const LoginModule: Module<LoginStateType, StateType> = {
  namespaced: true,
  state() {
    return {
      name: '',
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, uesrInfo: userInfo.Data) {
      state.userInfo = uesrInfo
    },
    changeUserMenus(state, userMenus: userMenus.RootObject) {
      state.userMenus = userMenus
      const routes = mapUserMenusToRoutes(userMenus)
      routes.forEach((item) => {
        router.addRoute('main', item)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 请求登录
      const res = await AccountLoginRequest(payload)
      const { id, token } = res.data
      cache.setCache('token', token)
      commit('changeToken', token)
      // 请求用户信息
      const userInfoRes = await GetUserInfoByAccountLogin(id)
      const { data } = userInfoRes
      commit('changeUserInfo', data)
      cache.setCache('userInfo', data)
      // 请求用户角色菜单
      const { data: userMenusData } = await GetUserMenusByRoleId(data.role.id)
      commit('changeUserMenus', userMenusData)
      cache.setCache('userMenus', userMenusData)
      // 跳转首页
      router.push('/main')
    },
    initStateAction({ commit }) {
      const commitFn = (action: string, key: string) => {
        const value = cache.getCache(key)
        if (value) {
          commit(action, value)
        }
      }
      commitFn('changeToken', 'token')
      commitFn('changeUserInfo', 'userInfo')
      commitFn('changeUserMenus', 'userMenus')
    }
  },
  getters: {}
}

export default LoginModule
