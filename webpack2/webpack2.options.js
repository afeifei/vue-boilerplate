/*
* @Author: lushijie
* @Date:   2017-05-26 19:36:52
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-27 12:25:39
*/
const path = require('path');
const argv = require('yargs').argv;
const isDev = argv.env === 'development';
const ROOT_PATH = path.join(__dirname, '..');

let defaultHtmlPluginOption = {
  hash: true,
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true
  },
}

let htmlPluginOptions = [
  Object.assign({}, defaultHtmlPluginOption, {
    filename: `${ROOT_PATH}/index.bundle.html`,
    title: 'Hello World',
    template: `${ROOT_PATH}/index.html`,
    //chunks: ['index'],
    //excludeChunks: [],
  }),
];

let definePluginOptions = {
  development: {
    ENV: {
      API: JSON.stringify('http://127.0.0.1')
    }
  },
  production: {
    ENV: {
      API: JSON.stringify('http://online.com')
    }
  }
};

function stringifyString(obj) {
  let keys = Object.keys(obj);
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let tmp = obj[key];
    if(typeof tmp === 'string') {
      obj[key] = JSON.stringify(tmp);
    }else if(Object.prototype.toString.call(tmp) === '[object Object]') {
      stringifyString(tmp);
    }
  }
  return obj;
}

module.exports = {
  htmlPluginOptions,
  definePluginOptions: stringifyString(definePluginOptions[argv.env])
};
