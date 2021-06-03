<script>
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Array,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
    chartTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        animation: {
          // duration: 10,
          easing: 'easeOutQuad',
        },
        maintainAspectRatio: false,
        title: {
          display: true,
          text: this.chartTitle,
        },
      },
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Quantity',
            borderColor: '#63C5DA',
            pointBackgroundColor: 'black',
            borderWidth: 1,
            pointBorderColor: '#63C5DA',
            backgroundColor: '#63C5DA',
            data: this.chartData,
          },
        ],
      },
      this.options
    );
  },
};
</script>