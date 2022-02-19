<template>
  <div class="user">
    <Lform v-bind="formConfig" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Lform from '@/base-components/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    Lform
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
