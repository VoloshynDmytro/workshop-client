import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {

  isLoading = false;

  visible = new Subject();

  constructor() {
  }

  show() {
    if ( !this.isLoading ) {
      this.visible.next(true);
      this.isLoading = true;
    }
  }

  hide() {
    this.isLoading = false;
    this.visible.next(false);
  }

}
