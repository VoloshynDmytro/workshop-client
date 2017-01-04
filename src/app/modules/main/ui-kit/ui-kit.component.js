import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { SvgIconService } from '../../../shared/components/svg-icon';

@Component({
  selector: 'workshop-ui-kit',
  template: require('./ui-kit.component.jade'),
  styles: [require('./ui-kit.component.styl')]
})

export class UiKitComponent {

  constructor(router: Router, route: ActivatedRoute, svgIconService: SvgIconService) {
    this.glyphs = Object.keys(svgIconService.glyphs);

    this.router = router;
    this.route = route;
  }

}
