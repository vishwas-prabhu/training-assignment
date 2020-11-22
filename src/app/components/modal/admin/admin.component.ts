import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admins;

  constructor(public admin: AdminService) { }

  ngOnInit(): void {
    this.admin.getAdminList().subscribe(res => this.admins = res);
  }

  newAdmin = {
    name: '',
    employeeNumber: '',
    email: ''
  }

  disableAdd= false;

  editDetailsOfAdmin(admin){
    this.admins.find((item) => {
      if(item === admin){
        this.newAdmin = admin;
        this.disableAdd = true;
      }
    })
  }

  deleteAdmin(id){
    this.admin.deleteAdmin(id);
  }
}
