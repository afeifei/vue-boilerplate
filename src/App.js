import Vue from 'vue';
import VueRouter from 'vue-router';
import 'assets/css/pure.css';
import 'assets/css/app.css';
import Layout from './components/layout';
import router from './router';

Vue.use(VueRouter);
new Vue({
  el: '#root', // #root 元素会被replace
  router,
  data: {
    bus: new Vue()
  },
  render: h => h(Layout)
})

