import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'workshop-app',
  template: require('./app.component.jade')
})
export class AppComponent {

  title = 'workshop';

  constructor() {

  }

  ngOnInit() {

  }

}
