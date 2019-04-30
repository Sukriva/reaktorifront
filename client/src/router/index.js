import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Testing from '@/components/Testing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Testing',
      component: Testing,
    },
  ],
});
