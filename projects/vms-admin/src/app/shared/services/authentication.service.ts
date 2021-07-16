import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { LoginRequestModel, LoginResponseModel, LoginErrorModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }
}
