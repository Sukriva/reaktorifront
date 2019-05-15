<template>
  <div class="thechart">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  export default {
    name: 'Chart',
    props:['years', 'emissions', 'perCapita', 'toggle'],
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: {}
      }
    },
    watch: {
    years: function () {
      this.fillData()
    },
    toggle: function () {
      this.fillData()
    }
  },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        if(this.toggle==true) {
          this.datacollection = {
            labels: this.years,
            datasets: [
              {
                label: 'Emissions per capita',
                backgroundColor: 'grey',
                data: this.perCapita
              }
            ]
          }
        } else {
          this.datacollection = {
            labels: this.years,
            datasets: [
              {
                label: 'Co2 Emissions(kt)',
                backgroundColor: 'grey',
                data: this.emissions
              }
            ]
          }
        }
      },
    }
  }
</script>

<style>
  .thechart {
    width: 75%;
    margin: auto;
    padding-top: 50px;
  }
</style>
