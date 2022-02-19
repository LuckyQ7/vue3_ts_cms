<template>
  <el-container class="main-container">
    <el-aside :width="isCollapse ? '80px' : '200px'" class="main-aside">
      <nav-menus-vue :isCollapse="isCollapse"></nav-menus-vue>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <nav-header @changeIsCollapse="handleChageIsCollapse"></nav-header>
      </el-header>
      <el-main class="main-main">
        <div class="page">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenusVue from '@/components/nav-menus/src/nav-menus.vue'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  name: 'Main',
  components: {
    NavMenusVue,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleChageIsCollapse = (value: boolean) => {
      isCollapse.value = value
    }
    return {
      isCollapse,
      handleChageIsCollapse
    }
  }
})
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}

.main-aside {
  height: 100%;
  background-color: #071a2b;
}

.main-main {
  background-color: #f0f2f6;
}

.main-header {
  padding: 10;
  display: flex;
  align-items: center;
}

.el-aside {
  transition: all 0.5s ease 0s;
}

.page {
  background-color: #fff;
  text-align: center;
}
</style>
