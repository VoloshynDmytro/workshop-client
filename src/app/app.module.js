import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

import { CoreModule } from './core/core.module';
import { MainModule } from './modules/main/main.module';
import { AppComponent }  from './app.component';
import { localStorageServiceConfig } from './core';
import { appRouting, appRoutingProviders } from './app.routing';

import './app.styles.styl';

const MODULES = [
  BrowserModule,
  appRouting,
  CoreModule,
  MainModule
];

const PROVIDERS = [
  ...appRoutingProviders,
  LocalStorageService, {
    provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
