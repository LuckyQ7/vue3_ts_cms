export const rules = {
  account: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 12,
      message: '账号长度为6到12位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 12,
      message: '密码长度为6到12位',
      trigger: 'blur'
    }
  ]
}
