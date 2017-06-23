import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Layout from 'components/layout';
import router from './router';
import filters from './filters';
import VeeValidate, {Validator} from 'vee-validate';
import VeeMessage from 'validators/message';
import VeeConfig from 'validators/config';
import VeeRules from 'validators/rules';

// dev
Vue.config.silent = false;
Vue.config.devtools = true;

// 错误处理
Vue.config.errorHandler = function (err, vm) {
  console.log(err, vm);
};

// 全局自定义过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// 验证中文支持
Validator.updateDictionary({ en: { messages: VeeMessage } });

// 全局自定义校验器
Object.keys(VeeRules).forEach((key) => {
  Validator.extend(key, VeeRules[key])
});

// 表单验证
Vue.use(VeeValidate, VeeConfig);

// 加载路由
Vue.use(VueRouter);

// 加载vue-source
Vue.use(VueResource);

// 挂载到根节点
new Vue({
  el: '#root', // #root 元素会被replace
  router,
  data: {
    bus: new Vue() // 设立 BUS 总线
  },
  render: h => h(Layout)
})
