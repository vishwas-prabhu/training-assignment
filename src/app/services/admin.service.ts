import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins = [
    {
      id: 1,
      name: 'Kevin',
      employeeNumber: 'RT02485',
      email: 'Kevin@robosoftin.com'
    },
    {
      id: 2,
      name: 'John',
      employeeNumber: 'RT02486',
      email: 'John.Doe@robosoftin.com'
    }
  ]

  constructor() { }

  getAdminList(): Observable<any> {
    return of(this.admins);
  }

  addNewAdminToAdminList(admin){
    this.admins.push(admin);
  }

  updateAdmin({id, name, employeeNumber, email}){
    this.admins.find((item) => {
      if(item.id === id){
        item.name = name;
        item.employeeNumber = employeeNumber;
        item.email = email;
      }
    })
  }

  deleteAdmin(id){
    this.admins.find((item, index) => {
      if(item.id === id){
        this.admins.splice(index, 1);
      }
    })
  }
}
