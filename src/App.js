import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import router from './router'

import './assets/css/pure.css'
import $ from './assets/js/lib/jquery.js'
import './app.css'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  data: {
    bus: new Vue()
  },
  render: h => h(Layout)
})

console.log($)
