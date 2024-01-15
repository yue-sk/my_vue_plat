<template>
  <div>
    <div>
      <el-date-picker v-model="startDate" type="date" aria-placeholder="开始日期"></el-date-picker>
      <el-date-picker v-model="endDate" type="date" aria-placeholder="结束日期"></el-date-picker>
      <el-button @click="fetchData">获取数据</el-button>
    </div>
    <div ref="chart" style="height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'; // 引入 Echarts
import { fetchCommits } from '../api/index';

export default {
  name: 'LineChart',
  data() {
    return {
      Xdata: [],// 定义一个用于存放 x 轴数据的变量
      startDate: "",
      endDate: ""
    };
  },
  mounted() {
    this.fetchData(); // 在组件挂载时获取数据
  },
  methods: {
    fetchData() {
      fetchCommits(this.startDate, this.endDate)
        .then(response => {
          console.log(this.startDate,this.endDate);
          console.log(response.data["X"]); // 打印返回的数据
          this.Xdata = response.data["X"]; // 将返回的数据赋值给 Xdata 变量
          this.renderChart(); // 调用渲染图表的方法
        })
        .catch(error => {
          console.error(error); // 处理错误
        });
    },
    renderChart() {
      const chartDom = this.$refs.chart;
      const chart = echarts.init(chartDom);
      
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.Xdata // 使用 Xdata 变量作为 x 轴数据
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