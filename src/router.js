/*
* @Author: lushijie
* @Date:   2017-01-17 14:32:02
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-23 09:26:18
*/
import VueRouter from 'vue-router';
import Utils from 'utils';
import M1 from './components/m1';

import M2 from './components/m2';
import M21 from './components/m2/m21';
import M22 from './components/m2/m22';
import M23 from './components/m2/m23';
import M24 from './components/m2/m24';
import M25 from './components/m2/m25';

import M3 from './components/m3';
import M4 from './components/m4';
import M5 from './components/m5';
import M6 from './components/m6';
import M7 from './components/m7';

// 404 页面
import NotFound from 'components/common/notfound';

let router = new VueRouter({
  // mode: 'history', // 此模式需要在404的时候返回首页
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/m1' //强制重定向，或者 redirect: {name: 'nm21'}
    },
    {
      path: '/m1',
      component: M1
    },
    {
      path: '/m2',
      component: M2,
      children: [
        {
          path: '',
          component: M21
        },
        {
          name: 'namem21', // 命名路由
          path: 'm21/:userid',
          component: M21
        },
        {
          path: 'm22',
          component: M22,
          beforeEnter: (to, from, next) => {
            // 某个路由独享的钩子
            console.log('m23 独享的beforeEnter钩子');
            next();
          }
        },
        {
          path: 'm23',
          component: M23,
          alias: 'aliasm23' // 路由别名
        },
        {
          path: 'm24',
          meta: { requiresAuth: true }, // 附件的路由自定义元信息
          component: M24
        },
        {
          path: 'm25', // 命名视图
          components: {
            default: M25,
            aaa: { template: '<div>aaa</div>' }
          }
        }
      ]
    },
    {
      path: '/m3',
      component: M3
    },
    {
      path: '/m4',
      component: M4
    },
    {
      path: '/m5',
      component: M5
    },
    {
      path: '/m6',
      component: M6
    },
    {
      path: '/m7',
      component: M7
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    Utils.checkAuth().then(() => {
      next();
    })
  }else {
    next();
  }
});

router.afterEach(route => {
  console.log('全局 afterEach', route);
});

export default router
