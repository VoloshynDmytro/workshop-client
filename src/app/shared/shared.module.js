import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SvgIconComponent, CheckboxComponent, SearchBoxComponent } from './components';
import { StartsWithPipe, SafePipe } from './pipes';
import { SvgIconService } from './components'

const SHARED_MODULES = [
  CommonModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
];

const SHARED_PROVIDERS = [
  SvgIconService
];

const SHARED_DIRECTIVES = [
  SvgIconComponent,
  CheckboxComponent,
  SearchBoxComponent
];

const SHARED_PIPES = [
  StartsWithPipe,
  SafePipe
];

@NgModule({
  declarations: [
    ...SHARED_DIRECTIVES, ...SHARED_PIPES
  ],
  imports: [
    ...SHARED_MODULES
  ],
  providers: [
    ...SHARED_PROVIDERS,
    ...SHARED_PIPES
  ],
  exports: [
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES,
    ...SHARED_PIPES
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SharedModule {}
