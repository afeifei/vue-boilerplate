/*
* @Author: lushijie
* @Date:   2017-05-26 19:36:52
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-01 14:37:42
*/
const path = require('path');
const argv = require('yargs').argv;
const ENV = argv.env.ENV || 'development';
const IS_DEV = ENV === 'development';
const ROOT_PATH = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const STATIC_PATH = path.join(ROOT_PATH, 'static');
const MODULES_PATH = path.join(ROOT_PATH, 'node_modules');

let htmlPluginOptions = [
  {
    filename: IS_DEV ? 'index.bundle.html' : `${ROOT_PATH}/dist/index.html`,
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
    SRC_PATH: SRC_PATH,
    STATIC_PATH: STATIC_PATH,
    MODULES_PATH: MODULES_PATH,
    path: `${ROOT_PATH}/dist/static/js`,
    entry: `${SRC_PATH}/app.js`
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
