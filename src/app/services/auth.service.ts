import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  username: string = '';
  redirectUrl: string;


  constructor() {
    // localStorage.setItem('users', JSON.stringify([
    //   {"username": "kevin", "password": "kevin"},
    //   {"username": "john", "password": "johnbro"},
    //   {"username": "bob", "password": "bobbro"}
    // ]));
  }


  getUsers(): Array<any> {
    return JSON.parse(localStorage.getItem('users'));
  }

  isUserLoggedIn(): boolean {
    this.username = localStorage.getItem('loggedUser');
    if (this.username) {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  checkUserCredentials(username: string, password: string): boolean {
    this.getUsers().find((item) => {
      if (item.username === username && item.password === password) {
        localStorage.setItem('loggedUser', username);
        this.isLoggedIn = true;
        return true;
      }
    })

    if (!this.isLoggedIn) {
      alert('wrong username or password');
      return false;
    }
  }

  updatePassword(newPassword): void {
    const USERS = this.getUsers()
    USERS.find((item) => {
      if (item.username === this.username) {
        item.password = newPassword;
      }
    });
    localStorage.setItem('users', JSON.stringify(USERS));
  }
}
