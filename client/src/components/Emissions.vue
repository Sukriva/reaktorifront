<template>
  <div class="firstdiv">
    <div>
      <h1>CO2-emissions</h1>
      <select v-model="selected" class="select">
        <option v-for="country in this.countries" :key="country.id" v-on:click="getData()" >
          {{ country }}
        </option>
      </select>
      <div class="checkbox">
        <label><input type="checkbox" v-model="toggle">Per capita</label>
      </div>
      <p>{{ this.selected }}</p>
    </div>
    <div class="emissionstable" v-if="this.selected">
      <table>
        <tr>
          <th>Years</th>
          <th v-show="!toggle">Emissions (kt)</th>
          <th v-show="toggle">Per capita</th>
        </tr>
        <tr v-for="(emission, index) in this.emissions" v-show="!toggle">
          <td> {{ years[index] }} </td>
          <td v-if="emission===''"> - </td>
          <td v-else> {{emission}} </td>
        </tr>
        <tr v-for="(capita, index) in this.perCapita" v-show="toggle">
          <td> {{ years[index] }} </td>
          <td v-if="capita===0"> - </td>
          <td v-else> {{capita}} </td>
        </tr>
      </table>
    </div>
    <div v-if="this.selected">
       <Chart v-bind:years="years" v-bind:emissions="emissions" v-bind:perCapita="perCapita"  v-bind:toggle="toggle"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from './Chart.vue'

export default {
  name: 'Testing',
  components: {
    Chart
  },
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
    border: 2px solid #ddd;
    padding: 5px;
    border-collapse: collapse;
  }
  .checkbox{
    padding-top: 10px;
  }
  .firstdiv{
    width: 75%;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
  }
  .select {

  }
</style>
