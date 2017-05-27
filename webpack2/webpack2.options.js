/*
* @Author: lushijie
* @Date:   2017-05-26 19:36:52
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-27 16:40:06
*/
const path = require('path');
const argv = require('yargs').argv;
const ENV = argv.env || 'development';
const IS_DEV = ENV === 'development';
const ROOT_PATH = path.join(__dirname, '..');

let htmlPluginOptions = [
  {
    filename: `${ROOT_PATH}/dist/index.html`,
    template: `${ROOT_PATH}/template/index.html`,
    // chunks: ['common', 'index'],
    // chunksSortMode: function (chunk1, chunk2) {
        //https://github.com/jantimon/html-webpack-plugin/issues/481
    // }
    //excludeChunks: [],
  },
];

let definePluginOptions = {
  development: {
    ENV: {
      API: 'http://127.0.0.1'
    }
  },
  production: {
    ENV: {
      API: 'http://online.com'
    }
  }
};

module.exports = {
  htmlPluginOptions,
  definePluginOptions: definePluginOptions[ENV]
};
