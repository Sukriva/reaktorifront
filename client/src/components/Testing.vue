<template>
  <div>
    <div>
      <h1>CO2-emissions</h1>
      <!-- <p>{{ countries }}</p> -->
      <!-- <div v-for="country in this.countries" :key="country.id">
        <p>{{ country }}</p>
      </div> -->
      <select v-model="selected">
        <option v-for="country in this.countries" :key="country.id" v-on:click="getData()">
          {{ country }}
        </option>
      </select>
      <div class="checkbox">
        <label><input type="checkbox" v-model="per_capita" >Per capita</label>
      </div>
      <p>{{ this.selected }}</p>
    </div>
    <div class="emissionstable">
      <table>
        <tr>
          <th>Years</th>
          <th>Emissions</th>
        </tr>
        <tr v-for="(emission, index) in this.emissions">
          <td> {{ years[index] }} </td>
          <td> {{emission}} </td>
        </tr>
      </table>
      <!-- <b-table hover :fields="fields" :items="years, emissions"></b-table> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Testing',
  data() {
    return {
      fields: ['years','emissions'],
      countries: [],
      selected: '',
      emissions: [],
      years: [],
      //msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted () {
   axios
     .get('http://localhost:5000/countries')
     .then(response => (this.countries = response.data.countries))
     .catch(function (error) {
       console.log(error);
     })
   },
  methods: {
   getData: function () {
     axios
       .get('http://localhost:5000/country?country=' + this.selected)
       .then(response => (this.emissions = response.data.emissions, this.years = response.data.headers))
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
