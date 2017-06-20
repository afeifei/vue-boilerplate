/*
* @Author: lushijie
* @Date:   2017-05-26 19:36:52
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-20 14:11:52
*/
const path = require('path');
const argv = require('yargs').argv;
const ENV = argv.env.ENV || 'development';
const IS_DEV = ENV === 'development';
const ROOT_PATH = path.join(__dirname, '..');

let htmlPluginOptions = [
  {
    filename: IS_DEV ? 'index.html' : '../index.html',
    template: `${ROOT_PATH}/template/index.html`,
    // chunks: ['common', 'index'],
    // chunksSortMode: function (chunk1, chunk2) {
        //https://github.com/jantimon/html-webpack-plugin/issues/481
    // }
    //excludeChunks: [],
  },
];

let CONFIG = {
  common: {
    IS_DEV: IS_DEV,
    ROOT_PATH: ROOT_PATH,
    // path: `${ROOT_PATH}/dist/static/js`,
    path: `${ROOT_PATH}/static/js`,
    entry: `${ROOT_PATH}/src/app.js`
  },
  development: {
    port: 5050,
    extractCSS: false,
    publicPath: '/static/',
    sourceMap: true,
    uglify: false,
    inject: {
      ENV: {
        API: 'http://127.0.0.1'
      }
    },
    template: htmlPluginOptions
  },
  production: {
    extractCSS: true,
    publicPath: '/static/js/',
    sourceMap: true,
    uglify: true,
    inject: {
      ENV: {
        API: 'http://online.com'
      }
    },
    template: htmlPluginOptions
  }
}

module.exports = Object.assign({}, CONFIG.common, CONFIG[ENV]);
