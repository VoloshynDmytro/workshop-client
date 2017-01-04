import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard {
  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  canActivate() {
    if (this.authService.isLoggedIn)
      return true;

    //Redirect the user before denying them access to this route
    this.router.navigate(['home', { login: true }]);
    return false;
  }

}
