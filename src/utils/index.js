/*
* @Author: lushijie
* @Date:   2017-06-20 09:34:17
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-20 10:53:17
*/
import querystring from 'querystring';

let utils = {
  /**
   * vue-router canActive 权限验证
   */
  checkAuth() {
    // return new Promise((resolve, reject) => {
    //   resolve(true)
    // })
    return Promise.resolve(true);
  },

  /**
   * 返回解析赋值的结果
   getDestructResult(['houseId', 'item:item1'], this.state);
  */
  getDestructResult(properties,sourceObject) {
    let destObject = {}, aliasMap = {};
    properties = Array.isArray(properties) ? properties : [properties];

    //建立别名映衬
    properties = properties.map(function(ele) {
      if(ele.indexOf(':') > -1) {
        aliasMap[ele.split(':')[0]] = ele.split(':')[1];
      }
      return ele.split(':')[0];
    });

    //如果存在别名，新对象使用别名
    Object.keys(sourceObject).forEach(function(ele) {
      if(properties.indexOf(ele) > -1) {
        destObject[aliasMap[ele] || ele] = sourceObject[ele];
      }
    });
    return destObject;
  },

  /**
   * 把对象拼接成url参数
   * getQueryJoin({name: 'lushijie'})
  */
  getQueryJoin(queryObject) {
    return querystring.stringify(queryObject);
  },

  /**
    * 获取trimed之后的数据 data可以为字符串、对象、数组或者嵌套形式
    * getTrimedResult({name: '  lushijie', address: [' shangdong' , ' jinan']})
   */
  getTrimedResult(data) {
    if(typeof data === 'string') {
      return data.trim();
    }else if(Object.prototype.toString.call(data) === '[object Object]') {
      Object.keys(data).forEach((key) => {
        data[key] = this.getTrimedResult(data[key]);
      })
      return data;
    }else if(Object.prototype.toString.call(data) === '[object Array]') {
      return data.map((ele) => {
        return this.getTrimedResult(ele);
      });
    }else {
      return data;
    }
  }
}

export default utils;

