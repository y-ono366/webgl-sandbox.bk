import Vue from 'vue';
import Router from 'vue-router';

import index from '@/components/Index';
import rotate from '@/components/RotateBox';
import lines from '@/components/Lines';
import triangle from '@/components/Triangle';
import sample from '@/components/Sample';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/rotate',
      component: rotate,
    },
    {
      path: '/lines',
      component: lines,
    },
    {
      path: '/triangle',
      component: triangle,
    },
    {
      path: '/sample',
      component: sample,
    },
  ],
});
