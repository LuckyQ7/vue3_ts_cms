import request from '../index'
import {
  IAccountLoginType,
  ILoginResultType,
  IDataType,
  userInfo,
  userMenus
} from './type'

// 枚举类型 存放API
enum LoginAPI {
  AccountLogin = '/login',
  GetUserInfo = '/users/',
  GetUserMenus = '/role/'
}

export const AccountLoginRequest = (data: IAccountLoginType) => {
  return request.post<IDataType<ILoginResultType>>({
    url: LoginAPI.AccountLogin,
    data
  })
}

export const GetUserInfoByAccountLogin = (id: number) => {
  return request.get<IDataType<userInfo.Data>>({
    url: LoginAPI.GetUserInfo + id
  })
}

export const GetUserMenusByRoleId = (id: number) => {
  return request.get<IDataType<userMenus.RootObject>>({
    url: LoginAPI.GetUserMenus + id + '/menu'
  })
}
