<template>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <el-button type="warning">Primary</el-button>

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
