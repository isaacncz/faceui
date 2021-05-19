<template>
  <div>
    <canvas id="planet-chart" width="50" height="20"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>