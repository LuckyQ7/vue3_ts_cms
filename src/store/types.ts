import { LoginStateType } from './login/types'

interface StateType {
  name: string
}

interface IrootWithModule {
  LoginModule: LoginStateType
}

export type IStore = StateType & IrootWithModule

export { StateType }
