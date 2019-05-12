<template>
  <div>
    <div>
      <h1>CO2-emissions</h1>
      <select v-model="selected">
        <option v-for="country in this.countries" :key="country.id" v-on:click="getData()" >
          {{ country }}
        </option>
      </select>
      <div class="checkbox">
        <label><input type="checkbox" v-model="toggle">Per capita</label>
      </div>
      <p>{{ this.selected }}</p>
    </div>
    <div class="emissionstable">
      <table>
        <tr>
          <th>Years</th>
          <th v-show="!toggle">Emissions</th>
          <th v-show="toggle">perCapita</th>
        </tr>
        <tr v-for="(emission, index) in this.emissions" v-show="!toggle">
          <td> {{ years[index] }} </td>
          <td> {{emission}} </td>
        </tr>
        <tr v-for="(capita, index) in this.perCapita" v-show="toggle">
          <td> {{ years[index] }} </td>
          <td> {{capita}} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Testing',
  data() {
    return {
      countries: [],
      selected: '',
      emissions: [],
      years: [],
      perCapita: [],
      toggle: ''
    };
  },
  mounted () {
   axios
     .get('http://localhost:5000/countries')
     .then(response => (this.countries = response.data.countries))
     .catch(error => console.log(error));
   },
  methods: {
   getData: function () {
     axios
       .get('http://localhost:5000/country?country=' + this.selected)
       .then(response => (this.emissions = response.data.emissions, this.years = response.data.headers, this.perCapita = response.data.perCapita))
       .catch(function (error) {
         console.log(error);
       })
   }
  },
  watch: {
    selected: function (selected) {
      this.getData()
    }
  },
  computed: {

  }
};

</script>

<style lang="css">
  table, th, tr{
    width:50%;
    margin-left:25%;
    margin-right:15%;
    border: 1px solid #ddd;
    padding: 5px;
    border-collapse: collapse;
  }
  .checkbox{
    padding-top: 10px;
  }
</style>
