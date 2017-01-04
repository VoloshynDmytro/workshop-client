import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'workshop-spinner',
  template: require('./spinner.component.jade'),
  styles: [require('./spinner.component.styl')],
})

export class SpinnerComponent {
  visible = false;

  constructor(spinner: SpinnerService) {
    spinner.visible.subscribe(visibility => {
      this.visible = visibility;
    });
  }
}
