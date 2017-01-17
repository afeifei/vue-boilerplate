import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

import './app.css'

// 2. Define route components
import Layout from './components/Layout'


// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  render: h => h(Layout)
}).$mount('#app')
