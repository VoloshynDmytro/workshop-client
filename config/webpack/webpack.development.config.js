const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const commonConfig = require('./webpack.common.config');
const config = require('./../main');
const env = require('../environments/development');

module.exports = webpackMerge(
    commonConfig({env: 'development'}),
    {
      devtool: 'cheap-source-map',
      entry: {
        polyfills: config.webpack.entries.polyfills,
        vendor: config.webpack.entries.vendor,
        main: [config.webpack.entries.main]
      },
      output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: config.publicRoot
      },
      devServer: {
        quiet: true,
        publicPath: '/',
        contentBase: config.publicRoot,
        port: env.devServer.port,
        host: env.devServer.host,
        historyApiFallback:{
          disableDotRule: true
        },
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        }
      },
      plugins: [
        new DashboardPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'CORE_URL': JSON.stringify(env.coreUrl),
            'AUTH_TOKEN_NAME': JSON.stringify('workshop-token')
          }
        }),
      ]
  }
);
