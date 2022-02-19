<template>
  <div>
    <el-form
      ref="formRef"
      :model="account"
      :rules="rules"
      label-width="80px"
      inline-message
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="account.account"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      account: localCache.getCache('account'),
      password: localCache.getCache('password')
    })
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) return
        if (isKeepPassword) {
          localCache.setCache('account', account.account)
          localCache.setCache('password', account.password)
        } else {
          localCache.deleteCache('account')
          localCache.deleteCache('password')
        }

        store.dispatch('LoginModule/accountLoginAction', {
          name: account.account,
          password: account.password
        })
      })
    }

    return {
      formRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
