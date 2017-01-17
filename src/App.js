import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import router from './router'

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
