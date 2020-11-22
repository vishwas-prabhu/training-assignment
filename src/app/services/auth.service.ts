import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  username: string = '';

  // localStorage.setItem('user', JSON.stringify({"username": "aa", "password": '12'}));
  
  redirectUrl: string;

  constructor() { }

  isUserLoggedIn(): boolean{
    this.username = localStorage.getItem('loggedUser');
    if(this.username){
      this.isLoggedIn = true;
      return true;
    } else {
    return false;
    }
  }

  checkLogin(username: string, password: string): boolean{
    const users = JSON.parse(localStorage.getItem('users'));

    users.find((item) => {
      if(item.username === username && item.password === password) {
        localStorage.setItem('loggedUser', username);
        this.isLoggedIn = true;
        return true;
      }
    })

    if(!this.isLoggedIn){
      alert('wrong username or password');
      return false;
    }
  }

  changePassword(newPassword){
    const users = JSON.parse(localStorage.getItem('users'));

    users.find((item) => {
      if(item.username === this.username) {
        item.password = newPassword;
      }
    });

    localStorage.setItem('users', JSON.stringify(users));
  }
}
