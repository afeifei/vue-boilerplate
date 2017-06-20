/*
* @Author: lushijie
* @Date:   2017-06-18 19:33:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-20 13:49:27
*/

import Base from './base';

class M1Model extends Base{
  insertDb() {
    console.log('m1 insertDb');
    this.httpGet('/url', {});
  }
}

export default new M1Model();
