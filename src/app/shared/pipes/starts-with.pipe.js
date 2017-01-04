import { Pipe } from '@angular/core';

@Pipe({
  name: 'startsWith',
  pure: false
})

export class StartsWithPipe {
  transform(value, field, letters){
    return value.filter((item) => item[field].startsWith(letters));
  }
}