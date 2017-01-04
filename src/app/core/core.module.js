import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HeaderComponent, NavbarComponent, FooterComponent, SpinnerComponent, SpinnerService } from './components';
import { CurrentUserResolver } from './services';
import { SharedModule } from './../shared/shared.module';

const CORE_DIRECTIVES = [
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
  SpinnerComponent
];

const CORE_PROVIDERS = [
  SpinnerService,
  CurrentUserResolver
];

@NgModule({
  declarations: [
    ...CORE_DIRECTIVES
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
    ...CORE_DIRECTIVES,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule {}