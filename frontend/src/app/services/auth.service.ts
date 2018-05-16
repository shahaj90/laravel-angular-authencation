import { Injectable } from '@angular/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  constructor(
    private token:TokenService
  ) { }

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn())
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

}