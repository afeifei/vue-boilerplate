/*
* @Author: lushijie
* @Date:   2017-06-23 11:33:53
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-23 11:34:37
*/
module.exports = {
  mobile: {
    messages: {
      en:field => field + '必须是11位手机号码'
    },
    validate: value => {
      return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  }
}
