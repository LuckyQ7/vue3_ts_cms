<template>
  <div class="form">
    <el-form>
      <el-row :gutter="20">
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="layOutSize">
            <el-form-item :label="item.label + ':'" :rules="item.rules">
              <!-- 输入框 -->
              <template
                v-if="
                  item.type === 'input' ||
                  item.type === 'password' ||
                  item.type === 'number'
                "
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :type="item.type === 'number' ? 'number' : 'input'"
                ></el-input>
              </template>
              <!-- 选择框 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  fit-input-width
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="sItem in item.options"
                    :key="sItem.value"
                    :label="sItem.title"
                    :value="sItem.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <!-- 时间选择器 -->
              <template v-else-if="item.type === 'dataTimePicker'">
                <el-date-picker
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-bind="item.otherOptions"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IformItem } from '../types/index'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IformItem[]>,
      required: true,
      default: () => []
    },
    layOutSize: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 4
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.form {
  padding: 10px;
}
.el-select {
  width: 100%;
}
</style>
