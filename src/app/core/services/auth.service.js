import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

const TOKEN_NAME = process.env.AUTH_TOKEN_NAME;

@Injectable()
export class AuthService {

  loggedIn = new Subject();

  constructor() {

  }

  get isLoggedIn() {
    return localStorage.getItem(TOKEN_NAME) ? true : false;
  }

  logIn(userData) {
    // login logic
  }

  logOut() {
    // logout logic
  }

  signUp(userData) {
    // sign up logic
  }

  authorize() {
    // authorize logic (getting authorized user data by token name)
    return null;
  }


}
