import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'workshop-navbar',
  template: require('./navbar.component.jade'),
  styles: [require('./navbar.component.styl')],
})

export class NavbarComponent {

  constructor(authService: AuthService) {
    this.authService = authService;
  }

}
