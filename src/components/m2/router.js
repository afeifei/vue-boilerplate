/*
* @Author: lushijie
* @Date:   2017-06-23 09:39:04
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-23 09:40:06
*/
import M2 from 'components/m2';
import M21 from 'components/m2/m21';
import M22 from 'components/m2/m22';
import M23 from 'components/m2/m23';
import M24 from 'components/m2/m24';
import M25 from 'components/m2/m25';

module.exports = {
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
}
