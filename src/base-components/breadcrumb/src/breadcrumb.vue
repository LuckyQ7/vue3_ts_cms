<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbInfo" :key="item.name">
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  name: 'breadcrumb',
  props: {
    breadcrumbInfo: {
      type: Array as PropType<IBreadcrumb[]>
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
