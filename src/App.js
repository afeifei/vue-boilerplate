import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/css/pure.css';
// import $ from './assets/js/lib/jquery.js';
import Layout from './components/Layout';
import router from './router';
import './app.css';

Vue.use(VueRouter);

new Vue({
  el: '#root', // #root 元素会被replace
  router,
  data: {
    bus: new Vue()
  },
  render: h => h(Layout)
})

