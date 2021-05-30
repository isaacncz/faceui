<template>
  <div class="content container">
    <h1>Performance</h1>
    <div class="container">
      <div class="container-fluid">
        <b-row class="mb-3">
          <b-col cols="12" md="auto">
            Month
            <b-form-select v-model="startDate" :options="datelist">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Please select a month --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-col>
          <b-col cols="12" md="auto">
            Name
            <b-form-select v-model="nameSelected" :options="namelist">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Please select an employee --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col cols="12" md="auto">
            <div>
              <b-overlay
                :show="busy"
                rounded
                opacity="0.6"
                spinner-small
                spinner-variant="warning"
                class="d-inline-block"
              >
                <b-button variant="info" @click="requestData">Find</b-button>
              </b-overlay>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="error-message" v-if="showError">
        <b-alert show variant="warning">{{ errorMessage }}</b-alert>
      </div>
      <div class="error-message-nodata" v-if="nodataError">
        <b-alert show variant="danger">{{ nodataMessage }}</b-alert>
      </div>
      <hr />
      <div class="Chart__container" v-if="loaded">
        <line-chart :chartLabels="chartlabels" :chartData="chartdata" 
          :chartAngry="chartangry" :chartAngryLabels="chartangrylabels" :chartAngryData="chartangrydata"
          :chartDisgust="chartdisgust" :chartDisgustLabels="chartdisgustlabels" :chartDisgustData="chartdisgustdata"
          :chartFearful="chartfearful" :chartFearfulLabels="chartfearfullabels" :chartFearfulData="chartfearfuldata"
          :chartSad="chartsad" :chartSadLabels="chartsadlabels" :chartSadData="chartsaddata"
          :chartNeutral="chartneutral" :chartNeutralLabels="chartneutrallabels" :chartNeutralData="chartneutraldata"
          :chartHappy="charthappy" :chartHappyLabels="charthappylabels" :chartHappyData="charthappydata"
          :chartSurprised="chartsurprised" :chartSurprisedLabels="chartsurprisedlabels" :chartSurprisedData="chartsurpriseddata"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LineChart from '../../components/LineChart.vue';
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  props: {},
  data() {
    return {
      busy: false,
      startDate: null,
      loaded: false,
      chartdata: [],
      chartlabels: [],
      chartemotion: [],
      showError: false,
      nodataError: false,
      errorMessage: 'Please enter field',
      nodataMessage: 'No data',
      nameSelected: '',
<<<<<<< HEAD
      namelist: ['Isaac', 'Nelson', 'LEE GE SENN'],
=======
      namelist: ['Isaac', 'Nelson'],
      datelist: [
        '01/2021',
        '02/2021',
        '03/2021',
        '04/2021',
        '05/2021',
        '06/2021',
        '07/2021',
        '08/2021',
        '09/2021',
        '10/2021',
        '11/2021',
        '12/2021',
      ],
>>>>>>> d40b667b1b95404473faf7d7af8de2dfe0774b73
    };
  },
  methods: {
    resetState() {
      this.loaded = false;
      this.showError = false;
    },
    async requestData() {
      this.busy = true;
      if (this.startDate === null || this.nameSelected === '') {
        this.showError = true;
        this.busy = false;
        return;
      }

      this.resetState();
      const x = await axios.get(
<<<<<<< HEAD
        //`${process.env.VUE_APP_ROOT_API}/attendance/get?date=2021&name=Isaac`,
        //`${process.env.VUE_APP_ROOT_API}/attendance/get?date=2021&name=Nelson`,
        `${process.env.VUE_APP_ROOT_API}/attendance/get?date=2021&name=LEE%20GE%20SENN`, //pass parameters here
=======
        `${process.env.VUE_APP_ROOT_API}/attendance/get?date=${this.startDate}&name=${this.nameSelected}` //pass parameters here
>>>>>>> d40b667b1b95404473faf7d7af8de2dfe0774b73
      );

      try {
        console.log(x.data);
        this.chartlabels = x.data.map((e) => e.date); //load data here
        this.chartdata = x.data.map((e) => e.output); //load data here
        
        this.chartangry = x.data.filter((e) => e.emotion == "angry");
        this.chartangrylabels = this.chartangry.map((b) => b.date);
        this.chartangrydata = this.chartangry.map((b) => b.output);

        this.chartdisgust = x.data.filter((e) => e.emotion == "disgust");
        this.chartdisgustlabels = this.chartdisgust.map((b) => b.date);
        this.chartdisgustdata = this.chartdisgust.map((b) => b.output);

        this.chartfearful = x.data.filter((e) => e.emotion == "fearful");
        this.chartfearfullabels = this.chartfearful.map((b) => b.date);
        this.chartfearfuldata = this.chartfearful.map((b) => b.output);

        this.chartsad = x.data.filter((e) => e.emotion == "sad");
        this.chartsadlabels = this.chartsad.map((b) => b.date);
        this.chartsaddata = this.chartsad.map((b) => b.output);

        this.chartneutral = x.data.filter((e) => e.emotion == "neutral");
        this.chartneutrallabels = this.chartneutral.map((a) => a.date);
        this.chartneutraldata = this.chartneutral.map((a) => a.output);

        this.charthappy = x.data.filter((e) => e.emotion == "happy");
        this.charthappylabels = this.charthappy.map((a) => a.date);
        this.charthappydata = this.charthappy.map((a) => a.output);

        this.chartsurprised = x.data.filter((e) => e.emotion == "surprised");
        this.chartsurprisedlabels = this.chartsurprised.map((a) => a.date);
        this.chartsurpriseddata = this.chartsurprised.map((a) => a.output);

        //console.log(this.chartneutral);
        //console.log(this.chartneutrallabels);
        //console.log(this.chartneutraldata);

        this.busy = false;
        this.nodataError = false;
        this.loaded = true;
      } catch (err) {
        this.errorMessage = err.response.data.error;
        this.showError = true;
        this.busy = false;
      }
    },
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
  },
};
</script>

<style>
.Chart__container {
  margin-bottom: 100px;
}
</style>
