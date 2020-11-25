import { Component, Input, OnInit } from '@angular/core';
import { admin } from 'src/app/admin.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() adminCategory;
  admins: admin[];
  newAdmin: admin;
  disableAdd: boolean = false;

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.getAdminList().subscribe(res => this.admins = res);
    this.resetNewAdmin();
  }

  resetNewAdmin() {
    this.newAdmin = {
      id: null,
      name: '',
      employeeNumber: '',
      email: '',
      type: ''
    }
    this.disableAdd = false;
  }

  onClickEditDetailsOfAdmin(admin) {
    this.admins.find((item) => {
      if (item === admin) {
        this.newAdmin = admin;
        this.disableAdd = true;
      }
    });
  }

  onClickUpdateAdmin() {
    this.adminService.updateAdmin({ ...this.newAdmin })
    this.resetNewAdmin();
  }

  onClickDeleteAdmin(id) {
    this.adminService.deleteAdmin(id);
  }
}
