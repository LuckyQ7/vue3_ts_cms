import { IformItem, IForm } from '@/base-components/form'

const formItems: IformItem[] = [
  {
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名',
    type: 'input'
  },
  {
    label: '地区',
    rules: [],
    placeholder: '请选择地区',
    type: 'select',
    options: [
      {
        title: '浙江',
        value: '1'
      }
    ]
  },
  {
    label: '注册时间',
    rules: [],
    placeholder: '请选择时间范围',
    type: 'dataTimePicker'
  }
]

export const formConfig: IForm = {
  formItems
}
