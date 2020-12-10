import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateEmail(email: string): boolean {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return regEx.test(email);
  }

  validateEmployeeCode(code: string): boolean {
    const regEx = /^RT[0-9]{5}$/;
    return regEx.test(code);
  }

  validateUsername(username: string): boolean {
    const regEx = /([a-z]{1,}\s[a-z]{3,})|([a-z]{3,}\s[a-z]{1,})|([a-z]{3,})/;
    return regEx.test(username);
  }
}
