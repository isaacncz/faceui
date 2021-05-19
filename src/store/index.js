import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isNewUser: true
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('username', userData.user.name)
      localStorage.setItem('user', JSON.stringify(userData))
      // console.log(userData.token)
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`
    },
    LOGOUT() {
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      location.reload()
    },
    IS_NEW_USER(state, isNewUser) {
      state.isNewUser = isNewUser
    },
  },
  actions: {
    register({
      commit
    }, credentials) {
      console.log(`${process.env.VUE_APP_ROOT_API}/user/register`)
      return axios
        .post(
          `${process.env.VUE_APP_ROOT_API}/user/register`,
          credentials
        )
        .then(({
          data
        }) => {

          if (data.user.verify) {
            commit('SET_USER_DATA', data)
          }
        })
    },
    login({
      commit
    }, credentials) {
      return axios
        .post(
          `${process.env.VUE_APP_ROOT_API}/user/login`,
          credentials
        )
        .then(({
          data
        }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({
      commit
    }, credentials) {
      commit('LOGOUT')
      return axios
        .get(
          `${process.env.VUE_APP_ROOT_API}/user/logout`,
          credentials
      ).then((data) => {
        console.log(data)
          this.$router.push({ name: 'Login' })
        })
    }
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})