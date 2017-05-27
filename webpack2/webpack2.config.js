/*
* @Author: lushijie
* @Date:   2017-05-12 14:00:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-27 16:48:53
*/
let webpack = require('webpack');
let path = require('path');
let argv = require('yargs').argv;
let OPTIONS = require('./webpack2.options.js');
let PLUGINS = require('./webpack2.plugins.js');

const ROOT_PATH = path.join(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const STATIC_PATH = path.join(ROOT_PATH, 'static');
const MODULES_PATH = path.join(ROOT_PATH, 'node_modules');
const IS_DEV = (argv.env === 'development');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(env) {
  let workflow =  {
    entry: {
      index: `${SRC_PATH}/app.js`
    },
    devtool: IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
    output: {
      path: `${ROOT_PATH}/dist/static`,
      publicPath: '/static/', //dev-server
      filename: '[name].bundle.js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    resolve: {
      extensions: ['.vue', '.es', '.js', '.css', '.scss', '.json'],
      alias: {
        'static': STATIC_PATH,
        'assets': path.join(SRC_PATH, 'assets'),
        'components': path.join(SRC_PATH, 'components'),
      }
    },
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
    },
    module: {
      rules: [
        // eslint 校验
        {
          enforce: 'pre',
          test: /\.(j|e)s$|\.vue$/,
          loader: 'eslint-loader',
          include: [SRC_PATH],
          exclude: [MODULES_PATH],
        },

        // vue 解析
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            // extractCSS: true,
            // loaders: {
            //   css: ExtractTextPlugin.extract({
            //     use: 'css-loader',
            //     fallback: 'vue-style-loader',
            //     // publicPath:
            //   }),
            //   scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            //   sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            // }
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
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: IS_DEV ? true : false, minimize: true }
            }
          ]
        },

        // less 解析
        {
          test: /\.less$/,
          use: [
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
            name: './imgs/[name].[hash:7].[ext]'
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
    plugins: [
      PLUGINS.cleanPluginConf('dist', {root: ROOT_PATH}),

      // split vendor js into its own file
      PLUGINS.commonsChunkPluginConf({
        name: 'vendor',
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        }
      }),
      PLUGINS.commonsChunkPluginConf({
        name: 'vendor',
        filename: "vendor.bundle.js",
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        }
      }),
      PLUGINS.hotModuleReplacementPluginConf(),
      // Pconf.compressionWebpackPluginConf(),
      // new ExtractTextPlugin("vue.style.bundle.css"),
      PLUGINS.friendlyErrorsPluginConf(),
      PLUGINS.uglifyJsPluginConf(),
      PLUGINS.definePluginConf(OPTIONS.definePluginOptions),
      PLUGINS.commonsChunkPluginConf({
        // extract webpack runtime and module common to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        name: 'common',
        filename: "common.bundle.js",
      })
    ]
  }

  if(OPTIONS.htmlPluginOptions) {
    workflow.plugins = workflow.plugins.concat(PLUGINS.htmlWebPackPluginConf(OPTIONS.htmlPluginOptions));
  }

  return workflow;
}
