/*
* @Author: lushijie
* @Date:   2017-05-12 14:00:40
* @Last Modified by:   lushijie
* @Last Modified time: 2017-05-27 18:54:52
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

module.exports = function(env) {
  let workflow =  {
    entry: {
      index: `${SRC_PATH}/app.js`
    },
    devtool: IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
    output: {
      path: `${ROOT_PATH}/dist/static/js`, // 生成文件目录
      publicPath: IS_DEV ? '/static/' : '/static/js/', //dev-server
      filename: '[name].[hash:8].js',
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
            loaders: {
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
      IS_DEV ? PLUGINS.hotModuleReplacementPluginConf() : PLUGINS.noopPluginConf(),
      PLUGINS.cleanPluginConf('dist', {root: ROOT_PATH}),
      IS_DEV ? PLUGINS.noopPluginConf() : PLUGINS.transferWebpackPluginConf([{
        from: 'static', to: '../../static' // to 默认为 output.path
      }], {root: ROOT_PATH}),
      PLUGINS.commonsChunkPluginConf({
        name: 'vendor',
        filename: "vendor.[hash:8].js",
        minChunks: function (module, count) {
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(path.join(ROOT_PATH, 'node_modules')) === 0
          )
        }
      }),
      IS_DEV ? PLUGINS.noopPluginConf() : PLUGINS.uglifyJsPluginConf(),
      PLUGINS.definePluginConf(OPTIONS.definePluginOptions),
      PLUGINS.commonsChunkPluginConf({
        // extract webpack runtime and module common to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        name: 'common',
        filename: "common.[hash:8].js",
      })
    ]
  }

  if(OPTIONS.htmlPluginOptions) {
    workflow.plugins = workflow.plugins.concat(PLUGINS.htmlWebPackPluginConf(OPTIONS.htmlPluginOptions));
  }

  return workflow;
}
