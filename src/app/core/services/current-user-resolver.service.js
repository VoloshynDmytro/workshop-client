import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class CurrentUserResolver {

  constructor(authService: AuthService) {
      this.authService = authService;
  }

  resolve() {
    return this.authService.authorize();
  }

}
