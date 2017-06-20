/*
* @Author: lushijie
* @Date:   2017-06-18 19:26:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-20 13:56:16
*/
import Vue from 'vue';
import Utils from 'utils';

// 使用 Vue-resource 请求资源
// https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
export default class Base {
  constructor() {
    this.ENV = ENV;
    this.API = this.ENV.API;
  }

  httpGet(url, options) {
    console.log('http get method');
    url = `${this.API}${url}`;
    if(options && !options.preventTrim) {
      options.body = Utils.getTrimedResult(options.body);
      delete options.preventTrim;
    }
    return Vue.http.get(url, options);
  }

  httpPost(url, options) {
    console.log('http post method');
    url = `${this.API}${url}`;
    if(options && !options.preventTrim) {
      options.body = Utils.getTrimedResult(options.body);
      delete options.preventTrim;
    }
    return Vue.http.post(url, data, options);
  }

  httpJsonp(url, options) {
    console.log('http jsonp method');
    url = `${this.API}${url}`;
    if(options && !options.preventTrim) {
      options.body = Utils.getTrimedResult(options.body);
      delete options.preventTrim;
    }
    return Vue.http.jsonp(url, options);
  }
}
