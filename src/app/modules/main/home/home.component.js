import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'workshop-home',
  template: require('./home.component.jade'),
  styles: [require('./home.component.styl')],
})

export class HomeComponent {

  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  ngOnInit() {

  }

}
