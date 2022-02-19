type IformItemType =
  | 'input'
  | 'number'
  | 'password'
  | 'select'
  | 'dataTimePicker'

interface IOptions {
  title: string | number
  value: string | number
}

export interface IformItem {
  label?: string
  labelwidth?: string
  rules?: any[]
  placeholder?: any
  type?: IformItemType
  options?: IOptions[]
  otherOptions?: any
}

export interface IForm {
  formItems: IformItem[]
  layOutSize?: any
}
