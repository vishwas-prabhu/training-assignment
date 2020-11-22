import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit {

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
