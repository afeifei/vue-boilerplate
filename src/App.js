import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
import Hello from './components/Hello'
import Nav from './components/Nav'
import T1 from './components/T1'
import T2 from './components/T2'

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/t1', component: T1 },
    { path: '/t2/:id?', component: T2 }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  render: h => h(Nav)
}).$mount('#app')
