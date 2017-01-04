const path = require('path');
const fs = require('fs');

const root = process.cwd();
const projectRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'www');

module.exports = {
  root: root,
  projectRoot: projectRoot,
  publicRoot: publicRoot,
  deployPath: path.join(root, 'www/**'),
  webpack: {
    entries: {
      polyfills: path.join(projectRoot, 'polyfills.js'),
      vendor: path.join(projectRoot, 'vendor.js'),
      main: path.join(projectRoot, 'main.js')
    },
    output: projectRoot,
    common: path.join(root, 'config', 'webpack', 'webpack.common.config.js'),
    production: path.join(root, 'config', 'webpack', 'webpack.production.config.js'),
    development: path.join(root, 'config', 'webpack', 'webpack.development.config.js'),
    staging: path.join(root, 'config', 'webpack', 'webpack.staging.config.js'),
    resolveAssets: path.resolve(projectRoot, 'assets')
  },
  assets: {
    imagesPath: [path.join(projectRoot, 'assets/img/**/*.png'),
      path.join(projectRoot, 'assets/img/**/*.jpg'),
      path.join(projectRoot, 'assets/img/**/*.svg')],
    imagesDest: path.join(publicRoot, 'assets/img/')
  },
  templates: {
    index: path.join(projectRoot, 'index.jade')
  }
};