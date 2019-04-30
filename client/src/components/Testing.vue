<template>
  <div>
    <h1>CO2-emissions</h1>
    <!-- <p>{{ countries }}</p> -->
    <!-- <div v-for="country in this.countries" :key="country.id">
      <p>{{ country }}</p>
    </div> -->
    <select v-model="selected">
      <option v-for="country in this.countries" :key="country.id">
        {{ country }}
      </option>
    </select>
    <p>{{ this.selected }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Testing',
  data() {
    return {
      countries: [],
      selected: ''
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
 }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
