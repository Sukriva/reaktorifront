<template>
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
    <p>{{ this.selected }}</p>
    <p>{{ this.emissions }}</p>
    <p>{{ this.years }}</p>
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
      years: []
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
<style scoped>

</style>
