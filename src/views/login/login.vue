<template>
  <div class="login">
    <login-panel-vue></login-panel-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanelVue from './components/login-panel.vue'
export default defineComponent({
  name: 'Login',
  components: { loginPanelVue },
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.app {
  display: flex;
  align-items: center;
}
.login {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
