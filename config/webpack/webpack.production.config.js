const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('../main');
const env = require('../environments/production');

module.exports = webpackMerge(
  commonConfig({env: 'production'}),
  {
    devtool: 'cheap-source-map',
    entry: config.webpack.entries,
    output: {
      filename: 'js/[name].[hash].js',
      publicPath: '/',
      path: config.publicRoot
    },
    plugins: [
      // Reduces bundles total size
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: false
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          'CORE_URL': JSON.stringify(env.coreUrl),
          'AUTH_TOKEN_NAME': JSON.stringify('workshop-token')
        }
      })
    ]
  }
);
