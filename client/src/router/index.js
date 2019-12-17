import Vue from 'vue';
import VueRouter from 'vue-router';

import Operator from '@/views/Operator.vue';
import User from '@/views/User.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/operator' },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/operator',
    name: 'Operator',
    component: Operator,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
