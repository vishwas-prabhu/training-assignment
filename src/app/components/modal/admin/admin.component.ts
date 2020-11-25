import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() adminCategory;
  admins;
  newAdmin;
  disableAdd= false;

  constructor(public adminService: AdminService) {
   }

  ngOnInit(): void {
    this.adminService.getAdminList().subscribe(res => this.admins = res);
    this.resetNewAdmin();
  }

  resetNewAdmin(){
    this.newAdmin = {
      id: null,
      name: '',
      employeeNumber: '',
      email: '',
      type: ''
    }
    this.disableAdd= false;
  }

  editDetailsOfAdmin(admin){
    this.admins.find((item) => {
      if(item === admin){
        this.newAdmin = admin;
        this.disableAdd = true;
      }
    });
  }

  onClickUpdateAdmin(){
    this.adminService.updateAdmin({...this.newAdmin})
    this.resetNewAdmin();
  }

  deleteAdmin(id){
    this.adminService.deleteAdmin(id);
  }
}
