<template>
  <div class="nav-header">
    <el-icon
      :class="['fold', isCollapse ? 'unfold' : ''].join(' ')"
      @click="handleFoldClick"
    >
      <fold />
    </el-icon>

    <div class="content">
      <LbreadcrumbVue :breadcrumbInfo="breadcrumbInfo" />
      <div class="content-right">
        <el-avatar
          :size="40"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleLogOutClick">
                退出登录
              </el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Fold, ArrowDown } from '@element-plus/icons-vue'
import cache from '@/utils/cache'
import router from '@/router'
import LbreadcrumbVue from '@/base-components/breadcrumb/src/breadcrumb.vue'
import { pathMapToMenu } from '@/utils/map-menu'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['changeIsCollapse'],
  components: { Fold, ArrowDown, LbreadcrumbVue },
  setup(props, context) {
    const isCollapse = ref(false)
    const handleFoldClick = () => {
      isCollapse.value = !isCollapse.value
      context.emit('changeIsCollapse', isCollapse.value)
    }
    const handleLogOutClick = () => {
      cache.deleteCache('token')
      cache.deleteCache('userInfo')
      cache.deleteCache('userMenus')
      router.push('/login')
    }
    const breadcrumbInfo = computed(() => {
      const store = useStore()
      const userMenus = store.state.LoginModule.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapToMenu(userMenus, currentPath)
    })

    return {
      handleFoldClick,
      isCollapse,
      handleLogOutClick,
      breadcrumbInfo
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .content {
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 16px;
    padding-left: 10px;
    padding-top: 2px;

    .content-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el-avatar {
        margin-right: 10px;
      }
    }
  }
}
.fold {
  cursor: pointer;
  font-size: 24px;
  transition: all 1s ease;
}

.unfold {
  transform: rotateY(180deg);
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
