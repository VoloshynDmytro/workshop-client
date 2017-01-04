import { RouterModule, PreloadAllModules }  from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService, AuthGuard } from './core';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

export const appRoutingProviders = [
  AuthService,
  AuthGuard,
  { provide: APP_BASE_HREF, useValue: '/' }
];

export const appRouting = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
