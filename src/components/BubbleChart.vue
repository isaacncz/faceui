<script>
import { Bubble, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
export default {
  extends: Bubble,
  mixins: [reactiveProp],
  props: {
    chartAngry: { type: Array, required: true },
    chartAngryData: { type: Array, required: true },
    chartAngryLabels: { type: Array, required: true },

    chartDisgust: { type: Array, required: true },
    chartDisgustData: { type: Array, required: true },
    chartDisgustLabels: { type: Array, required: true },

    chartFearful: { type: Array, required: true },
    chartFearfulData: { type: Array, required: true },
    chartFearfulLabels: { type: Array, required: true },

    chartSad: { type: Array, required: true },
    chartSadData: { type: Array, required: true },
    chartSadLabels: { type: Array, required: true },

    chartNeutral: { type: Array, required: true },
    chartNeutralData: { type: Array, required: true },
    chartNeutralLabels: { type: Array, required: true },

    chartHappy: { type: Array, required: true },
    chartHappyData: { type: Array, required: true },
    chartHappyLabels: { type: Array, required: true },

    chartSurprised: { type: Array, required: true },
    chartSurprisedData: { type: Array, required: true },
    chartSurprisedLabels: { type: Array, required: true },
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
              scaleLabel: {
                display: true,
                labelString: 'Quantity',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                stepSize: 1,
                max: 31,
                min: 1,
              },
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
                labelString: 'Days',
              },
            },
          ],
        },
        legend: {
          display: true,
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
        datasets: [
          {
            label: 'Angry',
            data: [
              { x: this.chartAngryLabels[0], y: this.chartAngryData[0], r: 10 },
              { x: this.chartAngryLabels[1], y: this.chartAngryData[1], r: 10 },
              { x: this.chartAngryLabels[2], y: this.chartAngryData[2], r: 10 },
              { x: this.chartAngryLabels[3], y: this.chartAngryData[3], r: 10 },
              { x: this.chartAngryLabels[4], y: this.chartAngryData[4], r: 10 },
              { x: this.chartAngryLabels[5], y: this.chartAngryData[5], r: 10 },
              { x: this.chartAngryLabels[6], y: this.chartAngryData[6], r: 10 },
              { x: this.chartAngryLabels[7], y: this.chartAngryData[7], r: 10 },
              { x: this.chartAngryLabels[8], y: this.chartAngryData[8], r: 10 },
              { x: this.chartAngryLabels[9], y: this.chartAngryData[9], r: 10 },
            ],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Disgust',
            data: [
              {
                x: this.chartDisgustLabels[0],
                y: this.chartDisgustData[0],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[1],
                y: this.chartDisgustData[1],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[2],
                y: this.chartDisgustData[2],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[3],
                y: this.chartDisgustData[3],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[4],
                y: this.chartDisgustData[4],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[5],
                y: this.chartDisgustData[5],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[6],
                y: this.chartDisgustData[6],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[7],
                y: this.chartDisgustData[7],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[8],
                y: this.chartDisgustData[8],
                r: 10,
              },
              {
                x: this.chartDisgustLabels[9],
                y: this.chartDisgustData[9],
                r: 10,
              },
            ],
            backgroundColor: 'rgb(153, 102, 255)',
          },
          {
            label: 'Fearful',
            data: [
              {
                x: this.chartFearfulLabels[0],
                y: this.chartFearfulData[0],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[1],
                y: this.chartFearfulData[1],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[2],
                y: this.chartFearfulData[2],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[3],
                y: this.chartFearfulData[3],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[4],
                y: this.chartFearfulData[4],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[5],
                y: this.chartFearfulData[5],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[6],
                y: this.chartFearfulData[6],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[7],
                y: this.chartFearfulData[7],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[8],
                y: this.chartFearfulData[8],
                r: 10,
              },
              {
                x: this.chartFearfulLabels[9],
                y: this.chartFearfulData[9],
                r: 10,
              },
            ],
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Sad',
            data: [
              { x: this.chartSadLabels[0], y: this.chartSadData[0], r: 10 },
              { x: this.chartSadLabels[1], y: this.chartSadData[1], r: 10 },
              { x: this.chartSadLabels[2], y: this.chartSadData[2], r: 10 },
              { x: this.chartSadLabels[3], y: this.chartSadData[3], r: 10 },
              { x: this.chartSadLabels[4], y: this.chartSadData[4], r: 10 },
              { x: this.chartSadLabels[5], y: this.chartSadData[5], r: 10 },
              { x: this.chartSadLabels[6], y: this.chartSadData[6], r: 10 },
              { x: this.chartSadLabels[7], y: this.chartSadData[7], r: 10 },
              { x: this.chartSadLabels[8], y: this.chartSadData[8], r: 10 },
              { x: this.chartSadLabels[9], y: this.chartSadData[9], r: 10 },
            ],
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Neutral',
            data: [
              {
                x: this.chartNeutralLabels[0],
                y: this.chartNeutralData[0],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[1],
                y: this.chartNeutralData[1],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[2],
                y: this.chartNeutralData[2],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[3],
                y: this.chartNeutralData[3],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[4],
                y: this.chartNeutralData[4],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[5],
                y: this.chartNeutralData[5],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[6],
                y: this.chartNeutralData[6],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[7],
                y: this.chartNeutralData[7],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[8],
                y: this.chartNeutralData[8],
                r: 10,
              },
              {
                x: this.chartNeutralLabels[9],
                y: this.chartNeutralData[9],
                r: 10,
              },
            ],
            backgroundColor: 'rgb(231,233,237)',
          },
          {
            label: 'Happy',
            data: [
              { x: this.chartHappyLabels[0], y: this.chartHappyData[0], r: 10 },
              { x: this.chartHappyLabels[1], y: this.chartHappyData[1], r: 10 },
              { x: this.chartHappyLabels[2], y: this.chartHappyData[2], r: 10 },
              { x: this.chartHappyLabels[3], y: this.chartHappyData[3], r: 10 },
              { x: this.chartHappyLabels[4], y: this.chartHappyData[4], r: 10 },
              { x: this.chartHappyLabels[5], y: this.chartHappyData[5], r: 10 },
              { x: this.chartHappyLabels[6], y: this.chartHappyData[6], r: 10 },
              { x: this.chartHappyLabels[7], y: this.chartHappyData[7], r: 10 },
              { x: this.chartHappyLabels[8], y: this.chartHappyData[8], r: 10 },
              { x: this.chartHappyLabels[9], y: this.chartHappyData[9], r: 10 },
            ],
            backgroundColor: 'rgb(255, 205, 86)',
          },
          {
            label: 'Surprised',
            data: [
              {
                x: this.chartSurprisedLabels[0],
                y: this.chartSurprisedData[0],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[1],
                y: this.chartSurprisedData[1],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[2],
                y: this.chartSurprisedData[2],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[3],
                y: this.chartSurprisedData[3],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[4],
                y: this.chartSurprisedData[4],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[5],
                y: this.chartSurprisedData[5],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[6],
                y: this.chartSurprisedData[6],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[7],
                y: this.chartSurprisedData[7],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[8],
                y: this.chartSurprisedData[8],
                r: 10,
              },
              {
                x: this.chartSurprisedLabels[9],
                y: this.chartSurprisedData[9],
                r: 10,
              },
            ],
            backgroundColor: 'rgb(255, 159, 64)',
          },
        ],
      },
      this.options
    );
  },
};
</script>
