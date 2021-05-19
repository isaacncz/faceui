<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
    <PlanetChart/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import PlanetChart from './components/PlanetChart.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    PlanetChart,
  },
};
</script>

<style>
/* @import '/assets/css/style.css'; */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5b759;
  margin-top: 30px;
}
</style>
