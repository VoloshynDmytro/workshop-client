import { Component, Compiler, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'workshop-header',
  template: require('./header.component.jade'),
  styles: [require('./header.component.styl')]
})

export class HeaderComponent {

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit() {

  }

}
