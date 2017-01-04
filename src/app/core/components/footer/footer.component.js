import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'workshop-footer',
  template: require('./footer.component.jade'),
  styles: [require('./footer.component.styl')],
})

export class FooterComponent {

  constructor(router: Router) {
    this.router = router;
  }

}
