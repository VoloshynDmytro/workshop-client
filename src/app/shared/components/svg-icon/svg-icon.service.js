import { Injectable } from '@angular/core';
import svgXHR from 'webpack-svgstore-plugin/src/helpers/svgxhr';
var files = require.context("../../../../assets/img/svg", false, /\.svg$/);

const __sprite__ = {
  path: '../../../../assets/img/svg/*.svg',
  name: 'images/sprite.[hash].svg'
};
svgXHR(__sprite__);

@Injectable()
export class SvgIconService {

  constructor() {
    this.glyphs = {};
    this.resolveIcons();
  }

  resolveIcons() {
    files.keys().forEach(file => {
      var name = /^\.\/(.*)\.svg$/.exec(file)[1];
      if (name)
        this.glyphs[name] = `#${name}`;
    })
  }

}
