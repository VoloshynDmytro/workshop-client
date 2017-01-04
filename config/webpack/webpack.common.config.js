const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../main');


module.exports = function(options) {
  const env = require('../environments/' + options.env);

  return {
    cache: true,
    entry: {},
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: [config.projectRoot],
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0'],
            plugins: ['angular2-annotations', 'transform-decorators-legacy', 'transform-flow-strip-types', 'class-name']
          }
        },
        // encapsulated styles (page/component) resolve as strings, other as css
        {
          test: /^(?!.*component)(?!.*page).*\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus?resolve url&paths[]=node_modules&paths[]=src/app/assets')
        },
        {
          test: /\.(component|page)\.styl$/,
          loader: 'exports?module.exports.toString()!css!postcss!stylus?resolve url&paths[]=src/app/assets'
        },
        {
          test: /\.css/,
          loader: 'style!css'
        },
        {test: /\.jade$/, loader: 'apply!jade', exclude: [config.templates.index]},
        {test: /\.json$/, loader: 'json-loader'},
        // Font Definitions
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[hash].[ext]'
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[hash].[ext]'
        },
        {
          test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[hash].[ext]'
        },
        {
          test: /^(.*\.svg\?v=\d+\.\d+\.\d+)$/,
          loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]'
        },
        // Images
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          loaders: ['file?hash=sha512&digest=hex&name=images/[name].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
        }
      ],
      noParse: [
        /zone\.js\/dist\/.+/,
        /rxjs\/bundles\/.+/,
        /reflect-metadata/
      ]
    },
    postcss: function () {
      return [autoprefixer];
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),
      new SvgStore({
        prefix: '',
        // svgo options
        svgoOptions: {
          plugins: [
            { removeTitle: true }
          ]
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `jade!${config.templates.index}`,
        inject: 'body',
        hash: true,
        title: 'Workshop',
        chunksSortMode: 'dependency',
        coreURL: env.coreUrl,
        env: options.env
      }),
      new ExtractTextPlugin('[name].[chunkhash].css', {
        allChunks: true
      }),
    ]
  };
};
