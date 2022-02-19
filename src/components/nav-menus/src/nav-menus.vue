<template>
  <div class="nav-menus">
    <!-- logo -->
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse">vue3+ts</span>
    </div>
    <!-- 菜单 -->
    <div>
      <el-menu
        background-color="#00152b"
        text-color="#97aec4"
        active-text-color="#ffd04b"
        unique-opened
        :default-active="path"
        :collapse="isCollapse"
        router
      >
        <!-- 一级菜单 -->
        <el-sub-menu
          :index="String(Number(index) + 1)"
          v-for="(item, index) in menus"
          :key="item.id"
        >
          <template #title>
            <el-icon>
              <component
                :is="
                  item.icon === 'el-icon-chat-line-round'
                    ? 'ChatLineRound'
                    : item.icon.split('-')[2]
                "
              ></component>
            </el-icon>
            <span> {{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            :index="cItem.url"
            v-for="cItem in item.children"
            :key="cItem.id"
          >
            <template #title> {{ cItem.name }} </template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons-vue'
import { useStore as myUseStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  components: {
    Monitor,
    Setting,
    Goods,
    ChatLineRound
  },
  setup() {
    const store = myUseStore()
    const menus = computed(() => store.state.LoginModule.userMenus)
    const route = useRoute()
    const path = route.fullPath
    return {
      menus,
      path
    }
  }
})
</script>

<style scoped lang="less">
.logo {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  img {
    height: 30px;
    width: 30px;
  }
  color: #fff;
  line-height: 30px;
}

.el-menu {
  border-right: none;
}
</style>
