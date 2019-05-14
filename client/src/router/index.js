import Vue from 'vue';
import Router from 'vue-router';
import Emissions from '@/components/Emissions';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Emissions',
      component: Emissions,
    },
  ],
});
