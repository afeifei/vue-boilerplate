/*
* @Author: lushijie
* @Date:   2017-05-12 14:00:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-23 11:03:00
*/
const webpack = require('webpack');
const path = require('path');
const CONFIGS = require('./webpack2.env.js');
const PLUGINS = require('./webpack2.plugins.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const IS_DEV = CONFIGS.IS_DEV;

module.exports = function(env) {
  //const IS_DEV = (env.ENV || 'development') === 'development';
  let workflow =  {
    entry: {
      index: CONFIGS.entry
    },
    devtool: IS_DEV ? 'inline-source-map' : (CONFIGS.sourceMap ? 'source-map' : 'hidden-source-map'),
    output: {
      path: CONFIGS.path, // 生成文件目录
      publicPath: CONFIGS.publicPath, //dev-server public
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    resolve: {
      extensions: ['.vue', '.es', '.js', '.css', '.scss', '.json'],
      alias: {
        'static': path.join(CONFIGS.ROOT_PATH, 'static'),
        'libs': path.join(CONFIGS.ROOT_PATH, 'src/libs'),
        'utils': path.join(CONFIGS.ROOT_PATH, 'src/utils'),
        'models': path.join(CONFIGS.ROOT_PATH, 'src/models'),
        'components': path.join(CONFIGS.ROOT_PATH, 'src/components'),
        'validators': path.join(CONFIGS.ROOT_PATH, 'src/validators'),
      }
    },
    module: {
      rules: [
        // eslint 校验
        {
          enforce: 'pre',
          test: /\.(j|e)s$|\.vue$/,
          loader: 'eslint-loader',
          include: [path.join(CONFIGS.ROOT_PATH, 'src')],
          exclude: [path.join(CONFIGS.ROOT_PATH, 'node_modules')],
        },

        // vue 解析
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: CONFIGS.extractCSS ? ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                loader: `css-loader?minimize=true${CONFIGS.sourceMap ? '&sourceMap' : ''}`
              }) : 'vue-style-loader!css-loader',
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          },
          include: [path.join(CONFIGS.ROOT_PATH, 'src')],
          exclude: [path.join(CONFIGS.ROOT_PATH, 'node_modules')],
        },

        // babel 编译
        {
          test: /\.(j|e)s$/,
          loader: 'babel-loader',
          include: [path.join(CONFIGS.ROOT_PATH, 'src')],
          exclude: [path.join(CONFIGS.ROOT_PATH, 'node_modules')],
        },

        // json 解析
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        // css 解析
        {
          test: /\.css$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false, minimize: true }
            }
          ]
        },

        // less 解析
        {
          test: /\.less$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
            {
              loader: 'less-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            }
          ]
        },

        // sass 解析
        {
          test: /\.sass$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
          ]
        },

        // stylus 解析
        {
          test: /\.stylus$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
            {
              loader: 'stylus-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
          ]
        },

        // postcss 解析
        {
          test: /\.scss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: CONFIGS.sourceMap ? true : false }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: CONFIGS.sourceMap ? true : false,
                plugins: function() {
                  return [
                    require('cssnano'),
                    require('precss'),
                    require('postcss-cssnext')
                  ]
                }
              }
            }
          ]
        },

        // 图片解析
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 8192,
            name: './img/[name].[hash:7].[ext]'
          }
        },

        // 字体解析
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 8192,
            name: './font/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    plugins: [
      // vendor提取
      PLUGINS.commonsChunkPluginConf({
        name: 'vendor',
        filename: "vendor.[hash:8].js",
        minChunks: function (module, count) {
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(path.join(CONFIGS.ROOT_PATH, 'node_modules')) === 0
          )
        }
      }),

      // common 提取
      PLUGINS.commonsChunkPluginConf({
        // extract webpack runtime and module common to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        name: 'common',
        filename: "common.[hash:8].js",
      })
    ]
  }

  if(IS_DEV) {
    workflow.plugins.splice(0,0, PLUGINS.webpackBrowserPluginConf({
      url: 'http://127.0.0.1',
      publicPath: '/static/index.html'
    }));

    // 热加载
    workflow.plugins.push(PLUGINS.hotModuleReplacementPluginConf());

    //devServer
    workflow.devServer = {
      stats: {
        cached: false,
        colors: true
      },
      hot: true,
      inline: true,
      compress: true,
      contentBase: '.',
      port: CONFIGS.port || 5050,
      host: '0.0.0.0',
      headers: {
        "X-WEB-SERVER": "webpack-dev-server"
      }
    }
  }else {
    // 配合使用生成新的静态资源目录
    // path: `${ROOT_PATH}/dist/static/js`,

    // 清理文件
    // workflow.plugins.push(PLUGINS.cleanPluginConf('dist', {root: CONFIGS.ROOT_PATH}));

    // 静态资源文件拷贝
    // workflow.plugins.push(PLUGINS.transferWebpackPluginConf([{
    //   from: 'static', to: '../../static' // to 默认为 output.path
    // }], {root: CONFIGS.ROOT_PATH}));
  }

  // css 抽取
  if(CONFIGS.extractCSS) {
    workflow.plugins.push(PLUGINS.extractTextPluginConf('style.bundle.css'));
  }

  // 文件压缩
  if(CONFIGS.uglify) {
   workflow.plugins.push(PLUGINS.uglifyJsPluginConf());
  }

  // 环境变量注入
  if(CONFIGS.inject) {
    workflow.plugins.push(PLUGINS.definePluginConf(CONFIGS.inject));
  }

  // 模板html
  if(CONFIGS.template && CONFIGS.template.length) {
    Array.prototype.push.apply(workflow.plugins, PLUGINS.htmlWebPackPluginConf(CONFIGS.template));
  }

  return workflow;
}
