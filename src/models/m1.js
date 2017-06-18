/*
* @Author: lushijie
* @Date:   2017-06-18 19:33:18
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-18 19:48:49
*/

import Base from './base';

class M1Model extends Base{
  insertDb() {
    console.log('m1 insertDb');
    this.httpGet();
  }
}

export default new M1Model();
