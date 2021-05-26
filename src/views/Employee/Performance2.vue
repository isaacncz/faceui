<template>
  <div class="content container">
    <h1>Performance</h1>
    <div class="container">
      <div class="container-fluid">
        <b-row class="mb-3">
          <b-col cols="12" md="auto">
            Date
            <b-form-datepicker
              v-model="startDate"
              placeholder="Date"
              local="en"
            ></b-form-datepicker>
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
        <line-chart :chartLabels="chartlabels" :chartData="chartdata" />
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
      showError: false,
      nodataError: false,
      errorMessage: 'Please enter field',
      nodataMessage: 'No data',
      nameSelected: '',
      namelist: ['Isaac', 'Nelson'],
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
        `${process.env.VUE_APP_ROOT_API}/attendance/get?date=2021&name=Isaac` //pass parameters here
      );

      try {
        console.log(x.data);
        this.chartlabels = x.data.map((e) => e.date); //load data here
        this.chartdata = x.data.map((e) => e.output); //load data here

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
