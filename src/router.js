/*
* @Author: lushijie
* @Date:   2017-01-17 14:32:02
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-23 13:47:23
*/
import VueRouter from 'vue-router';
import Utils from 'utils';

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
    require('components/m1/router'),
    require('components/m2/router'),
    require('components/m3/router'),
    require('components/m4/router'),
    require('components/m5/router'),
    require('components/m6/router'),
    require('components/m7/router'),
    require('components/m8/router'),
    require('components/m9/router'),
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
