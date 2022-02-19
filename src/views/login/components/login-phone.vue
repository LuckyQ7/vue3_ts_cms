<template>
  <el-form
    ref="ruleFormRef"
    :model="phone"
    :rules="rules"
    label-width="80px"
    status-icon
  >
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="code">
        <el-input v-model="phone.code"></el-input>
        <el-button type="primary" class="getCode">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}

.getCode {
  margin-left: 8px;
}
</style>
