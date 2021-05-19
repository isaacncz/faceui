import Vue from 'vue';
import { BootstrapVue, IconsPlugin, JumbotronPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vSelect from 'vue-select';

import Vuelidate from 'vuelidate';

import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(JumbotronPlugin);
Vue.component('v-select', vSelect);

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user'); // grab user data from local storage
    if (userString) {
      // check to see if there is indeed a user
      const userData = JSON.parse(userString); // parse user data into JSON
      this.$store.commit('SET_USER_DATA', userData); // restore user data with Vuex
    }
    axios.interceptors.response.use(
      (response) => response, // simply return the response
      (error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          // if we catch a 401 error
          localStorage.removeItem('user');
          localStorage.removeItem('username');
          this.$store.dispatch('logout'); // force a log out
        }

        return Promise.reject(error); // reject the Promise, with the error as the reason
      }
    );
  },
  render: (h) => h(App),
}).$mount('#app');
