var IS_DEV = (process.env.NODE_ENV == 'development')
var path = require('path')
var config = require('./config')
var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/main.js'
  },

  //devtool: IS_DEV ? 'inline-source-map' : 'cheap-module-source-map',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: IS_DEV ? '[name].js' : utils.assetsPath('js/[name].[chunkhash:8].js'),
    // chunkFilename: !IS_DEV && utils.assetsPath('js/[id].[chunkhash:6].js')
    chunkFilename: !IS_DEV && utils.assetsPath('js/[name].[chunkhash:8].js')
  },

  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      utils.styleLoaders({
        sourceMap: IS_DEV ? true : config.release.productionSourceMap,
        extract: IS_DEV? false : true
      })
    ]
  },

  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },

  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(IS_DEV ? 'development': 'production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  vue: {
    loaders: utils.cssLoaders({
      //sourceMap: IS_DEV ? true : false,
      //extract: IS_DEV ? false : true
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
