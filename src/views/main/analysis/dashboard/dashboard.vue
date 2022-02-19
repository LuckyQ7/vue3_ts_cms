<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <div style="width: 600px; height: 400px" ref="divRef"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    console.log(props)
    onMounted(() => {
      const myChart = echarts.init(divRef.value!)
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      myChart.setOption(option)
    })
    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
