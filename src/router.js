/*
* @Author: lushijie
* @Date:   2017-01-17 14:32:02
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-17 14:37:20
*/
import VueRouter from 'vue-router'

import T0 from './components/T0'
import T1 from './components/T1'
import T2 from './components/T2'
import T3 from './components/T3'
import T31 from './components/T31'
import T32 from './components/T32'

// Create the router
let router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      // redirect: 't1', //强制重定向
      component: T0
    },
    {
      path: '/t1',
      component: T1
    },
    {
      path: '/t2/:id?',
      component: T2
    },
    {
      path: '/t3/:id?',
      component: T3,
      children: [
        {
          path: 't31',
          component: T31
        },
        {
          path: 't32',
          component: T32
        }
      ]
    }
  ]
})

export default router;
