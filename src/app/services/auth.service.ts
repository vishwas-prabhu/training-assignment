import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  // localStorage.setItem('user', JSON.stringify({"username": "aa", "password": '12'}));
  
  redirectUrl: string = '/home';

  constructor() {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  checkLogin(username, password){
    const user = JSON.parse(localStorage.getItem('user'));
    if(username == user.username && password == user.password){
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      alert('wrong username or password');
      return false;
    }
  }
}
