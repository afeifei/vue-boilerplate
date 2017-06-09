/*
* @Author: lushijie
* @Date:   2017-05-12 14:00:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-06-09 10:28:06
*/
let webpack = require('webpack');
let path = require('path');
const OPTIONS = require('./webpack2.options.js');
const PLUGINS = require('./webpack2.plugins.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const IS_DEV = OPTIONS.IS_DEV;

module.exports = function(env) {
  //const IS_DEV = (env.ENV || 'development') === 'development';
  let workflow =  {
    entry: {
      index: OPTIONS.entry
    },
    devtool: IS_DEV ? 'inline-source-map' : (OPTIONS.sourceMap ? 'source-map' : 'hidden-source-map'),
    output: {
      path: OPTIONS.path, // 生成文件目录
      publicPath: OPTIONS.publicPath, //dev-server public
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    resolve: {
      extensions: ['.vue', '.es', '.js', '.css', '.scss', '.json'],
      alias: {
        'static': OPTIONS.STATIC_PATH,
        'assets': path.join(OPTIONS.SRC_PATH, 'assets'),
        'components': path.join(OPTIONS.SRC_PATH, 'components'),
      }
    },
    module: {
      rules: [
        // eslint 校验
        {
          enforce: 'pre',
          test: /\.(j|e)s$|\.vue$/,
          loader: 'eslint-loader',
          include: [OPTIONS.SRC_PATH],
          exclude: [OPTIONS.MODULES_PATH],
        },

        // vue 解析
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: OPTIONS.extractCSS ? ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                loader: `css-loader?minimize=true${OPTIONS.sourceMap ? '&sourceMap' : ''}`
              }) : 'vue-style-loader!css-loader',
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          },
          include: [OPTIONS.SRC_PATH],
          exclude: [OPTIONS.MODULES_PATH],
        },

        // babel 编译
        {
          test: /\.(j|e)s$/,
          loader: 'babel-loader',
          include: [OPTIONS.SRC_PATH],
          exclude: [OPTIONS.MODULES_PATH]
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
              options: { sourceMap: OPTIONS.sourceMap ? true : false, minimize: true }
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
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
            },
            {
              loader: 'less-loader',
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
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
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
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
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
            },
            {
              loader: 'stylus-loader',
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
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
              options: { sourceMap: OPTIONS.sourceMap ? true : false }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: OPTIONS.sourceMap ? true : false,
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
            module.resource.indexOf(path.join(OPTIONS.ROOT_PATH, 'node_modules')) === 0
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
      port: OPTIONS.port || 5050,
      host: '0.0.0.0',
      headers: {
        "X-WEB-SERVER": "webpack-dev-server"
      }
    }
  }else {
    // 清理文件
    workflow.plugins.push(PLUGINS.cleanPluginConf('dist', {root: OPTIONS.ROOT_PATH}));

    // 静态资源文件拷贝
    workflow.plugins.push(PLUGINS.transferWebpackPluginConf([{
      from: 'static', to: '../../static' // to 默认为 output.path
    }], {root: OPTIONS.ROOT_PATH}));
  }

  // css 抽取
  if(OPTIONS.extractCSS) {
    workflow.plugins.push(PLUGINS.extractTextPluginConf('style.bundle.css'));
  }

  // 文件压缩
  if(OPTIONS.uglify) {
   workflow.plugins.push(PLUGINS.uglifyJsPluginConf());
  }

  // 环境变量注入
  if(OPTIONS.inject) {
    workflow.plugins.push(PLUGINS.definePluginConf(OPTIONS.inject));
  }

  // 模板html
  if(OPTIONS.template && OPTIONS.template.length) {
    Array.prototype.push.apply(workflow.plugins, PLUGINS.htmlWebPackPluginConf(OPTIONS.template));
  }

  return workflow;
}
