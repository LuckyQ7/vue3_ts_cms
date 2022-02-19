<template>
  <div><router-link to="/">路径不正确，点此回首页</router-link></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
