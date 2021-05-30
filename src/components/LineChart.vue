<script>
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {type: Array, required: false,},
    chartLabels: {type: Array, required: true,},

    chartAngry: {type: Array, required: true,},
    chartAngryData: {type: Array, required: true,},
    chartAngryLabels: {type: Array, required: true,},

    chartDisgust: {type: Array, required: true,},
    chartDisgustData: {type: Array, required: true,},
    chartDisgustLabels: {type: Array, required: true,},

    chartFearful: {type: Array, required: true,},
    chartFearfulData: {type: Array, required: true,},
    chartFearfulLabels: {type: Array, required: true,},

    chartSad: {type: Array, required: true,},
    chartSadData: {type: Array, required: true,},
    chartSadLabels: {type: Array, required: true,},

    chartNeutral: {type: Array, required: true,},
    chartNeutralData: {type: Array, required: true,},
    chartNeutralLabels: {type: Array, required: true,},

    chartHappy: {type: Array, required: true,},
    chartHappyData: {type: Array, required: true,},
    chartHappyLabels: {type: Array, required: true,},

    chartSurprised: {type: Array, required: true,},
    chartSurprisedData: {type: Array, required: true,},
    chartSurprisedLabels: {type: Array, required: true,},    
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
          text: 'Performance',
        },
      },
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.chartSadLabels,
        datasets: [
          {                
              label: 'Sad',
              borderColor: 'rgb(231,233,237)',
              pointBackgroundColor: 'black',
              borderWidth: 1,
              pointBorderColor: 'rgb(231,233,237)',
              backgroundColor: 'rgb(231,233,237)',
              data: this.chartSadData,
          },
        ],  
      },     
      this.options
    );
  },
};
</script>
