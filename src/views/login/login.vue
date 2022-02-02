<template>
  <el-time-picker
    v-model="value1"
    is-range
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
  >
  </el-time-picker>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const value1 = ref('')
    return {
      value1
    }
  }
})
</script>

<style lang="less"></style>
