/* eslint-disable @typescript-eslint/no-namespace */
export interface IAccountLoginType {
  name: string
  password: string
}

export interface ILoginResultType {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export declare namespace userInfo {
  export interface Role {
    id: number
    name: string
    intro: string
    createAt: Date
    updateAt: Date
  }

  export interface Department {
    id: number
    name: string
    parentId: number
    createAt: Date
    updateAt: Date
    leader: string
  }

  export interface Data {
    id: number
    name: string
    realname: string
    cellphone: number
    enable: number
    createAt: Date
    updateAt: Date
    role: Role
    department: Department
  }

  export interface RootObject {
    data: Data
  }
}

export declare namespace userMenus {
  export interface Child {
    id: number
    url: string
    name: string
    sort: number
    type: number
    children?: any
    parentId: number
  }

  export interface Datum {
    id: number
    name: string
    type: number
    url: string
    icon: string
    sort: number
    children: Child[]
  }

  export interface RootObject {
    data: Datum
  }
}
