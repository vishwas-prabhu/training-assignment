import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins = [
    {
      name: 'Kevin',
      employeeNumber: 'RT02485',
      email: 'Kevin@robosoftin.com'
    },
    {
      name: 'John',
      employeeNumber: 'RT02486',
      email: 'John.Doe@robosoftin.com'
    }
  ]

  constructor() { }

  getAdminList(): Observable<any> {
    return of(this.admins)
  }

  addNewAdminToAdminList(admin){
    this.admins.push(admin);
  }

  deleteAdmin(id){
    this.admins.find((item, index) => {
      if(item.employeeNumber === id){
        this.admins.splice(index, 1);
      }
    })
  }
}
