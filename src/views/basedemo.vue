<template>
  <div ref="chart" style="height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts'; // 引入 Echarts

export default {
  name: 'LineChart',
  mounted() {
    setTimeout(() => {
      this.renderChart();
    }, 200);
  },
  methods: {
    renderChart() {
      const chartDom = this.$refs.chart;
      const chart = echarts.init(chartDom);

      const option = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line'
        }]
      };

      chart.setOption(option);
    }
  }
}
</script>