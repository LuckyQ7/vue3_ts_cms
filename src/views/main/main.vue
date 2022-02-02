<template>main</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main'
})
</script>

<style lang="less">
.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-active,
.router-leave-active {
  transition: all 1s ease;
}
</style>
