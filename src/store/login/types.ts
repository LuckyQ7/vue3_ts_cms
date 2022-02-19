import { userInfo, userMenus } from '@/service/login/type'
export interface LoginStateType {
  name: string
  token: string
  userInfo: userInfo.Data | Record<string, never>
  userMenus: userMenus.RootObject | []
}
