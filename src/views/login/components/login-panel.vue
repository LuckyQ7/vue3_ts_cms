<template>
  <div class="app">
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <el-icon><user /></el-icon> <span class="label"> 账号登陆</span>
        </template>
        <login-account-vue ref="accountRef"></login-account-vue>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <el-icon><iphone /></el-icon> <span class="label"> 手机登陆</span>
        </template>
        <login-phone-vue></login-phone-vue>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox label="记住密码" v-model="isKeepPassword"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="button-login" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import loginAccountVue from './login-account.vue'
import loginPhoneVue from './login-phone.vue'
export default defineComponent({
  components: { User, Iphone, loginAccountVue, loginPhoneVue },
  setup() {
    const isKeepPassword = ref(false)
    // 组件实例的类型
    const accountRef = ref<InstanceType<typeof loginAccountVue>>()
    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.el-tabs {
  width: 400px;
}

.el-icon,
.label {
  vertical-align: middle;
}

.account-control {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.button-login {
  width: 100%;
  margin-top: 10px;
}
</style>
