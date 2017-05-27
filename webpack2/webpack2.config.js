/*
* @Author: lushijie
* @Date:   2017-05-12 14:00:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-27 11:46:37
*/
let webpack = require('webpack');
let path = require('path');
let argv = require('yargs').argv;
let OPTIONS = require('./webpack2.options.js');
let PLUGINS = require('./webpack2.plugins.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const STATIC_PATH = path.join(ROOT_PATH, 'static');
const MODULES_PATH = path.join(ROOT_PATH, 'node_modules');
const IS_DEV = (argv.env === 'development');

module.exports = function(env) {
  let workflow =  {
    entry: {
      index: `${SRC_PATH}/app.js`
    },
    devtool: IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
    output: {
      path: `${STATIC_PATH}`,
      publicPath: '/static/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    module: {
      rules: [
        // eslint 校验
        {
          test: /\.(j|e)s$|\.vue$/,
          enforce: 'pre',
          include: [SRC_PATH],
          exclude: [MODULES_PATH],
          loader: 'eslint-loader'
        },

        // vue 解析
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            loaders: {
              // css: ExtractTextPlugin.extract({
              //   use: 'css-loader',
              //   fallback: 'vue-style-loader',
              //   // publicPath:
              // }),
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        },

        // babel 编译
        {
          test: /\.(j|e)s$/,
          include: [SRC_PATH],
          exclude: [MODULES_PATH],
          loader: 'babel-loader'
        },

        // json 解析
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        // css 解析
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false }
            }
          ]
        },

        // less 解析
        {
          test: /\.less$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false }
            },
            {
              loader: 'less-loader',
              options: { sourceMap: IS_DEV ? true : false }
            }
          ]
        },

        // sass 解析
        {
          test: /\.sass$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEV ? true : false
              }
            },
          ]
        },

        // stylus 解析
        {
          test: /\.stylus$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false }
            },
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: IS_DEV ? true : false
              }
            },
          ]
        },

        // postcss 解析
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV ? true : false,
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
            name: './fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.vue', '.es', '.js', '.css', '.scss', '.json'],
      alias: {
        'static': STATIC_PATH,
        'assets': path.join(SRC_PATH, 'assets'),
        'components': path.join(SRC_PATH, 'components'),
      }
    },
    plugins: [
      // PLUGINS.hotModuleReplacementPluginConf(),
      // Pconf.compressionWebpackPluginConf(),
      // PLUGINS.commonsChunkPluginConf({
      //   name: 'vendors',
      //   filename: 'vendors.bundle.js'
      // }),
      // PLUGINS.definePluginConf(OPTIONS.definePluginOptions),
      PLUGINS.uglifyJsPluginConf(),
      // new ExtractTextPlugin("vue.style.bundle.css"),
    ],
    devServer: {
      stats: {
        cached: false,
        colors: true
      },
      hot: true,
      inline: true,
      compress: true,
      contentBase: '.',
      port: 5050,
      host: '0.0.0.0',
      headers: {
        "X-WEB-SERVER": "webpack-dev-server"
      }
    }
  }
  // workflow.plugins = workflow.plugins.concat(PLUGINS.htmlWebPackPluginConf(OPTIONS.htmlPluginOptions));
  return workflow;
}
