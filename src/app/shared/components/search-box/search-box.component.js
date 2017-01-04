import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'workshop-search-box',
  template: require('./search-box.component.jade'),
  styles: [require('./search-box.component.styl')],
})

export class SearchBoxComponent {

  searchInput = new FormControl();

  @Input() placeholder = 'Search...';

  @Input() delay = 1000;

  @Output() update = new EventEmitter();

  ngOnInit() {
    this.searchInput.valueChanges
        .debounceTime(this.delay)
        .distinctUntilChanged()
        .subscribe(value => {
          this.update.emit(value)
        })
  }

}
