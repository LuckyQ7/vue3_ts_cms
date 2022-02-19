<template>
  <router-view v-slot="props">
    <el-config-provider :locale="locale">
      <component :is="props.Component"></component>
    </el-config-provider>
  </router-view>
</template>

<script lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less"></style>
