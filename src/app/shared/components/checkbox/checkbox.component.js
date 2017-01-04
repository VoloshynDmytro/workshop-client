import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR =  {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'workshop-checkbox',
  template: require('./checkbox.component.jade'),
  styles: [require('./checkbox.component.styl')],
  providers: [CHECKBOX_VALUE_ACCESSOR]
})

export class CheckboxComponent {

  @Input() value;

  @Input() name;

  @Input() disabled = false;

  @Input() single;

  @Input() label;

  @Output() onChange = new EventEmitter();

  model;

  onModelChange = () => {};

  onModelTouched = () => {};

  hover;

  focused = false;

  checked = false;

  onClick( event, checkbox, focus ) {
    event.preventDefault();

    if(this.disabled) {
      return;
    }

    this.checked = !this.checked;
    this.updateModel();

    if(focus) {
      checkbox.focus();
    }
  }

  updateModel() {
    if(!this.single) {
      if(this.checked)
        this.addValue(this.value);
      else
        this.removeValue(this.value);

      this.onModelChange(this.model);
      this.onChange.emit(this.model);
    }
    else {
      this.onModelChange(this.checked);
      this.onChange.emit(this.checked);
    }
  }

  isChecked() {
    if(!this.single)
      return this.findValueIndex(this.value) !== -1;
    else
      return this.model;
  }

  removeValue(value) {
    var index = this.findValueIndex(value);
    if(index >= 0) {
      this.model.splice(index, 1);
    }
  }

  addValue(value) {
    this.model.push(value);
  }

  onFocus(event) {
    this.focused = true;
  }

  onBlur(event) {
    this.focused = false;
    this.onModelTouched();
  }

  findValueIndex(value) {
    var index = -1;
    if(this.model) {
      for (var i = 0; i < this.model.length; i++) {
        if(this.model[i] == value) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

  writeValue(model) {
    if (model !== this.model) {
      this.model = model;
      //update value and ngModel in input
      if (model && model !== null) {
        this.checked = this.isChecked();
      }
    }
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val) {
    this.disabled = val;
  }

}
