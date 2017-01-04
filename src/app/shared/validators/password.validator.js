import { FormControl } from '@angular/forms';

export function passwordValidator(password: FormControl) {
  return (password.value && password.value.length >= 8) ? null : {
    validatePassword: {
      valid: false
    }
  }
}