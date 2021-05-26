<template>
  <div class="container">
    <div class="row no-gutter">
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Performance Form</h3>
                <form @submit.prevent="submitData">
                  <b-form-select
                    class="mb-3"
                    v-model="data.name"
                    :options="namelist"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select an employee --</b-form-select-option
                      >
                    </template>
                  </b-form-select>

                  <div>
                    <!-- <label for="example-datepicker">Choose a date</label> -->
                    <b-form-datepicker
                      id="example-datepicker"
                      v-model="data.date"
                      class="mb-2"
                    ></b-form-datepicker>
                  </div>

                  <b-form-select
                    class="mb-3"
                    v-model="data.metric"
                    :options="options"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select a metric --</b-form-select-option
                      >
                    </template>
                  </b-form-select>

                  <div>
                    <b-form-input
                      class="mb-3"
                      v-model="data.output"
                      placeholder="Enter employee output"
                    ></b-form-input>
                  </div>

                  <b-button
                    class="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                    type="submit"
                    @submit="submitData"
                    >Submit</b-button
                  >
                  <div class="text-center" variant="danger">
                    <!-- <li v-for="(error, index) in errors" :key="index">{{ error }}</li> -->
                    <b-alert
                      v-for="(error, index) in errors"
                      :key="index"
                      show
                      variant="danger"
                      >{{ error.msg }}</b-alert
                    >
                  </div>
                  <div class="success-message text-center" v-if="showMsg">
                    <b-alert show variant="success">{{ successMsg }}</b-alert>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image-register"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: {
        name: '',
        metric: '',
        date: '',
        output: '',
      },
      namelist: [],
      options: ['Quantity', 'Kilogram'],
      errors: null,
      successMsg: 'Entered successfully',
      showMsg: false,
    };
  },
  methods: {
    async submitData() {
      const x = await axios.post(
        `${process.env.VUE_APP_ROOT_API}/performance/create`,
        this.data
      );
      try {
        console.log(x.data);
        this.showMsg = true;
      } catch (err) {
        this.showMsg = false;
        console.log(err.message);
      }
    },
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/user/getAll`)
      .then((response) => {
        // console.log(response.data);
        var x = response.data;
        x.forEach((element) => {
          // console.log(element);
          this.namelist.push(element.name);
        });
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 90vh;
}

.bg-image-register {
  background-image: url('https://cdn.pixabay.com/photo/2018/05/29/09/37/klcc-3438340_960_720.jpg');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }

  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }

  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
