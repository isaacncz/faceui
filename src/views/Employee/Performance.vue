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
import axios from 'axios';

export default {
  name: 'BubbleChart',
  mounted() {
    const ctx = document.getElementById('bubble-chart');
    new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: 'Angry',
            data: [
              { x: 1, y: 32, r: 10}, 
              { x: 18, y: 108, r: 10}
            ],
            backgroundColor: 'rgb(255, 99, 132)'
          },{
            label: 'Disgusted',
            data: [
              { x: 3, y: 120, r: 10}, 
              { x: 6, y: 92, r: 10}
            ],
            backgroundColor: 'rgb(153, 102, 255)'
          },{
            label: 'Fearful',
            data: [
              { x: 78, y: 16, r: 10}, 
              { x: 15, y: 75, r: 10}
            ],
            backgroundColor: 'rgb(255, 205, 86)'
          },{
            label: 'Sad',
            data: [
              { x: 65, y: 69, r: 10}, 
              { x: 35, y: 36, r: 10}
            ],
            backgroundColor: 'rgb(54, 162, 235)'
          },{
            label: 'Neutral',
            data: [
              { x: 45, y: 98, r: 10}, 
              { x: 59, y: 71, r: 10}
            ],
            backgroundColor: 'rgb(231,233,237)'
          },{
            label: 'Happy',
            data: [
              { x: 35, y: 89, r: 10}, 
              { x: 26, y: 50, r: 10}
            ],
            backgroundColor: 'rgb(75, 192, 192)'
          },{
            label: 'Surprised',
            data: [
              { x: 6, y: 20, r: 10}, 
              { x: 9, y: 18, r: 10}  
            ],
            backgroundColor: 'rgb(255, 159, 64)'
          }        
        ]
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                stepSize: 73,
                max: 365,
                min: 0
              }
            }, {
              scaleLabel: {
                display: true,
                labelString: 'Days'
              }
            }
          ], 
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Output Rate'
              }
            }
          ]      
        }
      }
    });
  },
  created() {
    this.isBusy = true;
    console.log(location.host);
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/attendance/getAll`)
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
      })  
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
