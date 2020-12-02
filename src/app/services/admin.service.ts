import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin } from '../admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins: Admin[] = [
    {
      id: 1,
      name: 'Kevin',
      employeeNumber: 'RT02485',
      email: 'Kevin@robosoftin.com',
      type: 'Admin'
    },
    {
      id: 2,
      name: 'John',
      employeeNumber: 'RT02486',
      email: 'John.Doe@robosoftin.com',
      type: 'Admin'
    },
    {
      id: 3,
      name: 'vishwas',
      employeeNumber: 'RT02495',
      email: 'vishwas@robosoftin.com',
      type: 'Super Admin'
    },
    {
      id: 4,
      name: 'vishwas2',
      employeeNumber: 'RT02496',
      email: 'vishwas2@robosoftin.com',
      type: 'Super Admin'
    }
  ];

  constructor() { }

  getAdminList(): Observable<Admin[]> {
    return of(this.admins);
  }

  addNewAdminToAdminList(admin): void {
    this.admins.push(admin);
  }

  updateAdmin({ id, name, employeeNumber, email }): void {
    this.admins.find((item) => {
      if (item.id === id) {
        item.name = name;
        item.employeeNumber = employeeNumber;
        item.email = email;
      }
    });
  }

  deleteAdmin(id): void {
    this.admins.find((item, index) => {
      if (item.id === id) {
        this.admins.splice(index, 1);
      }
    });
  }
}
