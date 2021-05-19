<template>
  <div>
    <div>
      <b-jumbotron class="jumbo" text-variant="light">
        <template v-slot:header>
          <strong>About Us</strong>
        </template>
      </b-jumbotron>
    </div>
  </div>
</template>

<style>
.jumbo {
  background-image: url('https://i.pinimg.com/originals/a9/a8/3e/a9a83efe190ed9660b27be8047b94edd.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
}
.jumbo > h1 {
  padding-top: 3rem;
}

.container-fluid > .container-fluid {
  padding-top: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.container > .mt-4 > .card > .card-body > h4 {
  padding-top: 30px;
}
</style>
