<template>
  <header>
    <b-navbar
      sticky
      toggleable
      class="navbar navbar-expand-md navbar-dark font-weight-bold"
      style="background-color: #69a8f5;"
    >
      <b-navbar-brand v-if="!loggedIn" to="/home">
        <div class="logo-image">
          <img src="/assets/ms-icon-70x70.png" class="img-fluid" />
        </div>
      </b-navbar-brand>
      <b-navbar-brand v-if="loggedIn" to="/">
        <div class="logo-image">
          <img src="/assets/ms-icon-70x70.png" class="img-fluid" />
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon> </template
        >/
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <ul class="navbar-nav ml-auto">
          <b-nav-item v-if="!loggedIn" to="/home">
            Home
            <span class="sr-only">(current)</span>
          </b-nav-item>
          <b-nav-item v-if="loggedIn" to="/">
            Home
            <span class="sr-only">(current)</span>
          </b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/about">About</b-nav-item>
          <b-nav-item-dropdown v-if="loggedIn" right>
            <template v-slot:button-content>
              <b>{{ usernameFunction }}</b>
            </template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            v-if="!loggedIn"
            class="dropdown w-25"
            text="User"
            right
          >
            <b-dropdown-item to="/login">Login</b-dropdown-item>
            <b-dropdown-item to="/employee/register">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </ul>
      </b-collapse>
    </b-navbar>
  </header>
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
.navbar {
  padding: 0px auto;
  margin: 0px auto;
}

.logo-image {
  width: 80px;
  height: 40px;

  overflow: hidden;
}

.navbar-nav {
  font-size: 18px;
}
</style>
