import gulp from 'gulp';
import webpack from 'webpack';
import config from '../../config/main.js';
import colorsSupported from 'supports-color';
import parseArgs from 'minimist';
import gutil from 'gulp-util';


gulp.task('build', (cb) => {
  let argv  = parseArgs(process.argv);

  if (argv.staging) {
    var webpackConfig = require(config.webpack.staging);
  } else if (argv.production) {
    var webpackConfig = require(config.webpack.production);
  } else {
    throw new gutil.PluginError({
      plugin: 'deploy',
      message: gutil.colors.red('Missing or invalid target')
    });
  }

  webpack(webpackConfig, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }
    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true,
      children: false
    }));
    cb();
  });

});
