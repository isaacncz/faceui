import Vue from 'vue';
import VueRouter from 'vue-router';

import LandingPage from '../views/LandingPage.vue';

import Home from '../views/Home.vue';

//-----------User---------------
import Login from '../views/User/UserLogin.vue';
import Register from '../views/User/UserRegister.vue';
import VerifyPage from '../views/User/UserVerifyPage.vue';
import Reset from '../views/User/UserReset.vue';
import ForgotPass from '../views/User/UserForgotPass.vue';

import EmployeeRegister from '../views/Employee/Register.vue';
import EmployeeList from '../views/Employee/List.vue';
import EmployeePerformance from '../views/Employee/Performance2.vue';
import EmployeeAttendance from '../views/Employee/Attendance.vue';
import EmployeePerformanceForm from '../views/Employee/PerformanceForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/verify',
    name: 'Verify',
    component: VerifyPage,
  },
  {
    path: '/resetpass',
    name: 'Reset',
    component: Reset,
  },
  {
    path: '/forgotpass',
    name: 'ForgotPass',
    component: ForgotPass,
  },
  {
    path: '/employee/register',
    name: 'EmployeeRegister',
    component: EmployeeRegister,
  },
  {
    path: '/employee/list',
    name: 'EmployeeList',
    component: EmployeeList,
  },
  {
    path: '/employee/performance',
    name: 'EmployeePerformance',
    component: EmployeePerformance,
  },
  {
    path: '/employee/attendance',
    name: 'EmployeeAttendance',
    component: EmployeeAttendance,
  },
  {
    path: '/employee/performance/form',
    name: 'EmployeePerformanceForm',
    component: EmployeePerformanceForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    });
  }
  next();
});

export default router;
