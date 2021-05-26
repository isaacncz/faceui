<template>
  <div class="container">
    <b-row>
      <b-col>
        <h1 class="hello-landing">
          Hello,
          <b style="color: #056eee ;">{{ usernameFunction }}!</b>
        </h1>
      </b-col>
    </b-row>

    <h2 class="welcome-header">Welcome to Face UI</h2>

    <div class="landing-heading" style="margin-top: 70px;">Admin</div>
    <div class="row">
      <div class="col-sm-2">
        <div class="card card-landing-2">
          <div class="text-center" style="margin-top: 6px;">
            <b-link to="/employee/register">
              <img
                src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-1a/100/1-38-512.png"
                style="width: 35%;"
              />
            </b-link>
            <h4 class="landing-sub" style="margin-top: 12px;">Registration</h4>
            <p class="caption-2">to register new employee</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card card-landing-2">
          <div class="text-center" style="margin-top: 10px;">
            <b-link to="/employee/list">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/human-1540920-1307261.png"
                style="width: 30%;"
              />
            </b-link>
            <h4 class="landing-sub" style="margin-top: 19px;">List</h4>
            <p class="caption-2">to see list of employee</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card card-landing-2">
          <div class="text-center" style="margin-top: 10px;">
            <b-link to="/employee/performance">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/performance-1403425-1189888.png"
                style="width: 30%;"
              />
            </b-link>
            <h4 class="landing-sub" style="margin-top: 19px;">Performance</h4>
            <p class="caption-2">to see employee performance chart</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card card-landing-2">
          <div class="text-center" style="margin-top: 6px;">
            <b-link to="/employee/attendance">
              <img
                src="https://banner2.cleanpng.com/20180525/hq/kisspng-time-attendance-clocks-computer-icons-clip-art-5b07d6a33f2b20.0195915415272403552588.jpg"
                style="width: 35%;"
              />
            </b-link>
            <h4 class="landing-sub" style="margin-top: 12px;">Attendance</h4>
            <p class="caption-2">to see employee attendance asdasd only</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card card-landing-2">
          <div class="text-center" style="margin-top: 6px;">
            <b-link to="/employee/performance/form">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/performance-68-739441.png"
                style="width: 35%;"
              />
            </b-link>
            <h4 class="landing-sub" style="margin-top: 12px;">
              Performance Form
            </h4>
            <p class="caption-2">to key in employee daily performance</p>
          </div>
        </div>
      </div>
    </div>

    <!--/row -->
  </div>
  <!-- end container -->
</template>

<script>
import { authComputed } from '../store/helpers.js';
export default {
  computed: {
    ...authComputed,
    usernameFunction: function() {
      return localStorage.username;
    },
  },
  methods: {
    logout() {
      // console.log('logout')
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style>
.container1 {
  /* background-image: linear-gradient( #e9f7ee, #c1e2ce); */
  border-color: #d6ebde;
  /* background-color: #d6ebde; */
  width: 86%;
  height: 220px;
  border-radius: 15px;
  margin-top: 20px;
  padding-top: 7px;
  padding-left: 10px;
}
.card-landing-1 {
  width: 180px !important;
  height: 165px !important;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: transparent !important;
  background-color: rgb(250, 250, 250) !important;
  /* box-shadow: 0px 0px 0px white!important; */
  /* box-shadow: 0px 3px 7px rgb(224, 224, 224)!important; */
  border-radius: 8px !important;
  margin-left: px;
  display: inline;
}

.card-landing-2 {
  width: 180px !important;
  height: 165px !important;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: transparent !important;
  background-color: rgb(250, 250, 250) !important;
  /* background-color: rgb(241, 241, 241)!important; */
  /* box-shadow: 0px 0px 0px white!important; */
  /* box-shadow: 0px 3px 7px rgb(224, 224, 224)!important; */
  border-radius: 8px !important;
  /* margin-left: 30px; */
}
.card-landing-3 {
  width: 180px !important;
  height: 165px !important;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: transparent !important;
  background-color: rgb(250, 250, 250) !important;
  /* background-color: rgb(241, 241, 241)!important; */
  /* box-shadow: 0px 0px 0px white!important; */
  /* box-shadow: 0px 3px 7px rgb(224, 224, 224)!important; */
  border-radius: 8px !important;
  /* margin-left: 30px; */
}
.hello-landing {
  font-family: 'Futura', sans-serif;
  /* color: #7fd3a1; */
  color: #28273d;
  font-size: 35px;
  margin-top: 40px;
}
.landing-heading {
  font-family: 'Futura', sans-serif;
  color: #056eee;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
  margin-top: 50px;
}
.landing-sub {
  font-family: 'Futura', sans-serif;
  color: #28273d;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 10px;
}
.welcome-header {
  font-family: 'Futura', sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-top: -5px;
  margin-bottom: 50px;
}
.ins-header {
  font-family: 'Cooper Black', sans-serif;
  font-weight: bold;
  color: #2bb573;
  line-height: 30px;
  font-size: 35px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.col-sm-2 {
  margin-left: 5px;
  margin-right: 50px;
  padding-right: 20px;
}
.caption-2 {
  margin-top: -5px;
  line-height: -10px;
  font-size: 12px;
  margin-bottom: 0px;
  color: gray;
}
.caption-break {
  margin-top: -3px;
  font-size: 12px;
  margin-bottom: 0px;
  color: gray;
}
</style>
