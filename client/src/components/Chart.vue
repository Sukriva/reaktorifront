<template>
  <div class="small">
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
                label: 'Emissions per Capita',
                backgroundColor: '#abb5a4',
                data: this.perCapita
              }
            ]
          }
        } else {
          this.datacollection = {
            labels: this.years,
            datasets: [
              {
                label: 'Co2 Emissions',
                backgroundColor: '#abb5a4',
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
  .small {
    max-width: 750px;
    margin:  10px auto;
  }
</style>
