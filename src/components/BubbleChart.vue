<template>
  <div>
    <canvas id="bubble-chart" width="50" height="20"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import bubbleChartData from '../bubble-data.js'

export default {
  name: 'BubbleChart',
  data() {
    return {
      bubbleChartData: bubbleChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('bubble-chart');
    new Chart(ctx, this.bubbleChartData);
  }
}
</script>