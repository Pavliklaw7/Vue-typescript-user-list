import Vue from 'vue';
import VueRouter from 'vue-router';
import HerosList from '../views/HerosList.vue';
import HeroPage from '../views/HeroPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HerosList',
    component: HerosList,
  },
  {
    path: '/heroPage',
    name: 'HeroPage',
    component: HeroPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
