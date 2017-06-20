/*
* @Author: lushijie
* @Date:   2017-06-18 19:26:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-20 10:39:54
*/
import Vue from 'vue';
// import Utils from 'utils';

export default class Base {
  constructor() {
    this.ENV = ENV;
  }
  httpGet() {
    console.log(this.ENV.API);
    console.log('http get method');

    // 使用 Vue-resource 请求资源
    Vue.http.get('/test').then(response => {
      console.log(response);
    }, response => {
      console.log(response);
    });
  }
  httpPost() {
    console.log('http post method');
  }
}
