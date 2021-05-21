<template>
  <div>
    <div class="text-center">
      <h1>
        Performance Chart
      </h1>
      <canvas id="bubble-chart" width="50" height="20"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import bubbleChartData from '../../bubble-data.js'
import axios from 'axios';

export default {
  name: 'BubbleChart',
  data() {
    return {
      isBusy: false,
      fields: [
        {
          key: 'date',
          sortable: true,
        },
        {
          key: 'id',
          sortable: true,
        },
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'emotion',
          sortable: true,
        }
      ],
      items: [],
      cultivar: [],
      bubbleChartData: bubbleChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('bubble-chart');
    new Chart(ctx, this.bubbleChartData);
  },
  created() {
    this.isBusy = true;
    console.log(location.host);
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/attendance/getAll`)
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
        this.isBusy = false;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
