<template>
  <b-container>
    <h1>
      Attendance List
    </h1>
    <b-table
      responsive
      striped
      hover
      :items="items"
      :fields="fields"
      :busy.sync="isBusy"
    >
      <template v-slot:table-busy>
        <div class="text-center text-warning my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isBusy: false,
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'date',
          sortable: true,
        },
        {
          key: 'id',
          sortable: true,
        },
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'emotion',
          sortable: true,
        },
        {
          key: 'action',
          sortable: true,
        },
      ],
      items: [],
      cultivar: [],
    };
  },
  created() {
    this.isBusy = true;
    console.log(location.host);
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/attendance/getAll`)
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
        this.isBusy = false;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
