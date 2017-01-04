import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})

export class SafePipe {
  constructor(sanitizer: DomSanitizer){
    this.sanitizer = sanitizer;
  }

  transform(content, type) {
    if (type == 'html')
      return this.sanitizer.bypassSecurityTrustHtml(content);
    else
      return this.sanitizer.bypassSecurityTrustStyle(content);
  }
}
